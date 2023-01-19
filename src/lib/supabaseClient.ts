import { createClient } from "@supabase/supabase-js";
import { Database } from "./types/supabase";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseServiceKey = import.meta.env.VITE_SUPABASE_SERVICE_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
