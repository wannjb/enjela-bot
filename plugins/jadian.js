let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
    let b
    do b = ps[Fl(R() * ps.length)]
    while (b === a)
    m.reply(`Yang baru jadian hari ini\n${toM(a)} ❤️ ${toM(b)}\n Jangan Lupa PJ Ya!!`, null, {
        contextInfo: {
            mentionedJid: [a, b]
        }
    })
}
handler.help = ['jadian']
handler.tags = ['main']
handler.command = ['jadian']
handler.group = true
handler.register = true

module.exports = handler