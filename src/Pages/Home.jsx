import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";

import {
  categories,
  products
} from "../data/products";

export default function Home() {

  return (

    <>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content container">

          <span className="eyebrow light">
            TATHVA / DESIGNER CLOTHING
          </span>

          <h1>
            Classic elegance.
            <br />
            <em>
              Contemporary grace.
            </em>
          </h1>

          <p>
            Discover thoughtfully curated
            designer clothing for celebrations,
            everyday elegance and every
            beautiful occasion.
          </p>

          <div className="hero-actions">

            <Link
              className="button button-light"
              to="/collections"
            >
              Explore Collections
              <ArrowRight size={17} />
            </Link>

            <Link
              className="text-link light-link"
              to="/contact"
            >
              <MapPin size={17} />
              Visit Our Store
            </Link>

          </div>

        </div>

      </section>


      {/* INTRO */}

      <section className="intro section">

        <div className="container intro-grid">

          <div>

            <span className="eyebrow">
              THE TATHVA EDIT
            </span>

            <h2>
              Where tradition finds
              its modern expression.
            </h2>

          </div>

          <p>
            At TATHVA, timeless Indian
            silhouettes meet contemporary
            design. From elegant sarees
            and festive lehengas to refined
            kurtis, coordinated sets,
            dresses and western wear.
          </p>

        </div>

      </section>


      {/* COLLECTIONS */}

      <section className="section section-soft">

        <div className="container">

          <SectionTitle
            eyebrow="01 / COLLECTIONS"
            title="Explore the TATHVA wardrobe"
            text="A considered collection of Indian and contemporary designer wear."
          />

          <div className="category-grid">

            {categories.map((item) => (

              <Link
                key={item.slug}
                to={`/collections/${item.slug}`}
                className="category-card"
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="category-overlay">

                  <span>
                    Explore
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <ArrowRight size={19} />

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* PRODUCTS */}

      <section className="section">

        <div className="container">

          <SectionTitle
            eyebrow="02 / SIGNATURE PICKS"
            title="Selected for you"
            text="A few pieces from the current TATHVA edit."
          />

          <div className="product-grid">

            {products
              .slice(0, 6)
              .map((product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              ))}

          </div>

        </div>

      </section>


      {/* STORE CTA */}

      <section className="store-cta">

        <div className="container store-cta-inner">

          <div>

            <span className="eyebrow light">
              VISIT TATHVA
            </span>

            <h2>
              Come experience
              the collection in person.
            </h2>

            <p>
              Anala Venkatappa Rao Rd,
              opposite Ratnadeep Supermarket,
              near GAIL Office,
              Cyclone Colony,
              Rajamahendravaram.
            </p>

          </div>

          <Link
            className="button button-light"
            to="/contact"
          >
            Get Directions
            <ArrowRight size={17} />
          </Link>

        </div>

      </section>

    </>

  );
}