import { d as defineEventHandler, u as useSupabase } from './user.mjs';
import { IncomingForm } from 'formidable';
import fs from 'fs';
import 'node:http';
import 'node:https';
import 'path';
import '@supabase/supabase-js';
import 'axios';
import 'cheerio';
import 'iconv-lite';
import 'node-cron';
import 'node:fs';
import 'node:url';
import 'ipx';

const upload = defineEventHandler(async (event) => {
  const form = new IncomingForm();
  const supabase = useSupabase();
  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields2, files2) => {
      if (err) {
        reject(err);
      } else {
        resolve({ fields: fields2, files: files2 });
      }
    });
  });
  if (!files.upload) {
    throw new Error("File not found");
  }
  const file = files.upload[0];
  if (!file) {
    throw new Error("File not found");
  }
  const filePath = file.originalFilename;
  const timestamp = (/* @__PURE__ */ new Date()).getTime();
  const fileExtension = filePath.split(".").pop();
  const fileNameWithoutExtension = filePath.replace(`.${fileExtension}`, "");
  const uploadFileName = `${fileNameWithoutExtension}_${timestamp}.${fileExtension}`;
  const { data, error } = await supabase.storage.from("test").upload(uploadFileName, fs.readFileSync(file.filepath));
  if (error) {
    throw error;
  }
  return {
    uploaded: 1,
    fileName: data.path,
    url: `https://etnyrefdmddqiuatswhb.supabase.co/storage/v1/object/public/test/${data.path}`
  };
});

export { upload as default };
//# sourceMappingURL=upload.mjs.map
