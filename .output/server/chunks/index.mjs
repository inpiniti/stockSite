import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import cheerio from 'cheerio';
import iconv from 'iconv-lite';

function useSupabase() {
  return createClient(
    "https://etnyrefdmddqiuatswhb.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0bnlyZWZkbWRkcWl1YXRzd2hiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4ODc3MDIsImV4cCI6MjAyMDQ2MzcwMn0.IwIU929Y-H6JsZdvZ2QSEsmbmBLKIND7B7_a3UpRfhs"
  );
}
async function fetchData(base_url, options = "utf-8") {
  const response = await axios.get(base_url, { responseType: "arraybuffer" });
  const html = iconv.decode(Buffer.from(response.data), options);
  const $ = cheerio.load(html);
  return $;
}

export { fetchData as f, useSupabase as u };
//# sourceMappingURL=index.mjs.map
