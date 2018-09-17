import angular from 'angular';
import { McDatesComponent } from './mc-dates.component';
import { McDates } from './mc-dates.directive';
import uiRouter from '@uirouter/angularjs';

export const McDatesModule = angular
   .module( 'mcDates', [ uiRouter ])
   .component( 'mcDatesComponent', McDatesComponent )
   .directive( 'mcDates', () => new McDates())
   .config(( $stateProvider, $urlRouterProvider ) => {

      'ngInject';
      $urlRouterProvider.otherwise( '/' );
      $stateProvider
         .state( 'mcdates', {
            url: '/mc-dates',
            component: 'mcDatesComponent',
         });
   })
   .name;
