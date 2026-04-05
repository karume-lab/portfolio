"use client";

import Autoscroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TECHNOLOGIES } from "@/data";

const TechnologiesMarquee = () => {
  const plugin = useRef(
    Autoscroll({
      speed: 0.5,
    }),
  );

  return (
    <section>
      <Carousel
        plugins={[plugin.current]}
        className="rotate-1 bg-primary-foreground py-4 px-2 mr-2 overflow-hidden select-none"
        opts={{
          loop: true,
          align: "start",
          dragFree: true,
        }}
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}
      >
        <CarouselContent>
          {TECHNOLOGIES.map(({ href, logoPath, label }) => (
            <CarouselItem
              key={href}
              className="basis-1/3 sm:basis-1/4 md:basis-1/6 xl:basis-1/12 flex items-center justify-center"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Image
                      width={44}
                      height={44}
                      alt={`${label} logo`}
                      priority
                      src={logoPath}
                      className="object-contain hover-to-reveal rounded-md"
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>{label}</TooltipContent>
              </Tooltip>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default TechnologiesMarquee;
