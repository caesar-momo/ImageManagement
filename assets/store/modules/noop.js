
import Vue from 'vue';

export default {
    namespaced: true,

    state: () => ({
        nothing: {},
    }),

    actions: {
        set({ commit }, { key, value }) {
            commit('set', { key, value });
        },

        clear({ commit }, { key }) {
            commit('clear', { key });
        },
    },

    mutations: {
        set(state, { key, value }) {
            Vue.set(state.nothing, key, value);
        },

        clear(state, { key }) {
            Vue.delete(state.nothing, key);
        },
    },
};
