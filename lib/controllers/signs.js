const { Router } = require('express');
const Sign = require('../models/Sign');
const router = Router();

router
  .get('/:id', async (req, res) => {
    const sign = await Sign.getById(req.params.id);
    console.log(req.params.id);
    res.json(sign);
  })

  .get('/', async (req, res) => {
    const ids = await Sign.getAll();
    //console.log(ids);
    res.json(ids);
  });

module.exports = router;
