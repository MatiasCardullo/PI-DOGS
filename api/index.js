//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const axios = require('axios');

const server = require('./src/app.js');
const { conn } = require('./src/db.js');
// const { Dog } = require('./src/db.js');
const { Temperament, Dog } = require('./src/db.js');


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {

  let tempsObj = {};
  axios.get(`https://api.thedogapi.com/v1/breeds`)
    .then(response => {
      response.data?.forEach(breed => {
        let temps = breed.temperament?.split(', ');
        temps?.forEach(t => {

          Temperament.findOrCreate({ where: { name: t } })
            .then((t) => {
              let arrayTemp = tempsObj[breed.id] || [];
              arrayTemp.push(t[0].dataValues.id);
              tempsObj = {
                ...tempsObj,
                [breed.id]: arrayTemp
              }
            })
        });
      })

    })
    .then(() => {
      axios.get('https://api.thedogapi.com/v1/breeds')
        .then((response) => {
          Dog.bulkCreate(response.data.map(breed => ({
            name: breed.name,
            weight: breed.weight.metric,
            height: breed.height.metric,
            life_span: breed.life_span,
            image: breed.image.url,
            apiId: breed.id
          })))
            .then((breeds) => {
              breeds.forEach((b) => {
                b.addTemperament(tempsObj[b.dataValues.apiId]);
              })
            })
            .then(() => console.log('it works'))
        })
    })
    .catch(err => console.error(err));



  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
})

