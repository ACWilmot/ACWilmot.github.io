export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      class_enrollments: {
        Row: {
          class_id: string
          enrolled_at: string
          id: string
          student_id: string
        }
        Insert: {
          class_id: string
          enrolled_at?: string
          id?: string
          student_id: string
        }
        Update: {
          class_id?: string
          enrolled_at?: string
          id?: string
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "class_enrollments_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
        ]
      }
      classes: {
        Row: {
          class_code: string
          created_at: string
          description: string | null
          id: string
          name: string
          teacher_id: string
        }
        Insert: {
          class_code: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
          teacher_id: string
        }
        Update: {
          class_code?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          teacher_id?: string
        }
        Relationships: []
      }
      homework_assignments: {
        Row: {
          assigned_at: string
          class_id: string
          description: string | null
          difficulty: string
          due_date: string | null
          id: string
          question_count: number
          subject: string
          title: string
        }
        Insert: {
          assigned_at?: string
          class_id: string
          description?: string | null
          difficulty: string
          due_date?: string | null
          id?: string
          question_count: number
          subject: string
          title: string
        }
        Update: {
          assigned_at?: string
          class_id?: string
          description?: string | null
          difficulty?: string
          due_date?: string | null
          id?: string
          question_count?: number
          subject?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "homework_assignments_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
        ]
      }
      homework_attempts: {
        Row: {
          answers: Json | null
          completed: boolean
          completed_at: string | null
          correct_answers: number | null
          homework_id: string
          id: string
          reset_at: string | null
          score: number | null
          started_at: string | null
          student_id: string
        }
        Insert: {
          answers?: Json | null
          completed?: boolean
          completed_at?: string | null
          correct_answers?: number | null
          homework_id: string
          id?: string
          reset_at?: string | null
          score?: number | null
          started_at?: string | null
          student_id: string
        }
        Update: {
          answers?: Json | null
          completed?: boolean
          completed_at?: string | null
          correct_answers?: number | null
          homework_id?: string
          id?: string
          reset_at?: string | null
          score?: number | null
          started_at?: string | null
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "homework_attempts_homework_id_fkey"
            columns: ["homework_id"]
            isOneToOne: false
            referencedRelation: "homework_assignments"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          email: string | null
          Email: string | null
          id: string
          name: string
          progress: Json
          role: string | null
          students: string[] | null
          timestablesprogress: Json | null
          timesTablesProgress: Json | null
        }
        Insert: {
          email?: string | null
          Email?: string | null
          id: string
          name: string
          progress?: Json
          role?: string | null
          students?: string[] | null
          timestablesprogress?: Json | null
          timesTablesProgress?: Json | null
        }
        Update: {
          email?: string | null
          Email?: string | null
          id?: string
          name?: string
          progress?: Json
          role?: string | null
          students?: string[] | null
          timestablesprogress?: Json | null
          timesTablesProgress?: Json | null
        }
        Relationships: []
      }
      questions: {
        Row: {
          correct_answer: string
          created_at: string
          difficulty: string
          explanation: string | null
          id: string
          image_url: string | null
          option_images: Json | null
          options: Json
          subject: string
          text: string
          times_table: number | null
          user_id: string | null
          year: number | null
        }
        Insert: {
          correct_answer: string
          created_at?: string
          difficulty: string
          explanation?: string | null
          id?: string
          image_url?: string | null
          option_images?: Json | null
          options: Json
          subject: string
          text: string
          times_table?: number | null
          user_id?: string | null
          year?: number | null
        }
        Update: {
          correct_answer?: string
          created_at?: string
          difficulty?: string
          explanation?: string | null
          id?: string
          image_url?: string | null
          option_images?: Json | null
          options?: Json
          subject?: string
          text?: string
          times_table?: number | null
          user_id?: string | null
          year?: number | null
        }
        Relationships: []
      }
      student_profiles: {
        Row: {
          created_at: string
          id: string
          name: string
          tutor_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          tutor_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          tutor_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      student_progress: {
        Row: {
          created_at: string
          id: string
          progress: Json
          student_profile_id: string
          subject: string
          times_tables_progress: Json | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          progress?: Json
          student_profile_id: string
          subject: string
          times_tables_progress?: Json | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          progress?: Json
          student_profile_id?: string
          subject?: string
          times_tables_progress?: Json | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_progress_student_profile_id_fkey"
            columns: ["student_profile_id"]
            isOneToOne: false
            referencedRelation: "student_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          stripe_customer_id: string | null
          subscribed: boolean
          subscription_end: string | null
          subscription_tier: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      worksheet_uploads: {
        Row: {
          class_id: string | null
          correct_answers: number
          file_path: string
          id: string
          marked_at: string | null
          name: string
          status: string
          total_questions: number
          uploaded_at: string
          user_id: string
        }
        Insert: {
          class_id?: string | null
          correct_answers?: number
          file_path: string
          id?: string
          marked_at?: string | null
          name: string
          status?: string
          total_questions?: number
          uploaded_at?: string
          user_id: string
        }
        Update: {
          class_id?: string | null
          correct_answers?: number
          file_path?: string
          id?: string
          marked_at?: string | null
          name?: string
          status?: string
          total_questions?: number
          uploaded_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_manage_enrollments: {
        Args: { class_id_param: string; student_id_param: string }
        Returns: boolean
      }
      create_test_class_data: {
        Args: { teacher_email: string; num_students: number }
        Returns: undefined
      }
      generate_class_code: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_teacher_classes: {
        Args: { teacher_id_param: string }
        Returns: {
          id: string
          name: string
          description: string
          created_at: string
          teacher_id: string
          student_count: number
        }[]
      }
      is_enrollment_owner: {
        Args: { enrollment_class_id: string }
        Returns: boolean
      }
      is_profile_owner: {
        Args: { profile_id: string }
        Returns: boolean
      }
      is_teacher_of_class: {
        Args: { class_id: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
