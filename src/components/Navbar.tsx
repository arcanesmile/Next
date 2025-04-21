'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SignedIn, SignedOut, SignInButton, useUser, useClerk } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import UserButtonComponent from './UserButton';
import styles from '../styles/navbar.module.scss';

export default function Navbar() {
  const pathname = usePathname();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const [isMounted, setIsMounted] = useState(false);

  
  useEffect(() => {
    setIsMounted(true);
  }, []);


  useEffect(() => {
    if (isMounted && !isSignedIn) {
      const isAuthPage = ['/sign-in', '/sign-up'].includes(pathname);
      if (!isAuthPage) {
        const timer = setTimeout(() => {
          openSignIn();
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [isMounted, isSignedIn, openSignIn, pathname]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>BEM⚡</div>
      
      <ul>
        <li>
          <Link href="/" className={pathname === '/' ? styles.active : ''}>
            Home
          </Link>
        </li>
        
        <li>
          <Link href="/about" className={pathname === '/about' ? styles.active : ''}>
            About
          </Link>
        </li>
        
        <li>
          <Link href="/contact" className={pathname === '/contact' ? styles.active : ''}>
            Contact
          </Link>
        </li>
        
        <li>
          <Link href="/blog" className={pathname === '/blog' ? styles.active : ''}>
            Blog
          </Link>
        </li>
        
        <li>
          <Link href="/news" className={pathname === '/news' ? styles.active : ''}>
            News
          </Link>
        </li>
      </ul>

      <div className={styles.signin}>
        <SignedIn>
          <UserButtonComponent />
        </SignedIn>
        <SignedOut>
          {isMounted && (
            <SignInButton mode="modal">
              <button className={styles.signIn_btn}>
                Sign In
              </button>
            </SignInButton>
          )}
        </SignedOut>
      </div>
    </nav>
  );
}