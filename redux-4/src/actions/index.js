export const add = (text) => {
    return new Promise((fulfill,reject) => {
        setTimeout(() => {
            fulfill({
                type: 'ADD',
                text
            })
        }, 1000);
    })
}

export const reduce = ()=> {
    return new Promise((fulfill,reject) => {
        setTimeout(() => {
            reject()
        }, 500);
    })
}

// export const reduce = ()=> ({
//     type: 'REDUCE'
// })

