var equationBuilder = function (typeOfEquation) {
    switch (typeOfEquation) {
        case 'add':
            return function (x, y) { return x + y; };
        case 'subtract':
            return function (x, y) { return x - y; };
    }
};
var adder = equationBuilder('add');
module.exports = { adder: adder };
