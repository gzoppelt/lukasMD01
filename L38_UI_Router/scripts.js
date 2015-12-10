/**
 * Created by g on 04/12/15.
 */
var app = angular.module('myApp', ['ngMaterial', 'ngMessages', 'ngTouch', 'ngAnimate', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    //
    //for any unmatched url, redirect to state1
    $urlRouterProvider.otherwise("/about");
    //
    //states
    $stateProvider
        .state('items', {
            url: "/items",
            templateUrl: "./items/items.html"
        })
        .state('about', {
            url: "/about",
            templateUrl: "./about/about.html"
        })
    ;
});

app.directive('arcText', function(){
    function linker(scope, element, attrs) {
        element.arctext({radius: 300});
    }
    return {
        link: linker
    }
});

app.directive('item', function(){
    return {
        templateUrl: './item.html'
    }
});

app.directive('currentItem', function(){
    return {
        templateUrl: './current-item.html'
    }
});

app.animation('.my-fade-animation', function () {
    return {
        enter: function(element, done) {
            //TweenMax.fromTo(element, 2, {alpha: 0}, {autoAlpha: 1, onComplete: done});
            var tl = new TimelineLite();
            /* did not work -they all came at the same time
            tl.fromTo(element, 2, {alpha: 0}, {autoAlpha: 1, onComplete: done})
              .fromTo(element.find('.label'), 2, {alpha: 0}, {autoAlpha: 1})
              .fromTo(element.find('.description'), 2, {alpha: 0}, {autoAlpha: 1})
              .fromTo(element.find('.price'), 2, {alpha: 0}, {autoAlpha: 1})
            ;
            */
            tl.staggerFromTo([
                element,
                element.find('.label'),
                element.find('.description'),
                element.find('.price')
            ], 2, {opacity: 0}, {opacity: 1}, 0.5);
        },
        leave: function(element, done) {
            //TweenMax.fromTo(element, 0.5, {alpha: 1}, {autoAlpha: 0, onComplete: done});
            var tl = new TimelineLite();
            tl.staggerFromTo([
                element.find('.price'),
                element.find('.description'),
                element.find('.label'),
                element
            ], 2, {alpha: 1}, {autoAlpha: 0}, 0.5);
        }
    };
});

app.controller('OptionsController', function () {
    this.options = [
        {label: 'Option 01', value: 1},
        {label: 'Option 02', value: 2},
        {label: 'Option 03', value: 3}
    ];
});

app.controller('MainController', function (){
    var imagePath = '../assets/images/angular-logo.svg';

    this.setCurrentItem = function (item) {
        this.currentItem = item;
    };

    this.submitItem = function (item) {
        this.submitMessage = 'Success! ' + item.label + ' was submitted';
    }

    this.discount = 0;

    this.showDiscount = function () {
        this.discount++;
        this.discountMessage = 'Hooray! Your discount is ' + this.discount + '%';
    }

    this.removeDiscount = function () {
        this.discountMessage = null;
    }

    this.items = [
        {
            id: 1,
            label: 'Item One',
            description: 'I am in an object boat!',
            price: 100,
            url: 'http://angularjs.org',
            avatar: imagePath
        },
        {
            id: 2,
            label: 'Item Two',
            description: 'I am cool!',
            price: 200,
            url: 'http://angularjs.org',
            avatar: imagePath
        },
        {
            id: 3,
            label: 'Item Three',
            description: 'I am much smarter!',
            price: 300,
            url: 'http://angularjs.org',
            avatar: imagePath
        }
    ];
});