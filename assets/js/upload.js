async function uploadFile() {
    const fileInput = document.getElementById('fileInput'); // Укажите ваш ID элемента
    const file = fileInput.files;

    if (!file) return;

    const formData = new FormData();
    formData.append('file', file); // Имя ключа должно совпадать с тем, что ожидает сервер

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Успех:', result);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}
