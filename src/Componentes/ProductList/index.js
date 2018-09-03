import React from 'react'
import { Grid } from 'semantic-ui-react'
import Product from '../Product/index.js'


function ProductList(props) {
    
    return(
      <Grid>
        <Grid.Row columns={4}>
          {props.products.map(p => {
            return (
              <Grid.Column>
                <Product
                  key={p.id}
                  name={p.name}
                  picture={p.picture}
                  price={p.price}
                  onSaveProduct={() => props.onSaveProduct(p.id)}
                  onIncrementProduct={() => props.onIncrementProduct(p.id)}
                  onRemoveProduct={() => props.onRemoveProduct(p.id)}
                />
              </Grid.Column>
            )
          })}
        </Grid.Row>
      </Grid>
   
  )
}

export default ProductList
