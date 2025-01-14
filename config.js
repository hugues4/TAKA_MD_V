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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0pFVnB2aG9ZTU5ZUGJQbExPMjFZaVB3MHpGb1NITkpwNlZjdkpxcnZVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGxjc2Q4TUdzWmRZUno3ZlJyRWRGR0JNZXdKd2txVGxLNzZmRXNydUVpOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQkxoY0dUMCtBUTFybVYxL3hLbnFkTTM0ZkRUR294QnNsK3J0UDBRaVVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyUHRHSUp6ak91MzdSZWwzVHI1QlYyTzV6YndqTVJxWHlrTjRlK1p4MzFNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdEdDVLWnN1R2doZG4xWmN1MGZaZzZ4anlwckljcmRkem40ZUlURzdobU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkMyM0ZLc2gycDJoU016dUQ0WGtsWWdzV3owYk5Sak9nR0p1dDZBTnBMeUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ01nSHlKVmdESERDTEZXeUtYZzRZRVoxT2pYVEUwV1RuWDUxbXkzdWwyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0dYakVDKy9zZlY3UkFLUlhkakpuTURTc3IvOXp3ODMzaTE5SDh1THBqYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImYyYXEyZGJXMjZ1d0Z0d01heThSR1BoTE4rcFdxd2F0dTFGL2ZDa3NRcmZpcUQ5WndmTHk1T3BJS0FOSDI4clF5aDdQQ0p4bVFBNEVjSFlXRzZ3R2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgwLCJhZHZTZWNyZXRLZXkiOiJHWGxXK0pmcEFEckpzeVdzajE1RHZPL3Z0cWxoYUtjYzAvSE0vOEJTcHlBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIMkR0NF8zWFNoMmJHMzkzVW1sajhRIiwicGhvbmVJZCI6ImUyMmJlMjU5LTY5MmEtNGFhNy1hNDE2LTU4NDZkZGExNjQyNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiTzd3SDNIVTNjS3ZtemdpOUlnZ1ZOY3pZTDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmdPOUY2QjcxcTVqREVVUDVIeFhSQnAvMWJBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5KMlc3MzhFIiwibWUiOnsiaWQiOiIyMzc2OTY3NTg4MjY6ODZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Qh/CdkK7wnZCg8J2QrvCdkJ7wnZCsISJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkhwd1FzUStiYWJ2QVlZQmlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZkI5UVArR0lHVkpUdlVveDUrWUp2YVdWMEtjK2w1VTZpdkt1YnRadHZRMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiS01xUmFrTEREbHRBZ3FyVC9Xd3JBSjFWKytFSDQzWE03OExGbG5qZVRiVHArSXNNZ2lkRW9zMHRGbzZKc0VUcFJvbUtnUHppQ2VadTA5TnIrb3RaQlE9PSIsImRldmljZVNpZ25hdHVyZSI6Ii9qVGpweUxqRFdpU3lXazZHQmJDZXhuOG10cjJ0cDJ6VXJuU3FCRkI3Y0tOS3UvWGhtSUpMbGFJdjlJcWR0WjV4QlRWYVdVc2tQNzZ0Q1VvMnF6RWhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3Njk2NzU4ODI2Ojg2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlh3ZlVEL2hpQmxTVTcxS01lZm1DYjJsbGRDblBwZVZPb3J5cm03V2JiME4ifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzY4OTEyNzAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRWRUIn0="
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
