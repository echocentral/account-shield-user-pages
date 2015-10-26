AccountShieldClient = function(url, accountId, userId) {

	url = url + "/lwc/" + accountId + "/" + userId;

	this.getUser = function(callback){
		get(url, callback);
	}

	this.getSessions = function(callback) {
		get(url + "/sessions", callback);
	}

	this.getSession = function(sessionId, callback){
		get(url + "/sessions/" + sessionId, callback);
	}

	this.getSessionHistory = function(sessionId, callback){
		get(url + "/sessions/" + sessionId + "/history", callback);
	}

	this.getDevices = function(callback){
		get(url + "/devices", callback);
	}

	this.getDevice = function(deviceId, callback){
		get(url + "/devices/" + deviceId, callback);
	}

	this.getSessionsForDevice = function(deviceId, callback){
		get(url + "/devices/" + deviceId + "/sessions", callback);	
	}

	function get(url, callback) {
		Ajax.getJSON(url, {
			onSuccess: function(data) {
				callback(null, data);
			},
			onError: function(code, text) {
				callback({
					code: code,
					text: text,
					message: "Remote Server Error"
				});
			}
		});
	}

}