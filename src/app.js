import express from 'express';
import * as cook from './service/cook.js';
import cors from 'cors';
import ResponseBuilder from './model/responseBuilder.js'
const app = express();
const port = process.env.PORT || 3210;

app.use(cors());

app.get('/getRandomDish', (req, res) => {
	return res.send(new ResponseBuilder().setDishName(cook.cookRandomDish()).build());
});
app.listen(port, () => {
	console.log('Example app listening on port ' + port)
});
