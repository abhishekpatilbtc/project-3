const router = require("express").Router();
const userController = require("../../controllers/userController");
const User = require('../../models/user');


router.route("/")
    .get(userController.findAll)

router.route("/:id")
    .get(userController.findById)

router.post('/:id/:friendid', (req, res) => {
    const id = req.params.id
    const friendid = req.params.friendid
    console.log("user is:" + id)
    console.log("friend is:" + friendid)
    User.findById(id)
        .then(user => {
            user.friendsList.push(friendid);
            user.save().then(res.send({message: 'Friend added successfully!'}))
        }).catch((err) => {
            console.log(err)
        });
});


module.exports = router;