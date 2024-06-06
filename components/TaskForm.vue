<template>
    <form @submit.prevent>
        <section>
            <div class="header">
                <span v-if="store.idEditTask" class="title">Изменить задачу:</span>
                <span v-else class="title">Добавить задачу:</span>

                <button-white @click="store.openTaskForm()">✖</button-white>
            </div>

            <span class="error">{{ store.taskError.title }}</span>
            <input 
                v-focus
                v-model="store.task.title"
                type="text"
                class="text-task" 
                placeholder="Название"
            >

            <span class="error">{{ store.taskError.text }}</span>
            <input 
                v-model="store.task.text"
                type="text"
                class="text-task" 
                placeholder="Описание"
            >

            <button-green
                v-if="store.idEditTask"
                class="edit-task" 
                @click="store.taskEdit()"
            >
                Изменить
            </button-green>

            <button-green
                v-else
                class="add-task" 
                @click="store.taskAdd()"
            >
                Добавить
            </button-green>
        </section>
    </form>
</template>

<script lang="ts" setup>
    import { vFocus } from '@/directives/VFocus'
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
    }

    section {
        margin: auto;
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

    .title {
        font-weight: bold;
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

    .error {
        color: red;
    }
</style>