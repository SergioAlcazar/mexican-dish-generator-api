import express from 'express';
import * as dishBuilder from './service/dishBuilder.js';
const app = express();
const port = process.env.PORT || 3000;

app.get('/mexicanDish', (req, res) => {
	return res.send(dishBuilder.cookDish());
});
app.listen(port, () => {
	console.log('Example app listening on port ' + port)
});
