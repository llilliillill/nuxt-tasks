<template>
    <section v-if="store.loading">
        <head>
            <title>Задачи</title>
        </head>

        <TaskForm 
            v-show="store.showTaskForm"
        />

        <div class="body">
            <Heading class="heading">
                Задачи:
            </Heading>

            <Button @click="store.onTaskForm()">
                + Добавить
            </Button>
        </div>

        <TaskFilter 
            :query="store.query"
            :sort="store.getSortedTasks"
        />

        <TaskList 
            :tasks="store.getTasks()" 
        />
    </section>

    <section v-else>
        <Loader />
    </section>
</template>

<script lang="ts" setup>
    const store = useTaskStore()
    onMounted(() => store.loading = true)
</script>

<style scoped>
    .body {
        margin: 15px 0;
        display: flex;
        align-items: center;
    } 

    .heading {
        flex: 1;
    }
</style>