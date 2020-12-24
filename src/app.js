import express from 'express';
import * as cook from './service/cook.js';
import cors from 'cors';
import ResponseBuilder from './model/responseBuilder.js'
const app = express();
const port = process.env.PORT || 8000;

var allowedOrigins = ['http://localhost:3000'];
app.use(cors({
	origin: function(origin, callback){
		if(!origin) {
			return callback(null, true);
		}
		if(allowedOrigins.indexOf(origin) === -1){
			var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
			return callback(new Error(msg), false);
		}
		return callback(null, true);
	}
}));


app.get('/getRandomDish', (req, res) => {
	return res.send(new ResponseBuilder().setDishName(cook.cookRandomDish()).build());
});
app.listen(port, () => {
	console.log('Example app listening on port ' + port)
});
