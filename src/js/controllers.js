var asApp = angular.module('ngApp', []);

asApp.controller('ASCtrl', function($scope) {

	window.scope = $scope;

	var accountShieldClient = new AccountShieldClient("http://localhost:8080/account-shield", "d91db4f1-dce0-4e47-9564-0dd62d4e2bcb", "9724d714-fa3b-4f97-90f8-c5eaf8165aa4");

	async.parallel([function(done) {
		async.waterfall([function(done){
			accountShieldClient.getUser(done);
		}, function(user, done){
			$scope.user = user;
			done();
		}], done);
	}, function(done) {
		async.waterfall([function(done) {
			accountShieldClient.getSessions(done);
		}, function(sessions, done) {
			$scope.sessions = sessions;
			async.each(sessions, function(session, done) {
				async.waterfall([function(done) {
					accountShieldClient.getSessionHistory(session.id, done);
				}, function(history, done) {
					session.history = history;
					done();
				}], done);
			}, done);
		}], done);
	}, function(done) {
		async.waterfall([function(done) {
			accountShieldClient.getDevices(done);
		}, function(devices, done) {
			$scope.devices = devices;
			async.each(devices, function(device, done) {
				async.waterfall([function(done) {
					accountShieldClient.getSessionsForDevice(device.id, done);
				}, function(sessions, done) {
					device.sessions = sessions;
					done();
				}], done);
			}, done);
		}], done);
	}], function(err) {
		if (err) {
			console.error(err);
			Materialize.toast(err.message, 4000, "error-message");
			return;
		}
		$scope.$apply();
	});
});