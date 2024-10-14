<script setup lang="ts">

const admins = ref();

const { data } = await useAPI('admins');

if(data.value.success) {
    admins.value = data.value.items;
}

</script>
<template>
    <Panel header="Adminisztrátorok">
        <DataTable :value="admins" showGridlines stripedRows>
            <Column field="id" header="Azonosító"></Column>
            <Column field="name" header="Név"></Column>
            <Column field="email" header="Email cím"></Column>
            <Column field="created_at" header="Létrehozva">
                <template #body="{ data }">
                    {{ new Date(data.created_at).toLocaleString() }}
                </template>
            </Column>
            <Column header="Műveletek">
                <template #body>
                    <div class="flex gap-2">
                        <Button label="Módosítás" />
                        <Button label="Törlés" severity="danger" />
                    </div>
                </template>
            </Column>
        </DataTable>
    </Panel>
</template>