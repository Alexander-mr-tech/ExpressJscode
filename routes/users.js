var express = require('express');
var router = express.Router();

const users=[
  {
    name:"Sikander Bakhat",
    age:27,
    uername:"sikanderbakhat2017@gmail.com",
    password:"sikander123"
  },
  {
    name:"Sikander Bakhat",
    age:27,
    uername:"sikanderbakhat2017@gmail.com",
    password:"sikander123"
  },
  {
    name:"Sikander Bakhat",
    age:27,
    uername:"sikanderbakhat2017@gmail.com",
    password:"sikander123"
  },
  {
    name:"Sikander Bakhat",
    age:27,
    uername:"sikanderbakhat2017@gmail.com",
    password:"sikander123"
  },
  {
    name:"Sikander Bakhat",
    age:27,
    uername:"sikanderbakhat2017@gmail.com",
    password:"sikander123"
  },
]


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    message:"Successfully",
    data:users
  });
});

router.post('/',function(req,res,next){
  const data = req.body;
  users.push(data);
  res.send({
    message:"Successfully",
    data:users
  });
});

router.put('/:id',function(req,res,next){
  const id = req.params.id;
  const data = req.body;
  if (!users[id]){
    return res.send({
      message:"id is invalid",
    data:null
    });
  }
  users[id]=data;
  res.send({
    message:"Successfully updated",
    data:users
  });
});

router.delete('/:id',function(req,res,next){
  const id = req.params.id;
  users.splice(id, 1);
  res.send({
    message:"Successfully deleted user",
    data:users
  });
});

module.exports = router;
