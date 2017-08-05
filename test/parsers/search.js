/**
 * Created by Patrik Valkovic
 * 8/5/17.
 */

'use strict'

const fs = require('fs')
const assert = require('assert')
const searchParser = require('../../lib/parsers').search


describe('Parsing of search sites', function () {

  it('Should parse Quentin Tarantino from search page', async function () {
    const content = fs.readFileSync(`${__dirname}/sites/QuentinTarantinoSearch.html`)
    const parsed = await searchParser(content)
    assert.deepStrictEqual(parsed, {
      films: [
        {id: 308772, name: 'Tarantino\'s Mind'},
        {id: 322063, name: 'Tarantino, le disciple de Hong-Kong'},
        {id: 63695, name: 'Tarantino XX - 20 Years of Filmmaking'},
      ],
      people: [
        {id: 2120, name: 'Quentin Tarantino'},
        {id: 53819, name: 'Paul Tarantino'},
        {id: 67762, name: 'Lisa Catara'},
        {id: 98009, name: 'Tony Tarantino'},
      ],
    })
  })

  it('Should parse Pirates of the Caribbean film from search page', async function () {
    const content = fs.readFileSync(`${__dirname}/sites/PiratesOfTheCaribbeanSearch.html`)
    assert.deepStrictEqual(parsed, {
      films: [
        {id: 290818, name: 'Piráti z Karibiku: Salazarova pomsta'},
        {id: 31875, name: 'Piráti ze Silicon Valley'},
        {id: 252716, name: 'Piráti z Karibiku: Na vlnách podivna'},
        {id: 221904, name: 'Piráti z Karibiku: Na konci světa'},
        {id: 194904, name: 'Piráti z Karibiku: Truhla mrtvého muže'},
        {id: 43513, name: 'Piráti z Karibiku: Prokletí Černé perly'},
        {id: 123377, name: 'Pirati della Malesia, I'},
        {id: 28448, name: 'Pirates of Monterey'},
        {id: 128218, name: 'Pirates of Panama'},
        {id: 405963, name: 'Piráti ze Salé'},
        {id: 124739, name: 'Pirates of Tortuga'},
        {id: 46777, name: 'Pirates of Tripoli'},
        {id: 49336, name: 'Vzpoura bukanýrů'},
        {id: 14020, name: 'Piráti z Penzance'},
        {id: 118025, name: 'Pirates of Penzance, The'},
        {id: 143681, name: 'Pirates of Penzance, The'},
        {id: 178850, name: 'Pirates of Penzance, The'},
        {id: 401063, name: 'Pirates of Port Royal'},
        {id: 51547, name: 'Pirates of the Air'},
        {id: 33392, name: 'Pirati della costa, I'},
        {id: 58617, name: 'Pirates of the Deep'},
        {id: 403281, name: 'Pirates of the Pines'},
        {id: 11742, name: 'Pirates of the Plain'},
        {id: 48033, name: 'Pirates of the Prairie'},
        {id: 97363, name: 'Pirates of the Skies'},
        {id: 311836, name: 'Pirates of the Sky'},
        {id: 225949, name: 'Piráti ostrova pokladů'},
        {id: 14232, name: 'Pirates of Blood River, The'},
        {id: 253575, name: 'Pirates of Central Park, The'},
        {id: 152883, name: 'Pirates of the Apartment Complex'},
        {id: 297350, name: 'Pirates of the Caribbean 6'},
        {id: 98664, name: 'Pirates of the High Seas'},
        {id: 304511, name: 'Piráti 21. století'},
        {id: 334201, name: 'Piráti z velkého solného jezera'},
        {id: 297353, name: 'Pirates of the Caribbean: Secrets of Dead Man\'s Chest',},
        {id: 182777, name: 'Pirates of the Caribbean: Tales of the Code: Wedlocked'},
        {id: 297351, name: 'Pirates of the Caribbean: On Stranger Tides 35mm 3D Special'},
        {id: 115898, name: 'Ville des pirates, La'},
        {id: 506695, name: 'Kalózok szeretöje'},
        {id: 146532, name: 'Prince of Pirates'},
        {id: 418775, name: 'The Pirates of Finance'},
        {id: 246838, name: 'Piráti z Pacifiku - Zrada, vášeň, magie a pomsta!'},
        {id: 73672, name: 'Star Trek - Orionští piráti (S02E01)'},
        {id: 92461, name: 'Legenda mysu pirátů'},
        {id: 248239, name: 'Band of Pirates: Buccaneer Island'},
        {id: 297352, name: 'Real Pirates of the Caribbean'},
        {id: 72458, name: 'The Pirates of Dark Water'},
        {id: 53066, name: 'Pirate\'s Code: The Adventures of Mickey Matson'},
        {id: 33389, name: 'Úsvit pirátů'},
        {id: 396051, name: 'Peg of the Pirates'},
        {id: 288022, name: 'Návrat pirátů'},
        {id: 106050, name: 'Secrets of the Pirates\' Inn'},
        {id: 294673, name: 'Piráti!'},
        {id: 361833, name: 'Mórecu Pirates: Abyss of Hyperspace – Akú no šin\'en'},
        {id: 276832, name: 'Ross Kemp: Mezi piráty'},
        {id: 462678, name: 'Mei ren yu zhi hai dao lai xi'},
        {id: 383426, name: 'Piráti silnic'},
        {id: 222602, name: 'Děti z ostrova pokladů'},
        {id: 134357, name: 'Disneyland: From the Pirates of the Caribbean to the World of Tomorrow'},
        {id: 297354, name: 'Journey Behind the Scenes of \'Pirates of the Caribbean: At World\'s End\', A'},
        {id: 202271, name: 'Epic at Sea: The Making of \'Pirates of the Caribbean: The Curse of the Black Pearl\', An'},
        {id: 229756, name: 'Piráti'},
        {id: 7356, name: 'Piráti'},
        {id: 183455, name: 'Pirates'},
        {id: 152925, name: 'Kalózok'},
        {id: 137501, name: 'Pirates'},
        {id: 422632, name: 'Pirates'},
        {id: 322917, name: 'Pirate\'s Blood'},
        {id: 90966, name: 'Pirates Island'},
        {id: 367092, name: 'Pirate\'s Passage'},
        {id: 369301, name: 'Pirate\'s Daughter, The'},
        {id: 453055, name: 'Pirates et compagnie'},
        {id: 3767, name: 'Pirate\'s Gold, The'},
        {id: 99347, name: 'Pirates on Horseback'},
        {id: 351104, name: 'Pirates VS Ninjas'},
        {id: 26013, name: 'Pirates: 3D Show'},
        {id: 454844, name: 'Pirates: Adventures in Art'},
        {id: 48432, name: 'Pirates du rail, Les'},
        {id: 248483, name: 'Pirates II: Stagnetti\'s Revenge'},
        {id: 40637, name: 'Pirates and the Prince, The'},
        {id: 349774, name: 'Piráti'},
        {id: 425986, name: 'Pirates: Quest for Snake Island'},
        {id: 384906, name: 'Pirates and Emperors (or Size Does Matter)'},
        {id: 323580, name: 'Chcete být piráty?'},
        {id: 234580, name: 'Piráti peciválové: Příběhy ze zeleninové země'},
        {id: 246096, name: 'Bikini Pirates'},
        {id: 236640, name: 'CarPirates'},
        {id: 202092, name: 'Skupina Edelweiss'},
        {id: 443963, name: 'Elizabeth\'s Pirates'},
        {id: 319051, name: 'Girl Pirates'},
        {id: 411303, name: 'Rinnsteinspiraten'},
        {id: 262052, name: 'Ilbon haejug'},
        {id: 157776, name: 'Love Pirates'},
        {id: 250305, name: 'Obludy a piráti'},
        {id: 309427, name: 'Mórecu Pirates'},
        {id: 430452, name: 'No Pirates!'},
        {id: 99117, name: 'Petticoat Pirates'},
        {id: 366016, name: 'Pirátské sítě'},
        {id: 434472, name: 'Plunder Pirates'},
        {id: 88455, name: 'Pop Pirates'},
        {id: 194386, name: 'Poultry Pirates'},
        {id: 41835, name: 'Prairie Pirates'},
        {id: 111702, name: 'Radio Pirates'},
        {id: 393998, name: 'Seto\'uči kaizoku monogatari'},
        {id: 101229, name: 'Piráti nebes'},
        {id: 37406, name: 'Sky Pirates'},
        {id: 422896, name: 'Sky Pirates'},
        {id: 408277, name: 'Kar Korsanlari'},
        {id: 183299, name: 'Street Pirates'},
        {id: 185789, name: 'The Pirates'},
        {id: 366029, name: 'Zombie Pirates'},
        {id: 84361, name: 'Black Pirates, The'},
        {id: 271871, name: 'Tian ya guai ke yi zhen feng'},
        {id: 12507, name: 'Good Ole Boy: A Delta Boyhood'},
        {id: 172796, name: 'Social Pirates, The'},
        {id: 189481, name: 'Torpedo Pirates, The'},
        {id: 484149, name: 'Beomseomhaejeokdan seoulbulbada'},
        {id: 14180, name: 'Devil-Ship Pirates, The'},
        {id: 10611, name: 'Přepadení vlaku z Pelhamu'},
        {id: 22137, name: 'Legends of Tomorrow - Marooned (S01E07)'},
        {id: 251638, name: 'Scooby-Doo a piráti'},
        {id: 423863, name: 'Vampires, Pirates and Aliens'},
        {id: 408150, name: 'Všemocný - Když piráti obírají piráty (E08)'},
        {id: 13696, name: 'Poslední pirát'},
        {id: 366274, name: 'Tajemství karibských hlubin'},
        {id: 282106, name: 'Ve Spessartu opět straší!'},
        {id: 207394, name: 'High Desert Pirates'},
        {id: 4156, name: 'Ostrov hrdlořezů'},
        {id: 151740, name: 'Pirátská partie'},
        {id: 17394, name: 'Ledoví piráti'},
        {id: 250879, name: 'Pirátské rádio'},
        {id: 250793, name: 'The River Pirates'},
        {id: 82047, name: 'Three Little Pirates'},
        {id: 228305, name: 'True Caribbean Pirates'},
        {id: 102939, name: 'Piráti 20. století'},
        {id: 286956, name: 'Corto Maltese: Sous le signe du capricorne'},
        {id: 113272, name: 'Poklad na ostrově'},
        {id: 31389, name: 'Alice Foils the Pirates'},
        {id: 17518, name: 'Angels in the Outfield'},
        {id: 263004, name: 'Cheri and the Pirates'},
        {id: 432277, name: 'Lea &amp; skogspiraterna'},
        {id: 406321, name: 'Norah Jones - Chasing Pirates'},
        {id: 184189, name: 'Popeye and the Pirates'},
        {id: 121125, name: 'Sansone contro i pirati'},
        {id: 172801, name: 'Terry and the Pirates'},
        {id: 160105, name: 'Terry and the Pirates'},
        {id: 230843, name: 'Teki wa kaizoku: Nekotači no kjóen'},
        {id: 344102, name: 'Piráti somálských vod'},
        {id: 288344, name: 'Dva malí piráti ze Somálska'},
        {id: 291074, name: 'When We Were Pirates'},
        {id: 530632, name: 'King of the Sea'},
        {id: 14111, name: 'Žlutovous'},
        {id: 3325, name: 'Boy and the Pirates, The'},
        {id: 212071, name: 'Sansone contro il corsaro nero'},
        {id: 300510, name: 'Hon na somálské piráty'},
        {id: 353543, name: 'Piráti od Černého moře'},
        {id: 73405, name: 'Petr Pan a piráti'},
        {id: 75887, name: 'Pete Winning and the Pirates: The Motion Picture'},
        {id: 33396, name: 'Robin Hood e i pirati'},
        {id: 259889, name: 'Město žen - Piráti v Gulfhavenu (S05E04)'},
        {id: 288232, name: 'Zagor kara korsan\' in hazineleri'},
        {id: 289566, name: 'Astro Boy vs. The Junkyard Pirates'},
        {id: 442017, name: 'Loupežníci, piráti a podvodníci'},
        {id: 148079, name: 'Davy Crockett and the River Pirates'},
        {id: 467030, name: 'Masked Rider Den-o Trilogy The Movie Episode Yellow'},
        {id: 274808, name: 'Zachraňte Willyho 4: Útěk z pirátské zátoky'},
        {id: 297091, name: 'Jake a piráti ze Země Nezemě'},
        {id: 237268, name: 'Little Ol\' Bosko and the Pirates'},
        {id: 282440, name: 'Kybernetická guerilla: Hackeři, piráti a tajné války'},
        {id: 357983, name: 'Slavná pětka 3'},
        {id: 252502, name: 'One Piece: Episode of Alabaster – Sabaku no ódžo to kaizokutači'},
      ],
      people: [
        {id: 141927, name: 'Empire of the Sun'},
        {id: 46475, name: 'Kiki of Montparnasse'},
        {id: 321816, name: 'Alexandra Dánská'},
        {id: 251765, name: 'Fabiola de Mora y Aragón'},
        {id: 101869, name: 'král Eduard VIII.'},
        {id: 13080, name: 'Elizabeth of Toro'},
        {id: 144473, name: 'Touko Laaksonen'},
        {id: 321826, name: 'Žofie Nasavská'},
        {id: 101868, name: 'vévodkyně z Windsoru'},
        {id: 310700, name: 'Line of Sight'},
        {id: 311864, name: 'Sonia'},
        {id: 33178, name: 'Akshay Kumar'},
        {id: 54005, name: 'car Mikuláš II. Alexandrovič'},
        {id: 89066, name: 'Kate Middleton'},
        {id: 321815, name: 'Viktorie Bádenská'},
        {id: 314733, name: 'Mattias Bärjed'},
        {id: 233549, name: 'Ron Braunstein'},
        {id: 97581, name: 'princ Charles'},
        {id: 101879, name: 'Alexandr I. Karađorđević'},
        {id: 101881, name: 'král Karel XVI. Gustav'},
        {id: 91283, name: 'král Kristián X.'},
        {id: 101885, name: 'král Leopold III.'},
        {id: 305008, name: 'Albert II. Monacký'},
        {id: 270518, name: 'Camilla Parker-Bowles'},
        {id: 314496, name: 'princ Michael řecký a dánský'},
        {id: 223622, name: 'královna Silvia Švédská'},
        {id: 102907, name: 'princ Bertil Švédský, vévoda z Hallandu'},
        {id: 119337, name: 'princ Filip, vévoda z Edinburghu'},
        {id: 108379, name: 'král Olaf V.'},
        {id: 310430, name: 'král Oskar II.'},
      ],
    })
  })

  it('Should parse Kit Harington from search page', async function () {
    const content = fs.readFileSync(`${__dirname}/sites/KitHaringtonSearch.html`)
    const parsed = await searchParser(content)
  })

})
