// global namespace
var Omnix = Omnix || {};

var LumidigmManager = Omnix.LumidigmManager = {
    //service version
    version: { "Major": 1, "Minor": 4 },
	
    //service baseurl
    baseurl: Omnix.LumidigmServiceURL + "/OmnixFingerprintService",
			
    //json array of fingerPosition in english language
    enFingerPositions: [{ "Value": 0, "Name": "LeftLittle" }, { "Value": 1, "Name": "LeftRing" }, { "Value": 2, "Name": "LeftMiddle" }, { "Value": 3, "Name": "LeftIndex" },
	{ "Value": 4, "Name": "LeftThumb" }, { "Value": 5, "Name": "RightThumb" }, { "Value": 6, "Name": "RightIndex" },
	{ "Value": 7, "Name": "RightMiddle" }, { "Value": 8, "Name": "RightRing" }, { "Value": 9, "Name": "RightLittle" }
	],
	
	//json array of fingerPosition in arabic language
    arFingerPositions: [{ "Value": 0, "Name": "الخنصر - اليد اليسرى" }, { "Value": 1, "Name": "البنصر - اليد اليسرى" }, { "Value": 2, "Name": "الوسطى - اليد اليسرى" }, { "Value": 3, "Name": "السبابة - اليد اليسرى" },
	{ "Value": 4, "Name": "الإبهام - اليد اليسرى" }, { "Value": 5, "Name": "الإبهام - اليد اليمنى" }, { "Value": 6, "Name": "السبابة - اليد اليمنى" },
	{ "Value": 7, "Name": "الوسطى - اليد اليمنى" }, { "Value": 8, "Name": "البنصر - اليد اليمنى" }, { "Value": 9, "Name": "الخنصر - اليد اليمنى" }
	],
	

	//json array of Imgfileformats
    imgfileformats: [{ "Value": 0, "Name": "bmp" }, { "Value": 1, "Name": "emf" }, { "Value": 2, "Name": "exif" }, { "Value": 3, "Name": "gif" },
		{ "Value": 4, "Name": "icon" }, { "Value": 5, "Name": "jpeg" }, { "Value": 6, "Name": "png" }, { "Value": 7, "Name": "tiff" }, { "Value": 8, "Name": "wmf" }],
	
    //json array of ResponseType
    responseTypeFormats: [{ "Value": 0, "Name": "All" }, { "Value": 1, "Name": "URL" }, { "Value": 2, "Name": "Base64" }, { "Value": 3, "Name": "Path" }],

    /*****************************************************************************************
	Function version used to get version of service
	*****************************************************************************************/
    getversion: function () {
		var version = null;
		try{
			var json = oget(this.baseurl + '/version');
			if(typeof json.errorCode === "undefined"){
				version = JSON.parse(json);
			} else {
				version = json;
			}
		} catch(ex) {
			console.log("Catch Exception in Omnix.LumidigmManager.getversion : " + ex.Message);
		}
        return version;
    },

    /*****************************************************************************************
	Function CheckService used to validate version of service and check if service installed
	*****************************************************************************************/
    checkService: function () {
        //get service version
        var srvVersion = this.getversion();

        if (srvVersion.errorCode === 0) {
            return false;
        }

        srvVersion = srvVersion.VersionResult.ServiceVersion;

        if (srvVersion._Major === this.version.Major && srvVersion._Minor === this.version.Minor) {
            return true;
        }

        return false;
    },
	
    /******************************************************************************
	json array return fingerPositions to UI
	******************************************************************************/
    getFingerPositions: function (lang) {
		
		if(lang == "ENU")
		{
			return this.enFingerPositions;
		}
		else
		{
			return this.arFingerPositions;
		}
    },
	
	/******************************************************************************
	json array return imgfileformats to UI
	******************************************************************************/
    getImgfileformats: function () {
        return this.imgfileformats;
    },

    /******************************************************************************
	json array return response type formats to UI
	******************************************************************************/
    getResponseTypeFormats: function () {
        return this.responseTypeFormats;
    }

}


var Lumidigm = Omnix.Lumidigm = function (obj) {
    if (obj) {
        //Lumidigm Constructor
        //this.deviceName = obj.deviceName;
        //this.fileformat = obj.fileformat;
    }

    return this;
}


Lumidigm.prototype = {

    baseurl: Omnix.LumidigmManager.baseurl,
	//GetSensorList
	
    getSensorList: function () {
        console.log('call GetSensorList');
        return JSON.parse(oget(this.baseurl + '/GetSensorList'));
	},
	
    initializeSensor: function (sensorId) {
	    console.log('call InitializeSensor: ');
	    return JSON.parse(opost(this.baseurl + '/InitializeSensor', { "sensorId": sensorId }));
    },
	
	
    capture: function (sensorId) {
		console.log('call Capture');
		return JSON.parse(opost(this.baseurl + '/Capture', { "sensorId": sensorId }));
    },
	
	saveFingerprint: function (sensorId,fingerName,responseType) {
	    console.log('call SaveFingerprint: ');
	    return JSON.parse(opost(this.baseurl + '/SaveFingerprint', { "sensorId": sensorId,"fingerName":fingerName,"responseType":responseType }));
	},
	
	setMatchAndSpoofThresholds: function (nSelectedSensorID,matchThreshold,spoofThreshold) {
        console.log('call SetMatchAndSpoofThresholds: ');
        return JSON.parse(opost(this.baseurl + '/SetMatchAndSpoofThresholds', { "nSelectedSensorID": nSelectedSensorID, "matchThreshold" : matchThreshold,"spoofThreshold" : spoofThreshold }));
    },
	
	verifybase64: function (sensorId, templateBase64) {
	    console.log('call verifybase64: ');
	    return JSON.parse(opost(this.baseurl + '/verifybase64', { "sensorId": sensorId, "templateBase64": templateBase64 }));
	},
	verifyftp: function (sensorId, caseId, fingerIndex) {
	    console.log('call verifyftp: ');
	    return JSON.parse(opost(this.baseurl + '/verifyftp', { "sensorId": sensorId, "caseId": caseId, "fingerIndex": fingerIndex }));
	},
	closeSensor: function (sensorId) {
	    console.log('call CloseSensor: ');
	    return JSON.parse(opost(this.baseurl + '/CloseSensor', { "sensorId": sensorId }));
	}
	
	
	
	
}
