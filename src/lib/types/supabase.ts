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
          created_by: string
          description: Json
          id: string
          is_completed: boolean
          name: string
          notification: string[] | null
        }
        Insert: {
          created_at?: string | null
          created_by: string
          description?: Json
          id?: string
          is_completed?: boolean
          name: string
          notification?: string[] | null
        }
        Update: {
          created_at?: string | null
          created_by?: string
          description?: Json
          id?: string
          is_completed?: boolean
          name?: string
          notification?: string[] | null
        }
      }
      user_role: {
        Row: {
          can_edit: boolean
          created_at: string | null
          id: string
          task_id: string
          user_id: string
        }
        Insert: {
          can_edit?: boolean
          created_at?: string | null
          id?: string
          task_id: string
          user_id: string
        }
        Update: {
          can_edit?: boolean
          created_at?: string | null
          id?: string
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
