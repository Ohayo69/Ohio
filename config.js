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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_08_05_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDgwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY1LFxuICAgICAgICA4OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDM3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAzMixcbiAgICAgICAgMjEzLFxuICAgICAgICA1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDkzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjksXG4gICAgICAgIDcxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0LFxuICAgICAgICA2NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjksXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTksXG4gICAgICAgIDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMyxcbiAgICAgICAgODMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NCxcbiAgICAgICAgMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDU5LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NixcbiAgICAgICAgODEsXG4gICAgICAgIDk5LFxuICAgICAgICAzLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NSxcbiAgICAgICAgOCxcbiAgICAgICAgODcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDY3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA4MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDE5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTksXG4gICAgICAgIDg3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidlVSazlmYktiNGFvMVpqdVQwRU1wdHBVOXk2Q0JVV2N2MEdmSmlJcTFOaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2Mjg1ODkyODMyNDc2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDE0OTAxMTkyMTI4MTMxQTEzRDkwMjkyMDE2OTFENDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NDQ0NDkyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4NTg5MjgzMjQ3NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhFNkE0NDQzNkU2NkQ3RDVFRjY2MjFCOUU3OUQ0ODBDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjQ0NDQ5MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjYyODU4OTI4MzI0NzY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5RDNCQTE5RUREQkI1NjdCRkIxMkZDMkNFM0UwOUM1NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY0NDQ0OTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2Mjg1ODkyODMyNDc2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMThEMTg5NjgwMzUzMjkwNEM3RDQ5NTk3RjlGMzExMkZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NDQ0NDk0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1FMzZ0Ulp0UW5XT2xJenRDTUNmSXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTQ0YTY5N2QtNzQxMi00ZTk0LTlmMGUtMmQwYTU1MTViMzc2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDEyMCxcbiAgICAgIDI1NCxcbiAgICAgIDM4LFxuICAgICAgOTMsXG4gICAgICAxNzEsXG4gICAgICA0LFxuICAgICAgMTE2LFxuICAgICAgMTc4LFxuICAgICAgMzEsXG4gICAgICAzNyxcbiAgICAgIDcxLFxuICAgICAgMjAyLFxuICAgICAgMzMsXG4gICAgICA2LFxuICAgICAgMTgsXG4gICAgICAyNSxcbiAgICAgIDE2NCxcbiAgICAgIDIzLFxuICAgICAgMTU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDUzLFxuICAgICAgMTcyLFxuICAgICAgOTQsXG4gICAgICAxMzYsXG4gICAgICAxNDksXG4gICAgICAyNTQsXG4gICAgICAyMDMsXG4gICAgICAxOTAsXG4gICAgICA5LFxuICAgICAgMTc1LFxuICAgICAgODksXG4gICAgICAyMjUsXG4gICAgICA0MixcbiAgICAgIDEyOCxcbiAgICAgIDgyLFxuICAgICAgMjI5LFxuICAgICAgMTg3LFxuICAgICAgMTkxLFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFpTWERIVDJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjYyODU4OTI4MzI0NzY2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyODU0NDU3OTUyMjcwMzoyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlBlZHJvc1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B1cTU0RUJFTWk2dTdJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVU50dFVkWkF4WVVvVWF5MFYwazYyOVNBaXhnOE1ZVVpzczRhcjFBSStSND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUWktFM1pVZFNTUHhLR1h4cmc4TGRCRjJKU1RZRlp4Mzl5c0pNd3U0Y0NNTWN6U1ZtekZpM0RWUVRuZ0Q4ZkJHakxrNjd6dVpnRWxBNXhENmhSdlRBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIydFd0blF6VWJURFg2RUs1aTNmUCtTZVJQWXM1R2VlejZ3MGF0V05QWnV3NTJoVDA2TEhNTkRyL3c3dTBQWlBQUHJNdWhPMGUxWmR4cXJqZmpPdWJpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI2Mjg1ODkyODMyNDc2NjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjQ0NDQ5MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdHbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0dsLmpzb24iOiAie1wia2V5RGF0YVwiOlwic2pkS1RBQ1RCdnFHc1hraCs3S1d2NXNnbExTSlQyM1FXckd3YWJRSHBmWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNzIyMjU2NTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
