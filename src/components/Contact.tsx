import styles from "./Contact.module.css";
import SmsIcon from "./icon/SmsIcon";
import TelIcon from "./icon/TelIcon";

type Props = {
  text: string;
  contactNumber: string;
};
export default function Contact({ text, contactNumber }: Props) {
  return (
    <div className={styles.contactContainer}>
      <p className="text-[18px] mr-[20px]">{text}</p>
      <div>
        <a className={styles.contactButton} href={`tel:${contactNumber}`}>
          <TelIcon />
        </a>
        <a
          className={`ml-4 ${styles.contactButton}`}
          href={`sms:${contactNumber}`}
        >
          <SmsIcon />
        </a>
      </div>
    </div>
  );
}
