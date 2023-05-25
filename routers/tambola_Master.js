var express = require("express")
var router = express.Router()
var tambola = require("../Model/tambola");
var auth = require('../config/auth')


router.post('/', auth.auth, (req, res) => {
    var row1a = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var row2a = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var row3a = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var numdone = [0]
    var numdone02 = []
    var numdone1 = [0]
    var numdone2 = [0]
    var randnum = 0
    var k = 0


    for (var i = 0; i < 5; i++) {
        randnum = Math.floor(Math.random() * 90 + 1)

        for (var y = 0; y < numdone.length; y++) {
            if (randnum == numdone[y]) {
                randnum = Math.floor(Math.random() * 90 + 1)
                y = 0
            }
        }

        numdone02.push(randnum)

        if (randnum <= 9) {
            numdone.push(1, 2, 3, 4, 5, 6, 7, 8, 9)
            row1a[0] = randnum
        } else if (randnum >= 10 && randnum <= 19) {
            numdone.push(11, 12, 13, 14, 15, 16, 17, 18, 19)
            row1a[1] = randnum
        } else if (randnum >= 20 && randnum <= 29) {
            numdone.push(21, 22, 23, 24, 25, 26, 27, 28, 29)
            row1a[2] = randnum
        } else if (randnum >= 30 && randnum <= 39) {
            numdone.push(31, 32, 33, 34, 35, 36, 37, 38, 39)
            row1a[3] = randnum
        } else if (randnum >= 40 && randnum <= 49) {
            numdone.push(41, 42, 43, 44, 45, 46, 47, 48, 49)
            row1a[4] = randnum
        } else if (randnum >= 50 && randnum <= 59) {
            numdone.push(51, 52, 53, 54, 55, 56, 57, 58, 59)
            row1a[5] = randnum
        } else if (randnum >= 60 && randnum <= 69) {
            numdone.push(61, 62, 63, 64, 65, 66, 67, 68, 69)
            row1a[6] = randnum
        } else if (randnum >= 70 && randnum <= 19) {
            numdone.push(71, 72, 73, 74, 75, 76, 77, 78, 79)
            row1a[7] = randnum
        } else if (randnum >= 80 && randnum <= 89) {
            numdone.push(81, 82, 83, 84, 85, 86, 87, 88, 89)
            row1a[8] = randnum
        }


    }

    for (var i = 0; i < 5; i++) {
        randnum = Math.floor(Math.random() * 90 + 1)

        for (var y = 0; y < numdone1.length; y++) {
            if (randnum == numdone1[y]) {
                randnum = Math.floor(Math.random() * 90 + 1)
                y = 0
            }


            for (var j = 0; j < numdone02.length; j++) {
                if (randnum == numdone02[j]) {
                    randnum = Math.floor(Math.random() * 90 + 1)
                    j = 0
                }
            }
        }


        numdone02.push(randnum)

        if (randnum <= 9) {
            numdone1.push(1, 2, 3, 4, 5, 6, 7, 8, 9)
            row2a[0] = randnum
        } else if (randnum >= 10 && randnum <= 19) {
            numdone1.push(11, 12, 13, 14, 15, 16, 17, 18, 19)
            row2a[1] = randnum
        } else if (randnum >= 20 && randnum <= 29) {
            numdone1.push(21, 22, 23, 24, 25, 26, 27, 28, 29)
            row2a[2] = randnum
        } else if (randnum >= 30 && randnum <= 39) {
            numdone1.push(31, 32, 33, 34, 35, 36, 37, 38, 39)
            row2a[3] = randnum
        } else if (randnum >= 40 && randnum <= 49) {
            numdone1.push(41, 42, 43, 44, 45, 46, 47, 48, 49)
            row2a[4] = randnum
        } else if (randnum >= 50 && randnum <= 59) {
            numdone1.push(51, 52, 53, 54, 55, 56, 57, 58, 59)
            row2a[5] = randnum
        } else if (randnum >= 60 && randnum <= 69) {
            numdone1.push(61, 62, 63, 64, 65, 66, 67, 68, 69)
            row2a[6] = randnum
        } else if (randnum >= 70 && randnum <= 19) {
            numdone1.push(71, 72, 73, 74, 75, 76, 77, 78, 79)
            row2a[7] = randnum
        } else if (randnum >= 80 && randnum <= 89) {
            numdone1.push(81, 82, 83, 84, 85, 86, 87, 88, 89)
            row2a[8] = randnum
        }
    }


    for (var i = 0; i < 5; i++) {
        randnum = Math.floor(Math.random() * 90 + 1)

        for (var y = 0; y < numdone2.length; y++) {
            if (randnum == numdone2[y]) {
                randnum = Math.floor(Math.random() * 90 + 1)
                y = 0
            }
        }

        for (var j = 0; j < numdone02.length; j++) {
            if (randnum == numdone02[j]) {
                randnum = Math.floor(Math.random() * 90 + 1)
                j = 0
            }
        }

        numdone02.push(randnum)

        if (randnum <= 9) {
            numdone2.push(1, 2, 3, 4, 5, 6, 7, 8, 9)
            row3a[0] = randnum
        } else if (randnum >= 10 && randnum <= 19) {
            numdone2.push(11, 12, 13, 14, 15, 16, 17, 18, 19)
            row3a[1] = randnum
        } else if (randnum >= 20 && randnum <= 29) {
            numdone2.push(21, 22, 23, 24, 25, 26, 27, 28, 29)
            row3a[2] = randnum
        } else if (randnum >= 30 && randnum <= 39) {
            numdone2.push(31, 32, 33, 34, 35, 36, 37, 38, 39)
            row3a[3] = randnum
        } else if (randnum >= 40 && randnum <= 49) {
            numdone2.push(41, 42, 43, 44, 45, 46, 47, 48, 49)
            row3a[4] = randnum
        } else if (randnum >= 50 && randnum <= 59) {
            numdone2.push(51, 52, 53, 54, 55, 56, 57, 58, 59)
            row3a[5] = randnum
        } else if (randnum >= 60 && randnum <= 69) {
            numdone2.push(61, 62, 63, 64, 65, 66, 67, 68, 69)
            row3a[6] = randnum
        } else if (randnum >= 70 && randnum <= 19) {
            numdone2.push(71, 72, 73, 74, 75, 76, 77, 78, 79)
            row3a[7] = randnum
        } else if (randnum >= 80 && randnum <= 89) {
            numdone2.push(81, 82, 83, 84, 85, 86, 87, 88, 89)
            row3a[8] = randnum
        }
    }

    for (var i = 0; i < 9; i++) {
        if (row1a[i] != 0 && row2a[i] != 0) {
            if (row1a[i] > row2a[i]) {
                k = row1a[i]
                row1a[i] = row2a[i]
                row2a[i] = k
            }

        }

        if (row1a[i] != 0 && row3a[i] != 0) {
            if (row1a[i] > row3a[i]) {
                k = row1a[i]
                row1a[i] = row3a[i]
                row3a[i] = k
            }

        }

        if (row2a[i] != 0 && row3a[i] != 0) {
            if (row2a[i] > row3a[i]) {
                k = row2a[i]
                row2a[i] = row3a[i]
                row3a[i] = k
            }

        }
    }
    const _tambola = new tambola({
        tambola_ticket: [[row1a, row2a, row3a]]
    })
    _tambola.save()
        .then((__tambola) => {
            res.json({ tambola: __tambola })
        })
})


router.get('/tambola', auth.auth, async (req, res) => {
    const currentPage = req.query.page || 0
    const ticketPerpage = 3
    const ticket = await tambola.find({})
        .skip(currentPage * ticketPerpage)
        .limit(ticketPerpage)
    res.status(200).json({
        success: true,
        ticket,
        currentPage,
        ticketPerpage

    })
})



module.exports = router