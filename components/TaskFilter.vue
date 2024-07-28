<template>
    <section>
        <Input 
            type="search"
            class="search"
            v-model="query.search" 
            placeholder="найти по названию"
        />
        <select 
            v-model="query.select"
            @change="sort()" 
        >
            <option value="all" selected>все</option>
            <option value="completed">завершеные</option>
            <option value="unfinished">незавершеные</option>
        </select>
    </section>
</template>

<script lang="ts" setup>
    defineProps<{
        query: object,
        sort: Function
    }>()
</script>

<style scoped>
    section {
        display: flex;
    }

    select {
        height: 35px;
        font-size: 18px;
        outline: none;
        padding: 0 5px;
    }

    .search {
        flex: 1;
    }
</style>