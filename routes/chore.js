const router = require("express").Router();
const path = require("path");
const db = require("../models");


router.route("/api/login/:username/:password/:type").get((req,res)=>{ 
  console.log("\n username :"+req.params.username+"\n password :"+req.params.password+"\n type :"+req.params.type)
  if(req.params.type==="parent")
  {
   db.Parent.findOne({
            where:{
                ParentUsername:req.params.username,
                ParentPassword: req.params.password
            }
        }).then(function(result) {
            console.log("parent");
           // res.json(result);
             res.redirect("/parent");
        });
  }
  if(req.params.type==="child")
  {
   db.Child.findOne({
            where:{
                ChildUsername:req.params.username,
                ChildPassword: req.params.password
            }
        }).then(function(result) {
            console.log("child found");
           // res.json(result);
             res.redirect("/childpage");
        });
  }
  
});

router.route("/api/signUp").post((req,res)=>{ 
  console.log(req);
  const pare={
    ParentFirstName: req.body.firstname,
    ParentLastName:req.body.lastname ,
    ParentEmail:req.body.email,
    ParentUsername: req.body.username,
    ParentPassword: req.body.password,
  }
  console.log(pare);
  db.Parent.create(pare).then(function(result) {
    console.log("parent created");
    res.json(result);
  });
});

router.route("/api/childsignup").get((req,res)=>{ 
  console.log(req.body);
  const ch={
    ChildName: req.body.parentFirstName,
    ChildUsername: req.body.parentUserName,
    ChildPassword: req.body.parentPassword,
    ChildPointsEarned:0,
  }
  db.Child.create().create(ch).then(function(result) {
    console.log("child created");
    res.json(result);
  });
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  module.exports = router;
