let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, usedPrefix, text }) => {
let date = global.botdate
    let { registered, age, lastrampok, lastdagang, lastcodereg, lastberkebon, lasthourly, lastberburu, lastbansos, lastadventure, lastfishing, lastwar, lastduel, lastmining, lastdungeon, lastclaim, lastweekly, lastmonthly } = global.db.data.users[m.sender]

    let healt = global.db.data.users[m.sender].healt
    let usrname = global.db.data.users[m.sender].name
  
    let armor = global.db.data.users[m.sender].armor 
    let warn = global.db.data.users[m.sender].warn
    let premium = global.db.data.users[m.sender].premium
    let pancing = global.db.data.users[m.sender].pancing
    let fdurability = global.db.data.users[m.sender].fishingroddurability
    let role = global.db.data.users[m.sender].role
    let pickaxe = global.db.data.users[m.sender].pickaxe
    let pdurability = global.db.data.users[m.sender].pickaxedurability

    let ikan= global.db.data.users[m.sender].ikan
    let nila= global.db.data.users[m.sender].nila
    let bawal= global.db.data.users[m.sender].bawal
    let lele= global.db.data.users[m.sender].lele
    let udangb= global.db.data.users[m.sender].udang

    let apel = global.db.data.users[m.sender].apel
    let ayamg = global.db.data.users[m.sender].ayamg
    let ayamb = global.db.data.users[m.sender].ayamb
    let sapir = global.db.data.users[m.sender].sapir
    let ssapi = global.db.data.users[m.sender].ssapi
    let kayu = global.db.data.users[m.sender].kayu
    let string = global.db.data.users[m.sender].string
    let emas = global.db.data.users[m.sender].emas
    let besi = global.db.data.users[m.sender].iron
    let batu = global.db.data.users[m.sender].batu
    let sapi = global.db.data.users[m.sender].sapi
    let ayam = global.db.data.users[m.sender].ayam
    let babi = global.db.data.users[m.sender].babi
    let banteng = global.db.data.users[m.sender].banteng
    let pet = global.db.data.users[m.sender].pet
    let kucing = global.db.data.users[m.sender].kucing
    let _kucing = global.db.data.users[m.sender].anakkucing
    let rubah = global.db.data.users[m.sender].rubah
    let _rubah = global.db.data.users[m.sender].anakrubah
    let kuda = global.db.data.users[m.sender].kuda
    let _kuda = global.db.data.users[m.sender].anakkuda
    let diamond = global.db.data.users[m.sender].diamond
    let potion = global.db.data.users[m.sender].potion
    let common = global.db.data.users[m.sender].common
    let makananpet = global.db.data.users[m.sender].makananpet
    let uncommon = global.db.data.users[m.sender].uncommon
    let mythic = global.db.data.users[m.sender].mythic
    let legendary = global.db.data.users[m.sender].legendary
    let level = global.db.data.users[m.sender].level
    let money = global.db.data.users[m.sender].money
    let exp = global.db.data.users[m.sender].exp
    let atm = global.db.data.users[m.sender].atm
    let limit = global.db.data.users[m.sender].limit
    let sampah = global.db.data.users[m.sender].sampah
    let anggur = global.db.data.users[m.sender].anggur
    let jeruk = global.db.data.users[m.sender].jeruk
    let mangga = global.db.data.users[m.sender].mangga                                      
    let pisang = global.db.data.users[m.sender].pisang                                      
    let bibitanggur = global.db.data.users[m.sender].bibitanggur                            
    let bibitjeruk = global.db.data.users[m.sender].bibitjeruk                              
    let bibitapel = global.db.data.users[m.sender].bibitapel
    let bibitmangga = global.db.data.users[m.sender].bibitmangga                            
    let bibitpisang = global.db.data.users[m.sender].bibitpisang
    let { max } = levelling.xpRange(level, exp, global.multiplier)
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
    let sortedgold = Object.entries(global.db.data.users).sort((a, b) => b[1].gold - a[1].gold)
    let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersmoney = sortedmoney.map(v => v[0])
    let usersgold = sortedgold.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    
    let kambing = global.db.data.users[m.sender].kambing
    let kerbau = global.db.data.users[m.sender].kerbau
    let harimau = global.db.data.users[m.sender].harimau
    let monyet = global.db.data.users[m.sender].monyet
    let babihutan = global.db.data.users[m.sender].babihutan
    let panda = global.db.data.users[m.sender].panda
    let gajah = global.db.data.users[m.sender].gajah
    let buaya = global.db.data.users[m.sender].buaya
    
    let paus = global.db.data.users[m.sender].paus
    let kepiting = global.db.data.users[m.sender].kepiting
    let gurita = global.db.data.users[m.sender].gurita
    let cumi = global.db.data.users[m.sender].cumi
    let lumba = global.db.data.users[m.sender].lumba
    let lobster = global.db.data.users[m.sender].lobster
    let hiu = global.db.data.users[m.sender].hiu
    let udang = global.db.data.users[m.sender].udang
    let orca = global.db.data.users[m.sender].orca
    
    let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Inventory'
    let str = `
*╭──────────[ Status ]──────────✧*
├◪ 📡 *Status:* ${premium ? "Premium": "Free"}
├◪ 📇 *Name:* ${usrname} 
├◪ ❤️️ *Health:* ${healt}
├◪ 💹 *Money:* ${money} 💲
├◪ 💳 *Bank:* ${atm} 💲
├◪ 📊 *Level:* ${level}
├◪ ✨ *Exp:* ${exp}
├◪ 📍 *Role:* ${role}
├◪ 🎫 *Limit:* ${limit}
├◪ ${registered ? '🎨 *Age:* ' + age : ''}
*╰───────────────────────────·····*

*╭───────────[ Tools ]───────────✧*
├◪ 🥼 *Armor:* ${armor == 0 ? '❌' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}
├◪ ⛏️ *Pickaxe:* ${pickaxe == 0 ? '❌' : '' || pickaxe == 1 ? 'wooden pickaxe' : '' || pickaxe == 2 ? 'Iron pickaxe' : '' || pickaxe == 3 ? 'Gold pickaxe' : '' || pickaxe == 4 ? 'Diamond pickaxe' : '' || pickaxe == 5 ? 'Netherite pickaxe' : ''}
├◪ ╰ *Durability:* ${pdurability}
├◪ 🎣 *Fishingrod:* ${pancing == 0 ? '❌' : '' || pancing == 1 ? 'kail pancing kayu' : '' }
├◪ ╰ *Durability:* ${fdurability}
*╰───────────────────────────·····*

*╭──────────[ Kandang ]──────────✧*
├◪ 🐔 *Ayam:* ${ayam}    
├◪ 🐐 *Kambing:* ${kambing}
├◪ 🐄 *Sapi:* ${sapi} 
├◪ 🐃 *Kerbau:* ${kerbau}
├◪ 🐖 *Babi:* ${babi}    
├◪ 🐅 *Harimau:* ${harimau}
├◪ 🐂 *Banteng:* ${banteng} 
├◪ 🐒 *Monyet:* ${monyet}
├◪ 🐗 *Babi Hutan:* ${babihutan}
├◪ 🐼 *Panda:* ${panda}
├◪ 🐘 *Gajah:* ${gajah}
├◪ 🐊 *Buaya:* ${buaya}
│
├───────────────────────────◪
├◪ 💬 *Total Hewan:* ${ buaya + gajah + panda + babihutan + monyet + harimau + kerbau + kambing + ayam + sapi + babi + banteng } tangkapan
*╰───────────────────────────·····*

*╭───────────[ Kolam ]───────────✧*
├◪ 🐋 *Orca:* ${orca}
├◪ 🐳 *Paus:* ${paus}
├◪ 🐬 *Lumba:* ${lumba}
├◪ 🦈 *Hiu:* ${hiu}
├◪ 🐟 *Ikan:* ${ikan}
├◪ 🦀 *Kepiting:* ${kepiting}
├◪ 🦞 *Lobster:* ${lobster}
├◪ 🐙 *Gurita:* ${gurita}
├◪ 🦑 *Cumi:* ${cumi}
├◪ 🦐 *Udang:* ${udang}
├───────────────────────────◪
├◪ 💬 *Total Ikan:* ${orca + udang + hiu + lobster + lumba + cumi + gurita + kepiting + paus  + ikan}
*╰───────────────────────────·····*

*╭──────────[ Inventory ]──────────✧*
├◪ 💎 *Diamond:* ${diamond}
├◪ 🥤 *Potion:* ${potion}
├◪ 🗑️ *Sampah:* ${sampah}
├◪ 🪵  *Kayu:* ${kayu}
├◪ 🕸️ *String:* ${string}
├◪ 🪙  *Gold:* ${emas}
├◪ ⛓  *Iron:* ${besi}
├◪ 🪨  *Batu:* ${batu}
*╰───────────────────────────·····*


*╭───────────[ Food ]───────────✧*
├◪ 🥩 *FoodPet :* ${makananpet}
├───────────────────────────◪
├◪ 🍖 *ayam bakar:* ${ayamb}
├◪ 🍗 *ayam goreng:* ${ayamg}
├◪ 🍖 *Rendang Sapi :* ${sapir}
├◪ 🍢 *steak sapi:* ${ssapi}
├───────────────────────────◪
├◪ 🎒 *Total inv:* ${common + uncommon + mythic + legendary + pet + diamond + potion + besi + emas + string + sampah + kayu + batu + potion + sampah + makananpet + apel + ayamb + ayamg + sapir + ssapi } item
*╰───────────────────────────·····*

*╭─────────[ Fruit & Seed ]─────────✧*
├◪ 🥭 *Mangga:* ${mangga}
├◪ 🍇 *Anggur:* ${anggur}
├◪ 🍌 *Pisang:* ${pisang}
├◪ 🍊 *Jeruk:* ${jeruk}
├◪ 🍎 *Apel:* ${apel}
├───────────────────────────◪
├◪ 🌾 *Bibit Mangga:* ${bibitmangga}
├◪ 🌾 *Bibit Anggur:* ${bibitanggur}                             
├◪ 🌾 *Bibit Pisang:* ${bibitpisang}
├◪ 🌾 *Bibit Jeruk:* ${bibitjeruk}
├◪ 🌾 *Bibit Apel:* ${bibitapel}
*╰───────────────────────────·····*

*╭───────────[ Crate ]───────────✧*
├◪ 📦 *Common:* ${common}
├◪ 🛍️ *Uncommon:* ${uncommon}
├◪ 🎁 *Mythic:* ${mythic}
├◪ 🧰 *Legendary:* ${legendary}
├◪ 📫 *Pet:* ${pet}
*╰───────────────────────────·····*


*╭────────────[ Pet ]────────────✧*
├◪ 🐴 *Kuda:* ${kuda == 0 ? '❌' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}
├◪ 🦊 *Rubah:* ${rubah == 0 ? '❌' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}
├◪ 🐱 *Kucing:* ${kucing == 0 ? '❌' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}
*╰───────────────────────────·····*


*╭───────────[ Progses ]───────────✧*
│╭────────────────
││ 📊 *Level:* ${level} ➠  ${level + 1}
││ ✨ *Exp:* ${exp} ➠ ${max}
│╰────────────────
│╭────────────────
││🦊 *Rubah :* ${rubah == 0 ? '❌' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* ➠ *${rubah + 1}*\n││Exp *${_rubah}* -> *${rubah *100}*` : '' || rubah == 5 ? '*Max Level*' : ''}
│╰────────────────
│╭────────────────
││🐱 *Kucing :* ${kucing == 0 ? '❌' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* ➠ *${kucing + 1}*\n││Exp *${_kucing}* -> *${kucing *100}*` : '' || kucing == 5 ? '*Max Level*' : ''}
│╰────────────────
│╭────────────────
││🐴 *Kuda :* ${kuda == 0 ? '❌' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* ➠ *${kuda + 1}*\n││Exp *${_kuda}* -> *${kuda *100}*` : '' || kuda == 5 ? '*Max Level*' : ''}
│╰────────────────
╰───────────────────────────·····*


