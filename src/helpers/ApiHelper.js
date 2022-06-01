export const getApiErrorMessage = e => {
    const errors = e.response?.data.errors;
    if (typeof errors == 'object') {
        const keys = Object.keys(errors);
        if (keys.length) {
            return errors[keys[0]][0];
        }
    }

    return 'Unknown error';   
}
