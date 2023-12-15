import supabase from "./supabase"
import { supabaseUrl } from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase.from('cabins').select('*')

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded")
    }

    return data;
}

export async function deleteCabin(id) {
    const { data, error } = await supabase.from('cabins').delete().eq('id', id)
    if (error) {
        console.error(error);
        throw new Error("Cabin could not be deleted")
    }
    return data;
}

export async function createEditCabin(newCabin, id) {
    //This is a sub for optional chaining, which doesn't wor because of extensions
    let hasImagePath = false;
    if (typeof newCabin.image === "string") {
        hasImagePath = newCabin.image.startsWith(supabaseUrl);
    }


    const imageName = `${Math.random()} - ${newCabin.image.name}`.replaceAll("/", "");
    const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    let query = supabase.from('cabins')

    //Create a cabin
    if (!id)
        query = query.insert([{ ...newCabin, image: imagePath }]);

    //Edit a cabin
    if (id)
        query = query.update({ ...newCabin, image: imagePath }).eq('id', id)

    const { data, error } = await query.select().single();

    if (error) {
        console.error(error);
        throw new Error("Cabin could not be created")
    }

    const { error: storageError } = await supabase.storage.from('cabin-images').upload(imageName, newCabin.image)
    if (storageError) {
        await supabase.from('cabins').delete().eq('id', data.id);
        console.error(error);
        throw new Error("Cabin photo could not be uploaded and the Cabin was not created")
    }

    return data;
}