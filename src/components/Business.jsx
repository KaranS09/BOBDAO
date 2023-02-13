import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

function FeatureCard({ icon, title, content, index }) {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
}

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Celebrating Our Love For Innovation
        <br className="sm:block hidden" />
      </h2>
      <p className={`text-[16px] ${styles.paragraph} max-w-[600px] mt-3`}>
        We at BOBDAO are excited to announce the "Build for the Future"
        hackathon, an event aimed at promoting innovation in the Web3 space and
        supporting the development of new, cutting-edge solutions. The hackathon
        will take place from 10th to 15th March online and will offer
        developers, designers, and other creatives an opportunity to showcase
        their skills, collaborate with others, and build something truly
        impactful.
      </p>
      <div className="mt-8">
        <Button styles={`mt-10`} />
      </div>
    </div>

    <div className={`${layout.sectionImg} grow-1 flex-wrap flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
