let {Router} = require('express');
let router = Router();
let {getCiclista, postCiclista, deleteCiclista, putCiclista, patchCiclista} = require('../controllers/ciclista.controller.js');

router.get('/all', getCiclista);
router.put('/add', postCiclista);
router.delete('/del', deleteCiclista);
router.patch('/upd', patchCiclista);

module.eports = router