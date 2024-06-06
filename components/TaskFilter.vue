<template>
    <section>
        <input 
            v-focus
            type="search"
            v-model="store.query.search" 
            placeholder="найти по названию"
        >
        <select @change="store.getSortedTasks()" v-model="store.query.select">
            <option value="all" selected>все</option>
            <option value="completed">завершеные</option>
            <option value="unfinished">незавершеные</option>
        </select>
    </section>
</template>

<script lang="ts" setup>
    import { vFocus } from '@/directives/VFocus'
    const store = useTaskStore()
</script>

<style scoped>
    section {
        display: flex;
    }

    input {
        flex: 1;
        margin-bottom: 10px;
        padding: 5px;
        font-size: 18px;
        outline: none;
    }

    select {
        height: 35px;
        font-size: 18px;
        outline: none;
    }
</style>