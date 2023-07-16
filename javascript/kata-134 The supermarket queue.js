// function checkoutTime(customers, n) {
//     let tills = Array(n).fill(0);

//     for (let customer of customers) {
//         let minIndex = tills.indexOf(Math.min(...tills));
//         tills[minIndex] += customer;
//     }

//     return Math.max(...tills);
// }


function queueTime(customers, n) {

    let tills = Array(n).fill(0);

    for (let customer of customers) {
        let minIndex = tills.indexOf(Math.min(...tills));
        tills[minIndex] += customer;
    }

    return Math.max(...tills);
}
