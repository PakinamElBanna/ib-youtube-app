import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { apiBaseUrl, APIKEY } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class DataService {
  params;
  error = "Something went wrong!";

  constructor(private http: HttpClient) {}

  search(query?) {
    this.generateParams("search", query);
    return this.http
      .get(`${apiBaseUrl}search`, {
        params: this.params
      })
      .pipe(
        map(response => {
          const data = response;
          return data;
        }),
        catchError((error: Response) => {
          return throwError("Something went wrong!");
        })
      );
  }

  fetchVideo(id) {
    this.generateParams("video", id);
    return this.http
      .get(`${apiBaseUrl}videos`, {
        params: this.params
      })
      .pipe(
        retry(3),
        map(response => {
          const data = response;
          return data;
        }),
        catchError((error: Response) => {
          return throwError(this.error);
        })
      );
  }

  fetchVideos(id) {
    console.log(id);
    this.generateParams('videos', id);
    return this.http
      .get(`${apiBaseUrl}search`, {
        params: this.params
      })
      .pipe(
        retry(3),
        map(response => {
          const data = response;
          return data;
        }),
        catchError((error: Response) => {
          return throwError(this.error);
        })
      );
  }

  fetchChannel(id) {
    this.generateParams("channel", id);
    return this.http
      .get(`${apiBaseUrl}channels`, {
        params: this.params
      })
      .pipe(
        retry(3),
        map(response => {
          const data = response;
          return data;
        }),
        catchError((error: Response) => {
          return throwError(this.error);
        })
      );
  }

  generateParams(type: string, query) {
    let params;
    switch (type) {
      case "video": {
        params = {
          key: APIKEY,
          fields:
            "items(snippet(title,channelId,channelTitle,publishedAt),statistics(viewCount,likeCount,dislikeCount))",
          part: "snippet,statistics",
          type: "video",
          id: query.id
        };
        break;
      }
      case "videos": {
        params = {
          key: APIKEY,
          fields: "nextPageToken,pageInfo,items(snippet,id)",
          part: "snippet",
          type: "video",
          relatedToVideoId: query.relatedToVideoId
        };
        break;
      }
      case "channel": {
        params = {
          key: APIKEY,
          // tslint:disable-next-line:max-line-length
          fields:
            "items(statistics,snippet(publishedAt,thumbnails(default,medium)),statistics(viewCount,subscriberCount, videoCount),brandingSettings(channel(title,description),image(bannerMobileImageUrl,bannerImageUrl)))",
          part: "snippet,statistics,contentDetails,brandingSettings",
          type: "channel",
          id: query.id
        };
        break;
      }

      case "search": {
        params = {
          key: APIKEY,
          maxResults: 10,
          fields: "nextPageToken,pageInfo,items(snippet,id)",
          part: "snippet"
        };
        break;
      }
    }
    this.params = Object.assign(params, query);
  }
}
