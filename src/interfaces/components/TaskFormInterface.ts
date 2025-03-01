export interface TaskFormInterface {
    configs: {
        datatestID: any
    }
    data: {
        taskData: any
        isEditForm: any
        baseData: any
    }
    callbacks: {
        handleCreate: Function
        handleEdit: Function
        handleClose: Function
    }
}