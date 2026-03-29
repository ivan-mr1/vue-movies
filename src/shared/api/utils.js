/**
 * Утилита для формирования параметров строки запроса.
 * Позволяет единообразно добавлять API-ключи и фильтровать пустые значения.
 *
 * @param {Object} params - Объект с параметрами запроса
 * @param {string|null} apiKey - Значение API-ключа (опционально)
 * @param {string|null} keyName - Имя ключа в URL (например, 'api_key')
 * @returns {URLSearchParams}
 */
export const buildApiParams = (params = {}, apiKey = null, keyName = null) => {
  const searchParams = new URLSearchParams();

  // 1. Добавляем основные параметры запроса
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.append(key, value);
    }
  });

  // 2. Добавляем API-ключ, если он передан
  if (apiKey && keyName) {
    searchParams.append(keyName, apiKey);
  }

  return searchParams;
};
