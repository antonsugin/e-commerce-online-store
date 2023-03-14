const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

app.use('/', express.static(path.join(__dirname, '/public')))


// app.use('/', require('./routes/root'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// "start": "react-scripts start",!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
