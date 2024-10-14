export default defineNuxtRouteMiddleware(async (to, from) => {
    const token = useCookie('token');
    if(token.value) {
        const authStore = useAuthStore();
        if(!authStore.value) {
            const response = await $auth.me();
            if (response.success && response.user) {
                authStore.value = response.user;
            }
        }
    }
});