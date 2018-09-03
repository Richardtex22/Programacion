import React from 'react'
import Format from '../numberFormat/index.js'
import { Card, Statistic, Button } from 'semantic-ui-react'

function Order(props) {
  return(
    <Card>
      <Card.Content header='Cantidad a pagar' />
      <div className="card-body">

              <Card.Content extra>
                <Statistic size='mini'>
                  <Statistic.Value>
                    <Format number={props.sum}/>
                  </Statistic.Value>
                </Statistic>
                    <Button
                      basic
                      color='green'
                      compact
                      size="medium"
                      floated='right'
                      onClick={props.onClearCart}
                      >Imprimir Comanda
                    </Button>
                    </Card.Content>
              </div>
    </Card>
  )
}

export default Order
