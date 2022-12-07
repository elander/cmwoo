import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Product } from "../utils/types/wooCommerceTypes";
import ProductCard from '../containers/ProductCard';
import { fetchWooCommerceProducts } from '../utils/wooCommerceRestAPI';
import styles from '../styles/Home.module.css';

interface Props {
  products: Product[];
}

export default function Home(props: Props) {
  const { products } = props;
  return (
    <>
    {products.map((product) => {
      return <ProductCard product={product} key={product.id} />
    })}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const wooCommerceProducts = await fetchWooCommerceProducts().catch((error) =>
    console.error(error)
  );

  if (!wooCommerceProducts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: wooCommerceProducts.data,
    },
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
};