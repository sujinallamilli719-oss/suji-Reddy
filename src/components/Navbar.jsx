import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  MessageCircle
} from "lucide-react";

const whatsapp =
  "https://wa.me/919640133666";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="site-header">

      <div className="announcement">
        TATHVA — TIMELESS STYLE, CONTEMPORARY GRACE
      </div>

      <nav className="navbar container">

        {/* LOGO */}

        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
        >

          <span className="brand-mark">
            T
          </span>

          <span>

            <strong>
              TATHVA
            </strong>

            <small>
              DESIGNER CLOTHING
            </small>

          </span>

        </Link>


        {/* MOBILE MENU */}

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
        >

          {open
            ? <X size={25} />
            : <Menu size={25} />
          }

        </button>


        {/* NAVIGATION */}

        <div
          className={`nav-links ${
            open ? "open" : ""
          }`}
        >

          <NavLink
            to="/"
            end
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/collections"
            onClick={closeMenu}
          >
            Collections
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>


          <a
            className="nav-whatsapp"
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >

            <MessageCircle size={17} />

            WhatsApp

          </a>

        </div>

      </nav>

    </header>
  );
}