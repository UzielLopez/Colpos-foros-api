const models = require("../database/models");

const createCategorias = async (req, res) => {
  try {
    const categorias = await models.categoriaPublicacion.create(req.body);
    return res.status(201).json({ categorias })
  } catch (e) { return res.status(500).send(e.message); }
}

const getAllCategorias = async (req, res) => {
  try {
    const categorias = await models.categoriaPublicacion.findAll({
      include: []
    })
    return res.status(200).json({ categorias })
  } catch (e) { return res.status(500).send(e.message); }
}

const createPublicacion = async (req, res) => {
  try {
    const publicacion = await models.Publicacion.create(req.body);
    return res.status(201).json({ publicacion })
  } catch (e) { return res.status(500).send(e.message); }
}

const getAllPublicacion = async (req, res) => {
  try {
    const publicacion = await models.Publicacion.findAll({
      include: []
    })
    return res.status(200).json({ publicacion })
  } catch (e) { return res.status(500).send(e.message); }
}

const createRespuesta = async (req, res) => {
  try {
    const respuesta = await models.respuesta.create(req.body);
    return res.status(201).json({ respuesta })
  } catch (e) { return res.status(500).send(e.message); }
}

const getAllRespuesta = async (req, res) => {
  try {
    const respuesta = await models.respuesta.findAll({
      include: []
    })
    return res.status(200).json({ respuesta })
  } catch (e) { return res.status(500).send(e.message); }
}



module.exports = {
  createCategorias,
  getAllCategorias,
  createPublicacion,
  getAllPublicacion,
  createRespuesta,
  getAllRespuesta
}
