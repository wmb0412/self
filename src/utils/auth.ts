import {STORAGE_KEYS,  setStorage, getStorage} from './localStorage'
const setAuthorization = (token_type, token) => {
    setStorage(STORAGE_KEYS.TOKEN_TYPE, token_type)
    setStorage(STORAGE_KEYS.TOKEN, token)
}
const getAuthorization = () => getStorage(STORAGE_KEYS.TOKEN_TYPE) + ' ' +  getStorage(STORAGE_KEYS.TOKEN) 

export {
    setAuthorization,
    getAuthorization
}