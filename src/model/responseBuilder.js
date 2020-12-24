
import Response from './response.js';
export default class ResponseBuilder {
    constructor() {
    }

    setDishName(dishNames) {
        this.dishNames = dishNames;
        return this;
    }

    build() {
        return new Response(this.dishNames);
    }
}