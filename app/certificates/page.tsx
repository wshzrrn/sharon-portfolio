import Link from "next/link";

const certificates = [
  {
    id: "adobe",
    title: "Adobe Certified Professional",
    subtitle:
      "Graphic Design & Illustration using Adobe Illustrator",
    date: "December 6, 2024",
    type: "Certificate",
    image: "/certificates/adobe-illustrator.png",
  },
  {
    id: "certiport",
    title: "Certiport Validation",
    subtitle:
      "Authenticated Digital Transcript of Certifications",
    date: "December 6, 2024",
    type: "Validation",
    image: "/certificates/certiport-validation.png",
  },
];

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-[#FFF7E7]">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <section
        className="
          relative
          overflow-hidden
          px-6
          pb-14
          pt-12
          sm:px-10
          sm:pt-16
          lg:px-16
          lg:pb-20
        "
      >

        {/* decorative circles */}

        <div
          className="
            pointer-events-none
            absolute
            -left-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-[#FFD6D6]/50
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            top-12
            h-64
            w-64
            rounded-full
            bg-[#FEC841]/20
            blur-3xl
          "
        />

        <div className="relative mx-auto w-full max-w-[1400px]">

          {/* BACK */}

          <Link
            href="/#about"
            className="
              inline-flex
              items-center
              gap-2
              text-xs
              font-semibold
              text-[#68705A]
              transition-colors
              duration-200
              hover:text-[#CF1C1F]
            "
            style={{
              fontFamily:
                "var(--font-montserrat)",
            }}
          >
            ← Back to About
          </Link>


          {/* TITLE */}

          <div className="mt-10">

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#BB7D40]
                sm:text-xs
              "
              style={{
                fontFamily:
                  "var(--font-montserrat)",
              }}
            >
              Credentials & learning
            </p>

            <h1
              className="
                mt-4
                text-[58px]
                font-extrabold
                italic
                leading-[0.85]
                text-[#CF1C1F]
                sm:text-[78px]
                lg:text-[110px]
              "
              style={{
                fontFamily:
                  "var(--font-montserrat)",
              }}
            >
              Certificates.
            </h1>

            <p
              className="
                mt-5
                max-w-[650px]
                text-sm
                leading-6
                text-[#68705A]
                sm:text-base
              "
              style={{
                fontFamily:
                  "var(--font-montserrat)",
              }}
            >
              A small collection of certifications
              and credential records showcased as
              part of my portfolio.
            </p>

          </div>

        </div>
      </section>


      {/* ================================================= */}
      {/* CERTIFICATE GRID */}
      {/* ================================================= */}

      <section
        className="
          px-6
          pb-24
          sm:px-10
          lg:px-16
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1400px]
            grid-cols-1
            gap-8
            lg:grid-cols-2
          "
        >

          {certificates.map(
            (certificate) => (
              <article
                key={certificate.id}
                className="
                  group
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-[#BB7D40]/15
                  bg-white
                  shadow-[0_15px_40px_rgba(113,57,1,0.08)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_25px_55px_rgba(113,57,1,0.13)]
                "
              >

                {/* ================================================= */}
                {/* IMAGE */}
                {/* ================================================= */}

                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    block
                    overflow-hidden
                    bg-[#F4F1E8]
                  "
                >
                  <div
                    className="
                      relative
                      aspect-[1.42/1]
                      w-full
                      overflow-hidden
                    "
                  >

                    <img
                      src={
                        certificate.image
                      }
                      alt={
                        certificate.title
                      }
                      className="
                        h-full
                        w-full
                        object-contain
                        p-4
                        transition-transform
                        duration-500
                        group-hover:scale-[1.025]
                        sm:p-6
                      "
                    />

                  </div>
                </a>


                {/* ================================================= */}
                {/* INFO */}
                {/* ================================================= */}

                <div className="p-6 sm:p-7">

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                    "
                  >

                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-[#CF1C1F]
                      "
                      style={{
                        fontFamily:
                          "var(--font-montserrat)",
                      }}
                    >
                      {certificate.type}
                    </span>

                    <span
                      className="
                        text-[10px]
                        font-semibold
                        text-[#BB7D40]
                      "
                      style={{
                        fontFamily:
                          "var(--font-montserrat)",
                      }}
                    >
                      {certificate.date}
                    </span>

                  </div>


                  <h2
                    className="
                      mt-3
                      text-2xl
                      font-extrabold
                      leading-tight
                      text-[#3F4A32]
                      sm:text-3xl
                    "
                    style={{
                      fontFamily:
                        "var(--font-montserrat)",
                    }}
                  >
                    {certificate.title}
                  </h2>


                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-[#68705A]
                    "
                    style={{
                      fontFamily:
                        "var(--font-montserrat)",
                    }}
                  >
                    {
                      certificate.subtitle
                    }
                  </p>


                  {/* VIEW */}

                  <a
                    href={
                      certificate.image
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#3F4A32]
                      px-5
                      py-3
                      text-xs
                      font-bold
                      text-[#FFF7E7]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[#CF1C1F]
                    "
                    style={{
                      fontFamily:
                        "var(--font-montserrat)",
                    }}
                  >
                    View Document
                    <span>↗</span>
                  </a>

                </div>

              </article>
            )
          )}

        </div>
      </section>


      {/* ================================================= */}
      {/* BOTTOM */}
      {/* ================================================= */}

      <div
        className="
          px-6
          pb-10
          text-center
          sm:px-10
        "
      >
        <Link
          href="/#about"
          className="
            text-xs
            font-semibold
            text-[#BB7D40]
            transition-colors
            hover:text-[#CF1C1F]
          "
          style={{
            fontFamily:
              "var(--font-montserrat)",
          }}
        >
          ← Back to portfolio
        </Link>
      </div>

    </main>
  );
}