import React from 'react';
import { Link } from 'react-router-dom';

function ProductDetail(props) {
  <Link to={{
    pathname: `/product/${product.id}`,
    state: { product }
  }}>View Details</Link>
  

  return (
    <div>
      {/* Product detail content */}
      <Link to="/products">Back to Products</Link>
    </div>
  );
}

export default ProductDetail;
