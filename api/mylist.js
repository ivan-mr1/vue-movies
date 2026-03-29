import { sendProxyRequest } from './_lib/proxy';

export default async function handler(req, res) {
  const API_URL = process.env.REMOTE_STORAGE_API_URL;
  const API_TOKEN = process.env.REMOTE_STORAGE_API_TOKEN;
  const { method, body, query } = req;

  if (!API_URL) {
    return res.status(500).json({ error: 'Server setup error' });
  }

  let url = API_URL;
  if (query.id) {
    url += `/${query.id}`;
  }

  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  if (['POST', 'PUT', 'PATCH'].includes(method) && body) {
    config.body = JSON.stringify(body);
  }

  return sendProxyRequest(req, res, {
    url,
    config,
    errorPrefix: 'API MyList Error',
  });
}
