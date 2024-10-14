<script setup lang="ts">

definePageMeta({
    layout: 'login',
    alias: '/',
    middleware: 'guest'
});

const form = reactive({
    error: {} as any,
    loading: false
});

const token = useCookie('token');

const handleSubmit = async (event: Event) => {
    form.loading = true;
    const response = await $auth.login(new FormData(event.target as HTMLFormElement)).finally(() => form.loading = false);
    form.error = response.errors || {};
    if(response.success) {
        token.value = response.token;
        navigateTo('/dashboard');
    }
}

</script>

<template>
    <form @submit.prevent="handleSubmit">
        <div class="flex flex-column gap-2 mt-3">
            <label for="email">Email</label>
            <InputText name="email" type="text" size="large" />
            <small style="color: var(--p-red-600)" v-if="form.error.hasOwnProperty('email')">{{ form.error.email[0] }}</small>
        </div>
        <div class="flex flex-column gap-2 mt-3">
            <label for="email">Jelszó</label>
            <InputText name="password" type="password" size="large" />
            <small style="color: var(--p-red-600)" v-if="form.error.hasOwnProperty('password')">{{ form.error.password[0] }}</small>
        </div>
        <div class="flex justify-content-center mt-4">
            <Button type="submit" label="Bejelentkezés" size="large" :loading="form.loading" />
        </div>
    </form>
</template>