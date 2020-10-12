(function () {
  var myInit = {
    method: "GET",
    headers: new Headers(),
    mode: "cors",
    cache: "default",
  };

  const content = document.getElementById("main-items-content");
  let dataProducts = [];
  let nextPage = '';

  service('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1');

  function service(service) {
    fetch(service,myInit)
      .then((response) => response.json())
      .then(async (data) => {
        await fetchData(data);
        nextPage = data.nextPage;
        content.innerHTML = fetchProducts(dataProducts);
    });
  }

  function fetchData({ products }) {
    products.map(product => dataProducts.push(product));
  }

  function fetchProducts(products) {
    return products
      .map((product) => 
         `
            <div class="main-items-product">
              <div class="main-items-product-photo">
                <img class="main-items-product-photo-image" alt="Image products" src=http:${product.image} />
              </div>
              <div>
                <p class="main-items-product-title">${product.name}</p>
                <p class="main-items-product-description">${product.description}</p>
                <p class="main-items-product-price">De: R$${product.oldPrice}</p>
                <p class="main-items-product-value">Por: R$${product.price}</p>
                <p class="main-items-product-price">
                ou ${product.installments.count}x de R$${product.installments.value}
                </p>
                <button class="button fullWidth">Comprar</button>
              </div>
            </div>
          `
      )
      .join("");
  }

  document.getElementById('addProducts').onclick = (e) => {
    service(`https://${nextPage}`);
  }
})();
