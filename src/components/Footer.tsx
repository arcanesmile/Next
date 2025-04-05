import Link from "next/link";
import styles from "@/styles/footer.module.scss";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        
        <div className={styles.social}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://x.com/arcane_smile1?t=W0MJnEIONDEarrl68bklSg&s=09" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/arcane_smile_?igsh=MXgwcmw3cTR4YzBydg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Bem. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}