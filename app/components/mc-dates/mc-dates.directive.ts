import angular from 'angular';
import template from './mc-dates-directive.html';

export class McDates implements angular.IDirective {
   restrict: string;
   template: string;

   constructor() {
      this.restrict = 'A';
      this.template = template;
   }
}
