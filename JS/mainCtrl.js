angular.module("friendsList").controller("mainCtrl", function($scope) {

    $scope.friends = ["JC", "Jim", "Seyla", "Scott", "Eric"];

    $scope.addFriend = function() {
        $scope.friends.push($scope.newFriend);
        $scope.newFriend = "";
    }


});