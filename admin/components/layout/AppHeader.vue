<script setup lang="ts">

const token = useCookie('token');
const authStore = useAuthStore();

const menu = ref();
const avatarMenu = ref([
    {
        label: authStore.value.name,
        items: [
            {
                label: 'Kijelentkezés',
                icon: 'pi pi-sign-out',
                command: (): void => {
                    token.value = null;
                    clearNuxtState('auth');
                    navigateTo('/');
                }
            },
        ]
    }
]);
</script>
<template>
    <div class="header flex align-items-center px-5">
        <div>
            <RouterLink to="/dashboard" class="no-underline" style="color: var(--p-stone-950)">
                <h2>Kezelőfelület</h2>
            </RouterLink>
        </div>
        <div class="ml-auto">
            <Avatar icon="pi pi-user" class="cursor-pointer" size="large" @click="menu.toggle($event)" />
            <Menu ref="menu" id="overlay_menu" :model="avatarMenu" :popup="true" />
        </div>
    </div>
</template>