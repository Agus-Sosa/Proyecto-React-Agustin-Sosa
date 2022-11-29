let is_ok = true;

export const fetchData = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(task)
            } else {
                reject("Se ha producido un error")
            }
        }, time);
    });
}