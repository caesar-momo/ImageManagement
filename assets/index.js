import Vue from 'vue';

import App from '@/views/App.vue';
import store from '@/store';
import router from '@/router';

// Turn off the console warning in dev
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App />',
    components: { App },
    store,
    router,
});
