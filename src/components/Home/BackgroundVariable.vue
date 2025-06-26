<script setup lang="ts">
  const { image } = defineProps({ image: String });
</script>

<template>
    <div class="wrapper_variable" :style="{ backgroundImage: `url('${image}')`}">
        <slot />
    </div>
</template>

<style src="./styles/background_variable.css"></style>
