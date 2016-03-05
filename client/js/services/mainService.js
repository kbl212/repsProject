var app = angular.module('know-your-reps');


app.service('mainService', function ($http) {

    this.getAllReps = function(repType, repState) {
        if (repType == "Representative") {
            return $http.get("/representatives/" + repState).then(function(response) {
                console.log("SERVICE RESPONSE", response);
                return response.data;
            });
        }
        
        else if (repType == "Senator") {
            return $http.get("/senators/" + repState).then(function(response) {
                console.log("SERVICE RESPONSE", response);
                return response.data;
            });
        }
        
        else 
            alert("error...repType not specified. Request cannot be completed");
    }
})