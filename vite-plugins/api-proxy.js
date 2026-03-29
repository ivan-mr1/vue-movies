export const createApiProxy = (options) => {
  const {
    target,
    keyName = 'api_key',
    keyValue,
    mapping = {},
    extraParams = {},
    rewrite,
    headers = {},
  } = options;

  return {
    target,
    changeOrigin: true,
    rewrite,
    configure: (proxy) => {
      proxy.on('proxyReq', (proxyReq, req) => {
        const url = new URL(req.url, 'http://localhost');
        const newParams = new URLSearchParams();

        for (const [key, value] of url.searchParams) {
          const targetKey = mapping[key] || key;
          newParams.append(targetKey, value);
        }

        if (keyName && keyValue) {
          newParams.append(keyName, keyValue);
        }

        for (const [key, value] of Object.entries(extraParams)) {
          newParams.append(key, value);
        }

        const pathPart = proxyReq.path.split('?')[0];
        proxyReq.path = `${pathPart}?${newParams.toString()}`;

        for (const [key, value] of Object.entries(headers)) {
          proxyReq.setHeader(key, value);
        }
      });
    },
  };
};
