// Local storage functions
// fetches any data, given a key, in my local storage and returns it to me
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

// delete item
export const deleteItem = ({key}) => {
    return localStorage.removeItem(key)
}