'use strict';

angular.module('vetList')
    .controller('VetListController', ['$http', function ($http) {
        let self = this;

        $http.get('api/vet/vets').then(function (resp) {
            self.vetList = resp.data;
        });
    }]);
