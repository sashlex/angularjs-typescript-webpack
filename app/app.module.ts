import * as angular from 'angular';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import uiRouter from '@uirouter/angularjs';
import * as ngAria from 'angular-aria';
import * as ngAnimate from 'angular-animate';
import * as ngMaterial from 'angular-material';
import 'angular-material/angular-material.min.css';
import 'hammerjs';
import * as hmTouchEvents from 'angular-hammer';
import './app.less';

const app = angular
   .module( 'app', [
      ComponentsModule,
      uiRouter,
      ngAnimate,
      ngAria,
      ngMaterial,
      hmTouchEvents
   ])
   .component( 'app', AppComponent )
   .config(( $stateProvider, $locationProvider ) => {

      'ngInject';
      $stateProvider
         .state( 'index', {
            url: '/',
         });
      $locationProvider.html5Mode({ enabled: true });
   })
   .name;

angular.bootstrap( document, [ 'app' ])
export default app;
