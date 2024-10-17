export const $auth = 
{
    async login(data: FormData): Promise<IResponse<ILoginResponse>> {
        return await fetchAPI('auth/login',{
            method: 'POST',
            body: data
        });
    },
    
    async me(): Promise<IResponse<IMeResponse>> {
        return await fetchAPI('auth/me');
    }
};