const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([
        {
            name: 'Leo',
            age: 30
        },
        {
            name: 'Orlando',
            age: 31
        },
        {
            name: 'Jhosehp',
            age: 29
        }
    ])
})

app.listen(3000);
module.exports.app = app;