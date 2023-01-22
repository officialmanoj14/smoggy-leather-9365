import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { ProductCard } from './ProductCard'
import { ProductGrid } from './ProductGrid';

export const Products = ({products}) => {

  return (
    <>
    
        <Box
            maxW="7xl"
            mx="auto"
            px={{
            base: '4',
            md: '8',
            lg: '12',
            }}
            py={{
            base: '6',
            md: '8',
            lg: '12',
            }}
            
        >
            <ProductGrid>
            {products.map((data) => (
                <ProductCard key={data.id} data={data} />
            ))}
            </ProductGrid>
        </Box>
    </>
)}
