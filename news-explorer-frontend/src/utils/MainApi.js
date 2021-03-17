const MAIN_API_BASEURL = "http://api.yabp.ru:3001";

class MainApi {
  constructor({ baseUrl, headersAuthorization }) {
    this._baseUrl = baseUrl;
    this._call = this._call.bind(this);
  }

  _call(method, action, body) {
    const requestData = {
      method: method,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    };
    if (body) {
      requestData.body = JSON.stringify(body);
    }
    return fetch(`${this._baseUrl}/${action}`, requestData).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    });
  }

  registerUser(body) {
    return this._call("POST", "signup", body);
  }

  login(body) {
    return this._call("POST", "signin", body);
  }

  createArticle(body) {
    return this._call("POST", "articles", body);
  }

  getArticles() {
    return this._call("GET", "articles");
  }

  deleteArticle(articleId) {
    return this._call("DELETE", "articles/" + articleId);
  }

  register(body) {
    return this._call("POST", "signup", body);
  }

  validateToken(jwt) {
    return this._call("GET", "users/me", "", {
      Authorization: `Bearer ${jwt}`,
    });
  }
}

const mainApi = new MainApi({
  baseUrl: MAIN_API_BASEURL,
});

export default mainApi;
