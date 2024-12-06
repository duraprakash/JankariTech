// // A function that simulates an API call by returning a promise
// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("User data fetched!");
//         }, 1000);
//     });
// }
//
// function fetchOrderData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Order data fetched!");
//         }, 1500);
//     });
// }
//
// // Using async/await to handle multiple asynchronous operations in sequence
// async function getAllData() {
//     try {
//         const userData = await fetchUserData(); // waits 1 second
//         console.log(userData); // Logs: "User data fetched!"
//
//         const orderData = await fetchOrderData(); // waits 1.5 seconds
//         console.log(orderData); // Logs: "Order data fetched!"
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }
//
// getAllData();

