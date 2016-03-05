var app = angular.module('know-your-reps');


app.controller('mainCtrl', function($scope, mainService) {
    
    $scope.stateInitials = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
    
    $scope.repTypes = ["Representative", "Senator"];
    
    //ng-disabled expression...HERE
    
    $scope.selectedRepType = "";
    $scope.selectedState = "";
    
    $scope.repSelected = false;
    
    
    
    $scope.getReps = function() {
        mainService.getAllReps($scope.selectedRepType, $scope.selectedState).then(function(response) {
            $scope.repSelected = false;
            $scope.currentReps = response.results;
        })
    }
    
    $scope.getCurrentRep = function(nameIn) {
        console.log("here...");
        for (var i = 0; i < $scope.currentReps.length; i++) {
            if ($scope.currentReps[i].name == nameIn) {
                $scope.currentRepIndex = i;
            }
        }
        $scope.currentRepIndex = $scope.currentRepIndex;
        $scope.currentRep = $scope.currentReps[$scope.currentRepIndex];
        var currentRepNameArray = $scope.currentRep.name.split(' ');
        $scope.currentRep.firstName = currentRepNameArray[0];
        $scope.currentRep.lastName = currentRepNameArray[1];
        if (currentRepNameArray[2]) {
            $scope.currentRep.lastName += ' ' + currentRepNameArray[2];
        }
        console.log($scope.currentRep);
        $scope.repSelected = true;

    }
});