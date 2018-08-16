const calculatorModel = require('../models/calculator.model');

const controller = {
    home: function (req, res) {
        res.send('<h1>Calculator Route</h1>');
    },

    soma: function (req, res) {
        let { a, b } = req.query;
        let result = calculatorModel.soma(parseInt(a), parseInt(b));
        res.send(`<h1>Calculator Sum</br>${result}</h1>`);
    },

    sub: function (req, res) {
        let { a, b } = req.query;
        let result = calculatorModel.sub(parseInt(a), parseInt(b));
        res.send(`<h1>Calculator Sub</br>${result}</h1>`);
    },

    mult: function (req, res) {
        let { a, b } = req.params;
        let result = calculatorModel.mult(parseInt(a), parseInt(b));
        res.send(`<h1>Calculator Mult</br>${result}</h1>`);
    },

    div: function (req, res) {
        let { a, b } = req.params;
        let result = calculatorModel.div(parseInt(a), parseInt(b));
        res.send(`<h1>Calculator Div</br>${result}</h1>`);
    },

    div2: function ({ modelCalc }, req, res) {
        let { a, b } = req.params;
        let result = modelCalc.div(parseInt(a), parseInt(b));
        res.send(`<h1>Calculator Div</br>${result}</h1>`);
    }
};

module.exports = {
    home: controller.home,
    soma: controller.soma,
    sub: controller.sub,
    mult: controller.mult,
    div: controller.div,
    div2: controller.div2
};