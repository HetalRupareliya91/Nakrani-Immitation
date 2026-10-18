import http from './http';

const BASE = '/wholesale-dealers';

export default {
  list: (params) => http.get(BASE, { params }),
  get: (id) => http.get(BASE + '/' + id),
  create: (data) => http.post(BASE, data),
  update: (id, data) => http.put(BASE + '/' + id, data),
  remove: (id) => http.delete(BASE + '/' + id),
};