*╭───────────[ Cooldown ]───────────✧*
├◪ *Berburu :* ${lastberburu > 0 ? '❌' : '✅'}
├◪ *Memancing :* ${lastfishing > 0 ? '❌' : '✅'}
├◪ *Adventure :* ${lastadventure > 0 ? '❌' : '✅'}
├◪ *Duel :* ${lastduel > 0 ? '❌' : '✅'}
├◪ *War :* ${lastwar > 0 ? '❌'  : '✅'}
├◪ *Dungeon :* ${lastdungeon > 0 ? '❌' : '✅'}
├◪ *Berdagang :* ${lastdagang > 0 ? '❌'  : '✅'}
├◪ *Berkebun :* ${lastberkebon > 0 ? '❌'  : '✅'}
├◪ *CodeReg :* ${lastcodereg > 0 ? '❌'  : '✅'}
├◪ *Rampok :* ${lastrampok > 0 ? '❌'  : '✅'}
├◪ *Mining :* ${lastmining > 0 ? '❌' : '✅'}
├◪ *Fishing :* ${lastfishing > 0 ? '❌'  : '✅'}
├◪ *Bansos :* ${lastbansos > 0 ? '❌' : '✅'}
├◪ *Hourly :* ${lasthourly > 0 ? '❌' : '✅'}
├◪ *Claim :* ${lastclaim > 0 ? '❌' : '✅'}
├◪ *Weekly :* ${lastweekly > 0 ? '❌' : '✅'}
├◪ *Monthly :* ${lastmonthly > 0 ? '❌' : '✅'}
*╰───────────────────────────·····*


