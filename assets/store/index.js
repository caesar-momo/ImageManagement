import Vue from 'vue';
import Vuex from 'vuex';

import noop from '@/store/modules/noop';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        noop,
    },
    strict: debug,
});
