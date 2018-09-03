import React from 'react'
import Format from '../numberFormat/index.js'
import { Card, Image, Button } from 'semantic-ui-react'


function Product(props) {
  return(
    <Card style={{ margin: 15, justifyContent: 'center',
    alignItems: 'center'}}>
    
      <Image size="MEDIUM" src={props.picture}  />
      <Card.Content>
        <Card.Header style={{fontSize: 20}}>{props.name}</Card.Header>
        <Card.Meta>
          <Format number={props.price}/>
        </Card.Meta>
             
      </Card.Content>
     
      
      <Card.Content extra>
        <Button.Group floated='center'>
          <Button
            compact
            color='green'
            onClick={props.onIncrementProduct}
            >+</Button>
          <Button
            compact
            color='orange'
            onClick={props.onRemoveProduct}
            >-</Button>
        </Button.Group>
      </Card.Content>
    </Card>
  )
}



export default Product;


