import {
  MessageCircle,
  MapPin,
  Clock
} from "lucide-react";

import { Link } from "react-router-dom";

const whatsapp =
  "https://wa.me/919640133666";

const instagram =
  "https://www.instagram.com/tathva_label?stkn=MWpidGFhNmdmbncx";

const address =
  "Anala Venkatappa Rao Rd, opp. Ratnadeep Supermarket, near GAIL Office, Cyclone Colony, Rajamahendravaram, Andhra Pradesh 533103";

export default function Footer() {
  return (
    <footer className="footer">

      {/* Footer Main Section */}
      <div className="container footer-grid">

        {/* Brand */}
        <div>
          <div className="footer-brand">
            TATHVA
          </div>

          <p className="muted">
            Designer clothing with
            a classic Indian soul and
            a contemporary point of view.
          </p>
        </div>


        {/* Explore */}
        <div>
          <h4>
            Explore
          </h4>

          <Link to="/">
            Home
          </Link>

          <Link to="/collections">
            Collections
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>
        </div>


        {/* Visit Us */}
        <div>
          <h4>
            Visit Us
          </h4>

          <p>
            <MapPin size={16} />
            <span>
              {address}
            </span>
          </p>

          <p>
            <Clock size={16} />
            <span>
              10:30 AM – 9:00 PM
            </span>
          </p>
        </div>


        {/* Connect */}
        <div>
          <h4>
            Connect
          </h4>

          {/* WhatsApp */}
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} />
            <span>
              9640133666
            </span>
          </a>


         <a
  href={instagram}
  target="_blank"
  rel="noreferrer"
>
  <span>Instagram</span>
  @tathva_label


            <span>
              @tathva_label
            </span>
          </a>

        </div>

      </div>


      {/* Copyright */}
      <div className="footer-bottom">

        © {new Date().getFullYear()}
        {" "}
        TATHVA.
        {" "}
        All rights reserved.

      </div>

    </footer>
  );
}