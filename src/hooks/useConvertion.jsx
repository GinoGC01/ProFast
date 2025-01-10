import { useEffect, useState } from "react";

export function useGetDollarPrice() {
  const [price, setPrice] = useState(0);
  const convertion = async () => {
    try {
      const response = await fetch("https://dolarapi.com/v1/dolares/blue");
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();

      const promedioDolar = (json.compra + json.venta) / 2;

      //   const convertion = promedioDolar * cuantity;

      setPrice(promedioDolar);
    } catch (err) {
      console.log(err); //To do handler error
    }
  };
  useEffect(() => {
    convertion();
  }, []);
  return { price };
}
