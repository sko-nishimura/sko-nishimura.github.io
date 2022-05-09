var app = new Vue({
  el: "#content",
  data: {
    contents: [],
  },
  created: function () {
    var _this = this;
    axios.get('https://umusample.microcms.io/api/v1/news', { headers: { "X-API-KEY": "4ae495e5286644a798116bf75130dae3f780" } })
    .then(response => { this.contents = response.data.contents; })
    .catch(error => {
      window.alert(error);
    });
  }
});

var app2 = new Vue({
  el: "#single-content",
  data: {
    contents: [],
  },
  created: function () {
    axios.get('https://umusample.microcms.io/api/v1/news', { headers: { "X-API-KEY": "4ae495e5286644a798116bf75130dae3f780" } })
    .then(response => { this.contents = response.data.contents; })
    .catch(error => {
      window.alert(error);
    });
  }
});