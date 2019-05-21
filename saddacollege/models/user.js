// var mongoose=require('mongoose');
// var express = require('express');

// var app = express();



// var nameSchema = new mongoose.Schema({

//     name: String, 
//       username: String,
//       email:String,
//       password:String,
//       password2:String,
//      });
//      var User = module.exports=mongoose.model("User", nameSchema);
//    app.post("/adddata", (req, res) => {
//       var myData = new User(req.body);
//       myData.save()
//       .then(item => {
//      res.send("YOUR ACCOUNT HAS BEEN CREATED. LOGIN TO ACCESS YOUR ACCOUNT");
//        })
//      .catch(err => {
//      res.status(400).send("UNABLE TO CREATE ACCOUNT");
//       });
//     });
//     module.exports.getUserByUsername = function(username, callback){
//      var query = {username: username};
//      User.findOne(query, callback);
//    }
   
//    module.exports.getUserById = function(id, callback){
//      User.findById(id, callback);
//    }
   
//    module.exports.comparePassword = function(candidatePassword, hash, callback){
//      bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
//          if(err) throw err;
//          callback(null, isMatch);
//      });
//    }
  