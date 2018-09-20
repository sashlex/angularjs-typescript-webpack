import { McDatesItem } from './mc-dates.model';
import moment = require( 'moment' );

export class McDatesController {
   public mcdates: object;

   // constructor( $scope ) {}

   $onInit() {
      this.mcdates = new McDatesItem( new Date());
   }

   /**
    * @param {number} num - input field number ( like id )
    * @return {undefined}
    */
   changeDate( num: number ) {
      num === 11 && moment( this.mcdates.inputDate1, 'DDMMYYYY', true ).isValid() && ( this.mcdates.date1 = moment( this.mcdates.inputDate1, 'DDMMYYYY', true ).toDate());
      num === 21 && moment( this.mcdates.inputDate2, 'DDMMYYYY', true ).isValid() && ( this.mcdates.date2 = moment( this.mcdates.inputDate2, 'DDMMYYYY', true ).toDate());
      num === 12 && ( this.mcdates.inputDate1 = moment( this.mcdates.date1 ).format( 'DDMMYYYY' ));
      num === 22 && ( this.mcdates.inputDate2 = moment( this.mcdates.date2 ).format( 'DDMMYYYY' ));
   }

}
