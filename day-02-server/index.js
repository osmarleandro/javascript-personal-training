const express =     require('express');
const router =      require('./routers/index.js');
const calcRouter =  require('./routers/calc.js');
const app =         express();

app.use('/', router);
app.use('/calculadora', calcRouter);

/** Starting server */
app.listen(3000, console.log('Listenning...')
);
