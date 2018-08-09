const soma = (op1, op2) => {
    return op1 + op2;
};

const sub = (op1, op2) => {
    return op1 - op2;
};

const mult = (op1, op2) => {
    return op1 * op2;
};

const div = (op1, op2) => {
    if (op2 == 0) return 'Divisão por Zero!';
    else return op1 / op2;
};

module.exports = {
    soma,
    sub,
    mult,
    div
}

