export const getRequest = (url, options?) => {
    return fetch(url, options).then((response) => {
        return response.json();
    }).catch(() => {
        throw new Error('Request failed');
    })
};
