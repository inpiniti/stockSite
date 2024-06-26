import axios from "axios";

export async function coverSave(
  kr: string,
  booknum: number,
  cover_image: string
) {
  console.log("coverSave");

  const decoded = decodeURIComponent(kr || "");

  // 이미 커버가 등록되어 있는 경우는 패스 한다.
  const { data: selectedRows, error: updateError } = await useSupabase()
    .from("cover")
    .select("*")
    .eq("kr", decoded.trim())
    .eq("booknum", booknum);

  console.log("selectedRows", selectedRows);

  if (selectedRows.length != 0) {
    return;
  }

  let img: any = "";
  try {
    img = await saveImage(cover_image);
  } catch (error) {
    console.error(error);
    return;
  }

  console.log("useSupabase");

  // 이미지 저장
  try {
    const storage_rul = `https://etnyrefdmddqiuatswhb.supabase.co/storage/v1/object/public/${img.fullPath}`;

    // 저장된 이미지를 supabase book kr이 같은 걸 조건인 row에 img 필드에 저장
    // 이미지 URL을 데이터베이스에 저장
    const { data: updatedRow, error: updateError } = await useSupabase()
      .from("cover")
      .insert({ kr: decoded, booknum: booknum, cover_image: storage_rul });

    if (updateError) {
      console.error("Error uploading image:", updateError);
    } else {
      console.log("db insert:", updatedRow);
    }
  } catch (error) {
    console.error("error", error);
  }
}

async function saveImage(url: string) {
  const response = await axios.get(`https:${url}`, {
    responseType: "arraybuffer",
  });
  const buffer = Buffer.from(response.data, "binary");

  const urlObject = new URL(`https:${url}`);
  const pathParts = urlObject.pathname.split("/");
  const filename = "private/" + pathParts[pathParts.length - 1];

  const { data, error } = await useSupabase()
    .storage.from("comics")
    .upload(filename, buffer);

  if (error) {
    console.error("Error uploading image:", error);
    // 예외 발생시키기
    throw error;
  } else {
    console.log("File uploaded at:", data);
  }

  return data;
}
