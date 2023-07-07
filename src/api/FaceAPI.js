import request from "src/utils/request";

class FaceAPI {
  static endPoint = "/faces";

  static async create(body) {
    return request.post(FaceAPI.endPoint, body);
  }

  static async update(id, body) {
    return request.patch(`${FaceAPI.endPoint}/${id}`, body);
  }

  static async delete(id) {
    return request.delete(`${FaceAPI.endPoint}/${id}`);
  }
}

export default FaceAPI;
