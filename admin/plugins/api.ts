export default defineNuxtPlugin((nuxtApp) => {

    const $api = $fetch.create({
        baseURL: 'http://127.0.0.1:8000/api',
        headers: {
            Accept: 'application/json'
        },
        onRequest({ request, options, error }) {
            const token = useCookie('token');
            
            if (token.value) {
                options.headers.set('Authorization','Bearer ' + token.value);
            }
        },
        onResponseError({ response }) {
            const token = useCookie('token');

            if (response.status === 401) {
                nuxtApp.runWithContext(() => navigateTo('/'));
                token.value = null;
            }
        },
    });
    
    return {
        provide: {
            api: $api,
        },
    }
});