import http from './http';

export async function photographerPopularApi() {
  return http.get('/photographer/popular');
}

export async function photographerRecommendationApi() {
  return http.get('/photographer/recommendation');
}
