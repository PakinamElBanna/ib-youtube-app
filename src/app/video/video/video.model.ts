export class Video {
  public id: string;
  public publishedAt: string;
  public title: string;
  public statistics: Statistics;
  public channelTitle: string;
  public channelId: string;
  constructor({statistics , player, snippet}) {
    this.title = snippet.title;
    this.publishedAt = snippet.publishedAt;
    this.channelTitle = snippet.channelTitle;
    this.channelId = snippet.channelId;
    this.statistics = statistics;
  }
}

export class Statistics {
  public viewCount: number;
  public likeCount: number;
  public dislikeCount: number;
  public subscriberCount: number;
  constructor(values?: any) {
    Object.assign(this, values);
  }
}
