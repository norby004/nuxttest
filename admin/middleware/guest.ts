export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('token');
    if(token.value && to.name === 'login') {
        return navigateTo('/dashboard');
    }
});