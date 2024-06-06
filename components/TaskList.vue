<template>
    <section v-if="store.tasks.length">
        <task-item 
            v-for="task in store.getSortedAndSearchedTasks()"
            :showButtons="true"
            :task="task"
        />
    </section>

    <section v-else>
        <h4 class="error">Нет задач</h4>
    </section>
</template>

<script lang="ts" setup>
    const store = useTaskStore()
</script>

<style scoped>
    ul {
        list-style-type: none;
    }

    .error {
        color: red;
        text-align: center;
    }
</style>