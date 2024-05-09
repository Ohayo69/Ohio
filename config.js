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


global.devs = "6285892832476" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "6285892832476";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_37_05_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDg1LFxuICAgICAgICAwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNyxcbiAgICAgICAgODcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDk3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjksXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExLFxuICAgICAgICAxNDksXG4gICAgICAgIDI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDgzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDM0LFxuICAgICAgICA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMixcbiAgICAgICAgMTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDk0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjksXG4gICAgICAgIDYsXG4gICAgICAgIDY1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNCxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjksXG4gICAgICAgIDcxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDkzLFxuICAgICAgICA3NixcbiAgICAgICAgMTExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjUsXG4gICAgICAgIDQzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwick1vb0lWb1BOdDluZnZxbEFuQWdNS0ptd2xqZGpYZm9lKzZ3d0R3czFUUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2Mjg1ODkyODMyNDc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2N0ZGQ0I5M0M5OUI0OEI0NUQ3QzgzRjFBNzJEOTE5NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTUyNzYyMjdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwielM5MW9rUTdUNGlDS0thR05ZYm9xQVwiLFxuICBcInBob25lSWRcIjogXCJlZmNiOTAyMS04NjliLTQ0NjAtOWUwNi0wNzgyMzA1NDY4ZTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAwLFxuICAgICAgMjQ1LFxuICAgICAgMTQzLFxuICAgICAgODEsXG4gICAgICAyOCxcbiAgICAgIDIzNCxcbiAgICAgIDIxOSxcbiAgICAgIDg1LFxuICAgICAgMzUsXG4gICAgICA0OSxcbiAgICAgIDI1NCxcbiAgICAgIDE1NixcbiAgICAgIDIwNCxcbiAgICAgIDQsXG4gICAgICA0MSxcbiAgICAgIDE4MyxcbiAgICAgIDE5LFxuICAgICAgMTA0LFxuICAgICAgMjgsXG4gICAgICAxMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUzLFxuICAgICAgMTMyLFxuICAgICAgNjksXG4gICAgICAyMDMsXG4gICAgICAxODksXG4gICAgICAxMixcbiAgICAgIDIwMSxcbiAgICAgIDE3MCxcbiAgICAgIDEzNyxcbiAgICAgIDE3NCxcbiAgICAgIDQxLFxuICAgICAgMTQ1LFxuICAgICAgNDAsXG4gICAgICAzOSxcbiAgICAgIDE4NCxcbiAgICAgIDUzLFxuICAgICAgMTU2LFxuICAgICAgMzgsXG4gICAgICAyMTEsXG4gICAgICAxMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFBSUktZR1dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjYyODU4OTI4MzI0NzY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlBlZHJvJ3MgW1duZ3NhZiBib3RdXCIsXG4gICAgXCJsaWRcIjogXCIxMDI2MzMwNzU0MDA4NjU6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLL09sZk1CRUxxVDlMRUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpRMmNuODdaU1l2SmorUmpyc0VSdnI3Y0J4VlEyQnROOURvVTlscUd4aU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTUMrcmVzZ1k4RGN6VDA2OC9hZ1lOUXRyeU04NzAwaHFDL2g3WmtHczNXRlpOYnNDelFwTGQ3aTc5Z2tRMGtFbHlyb2dmdUUvSXRBMjFtVHR0VWdEQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid0RaRkhnVGZkM1ZYaUdISjBnSGZETGU2blhhNXdDb0dUUmtuL2I5ZEpTOERVN2tQVHJ3NkdlU3VlUWVmVTdzRTBFRlF4bTJyY2VKdjZ6Sk5MSVQramc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNjI4NTg5MjgzMjQ3Njo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE1Mjc2MjIxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUGlQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQaVAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiZ3FSNVY4eDRtS3A3dWhxeURySEdUQ3I4Q24wazh2UVk0VDI5Q2RkU0hRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUwOTk2MjAzMSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE1MjczMjc1MjczXCJ9Igp9"  // PUT your SESSION_ID 


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
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
