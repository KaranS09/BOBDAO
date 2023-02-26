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
      <p className={`${styles.paragraph3} max-w-[600px] mt-5`}>
        Bobdao is a student-centric community that is dedicated to the
        advancement of web3 technologies. Built and driven by students, the
        community is focused on providing a quality learning environment and the
        best experience for builders in this field. The students who make up
        Bobdao are passionate about web3 technologies and are determined to
        share their knowledge and resources to help others develop their skills
        in this cutting-edge area.
        <br />
        The goal of Bobdao is to create a student-led community where members
        can collaborate and support each other in their journey to becoming web3
        experts. By fostering a supportive and inclusive environment for web3
        enthusiasts, Bobdao is helping to shape the future of this exciting
        field. Members are encouraged to share their ideas, perspectives, and
        experiences, allowing for a rich exchange of knowledge and information.
        With its focus on student empowerment and the advancement of web3
        technologies, Bobdao is well positioned to play a key role in the growth
        and development of this cutting-edge field.
      </p>
    </div>
  </section>
);

export default Billing;
