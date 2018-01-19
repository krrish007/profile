const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/productdb';
mongoose.connection.openUri('mongodb://localhost:27017/productdb');

mongoose.connection.on("open", function () {
    console.log("mongodb is connected!!");
});

// Add headers
router.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});

var productSchema = mongoose.Schema({
    productID: { type: String, required: true, trim: true },
    productName: { type: String, required: true, trim: true },
    totalQuantity: { type: String, required: true, trim: true },
    price: { type: String, required: true, trim: true }
},
    { timestamps: true }
);

var Product = mongoose.model('Product', productSchema);

router.post('/addProduct', function (req, res) {
    console.log(req.body)
    var prod = new Product(req.body);

    prod.save().then(item => {
        console.log('Item saved' + item);

    })
    res.send('item saved');
});

router.get('/getProduct', function (req, res) {
    // get the user starlord55
    Product.find({}, function (err, product) {
        if (err) throw err;
        res.send(product);
    });
});

router.delete('/deleteProduct/:id', function (req, res) {
    // get the user starlord55
    console.log(req.params.id);
    Product.remove({ productID: req.params.id }, function (err, user) {
        if (err) throw err;
        res.send(user);
    });
});

router.post("/updateQuantity", function (req, res) {
    console.log(req.body) 
    Product.findOne({ productID: req.body.id }, function (error, product) {
        console.log(product)
        if (error || !product) {
            res.send({ error: error });
        } else {
            product.totalQuantity = req.body.quantity;
            product.update({totalQuantity : req.body.quantity}, function (err, product) {
                if(err) throw err;
                console.log("saved");
            });
        }
        res.send('updated');
    });
});
module.exports = router;