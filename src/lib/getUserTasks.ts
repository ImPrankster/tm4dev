import { supabase } from "./supabaseClient";
import { Database } from "./types/supabase";

const getUserTasks = async () => {
  const { data, error } = await supabase.from("task").select("*");
  if (error) {
    throw error;
  } else {
    return data;
  }
};

export type userTasksType = Database["public"]["Tables"]["task"]["Row"][];

export default getUserTasks;
