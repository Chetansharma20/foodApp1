import React from 'react'
import { useSelector } from 'react-redux'
import { calculateTotal, decrementQty, incrementQty, removeItem } from '../reduxwork/CartSlice'
import { Box, Button, CardActions, CardContent, CardMedia, Grid2, Typography, Card } from '@mui/material'
import { useDispatch } from 'react-redux'
// import { incrementQty } from '../reduxwork/CartSlice'
const Carts = () => {


  let{cartItems, cartItemsCount, cartTotalAmount} = useSelector((state)=>state.cart)

  let dispatcher = useDispatch()
  {dispatcher(calculateTotal())}
  return (
  <>
 
<Box>
<Grid2 container spacing={3} padding={2}>
{


  cartItems.map((prod)=>
  {
    let pId = prod.id 
    return (


      <Grid2 size={{sm:12,md:6, lg:4}} item key={prod.id}>

        <Card>

          <CardMedia sx={{height:190}} image={prod.thumbnail} />
<CardContent>


  <Typography variant='h5'>{prod.title}</Typography>
  <Typography variant='h5'>{prod.category}</Typography>
  <Typography variant='h5'>{prod.price}</Typography>
</CardContent>

<CardActions>

<Button variant='contained' onClick={()=>
  {

    dispatcher(incrementQty({pId}))
  }} color='success'>+</Button>

{prod.qty}
<Button variant='contained' onClick={()=>
  {

    dispatcher(decrementQty({pId}))
  }} color='success'>-</Button>


<Button variant='contained' onClick={()=>
  {
    dispatcher(removeItem({pId}))
  }} color='error'>remove</Button>






</CardActions>
</Card>
</Grid2>
)
}
)
}





</Grid2>

</Box>
<Typography>Total:{cartTotalAmount}</Typography>



    </>
  )
}

export default Carts