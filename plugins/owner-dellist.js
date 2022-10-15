let handler = async (m, { command, usedPrefix, text }) => {
    if (!text) throw `Gunakan *${usedPrefix}listmsg* untuk melihat daftar nya`
    let msgs = global.db.data.msgs
    if (!(text in msgs)) throw `'${text}' tidak terdaftar di daftar pesan`
    delete msgs[text]
    m.reply(`Berhasil menghapus pesan di daftar pesan dengan nama '${text}'`)
}

handler.help = ['list'].map(v => 'del' + v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(dellist|listdel)$/i

handler.owner = true

export default handler