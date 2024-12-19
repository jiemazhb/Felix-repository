import { useEffect, useState } from "react";

export default function LiveCoding() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://dummyjson.com/products/search?q=phone"
        );

        const result = await res.json();

        setProducts(result.products);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    <>
      <ul>
        {products ? (
          products.map((product) => {
            const {id, price, title} = product;

            return (
              <li key={id}>
                <div>{id}</div>
                <div>{price}</div>
                <div>{title}</div>
              </li>
            );
          })
        ) : (
          <li> something wrong </li>
        )}
      </ul>
    </>
  );
}
