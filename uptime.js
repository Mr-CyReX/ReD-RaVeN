const express = require("express"),
http = require("http"),
app = express();

app.use(express.static("public"));
app.get("/", function(request,  response) {
response.sendStatus(200); 
})

const listener = app.listen(process.env.PORT, function() {
  console.log("your app is listening on port " + listener.address().port);
  
})

setInterval(() => {
 http.get(`https://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 604800000);