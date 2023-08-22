enum STORAGE_KEYS {
    TOKEN = 'TOKEN',
    TOKEN_TYPE = 'TOKEN_TYPE'
}
const storage = window.localStorage

const setStorage = (key: STORAGE_KEYS, value: string) => storage.setItem(key, value)
const getStorage = (key: STORAGE_KEYS) => storage.getItem(key)
export {
    STORAGE_KEYS,
    setStorage,
    getStorage
}