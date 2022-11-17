const express = require('express');

const router = express.Router();

const pagesController = require ('../controllers/pagesController');

router.get('/cursos', pagesController.cursos);


module.exports = router;