import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Container= styled.div`
  padding: 50px;
  margin-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;



const Products = () => {
  return (
    <div>
      <Container>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Products;