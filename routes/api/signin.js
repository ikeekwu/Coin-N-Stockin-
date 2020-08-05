var router = require('express').Router();
const userDBController = require("../../controllers/userDBController");

// /api/account

router.route("/")
    .post(userDBController.signUp);


router.route("/signin")
    .post(userDBController.signIn);

router.get('/api/account/verify',(req, res, next) => {
    // Get token
    const { query } = req;
    const { token } = query;
    // token = test

    // Verify the token is one of a kind and is not deleted

    UserSession.find({
        _id: token,
        isDeleted: false
    }, (err, sessions) => {
        console.log(err)
        if (err) {
            return res.send({
                success: false,
                message: 'Server Error'
            });
        }

        if (sessions.length != 1) {
            return res.send({
                success: false,
                message: 'Invalid'
            });
        } else {
            return res.send({
                success: true,
                message: 'Good'
            });
        }
    })
});

router.get('/api/account/logout', (req, res, next) => {
    // Get token
    const { query } = req;
    const { token } = query;
    // token = test

    // Verify the token is one of a kind and is not deleted

    UserSession.findOneAndUpdate({
        _id: token,
        isDeleted: false
         },
        {$set:{isDeleted:true}}
        , null, (err, sessions) => {

        if (err) {
            console.log(err)
            return res.send({
                success: false,
                message: 'Server Error'
            });
        }
        
            return res.send({
                success: true,
                message: 'Good'
            });
    })  
});

// Stores assets use owns in database

router.post('/api/account/assets', (req,res, next) => {
            const {
                body
            } = req;
            const {

            } = body;
            let {
                favorites
            } = body;
});


module.exports = router



