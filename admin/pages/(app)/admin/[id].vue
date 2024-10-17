<script setup lang="ts">
definePageMeta({
    alias: '/admin'
});

const route = useRoute();
const form = reactive({
    data: {} as any
});

if(isEdit()) {
    const { data } = await useAsyncData(() => fetchAPI(`/admins/${route.params.id}`));
    if(data.value.success === true) {
        form.data = data.value.data;
    }
}

</script>
<template>
    <Panel :header="isEdit() ? 'Adminisztrátor > Módosítás' : 'Adminisztrátor > Új'">
        <form>
            <IftaLabel>
                <InputText id="name" v-model="form.data.name" class="w-full" />
                <label for="name">Név</label>
            </IftaLabel>

            <IftaLabel class="mt-3">
                <InputText id="email" v-model="form.data.email" class="w-full" />
                <label for="email">Email cím</label>
            </IftaLabel>

            <div class="flex gap-3 mt-3">
                <IftaLabel class="flex-1">
                    <InputText id="password" v-model="form.data.password" class="w-full" />
                    <label for="password">Jelszó</label>
                </IftaLabel>

                <IftaLabel class="flex-1">
                    <InputText id="password-confirmation" v-model="form.data.password_confirmation" class="w-full" />
                    <label for="password-confirmation">Jelszó mégegyszer</label>
                </IftaLabel>
            </div>

            <template v-if="isEdit()">
                <IftaLabel class="mt-3">
                    <InputText id="created-at" :value="new Date(form.data.created_at).toLocaleString()" class="w-full" disabled />
                    <label for="created-at">Létrehozva</label>
                </IftaLabel>

                <IftaLabel class="mt-3">
                    <InputText id="updated-at" :value="new Date(form.data.created_at).toLocaleString()" class="w-full" disabled />
                    <label for="updated-at">Módosítva</label>
                </IftaLabel>
            </template>

            <Button type="submit" label="Mentés" severity="success" class="mt-3" />
        </form>
    </Panel>
</template>