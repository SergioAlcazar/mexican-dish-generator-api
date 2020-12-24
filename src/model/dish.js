export default class DishBuilder {
    constructor(ingredients, garnishment, style) {
        this.ingredients = ingredients;
        this.garnishment = garnishment;
        this.style = style;
    }

    getName() {
        let name = '';
        name += this.ingredientsToString();
        name += this.styleToString();
        name += this.garnishmentToString();

        return name;
    }

    ingredientsToString() {
        let ingredientString = '';
        this.ingredients.forEach(function(ingredient, index, array) {
            ingredientString += ingredient;
            const isLastItem = index === array.length - 1;
            const isSecondLastItem = index === array.length - 2;
            if (!isLastItem) {
                if (isSecondLastItem) {
                    ingredientString += ' y ';
                } else  {
                    ingredientString += ', ';
                }
            }
        });
        return ingredientString;
    }

    garnishmentToString() {
        let garnishmentString = '';
        if (!!this.garnishment) {
            garnishmentString += ' con ' + this.garnishment;
        }
        return garnishmentString;
    }

    styleToString() {
        let styleString = '';
        if (!!this.style) {
            styleString += ' ' + this.style;
        }
        return styleString;
    }
}