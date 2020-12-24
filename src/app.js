import express from 'express';
import * as cook from './service/cook.js';
const app = express();
const port = process.env.PORT || 3000;

app.get('/getRandomDish', (req, res) => {
	return res.send(cook.cookRandomDish());
});
app.listen(port, () => {
	console.log('Example app listening on port ' + port)
});
