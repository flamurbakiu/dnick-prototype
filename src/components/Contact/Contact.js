import styles from "./Contact.module.scss";

import servicesImage from "../../assets/services-image.jpg";

import contactTop from "../../assets/contact-top-right.png";
import contactBottom from "../../assets/contact-bottom-right.png";
import Button from "../UI/Button/Button";

const cardsList = [
  {
    id: 0,
    image: servicesImage,
    text: "070-111-111",
  },
  {
    id: 1,
    image: servicesImage,
    text: "our@email.com",
  },
  {
    id: 2,
    image: servicesImage,
    text: "Skopje, North Macedonia",
  },
];

const Contact = (props) => {
  return (
    <div className={styles["contact-container"]}>
      <div className={styles.text}>
        <h6>Contact us</h6>
        <h4>
          Get in touch with us <span>now</span>
        </h4>
        <div className={styles.line}></div>
      </div>

      <div className={styles.form}>
        <img
          src={contactTop}
          className={styles["contact-background"]}
          alt="Contact Top"
          style={{ marginBottom: "-20px" }}
        />

        <div className={styles.top}>
          {cardsList.map((card) => (
            <div className={styles.card} key={card.id}>
              <img src={card.image} className={styles.image} alt={card.name} />
              <h3>{card.text}</h3>
            </div>
          ))}
        </div>

        <div className={styles.middle}>
          <div className={styles.left}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
          </div>
          <div className={styles.right}>
            <textarea type="text" placeholder="Message" />
          </div>
        </div>

        <div className={styles.bottom}>
          <Button>Send message now</Button>
        </div>

        <img
          src={contactBottom}
          className={styles["contact-background"]}
          alt="Contact Bottom"
          style={{ marginTop: "-130px" }}
        />
      </div>
    </div>
  );
};

export default Contact;
