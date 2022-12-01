const express = require('express');
const app= express()
const PORT = 8000;

require('./config/mongoose.config')
app.use(express.json(), express.urlencoded({extended:true}))

const AllJokeRoutes = require('./routes/jokes.routes')
AllJokeRoutes(app);

app.listen(PORT, function () {
    console.log(`The app is running on port: ${PORT}`);
})

