import React from 'react'
import { mealsData } from '../../../data/Data'
import MealsCard from './MealsCard'
import { Box, useMediaQuery } from '@mui/material'

// import { getMeals } from '../../../shared/api-calls'
// import axios from 'axios';
// import { useGetMealsQuery } from '../../../shared/RTK-queries'

const Meals = () => {
    const isNonMobile = useMediaQuery("(min-width: 1000px)"); 

  return (
    <Box 
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))" // 1fr => 1 Fractional Unit as max value
        justifyContent="space-between"
        rowGap="20px"
        columnGap="1.33%"
        sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, // Span 4 takes up the entire width
        }}>
        {
            mealsData.map(e =>  
                <MealsCard key={e.id} id={e.id} title={e.name} src={e.src} price={e.price}></MealsCard>   
            ) 
        }
    </Box>
  )
}

export default Meals