import { u as useState } from './state-JJ2SDzd5.mjs';
import { createClient } from '@supabase/supabase-js';

const useSupabase = () => {
  return useState(
    "supabase",
    () => createClient(
      "https://etnyrefdmddqiuatswhb.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bnlyZWZkbWRkcWl1YXRzd2hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4ODc3MDIsImV4cCI6MjAyMDQ2MzcwMn0.IwIU929Y-H6JsZdvZ2QSEsmbmBLKIND7B7_a3UpRfhs"
    )
  );
};

export { useSupabase as u };
//# sourceMappingURL=useSupabase-4R9Br0h-.mjs.map
