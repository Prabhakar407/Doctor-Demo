import Cookies from 'js-cookie';

/**
 * Default safe cookie options:
 * - path: '/' (available site-wide)
 * - expires: 7 days
 * - sameSite: 'lax' (CSRF defense)
 * - secure: true when running on HTTPS
 */
const DEFAULT_OPTIONS = {
  expires: 7,
  path: '/',
  sameSite: 'lax',
  secure: typeof window !== 'undefined' && window.location.protocol === 'https:',
};

/**
 * Set a cookie with specified key and value
 * @param {string} key - Cookie name
 * @param {*} value - Primitive value or Object/Array (will be JSON serialized)
 * @param {Object} options - Custom cookie options
 */
export const setCookie = (key, value, options = {}) => {
  if (!key || typeof window === 'undefined') return;
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  const serialized = typeof value === 'object' ? JSON.stringify(value) : String(value);
  Cookies.set(key, serialized, mergedOptions);
};

/**
 * Get a cookie value by key
 * @param {string} key - Cookie name
 * @param {boolean} isJson - Set true if expecting JSON parsed data
 * @returns {*|null}
 */
export const getCookie = (key, isJson = false) => {
  if (!key || typeof window === 'undefined') return null;
  const raw = Cookies.get(key);
  if (raw === undefined || raw === null) return null;
  if (isJson) {
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  return raw;
};

/**
 * Check if a cookie exists
 * @param {string} key - Cookie name
 * @returns {boolean}
 */
export const hasCookie = (key) => {
  if (!key || typeof window === 'undefined') return false;
  return Cookies.get(key) !== undefined;
};

/**
 * Remove a cookie
 * @param {string} key - Cookie name
 * @param {Object} options - Options (must match path/domain if customized)
 */
export const removeCookie = (key, options = {}) => {
  if (!key || typeof window === 'undefined') return;
  Cookies.remove(key, { path: '/', ...options });
};

export default {
  set: setCookie,
  get: getCookie,
  has: hasCookie,
  remove: removeCookie,
};
