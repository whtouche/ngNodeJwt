'use strict';

/**
 * @ngdoc function
 * @name ngNodeJwtApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the ngNodeJwtApp
 */
angular.module('ngNodeJwtApp').controller('LoginCtrl', function ($scope, alert, auth, $auth, $window, $rootScope) {
    $scope.submit = function() {
        $auth.login({ email: $scope.email, password: $scope.password })
        .then(function(res) {
            alert('success', 'Welcome', 'Thanks for coming back ' + res.data.user.email);
            $window.localStorage.currentUser = JSON.stringify(res.data.user);
            $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
            console.log($rootScope.currentUser);
        })
        .catch(handleError);
    };

    function handleError(err) {
        alert('warning', 'Something went wrong', err.message);
    }
});
