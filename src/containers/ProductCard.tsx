import Image from "next/image";
import { Product } from "../utils/types/wooCommerceTypes";
import styled from "styled-components";

type Props = {
    product: Product
};

const ProductCard = (props: Props) => {
    const { product } = props;

    return (
        <Card>
            <ImageContainer>
                <Image
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    fill
                />
            </ImageContainer>
            <Details>
                <span>{product.name}</span>
                <span>---</span>
                <span><strong>{product.regular_price}</strong></span>
            </Details>
        </Card>
    )
}

export default ProductCard

const Card = styled.div`
  width: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  /* height: 100%; */
  padding-bottom: 100%; /* forces square aspect ratio */
`;

const Details = styled.div`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 5%;
  padding-bottom: 7%;
  display: flex;
  justify-content: center;
  gap: 12px;
`;