'use client';

import { UserButton } from '@clerk/nextjs';

export default function UserButtonComponent() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}