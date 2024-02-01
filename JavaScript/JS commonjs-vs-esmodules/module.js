// module.js
export const data = 42;
export const method = () => console.log("Hello");
export const number = data + 1;

export function secuenceOfPromises() {
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 1 resolved');
        }, 2000);
    });

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 2 resolved');
        }, 1500);
    });

    const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Promise 3 rejected'));
        }, 1000);
    });

    const promise4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 4 resolved');
        }, 1000);
        
    });

    promise1.then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log('Promise 1 completed');
    });

    Promise.all([promise1, promise2, promise3, promise4])
    .then((values) => {
        console.log(values);
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log('All promises resolved');
    });
}

