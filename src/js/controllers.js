var asApp = angular.module('ngApp', []);

asApp.controller('ASCtrl', function($scope, $location) {

	window.scope = $scope;

	var accountShieldClient = new AccountShieldClient("http://dev.echo-central.com:8080/account-shield", $location.search().account, $location.search().user);

	async.parallel([function(done) {
		async.waterfall([function(done) {
			accountShieldClient.getUser(done);
		}, function(user, done) {
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
		$('.collapsible').collapsible({
			accordion: false
		});
		$('.tooltipped').tooltip({delay: 50});
		document.body.className+=' ng-loaded'
	});
});