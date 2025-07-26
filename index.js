<<<<<<< HEAD
// document.getElementById("textAndHtml").innerHTML = `<p>Hello world</p>`;

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response=>console.log(response.json()))
// // .then(data=>console.log("data",data))

// async function loadData() {
//   try {
//     let store = await fetch("https://jsonplaceholder.typicode.com/posts").then(
//       (res) => res.json()
//     );
//     console.log(store)
//     document.getElementById("textAndHtml").innerHTML= store.map((data)=>`
//     <p style="color: red;">Title: ${data.title}</p>
//     `).join("")
     
//   } catch (error) {
//     console.log(error, "Failed");
//   }
// }
// loadData();

    
    async function loadData() {
  try {
    let store = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (res) => res.json()
    );
    console.log(store)
    document.getElementById("textAndHtml").innerHTML = 
    store.map((data)=>`<p style="color: white;">Title: ${data.title}  </p>` ).join("")
     
  } catch (error) {
    console.log(error, "Failed");
  }
}
loadData();
=======
// arrrow function

const myStore = async () => {
  try {
    let store = await fetch("https://fakestoreapi.com/products").then(
      (response) => response.json()
    );
    console.log(store);

    document.getElementById("card-container").innerHTML = store
      .map(
        (data) => `
         <div class="card">
        <img src="${data.image}" alt="" />
        <h3>${data.title}</h3>
        <p> price $ ${data.price}</p>
      </div>
        `
      )
      .join("");
  } catch (error) {
    console.log(error);
  }
};

myStore();
>>>>>>> 4b2b526 (first commit)
