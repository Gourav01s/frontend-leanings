// Activity 5: fetch api and there related operations

// Task 1: GET data from api using fetch

// async function utility() {
//     let content = await fetch('url-goes-here');
//     // fetch returns promise
//     // convert the content to json format for easy use
//     let output = await content.json();
//     console.log(output);

// }

// utility();


// Task 2: POST data to api by fetch method

// async function utilityFetch() {
    
//     // this will be invoked by fetch method to post data
//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'box',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     };
    
//     // content stores the data from fetch-api
//     let content = fetch('url/posts', options);
//     let response = (await content).json();
//     return response;
// }

// async function utilityAnswer() {
//     let ansr = utilityFetch();
//     console.log(ansr);
// }

// utilityFetch();

