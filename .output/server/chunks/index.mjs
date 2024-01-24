import axios from 'axios';
import cheerio from 'cheerio';
import iconv from 'iconv-lite';

async function fetchData(base_url, options = "utf-8") {
  const response = await axios.get(base_url, { responseType: "arraybuffer" });
  const html = iconv.decode(Buffer.from(response.data), options);
  const $ = cheerio.load(html);
  return $;
}

export { fetchData as f };
//# sourceMappingURL=index.mjs.map
