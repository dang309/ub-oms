import request from "src/utils/request";

class AuthAPI {
  static endPoint = "/auth";

  static async login(username, password) {
    return request.post(AuthAPI.endPoint + "/login", { username, password });
  }

  static async checkToken(token) {
    return request.get(AuthAPI.endPoint + "/check-token", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default AuthAPI;
