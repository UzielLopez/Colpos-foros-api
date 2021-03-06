const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send("excelente"));

//Categorias

router.post('/categoria', controllers.createCategorias)
router.get('/categoria', controllers.getAllCategorias);

//Publicaciones

router.post('/publicacion', controllers.createPublicacion);
router.get('/publicacion/:cat', controllers.getAllPublicacion);

//Respuestas

router.post('/respuesta', controllers.createRespuesta);
router.get('/respuesta/:cat', controllers.getAllRespuesta);


module.exports = router;
