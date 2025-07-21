const router = require('express').Router();


router.get('/vk', function (req, res, next) {
  // .then((token) => {
  //   console.log('redirecting')
  //   console.log('/login?token=' + token)
  //   return token;
  // })
    .then((token) => res.redirect('/login?token=' + token))
    .catch(err => res.redirect('/login?error=' + err));
});

export default router;