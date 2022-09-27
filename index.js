const express = require('express');
// instantiate express
const app = express();
app.set('port', process.env.PORT || 8000);


app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
	res.redirect('/emissions');
});

const countryController = require('./controllers/countryController');
app.use('/emissions', countryController);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});