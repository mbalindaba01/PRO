module.exports = () => {
    const taskName = "",
          taskState = "To-Do",
          taskDate = new Date,
          taskDescription = "",
          taskAttachment = "",
          attachmentList = []

    const setTask = (task) => {
        taskName = task
    }

    const getTask = () => {
        return taskName
    }

    const setState = (state) => {
        taskState = state
    }

    const getState = () => {
        return taskState
    }

    const setDate = (date) => {
        taskDate = date
    }

    const getDate = () => {
        return taskDate
    }

    const setDescription = (description) => {
        taskDescription = description
    }

    const getDescription = () => {
        return taskDescription
    }

    const setAttachment = (attachment) => {
        taskAttachment = attachment
    }

    const getAttachment = () => {
        return taskAttachment
    }

    const getAttachmentList = () => {
        attachmentList.push(getAttachment())
        return attachmentList
    }

    return {
        setTask,
        getTask, 
        setState,
        getState,
        setDate,
        getDate,
        setDescription,
        getDescription,
        setAttachment,
        getAttachment,
        getAttachmentList
    }
}