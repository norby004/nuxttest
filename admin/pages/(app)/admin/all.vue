<script setup lang="ts">
import { FilterMatchMode } from '@primevue/core/api';

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const { data: admins, status } = await useAsyncData(() => fetchAPI('admins'));

</script>
<template>
    <Panel header="Adminisztrátorok">
        <DataTable :value="admins.data" stripedRows paginator :rows="10" v-model:filters="filters" :globalFilterFields="['name','email']">
            <template #header>
                <div class="flex justify-content-end">
                    <IconField>
                        <InputIcon>
                            <i class="pi pi-search" />
                        </InputIcon>
                        <InputText v-model="filters['global'].value" placeholder="Keresés..." />
                    </IconField>
                </div>
            </template>
            <template #empty>Nem található a szűrési feltételeknek megfelelő találat.</template>
            <Column field="id" header="Azonosító"></Column>
            <Column field="name" header="Név"></Column>
            <Column field="email" header="Email cím"></Column>
            <Column field="created_at" header="Létrehozva">
                <template #body="{ data }">
                    {{ new Date(data.created_at).toLocaleString() }}
                </template>
            </Column>
            <Column header="Műveletek">
                <template #body="{ data }">
                    <div class="flex gap-2">
                        <Button label="Módosítás" @click="navigateTo(`/admin/${data.id}`)" />
                        <Button label="Törlés" severity="danger" />
                    </div>
                </template>
            </Column>
        </DataTable>
    </Panel>
</template>