var router = require('express').Router();
const userDBController = require("../../controllers/userDBController");

// /api/account

router.route("/")
    .post(userDBController.signUp)


router.post('/signin', (req, res, next) => {
        const { body } = req;
        const { password } = body;
        let { email } = body;

        email = email.toLowerCase();

        // Input checks
        if (!email) {
            return res.send({
                success: false,
                message: 'Invalid input3'
            })
        }

        if (!password) {
            return res.send({
                success: false,
                message: 'Invalid input4'
            });
        }

        // Validate User
        User.find({
            email: email
        }, (err, user) => {
            if (err) {
            return res.send({
            success: false,
            message: 'Server Error'
            });
            }
            if (user.length != 1) {
                return res.send({
                    success: false,
                    message: "Invalid"
                })
            }

            const users = user[0]

            if (!users.validPassword(password)) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            }

            const userSession = new UserSession();
            userSession.userId = user._id
            userSession.save((err, doc) => {
                if (err) {
                return res.send({
                    success: false,
                    message: 'Error: server error'
                });
                }

                return res.send({
                    success: true,
                    message: 'Valid sign in',
                    token: doc._id
                });
            });
        });


});

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



