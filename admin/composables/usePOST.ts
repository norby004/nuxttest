
export async function usePOST<T>(url: string, data: FormData | object, options: object = {})
{
    return await useNuxtApp().$api<T>(url, {
        method: 'POST',
        body: data,
        ...options,
    }).catch(error => error.data);
}