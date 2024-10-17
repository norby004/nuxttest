export default defineNuxtRouteMiddleware(async (to, from) => {
    const token = useCookie('token');

    if (!token.value && to.name !== 'login') {
        return navigateTo('/');
    }
   
    const authStore = useAuthStore();
    if(!authStore.value) {
        const response = await $auth.me();
        if (response.success && response.data) {
            authStore.value = response.data;
        } else if (to.name !== 'login') {
            return navigateTo('/');
        }
    }
    
});