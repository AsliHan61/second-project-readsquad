const router = require("./auth.routes");

router.get('/comment/create', (req, res) => res.render('comment/new-comment-create.hbs'));
router.post('/comment/create', (req, res, next) => {
    console.log(req.body);
    const comment = req.body.comment;

    comment.create({Comment})
    .then(bookFromDB => console.log(`New comment created!`))
    .catch(error => next(error));
});
module.exports = router;