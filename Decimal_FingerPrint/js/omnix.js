// global namespace
var Omnix = Omnix || {};

//  disable/enable debug control
var _DEBUG = true;
var log = console.log;

/*alert = function(){

	if(_DEBUG){
		alert.apply(arguments);
	}
}*/

console.log = function(){

	if(_DEBUG){
		log.apply(this, arguments);
	}
}

Omnix = {
    ScannerServiceURL: "http://localhost:9001",
    QAPassServiceURL: "http://localhost:9002",
    FingerPrintServiceURL: "http://localhost:9003",
    WebCamServiceURL: "http://localhost:9012",
    PassportReaderServiceURL:"http://localhost:9004",
	LumidigmServiceURL:"http://localhost:8003",
    PrinterServiceURL: "http://localhost:9014",
    //POSServiceURL: "http://localhost:9009",
}

var response = "";
complete_callback = function (result) {
	if (result.status == 0) {
		response = {errorCode: 0, errorMessage: '0 status - browser could be on offline mode'};
	} else if (result.status == 404) {
		response = {errorCode: 404, errorMessage: 'Not Found'};
	} else {
		response = result.responseText;
	}
}
		
var oget = function (url, callback) {
    
	if(callback){
		complete_callback = callback;
	}
	
    $.ajax({
        url: url,
        type: 'GET',
        //processData: false,
        contentType: 'application/json; charset=utf-8',
        async: false,
        complete: complete_callback
    });

    return response;
}

var opost = function (url, jsonbody, callback) {
	if(callback){
		complete_callback = callback;
	}
    $.ajax({
        url: url,
        type: 'POST',
        //processData: false,
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(jsonbody),
        //dataType: 'json',
        async: false,
        complete: complete_callback
    });

    return response;
}