import { apple, google } from "../assets";
import styles, { layout } from "../style";
import bill from "../images/team.jpeg.jpeg";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Learn More About Us <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        Bobdao is a student-led community dedicated to advancing web3
        technologies. It provides a quality learning environment and support for
        students to develop their skills in the field. The goal is to create a
        supportive and inclusive community for web3 enthusiasts, shaping the
        future of this exciting field.
      </p>
    </div>
  </section>
);

export default Billing;
