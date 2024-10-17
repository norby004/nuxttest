export const $admin =
{
    all(): Promise<IResponse<IAdminAllResponse[]>> {
        return fetchAPI('admins');
    },

    show(id: string): Promise<IResponse<IAdminShowResponse>> {
        return fetchAPI(`/admins/${id}`);
    }
};