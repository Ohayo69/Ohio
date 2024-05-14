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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_38_05_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA5NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MSxcbiAgICAgICAgODksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg3LFxuICAgICAgICAzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3OSxcbiAgICAgICAgODcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY5LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTA2LFxuICAgICAgICAzNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMTg2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDYxLFxuICAgICAgICA3OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDk5LFxuICAgICAgICA2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDM5LFxuICAgICAgICA2NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0LFxuICAgICAgICAzOSxcbiAgICAgICAgMSxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAsXG4gICAgICAgIDc3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDk0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDM0LFxuICAgICAgICA5NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDkzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjExLFxuICAgICAgICA0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1MixcbiAgICAgICAgMjUwLFxuICAgICAgICA4NixcbiAgICAgICAgNjksXG4gICAgICAgIDEzLFxuICAgICAgICA3MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIndCQUx3aGJaRGQ3VkdLU3F5VEl0QllMQUs5bkszOEJlbHdQcml1WDZVVkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4NTg5MjgzMjQ3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjE1Nzk5QTQ0NTUwOTMwRjY3QjUxMEEzOEFCQzkxNjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1NjUwNzI2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4NTg5MjgzMjQ3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEZFMzEwMTk2Njc4QjY0Qjc2NEE0MTAxOTM0NDU2MDFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1NjUwNzI2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdCRUhXVjZJUkYteGdvclRCbTZzVUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDE4OTJiM2ItOTM4ZS00N2I2LTg1MWItYjIzNmUwZDI1NjE2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDI1NCxcbiAgICAgIDQxLFxuICAgICAgMjAsXG4gICAgICAyNTAsXG4gICAgICA4OSxcbiAgICAgIDE1LFxuICAgICAgMTUzLFxuICAgICAgMjIxLFxuICAgICAgNTAsXG4gICAgICAzNSxcbiAgICAgIDE2NyxcbiAgICAgIDUzLFxuICAgICAgMTU2LFxuICAgICAgMTE3LFxuICAgICAgMjAzLFxuICAgICAgMTQ2LFxuICAgICAgMjE2LFxuICAgICAgMzIsXG4gICAgICA2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMSxcbiAgICAgIDI0NCxcbiAgICAgIDU2LFxuICAgICAgMTU4LFxuICAgICAgMzcsXG4gICAgICAxMDEsXG4gICAgICA2MCxcbiAgICAgIDM1LFxuICAgICAgMTc4LFxuICAgICAgMTU0LFxuICAgICAgNDEsXG4gICAgICAyMzcsXG4gICAgICAyNDUsXG4gICAgICAyOSxcbiAgICAgIDE1MyxcbiAgICAgIDY3LFxuICAgICAgMjE2LFxuICAgICAgMTQzLFxuICAgICAgMTk3LFxuICAgICAgMTg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIko5MlkySjRGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI2Mjg1ODkyODMyNDc2OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJQZWRybydzIFtXbmdzYWYgYm90XVwiLFxuICAgIFwibGlkXCI6IFwiMTAyNjMzMDc1NDAwODY1OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSy9PbGZNQkVKNkJpN0lHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKUTJjbjg3WlNZdkpqK1JqcnNFUnZyN2NCeFZRMkJ0TjlEb1U5bHFHeGlNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIllSbUxYMCtuWVlacHJHVkRYMHptWWt5cnRxbXpPQUdBSnFkdi85c0FyUDc0YzRsa1dZL2VCazlMWHJ4M0lmbGVHWGxyckE4Tm5wYzlZOE1MUHR1ZkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNjaDZIZ2wvRUhFbjRzNjJla3VRTjIxaU9LMEFiTkdGT1ZDOHA3MER0UTdqV1Z2YnorRnJpK0ZJL0RHeTgra2JWSmVLYjBtbnE2N29LRFozOFFrUWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjYyODU4OTI4MzI0NzY6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTY1MDcyMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBpUlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGlSLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVE1xYi9IelhLV0lGcXk5VU5wbTNpSWt3bkt6cWRXckJ0RktKQmxiT3N6cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MDk5NjIwMzEsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNSw2LDhdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTY1MDcyNjQxN1wifSIKfQ=="  // PUT your SESSION_ID 


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
