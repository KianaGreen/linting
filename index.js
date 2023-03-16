const express = require('express');
const app = express()
const port = 3000

app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

//here's our data for users
var data = require('./data/test.json');

app.get('/', (req, res) => {
  var title ='Home Page';
  res.render('pages/index',{'title':title});
});

app.get('/mac-and-cheese', (req, res) => {
  var title ='Mac and Cheese';
  res.render('pages/mac-and-cheese',{'title':title});
});

app.get('/collard-greens', (req, res) => {
  var title ='Collard Greens';
  res.render('pages/collard-greens',{'title':title});
});

app.get('/candied-yams', (req, res) => {
  var title ='Candied Yams';
  res.render('pages/candied-yams',{'title':title});
});

app.get('/cornbread', (req, res) => {
  var title ='Cornbread';
  res.render('pages/cornbread',{'title':title});
});

app.get('/about', (req, res) => {
  var title ='About Page';
  res.render('pages/about',{'title':title});
});

//users index is our list page
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});
});

app.get('/users/view/:id', function(req, res) {
 var title = 'User Page';
 var id = req.params.id;
 res.render('users/view', {
     title: title,
     user: data[--id]
 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(data);
});

