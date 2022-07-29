const { Router } = require('express');
const Sign = require('../models/Sign');
const router = Router();

router.get('/', async (req, res) => {
  const ids = await Sign.getAll();
  //console.log(ids);
  res.json(ids);
});

module.exports = router;
