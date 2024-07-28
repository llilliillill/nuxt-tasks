<template>
    <form @submit.prevent>
        <div class="body">
            <div class="header">
                <Heading v-if="store.idEditTask">
                    Изменить задачу:
                </Heading>

                <Heading v-else>
                    Добавить задачу:
                </Heading>

                <Button @click="store.onTaskForm()">
                    ✖
                </Button>
            </div>

            <Error>{{ store.error.title }}</Error>
            <Input 
                v-model="store.task.title"
                type="text"
                class="text-task" 
                placeholder="Название"
            />

            <Error>{{ store.error.text }}</Error>
            <Input 
                v-model="store.task.text"
                type="text"
                class="text-task" 
                placeholder="Описание"
            />

            <Button
                v-if="store.idEditTask"
                class="edit-task" 
                @click="store.editTask()"
            >
                Изменить
            </Button>

            <Button
                v-else
                class="add-task" 
                @click="store.addTask()"
            >
                Добавить
            </Button>
        </div>
    </form>
</template>

<script lang="ts" setup>
    const store = useTaskStore()
</script>

<style scoped>
    form {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .body {
        background: white;
        border-radius: 3px;
        min-height: 50px;
        min-width: 300px;
        padding: 10px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .text-task {
        width: 300px;
        margin-bottom: 10px;
        padding: 5px;
        font-size: 18px;
        display: block;
    }

    .add-task,
    .edit-task {
        width: 100%;
    }
</style>