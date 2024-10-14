<script setup lang="ts">
import 'primeicons/primeicons.css';

useHead({
    bodyAttrs: {
        class: 'app-layout'
    }
});

</script>
<template>

    <LayoutAppHeader />

    <div class="flex p-4 pr-0 gap-4 wrapper">

        <LayoutAppSidebar />

        <div class="module-content">
            <slot />
        </div>
    </div>
</template>

<style lang="scss">
@use "~/assets/scss/app.scss";
</style>