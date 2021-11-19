import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// function callREST(url, method) {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//           document.getElementById("response").innerHTML = this.responseText;
//       }
//   };
//   xhttp.open(method, url, true);
//   xhttp.send();
// }
 
new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')
