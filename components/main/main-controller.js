"use strict";
{
    angular.module('app')
        .controller('MainController', function(){
            const $ctrl = this;
           
            $ctrl.family = [
                {name: 'Darrell', relation: 'Father', age: 62 },
                {name: 'LaRonn', relation: 'Husband', age: 44 },
                {name: 'Sarah', relation: 'Mother', age:'None of your business' },
                {name: 'William', relation: 'Brother', age: 43 },
            ]
        })
}