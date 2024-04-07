export function getLocalStorageKeyValue(key:any){
    try {
        const data:any = localStorage.getItem(key);
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error getting item from Localstorage ${error}`);
    }
}

export function setLocalStorageKeyValue(key:any,value:any){
    try {
        const data =localStorage.setItem(key,value);
        // return JSON.parse(data);
    } catch (error) {
        console.error(`Error setting item to LocalStorage ${error}`);
    }
}

export function deleteLocalStorageKeyValue(key:any){
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error(`Error deleting item from LocalStorage ${error}`);
    }
}

export function clearLocalStorageKeyValue(){
    try {
        localStorage.clear();
    } catch (error) {
        console.error(`Error Clearing LocalStorage ${error}`);
    }
}