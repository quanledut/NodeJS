const express = require('express');
const router = express.Router();
require('./user_router')(router);

module.exports = router;