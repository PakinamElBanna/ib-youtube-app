export class Result {
         public id: any;
         public snippet: any;
         public items: Item[] = [];
         public pageInfo: PageInfo;
         public nextPageToken: string;
         public itemCardType: string;
         constructor(values?: any) {
           Object.assign(this, values);
           if (values.items) {
            this.items = values.items.map(item => new Item(item));
           }

         }

         appendItems(result) {
           this.nextPageToken = result.nextPageToken;
           this.items = [...this.items, ...result.items];
           return this;
         }

       }

export class Item {
  snippet: any;
  itemCardType: '';
  constructor(values?: any) {
    console.log(values);
    Object.assign(this, values);
    if (values.id) {
      this.itemCardType = (values.kind && values.kind === 'youtube#playlistItem') ? 'youtube#playlistItem' : values.id.kind;
      console.log(this);
    }
  }
}


export class PageInfo {
  public totalResults: number;
  public resultsPerPage: number;
  constructor(values?: any) {
    Object.assign(this, values);
  }
}
