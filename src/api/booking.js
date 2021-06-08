import http from './http';

export async function showBookingApi(id) {
  return http.get('/booking/show/customer/' + id);
}

export async function bookApi(data) {
  return http.post('/booking/store', data);
}
