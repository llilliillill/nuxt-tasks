<template>
    <section v-if="tasks.length">
        <ul class="task-list">
            <TaskItem 
                v-for="task in tasks"
                :task="task"
            />
        </ul>
    </section>

    <section v-else>
        <Heading class="heading">
            Нет задач
        </Heading>
    </section>
</template>

<script lang="ts" setup>
    defineProps<{
        tasks: object[]
    }>()
</script>

<style scoped>
    .task-list {
        list-style-type: none;
    }

    .heading {
        text-align: center;
    }
</style>