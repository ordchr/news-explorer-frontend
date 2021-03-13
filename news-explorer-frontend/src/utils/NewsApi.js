const API_KEY = "309e43e3ac5c4842a01fe94c29bddc56";
const NEWS_API_BASEURL = "https://nomoreparties.co/news/v2/everything?";

class NewsApi {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
    this._call = this._call.bind(this);
    this._method = "GET";
    this._url = new URL(this._baseUrl);

    this._defaultOffsetFrom = 7;
    this._defaultOffsetTo = 0;
    this._defaultPageSize = 100;
  }

  _call(params) {
    const requestData = {
      method: this._method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    params.apiKey = this._apiKey;
    params.pageSize = this._defaultPageSize;

    this._url.search = new URLSearchParams(params).toString();

    return fetch(this._url.href, requestData).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  _getDateFrom() {
    let date = new Date();
    date.setDate(date.getDate() - this._defaultOffsetFrom);
    return this._getISODateFromDate(date);
  }

  _getDateTo() {
    let date = new Date();
    date.setDate(date.getDate() - this._defaultOffsetTo);
    return this._getISODateFromDate(date);
  }

  _getISODateFromDate(date) {
    return date.toISOString().substring(0, 10);
  }

  getNewsByQuery(queryString) {
    return this._call({ from: this._getDateFrom(), to: this._getDateTo(), q: queryString });
  }

}

const newsApi = new NewsApi({
  apiKey: API_KEY,
  baseUrl: NEWS_API_BASEURL,
});

export default newsApi;
