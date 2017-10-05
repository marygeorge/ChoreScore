const router = require("express").Router();
const path = require("path");
const db = require("../models");

router.route("/api/login/:username/:password/:type").get((req,res)=>{ 
  console.log("\n username :"+req.params.username+"\n password :"+req.params.username+"\n type :"+req.params.type)
  if(req.param.type="parent")
  {
   db.Parent.findOne({
            where:{
                ParentUsername:req.body.username,
                ParentPassword: req.body.password
            }
        }).then(function(result) {
            //console.log(result);
           // res.json(result);
             res.redirect("/parent");
        });
  }
  if(req.param.type="child")
  {
   db.Child.findOne({
            where:{
                ChildUsername:req.body.username,
                ChildPassword: req.body.password
            }
        }).then(function(result) {
            //console.log(result);
           // res.json(result);
             res.redirect("/childpage");
        });
  }
  
});

router.route("/api/parentsignup").get((req,res)=>{ 
  console.log(req.body);
  const pare={
    ParentFirstName: req.body.parentFirstName,
    ParentLastName:req.body.parentLastName ,
    ParentEmail:req.body.parentEmail,
    ParentUsername: req.body.parentUserName,
    ParentPassword: req.body.parentPassword,
  }
  db.Parent.create().create(pare).then(function(result) {
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
