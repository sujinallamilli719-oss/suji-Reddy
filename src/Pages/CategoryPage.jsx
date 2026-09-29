import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MessageCircle
} from "lucide-react";

import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const whatsapp =
  "https://wa.me/919640133666";

export default function CategoryPage({
  category
}) {

  const items = products.filter(
    (product) =>
      product.category === category.slug
  );


  const message =
    encodeURIComponent(
      `Hello TATHVA, I would like to know more about your ${category.title} collection.`
    );


  return (

    <>

      <section className="page-hero category-hero">

        <div className="container">

          <Link
            className="back-link"
            to="/collections"
          >
            <ArrowLeft size={16} />
            All Collections
          </Link>

          <span className="eyebrow">
            {category.eyebrow}
          </span>

          <h1>
            {category.title}
          </h1>

          <p>
            {category.description}
          </p>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <div className="category-heading-row">

            <div>

              <span className="eyebrow">
                TATHVA EDIT
              </span>

              <h2>
                Explore {category.title}
              </h2>

            </div>


            <a
              className="button button-dark"
              href={`${whatsapp}?text=${message}`}
              target="_blank"
              rel="noreferrer"
            >

              <MessageCircle size={17} />

              Enquire on WhatsApp

            </a>

          </div>


          <div className="product-grid">

            {items.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        </div>

      </section>

    </>

  );
}