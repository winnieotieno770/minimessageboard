var express = require('express');
var router = express.Router();
var app = express()

/* GET home page. */

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'messages', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', {title: 'create a new message'});
});

router.post('/new', (req, res, next) => {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  })
  res.redirect('/');
})

module.exports = router;