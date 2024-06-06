<template>
    <section>
        <head>
            <title>Задача №{{ $route.params.id }}</title>
        </head>

        <h1>Задача №{{ $route.params.id }}</h1>
        <task-item 
            :task="store.getTaskById(Number($route.params.id))" 
            :showButtons="false"
        />
    </section>
</template>

<script lang="ts" setup>
    definePageMeta({
        validate: async (route: any) => {
            return /^[0-9]+$/.test(route.params.id)
        }
    })
    
    const store = useTaskStore()
</script>

<style scoped>
    h1 {
        margin: 15px 0;
    }
</style>