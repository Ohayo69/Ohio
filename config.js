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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_21_05_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDk5LFxuICAgICAgICA4NixcbiAgICAgICAgNTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNixcbiAgICAgICAgMTgwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgODgsXG4gICAgICAgIDkzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NCxcbiAgICAgICAgNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQzLFxuICAgICAgICA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE5LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjksXG4gICAgICAgIDU5LFxuICAgICAgICA0OCxcbiAgICAgICAgOCxcbiAgICAgICAgNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NixcbiAgICAgICAgNDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDc4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDk5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MixcbiAgICAgICAgMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMSxcbiAgICAgICAgNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhrWXFMZ1FNdkY3dDBXSjNpeEJFN2g5VU5Va2ErQ1BJVjlRTlorZnpIcTQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4MzgwMzQ4OTc0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzUxMDM2Rjg5OTI5MjA4MkMwQzc3ODg5MDI5NUE2QzdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NTAyOTE0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkYwNmhRcjU5UlNhbDA3b1pweWR5dGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiODc3ZWQxYTAtMmQ4Yi00NGU4LTkxZDYtNzBiZmY0YjdmYzdlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMzLFxuICAgICAgMTMsXG4gICAgICAxNCxcbiAgICAgIDEyNCxcbiAgICAgIDI1NSxcbiAgICAgIDEwNyxcbiAgICAgIDE2NSxcbiAgICAgIDExOSxcbiAgICAgIDIsXG4gICAgICAxNjEsXG4gICAgICA2NixcbiAgICAgIDE5NixcbiAgICAgIDg2LFxuICAgICAgMjE0LFxuICAgICAgMjQzLFxuICAgICAgMTc0LFxuICAgICAgMTk0LFxuICAgICAgMjE0LFxuICAgICAgNDcsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNSxcbiAgICAgIDIxLFxuICAgICAgOTcsXG4gICAgICAxMDAsXG4gICAgICAxNTksXG4gICAgICA0OCxcbiAgICAgIDEzOCxcbiAgICAgIDY4LFxuICAgICAgMjM3LFxuICAgICAgNTUsXG4gICAgICA3NyxcbiAgICAgIDg3LFxuICAgICAgMTY2LFxuICAgICAgMzAsXG4gICAgICAyNixcbiAgICAgIDIxOSxcbiAgICAgIDE5MyxcbiAgICAgIDEwMyxcbiAgICAgIDAsXG4gICAgICAyMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjJZOU5XNExcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjYyODM4MDM0ODk3NDc6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4NzM1NTMzMTg1NDQ2MDoyMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJMb3Rub3h6XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEdFbzlnQkVQaUN2N0lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnVWpqc3o4OW1tMEVvTk51bURkZGpRSnJNaGl0ZTd4Rko5MDVqYU5yUDNZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxrM2NranRlTVV0bEllT04vVk1yd2NYL3k3WCtGR0ptSVFzN05hb3I2U0JiRXhDWUdzOUFtcFFkSFAyeEQ5QnJQRUVWR09IWklGVVl2eWpmZmN1YkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlvSmpiTnlldTFvOHd4MHdjbHJPQXY0d2Q1UmZLNG1yWXA5eXRYM3RQcUVxYUFkejNZNHBZQUZpbE03N2I1OXZnU1EwT3gyMU9mQThDa0NuUEY5SkJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjYyODM4MDM0ODk3NDc6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY1MDI5MDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOWmFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5aYS5qc29uIjogIntcImtleURhdGFcIjpcInMxazcyd1NZWC9MV3lFMUFDSkQ2aWozZW9tRWV6MTk3cmxhTDd6U2JWbEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDUzNTU4ODk3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY1MDI5MDg3MjBcIn0iCn0="  // PUT your SESSION_ID 


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
