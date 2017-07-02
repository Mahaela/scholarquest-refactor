var express = require('express');
var router = express.Router();
var bycrypt = require('bcryptjs');
var Student = require('../models/student');
var Avatar = require('../models/avatar')
var jwt = require('jsonwebtoken');

router.post('/signup', function (req, res, next) {
  var student = new Student({
    email: req.body.email,
    password: bycrypt.hashSync(req.body.password, 10),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    coins: 0,
    cursor: 0,
    cursorFollower: 0
  });
  student.save(function(err, result){
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    var avatar = new Avatar({
      userId: student._id,
      hair: '03',
      face: '0302',
      eyes: '0304',
      nose: '02',
      mouth: '01',
      shirt: '0201',
      pants: '0301',
      shoes: '01'
    });
    avatar.save(function(err, result){
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(201).json({
          message: 'Saved user',
          obj: result
      });
    })
  });
});

router.post('/login', function(req, res, next){
    Student.findOne({email: req.body.email}, function(err, student){
      if(err){
        return res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }
      if(!student){
        return res.status(401).json({
          title: 'Login failed',
          error: {message: 'Invalid login credentials'}
        });
      }
      if(!bycrypt.compareSync(req.body.password, student.password)){
        return res.status(401).json({
          title: 'Login failed',
          error: {message: 'Invalid login credentials'}
        });
      }
      var token = jwt.sign({student: student}, 'gamez', {expiresIn: 7200});
      express.userId = student._id;
      res.status(200).json({
        message: 'Successfully logged in',
        token: token,
        userId: student._id,
        coins: student.coins,
        cursor: student.cursor,
        cursorFollower: student.cursorFollower
      });
    });
});

router.use('/', function(req, res, next){
  jwt.verify(req.body.token, 'gamez', function(err, decoded){
    
    if(err) {
      return res.status(401).json({
        title: 'Not Authenticated',
        error: err
      });
    }
    
    next();
  })
});

router.post('/getStudent', function(req, res, next){

  Student.findById(express.userId, function(err, student) {
    if(err){
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    if(!student){
      return res.status(500).json({
        title: 'Login failed',
        error: {message: 'Invalid login credentials'}
      });
    }
    res.status(200).json({
      message: 'Successfully logged in',
      userId: student._id,
      avatar: student.avatar,
      coins: student.coins,
      cursor: student.cursor,
      cursorFollower: student.cursorFollower
    });
  });
});

router.patch('/patchStudent', function(req, res, next){
  Student.findById(express.userId, function(err, student) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }
    if (!student) {
      return res.status(500).json({
        title: 'No user found',
        error: {message: 'User not found'}
      });
    }
    else if(req.body.coins){
      student.coins = req.body.coins;
    }
    else if(req.body.cursor){
      student.cursor = req.body.cursor;
    }
    else if(req.body.cursorFollower) {
      student.cursorFollower = req.body.cursorFollower;
    }
    student.save(function(err, result){
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Updated user',
      });
    });
  });
});

module.exports = router;
