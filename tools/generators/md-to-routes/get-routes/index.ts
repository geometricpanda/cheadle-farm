import * as Prismic from 'prismic-javascript';

const buildUrl = (type, uid) => {
  let base = '';

  switch (type) {
    case 'page':
      base = '';
      break;
    default:
      throw new Error(`Unknown Type ${type}`);
  }

  if (uid === 'home') {
    uid = '';
  }

  return `${base}/${uid}`;
};

export default async function getUrls(prismicUrl) {
  const api = await Prismic.getApi(prismicUrl);

  try {
    const resp = await api.query(Prismic.Predicates.at('document.type', 'page'), { pageSize: 100 });
    return resp
      .results
      .map(result => buildUrl(result.type, result.uid))
      .flat();

  } catch (e) {
    throw new Error(e);
  }

}
