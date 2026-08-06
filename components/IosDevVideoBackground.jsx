'use client';

import { useState, useEffect, useRef } from 'react';

export default function IosDevVideoBackground() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef([]);

  const videos = [
    '/videos/bg_video_1.mp4',
    '/videos/bg_video_2.mp4',
    '/videos/bg_video_3.mp4'
  ];

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    // Pause all videos, play current one
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === currentVideo) {
        video.currentTime = 0;
        video.play().catch(() => {
          // If video fails, skip to next
          handleVideoEnd();
        });
      } else {
        video.pause();
      }
    });
  }, [currentVideo]);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0
      }}
    >
      {videos.map((src, idx) => (
        <video
          key={idx}
          ref={(el) => (videoRefs.current[idx] = el)}
          muted
          playsInline
          poster="/images/hero_banner.jpg"
          onEnded={handleVideoEnd}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: currentVideo === idx ? 0.6 : 0,
            transition: 'opacity 1.2s ease-in-out',
            zIndex: 1
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}

      {/* Subtle gradient overlay for text readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, rgba(11, 15, 25, 0.55) 0%, rgba(11, 15, 25, 0.3) 50%, rgba(11, 15, 25, 0.6) 100%)',
          zIndex: 2
        }}
      />
    </div>
  );
}
