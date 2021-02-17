// empty table and insert seeds
exports.seed = (knex) => {
  return knex('extended_countries')
    .del()
    .then(async () => {
      return knex('extended_countries').insert([
        {
          alpha3Code: 'XANG',
          flag: 'https://static.wikia.nocookie.net/papersplease/images/4/47/Antegria_emblem.png',
          name: 'Antegria'
        },
        {
          alpha3Code: 'XARZ',
          flag: 'https://i.imgur.com/gMszxk1.png',
          name: 'Arstotzka'
        },
        {
          alpha3Code: 'XATL',
          flag: 'https://i.imgur.com/ddprV9V.png',
          name: 'Atlantis'
        },
        {
          alpha3Code: 'CAN',
          flag: 'https://i.imgur.com/O6oEdxf.png',
          name: 'Canada'
        },
        {
          alpha3Code: 'XGRN',
          flag: 'https://static.wikia.nocookie.net/orbis-novus/images/d/dd/Grenyarnia.png',
          name: 'Grenyarnia'
        },
        {
          alpha3Code: 'XNAR',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Flag_of_Narnia.svg',
          name: 'Narnia'
        },
        {
          alpha3Code: 'XQUM',
          flag: 'https://i.imgur.com/LkqeQPY.png',
          name: 'Qumar'
        },
        {
          alpha3Code: 'XYOI',
          flag: 'https://i.imgur.com/YIAZ2ZH.png',
          name: 'Yoshi’s Island'
        },
        {
          alpha3Code: 'TLON',
          flag: 'https://i.imgur.com/NPEUo24.png',
          name: 'Uqbar'
        }
      ])
    })
}
