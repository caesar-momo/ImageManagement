
Custom VueJS + Vuex + Vue Router Setup

This setup is modeled after a hybrid server+client configuration running from the same code base.


### Installation

```bash
yarn install
yarn dev-server
```


### Tips

- Frontend files are in `assets/` instead of `src/` because the latter contains server-side files for a Symfony application.
- Hot Reload does not work for SCSS changes.


### Relevant Resources

- [Yarn](https://yarnpkg.com/en/)
- [Vue](https://vuejs.org/v2/guide/)
- [Vuex](https://vuex.vuejs.org/)
- [Vue Router](https://router.vuejs.org/api/)
- [Encore (Symfony Frontend)](https://symfony.com/doc/current/frontend.html)
