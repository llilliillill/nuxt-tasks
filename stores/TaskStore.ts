import './types.ts'

export const useTaskStore = defineStore('TaskStore', () => {
    
    const tasks = ref<Task[]>([
        { id: 1, title: 'Task 1', text: 'Text text text text 1', status: true },
        { id: 2, title: 'Task 2', text: 'Text text text text 2', status: true },
        { id: 3, title: 'Task 3', text: 'Text text text text 3', status: false },
        { id: 4, title: 'Task 4', text: 'Text text text text 4', status: false },
        { id: 5, title: 'Task 5', text: 'Text text text text 5', status: false }
    ])

    const task = ref<TaskForm>({
        title: '',
        text: ''
    })

    const error = ref<TaskForm>({
        title: '',
        text: ''
    })

    const query = ref<Query>({
        search: '',
        select: 'all'
    })

    const idEditTask = ref<Number | null>(null)
    const showTaskForm = ref<Boolean>(false)
    const loading = ref<Boolean>(false)

    // Делаем текст задачи зачеркнутым, если status задачи true (завершено)
    const getTextDecor = (status: Boolean) => {
        let style = { textDecoration: 'none' }
        if (status) style.textDecoration = 'line-through';
        return style
    }

    // Сортировка задач завершеные/незавершеные/все
    const getSortedTasks = () => {        
        return tasks.value.filter((task: Task) => {
            if (query.value.select === 'all') {
                return task
            }

            if (query.value.select === 'completed') {
                return task.status
            }

            if (query.value.select === 'unfinished') {
                return !task.status
            }
        })
    }

    // Получить задачи с сортировкой
    const getTasks = () => {
        return getSortedTasks().filter((task: Task) => 
            task.title.toLowerCase().includes(
                query.value.search.toLowerCase().trim()
            )
        )
    }

    // Изменяем статус задачи при нажатии на checkbox
    const setTaskStatus = (idTask: Number) => {
        tasks.value.map((task: Task) => {
            if (task.id === idTask) task.status = !task.status;
        })
    }

    // Получить задачу по id
    const getTaskById = (idTask: number) => {
        return tasks.value.filter((task: Task) => task.id == idTask)[0]
    }

    const validation = () => {
        if (task.value.title === '') {
            error.value.title = 'Заполните название'
        } else {
            error.value.title = ''
        }

        if (task.value.text === '') {
            error.value.text = 'Заполните описание'
        } else {
            error.value.text = ''
        }

        return error.value.title === '' && 
               error.value.text === ''
    }

    // Очистить форму
    const clearForm = () => {
        task.value = { 
            title: '', 
            text: ''
        }
    }

    // Добавить задачу
    const addTask = () => {
        if (validation()) {
            tasks.value.push({
                id: Date.now(),
                title: task.value.title,
                text: task.value.text,
                status: false
            })
            clearForm()
            showTaskForm.value = false
        }
    }

    // Изменить задачу
    const editTask = () => {
        tasks.value = tasks.value.map((item: Task) => { 
            if (item.id === idEditTask.value) {
                return { ...item, ...task.value }
            } else {
                return item
            }
        })
        onTaskForm()
    }

    // Открыть/закрыть модальное окно добавления задачи
    const onTaskForm = (objTask?: Task) => {
        if (objTask) {
            idEditTask.value = objTask.id
            task.value.title = objTask.title
            task.value.text = objTask.text
        } else {
            idEditTask.value = null
            clearForm()
        }
        showTaskForm.value = !showTaskForm.value
    }

    // Удалить задачу
    const deleteTask = (idTask: Number) => {
        tasks.value = tasks.value.filter((task: Task) => task.id !== idTask)
    }
    
    return {
        task,
        tasks,
        query,
        error,
        addTask,
        loading,
        getTasks,
        editTask,
        deleteTask,
        idEditTask,
        onTaskForm,
        getTaskById,
        showTaskForm,
        getTextDecor,
        setTaskStatus,
        getSortedTasks
    }
})