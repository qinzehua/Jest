export const timer = (callback) => {
    setTimeout(() => {
        callback('123');
        // setTimeout(() => {
        //     callback('123');
        // }, 3000);
    }, 3000);
}