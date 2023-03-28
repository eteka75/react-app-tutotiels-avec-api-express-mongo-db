import http from "../http-common";
import axios from "axios";
//var http = axios;
const BASE = "http://localhost:4000/api";
const options = {
  "Content-type": "application/json",
};
class TutorialDataService {
  getAll() {
    return http.get(`${BASE}/tutorials`);
  }

  get(id) {
    return http.get(`${BASE}/tutorials/${id}`, options);
  }

  create(data) {
    console.log(data);
    // return axios.post("/tutorials", data, options);
    return axios.post(BASE + "/tutorials", data);
  }

  update(id, data) {
    return http.put(`${BASE}/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`${BASE}/tutorials/${id}`, options);
  }

  deleteAll() {
    return http.delete(`${BASE}/tutorials`, options);
  }

  findByTitle(title) {
    return http.get(`${BASE}/tutorials?title=${title}`, options);
  }
}
export default new TutorialDataService();
