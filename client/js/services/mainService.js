var app = angular.module('whos-my-rep');


app.service('mainService', function ($http) {

    this.getAllReps = function (repType, repState) {
        if (repType == "Representatives") {
            return $http.get("/representatives/" + repState).then(function (response) {
                console.log("SERVICE RESPONSE", response);
                return response.data;
            });
        } else if (repType == "Senators") {
            return $http.get("/senators/" + repState).then(function (response) {
                console.log("SERVICE RESPONSE", response);
                return response.data;
            });
        } else
            alert("error...repType not specified. Request cannot be completed");
    }
})