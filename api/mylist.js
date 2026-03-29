import proxyHandler from './_lib/proxy-handler';

/**
 * Прокси-эндпоинт для списка пользователя (Mokki)
 * Поддерживает GET (получение) и POST (добавление)
 */
export default async function handler(req, res) {
  const STORAGE_TOKEN = process.env.REMOTE_STORAGE_API_TOKEN;
  const STORAGE_URL = process.env.REMOTE_STORAGE_API_URL;

  return proxyHandler(req, res, {
    targetUrl: STORAGE_URL,
    apiKey: STORAGE_TOKEN,
    keyParam: null, // Ключ передаем не в URL, а в заголовке Authorization
    headers: {
      Authorization: `Bearer ${STORAGE_TOKEN}`,
    },
    cache: null, // Динамические списки не кэшируем
  });
}
