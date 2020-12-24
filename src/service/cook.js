import * as constants from '../constants/constants.js';
import DishBuilder from '../model/dishBuilder.js';
import * as utils from '../utils/utils.js';

export function cookRandomDish() {
	const dishType = utils.getRandomItemFromArray(constants.DISH_TYPES);
	let dish;
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
		case constants.ONE_INGREDIENT_WITH_STYLE:
			dish = cookOneIngredientWithStyle();
			break;
	}
	return dish.getName();
}

function cookOneIngredientDish() {
	return new DishBuilder()
				.setIngredients([utils.createRandomIngredient()])
				.build();
}
function cookTwoIngredientDish() {
	return new DishBuilder()
				.setIngredients([utils.createRandomIngredient(), utils.createRandomIngredient()])
				.build();
}
function cookOneIngredientAndGarnishmentDish() {
	return new DishBuilder()
				.setIngredients([utils.createRandomIngredient()])
				.setGarnishment(utils.getRandomGarnishment())
				.build();
}
function cookOneIngredientWithStyle() {
	return new DishBuilder()
				.setIngredients([utils.createRandomIngredient()])
				.setStyle(utils.getRandomStyle())
				.build();
}