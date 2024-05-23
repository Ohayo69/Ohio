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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_39_05_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDM3LFxuICAgICAgICA0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MixcbiAgICAgICAgNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MixcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNixcbiAgICAgICAgMTg0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxOSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDk0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NixcbiAgICAgICAgMjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgODIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3OCxcbiAgICAgICAgMyxcbiAgICAgICAgOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNixcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjU0LFxuICAgICAgICA4NixcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1L0ttTWRkTGZGcHVndjkwL2dBSG9ibENhem5ueXI5S2s5dTVRZytXaHRFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjYyODU4OTI4MzI0NzY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNUI4QkFGOTFCQ0FDNDU5RDRFRkEyMDU5MUFBQUE3M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY0NDI3MzRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI2Mjg1ODkyODMyNDc2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRUMyQjA1REIwM0UxNTk4MDM1MEYxRTkyRkMyOUVEQjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NDQyNzM0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4NTg5MjgzMjQ3NjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFGNzAyMUZDMDg2ODQzODc1MDc1MUU3OTFDNkUwMzIxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjQ0MjczNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjYyODU4OTI4MzI0NzY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxRTBBREE5NzM2NzE1M0JGM0JDRjMxQUM1QjUwNTZDNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY0NDI3MzZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaUxfU0QtamNRZi1hTmlLYjQ1a3Jqd1wiLFxuICBcInBob25lSWRcIjogXCIwZGNhZDVkMC0xNGFlLTQyOTAtYjBlMi0zZDIwNmRlY2Y2MzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ5LFxuICAgICAgMTE5LFxuICAgICAgMTUwLFxuICAgICAgMjU0LFxuICAgICAgNixcbiAgICAgIDYxLFxuICAgICAgODUsXG4gICAgICAxNTYsXG4gICAgICAzMixcbiAgICAgIDE4NSxcbiAgICAgIDQyLFxuICAgICAgMTY2LFxuICAgICAgOTgsXG4gICAgICAxODYsXG4gICAgICAxMTgsXG4gICAgICAxNTYsXG4gICAgICAyMTMsXG4gICAgICA4LFxuICAgICAgMjM0LFxuICAgICAgNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgMjU1LFxuICAgICAgNjIsXG4gICAgICAxNjgsXG4gICAgICAzLFxuICAgICAgMTI3LFxuICAgICAgMTk5LFxuICAgICAgMTQsXG4gICAgICAxOTMsXG4gICAgICAyLFxuICAgICAgNTksXG4gICAgICA4OSxcbiAgICAgIDEyOCxcbiAgICAgIDIxNixcbiAgICAgIDg5LFxuICAgICAgMjQzLFxuICAgICAgODIsXG4gICAgICA2MSxcbiAgICAgIDQ4LFxuICAgICAgMTkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZSTlZNUFJNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI2Mjg1ODkyODMyNDc2NjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjg1NDQ1Nzk1MjI3MDM6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJQZWRyb3NcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQcXE1NEVCRU9pc3U3SUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVOdHRVZFpBeFlVb1VheTBWMGs2MjlTQWl4ZzhNWVVac3M0YXIxQUkrUjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOVhhNlBwQ1FQWllpSmdYNVRjQzdHeWZwQUZ0SHBnUGlDdHNGY2gzcU93SmVkejUzM2NiQmFMNEJub2JWdHFIQjZJUnRTVVNONGNMMEFhNGdqOFdvQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL1VhUW85VmJMWEg4Q2UyTnJqTHlYWWZrNS9mUWR0aTlQbjhVZEdFZFJPaU5Ddk51NXEyeWtCWmVrRU9EclNybFlvQ1NIdndoYVAzQ2lOMkZHUm0vaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNjI4NTg5MjgzMjQ3NjY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY0NDI3MzIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHR2xcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdHbC5qc29uIjogIntcImtleURhdGFcIjpcInNqZEtUQUNUQnZxR3NYa2grN0tXdjVzZ2xMU0pUMjNRV3JHd2FiUUhwZlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjcyMjI1NjU4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY0NDI3MzMxODVcIn0iCn0="  // PUT your SESSION_ID 


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
