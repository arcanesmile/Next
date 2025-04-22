import { SignIn } from "@clerk/nextjs";
import styles from "./signin.module.scss";
import Image from "next/image";

export default function Page() {
  return (
    <div className={styles["signin-wrapper"]}>
      <div className={`${styles["signin-container"]} ${styles["fade-in"]}`}>
        <div className={styles["signin-art"]}>
          <Image 
            src="/signin.svg" 
            alt="Sign in Illustration" 
            width={100}
            height={100}
            priority 
          />
        </div>
        <h2 className={styles["signin-title"]}>Please <span>Sign In</span> to continue</h2>
        <SignIn />
      </div>
    </div>
  );
}