"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { GridContainer } from "../Grid";
import gsap from "gsap";

import IconFile from "/public/icon-file.svg";
import IconHand01 from "/public/icon-file.svg";
import IconHand02 from "/public/icon-file.svg";
import IconMockup from "/public/mockup.svg";

export function SectionHero() {
  const textHeroRef = useRef(null);
  const mockupHeroLeftRef = useRef(null);
  const mockupHeroRightRef = useRef(null);

  useEffect(() => {
    const textHero = textHeroRef.current;
    const mLeft = mockupHeroLeftRef.current;
    const mRight = mockupHeroRightRef.current;

    gsap.fromTo(
      textHero,
      {
        opacity: 0,
        y: 20,
      },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }
    );

    gsap.fromTo(
      mLeft,
      {
        rotate: 0,
      },
      { rotate: -10, duration: 1 }
    );

    gsap.fromTo(
      mRight,
      {
        rotate: 0,
      },
      { rotate: 10, duration: 1 }
    );
  }, []);

  return (
    <section className="relative w-full h-section-hero bg-hero bg-no-repeat bg-top bg-green-primary border-t border-t-green-border pt-16 overflow-hidden">
      <GridContainer className="flex flex-col items-center">
        <div
          className="w-full max-w-text-hero text-center opacity-0"
          ref={textHeroRef}
        >
          <h3 className="text-xl font-medium text-green-actived mb-4">
            Novo curso focado em instagram
          </h3>
          <h1 className="text-white text-4xl/normal md:text-5xl/normal lg:text-7xl/normal font-semibold mb-2">
            Destrave as suas habilidades
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
            <button className="flex items-center gap-2">
              <Image src={IconFile} alt="Icon File" />
              <span className="text-white font-medium">
                Assinar lista de espera
              </span>
            </button>
            <button className="py-4 px-5 bg-green-btn hover:bg-green-btn-hover rounded-full text-green-primary font-bold transition-colors">
              Começar agora
            </button>
          </div>
        </div>
        <div className="relative w-full max-w-area-icons h-28 mt-4">
          <Image
            src={IconHand01}
            alt="Icon Hand 01"
            className="absolute bottom-0 left-0"
          />
          <Image
            src={IconHand02}
            alt="Icon Hand 02"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="absolute -bottom-44 w-full max-w-area-mockups flex justify-between">
          <Image
            src={IconMockup}
            alt="Mockup"
            className="relative top-[1.1rem] left-[3.3rem] hidden md:block"
            ref={mockupHeroLeftRef}
          />
          <Image
            src={IconMockup}
            alt="Mockup"
            className="relative top-[1.1rem] right-[3.3rem] hidden md:block"
            ref={mockupHeroRightRef}
          />
        </div>
      </GridContainer>
    </section>
  );
}
