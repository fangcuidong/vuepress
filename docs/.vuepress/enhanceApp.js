import { checkAuth, TIMER } from "./login/helper";
import Login from "./login/Login";

export default ({ Vue, options, router, siteData }) => {
    // router.beforeEach((to, from, next) => {
    //     if (window.sessionStorage.getItem('token') === 'pass') {
    //         next();
    //     } else {
    //         next("/");
    //     }
    // });
    Vue.mixin({
        mounted() {
            const doCheck = () => {
                if (!checkAuth()) {
                    if (window.location.pathname !== "/") {
                        Vue.nextTick(() => {
                            router.replace("/");
                        });
                    }
                    this.$dlg.modal(Login, {
                        width: 300,
                        height: 350,
                        title: "Employee login",
                        singletonKey: "employee-login",
                        maxButton: false,
                        closeButton: false,
                        callback: (data) => {
                            if (data === true) {
                                // do some stuff after login
                                alert("登录成功");
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
