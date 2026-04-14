import type {FC} from "react";
import type {IProduct} from "../../module/IProduct.ts";
import './ProductsStyle.css'

type ProductType ={
    item:IProduct
}

export const Products:FC<ProductType> = ({item}) => {
    return (
        <div>
            <p>{item.id}</p>
            <h2>{item.title}, {item.price}</h2>
            <ul>{item.tags?.map((tag, index) =>(<li key={index}>{tag}</li> ))}</ul>
            <p>{item.brand}, {item.stock}, {item.sku}</p>
            <div>{item.reviews?.map((review, index) =>(<p key={index}>{review.reviewerEmail},{review.reviewerName},{review.date},
                {review.comment},{review.rating}</p>))}</div>
            <p>{item.dimensions.height}, {item.dimensions.width},{item.dimensions.depth}</p>
            <p>{item.category}, {item.description}</p>
            <p>{item.availabilityStatus}, {item.discountPercentage}, {item.shippingInformation}, {item.warrantyInformation}</p>
            <div>{item.images.map((image, index) =>(<img key={index} src={image} alt={item.title}/>))}</div>
            <p>{item.meta.updatedAt},{item.meta.barcode},{item.meta.createdAt}</p>
            <img src={item.meta.qrCode} alt="qrCode"/>
            <p>{item.rating},{item.returnPolicy}, {item.minimumOrderQuantity}, {item.weight}</p>
        </div>
    );
};
