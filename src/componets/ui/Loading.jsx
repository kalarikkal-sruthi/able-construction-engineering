// components/TitleLoader.jsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Loading() {
  const pathname = usePathname();

  useEffect(() => {
    let originalTitle = document.title;
    
    // Set loading title
    document.title = "Able Group Developers";
    
    // Restore original title after delay
    const timer = setTimeout(() => {
      document.title = originalTitle;
    }, 500); // Adjust timing as needed

    return () => {
      clearTimeout(timer);
      document.title = originalTitle;
    };
  }, [pathname]);

  return null; // This component doesn't render anything visible
}