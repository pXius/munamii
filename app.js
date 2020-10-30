const { response, request } = require('express');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

port = process.env.PORT || 80;
app.listen(port);

app.get('/', (request, response) => {
  response.render('index', { title: 'Home' });
});

app.get('/about', (request, response) => {
  response.render('about', { title: 'About' });
});

app.get('/products', (request, response) => {
  response.render('products', { title: 'Cakes' });
});

app.get('/contact', (request, response) => {
  response.render('contact', { title: 'Contact Us' });
});
