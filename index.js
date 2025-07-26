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