import React from 'react'
import { Grid } from '@mui/material'
import FoodCardHorizontalShimmer from '../../food-card/FoodCardHorizontalShimmer'
import FoodCardShimmer from '../../food-card/FoodCarShimmer'
import CustomEmptyResult from '../../empty-view/CustomEmptyResult'
import useMediaQuery from '@mui/material/useMediaQuery'

const RestaurantDetailsShimmer = ({ showComponent1 }) => {
    const matches = useMediaQuery('(max-width:825px)')
    return (
        <>
            {showComponent1 ? (
                <Grid container spacing={2}>
                    {[...Array(6)].map((item) => (
                        <Grid
                            item
                            xs={12}
                            sm={matches ? 12 : 6}
                            md={6}
                            lg={4}
                            padding={{
                                xs: 0.5,
                                sm: 1,
                                md: 1,
                            }}
                        >
                            <FoodCardHorizontalShimmer />
                        </Grid>
                    ))}
                    {[...Array(6)].map((item) => (
                        <Grid item md={2.4}>
                            <FoodCardShimmer />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <CustomEmptyResult label="No Food Found" objectfit="contain" />
            )}
        </>
    )
}

export default RestaurantDetailsShimmer
