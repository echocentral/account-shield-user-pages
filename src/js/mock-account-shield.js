AccountShieldClient = function(url, accountId, userId) {

	this.getUser = function(callback) {
		callback(null, {
			email: "test@test.com"
		});
	}

	this.getSessions = function(callback) {
		callback(null, [{
			"id": "c5eb70c5-a95d-48b4-936b-a3ca32cd036a",
			"time": 1445853054808,
			"device": {
				"id": "05ca8e7c78dfad3921022f3aea729642fbeff2faa0c5f72c317986fcf0f82cbb",
				"platform": "Windows",
				"type": "Laptop"
			},
			"connection": {
				"ipAddress": "5.65.221.29",
				"city": "portsmouth",
				"country": "GB"
			}
		}]);
	}

	this.getSession = function(sessionId, callback) {
		callback(null, {});
	}

	this.getSessionHistory = function(sessionId, callback) {
		callback(null, [{
			"url": "http://localhost:8080/echo-central-dashboard/login.html",
			"title": "echo central login",
			"time": 1445853054808,
		}, {
			"url": "http://localhost:8080/echo-central-dashboard/#",
			"title": "accountshield dashboard",
			"time": 1445853069194,
		}]);
	}

	this.getDevices = function(callback) {
		callback(null, [{
			"id": "05ca8e7c78dfad3921022f3aea729642fbeff2faa0c5f72c317986fcf0f82cbb",
			"platform": "Windows",
			"type": "Laptop",
		}]);
	}

	this.getDevice = function(deviceId, callback) {
		callback(null, {});
	}

	this.getSessionsForDevice = function(deviceId, callback) {
		callback(null, [{
			"id": "c5eb70c5-a95d-48b4-936b-a3ca32cd036a",
			"time": 1445853054808,
			"device": {
				"id": "05ca8e7c78dfad3921022f3aea729642fbeff2faa0c5f72c317986fcf0f82cbb",
				"platform": "Windows",
				"type": "Laptop"
			},
			"connection": {
				"ipAddress": "5.65.221.29",
				"city": "portsmouth",
				"country": "GB"
			}
		}]);
	}

}