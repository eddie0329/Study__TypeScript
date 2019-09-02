import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('helloworld ts');
})

app.listen(3000, () => {
    console.log('server start...');
})