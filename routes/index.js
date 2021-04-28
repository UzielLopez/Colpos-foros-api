const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send("excelente"));

/*
Nuestras operaciones van aqui:


*/

module.exports = router;
