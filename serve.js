const express = require('express');
console.log("=====================================");
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/rec-rock-calendar-frontend'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/rec-rock-calendar-frontend/index.html'));});
app.listen(process.env.PORT || 8080);
