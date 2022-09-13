const PORT = 5000
const axios = require('axios');
const express = require('express');
const bodyPraser = require("express").json;
const app = express()

app.use(bodyPraser());

app.get('/', (req, res) => {
	res.json('Welcome to NPC states API')
})


app.post('/getLgas', (req, res) => {
	let { state } = req.body;
	
	axios.get(`http://localhost:3000/${state}`)
	.then((response) => {
		// console.log(response.data[0].lgas)
		res.json(response.data[0])
	})
	.catch((error) => {
      res.json({
        status: "FAILED",
        message: "An error occured while getting Lgas",
      });
    });

})


app.listen(PORT, () => console.log(`Server running on port: ${PORT}` ))
