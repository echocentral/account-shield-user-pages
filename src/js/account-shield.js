AccountShieldClient = function(url, accountId, userId) {

	url = url + "/lwc/" + accountId + "/";

	this.getUser = function(callback){
		get(url + "user?userId=" + userId , callback);
	}

	this.getSessions = function(callback) {
		get(url + "/sessions?userId=" + userId, callback);
	}

	this.getSession = function(sessionId, callback){
		get(url + "/sessions/" + sessionId + "?userId=" + userId, callback);
	}

	this.getSessionHistory = function(sessionId, callback){
		get(url + "/sessions/" + sessionId + "/history?userId=" + userId, callback);
	}

	this.getDevices = function(callback){
		get(url + "/devices?userId=" + userId, callback);
	}

	this.getDevice = function(deviceId, callback){
		get(url + "/devices/" + deviceId + "?userId=" + userId, callback);
	}

	this.getSessionsForDevice = function(deviceId, callback){
		get(url + "/devices/" + deviceId + "/sessions?userId=" + userId, callback);	
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