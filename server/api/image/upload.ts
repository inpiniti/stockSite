import { IncomingForm } from "formidable";
import fs from "fs";

export default defineEventHandler(async (event) => {
  const form = new IncomingForm();
  const supabase = useSupabase();

  const { fields, files }: { fields: any; files: any } = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if (err) {
        reject(err);
      } else {
        resolve({ fields, files });
      }
    });
  });

  if (!files.upload) {
    throw new Error("File not found");
  }

  const file: any = files.upload[0]; // Access the first element of the array

  if (!file) {
    throw new Error("File not found");
  }

  const filePath = file.originalFilename;
  const timestamp = new Date().getTime();
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
    url: `https://etnyrefdmddqiuatswhb.supabase.co/storage/v1/object/public/test/${data.path}`,
  };
});
