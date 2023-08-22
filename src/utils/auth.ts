import {STORAGE_KEYS,  setStorage, getStorage} from './localStorage'
const setAuthorization = (token, token_type) => {
    setStorage(STORAGE_KEYS.TOKEN, token)
    setStorage(STORAGE_KEYS.TOKEN_TYPE, token_type)
}
const getAuthorization = () => getStorage(STORAGE_KEYS.TOKEN_TYPE) + ' ' +  getStorage(STORAGE_KEYS.TOKEN) 

export {
    setAuthorization,
    getAuthorization
}