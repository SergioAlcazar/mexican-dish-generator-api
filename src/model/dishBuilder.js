import Dish from './dish.js';
export default class DishBuilder {
    constructor() {
    }

    setIngredients(ingredients) {
        this.ingredients = ingredients;
        return this;
    }

    setGarnishment(garnishment) {
        this.garnishment = garnishment;
        return this;
    }

    setStyle(style) {
        this.style = style;
        return this;
    }

    build() {
        return new Dish(this.ingredients, this.garnishment, this.style);
    }
}