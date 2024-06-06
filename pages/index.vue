<template>
    <section v-if="store.loading">
        <head>
            <title>Задачи</title>
        </head>

        <task-form v-show="store.showTaskForm" />

        <header>
            <span class="title">Задачи:</span>
            <button-green 
                class="add-task" 
                @click="store.openTaskForm()"
            >+ Добавить</button-green>
        </header>

        <task-filter />
        <task-list />
    </section>

    <section v-else>
        <loader />
    </section>
</template>

<script lang="ts" setup>
    const store = useTaskStore()
    onMounted(() => { 
        store.loading = true
    })
</script>

<style scoped>
    header {
        margin: 15px 0;
        display: flex;
    }

    .title {
        font-weight: bold;
        font-size: 20px;
        flex: 1;
    }
</style>