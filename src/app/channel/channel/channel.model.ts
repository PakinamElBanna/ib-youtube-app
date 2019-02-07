export class Channel {
  public id: string;
  public title: string;
  public description: string;
  public statistics: Statistics;
  public bannerDefaultImageUrl: string;
  public bannerMobileImageUrl: string;
  public defaultThumbnail: any;
  public mediumThumbnail: any;
  public thumbnails: any;
  // public playListId: string;
  constructor({statistics, brandingSettings, snippet}) {
    this.bannerMobileImageUrl = brandingSettings.image.bannerMobileImageUrl;
    this.bannerDefaultImageUrl = brandingSettings.image.bannerDefaultImageUrl;
    this.statistics = statistics;
    this.title = brandingSettings.channel.title;
    this.description = brandingSettings.channel.description;
    this.defaultThumbnail = brandingSettings.image.bannerMobileImage;
    this.mediumThumbnail = brandingSettings.image.bannerImage;
    this.thumbnails = snippet.thumbnails;
    // this.playListId = brandingSettings.watch.featuredPlaylistId;
  }
}

export class Statistics {
  public viewCount: number;
  public subscriberCount: number;
  public videoCount: number;
  constructor(values?: any) {
    Object.assign(this, values);
  }
}
