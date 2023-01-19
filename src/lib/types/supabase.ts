export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      task: {
        Row: {
          created_at: string | null
          description: Json | null
          id: string
          is_completed: boolean
          name: string
          notification: string[] | null
        }
        Insert: {
          created_at?: string | null
          description?: Json | null
          id?: string
          is_completed?: boolean
          name: string
          notification?: string[] | null
        }
        Update: {
          created_at?: string | null
          description?: Json | null
          id?: string
          is_completed?: boolean
          name?: string
          notification?: string[] | null
        }
      }
      user_role: {
        Row: {
          created_at: string | null
          id: string
          role: string
          task_id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: string
          task_id: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: string
          task_id?: string
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
