
export async function fetchAPI<T>(url: string, options: object = {})
{
    return useNuxtApp().$api<T>(url, options).catch(error => error.data);
}