const btn = document.querySelector("button");
btn.addEventListener('click',()=>{
    promisePractice().then(r=>{
        console.log(r);
    }, reject=>{console.log("its rejected because "+ reject)});
    console.log("Hello1");
});

function promisePractice(){
    const p = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Hello");
        }, 200);
    });
  return p;
}

//Different Promises
const promise1 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 1 resolved"), 1000)
  );
  const promise2 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 2 resolved"), 500)
  );
  const promise3 = new Promise((resolve) =>
    setTimeout(() => resolve("Promise 3 resolved"), 800)
  );
  
  const promisesArray = [promise1, promise2, promise3];
  
//promise all:If any of the promise rejects, 
//it won't wait for others to resolve and will return with reason of the promise that is rejected.
Promise.all(promisesArray)
    .then((results) => {
        console.log("All promises resolved:", results);
    })
    .catch((error) => {
        console.error("At least one promise rejected:", error);
    });

//promise allsettled:it waits for all the promises to settle (either resolve or reject) before proceeding
Promise.allSettled(promisesArray).then((results) => {
    console.log("All promises settled:", results);
  });

//Promise.race(): As the name suggests, 
//race returns first promise with shortest delay whether it is resolved or rejected.
Promise.race(promisesArray)
  .then((results) => {
    console.log("First promise resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });

//Promise.any(): It will return with first resolved promise
Promise.any(promisesArray)
  .then((results) => {
    console.log("First promise resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });