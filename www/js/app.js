// Ionic fittr App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'fittr' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'fittr.services' is found in services.js
// 'fittr.controllers' is found in controllers.js
angular.module('fittr', ['ionic', 'fittr.services', 'fittr.controllers', 'ngRoute'])


.config(function($stateProvider, $urlRouterProvider, $routeProvider) {

  // $routeProvider

  // .when('/', {
  //   templateUrl: 'templates/entry.html',
  //   controller: 'EntryController'
  // });

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })


    /*
     * Fittr STATES
     */

    // entry
    .state('entry', {
      url: '/entry',
      templateUrl: 'templates/entry.html',
      controller: 'EntryController'
    })

    .state('signup', {
      url: '/registration',
      templateUrl: 'templates/signup.html',
      controller: 'SignupController'
    })

    // the pet tab has its own child nav-view and history
    .state('tab.pet-index', {
      url: '/pets',
      views: {
        'pets-tab': {
          templateUrl: 'templates/pet-index.html',
          controller: 'PetIndexCtrl'
        }
      }
    })

    .state('tab.pet-detail', {
      url: '/pet/:petId',
      views: {
        'pets-tab': {
          templateUrl: 'templates/pet-detail.html',
          controller: 'PetDetailCtrl'
        }
      }
    })

    .state('tab.adopt', {
      url: '/adopt',
      views: {
        'adopt-tab': {
          templateUrl: 'templates/adopt.html'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('entry');


});

angular.module('fittr.services', []);

