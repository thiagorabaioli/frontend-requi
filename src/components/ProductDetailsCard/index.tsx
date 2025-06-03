import './styles.css';
import ProductCategory from '../ProductCategory';
import { ProductDTO } from '../../models/product';
import { useState } from 'react';

type Props = {
    product: ProductDTO;
}

export default function ProductDetailsCard({ product }: Props) {
    const [selectedDate, setSelectedDate] = useState('');

    return (
        <div className="dsc-card dsc-mb20">
            <div className="dsc-product-details-top dsc-line-bottom">
                <img src={product.imgUrl} alt={product.name} />
            </div>
            <div className="dsc-product-details-bottom">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                
                <div className="dsc-category-container">
                    {
                        product.categories.map(item => (
                            <ProductCategory key={item.id} name={item.name} />
                        ))
                    }
                </div>

                <div className="dsc-extra-info">
                    <button className="btn-valor">Com Valor</button>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="date-input"
                    />
                </div>
            </div>
        </div>
    );
}