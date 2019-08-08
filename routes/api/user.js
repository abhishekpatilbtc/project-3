const router = require("express").Router();
const userController = require("../../controllers/userController");
const User = require('../../models/user');


router.route("/")
    .get(userController.findAll)

router.route("/:id")
    .get(userController.findById)

// router.post('/:id/:friendid', (req, res) => {
//     const id = req.params.id
//     const friendid = req.params.friendid
//     console.log("user is:" + id)
//     console.log("friend is:" + friendid)
//     User.findById(id)
//         .then(user => {
//             user.friendsList.push(friendid);
//             user.save().then(res.send({message: 'Friend added successfully!'}))
//         }).catch((err) => {
//             console.log(err)
//         });
// });

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

        

    // User.findById(id)
    //     .then(user => {

            // const friends = user.friendsList;
            // let isAvailable = false
            // console.log("36", user)
            // console.log("37", friends)
            // friends.forEach(e => {
            //     console.log("39", e)
            // })


            // console.log("40", friendid == friendsIds[0])
            // console.log("41", friends.indexOf(friendid)) // this does not make sense
            // console.log(typeof(friendid), typeof(friends[0]));

            // if (friends.indexOf(friendid) !== -1 ) {
            //     console.log("exists");
            //     res.json({
            //         "message": "this friend already exists"
            //     })

            // } else {
            //     console.log("does not exist")
            //     user.friendsList.push(friendid);
            //     user.save().then(res.send({message: 'Friend added successfully!'}))
            // }

            // user.friendsList.push(friendid);
            // user.save().then(res.send({message: 'Friend added successfully!'}))

            // console.log(user);
            // console.log(friends)


        // }).catch((err) => {
        //     console.log(err)
        // });

    // console.log(req.body)
    // res.json({
    //     "hi": "hi"
    // })
});

router.get('/listfriends/:id', (req, res) => {
    const id = req.params.id;
    User.findById(id)
    .populate('friendsList')
    .then(user => {
    // the user object would now have the transactionList property with all the transactions
    res.send({user});

  });

})







module.exports = router;