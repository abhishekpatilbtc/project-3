const router = require("express").Router();
const userController = require("../../controllers/userController");
const User = require('../../models/user');


router.route("/")
    .get(userController.findAll)

router.route("/:id")
    .get(userController.findById)



router.post('/addfriend', (req, res) => {

    const id = req.body.id;
    const friendid = req.body.user._id;
    // console.log("friend is:" + friendid)

    User.find({ _id: id })
        .then(result => {

            let friends = result[0].friendsList;
            if (friends.includes(friendid)) {
                console.log("exists")
                res.json({
                    "message": "already exists"
                })
            } else {
                console.log("does not exist")
                User.update({ _id: id }, { $push: { friendsList: friendid } })
                    .then(result => {
                        console.log(result)
                        res.json({
                            "message": "does not exist"
                        })
                    });

            }

        })


});

router.get('/listfriends/:id', (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .populate('friendsList')
        .then(user => {
            res.send({ user });
        });
    })



    router.route("/:id")
    .post(userController.update)

    module.exports = router;