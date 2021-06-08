import http from './http';

export async function photographerPopularApi() {
  return http.get('/photographer/popular');
}

export async function photographerRecommendationApi() {
  return http.get('/photographer/recommendation');
}

export async function CategoryApi(id) {
  return http.get('/photographer/combo/' + id);
}

export async function searchApi(data) {
  return http.get('/photographer/search', data);
}
