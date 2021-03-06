import { request } from './request';

/**
 * @description 登录, 后端会把token 写入浏览器cookis中
 *
 * @export
 * @param params
 * @returns
 */
export async function login(params) {
  const { error, data } = await request('post', '/account/login/', params);
  return error ? false : data;
}

export async function logout() {
  const { error } = await request('get', 'account/logout', {}, { keepWhenNavigate: true });
  return !error;
}

// 获取我的信息
export async function getMe() {
  const { error, data } = await request('get', 'account/users/me', {}, { keepWhenNavigate: true });
  return error ? {} : data;
}

/**
 * @description 获取nonce
 * @export
 * @param publicKey 钱包地址
 * @returns nonce
 */
export async function getNonce(publicKey) {
  const { error, data } = await request('post', '/account/nonce/', { publicKey: publicKey });
  return error ? false : data.nonce;
}

/**
 * 通过userId获取用户信息
 * @param {string} userId 用户id
 */
export async function getUserInfo(userId) {
  const { error, data } = await request('get', `/account//users/${userId}`);
  return error ? false : data;
}
