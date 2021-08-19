import React from 'react'
import {ProductsContainer,ProductHeading,ProductWrapper,ProductCard,ProductInfo,ProductImg,ProductPrice,ProductDesc,ProductTitle,ProductBtn} from './ProductItems'
const Products = ({heading,data}) => {
    return (
        <ProductsContainer>
            <ProductHeading>{heading}</ProductHeading>
            <ProductWrapper>
                {data.map((product,index)=>{
                    console.log(product.Desc);
                    return(
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt}></ProductImg>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.Desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductBtn>{product.button}</ProductBtn>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products
