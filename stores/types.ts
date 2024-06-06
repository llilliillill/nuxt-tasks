interface Task {
    id: Number,
    title: String,
    text: String,
    status: Boolean
}

interface TaskForm {
    title: String,
    text: String
}

interface Query {
    search: String,
    select: String
}