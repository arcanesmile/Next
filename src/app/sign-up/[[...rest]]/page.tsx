import { SignUp } from "@clerk/nextjs";
import styles from "./signup.module.scss";
import Image from "next/image";

export default function Page() {
  return (
    <div className={styles["signup-wrapper"]}>
      <div className={`${styles["signup-container"]} ${styles["fade-in"]}`}>
        <div className={styles["signup-art"]}>
          <Image 
            src="/signin.svg" 
            alt="Sign Up Illustration" 
            width={100}
            height={100}
            priority 
          />
        </div>
        <h2 className={styles["signup-title"]}>Please <span>Sign Up</span> to continue</h2>
        <SignUp />
      </div>
    </div>
  );
}