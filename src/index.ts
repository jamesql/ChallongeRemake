// import express
import express from 'express';

// create express app
const app = express();

// define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.use('/api', require('./routes/API'));
app.use('/v0', require('./routes/DevPage'));

// start express server
app.listen(3333, () => {
    console.log('Server started on port 3333!');
});