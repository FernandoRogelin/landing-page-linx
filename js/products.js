(function () {
  var myInit = {
    method: "GET",
    headers: new Headers(),
    mode: "cors",
    cache: "default",
  };

  var content = document.getElementById("main-items-content");

  fetch(
    "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1",
    myInit
  )
    .then((response) => response.json())
    .then((data) => {
      content.innerHTML = fetchProducts(data.products);
    });

  function fetchProducts(products) {
    return products
      .map((product) => {
        var photo = changeUrlPhoto(product.image);
        return `
            <div class="main-items-product">
              <div class="main-items-product-photo">
                <img class="main-items-product-photo-image" alt="Image products" src=${photo} />
              </div>
              <p class="main-items-product-title">${product.name}</p>
              <p class="main-items-product-description">${product.description}</p>
              <p class="main-items-product-description">De: R$${product.oldPrice}</p>
              <p class="main-items-product-value">Por: R$${product.price}</p>
              <p class="main-items-product-description">
                ou ${product.installments.count}x de R$${product.installments.value}
              </p>
              <button class="button fullWidth">Comprar</button>
            </div>
          `;
      })
      .join("");
  }

  function changeUrlPhoto(image) {
    return `http:${image}`;
  }
})();
