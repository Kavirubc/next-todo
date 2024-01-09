"use server"

export async function send(formData: FormData) {

    const rawFormData = {
        todo: formData.get('todo'),
    }
    console.log("send");
    console.log(rawFormData.todo);
    return rawFormData.todo;
}

export async function todoData(rawFormData: string) {
    const todoData = {
        //rawFormData.todo
    }
    return todoData;
}

