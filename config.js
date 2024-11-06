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
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Ch77a/KATA_MD_V";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vark1I1AYlUR1G8YMX31";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vci8Frt.jpeg";
global.devs = "https://wa.me/237659079843 , https://wa.me/237690768603";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUlQTXdYK3dBdDVjZnZxeGpBdnNYdnVnSW9QRm1mZndIcVZaZGJ2R0FGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHlYQXJjUXJPRjRVeG9tQ3YvWXNBWkNSZXZ1MWkwMlAwS1EzTHhmeXhDYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNUEtFbCtKSW5seHRCL0FmNWgvRHBFTDNaSmcwaitDNURjaUZEL1cweWtvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZTFNd2wybFgrWDE4OVhDUUZhN0Zka3lWMFFlSzVOSmc1S05RQmxpemxnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdIeUJPLzU5T0dqaHNpWU1YS1BJN2VqdFFkYm5QcjQxNTM4OENjM0lCR2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRUblRQWG1mSE5OVVkyck0rRllrazVKdW95WFdJdmpYOWxLMXFVdDlwazA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUUyeGVqMmhYSGIxNEJNODY1Q0xvQnlKTFo2SXhOZjZ6MWVWanNBZXVYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzdWemRCRHA0ZldZa0dCZXJKdktrZXNVWUprZ3ZRSm1QME82SlkrMUdpWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InR2ZTlYZHFxZjErOEM2cVMrTjZnYXVvdkQzZVV0UkZWSmdPTkdEZm1nN0g0Zk4wK0RCTk1ycFFPZVVFczFVZ0ZLMnRCSWhuVHQ1cXA0blY0T252QmhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQxLCJhZHZTZWNyZXRLZXkiOiI0NDB5WkR0ZEhlSk5rUjRuMGQrWkNOb1ZEUWRLUVcrYW9sNXBpQ1c2YzgwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ6Umw5aS1ralQxYVBHVTc5SGVjVHhnIiwicGhvbmVJZCI6ImE4YTkwZDZkLWZlZDAtNGEyNC1hNTQ0LTI5YjE0NWM4YWIyZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMR2hqcVptcHRkTjVTT0Y1UDJoR21QMndjRms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGxKZmc3UjRQSW1STVdlc2FkdjdZRFNvWHFZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBRTE5LSDgzIiwibWUiOnsiaWQiOiIyMzc2OTY3NTg4MjY6ODBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Qh/CdkK7wnZCg8J2QrvCdkJ7wnZCsISJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGVhbjVzQkVNUzRyN2tHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZDhERE9BVG83T3BIZ2VrZkZmam9nT0k0ZXlCemVsZ2g3Sm9CbHlCZHBRST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMmg1TWtyQnI3bWh3UFFtZ2toK2NueFNESkFuSlM3dVM0dWxTTG4ySkh1b2J6bjlmSnpvUVdCaHFBRlZ4UXBJZVIxcmdrL2lBV1JBSXhrakdXYkExZ3c9PSIsImRldmljZVNpZ25hdHVyZSI6ImtKSElkWXRaTGFkS0t0WWwrU2YvMGNkdWhoZ1JKU25BaHdzMTJBamRpd2lqclpxQ0hCc0ZJVi9WQTVvZmVPWTB2V0VJeDNIam1VV1NicTRMNDZQMWl3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3Njk2NzU4ODI2OjgwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhmQXd6Z0U2T3pxUjRIcEh4WDQ2SURpT0hzZ2MzcFlJZXlhQVpjZ1hhVUMifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA5Mjc2OTh9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜D TECH⌝☜`",
  author: process.env.PACK_AUTHER || "꧁•༆Bins࿇꧂",
  packname: process.env.PACK_NAME || "TAKA MD",
  botname: process.env.BOT_NAME || "ᵏᵍ┘TAKA_𝙼𝙳_𝚅𖤐",
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
  LANG: (process.env.THEME || "KERM").toUpperCase(),
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
