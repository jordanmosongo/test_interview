/* eslint-disable no-undef */
const express = require('express');
const { getRoles, createRole } = require('../controllers/role');

const router = express.Router();

router.get('/', getRoles);
router.post('/', createRole);

module.exports = router;