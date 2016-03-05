var app = angular.module('know-your-reps');


app.controller('mainCtrl', function($scope, mainService) {
    
    $scope.stateInitials = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
    
    $scope.repTypes = ["Representative", "Senator"];
    
    //ng-disabled expression...HERE
    
    $scope.selectedRepType = "";
    $scope.selectedState = "";
    
    $scope.getReps = function() {
        mainService.getAllReps($scope.selectedRepType, $scope.selectedState).then(function(response) {
            console.log(response);
        })
    }
});