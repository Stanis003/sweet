class ProductList {
  constructor(cart) {
    this.cart = cart;
    this.container = document.querySelector('.carousel');
    // this.slide = new Slider();
    this.productService = new ProductsService();
    this.productService
      .getProducts()
      .then(() => this.renderProducts())
      .then(() => this.addEventListeners());
  }

  async renderProducts() {

    const products = await this.productService.getProducts();
    [...products]

    .forEach(product => {
      const element = document.createElement('div');
      element.classList.add(`carousel-item`);
      element.interval = '1000';
      element.innerHTML += `
          <article class="product-card">
          <img src=${product.src} alt="Cake">
          <h3>${product.name}</h3>
          <h3>$${product.price}/kg.</h3>
          <div class="product_buttom">
            <button class="order_product  btn btn-primary buy btn-danger" data-id="${product.id}">Buy</button>
          </div>
          </article>
           `;
      document.querySelector(`.${product.category}Card`).append(element);
    });
    document.querySelectorAll('.carousel-inner').forEach(element => {
      element.firstElementChild.classList.add('active');
    });

  }
  async addEventListeners() {

    document
      .querySelectorAll(
        'button.buy, #productInfoModal button.buy'
      )
      .forEach(button =>
        button.addEventListener('click', event =>
          this.handleProductBuyClick(event)
        )
      );

  }

  handleProductBuyClick(event) {
    const button = event.target;
    const id = button.dataset.id;
    this.cart.addProduct(id);
    window.showAlert('Product added to cart');
  }
}