const User = require('../../models/Users')
var router = require('express').Router();

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

router.post('/api/account/login', (req, res, next) => {
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
});
module.exports = router