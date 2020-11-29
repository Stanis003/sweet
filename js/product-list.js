// class Slider{
// constructor(){
//   this.cakesContainers = document.querySelectorAll('.slider');
//   this.container = document.querySelector('.products-list');
//   this.renderSlider();
// }

// async renderSlider(){
//   this.cakesContainers.forEach(contain=>{
//     const element = document.createElement('div');
//     element.classList.add('offer__slider-counter');
//     element.innerHTML=`
//        <div class="offer__slider-prev">
             
//        <img src="icons/left.svg" alt="prev">
//          </div>
//                         <span id="current">03</span>
//                         /
//                         <span id="total">04</span>
//                         <div class="offer__slider-next">
//                             <img src="icons/right.svg" alt="next">
//                         </div>               
//     `;
//     contain.append(element);

//   });
// }
// addEventListener(){

// }

// }

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
    //let productListDomString = '';
    const products = await this.productService.getProducts();
    [...products]
      // .sort( (a, b) => this.sortDirection === 'ascending' 
      //                    ? a.price - b.price
      //                    : b.price - a.price)
      .forEach(product => {
        const element = document.createElement('div');
        element.classList.add(`carousel-item`);
        element.interval='1000';
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
      document.querySelectorAll('.carousel-inner').forEach(element=>{
        element.firstElementChild.classList.add('active');
      });
   
  }
  async addEventListeners() {
    // document
    //   .querySelectorAll('.product .btn-info')
    //   .forEach(button =>
    //     button.addEventListener('click', event =>
    //       this.handleProductInfoClick(event)
    //     )
    //   );
    document
      .querySelectorAll(
        'button.buy, #productInfoModal button.buy'
      )
      .forEach(button =>
        button.addEventListener('click', event =>
          this.handleProductBuyClick(event)
        )
      );
    // document.querySelector('.sort-asc').addEventListener('click', async () => {
    //     this.sortDirection = 'ascending';
    //     await this.renderProducts();
    //     this.addEventListeners();
    // });
    // document.querySelector('.sort-desc').addEventListener('click', async () => {
    //     this.sortDirection = 'descending';
    //     await this.renderProducts();
    //     this.addEventListeners();
    // });
  }
  // async handleProductInfoClick(event) {
  //   const button = event.target; // Button that triggered the modal
  //   const id = button.dataset.id; // Extract info from data-* attributes
  //   const product = await this.productService.getProductById(id);
  //   const modal = document.querySelector('#productInfoModal');
  //   const productImg = modal.querySelector('.modal-body .card-img-top');
  //   productImg.setAttribute('src', 'img/products/' + product.image);
  //   productImg.setAttribute('alt', product.title);
  //   modal.querySelector('.modal-body .card-title').innerText = product.title;
  //   modal.querySelector('.modal-body .card-text').innerText =
  //     product.description;
  //   const btnBuy = modal.querySelector('button.buy');
  //   btnBuy.innerText = `${product.price} - Buy`;
  //   btnBuy.dataset.id = id;
  // }
  handleProductBuyClick(event) {
    const button = event.target;
    const id = button.dataset.id;
    this.cart.addProduct(id);
    window.showAlert('Product added to cart');
  }
}
