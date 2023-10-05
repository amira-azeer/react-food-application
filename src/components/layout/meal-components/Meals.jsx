import React from 'react'
import MealsCard from './MealsCard'
import { Box, useMediaQuery } from '@mui/material'

// import { mealsData } from '../../../data/Data'
// import { getMeals } from '../../../shared/api-calls'
// import axios from 'axios';
import { useGetMealsQuery } from '../../../shared/RTK-queries'

const Meals = () => {
    const isNonMobile = useMediaQuery("(min-width: 1000px)"); 

    let { data, isLoading, } = useGetMealsQuery()

    const componentArray = []

    for(let key in data){
      componentArray.push(<MealsCard key={key} id={key} title={data[key].name} src={data[key].src} price={data[key].price}></MealsCard>)
    }



    
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
            // mealsData.map(e =>  
            //     <MealsCard key={e.id} id={e.id} title={e.name} src={e.src} price={e.price}></MealsCard>   
            // ) 

          //   data ? <h1>Loading...</h1>  : data.map(e =>  
          //     <MealsCard key={e.id} id={e.id} title={e.name} src={e.src} price={e.price}></MealsCard>   
          // ) 

          isLoading ? <h1>Loading....</h1> : componentArray
        }
    </Box>
  )
}

export default Meals