import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kgelfhmdfcmthugnzdsm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnZWxmaG1kZmNtdGh1Z256ZHNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3NjcwMTEsImV4cCI6MjA0OTM0MzAxMX0.LbzvyRWpXyAQH0yis4xZNqrATzJdUDRVp__OkAYxoDU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
