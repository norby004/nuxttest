
interface AuthStoreInterface {
    id: number;
    name: string;
    email: string;
    created_at: Date;
    updated_at: Date;
}

export const useAuthStore = () => useState<AuthStoreInterface>('auth');