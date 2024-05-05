import { u as useState } from './state-t0JlwV5Q.mjs';
import { createClient } from '@supabase/supabase-js';

let supabaseClient;
const useSupabase = () => {
  if (!supabaseClient) {
    supabaseClient = useState(
      "supabase",
      () => createClient(
        "https://etnyrefdmddqiuatswhb.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bnlyZWZkbWRkcWl1YXRzd2hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4ODc3MDIsImV4cCI6MjAyMDQ2MzcwMn0.IwIU929Y-H6JsZdvZ2QSEsmbmBLKIND7B7_a3UpRfhs"
      )
    );
  }
  return supabaseClient;
};

export { useSupabase as u };
//# sourceMappingURL=useSupabase-g_fbflW8.mjs.map
