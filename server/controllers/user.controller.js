const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');

const user = require('../models/user.model');

router.get('/',(req,res)=>{
    user.find().then(docs =>{
        res.send(docs);
    }).catch(err =>{
        res.status(500).send(err);
    })
})

router.get('/:id', (req,res) =>{
    let id = req.params.id;
    user.findById(id).then(doc =>{
        res.send(doc);
    }).catch(err => {
        res.status(500).send(err);
    })
})

router.post("/", (req, res) => {
    console.log("user: post")
    const saltCount = 10;
    bcrypt.genSalt(saltCount, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
          const obj = {
              name: req.body.name,
              role: req.body.role,
              username: req.body.username,
              password: hash
          }
        user.create(obj)
          .then((doc) => {
            res.status(201).send(doc);
          })
          .catch((err) => {
            res.status(500).send(err);
          });
      });
    });
  });

router.put('/:id',(req, res) =>{
    let id = req.params.id;
    const obj = req.body;

    user.findByIdAndUpdate(id, {name: obj.name, contact: obj.contact, address: obj.address}, {new: true})
    .then((updatedDoc) => res.status(200).send(updatedDoc))
    .catch(err => res.status(500).send(err));
})

router.delete("/:id", (req,res) =>{
    let id = req.params.id;

    user.findByIdAndDelete(id).then(()=> res.status(200).send(true))
    .catch(err=> res.status(500).send(err));
})

module.exports = router;