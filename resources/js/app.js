/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
require("./bootstrap");

window.Vue = require("vue");
Vue.use(BootstrapVue);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component(
//     "example-component",
//     require("./components/ExampleComponent.vue").default
// );
Vue.component("footer-content", require("./components/Footer.vue").default);
Vue.component("navbar", require("./components/Navbar.vue").default);
Vue.component("hero", require("./components/Hero.vue").default);
Vue.component("tools", require("./components/Tools.vue").default);
Vue.component("paket", require("./components/Paket.vue").default);
Vue.component("limit", require("./components/Limit.vue").default);
Vue.component(
    "include-package",
    require("./components/IncludePackage.vue").default
);
Vue.component("support", require("./components/Support.vue").default);
Vue.component("modul", require("./components/Modul.vue").default);
Vue.component(
    "support-footer",
    require("./components/SupportFooter.vue").default
);
Vue.component("like", require("./components/Like.vue").default);
Vue.component("help", require("./components/Help.vue").default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app"
});
