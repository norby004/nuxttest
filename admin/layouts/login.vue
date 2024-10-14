<script setup lang="ts">
useHead({
    bodyAttrs: {
        class: 'login-layout'
    }
});
</script>

<template>
    <div class="login-wrapper">
        <Fieldset legend="Bejelentkezés" class="login-box">
            <slot />
        </Fieldset>
    </div>
</template>

<style lang="scss">
@use "~/assets/scss/login.scss";
</style>