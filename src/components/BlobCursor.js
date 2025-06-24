import React, { useEffect, useRef } from 'react';
import './BlobCursor.css';

export default function BlobCursor() {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;

    const moveBlob = (e) => {
      blob.animate(
        {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
        },
        {
          duration: 800,
          fill: 'forwards',
        }
      );
    };

    window.addEventListener('mousemove', moveBlob);

    return () => window.removeEventListener('mousemove', moveBlob);
  }, []);

  return <div className="blob-cursor" ref={blobRef}></div>;
}
