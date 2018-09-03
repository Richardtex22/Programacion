import React, { Component } from 'react'
import { Card, Icon, Button} from 'semantic-ui-react'
import Cart from '../Cart/index.js'

class CartList extends Component {

  numberFormat(amount, decimals) {
    decimals = decimals || 0;
    if (isNaN(amount) || amount === 0) return parseFloat(0).toFixed(decimals);
    amount = '' + amount.toFixed(decimals);
    var amount_parts = amount.split('.'), regexp = /(\d+)(\d{3})/;
    while (regexp.test(amount_parts[0]))
      amount_parts[0] = amount_parts[0].replace(regexp, '$1' + ',' + '$2');
    return amount_parts.join('.');
  }

  render() {
    return(
      <Card style={{ margin: 0, justifyContent: 'center',
    alignItems: 'center',}}>
        <Card.Content>
          <Card.Header>
            Comanda &nbsp; 
            <Icon size="edit"/>
          </Card.Header>
        </Card.Content>
        <Card.Content>
          {this.props.items.map(p => {
          return (
          <Cart
            key={p.id}
            name={p.name}
            total={this.numberFormat(p.total)}
            order={p.order}
          />

          )
        })}
        <Button
            basic
            color='red'
            compact
            size="medium"
            onClick={this.props.onClearCart}
            >Borrar Comanda
          </Button>
          </Card.Content>
            <Card.Content extra>
              <Button
                basic
                color='green'
                compact
                size="medium"
                onClick={this.props.onOpenOrder}
                >Cerrar Comanda
              </Button>
            </Card.Content>
        
        
      </Card>
    )
  }
}

export default CartList;
