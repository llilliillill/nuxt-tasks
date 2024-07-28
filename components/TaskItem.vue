<template>
    <li>
        <Checkbox
            type="checkbox" 
            class="checkbox"
            @change="store.setTaskStatus(task.id)" 
            :disabled="!buttons"
            :checked="task.status"
        />

        <div class="content">
            <NuxtLink 
                class="title" 
                :to="`/tasks/${ task.id }`"
                :style="store.getTextDecor(task.status)" 
            >
                {{ task.title }}
            </NuxtLink>

            <span :style="store.getTextDecor(task.status)">
                {{ task.text }}
            </span>
        </div>

        <Button
            v-if="buttons"
            @click="store.onTaskForm({
                id: task.id,
                title: task.title,
                text: task.text,
                status: task.status,
            })"
        >✎</Button>

        <Button 
            v-if="buttons"
            @click="store.deleteTask(task.id)"
        >✖</Button>
    </li>
</template>

<script lang="ts" setup>
    const store = useTaskStore()
    withDefaults(
        defineProps<{
            task: object,
            buttons?: boolean
        }>(),{
            buttons: true
        }
    )
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