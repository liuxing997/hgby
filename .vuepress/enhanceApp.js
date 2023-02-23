import { checkAuth } from "./components/login/helper";
import Login from "./components/login/Login";

export default ({ Vue, options, router, siteData }) => {
  Vue.mixin({
    mounted() {
      const doCheck = () => {
        if (!checkAuth()) {
          this.$dlg.modal(Login, {
            width: 300,
            height: 350,
            title: "用户登录",
            singletonKey: "employee-login",
            maxButton: false,
            closeButton: false,
            callback: (data) => {
              if (data === true) {
                // do some stuff after login
              }
            },
          });
        }
      };

      if (this.$dlg) {
        doCheck();
      } else {
        import("v-dialogs").then((resp) => {
          Vue.use(resp.default);
          this.$nextTick(() => {
            doCheck();
          });
        });
      }
    },
  });
};
