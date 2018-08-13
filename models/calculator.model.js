const calculator = {
    soma: (op1, op2) => {
        return op1 + op2;
    },

    sub: (op1, op2) => {
        return op1 - op2;
    },

    mult: (op1, op2) => {
        return op1 * op2;
    },

    div: (op1, op2) => {
        if (op2 == 0) return 'Divisão por Zero!';
        else return op1 / op2;
    }
};

module.exports = {
    soma: calculator.soma,
    sub: calculator.sub,
    mult: calculator.mult,
    div: calculator.div
}

