const express = require('express');
const cors = require('cors');
// const CatchGlobalError = require('../controllers/errorController');
const appError = require('../helpers/error/appError');
const app = express();
require('dotenv').config();
require('./../db/relationShip');
const sql = require('./../db/db');
// const CouponType = require('../db/models/coupontype');

const port = process.env.PORT || 5000;

//middleware
app.use(express.json({ limit: '100MB' }));
app.use(cors());

//router mountain
app.use(require('./routeMountain'));

//start  server
app.listen(port, () => {
  console.log(`app running on port ${port}`);

  //connect to the database
  sql
    .sync({
      //force: true,
      force: false,
      alter: false,
      logging: false
    })
    .then(() => {
      console.log('db connected...');
      // CouponType.bulkCreate([
      //   {
      //     name:'Para todos los clientes',
      //     description:'Para todos los usuario registrado',
      //     state:1
      //   },
      //   {
      //     name:'Mayor 5 pedidos por mes',
      //     description:'Aquellas persona que han realizado mas de 5 pedidos por mes',
      //     state:1
      //   },
      //   {
      //     name:'Mayor 10 pedidos por mes',
      //     description:'Aquellas persona que han realizado mas de 10 pedidos por mes',
      //     state:1
      //   },
      //   {
      //     name:'Mayor 2 x 1',
      //     description:'Si realizas mas de un pedido en el segundo tiene descuento',
      //     state:1
      //   },
      //   {
      //     name:'Por invitar a un amigo',
      //     description:'Si invitas a un amigo a registrar y hacer un pedido',
      //     state:1
      //   }
      // ]);
    })
    .catch((err) => {
      console.log(err);
    });
});

//any other path
app.use('*', (req, res, next) => {
  next(new appError(`No se pudo encontrar la ruta  : ${req.originalUrl} para este servidor...`, 404));
});

//Global error
// app.use(CatchGlobalError);
