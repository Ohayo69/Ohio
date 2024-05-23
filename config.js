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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_15_05_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDcxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDkyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMixcbiAgICAgICAgMjM2LFxuICAgICAgICA3MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU4LFxuICAgICAgICAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExLFxuICAgICAgICAxNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAzOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDg3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA3OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MixcbiAgICAgICAgODIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMixcbiAgICAgICAgODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDkwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgxLFxuICAgICAgICA0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMixcbiAgICAgICAgODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MixcbiAgICAgICAgMjI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTksXG4gICAgICAgIDM3LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRIK1c2d1FxYm5BU0VzWTY5NEV1WnI0ZUwwSVF2WDRTek9qSEdvTEJJZWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4MzgwMzQ4OTc0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTIxMUU2QjRBQjkwNDE2RTM3OTY4MjUwRjgxMjcyMEZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NTA2MTE1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4MzgwMzQ4OTc0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkRBRjBDMjM4MUJDMzFCRDRDRkE1MEI0MzhBNkZERTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NTA2MTE3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5LOGlhbndNUXp5ZVY1elBOaWRMbGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTVlYmMxNzctMGVjMS00YjIwLTg4MWEtOWE3MTE0NTM1MGM0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgNDQsXG4gICAgICA2NyxcbiAgICAgIDEzMixcbiAgICAgIDI5LFxuICAgICAgNDgsXG4gICAgICA2OSxcbiAgICAgIDMwLFxuICAgICAgMjExLFxuICAgICAgMjU0LFxuICAgICAgMTAzLFxuICAgICAgMTg0LFxuICAgICAgMjA3LFxuICAgICAgMTI5LFxuICAgICAgMzcsXG4gICAgICAxMDQsXG4gICAgICA3NyxcbiAgICAgIDMzLFxuICAgICAgMjE5LFxuICAgICAgNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA4LFxuICAgICAgMTA4LFxuICAgICAgMTI2LFxuICAgICAgMjE0LFxuICAgICAgMTA1LFxuICAgICAgMjIzLFxuICAgICAgMjEwLFxuICAgICAgNDUsXG4gICAgICAyNTQsXG4gICAgICAyNTUsXG4gICAgICAxODcsXG4gICAgICAyNDMsXG4gICAgICAxMDgsXG4gICAgICA0NyxcbiAgICAgIDIyMyxcbiAgICAgIDE3MSxcbiAgICAgIDQ2LFxuICAgICAgOCxcbiAgICAgIDE0MSxcbiAgICAgIDE1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCMUhESlY4RFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNjI4MzgwMzQ4OTc0NzoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTg3MzU1MzMxODU0NDYwOjI0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkxvdG5veHpcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQT0VvOWdCRVB5YnY3SUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImdVampzejg5bW0wRW9OTnVtRGRkalFKck1oaXRlN3hGSjkwNWphTnJQM1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYlhPQzJaTjU3NGd1K1hQR3lod1FoUEFMdmV3aEFmT05UdEQ3NnJwOFJxc3loVjQyK3ZtTjR5Q1FPV0VWVEV2SEhsYWxpMnBNWk51N0FIeUJzZ2p5QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibWJwUWJFOTI4VDVyRi8vMWhRS2JyVEpEYU1ORVFReDdhdzZSdytzQ1M4dGJCdGhBWmNxb1h1TXhYbEVQTHljQWVVVXMzRFlING1IWnlyeTRLMThraWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNjI4MzgwMzQ4OTc0NzoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjUwNjExMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdjOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2M4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiS1lmMFJGWjRyNUIzb1BLWC84TmZhLzNRN2k0bFNsN2I4SWE1ZjZpNjBYND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NTM1NTg4OTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjUwNjExMzI1NVwifSIKfQ=="  // PUT your SESSION_ID 


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
