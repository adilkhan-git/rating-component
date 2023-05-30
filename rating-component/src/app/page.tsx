"use client";
import Image from "next/image";
import styles from "./page.module.css";
import iconStar from "../../public/icon-star.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SuccessPage from "./success/page";

export default function Home() {
  const [rating, setRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (rating === 0) {
      setErrorMessage("Please select a rating");
      return; // Stop further execution
    }

    localStorage.setItem("rating", rating.toString());
    router.push("/success");
  };

  const handleRatingChange = (value: number): void => {
    setRating(value);
    setErrorMessage(""); // Clear any previous error message
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Image src={iconStar} alt="logo" />
        <div className={styles.text}>
          <h2>How did we do?</h2>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className={styles.ratingButtons}>
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              className={rating === value ? styles.active : ""}
              onClick={() => handleRatingChange(value)}
            >
              {value}
            </button>
          ))}
        </div>
        <button className={styles.submitButton} onClick={handleSubmit}>
          Submit
        </button>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </div>
    </main>
  );
}
