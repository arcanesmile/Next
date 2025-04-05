"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import styles from "./profile.module.scss";

export default function UserProfile() {
  const params = useParams();
  const userId = params.id; 

  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Bem Benjamin",
    email: "arcanesmile@gmail.com",
    phone: "+234 9124 115 768",
    address: "Makurdi",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <h1 className={styles.profileTitle}>User Profile - {userId}</h1>

        <div className={styles.profileContent}>
          <div className={styles.avatarContainer}>
            <Image
              src="/default-avatar.jpg"
              alt="User Avatar"
              width={120}
              height={120}
              className={styles.avatar}
            />
            <button className={styles.uploadBtn}>📷</button>
          </div>

          <div className={styles.userInfo}>
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                <input
                  type="text"
                  name="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
                <input
                  type="text"
                  name="address"
                  value={userData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                />
              </>
            ) : (
              <>
                <p><strong>Name:</strong> {userData.name}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Phone:</strong> {userData.phone}</p>
                <p><strong>Address:</strong> {userData.address}</p>
              </>
            )}
          </div>
        </div>

        <button className={styles.editBtn} onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Save" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
}