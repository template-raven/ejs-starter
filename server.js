const express = require('express')
const app = express(); // Configure app
const PORT = 3500; // Set port as 3500
const  ejsRoutes = require(`${__dirname}/router/ejs`)


// Set view engine as ejs 
app.set('view engine', 'ejs');

//      APP.USE()
// Creating a static folder
app.use(express.static(`${__dirname}/public`));
// This gives us the ability to pick up something from the input elements
app.use(
	express.urlencoded({
		extended: false,
	})
);
app.use(express.json());
// Use import routes
app.use(ejsRoutes)



// link http://localhost:3500 
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));