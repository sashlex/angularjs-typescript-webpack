export class McDatesItem {
   public minDate: Date;
   public date1: Date;
   public date2: Date;
   public inputDate1: string;
   public inputDate2: string;
   constructor(
      public date: Date
   ) {
      this.minDate = date;
      this.date1 = date;
      this.date2 = date;
   }
}