*╭──────────[ Achievement ]──────────✧*
├◪ Top 📊 level *${userslevel.indexOf(m.sender) + 1}* dari *${userslevel.length}*
├◪ Top 💹 Money *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}*
├◪ Top 🪙 Gold *${usersgold.indexOf(m.sender) + 1}* dari *${usersgold.length}*
├◪ Top 💎 Diamond *${usersdiamond.indexOf(m.sender) + 1}* dari *${usersdiamond.length}*
├◪ Top 🥤 Potion *${userspotion.indexOf(m.sender) + 1}* dari *${userspotion.length}*
├◪ Top 📦 Common *${userscommon.indexOf(m.sender) + 1}* dari *${userscommon.length}*
├◪ Top 🛍️ Uncommon *${usersuncommon.indexOf(m.sender) + 1}* dari *${usersuncommon.length}*
├◪ Top 🎁 Mythic *${usersmythic.indexOf(m.sender) + 1}* dari *${usersmythic.length}*
├◪ Top 🧰 Legendary *${userslegendary.indexOf(m.sender) + 1}* dari *${userslegendary.length}*
├◪ Top 🗑️ Sampah *${userssampah.indexOf(m.sender) + 1}* dari *${userssampah.length}*
*╰───────────────────────────·····*

${readMore}
⚠️ *Warn:* ${warn}
⛔ *Banned:* No
`.trim()
    //mentionedJid: [number]
    conn.send2Button(m.chat, str, wm, `⋮☰ Back`, `.menu`, `Shop`, `.shop`, m)
    conn.reply(str)
}
handler.help = ['inventory', 'inv']
handler.tags = ['rpg']
handler.command = /^(inv(entory)?|level(ing)?|myinv|e?xp)$/i
handler.register = true
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4201)

let wm = global.botwm
