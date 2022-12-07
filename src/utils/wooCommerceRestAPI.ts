import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: process.env.WORDPRESS_URL,
  consumerKey: process.env.WOOCOMMERCE_KEY,
  consumerSecret: process.env.WOOCOMMERCE_SECRET,
  wpAPIPrefix: "wp/wp-json",
});

export async function fetchWooCommerceProducts() {
    try {
        const response = await api.get("products");
        return response;
      } catch (error: any) {
        throw new Error(error);
      }
    
    // api.get("products", {
    //     per_page: 20, // 20 products per page
    //   })
    //     .then((response) => {
    //       // Successful request
    //       console.log("Response Status:", response.status);
    //       console.log("Response Headers:", response.headers);
    //       console.log("Response Data:", response.data);
    //       console.log("Total of pages:", response.headers['x-wp-totalpages']);
    //       console.log("Total of items:", response.headers['x-wp-total']);
    //     })
    //     .catch((error) => {
    //       // Invalid request, for 4xx and 5xx statuses
    //       console.log("Response Status:", error.response.status);
    //       console.log("Response Headers:", error.response.headers);
    //       console.log("Response Data:", error.response.data);
    //     })
    //     .finally(() => {
    //       // Always executed.
    //     });
}

