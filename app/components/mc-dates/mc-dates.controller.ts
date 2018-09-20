import { McDatesItem } from './mc-dates.model';

export class McDatesController {
   public mcdates: object;

   // constructor( $scope ) {
   // }

   $onInit() {
      this.mcdates = new McDatesItem( new Date());
   }

   /**
    * @return {undefined}
    */
   changeDate( date: string ) {
   }

}
