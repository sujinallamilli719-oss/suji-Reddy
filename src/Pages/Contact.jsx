import {
  MessageCircle,
  MapPin,
  Clock,
  Navigation
} from "lucide-react";


const address =
  "Anala Venkatappa Rao Rd, opp. Ratnadeep Supermarket, near GAIL Office, Cyclone Colony, Rajamahendravaram, Andhra Pradesh 533103";


const encodedAddress =
  encodeURIComponent(address);


const whatsapp =
  "https://wa.me/919640133666";


const instagram =
  "https://www.instagram.com/tathva_label?stkn=MWpidGFhNmdmbncx";


const mapUrl =
  `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;


export default function Contact() {

  return (

    <>

      <section className="page-hero">

        <div className="container">

          <span className="eyebrow">
            VISIT / CONNECT
          </span>

          <h1>
            Contact TATHVA
          </h1>

          <p>
            Visit our store in
            Rajamahendravaram or
            connect with us online.
          </p>

        </div>

      </section>


      <section className="section">

        <div className="container contact-grid">

          <div className="contact-details">

            <span className="eyebrow">
              STORE INFORMATION
            </span>

            <h2>
              We would love
              to welcome you.
            </h2>


            {/* ADDRESS */}

            <div className="contact-item">

              <MapPin />

              <div>

                <h3>
                  Address
                </h3>

                <p>
                  {address}
                </p>

              </div>

            </div>


            {/* HOURS */}

            <div className="contact-item">

              <Clock />

              <div>

                <h3>
                  Opening Hours
                </h3>

                <p>
                  Every day:
                  10:30 AM – 9:00 PM
                </p>

              </div>

            </div>


            {/* WHATSAPP */}

            <div className="contact-item">

              <MessageCircle />

              <div>

                <h3>
                  WhatsApp
                </h3>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  9640133666
                </a>

              </div>

            </div>


            {/* INSTAGRAM */}

            <div className="contact-item">

              <Instagram />

              <div>

                <h3>
                  Instagram
                </h3>

                <a
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  @tathva_label
                </a>

              </div>

            </div>


            <div className="contact-buttons">

              <a
                className="button button-dark"
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>


              <a
                className="button button-outline"
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Navigation size={17} />
                Open in Google Maps
              </a>

            </div>

          </div>


          {/* GOOGLE MAP */}

          <div className="map-card">

            <iframe
              title="TATHVA store location"
              src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="map-note">
              Live Google Maps location
            </div>

          </div>

        </div>

      </section>

    </>

  );
}