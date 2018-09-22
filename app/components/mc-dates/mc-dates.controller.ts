import { McDatesItem } from './mc-dates.model';
import moment = require( 'moment' );

export class McDatesController {
   public mcdates: object;
   private form: any;

   // constructor( $scope ) {}

   $onInit() {
      this.mcdates = new McDatesItem( new Date());
   }

   /**
    * @param {number} id - input id number
    * @return {undefined}
    */
   changeDate( id: number ) {
      // this.form.inputDate1.$setValidity( 'required', false );
      id === 11 && moment( this.mcdates.inputDate1, 'DDMMYYYY', true ).isValid() && ( this.mcdates.date1 = moment( this.mcdates.inputDate1, 'DDMMYYYY', true ).toDate());
      id === 21 && moment( this.mcdates.inputDate2, 'DDMMYYYY', true ).isValid() && ( this.mcdates.date2 = moment( this.mcdates.inputDate2, 'DDMMYYYY', true ).toDate());
      id === 12 && ( this.mcdates.inputDate1 = moment( this.mcdates.date1 ).format( 'DDMMYYYY' ));
      id === 22 && ( this.mcdates.inputDate2 = moment( this.mcdates.date2 ).format( 'DDMMYYYY' ));
   }

}
