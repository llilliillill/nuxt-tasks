<template>
    <section>
        <head>
            <title>Задача №{{ id }}</title>
        </head>

        <Headung>Задача №{{ id }}</Headung>
        
        <TaskItem 
            :task="store.getTaskById(id)" 
            :buttons="false"
        />
    </section>
</template>

<script lang="ts" setup>
    const route = useRoute()
    const id = Number(route.params.id)

    const store = useTaskStore()
    definePageMeta({
        validate: async (route: any) => {
            return /^[0-9]+$/.test(route.params.id)
        }
    })
</script>