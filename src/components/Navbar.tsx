'use client'; 
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; 
import styles from "../styles/navbar.module.scss";

export default function Navbar() {
  const pathname = usePathname(); 

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>BEM⚡</div>
      <ul>
        <li>
          <Link href="/" className={pathname === "/" ? styles.active : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={pathname === "/about" ? styles.active : ""}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className={pathname === "/contact" ? styles.active : ""}>
            Contact
          </Link>
        </li>
        <li>
          <Link href="/blog" className={pathname === "/blog" ? styles.active : ""}>
            Blog
          </Link>
        </li>
      </ul>
      <div className={styles.profileIcon}>
        <Link href="/user/|">
          <Image src="/profile-icon.png" alt="Profile" width={35} height={35} />
        </Link>
      </div>
    </nav>
  );
}