import supabase, { supabaseUrl } from "./supabase";

export async function updateUser({ password, fullName, avatar }) {
    let updateData;

    if (password) {
        updateData = { password }
    }
    if (fullName) {
        updateData = { data: { fullName } }
    }

    const { data, error } = await supabase.auth.updateUser(updateData);

    if (error) throw new Error(error.message);

    if (!avatar) return data;

    const fileName = `avatar-${data.user.id}-${Math.random()}`

    const { error: storageError } = await supabase.storage.from('avatarss').upload(fileName, avatar);

    if (storageError) throw new Error(storageError.message);

    const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({ data: { avatar: `${supabaseUrl}/storage/v1/object/public/avatarss/${fileName}` } })

    if (error2) throw new Error(error2.message);

    return updatedUser;
}

export async function signUp({ email, password, fullName }) {

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                fullName,
                avatar: ''
            }
        }
    })

    if (error) throw new Error(error.message);

    return data;
}


export async function login({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })
    console.log(data);

    if (error) throw new Error(error.message);

    return data;
}

export async function getUser() {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) return null;

    const { data: user, error } = await supabase.auth.getUser();

    if (error) throw new Error(error.message);

    if (user) return user.user;

}

export async function logoutUser() {
    const { error } = await supabase.auth.signOut();

    if (error) throw new Error(error.message)
}