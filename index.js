const app = require('express')();
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Its live at : http://localhost:${PORT}`);
})

app.get('/demoservice', (req, res) => {
    res.status(200).send({
        message: 'Message from demo service',
        type: 'Node service'
    });
});