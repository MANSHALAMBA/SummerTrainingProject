var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
 var bodyParser=require('body-parser');
 var mongodb=require('mongodb');
  var dbConn=mongodb.MongoClient.connect('mongodb://localhost:27017');
// var expressValidator = require('express-validator');
 var flash = require('connect-flash');
  var session = require('express-session');
 var passport = require('passport');
 var LocalStrategy = require('passport-local').Strategy;
// var bodyParser = require('body-parser');
// var passport= require('passport');
//  var User= require("./models/user");
//  var LocalStrategy = require("passport-local");  
//  var passportLocalMongoose  = require("passport-local-mongoose");
// var User = require("./models/User");
// var LocalStrategy=require('passport-local');
// var passportlocalMongoose=require('passport-local-mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var areastovisit = require('./routes/areastovisit');
var aboutus = require('./routes/aboutus');
var battleshipgame = require('./routes/battleshipgame');
var contactus = require('./routes/contactus');
var facultyreview = require('./routes/facultyreview');
var login = require('./routes/login');
var selfie = require('./routes/selfie');
var signup = require('./routes/signup');
var winners = require('./routes/winners');
var secret = require('./routes/secret');
var cs = require('./routes/cs');
var ece = require('./routes/ece');
var s = require('./routes/s');
var dance = require('./routes/dance');
var drama = require('./routes/drama');
var pgi = require('./routes/pgi');
var proximus = require('./routes/proximus');
var eee = require('./routes/eee');
var mae = require('./routes/mae');

var app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.post('/action_page.php', function (req, res) {
//   dbConn.then(function(db) {
//       delete req.body._id; // for safety reasons
//       db.collection('feedbacks').insertOne(req.body);
//   });    
//   res.send('Data received:\n' + JSON.stringify(req.body));
// });

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hjs');
// app.use(require("express-session")({    
//   secret:"Hello World, this is a session",    
//   resave: false,    
//   saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));


// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var swig=require('swig');
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'html');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/areastovisit', areastovisit);
app.use('/aboutus', aboutus);
app.use('/battleshipgame', battleshipgame);
app.use('/contactus', contactus);
app.use('/facultyreview', facultyreview);
app.use('/login', login);
app.use('/selfie', selfie);
app.use('/signup', signup);
app.use('/winners', winners);
app.use('/secret', secret);
app.use('/cs', cs);
app.use('/ece', ece);
app.use('/s', s);
app.use('/dance', dance);
app.use('/drama', drama);
app.use('/pgi', pgi);
app.use('/proximus', proximus);
app.use('/eee', eee);
app.use('/mae', mae);



// app.get("/secret",isLoggedIn, function(req, res){
//   res.render("secret");
// });

// app.get("/login", function(req, res){    
//   res.render("login");
// })

// app.post("/login", passport.authenticate("local"), {
//   successRedirect: "/secret",
//   failureRedirect: "/login"
// })


// app.get('/secret', isLoggedIn, function (req, res) {
//   res.render('secret');
// });


// app.use(require("express-session")({
//   secret: "wah wah wah",
//   resave: false,
//   saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/database");


 var nameSchema = new mongoose.Schema({
 name: String, 
   username: String,
   email:String,
   password:String,
   password2:String,
  });
  var User =mongoose.model("User", nameSchema);
app.post("/adddata", (req, res) => {
   var myData = new User(req.body);
   myData.save()
   .then(item => {
  res.send("YOUR ACCOUNT HAS BEEN CREATED. LOGIN TO ACCESS YOUR ACCOUNT");
    })
  .catch(err => {
  res.status(400).send("UNABLE TO CREATE ACCOUNT");
   });
 });
//  module.exports.getUserByUsername = function(username, callback){
//   var query = {username: username};
//   User.findOne(query, callback);
// }

// module.exports.getUserById = function(id, callback){
//   User.findById(id, callback);
// }

// module.exports.comparePassword = function(candidatePassword, hash, callback){
//   bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
//       if(err) throw err;
//       callback(null, isMatch);
//   });
// }


 // Express Session
// app.use(session({
//   secret: 'secret',
//   saveUninitialized: true,
//   resave: true
// }));

// // Passport init
// app.use(passport.initialize());
// app.use(passport.session());

// // Express Validator
// app.use(expressValidator({
// errorFormatter: function(param, msg, value) {
//     var namespace = param.split('.')
//     , root    = namespace.shift()
//     , formParam = root;

//   while(namespace.length) {
//     formParam += '[' + namespace.shift() + ']';
//   }
//   return {
//     param : formParam,
//     msg   : msg,
//     value : value
//   };
// }
// }));

// // Connect Flash
// app.use(flash());

// // Global Vars
// app.use(function (req, res, next) {
// res.locals.success_msg = req.flash('success_msg');
// res.locals.error_msg = req.flash('error_msg');
// res.locals.error = req.flash('error');
// res.locals.user = req.user || null;
// next();
// });

//  function isLoggedIn(req, res, next){
//   if(req.isAuthenticated()){
//       return next();
//   }
//   res.redirect("/login");
// }
 //login logic
//middleware
// app.post("/login", passport.authenticate("local", {
//   successRedirect: "/secret",
//   failureRedirect: "/login" 
// }), function(req, res) {
   
// });

// function isLoggedIn(req,res,next) {
//   if(req.isAuthenticated()){
//       return next();
//   }
//   res.redirect("/login");
// }
 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
