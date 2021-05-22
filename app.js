const express = require('express');
const dataEpisodes = require('./data/got.json')
const app = express();

app.use(express.static('public'))

/**
 * View setup
 */

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');


app.get('/home', (req, res, ) =>{    
    res.render('home', {
        data: dataEpisodes
    })
} )


const port = 3000;
app.listen(port, () => {
    console.log(`Ready! Listening on port ${port}`);
});
