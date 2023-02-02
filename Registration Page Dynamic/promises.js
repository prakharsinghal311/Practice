const posts = [
    { title: 'Post One', body: 'this is post one' },
    { title: 'Post Two', body: 'this is post two' }
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve(posts);
            } else {
                reject('Error: something went wrong');
            }
        }, 2000)
    });

}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const lastElement = posts.pop();
                resolve(posts);
            } else {
                reject('Array is empty now');
            }
        }, 1000);
    })
}

createPost({ title: 'Post Three', body: 'This is post three' })
    .then(() => {
        getPosts();
        deletePost().then(() => {
            getPosts();
            deletePost().then(() => {
                getPosts();
                deletePost().then(() => {
                    getPosts();
                    deletePost().then(() => { })
                        .catch((err) => {
                            console.log("inside catch block", err);

                            function create4thPost(post) {
                                return new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        posts.push(post);

                                        const error = false;

                                        if (!error) {
                                            resolve();
                                        } else {
                                            reject('Error: something went wrong');
                                        }
                                    }, 1000)
                                });

                            }

                            function deletePost() {
                                return new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        if (posts.length > 0) {
                                            const lastElement = posts.pop();
                                            resolve(lastElement);
                                        } else {
                                            reject('Array is empty now');
                                        }
                                    }, 1000);
                                })
                            }

                            create4thPost({ title: 'Post Four', body: 'this is post four' })
                                .then(() => {
                                    getPosts();
                                    deletePost().then(() => {
                                        getPosts();
                                    })
                                })
                        })
                }).catch((err) => { console.log("Error") });
            }).catch((err) => { console.log("Error") })
        }).catch((err) => { console.log("Error") })
    })
    .catch(err => console.log(err));


// Promise.all

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'GoodBye'));

Promise.all([promise1, promise2, promise3])
    .then(((values) => console.log(values)));

const user = {
    username: "Yash",
    lastactivitytime: '12 jan'
}

const updatelastactivitytime = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastactivitytime = new Date().getTime();
            resolve(user.lastactivitytime)
        }, 1000)
    })
}

function create5thPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: something went wrong');
            }
        }, 2000)
    });

}

const userupdatesapost = () => {
    Promise.all([createPost({ title: 'Post five', body: 'This is post three' }), updatelastactivitytime()])
        .then(([createPostresolves, updatelastactivitytimeresolves]) => {
            console.log(createPostresolves, updatelastactivitytimeresolves)
            deletePost()
                .then((response) => {
                    console.log(response)
                })
        })
        .catch(err => console.log(err))
}

// updatelastactivitytime();
userupdatesapost();
