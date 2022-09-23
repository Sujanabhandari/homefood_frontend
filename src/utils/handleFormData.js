
import axios
    from "axios";

const handleFormData = (data) => {
    const formData = new FormData();

    for (let key in data) {
        if (key === 'specials') {
            formData.append(key, JSON.stringify(data[key]));
        }
        else formData.append(key, data[key]);
    }

    for (let [key, value] of formData.entries()) {
        console.log(key, value)
    }
    return formData;
}

export { handleFormData};