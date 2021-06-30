import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTs = [
  { id: "p1", price: 6, title: "First Book", description: "First book" },
  { id: "p2", price: 12, title: "Second Book", description: "Second book" },
];

const Products = (props) => {
  const itemsList = DUMMY_PRODUCTs.map((p) => {
    return (
      <ProductItem
        key={p.id}
        id={p.id}
        title={p.title}
        price={p.price}
        description={p.description}
      />
    );
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{itemsList}</ul>
    </section>
  );
};

export default Products;
