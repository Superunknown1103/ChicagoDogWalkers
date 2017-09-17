var db = require("../models");

module.exports = function(app){

  // add a burger, api route defined below
  app.get('/api/products', function(req, res){
    db.products.findAll({}).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

  app.get('/api/history', function(req, res){
    db.products.findAll({}).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

  app.post("/api/products", function(req, res) {
    console.log(req.body);

    db.products.create({
      productid: req.body.productid,
      url: req.body.url,
      liked: req.body.liked,
      name: req.body.name

    }).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

  app.delete("/api/new/:id", function(req, res){

  });

  app.put("/api/new", function(req, res){

  });
};
