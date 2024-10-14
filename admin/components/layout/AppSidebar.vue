<script setup lang="ts">
const items = ref([
    {
        key: '1',
        label: 'Hírek',
        icon: 'pi pi-book',
        expanded: true,
        items: [
            {
                label: 'Új létrehozása',
                icon: 'pi pi-plus-circle'
            },
            {
                label: 'Összes megtekintése',
                icon: 'pi pi-list'
            }
        ]
    },
    {
        key: '2',
        label: 'Adminisztrátorok',
        icon: 'pi pi-users',
        items: [
            {
                label: 'Új létrehozása',
                icon: 'pi pi-plus-circle'
            },
            {
                label: 'Összes megtekintése',
                icon: 'pi pi-list',
                command: () => navigateTo('/admin/all'),
            }
        ]
    },
    {
        label: 'Beállítások',
        icon: 'pi pi-cog',
    }
]);
const expandedKeys = ref({'1': true, '2': true});
</script>
<template>
    <div class="sidebar">
        <PanelMenu :model="items" class="w-20rem" multiple v-model:expanded-keys="expandedKeys" />
    </div>
</template>