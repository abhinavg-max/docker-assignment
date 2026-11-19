
const express = require('express');

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.post('/submit', async (req, res) => {

    try {

        const response = await fetch('http://backend:5000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });

        const result = await response.json();

        res.json(result);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: 'Backend connection failed'
        });

    }

});

app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
});