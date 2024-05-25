const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Pedrosbot@gmail.com"
global.location="Bandung,Soreang."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Jakarta";
global.github=process.env.GITHUB|| "https://github.com/Torpedro/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/KVh0rVBueteHbeqY1RkDoB";
global.website=process.env.GURL || "https://chat.whatsapp.com/KVh0rVBueteHbeqY1RkDoB" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Torpedros/Suhail-Md/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗣𝗲𝗱𝗿𝗼'𝘀𝗯𝗼𝘁" 


global.devs = "6283803489747" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "6283803489747";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,62xxxxxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,62xxxxxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "6285892832476,62xxxxxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_01_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDU4LFxuICAgICAgICA0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDkyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc0LFxuICAgICAgICA2NixcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDksXG4gICAgICAgIDg5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI3LFxuICAgICAgICA0OCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMixcbiAgICAgICAgNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDk4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQxLFxuICAgICAgICA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NCxcbiAgICAgICAgODksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMTM3LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDczLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYyLFxuICAgICAgICAxODksXG4gICAgICAgIDMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDkzLFxuICAgICAgICA2LFxuICAgICAgICA0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM3LFxuICAgICAgICA3OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUFhKSU4rTExTWDk5bGFXSlFRK0dST2dIV0Fjb2Z6MUcxamVmRk1OU0pYST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2Mjg1ODkyODMyNDc2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkM4QzMwQTMyMDQ1RDU0ODIwODlDQ0JBOUU2MTk2RjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NTk4ODU5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4NTg5MjgzMjQ3NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ4NDZERjM1OUIyNDNGMUI5MzA5NEFEOTE0Mjk3MEFDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjU5ODg2MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjYyODU4OTI4MzI0NzY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDQjFCMERDMzM1N0Y0MzYyRDUyNTk4NEMyM0YyODJDRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY1OTg4NjJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQy1odUtJRldTcUdDWlJUSVQ0QXJOUVwiLFxuICBcInBob25lSWRcIjogXCI4YjBjMzhlZi0yNmM5LTRiNjMtODY5ZS00ODNiYmU3OTU2NjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIsXG4gICAgICAxNzMsXG4gICAgICAyMTYsXG4gICAgICAyMDQsXG4gICAgICAzMyxcbiAgICAgIDY3LFxuICAgICAgMTgzLFxuICAgICAgMTgsXG4gICAgICAyMTYsXG4gICAgICAxMjYsXG4gICAgICAyMixcbiAgICAgIDEyMSxcbiAgICAgIDE5NixcbiAgICAgIDUwLFxuICAgICAgMTc1LFxuICAgICAgNTYsXG4gICAgICAyMSxcbiAgICAgIDQ5LFxuICAgICAgMTkyLFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICA5OCxcbiAgICAgIDEzMSxcbiAgICAgIDksXG4gICAgICAyMzMsXG4gICAgICAyNTAsXG4gICAgICA0MyxcbiAgICAgIDE4NyxcbiAgICAgIDE2OCxcbiAgICAgIDEwOCxcbiAgICAgIDIwOSxcbiAgICAgIDIzMCxcbiAgICAgIDE4NixcbiAgICAgIDIzOSxcbiAgICAgIDIzMixcbiAgICAgIDE5NixcbiAgICAgIDEwNixcbiAgICAgIDQ2LFxuICAgICAgMzIsXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGQ0VLTDUxOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNjI4NTg5MjgzMjQ3NjY6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI4NTQ0NTc5NTIyNzAzOjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi77yw772F772E772S772PJ++9k++9gu+9j++9lFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B5cTU0RUJFTVh3eExJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVU50dFVkWkF4WVVvVWF5MFYwazYyOVNBaXhnOE1ZVVpzczRhcjFBSStSND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1L2ZONmpuaDZzdzBPdHhYb0o2NUZxMTdXRmFTVENCSUoxSWtuZDRGNmlhb1d6SXZINUNxWjNUSWtCQncwM0pzYWQvM0F0eEVIL3dtbTN0YktYYkxDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnTFVxaE1jQTYzT1ExaXorSU5rUlVrMWRwTFpHT2lDNnE3VVhaemZPSll4emRENGdpaEpEaVRqclN1OEc5Tk5tMU54VXJpK1NPczQreVNETzZyeHFpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI2Mjg1ODkyODMyNDc2NjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjU5ODg1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdHbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0dsLmpzb24iOiAie1wia2V5RGF0YVwiOlwic2pkS1RBQ1RCdnFHc1hraCs3S1d2NXNnbExTSlQyM1FXckd3YWJRSHBmWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNzIyMjU2NTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝙋𝙚𝙙𝙧𝙤'𝙨 -𝙢𝙙",
  ownername:process.env.OWNER_NAME|| "𝗣𝗲𝗱𝗿𝗼'𝘀𝗯𝗼𝘁",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-Vu6jr6k8pRb3CgZWL7U3T3BlbkFJDTYouUud4FkUBKeDCSTo",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "7a9d8d3afe8f0d670de5b4fbe15724d5";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
