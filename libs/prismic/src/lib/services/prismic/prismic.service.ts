import { Injectable } from '@angular/core';
import Prismic from 'prismic-javascript';
import { PrismicApiSearchResponse, PrismicPage } from './prismic.interface';

@Injectable({
  providedIn: 'root'
})
export class PrismicService {

  api = Prismic.getApi('https://traditionalfarmhousebeef.cdn.prismic.io/api/v2');

  getPageByUid(path): Promise<PrismicApiSearchResponse<PrismicPage>> {
    const query = [
      Prismic.Predicates.at('document.type', 'page'),
      Prismic.Predicates.at('my.page.uid', path)
    ];

    return this.api.then(api => api.query(query, {}));
  }

  getPagesByTags(tags: string[], knownUids: string[] = []): Promise<PrismicApiSearchResponse<PrismicPage>> {
    const query = [
      Prismic.Predicates.at('document.type', 'page'),
      Prismic.Predicates.any('document.tags', tags),
      ...knownUids.map(uid => Prismic.Predicates.not('my.page.uid', uid))
    ];

    return this.api.then(api => api.query(query, {}));
  }

}
