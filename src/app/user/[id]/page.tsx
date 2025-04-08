'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import styles from './profile.module.scss';

export default function UserProfile() {
  const { data: session, status } = useSession();
  const params = useParams();
  const router = useRouter();
  const userId = (params as { id: string }).id;

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [avatar, setAvatar] = useState('/default-avatar.jpg');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (session?.user) {
      setUserData({
        name: session.user.name || 'Bem Benjamin',
        email: session.user.email || 'arcanesmile@gmail.com',
        phone: '+234 9124 115 768',
        address: 'Makurdi',
      });
      if (session.user.image) {
        setAvatar(session.user.image);
      }
    }
  }, [session]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setAvatar(fileUrl);
    }
  };

  const handleSave = async () => {
    try {
      console.log('Saving user data:', userData);
      setIsEditing(false);
      setError(null);
    } catch (err) {
      setError('Failed to save profile. Please try again.');
    }
  };

  if (status === 'loading') return <p>Loading...</p>;
  if (!session) return null;

  return (
    <div className={styles.profilePage}>
      <h1>User Profile - {userId}</h1>

      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.profileContent}>
        <div className={styles.avatarContainer}>
          <Image
            src={avatar}
            alt="User Avatar"
            width={120}
            height={120}
            className={styles.avatar}
          />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className={styles.uploadInput}
            />
          )}
        </div>

        <div className={styles.userInfo}>
          {isEditing ? (
            <>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  value={userData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                />
              </div>
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
       <div className={styles.btn}>
      <button
        className={styles.editBtn}
        onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
      >
        {isEditing ? 'Save' : 'Edit Profile'}
      </button>
       <button
        onClick={() => signOut({ callbackUrl: '/auth/signin' })}
        className={styles.signOutButton}
      >
        Sign Out
      </button>
      </div>
    </div>
  );
}