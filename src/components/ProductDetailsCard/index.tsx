import './styles.css';
import ProductCategory from '../ProductCategory';
import { ProductDTO } from '../../models/product';
import { useEffect, useState } from 'react';

type Props = {
    product: ProductDTO;
}

export default function ProductDetailsCard({ product }: Props) {
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        if (product.registerDate) {
            // Corta só a parte yyyy-mm-dd caso venha com hora (ex: 2024-06-03T00:00:00)
            setSelectedDate(product.registerDate.slice(0, 10));
        }
    }, [product]);

    return (
        <div className="dsc-card dsc-mb20">
            <div className="dsc-product-details-top dsc-line-bottom">
                <img src={product.imgUrl} alt={product.name} />
            </div>
            <div className="dsc-product-details-bottom">
                <h4>{product.name}</h4>
                <p>{product.description}</p>

                <div className="dsc-category-container">
                    {product.categories.map(item => (
                        <ProductCategory key={item.id} name={item.name} />
                    ))}
                </div>

                <div className="dsc-extra-info">

                    <input
                        type="date"
                        value={selectedDate}
                        disabled
                        className="date-input"
                    />
                </div>
            </div>
        </div>
    );
}