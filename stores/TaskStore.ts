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

    const taskError = ref<TaskForm>({
        title: '',
        text: ''
    })

    const query = ref<Query>({
        search: '',
        select: 'all'
    })

    const idEditTask = ref<Number | null>(0)

    const showTaskForm = ref<Boolean>(false)

    const loading = ref<Boolean>(false)

    // Делаем текст задачи зачеркнутым, если status задачи true (выполнено)
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

    // Поиск задач с сортировкой
    const getSortedAndSearchedTasks = () => {
        return getSortedTasks().filter((task: Task) => 
            task.title.toLowerCase().includes(query.value.search.toLowerCase().trim())
        )
    }

    // Изменяем статус задачи при нажатии на checkbox
    const changeTaskStatus = (idTask: Number) => {
        tasks.value.map((task: Task) => {
            if (task.id === idTask) task.status = !task.status;
        })
    }

    // Получить задачу по id
    const getTaskById = (idTask: Number) => {
        return tasks.value.filter((task: Task) => task.id == idTask)[0]
    }

    // Добавить задачу
    const taskAdd = () => {
        if (task.value.title === '') {
            taskError.value.title = 'Заполните название'
        } else {
            taskError.value.title = ''
        }

        if (task.value.text === '') {
            taskError.value.text = 'Заполните описание'
        } else {
            taskError.value.text = ''
        }

        if (taskError.value.title === '' && 
            taskError.value.text === '') {

            tasks.value.push({
                id: Date.now(),
                title: task.value.title,
                text: task.value.text,
                status: false
            })

            task.value = { 
                title: '', 
                text: ''
            }
            
            showTaskForm.value = false
        }
    }

    // Изменить задачу
    const taskEdit = () => {
        tasks.value = tasks.value.map((item: Task) => { 
            if (item.id === idEditTask.value) {
                return { ...item, ...task.value }
            } else {
                return item
            }
        })
        openTaskForm()
    }

    // Открыть/закрыть модальное окно добавления задачи
    const openTaskForm = (objTask?: Task) => {
        if (objTask) {
            idEditTask.value = objTask.id
            task.value.title = objTask.title
            task.value.text = objTask.text
        } else {
            idEditTask.value = null
            task.value = { 
                title: '', 
                text: '', 
            }
        }
        showTaskForm.value = !showTaskForm.value
    }

    // Удалить задачу
    const taskDelete = (idTask: Number) => {
        tasks.value = tasks.value.filter((task: Task) => task.id !== idTask)
    }
    
    return {
        task,
        tasks,
        query,
        taskAdd,
        loading,
        taskDelete,
        taskEdit,
        taskError,
        idEditTask,
        showTaskForm,
        openTaskForm,
        getTaskById,
        getTextDecor,
        getSortedTasks,
        changeTaskStatus,
        getSortedAndSearchedTasks
    }
})