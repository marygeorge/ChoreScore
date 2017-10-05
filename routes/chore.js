const router = require("express").Router();
const path = require("path");


router.route("/api/login").get((req,res)=>{
    console.log("yes");  
    res.redirect("http://google.com")
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  module.exports = router;
