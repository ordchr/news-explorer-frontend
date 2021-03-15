const MAIN_API_BASEURL = "http://172.16.33.33:3001";

class MainApi {
  constructor({baseUrl, headersAuthorization}) {
    this._baseUrl = baseUrl;
    this._call = this._call.bind(this);
  }

  _call(method, action, body) {
    const requestData = {
      method: method,
      headers: {
        // authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
    };
    console.log(body);
    if (body) {
      requestData.body = JSON.stringify(body);
    }
    console.log(requestData);
    return fetch(`${this._baseUrl}/${action}`, requestData).then(
        res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(res);
        }
      );
  }

  registerUser(body) {
    return this._call('POST', 'signup', body);
  }

  createArticle() {
    return this._call('GET', 'users/me');
  }

  getArticles() {
    return this._call('GET', 'users/me');
  }

  deleteArticle() {
    return this._call('GET', 'users/me');
  }

  register(body) {
    return this._call('POST', 'signup', body);
  }

  login(body) {
    return this._call('POST', 'signin', body);
  }

  validateToken(jwt) {
    return this._call('GET', 'users/me', "", {
      "Authorization" : `Bearer ${jwt}`
    });
  }

}

const mainApi = new MainApi({
  baseUrl: MAIN_API_BASEURL,
});

export default mainApi;
