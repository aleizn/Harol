let handler = async (m, { conn }) => {
try {
let pp = imagen4
let img = imagen5
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `ââ[ *ðððð¦ ððð ðð®ð¥ð¥ð¬* ]
â *â¤ ð·ð¾ð»ð° ${taguser}*
â
â *=â¢ ð¤ TIEMPO ACTIVO:* ${uptime}
â *=â¢ ð CREADOR: Aleizn*
â *=â¢ ð PAGINA OFICIAL:* Aleizn.git
âââââââââââââââââ`.trim()
let buttons = [{ buttonId: '#menu', buttonText: { displayText: ' ð¼ð´ð½ð ð¿ðð¸ð½ð²ð¸ð¿ð°ð» â' }, type: 1 }]
let buttonMessage = { image: pp, caption: str.trim(), mentions: [m.sender], footer: global.wm, buttons: buttons, headerType: 4, contextInfo: { mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true, mediaType: 'VIDEO', mediaUrl: null, title: 'PÃGINA OFICIAL', body: 'Aleizn', thumbnail: img, sourceUrl: `https://dorrat-bot-oficial.ml/`}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)    
throw `*ð¤ TIEMPO ACTIVO:* ${uptime} â ð BY Aleizn â ð PAGINA OFC: dorrar-bot-oficial.ml`}}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats)$/i
export default handler
function clockString(ms) {
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [`\nâ *=â¢ â±ï¸ ` + d, ' DÃ­a(s)* ', `\nâ *=â¢ â ` + h, ' Hora(s)* ', `\nâ *=â¢ ð°ï¸ ` + m, ' Minuto(s)* ', `\nâ *=â¢ â²ï¸ ` + s, ' Segundo(s)* '].map(v => v.toString().padStart(2, 0)).join('')}
