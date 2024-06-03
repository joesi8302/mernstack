let express = require("express");

let hobbyRouter = express.Router({})

let HobbyDataModel = require("../DataModels/HobbyDataModel");


hobbyRouter.post("/api/addhobby",(req, res)=>{


    HobbyDataModel.findOne({hobbyName:req.body.hobbyName}).then((existingHobby) =>{
        if(existingHobby){
            console.log("Hobby already exists")
        }
        else{
            let newHobby = new HobbyDataModel(req.body)

            newHobby.save().then((newHobby) => {
                console.log("Hobby has been added")
                res.send(newHobby)
            }).catch((err1)=>{
                console.log("err adding hobby", err1);
                res.send("error while adding hobby")
            }) 
        }

    }).catch((err)=>{ // Where does this come into play
        console.log("err adding hobby", err);
        res.send("error while searching add hobby")
    })
})


hobbyRouter.get("/api/hobbies",(req, res) =>{
    HobbyDataModel.find()
    .then((allHobbies) => {
        res.send(allHobbies)
    })
    .catch(()=>{
        res.send("error while fetching hobbies")
    })
})

module.exports = hobbyRouter;