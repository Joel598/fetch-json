const request = require("request");

request({
	url:"https://raw.githubusercontent.com/Joel598/api-reactjs/main/src/data/posts.json",
	json:true
}, (err, response, body) => {
	console.log(body);
});