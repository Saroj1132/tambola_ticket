var express = require("express")
var router = express.Router()
var bcrypt = require('bcryptjs')
let jwt = require('jsonwebtoken')
var user = require("../Model/usermodel");


router.post("/createUser", (req, res) => {

    user.findOne({ Username: req.body.Username })
        .exec()
        .then(userfound => {
            if (userfound) {
                res.json({ Error: 'User already exist !!' })
            } else {
                bcrypt.hash(req.body.Password, 10, (err, hash) => {

                    var userModel = new user({
                        Name: req.body.Name,
                        Email: req.body.Email,
                        Mobile: req.body.Mobile,
                        Username: req.body.Username,
                        Password: hash,
                    })
                    userModel.save()
                        .then(doc => {
                            res.json({ doc: doc })
                        })
                })
            }
        })


})


router.post("/loginUser", (req, res) => {

    user.findOne({ Username: req.body.Username, Active: true })
        .exec()
        .then(userfound => {
            if (userfound) {
                if (bcrypt.compareSync(req.body.Password, userfound.Password)) {
                    var token = jwt.sign({
                        _id: userfound.id,
                        Username: userfound.Username,
                    }, "Mykey123", { expiresIn: '15m' })

                    res.json({ token: token, user: userfound })
                } else {
                    res.json({ Error: 'your Username and Password was Incorrected' })
                }
            } else {
                res.json({ Error: 'your Username and Password was Incorrected' })

            }
        })


})



module.exports = router