const STORAGE_KEY = 'todos-vuejs'
export default {
    fetch () {
        return JSON.parse(window.localStorage.getItem(
            STORAGE_KEY) || '[]'
        )
    },
    fetch2 () {
        return JSON.parse(window.localStorage.getItem(
            STORAGE_KEY) || '[]'
        ).reverse()
    },
    save (proItems) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(proItems))
    },
    delete (num) {
        var obj = JSON.parse(localStorage.getItem(STORAGE_KEY));
        delete obj.splice(num,1);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(obj))
    }
}
