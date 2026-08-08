'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';

export default function SmartImage({ src, alt, fill, width, height, style = {}, className = "", priority = false, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: fill ? '100%' : width,
        height: fill ? '100%' : height,
        overflow: 'hidden',
        backgroundColor: '#0F172A'
      }}
    >
      {/* Activity Indicator Spinner & Skeleton Placeholder */}
      {!isLoaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0F172A',
            backgroundImage: 'linear-gradient(110deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
            backgroundSize: '200% 100%',
            animation: 'laserStream 3s linear infinite'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 0.85rem',
              borderRadius: '30px',
              backgroundColor: 'rgba(15, 23, 42, 0.75)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              color: '#38BDF8',
              fontSize: '0.75rem',
              fontWeight: '700'
            }}
          >
            <Loader2 size={14} className="spin-animation" style={{ animation: 'spin 1s linear infinite' }} />
            <span>Loading image...</span>
          </div>
        </div>
      )}

      {/* Actual Image Tag */}
      <Image
        src={src}
        alt={alt || 'Zeenrah Asset'}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
        style={{
          ...style,
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'scale(1)' : 'scale(1.05)',
          transition: 'opacity 0.5s ease-out, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        className={className}
        {...props}
      />
    </div>
  );
}
