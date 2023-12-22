import supabase from "./supabase";

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