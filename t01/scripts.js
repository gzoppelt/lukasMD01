/**
 * Created by g on 04/12/15.
 */
var app = angular.module('myApp', ['ngMaterial']);

app.controller('MainController', function (){
    this.setCurrentItem = function (item) {
        this.currentItem = item;
    };
    this.items = [
        {
            label: 'Item One',
            description: 'I am in an object boat!',
            price: 100,
            url: 'http://angularjs.org'
        },
        {
            label: 'Item Two',
            description: 'I am cool!',
            price: 200,
            url: 'http://angularjs.org'
        },
        {
            label: 'Item Three',
            description: 'I am much smarter!',
            price: 300,
            url: 'http://angularjs.org'
        }
    ];
});