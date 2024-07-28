<template>
    <input 
        type="text" 
        v-model="value"
        :placeholder="placeholder"
    >
</template>

<script lang="ts" setup>
    const value = defineModel('modelValue')
    defineProps<{
        placeholder?: string
    }>()
</script>

<style scoped>
    input {
        margin-bottom: 10px;
        padding: 5px;
        font-size: 18px;
        outline: none;
    }
</style>