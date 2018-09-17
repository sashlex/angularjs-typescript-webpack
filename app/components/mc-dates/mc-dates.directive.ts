import angular from 'angular';

export class McDates implements angular.IDirective {
   restrict: string;

   constructor() {
      this.restrict = 'A';
   }
   link( $scope ) {
   }
}
