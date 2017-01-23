const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index.html');
});

router.post('/', function(req, res next) {

});

module.exports = router;