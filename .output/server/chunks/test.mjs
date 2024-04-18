import { d as defineEventHandler } from './user.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@supabase/supabase-js';
import 'axios';
import 'cheerio';
import 'iconv-lite';
import 'node-cron';
import 'node:fs';
import 'node:url';
import 'ipx';

const test = defineEventHandler(async (event) => {
  console.log("test api");
  return "test api";
});

export { test as default };
//# sourceMappingURL=test.mjs.map
