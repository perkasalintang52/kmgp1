/*
   * Create By KAMAGAPO BOT.
   * Contact Me on wa.me/6281322577123
   * Follow https://github.com/perkasalintang52
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Masukin Apikey', // Ambil apikey di zenz biar fitur yg make api work
}

// Other
global.owner = ['6281322577123','6281322577123','6281322577123']
global.premium = ['6281322577123']
global.ownernomer = '6281322577123'
global.ownername = 'Joceylintangg'
global.botname = 'KAMAGAPO BOT'
global.footer = 'RiychDwayne'
global.ig = 'https://instagram.com/joceylitangg'
global.email = 'joceylintang12345@gmail.com'
global.region = 'Indonesia'
global.sc = '-'
global.myweb = 'https://api-riychdwayne.herokuap.com'
global.packname = 'KAMAGAPO BOT'
global.author = 'WhatsApp Bot'
global.sessionName = 'chika'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./image/chika.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
