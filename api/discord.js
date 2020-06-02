const express = require('express');

const router = express.Router();

const CLIENT_ID = process.env.716530326662545450;
const CLIENT_SECRET = process.env.ASxfvLVhLtOP5qz-5YvQknu9StsXuij5;
const redirect = encodeURIComponent('http://localhost:50451/api/discord/callback');

router.get('/login', (req, res) => {
  res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect}`);
});

module.exports = router;
