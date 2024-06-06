<template>
    <li>
        <input 
            class="checkbox"
            type="checkbox" 
            @change="store.changeTaskStatus(task.id)" 
            :disabled="!showButtons"
            :checked="task.status"
        >

        <div class="content">
            <nuxt-link 
                class="title" 
                :to="`/tasks/${ task.id }`"
                :style="store.getTextDecor(task.status)" 
            >
                {{ task.title }}
            </nuxt-link>

            <span 
                class="task-text" 
                :style="store.getTextDecor(task.status)"
            >
                {{ task.text }}
            </span>
        </div>

        <button-white
            v-if="showButtons"
            @click="store.openTaskForm({
                id: task.id,
                title: task.title,
                text: task.text,
                status: task.status,
            })"
        >✎</button-white>

        <button-white 
            v-if="showButtons"
            @click="store.taskDelete(task.id)"
        >✖</button-white>
    </li>
</template>

<script lang="ts" setup>
    defineProps({
        task: {
            type: Object,
            required: true
        },
        showButtons: {
            type: Boolean,
            required: true
        }
    })

    const store = useTaskStore()
</script>

<style scoped>
    li {
        box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 0.75);
        border-radius: 3px;
        margin-bottom: 10px;
        padding: 5px;
        display: flex;
        align-items: center;
    }

    .checkbox {
        zoom: 2;
        cursor: pointer;
    }

    .content {
        padding-left: 10px;
        flex: 1;
    }

    .title {
        font-weight: bold;
        text-decoration: none;
        display: block;
        color: black;
    }

    .title:hover {
        text-decoration: underline;
    }
</style>