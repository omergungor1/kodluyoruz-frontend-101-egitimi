const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success');
    }, 2000);

    setTimeout(() => {
        reject('Error');
    }, 4000);
});

promise1
    .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });