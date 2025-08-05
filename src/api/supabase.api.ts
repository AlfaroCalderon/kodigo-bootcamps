import axios from "axios";

export const supabaseApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SUPABASE_URL2,
    headers: {
        "Content-Type": "application/json",
        "apikey": process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY2,
    }
});