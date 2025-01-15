//#ENJOY BRO😍
// Credit: KERM|KgTech
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "huguesbinwe911@gmail.com";
global.location = "yaounde, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/yaounde";
global.github = process.env.GITHUB || "https://github.com/Ch77a/KATA_MD_V";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vci8Frt.jpeg";
global.devs = "";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "237696758826";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/vci8Frt.jpeg,https://i.imgur.com/oG6RiCF.jpeg,https://i.imgur.com/uZLV84s.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kata-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ZVNU9FV1RUSnNJcEtiemNqVHplMHhmTVVkSjlmUDViNW9hQUdXNGkyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFNrS2xLbmUyRUVheVVNK3E0VkUzTTRFOGhWUUtuNTFCemduQmZ2S3J6QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSStBYTVjdnd3clZIcm9tMFA1SWJRUWJuc056QVAxZzJpNVM4TlY1bUVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaZlNkdVRwQU53YWpMbmdXQmc3RW01UzdsdWxiK3dOY0hqVk1ROFp6UTJNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVDMndkeU5qaTBGRmpMdUZ6aE5rWWpKaVZITTgrNDlvYWgwbjg0b2RSMWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ild4SzV2ck93V3JNREFLN0pBb2RmV2p3YjJMK0dNMFVpRUtPUVRYUUU5am89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0xwV203RkQ3MXBOSmdOMEorMzlwZm4vamxoNzZvOTJ4c0pMNENGaEMyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDdQRVVTcDBSZzc5NjVHUm1BTkpPKzFRSHVFSStZZllaM003TjFHUHkzND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFlL3dwU1VGODkzQXYzVUE4RXphcGw4UjFUMkxwbjF3dVUyQ1ZUeVZSZUh3NmVzcmNlWEtJNkdTLzlaMHpYVE0zV2k2djEwZ2FrdGdmVTJrTnlESmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEwLCJhZHZTZWNyZXRLZXkiOiI4bEpENjJOWnQrR3czcm9FZFk1b2VzSU5xMEFRNzR6bk9kVC9OeW1ZSXE4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4d1dWcGpvZVJGdWFpUWRmbW9ZcTdRIiwicGhvbmVJZCI6IjE3NGZmNWU3LWEzYjAtNDBlMS04ZThlLTAwY2FmOWEzNjczYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SlhnNW9qcFNidk9QQW01eGRUUmJBWGR6SlU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWRXbHRpcW5TL1NLOGRpZ1M5M3c2S2tUMXF3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhMQkY5WUdZIiwibWUiOnsiaWQiOiIyMzc2OTY3NTg4MjY6ODdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Qh/CdkK7wnZCg8J2QrvCdkJ7wnZCsISJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkhwd1FzUXNzNmR2QVlZQnlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZkI5UVArR0lHVkpUdlVveDUrWUp2YVdWMEtjK2w1VTZpdkt1YnRadHZRMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoib3I1RzhXMFFOOHo2ZUZQSUNBbmZLRUt0MWVGNWhlS2dWSi9zanBkR0o5a0ZUcHN2QTh2OE85MkhwMGMzVlFVZ2RwNGIvbmU0eHpiNnIrZXA4Y2tiQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IjhWbHV5bXQ2SGppejREbWU3R2lEYWNKVzFLWXg1N2d0b0w4aTQ0NVBVNTkvWXdNUmV3QzhZcFpyYVQweFRMckQ0K2RGVXY3N3VoV0dzZmppS2V5eWd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3Njk2NzU4ODI2Ojg3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlh3ZlVEL2hpQmxTVTcxS01lZm1DYjJsbGRDblBwZVZPb3J5cm03V2JiME4ifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzY5MjcwNDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRWRRIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜HUGUES⌝☜`",
  author: process.env.PACK_AUTHER || "꧁•༆Bins࿇꧂",
  packname: process.env.PACK_NAME || "INTERPOL",
  botname: process.env.BOT_NAME || "INTERPOL",
  ownername: process.env.OWNER_NAME || "☞Hugues☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "HUGUES").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
