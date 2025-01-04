/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { AnimatePresence, m } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export interface Root {
  login: string;
  id: number;
  node_id: string;
  url: string;
  repos_url: string;
  events_url: string;
  hooks_url: string;
  issues_url: string;
  members_url: string;
  public_members_url: string;
  avatar_url: string;
  description: string;
}
export function AnimatedTestimonials({
  testimonials,
  autoplay = false,
}: {
  testimonials: Root[];
  autoplay?: boolean;
}) {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;
  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <m.div
                  key={testimonial.id}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial?.avatar_url}
                    alt={testimonial?.description || 'logo'}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </m.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <m.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
            }}
          >
            <h3 className="text-2xl font-bold capitalize text-black dark:text-white">
              {testimonials[active]?.login}
            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              REPO: {testimonials[active]?.repos_url}
            </p>
            <m.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {testimonials[active]?.description &&
                testimonials[active]?.description
                  .split(' ')
                  .map((word, index) => (
                    <m.span
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      initial={{
                        filter: 'blur(10px)',
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: 'blur(0px)',
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: 'easeInOut',
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </m.span>
                  ))}
            </m.p>
          </m.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              type="button"
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
