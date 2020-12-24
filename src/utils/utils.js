import * as constants from '../constants/constants.js';

export function createRandomIngredient() {
    return getRandomItemFromArray(constants.PREFIXES) + getRandomItemFromArray(constants.SUFIXES);
}
export function getRandomGarnishment() {
    return getRandomItemFromArray(constants.GARNISHMENTS);
}
export function getRandomStyle() {
    return getRandomItemFromArray(constants.STYLES);
}

export function getRandomItemFromArray(items) {
    return items[Math.floor(Math.random() * items.length)];
}