const modelCalc = require('../models/calc');

const home = function (req, res) {
    res.send('<h1>Calculator Route</h1>');
};

const soma = function (req, res) {
    let { a, b } = req.query;
    let result = modelCalc.soma(parseInt(a), parseInt(b));
    res.send(`<h1>Calculator Sum</br>${result}</h1>`);
};

const sub = function (req, res) {
    let { a, b } = req.query;
    let result = modelCalc.sub(parseInt(a), parseInt(b));
    res.send(`<h1>Calculator Sub</br>${result}</h1>`);
};

const mult = function (req, res) {
    let { a, b } = req.params;
    let result = modelCalc.mult(parseInt(a), parseInt(b));
    res.send(`<h1>Calculator Mult</br>${result}</h1>`);
};

const div = function (req, res) {
    let { a, b } = req.params;
    let result = modelCalc.div(parseInt(a), parseInt(b));
    res.send(`<h1>Calculator Div</br>${result}</h1>`);
};

const div2 = function ({ modelCalc }, req, res) {
    let { a, b } = req.params;
    let result = modelCalc.div(parseInt(a), parseInt(b));
    res.send(`<h1>Calculator Div</br>${result}</h1>`);
};

module.exports = {
    home,
    soma,
    sub,
    mult,
    div,
    div2
};