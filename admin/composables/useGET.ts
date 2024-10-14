
export async function useGET<T>(url: string, params: object = {}, options: object = {})
{
    return await useNuxtApp().$api<T>(url, {
        method: 'GET',
        query: params,
        ...options,
    }).catch(error => error.data);
}