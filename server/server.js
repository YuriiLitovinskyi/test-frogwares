const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

//Production
const origin = process.env.NODE_ENV !== 'production' ? 'http://localhost:8080' : 'https://frogwares-vue-client.netlify.app';
app.use(cors({ origin }));


let mainPage = fs.readFileSync("frogwares_test/MainPageInfo.json", "utf8");
let generalQuest = fs.readFileSync("frogwares_test/GeneralQuestsInfo.json", "utf8");
let finishedQuest = fs.readFileSync("frogwares_test/FinishedQuestsLeafs.json", "utf8");

//console.log(mainPage);
//console.log(generalQuest);
//console.log(finishedQuest);

//GET data from MainPageInfo.json
app.get('/', function(req, res){
	try {
		res.send(mainPage);	
	} catch(err) {
		console.log(err);
	}
	
});

//GET data from GeneralQuestInfo.json
app.get('/general', function(req, res){
    try {
    	res.send(generalQuest);	
    } catch(err) {
    	console.log(err);
    }	
	
});

//GET data from FinishedQuestInfo.json
app.get('/finished', function(req, res){
    try {
    	res.send(finishedQuest);
    } catch(err) {
    	console.log(err);
    }	
	
});


const port = process.env.PORT || 3004;
app.listen(port, function(){
	console.log("Server started on port "+ port +"...");
});