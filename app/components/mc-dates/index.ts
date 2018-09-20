import * as angular from 'angular';
import { McDatesComponent } from './mc-dates.component';
import { McDates } from './mc-dates.directive';
import uiRouter from '@uirouter/angularjs';
import moment = require( 'moment' ); // https://github.com/moment/moment/blob/develop/typing-tests/moment-tests.ts
import 'moment/locale/ru';
moment.locale( 'ru' );
import * as uiMask from 'angular-ui-mask';

export const McDatesModule = angular
   .module( 'mcDates', [
      uiRouter,
      uiMask
   ])
   .component( 'mcDatesComponent', McDatesComponent )
   .directive( 'mcDates', () => new McDates())
   .config(( $stateProvider, $urlRouterProvider, $mdDateLocaleProvider ) => {

      'ngInject';
      $urlRouterProvider.otherwise( '/' );
      $stateProvider
         .state( 'mcdates', {
            url: '/mc-dates',
            component: 'mcDatesComponent',
         });

      /* datepicker format */
      $mdDateLocaleProvider.firstDayOfWeek = 1;
      $mdDateLocaleProvider.shortMonths = [ 'Янв', 'Фев', 'Март', 'Апр','Май','Июнь','Июль','Авг','Сен','Окт','Ноя','Дек' ];
      $mdDateLocaleProvider.shortDays = [ 'Вс','Пн','Вт','Ср','Чт','Пт','Сб' ];
      $mdDateLocaleProvider.formatDate = date => ( date !== '' && date !== null ) && moment( date ).format( 'DD.MM.YYYY' ) || null;

   })
   .name;
