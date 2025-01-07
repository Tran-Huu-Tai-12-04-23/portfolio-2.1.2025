import { m } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react';

import { IProject } from '@/assets/data';

function ProjectDetail({ currentState }: { currentState: IProject }) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [currentState?.id]);
  return (
    <>
      <div className="dark:bg-divider-dark flex flex-wrap items-center justify-center bg-white">
        {currentState?.lstImg.map((image, idx) => (
          <m.div
            // eslint-disable-next-line react/no-array-index-key
            key={`images${idx}`}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            whileTap={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            className="-mr-4 mt-4 flex-shrink-0 overflow-hidden rounded-xl border border-neutral-100 bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="h-20 w-20 flex-shrink-0 rounded-lg object-cover md:h-40 md:w-40"
            />
          </m.div>
        ))}
      </div>

      {currentState?.videoDemo && (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video
          ref={videoRef}
          className="mt-4 h-96 w-full rounded-xl border-[2px] border-black/50"
          controls
        >
          <source src={currentState?.videoDemo} />
        </video>
      )}
    </>
  );
}

export default ProjectDetail;
