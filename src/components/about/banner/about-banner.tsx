// import { RightArrowTwo } from "@/components/svg";
// import Link from "next/link";
// import HeroSection from "@/components/slider/Heroslider";

type IProps = {
  title?: string;
  subtitle?: string;
  admission?: boolean;
};

export default function AboutBanner({
  title = "About Us",
  subtitle = "We provide the best quality products.",
  admission,
}: IProps) {
  return (
    <>
      <section className="tp-breadcrumb__area pt-160 pb-150 p-relative z-index-1 fix">
        {/* Background Image */}
        <div
          className="tp-breadcrumb__bg overlay"
          style={{ backgroundImage: "url(/assets/img/live/ABOUT-ERITH.jpg)" }}
        ></div>

        {/* Content Section */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12">
              <div className="tp-breadcrumb__content text-center">
                <div className="tp-breadcrumb__list inner-after">
                  {/* Title */}
                  <h2 className="tp-breadcrumb__title color mb-10">{title}</h2>

                  {/* Subtitle */}
                  <p className="white fs-5">{subtitle}</p>

                  {/* Optional Admission Label */}
                  {admission && (
                    <div className="mt-10">
                      <span className="white fw-bold">Admission</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Hero Section (if needed later) */}
        {/* <HeroSection /> */}
      </section>
    </>
  );
}
