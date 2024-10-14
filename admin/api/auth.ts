interface LoginResponse {
    success: boolean;
    token: string;
    errors?: object;
}

export const $auth = 
{
    async login(data: FormData): Promise<LoginResponse> {
        return await usePOST('auth/login', data);
    },
    
    async me() {
        return await useGET('auth/me');
    }
};