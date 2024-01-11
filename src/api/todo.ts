"use server"

export async function send(formData: FormData) {

    const rawFormData = {
        todo: formData.get('todo'),
    }
    console.log(rawFormData.todo);
}
