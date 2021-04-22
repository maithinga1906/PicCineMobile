import http from './http';

export async function userRegisterApi(data) {
  return http.post('/user/register', data);
}

export async function userLoginApi(data) {
  return http.post('/login', data);
}

export async function userInfoApi() {
  return http.get('/info');
}
