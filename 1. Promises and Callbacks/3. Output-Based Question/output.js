function fetchAPI1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({data:"API1"})
        },1000);
    });
}

function fetchAPI2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({data:"API2"})
        },1000);
    });
}

function fetchCombined() {
    fetchAPI1()
        .then((data1) => {
            console.log("First API data",data1);
            return fetchAPI2();
        })
        .then((data2)=>{
            console.log("Second API data",data2)
            const combinedData = {...data1, ...data2,};
            console.log("Combined data:",combinedData);
        })
        .catch((error)=> {
            console.error('Error Fetching APIs',error);
        });
}
fetchCombined();