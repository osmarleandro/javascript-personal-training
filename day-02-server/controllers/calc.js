const home = (req, res) => {
    res.send('<h1>Calculator Route</h1>');
};

const soma = (req, res) => {
    let {a,b} = req.params;
    let result = parseInt(a) + parseInt(b);
    res.send(`<h1>Calculator Sum</br>${result}</h1>`);
};

const sub = (req, res) => {
    let {a,b} = req.params;
    let result = parseInt(a) - parseInt(b);
    res.send(`<h1>Calculator Sub</br>${result}</h1>`);};

module.exports = {
    home,
    soma,
    sub
};