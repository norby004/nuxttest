export const $admin =
{
    all(): Promise<IResponse<IAdminAllResponse[]>> 
    {
        return fetchAPI('admins');
    },

    show(id: string): Promise<IResponse<IAdminShowResponse>> 
    {
        return fetchAPI(`/admins/${id}`);
    },

    store(data: object): Promise<IResponse<null>> 
    {
        return fetchAPI('/admins/store', {
            method: 'POST',
            body: data
        });
    },

    update(id: string, data: object): Promise<IResponse<null>>
    {
        return fetchAPI(`/admins/${id}`, {
            method: 'PUT',
            body: data
        });
    }
};