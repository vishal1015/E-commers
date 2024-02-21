import { useState,useEffect } from "react";
  const Home = () => {
    const [products, setProducts] = useState([]);
    // const [searchTerm, setSearchTerm] = useState("");
    // const [minPrice, setMinPrice] = useState("");
    // const [maxPrice, setMaxPrice] = useState("");
    // const [filteredProducts, setFilteredPrdoucts] = useState([]);

    useEffect(() => {
      // const fetchProducts = async () => {
      //   try {
      //     const response = await axios.get("https://dummyjson.com/products");
      //     setProducts(response.data);
      //   } catch (error) {
      //     console.error("Error fetching products:", error);
      //   }
      // };
      fetch("https://dummyjson.com/products")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
        //   console.log(data);
          setProducts(data);
        })
        .catch(console.error());
    }, []);
    //  console.log(`minprise is ${minPrice} and maxprise is ${maxPrice}`);
    // // Ensure that filteredProducts is an array
    // setFilteredPrdoucts(
    //     products.filter((product) =>(
    //       ( product.price >= minPrice) && ( product.price <= maxPrice) )
    //   ));
    console.log(typeof filteredProducts);
    console.log(products);
    return (
      <div>
        <h2>Home</h2>
        <label>
          Min Price:
          <input
            type="number"
            // value={minPrice}
            // onChange={(e) => setMinPrice(e.target.value)}
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            // value={maxPrice}
            // onChange={(e) => setMaxPrice(e.target.value)}
          />
          <button className="btn-btn-primary">Search</button>
        </label>
        {/* Display filtered products */}
        {/* {filteredProducts.map((product) => (
          <div key={product.id}>
            {product.name} - ${product.price}
          </div>
        ))} */}
      </div>
    );
  };

export default Home;
