let express = require("express");
let app = new express();
let bodyparser = require('body-parser');

// set up db connection
const knex = require("knex") ({
	client: "mysql",
	connection: {
		host: "sandbox-db.cluster-ca4vmwpkdpk2.us-east-2.rds.amazonaws.com",
		user: "admin",
		password: "Admin123!",
		database: "sandbox",
		port: 3306,
	},
});

app.get("/", (req, res) => {
	knex.select()
	.from("Career")
	.then((result) => {
		console.log(result);
		res.send(result);
	});
});

console.log('app is listening on port 3000');
app.listen(3000);
