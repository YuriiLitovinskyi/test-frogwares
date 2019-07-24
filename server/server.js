const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const fs = require("fs");


let mainPage = JSON.parse(fs.readFileSync("frogwares_test/MainPageInfo.json", "utf8"));
let generalQuest = JSON.parse(fs.readFileSync("frogwares_test/GeneralQuestsInfo.json", "utf8"));
let finishedQuest = JSON.parse(fs.readFileSync("frogwares_test/FinishedQuestsLeafs.json", "utf8"));

console.log(mainPage);
console.log(generalQuest);
console.log(finishedQuest);

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




const port = 3004;
app.listen(port, function(){
	console.log("Server started on port "+ port +"...");
});