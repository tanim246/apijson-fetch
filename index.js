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
