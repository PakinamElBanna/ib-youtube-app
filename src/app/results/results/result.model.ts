export class Result {
         public id: any;
         public snippet: any;
         public items: any[];
         public pageInfo: PageInfo;
         public nextPageToken: string;
         constructor(values?: any) {
           Object.assign(this, values);
         }

         appendItems(result) {
           this.nextPageToken = result.nextPageToken;
           this.items = [...this.items, ...result.items];
           return this;
         }
       }

export class PageInfo {
  public totalResults: number;
  public resultsPerPage: number;
  constructor(values?: any) {
    Object.assign(this, values);
  }
}
