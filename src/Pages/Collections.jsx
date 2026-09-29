import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import SectionTitle from "../components/SectionTitle";
import { categories } from "../data/products";

export default function Collections() {

  return (

    <>

      <section className="page-hero">

        <div className="container">

          <span className="eyebrow">
            THE COLLECTION
          </span>

          <h1>
            Designer Clothing
          </h1>

          <p>
            Explore the TATHVA edit,
            from timeless Indian classics
            to modern wardrobe essentials.
          </p>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <SectionTitle
            eyebrow="01 — 06"
            title="Choose your edit"
          />

          <div className="large-category-grid">

            {categories.map(
              (item, index) => (

                <Link
                  key={item.slug}
                  to={`/collections/${item.slug}`}
                  className="large-category-card"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="large-category-copy">

                    <span>
                      0{index + 1}
                    </span>

                    <h2>
                      {item.title}
                    </h2>

                    <p>
                      Explore collection
                    </p>

                    <ArrowRight />

                  </div>

                </Link>

              )
            )}

          </div>

        </div>

      </section>

    </>

  );
}