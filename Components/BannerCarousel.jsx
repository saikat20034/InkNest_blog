'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://i.postimg.cc/RC3BR37j/indoor-table-with-plant-vase-lamp-generative-ai.jpg',
  'https://i.postimg.cc/MHDZ8N9v/online-message-blog-chat-communication-envelop-graphic-icon-concept.jpg',
  'https://i.postimg.cc/V6Pz0mTJ/media-marketing-internet-digital-global.jpg',
  'https://i.postimg.cc/Bnd0RJJm/view-3d-computer-device-with-peripheral-devices.jpg',
];

const BannerCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden rounded-lg shadow-xl">
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[current]}
            alt={`Slide ${current + 1}`}
            layout="fill"
            objectFit="cover"
            unoptimized
            className="transition-opacity duration-1000"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Text Overlay */}
      <div className="absolute max-w-md p-5 text-right text-white rounded-lg bottom-10 right-10 bg-black/50 backdrop-blur-sm">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-3xl font-bold"
        >
          Explore Stories That Matter
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-2 text-lg"
        >
          Dive into technology, lifestyle, travel & more.
        </motion.p>
      </div>
    </div>
  );
};

export default BannerCarousel;
