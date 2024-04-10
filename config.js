const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = ["212614195069"]
global.mongodb = "mongodb+srv://KING-MDBOT:KING-MDBOT@cluster0.ltjjfkx.mongodb.net/?retryWrites=true&w=majority"
global.port= 6000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/oussamaoutar'
global.location = 'morocco'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = '212614195069'
global.devs = '212614195069';
global.website = 'https://github.com/oussamaoutar' // Hello world
global.THUMB_IMAGE = 'https://telegra.ph/file/3ab5c6c6412c1d07c350f.png
module.exports = {
  botname: 'OSAMA-OT-MD',
  ownername: 'OUSSAMA OT',
  sessionName: 'DARKSHAN;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0cvUW9jcmROWnh6WTgrR25UaDVuNnJzWDUyYTZBRTVIc2UwdnlKd1hGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkt0akFkZExNWG84eWIwb1FyV0Q0MmhTZnZZeGhwQ2JIMVBpSU9zYm1Tbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTlpFMzgxNTJOdCtmd3JoNnBlMThWNmdyUy9sNndMZ2tBTlF3cEFrQzBNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4dVZ5aVJmTkNUNGFsaFdLeGtUekVidHVROXF3R3JOa1gyMWFsdnVYblJJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNEUDEzZFc3TnJXTC9VdTlCZ1Yva1NLZnk5NmFhUUJDWm8rblZNMmNvMmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9jcm9ocFNHb1VxOWZ2Umt0T3VMYk9kRTVJTE5aYlB3RDB6UHNKUWRJUlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEtWMUEwaDRZbHlXZm1ucklvbzRFY1R4Y2hyTjJKMHp5Z1krQ2thTktuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM3h1RXRGbWxweTExMHpLTTRiVjgxclZtWERBRTBBdGZ3d0VSSmg5Qk9FMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZjL0NwNHNqb3ZqQjhVd2pkaGdEbWVnaHVPUzdHNCs4NE0wQnkzeHdsVko5K1UydGtzaUN4VHpiLzJVTytBMWQwNW1zMXhiRmZ2NzNYMURUMnhPd0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjcsImFkdlNlY3JldEtleSI6IlFhQnRBZ2FKVm5iaGg0WWZ4ZCtrdmdIcHhpTEJCU1Z3di9vSzBIS1NJSmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjEyNjE0MTk1MDY5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk0NjA1NEFFMTY4QTg5MDFGNjRFM0FEOUIxQzEyOEUwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTI3NTY3NzV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIxMjYxNDE5NTA2OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFMTZCQUMzQkZBMjk5QzJGMDNBRTI3MkI3OTBGMDcyMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzEyNzU2Nzc1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzY2daUTBLSlJ5aURxaGdrWjA4cnNnIiwicGhvbmVJZCI6ImU4MWU1YmQzLTZlZTYtNDNlMS1iZjVmLWM5ZWUxZmI5MzdkYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Qm1mVmpmUzZKekZ1QUlaMlRJeUxBamxtazQ9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFyVDNFWW5mWnAxS0ZPdFZyaXpRdFhWajVLWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0s2RXBaa0RFSm13MnJBR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImlyNU56ZVpkV21ZZVpMUktYVnpUTk12UHFPckFmNWdjeEcyeVU1dzkxWHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6InpFeTFESTh1b3R3cFlWN2kzamk2QkVNbCtobWI2VUg3Z0dFZDV3K0pzd25qSlBOelRkT0hUUXF5VnZGYUlZSVJSbVVTc0FBMFk3K0V4bTJSTUhpMUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxbXNMWHlncWxYWHNCY3BZZmp0RkF1SkJMOXBxREFDSG1Nanl5RFBOcC9ka1ZqeTlXbkNxU0s1Y2ZqQzlaKzlHYk1Fc0xvKy9xN3g1bVZDclg3eWFEUT09In0sIm1lIjp7ImlkIjoiMjEyNjE0MTk1MDY5Ojc2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTM0NTI3MjM0MTA5NDYyOjc2QGxpZCIsIm5hbWUiOiIuIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIxMjYxNDE5NTA2OTo3NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZcStUYzNtWFZwbUhtUzBTbDFjMHpUTHo2anF3SCtZSE1SdHNsT2NQZFY4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzEyNzU2NzczLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1GYiJ9',
  author:  'OUSSAMA OT',
  auto_read_status :  'false',
  packname:  'OUSSAMA OT',
  autoreaction:  'false' ,
  antibadword :  '',
  alwaysonline:  true,
  antifake : '999',
  readmessage:  false,
  auto_status_saver: false,
  HANDLERS:  '.',
  warncount : 3,
  disablepm: false,
  levelupmessage:  false,
  antilink:  '',
  antilinkaction: 'remove',
  BRANCH: 'main', 
  ALIVE_MESSAGE:  'im alive',
  autobio:  true,
  OPENAI_API_KEY:  false,
  heroku:  false,
  HEROKU: {
    HEROKU: false,
    API_KEY: '',
    APP_NAME: ''
},
  VERSION: 'Ｖ-0.０.１'
  LANG: 'OSAMA-OT',
  WORKTYPE:  'public'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
