"use client";
import Image from "next/image";
import styles from "./success.module.css";
import thankLogo from "../../../public/illustration-thank-you.svg";
import { useRouter } from "next/navigation";

export default function Success() {
  let rating;
  if (typeof window !== "undefined") {
    rating = localStorage.getItem("rating");
  }
  const router = useRouter();

  return (
    <div className={styles.successContainer}>
      <div className={styles.successImage}>
        <Image src={thankLogo} alt="logo" />
      </div>
      <div className={styles.successText}>
        <p>You selected {rating} out of 5</p>
        <p>Thank You!</p>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, dont hesitate to get in touch!
        </p>
      </div>
      <div>
        <button
          className={styles.submitButton}
          onClick={() => {
            router.push("/");
          }}
        >
          Rate again
        </button>
      </div>
    </div>
  );
}
