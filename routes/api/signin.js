const User = require('../../models/Users')
var router = require('express').Router();
const UserSession = require('../../models/UserSession');

router.post('/api/account/signup', (req, res, next) => {
        const { body } = req;
        const {
            firstName,
            lastName,
            password
        } = body;
        let {
            email
        } = body;
        // console.log(req)
        // console.log(res)
        console.log(body);

        if (!firstName) {
                return res.send({
                success: false,
                message: 'Invalid input1'
            });
        }

        if (!lastName) {
                return res.send({
                success: false,
                message: 'Invalid input2'
            });
        }

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

        email = email.toLowerCase();

        // Steps
        // 1. Verify email
        // 2. Save

        User.find({
            email: email
        }, (err, previousUser) => {
            if (err) {
                return res.send({
                success: false,
                message: 'Server Error.'
            });
            } else if (previousUser.length > 0) {
                return res.send({
                success: false,
                message: 'Acount alredy exists.'
            });
            }

            // Save new USER
            const newUser = new User();

            newUser.email = email;
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.password = newUser.generateHash(password);

            newUser.save((err, user) => {
                if (err) {
                    return res.send({
                    success: false,
                    message: 'Sever Error'
                    })
                }
                    return res.send({
                    success: true,
                    message: 'Signed up!'
                });
            });
        })

}); 

router.post('/api/account/signin', (req, res, next) => {
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
                email
            } = body;
});
module.exports = router