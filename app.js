//Load HTTP module
const http = require("http");
const hostname = process.env.URL || 'localhost';
const port = process.env.PORT || 3000

const ONE_INGREDIENT = 'one_ingredient';
const TWO_INGREDIENT = 'two_ingredients';
const ONE_INGREDIENT_AND_GARNISHMENT = 'one_ingredient_and_garnishment';
const DISH_TYPES = [ONE_INGREDIENT, TWO_INGREDIENT, ONE_INGREDIENT_AND_GARNISHMENT];

const PREFIXES = ['Tama', 'Ta', 'Agua', 'Poto', 'Choco', 'Guaca', 'Coco', 'Coca', 'Poco', 'Toto', 'Cochi', 'Oaxa', 'Cha', 'Tite', 'Titi', 'Mumo', 'Jala', 'Frijo', 'Chima', 'Cuco'];
const SUFIXES = ['leles', 'toclos', 'males', 'cheles', 'quitos', 'moles', 'potles', 'dillas', 'topos', 'tacos', 'cotles', 'tles', 'ritos', 'rritos', 'nitas', 'queños', 'chas', 'rajos', 'rojos', 'riles', 'les', 'joles', 'pos', 'catles'];
const GARNISHMENTS = [' con Nachos', ' con Totopos', ' con Chipotle', ' con Pico de Gallo', ' con Chiles', ' con Guacamole', ' al Pastor', ' Pibil', ' en Nogada', ' con Mole', ' con Frijoles', ' con Jalapeños'];
let dish;

const server = http.createServer((req, res) => {
  if (req.url != '/favicon.ico') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(cookDish());
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function cookDish() {
  const dishType = getRandomItemFromArray(DISH_TYPES);
  switch (dishType) {
    case ONE_INGREDIENT:
      dish = cookOneIngredientDish();
      break;
    case TWO_INGREDIENT:
      dish = cookTwoIngredientDish();
      break;
    case ONE_INGREDIENT_AND_GARNISHMENT:
      dish = cookOneIngredientAndGarnishmentDish();
      break;
  }

  console.log(dish);
  return dish;
}

function cookOneIngredientDish() {
  let prefix = getRandomItemFromArray(PREFIXES);
  let sufix = getRandomItemFromArray(SUFIXES);
  return prefix + sufix;
}
function cookTwoIngredientDish() {
  return getRandomItemFromArray(PREFIXES) + getRandomItemFromArray(SUFIXES) + ' con ' + getRandomItemFromArray(PREFIXES) + getRandomItemFromArray(SUFIXES);
}
function cookOneIngredientAndGarnishmentDish() {
  let prefix = getRandomItemFromArray(PREFIXES);
  let sufix = getRandomItemFromArray(SUFIXES);
  let garnishment = getRandomItemFromArray(GARNISHMENTS);
  return prefix + sufix + garnishment;
}

function main() {
}

function getRandomItemFromArray(items) {
  return items[Math.floor(Math.random() * items.length)];
}