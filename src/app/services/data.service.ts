import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, retry } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { apiBaseUrl, APIKEY } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  params;
  error = 'Something went wrong!';

  constructor(private http: HttpClient) {}

  search(query?) {
    this.generateParams('search', query);
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
          return throwError('Something went wrong!');
        })
      );
  }

  fetchVideo(query) {
    this.generateParams('video', query);
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

  fetchChannel(query) {
    this.generateParams('channel', query);
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

  fetchPlaylists(query) {
          this.generateParams('playlist', query);
          return this.http
      .get(`${apiBaseUrl}playlistItems`, {
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
    debugger
    let params;
    switch (type) {
      case 'video': {
        params = {
          key: APIKEY,
          fields: 'snippet(title,channelId,channelTitle,publishedAt),statistics(viewCount,likeCount,dislikeCount)',
          part: 'snippet,statistics',
          type: 'video',
          id: query.videoId
        };
        break;
      }
      case 'videos': {
        params = {
          key: APIKEY,
          fields: 'nextPageToken,pageInfo,items(snippet,id)',
          part: 'snippet',
          type: 'video',
          id: query.videoId
        };
        break;
      }
      case 'playlist': {
        params = {
          key: APIKEY,
          fields: 'nextPageToken,pageInfo,items(snippet,id)',
          part: 'snippet',
          type: 'playlist',
        };
        break;
      }
      case 'channel': {
        params = {
          key: APIKEY,
          fields: 'items(statistics,snippet(publishedAt,thumbnails(default,medium)),statistics(viewCount,subscriberCount, videoCount),brandingSettings(channel(title,description),image(bannerMobileImageUrl,bannerImageUrl)))',
          part: 'snippet,statistics,contentDetails,brandingSettings',
          type: 'channel',
          id: query.id
        };
        break;
      }

      case 'search': {
        params = {
          key: APIKEY,
          maxResults: 10,
          fields: 'nextPageToken,pageInfo,items(snippet,id)',
          part: 'snippet'
        };
        break;
      }
    }
    this.params = Object.assign(params, query);
  }
}
