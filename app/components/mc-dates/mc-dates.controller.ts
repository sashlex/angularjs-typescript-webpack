import { McDatesItem } from './mc-dates.model';
import moment = require( 'moment' );

export class McDatesController {
   public mcdates: object;

   // constructor( $scope ) {}

   $onInit() {
      this.mcdates = new McDatesItem( new Date());
   }

   /**
    * @param {number} num - input date number
    * @return {undefined}
    */
   changeDate( num: number ) {
      num === 1 && moment( this.mcdates.inputDate1, 'DDMMYYYY', true ).isValid() && ( this.mcdates.date1 = moment( this.mcdates.inputDate1, 'DDMMYYYY', true ).toDate());
      num === 2 && moment( this.mcdates.inputDate2, 'DDMMYYYY', true ).isValid() && ( this.mcdates.date2 = moment( this.mcdates.inputDate2, 'DDMMYYYY', true ).toDate());
   }

}
