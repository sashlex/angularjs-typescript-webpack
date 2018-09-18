import { McDatesItem } from './mc-dates.model';

export class McDatesController {
   public date1: object;
   public date2: object;

   $onInit() {
      this.date1 = new Date();
      this.date2 = new Date();
   }

}
