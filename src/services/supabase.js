import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cvglcerjzbldqcevukyw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2Z2xjZXJqemJsZHFjZXZ1a3l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4MTE3MTAsImV4cCI6MjA0OTM4NzcxMH0.wQSdC7dclzWyap29yiXHbUsCs3cH7iTAMsTK--yE0nk";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
