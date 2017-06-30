var express = require('express');
var router = express.Router();
var bycrypt = require('bcryptjs');
var Avatar = require('../models/avatar');


// router.patch('/patch', function(req, res, next){
//   console.log('hi');

//   var avatar = Avatar.findOne({'userId': express.userId}).exec(function (err, messages) {
//     if (err) {
//         return res.status(500).json({
//             title: 'An error occurred',
//             error: err
//         });
//     }
//     res.status(200).json({
//         message: 'Success',
//         obj: messages
//     });
//   });

router.post('/getAvatar', function(req, res, next){

  var query = Avatar.findOne({'userId': express.userId});
  query.select('hair face eyes nose mouth shirt pants shoes')

  query.exec(function (err, result) {
    if (err) {
        return res.status(500).json({
            title: 'An error occurred',
            error: err
        });
    }
    res.status(200).json({
        message: 'Success',
        obj: result
    });
  });
});

router.patch('/patchAvatar', function(req, res, next){
  Avatar.findOneAndUpdate({'userId': express.userId}, {$set: req.body}, function(err, avatar) {

     if (err) {
      return res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }

     res.status(200).json({
        message: 'Updated Avatar',
      });
  });
});
  




module.exports = router;
