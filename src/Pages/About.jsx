import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function About() {

  return (

    <>

      <section className="page-hero">

        <div className="container">

          <span className="eyebrow">
            THE TATHVA STORY
          </span>

          <h1>
            About TATHVA
          </h1>

          <p>
            Classic Indian elegance,
            thoughtfully interpreted for today.
          </p>

        </div>

      </section>


      <section className="section">

        <div className="container about-grid">

          <div className="about-image">

            <img
              src="/images/about-tathva.jpg"
              alt="TATHVA designer clothing"
            />

          </div>


          <div className="about-copy">

            <span className="eyebrow">
              OUR PERSPECTIVE
            </span>

            <h2>
              Tradition meets
              a contemporary wardrobe.
            </h2>

            <p>
              TATHVA is a designer clothing
              destination in Rajamahendravaram,
              created around the idea that
              Indian fashion can feel both
              timeless and current.
            </p>

            <p>
              Our collection brings together
              graceful sarees, kurtis, lehengas,
              coordinated sets, dresses and
              western wear.
            </p>

            <p>
              We believe great clothing is
              about more than a trend.
              It is about how a silhouette feels,
              how a detail catches the light
              and how confidently you carry it.
            </p>

            <Link
              className="button button-dark"
              to="/collections"
            >
              Explore Collections
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>

    </>

  );
}