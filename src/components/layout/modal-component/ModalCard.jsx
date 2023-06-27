import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'


const ModalCard = ({ title, price, image, count }) => {

  return (
    <Box >
       <Card sx={{ m:'10px' }}>
        <CardContent sx={{ m:'10px', display:'flex', flexDirection: 'row', }}>
            <CardMedia sx={{ width: '80px', height: '80px' }} image={image} />
            <Typography variant='h5' sx={{ p:'15px'}}> {title} </Typography>
            <Typography variant='h5' sx={{ p:'15px' }}> {price} </Typography>
            <Typography variant='h5' sx={{ p:'15px' }}> {count} </Typography>
        </CardContent>

       </Card>
    </Box>
  )
}

export default ModalCard