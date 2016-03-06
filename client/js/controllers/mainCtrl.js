var app = angular.module('whos-my-rep');


app.controller('mainCtrl', function ($scope, mainService) {

    $scope.stateInitials = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

    $scope.repTypes = ["Representatives", "Senators"];

    $scope.selectedRepType = "";
    $scope.selectedState = "";
    $scope.repSelected = false;
    $scope.listShowing = false;



    $scope.getReps = function () {
        mainService.getAllReps($scope.selectedRepType, $scope.selectedState).then(function (response) {
            $scope.repSelected = false;
            $scope.currentRepType = $scope.selectedRepType;
            $scope.currentReps = response.results;
            $scope.listShowing = true;
        })
    }

    //When user clicks on a rep in the list...
    $scope.getCurrentRep = function (nameIn) {
        for (var i = 0; i < $scope.currentReps.length; i++) {
            if ($scope.currentReps[i].name == nameIn) {
                $scope.currentRepIndex = i;
            }
        }
        // $scope.currentRepIndex = $scope.currentRepIndex;
        $scope.currentRep = $scope.currentReps[$scope.currentRepIndex];

        var currentRepNameArray = $scope.currentRep.name.split(' ');
        $scope.currentRep.firstName = currentRepNameArray[0];
        $scope.currentRep.lastName = currentRepNameArray[1];
        if (currentRepNameArray[2]) { //if rep has two last names...
            $scope.currentRep.lastName += ' ' + currentRepNameArray[2];
        }
        $scope.repSelected = true;
    }
});