<script setup lang="ts">
useHead({
	title: 'Kezelőfelület'
});
</script>
<template>
	<NuxtLoadingIndicator :height="5" />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
@import "primeflex/primeflex.scss";

html, body {
	height: 100%;
	font-family: 'Inter', sans-serif;
	margin: 0;
}
</style>
