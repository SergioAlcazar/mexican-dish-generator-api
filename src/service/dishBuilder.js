import * as constants from '../constants/constants.js';
import * as utils from '../utils/utils.js';

let dish;
export function cookDish() {
	const dishType = utils.getRandomItemFromArray(constants.DISH_TYPES);
	switch (dishType) {
		case constants.ONE_INGREDIENT:
			dish = cookOneIngredientDish();
			break;
		case constants.TWO_INGREDIENT:
			dish = cookTwoIngredientDish();
			break;
		case constants.ONE_INGREDIENT_AND_GARNISHMENT:
			dish = cookOneIngredientAndGarnishmentDish();
			break;
	}

	console.log(dish);
	return dish;
}

function cookOneIngredientDish() {
	let prefix = utils.getRandomItemFromArray(constants.PREFIXES);
	let sufix = utils.getRandomItemFromArray(constants.SUFIXES);
	return prefix + sufix;
}
function cookTwoIngredientDish() {
	return utils.getRandomItemFromArray(constants.PREFIXES) + utils.getRandomItemFromArray(constants.SUFIXES) + ' con ' + utils.getRandomItemFromArray(constants.PREFIXES) + utils.getRandomItemFromArray(constants.SUFIXES);
}
function cookOneIngredientAndGarnishmentDish() {
	let prefix = utils.getRandomItemFromArray(constants.PREFIXES);
	let sufix = utils.getRandomItemFromArray(constants.SUFIXES);
	let garnishment = utils.getRandomItemFromArray(constants.GARNISHMENTS);
	return prefix + sufix + garnishment;
}