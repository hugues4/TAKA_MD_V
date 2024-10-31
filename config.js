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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUppaEorTkxOczJEVHNNVTk3eW1sVUxJMkVUWDU1MEpRcGdSZEhMaVBVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1hMZ3RRbTNJMktYbGJCaVQ4SjNKb0IrVldFV1MvV0MvVTZWVExZVWtFND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSFRNdWpsRWJTRVJYcGdPWEY4VzBGNUFXYytDUk5FL2FqaDJiY0JPQlhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3akticDJGblc3U21TTnpDQVhFZEVtVjBrbW1mS09QMDJZckJKUWp4a21NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNKZ0F4ZzJ3UlJUVUxPM0hST2kwSzBxRGhZbHlHZXB6U0NOc3JQQWtWbms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhlS2psb0kxRHdTcTNSRE9uZW9GUVZSYlZZaWR1TUVVckFsVGNLVDdzVjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0FjUVRRT0dHREtpbXpzTTc1a2N5OERkNU1GL2FkQVZabTZ0R2RhQVRsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkNpRmI5RDROVW8xMVBJR3M1YTE4UjhITEdmTU9sWkZIM3BUTGx2ZXowUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpFM0hhQ29HWWI2dG40eU5qMUtDUXN0N1BKSUVZR3IxUnVJOE91cnV6bnV5b3IyaFFhQTNGNGVBRHJJMkpIekF0eWZwNzl6WE9GQnZSMVZibmsrSkJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6IkVJNExjaFBxV2NabVpJamFoU3E3SWZPaUhPMU9Oei9CWVdxbFpGNnVXVWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjFlSnozYnFmVDBDQUJpQnB1Z2ozTGciLCJwaG9uZUlkIjoiYzE5NWI2MzQtZWVkZS00NWQ0LWIxYjItZmNhNDcwZDE2ZDYwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZoVjR5R3RtRmhYRlo0UUhxcjNkUHkxOE8rST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2WU9lci9CSUJwMm1iQUg0cnFwM3RyRW9yV2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNFZMRFNaN00iLCJtZSI6eyJpZCI6IjIzNzY5Njc1ODgyNjo3MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCH8J2QrvCdkKDwnZCu8J2QnvCdkKwhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJbnV4ZFlGRUlTdWo3a0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxUEE0SzNEcWVhZ1c2TjcrRXc3cHZZU3Q0YXVTLzA1dmNrUC8zMkxJSng4PSIsImFjY291bnRTaWduYXR1cmUiOiJkeGoxeCtIZ2xidVhZYjlvUzhaRk5KMUZyMmJ3YkRRWk9kdm5zSHo5dEFRYWQvb0UwOWpVNjluR04rcjhyaVQ3MWRoWEp4aDh1bUd6bUZidUZuK2loZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUk1Rb2NSMXBCQkZMcEZpcXZGQ3lWK2pwVWErRkVSRGx5U3pDQUhUeWoxS0pQbE1zMWJ3dUZ2Z1d3UWhhaDdhOFRZN0tKeXY3MG80TVRndURrN0lxQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2OTY3NTg4MjY6NzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYWp3T0N0dzZubW9GdWplL2hNTzZiMkVyZUdya3Y5T2IzSkQvOTlpeUNjZiJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDQwMjA2Nn0="
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
