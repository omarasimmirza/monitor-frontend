import http from "./http-common";
const getAll = () => {
  return http.get("/");
};
const get = (ip) => {
  return http.get(`/${ip}/`);
};
const create = (data) => {
  return http.post("/", data);
};
const update = (ip, data) => {
  return http.put(`/${ip}/`, data);
};
const remove = (ip) => {
  return http.delete(`/${ip}/`);
};
const MachineService = {
  getAll,
  get,
  create,
  update,
  remove
};
export default MachineService;