import React, { Component } from 'react';
import { Container, Grid, } from 'semantic-ui-react'
import ProductList from '../ProductList/index.js'
import CartList from '../CartList/index.js'
import Order from '../Order/index.js'
import style from './App.css'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      openOrder: false,
      total: 0,
      sum: 0,
      products: [
        {
          id: 1,
          name: 'Cheeseburger',
          picture: 'http://a57.foxnews.com/images.foxnews.com/content/fox-news/food-drink/2017/11/08/trumps-hamburger-sells-out-in-japan/_jcr_content/par/featured_image/media-0.img.jpg/931/524/1510187336113.jpg?ve=1&tl=1',
          price: 120,
          
          
        },
        {
          id: 2,
          name: 'Pasta Alfredo',
          picture: 'https://images-gmi-pmc.edge-generalmills.com/7485018f-71f9-44ad-9a28-04fd44cab253.jpg',
          price: 180,
         
        },
        {
          id: 3,
          name: 'Pizza Hawaiana',
          picture: 'https://static.vix.com/es/sites/default/files/styles/large/public/p/pizza-hawaiana-1_300239519.jpg?itok=G3F7B8BQ',
          price: 150,
         
        },
        {
          id: 4,
          name: 'HotDog',
          picture: 'http://assets.kraftfoods.com/recipe_images/opendeploy/153515_640x428.jpg',
          price: 50,
         
        },
        {
          id: 5,
          name: 'Ensalada',
          picture: 'https://t2.rg.ltmcdn.com/es/images/1/7/7/img_ensalada_de_apio_tomate_y_aguacate_60771_600.jpg',
          price: 50,
         
        },
        {
          id: 6,
          name: 'Nachos',
          picture: 'http://arabuko.mx/wp-content/uploads/2017/02/arabuko_navola_restaurant_historia_de_los_nachos-620x330.jpg',
          price: 50,
         
        },
        {
          id: 7,
          name: 'Papas',
          picture: 'http://hamburguesasgarfields.com/wp-content/uploads/2018/01/French-Fries-french-fries-1-1-862x582.jpg',
          price: 50,
         
        },
        {
          id: 8,
          name: 'Queso fundido',
          picture: 'https://www.vvsupremo.com/wp-content/uploads/2015/11/900X570_Queso-Fundido.jpg',
          price: 50,
         
        },
           {
          id: 9,
          name: 'Cerveza',
          picture: 'https://www.ecured.cu/images/thumb/4/41/Cerveza.jpg/260px-Cerveza.jpg',
          price: 30,
         
        },
        {
          id: 10,
          name: 'Refresco',
          picture: 'https://t1.pixers.pics/img-d5043af1/posters-refresco-de-dibujos-animados-de-color-rojo-o-lata-de-refresco.png?H4sIAAAAAAAAA5VPQW6EMAz8DkiAnQAh4QF73SdEJoRdugGiJG23fX2DKvXUHiofPJ6xPRp43SMtFozdkw2wrfPsLCyry1Mcg43rpy06NlRYjpl1BWJGx5sNJhy-qBnHqu6x6jusBMvSO-XLjcKjuKfk4wgQ28avz_wuNxPBbBE4sgFQQq-kIsml6dRkta9jon2mMNcCnxIbv98qPKscyXv3oYPNxtFqcv5O_zBQypAZtHf0oFT_5lP-ZEWsujPjcuQYqTg1-MPpG0Neh8sVRAucA2PA5Enpy1W0nDPGpGbMCEl2kKjaqW9RWqROcKO4WKYZp-bF374A6l3KNYoBAAA=',
          price: 25,
         
        },
        {
          id: 11,
          name: 'Agua Mineral',
          picture: 'https://mlstaticquic-a.akamaihd.net/D_Q_NP_681198-MLU26705892181_012018-X.jpg',
          price: 20,
         
        },
        {
          id: 12,
          name: 'Jugo',
          picture: 'https://http2.mlstatic.com/botella-de-vidrio-1000cc-frasesaguajugo-leche-pack-x-3-D_NQ_NP_556811-MLA20630731645_032016-F.jpg',
          price: 20,
         
        },
        
        
      ],

      //modificando los productos
      cart: [],
    }

    this.handleSaveProduct = this.handleSaveProduct.bind(this)
    this.handlerAddProduct = this.handlerAddProduct.bind(this)
    this.handlerRemoveProduct = this.handlerRemoveProduct.bind(this)
    this.handlerOpenOrder = this.handlerOpenOrder.bind(this)
    this.handlerClearCart = this.handlerClearCart.bind(this)
  }

  componentDidMount(){

  }

  componentDidUpdate(){

  }

  handlerClearCart() {
    this.setState({
      cart: [],
      sum: 0,
      total: 0
    });
  }

  sumProducts(array) {
    var total = 0
    array.forEach(product => total += product.order)
    this.setState({total: total})
  }

  sumTotal(array) {
    var sum = 0
    array.forEach(product => sum += product.total)
    this.setState({sum: sum})
  }

  handlerAddProduct(indexCart, indexProduct){
    var statusCopy = Object.assign({}, this.state);
    if (statusCopy.products[indexProduct].status !== 0) {
      statusCopy.cart[indexCart].total += statusCopy.cart[indexCart].price
      statusCopy.cart[indexCart].order += 1
      statusCopy.products[indexProduct].status -= 1
      this.setState(statusCopy)
      this.sumProducts(statusCopy.cart)
      this.sumTotal(statusCopy.cart)
    } 
  }

  handlerRemoveProduct(productId) {
    let product = this.state.products.find(p => p.id === productId);
    let indexProduct = this.state.products.findIndex(x => x.id === product.id)
    let cart = this.state.cart.find(p => p.id === productId)
    let indexCart = this.state.cart.findIndex(x => x.id === cart.id)

    var statusCopy = Object.assign({}, this.state);
    if(statusCopy.cart[indexCart].total === statusCopy.cart[indexCart].price ){
      indexCart !== -1 && statusCopy.cart.splice( indexCart, 1 );
      this.setState(statusCopy)
      alert('El producto fue eliminado de la comanda')
    } else {
      statusCopy.cart[indexCart].total -= statusCopy.cart[indexCart].price
      statusCopy.products[indexProduct].status += 1
      statusCopy.cart[indexCart].order -= 1
      statusCopy.total -= 1
      statusCopy.sum -= statusCopy.cart[indexCart].price
      this.setState(statusCopy)
    }
  }

  handleSaveProduct(productId) {
    let product = this.state.products.find(p => p.id === productId);
    let indexProduct = this.state.products.findIndex(x => x.id === product.id)

    var productCart = {
      id: product.id,
      name: product.name,
      price: product.price,
      order: 1,
      total: product.price
    }

    var exist = this.state.cart.find(p => p.id === productId)
    if (undefined !== exist && exist !== null) {
      let indexCart = this.state.cart.findIndex(x => x.id === exist.id)
      this.handlerAddProduct(indexCart, indexProduct)
    }else{
      var statusCopy = Object.assign({}, this.state);
      statusCopy.products[indexProduct].status -= 1
      this.sumProducts(statusCopy.cart)
      this.sumTotal(statusCopy.cart)
      this.setState({
        cart: this.state.cart.concat([productCart]),
        statusCopy
      })
    }
  }

  handlerOpenOrder(event) {
    event.preventDefault()
    this.setState({ openOrder: true })
  }

  renderOpenOrder() {
    if (this.state.openOrder) {
      return (
        <Order sum={this.state.sum}
          onClearCart={this.handlerClearCart}/>
      )
    }
  }

  onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

  render() {
    return (

      <Container className={style.root} >
        <Grid>
        <div class="row text-dark">
        <div class="col-8">

        <div class="accordion" id="accordionExample">
  <div class="card border-dark">
    <div class="card-header text-white bg-danger" id="headingOne">
      <h7 class="mb-5">
        <button class="btn btn-outline-danger text-white btn-lg d-flex align-items-center" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          ENTRADAS
        </button>
      </h7>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">

            <ProductList
              products={this.state.products.slice(4,8)}
              onSaveProduct={this.handleSaveProduct}
              onIncrementProduct={this.handleSaveProduct}
              onRemoveProduct={this.handlerRemoveProduct}
            />
          
      </div>
    </div>
  </div>
  <div class="card border-dark">
    <div class="card-header text-white bg-danger" id="headingTwo">
      <h7 class="mb-5">
        <button class="btn btn-outline-danger text-white btn-lg" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          PLATO FUERTE
        </button>
      </h7>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
      <ProductList
              products={this.state.products.slice(0,4)}
              onSaveProduct={this.handleSaveProduct}
              onIncrementProduct={this.handleSaveProduct}
              onRemoveProduct={this.handlerRemoveProduct}
            />
      </div>
    </div>
  </div>
  <div class="card border-dark">
    <div class="card-header text-white bg-danger" id="headingThree">
      <h7 class="mb-5">
        <button class="btn btn-outline-danger text-white btn-lg" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          BEBIDAS
        </button>
      </h7>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
        <ProductList
              products={this.state.products.slice(8,12)}
              onSaveProduct={this.handleSaveProduct}
              onIncrementProduct={this.handleSaveProduct}
              onRemoveProduct={this.handlerRemoveProduct}
            />
      </div>
    </div>
  </div>
</div>
</div>


      <div class="col">
                <CartList
                  items={this.state.cart}
                  total={this.state.total}
                  onOpenOrder={this.handlerOpenOrder}
                  onClearCart={this.handlerClearCart}
                />
                {this.renderOpenOrder()}
           
        </div>
   </div>
</Grid>

      </Container>
    )
  }
}


export default App;
