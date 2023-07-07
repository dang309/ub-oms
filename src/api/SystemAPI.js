import request from "src/utils/request";

class SystemAPI {
  static endPoint = "/system";

  static async create(body) {
    return request.post(SystemAPI.endPoint, body);
  }

  static async update(id, body) {
    return request.patch(`${SystemAPI.endPoint}/${id}`, body);
  }

  static async delete(id) {
    return request.delete(`${SystemAPI.endPoint}/${id}`);
  }
}

export default SystemAPI;
