type EquationType = 'add' | 'subtract';

const equationBuilder = (typeOfEquation: EquationType): (x: number, y: number) => number => {
    switch (typeOfEquation) {
        case 'add':
            return (x, y) => x + y;
        case 'subtract':
            return (x, y) => x - y;
    }
}

const adder = equationBuilder('add');
module.exports = { adder };