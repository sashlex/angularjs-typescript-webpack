import { McDatesItem } from './mc-dates.model';

export class McDatesController {
   public mcdates: object;

   $onInit() {
      this.mcdates = new McDatesItem( new Date());
   }

   /**
    * @return {undefined}
    */
   changeDate() {
   }

}
