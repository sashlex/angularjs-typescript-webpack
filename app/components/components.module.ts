import * as angular from 'angular';
import { McDatesModule } from './mc-dates/index';

export const ComponentsModule = angular
   .module( 'components', [
      McDatesModule
   ])
   .name;