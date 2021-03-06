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

  fetchRelatedPlaylists(query) {
    this.generateParams('playlists', query);
    return this.http.get(`${apiBaseUrl}playlistItems`, {
      params: this.params
    }).pipe(
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
          fields: "items",
          part: "snippet,statistics",
          type: "video",
          id: query.videoId
        };
        break;
      }
      case "videos": {
        params = {
          key: APIKEY,
          fields: "nextPageToken,pageInfo,items",
          part: "snippet",
          type: "video",
          id: query.videoId
        };
        break;
      }
      case "playlist": {
        params = {
          key: APIKEY,
          part: "snippet,contentDetails",
          type: 'playlist',
          maxResults: 10,
          query
        };
        break;
      }
      case 'playlists': {
        params = {
          key: APIKEY,
          part: 'snippet,contentDetails',
          maxResults: 10,
          query
        };
        break;
      }
      case 'channel': {
        params = {
          key: APIKEY,
          fields:
            'items(statistics,snippet(publishedAt,thumbnails(default,medium)),statistics(viewCount,subscriberCount, videoCount),brandingSettings(channel(title,description),image(bannerMobileImageUrl,bannerImageUrl)))',
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
          fields: 'nextPageToken,pageInfo,items',
          part: 'snippet'
        };
        break;
      }
    }
    this.params = Object.assign(params, query);
  }
}
