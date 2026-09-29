import { MessageCircle } from "lucide-react";

const whatsapp =
  "https://wa.me/919640133666";

export default function ProductCard({
  product
}) {

  const message = encodeURIComponent(
    `Hello TATHVA, I am interested in ${product.name} (${product.price}). Please share more details.`
  );

  return (

    <article className="product-card">

      <div className="product-image-wrap">

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />

        <span className="product-tag">
          TATHVA
        </span>

      </div>


      <div className="product-info">

        <div>

          <h3>
            {product.name}
          </h3>

          <p>
            {product.price}
          </p>

        </div>


        <a
          href={`${whatsapp}?text=${message}`}
          target="_blank"
          rel="noreferrer"
          className="product-action"
        >

          <MessageCircle size={18} />

        </a>

      </div>

    </article>

  );
}