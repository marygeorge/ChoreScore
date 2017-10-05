const router = require("express").Router();
const path = require("path");


router.route("/api/login/:username/:password/:type").get((req,res)=>{ 
  console.log("\n username :"+req.params.username+"\n password :"+req.params.password+"\n type :"+req.params.type)
   res.redirect("/parent");
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  module.exports = router;
