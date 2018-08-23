let database = require('../database/index');

const ctrl = {
    index: ({ db }, req, res) => {
        res.send(database);
    },

    create: ({ db }, req, res) => {
        const person = req.body;
        database.push(person);
        res.send({ ...person, status: 200 });
    },

    show: ({ db }, req, res) => {
        const { id } = req.params;
        res.send(database[id]);
    },

    update: ({ db }, req, res) => {
        const { id } = req.params;
        const person = req.body;
        database = database.map(el => {
            if (el.id == id)
                return { ...el, name: person.name };
        });
        res.send({ status: 200 });
    },

    destroy: ({ db }, req, res) => {
        const { id } = req.params;

        const result = database.filter(el => { return el.id != id; });
        const removed = database.filter(el => { return el.id == id; });
        const affected = database.length - result.length;

        database = result;
        res.send({ rows: affected, el: removed, db: database });
    }
};

module.exports = {
    index: ctrl.index,
    create: ctrl.create,
    show: ctrl.show,
    update: ctrl.update,
    destroy: ctrl.destroy
}