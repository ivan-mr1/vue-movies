/**
 * Универсальный обработчик прокси-запросов для Vercel Serverless Functions.
 * Позволяет скрывать API-ключи и полные адреса сторонних сервисов.
 *
 * @param {Object} req - Request объект Vercel
 * @param {Object} res - Response объект Vercel
 * @param {Object} config - Конфигурация прокси
 */
export default async function proxyHandler(req, res, config) {
  const {
    targetUrl,
    apiKey,
    keyParam = 'api_key',
    extraParams = {},
    mapping = {},
    headers = {},
    cache = 's-maxage=3600, stale-while-revalidate',
    method = req.method,
  } = config;

  // 1. Проверка конфигурации
  if (!apiKey || !targetUrl) {
    console.error('[SERVER ERROR]: API configuration (URL or Key) is missing');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const url = new URL(targetUrl);

    // 2. Обработка параметров запроса фронтенда
    for (const [key, value] of Object.entries(req.query)) {
      const targetKey = mapping[key] || key;
      url.searchParams.append(targetKey, value);
    }

    // 3. Добавление секретных параметров (ключ, язык и т.д.)
    if (keyParam && apiKey) {
      url.searchParams.append(keyParam, apiKey);
    }
    for (const [key, value] of Object.entries(extraParams)) {
      url.searchParams.append(key, value);
    }

    // 4. Формирование запроса к реальному API
    const fetchOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    // Если это POST/PUT, передаем тело запроса
    if (['POST', 'PUT', 'PATCH'].includes(method) && req.body) {
      fetchOptions.body = JSON.stringify(req.body);
    }

    const response = await fetch(url.toString(), fetchOptions);
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.status_message || data.message || 'Remote API Error',
      });
    }

    // 5. Установка кэширования
    if (cache && method === 'GET') {
      res.setHeader('Cache-Control', cache);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('[Proxy Handler Error]:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
