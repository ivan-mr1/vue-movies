import proxyHandler from './_lib/proxy-handler';

/**
 * Прокси-эндпоинт для поиска фильмов
 */
export default async function handler(req, res) {
  return proxyHandler(req, res, {
    targetUrl: `${process.env.REMOTE_CONTENT_API_URL}/3/search/movie`,
    apiKey: process.env.REMOTE_CONTENT_API_KEY,
    keyParam: 'api_key', // Название параметра ключа
    mapping: { q: 'query' }, // Маппинг параметра q фронтенда в query
    extraParams: { language: 'ru-RU' },
    cache: 's-maxage=3600, stale-while-revalidate',
  });
}
