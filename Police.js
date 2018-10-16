var Person = require('./Person.js');

class Police extendes Person {
    constructor(name, lastName) {
        super(name, lastName);
    }
}

module.exports = Police;