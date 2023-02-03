// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket')
//     }, 3000)
// });


// const popcorn = promiseWifeBringingTicks.then((t) => {
//     console.log('wife: I have the tics');
//     console.log('husband: we should go in');
//     console.log('wife: no I am hungry');
//     return new Promise((resolve, reject) => resolve(`${t} popcorn`))
// })

// const getButter = popcorn.then((t) => {
//     console.log('husband: I get some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: I need butter on my popcorn');
//     return new Promise((resolve, reject) => resolve(`${t} butter`))
// });

// getButter.then((t) => console.log(t));

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');


console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {

    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket')
        }, 3000)
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

    const getButter = new Promise((resolve, reject) => resolve(`butter`));

    const getColdDrinks = new Promise((resolve, reject) => resolve(`ColdDrink`));

    let ticket = await promiseWifeBringingTicks;

    console.log(`wife: I have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no I am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: I get some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');

    let butter = await getButter;

    console.log(`husband: I got some ${butter}`);
    console.log(`wife: I want colddrink`);

    let coldDrink = await getColdDrinks;

    console.log(`husband: I got ${coldDrink}`);

    return ticket;
};

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');

// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const preMovie = async () => {

//     const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('ticket')
//         }, 3000)
//     });

//     // const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

//     // const getCandy = new Promise((resolve, reject) => resolve(`candy`));

//     // const getColdDrinks = new Promise((resolve, reject) => resolve(`ColdDrink`));

//     let ticket
//     try {
//         ticket = await promiseWifeBringingTicks;
//     } catch (e) {
//         ticket = 'sad face';
//     }


//     // let [popcorn, candy, coke] = await Promise.all([getPopcorn, getCandy, getColdDrinks]);

//     // console.log(`${popcorn} ${candy} ${coke}`);
//     return ticket;
// };

// preMovie().then((m) => console.log(`person3: shows ${m}`));

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');