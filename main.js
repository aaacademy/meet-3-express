const express = require('express');
const usersRoute = require('./src/routes/users.route');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users', usersRoute);

app.listen(3000, () => {
    console.log('Server run on port 3000!');
});
