import { Element, Link as LinkScroll } from "react-scroll";
import { Button } from "../components/Button";

export const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Your meetings, distilled by AI
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Smart Summaries
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              Xora records, transcribes, and summarizes your meetings on Zoom,
              Google Meet, and Microsoft Teams—so your team can focus on what
              matters, not on taking notes.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="./images/zap.svg">See how it works</Button>
            </LinkScroll>
          </div>
          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none !hero-img_res">
            <img
              alt="hero"
              src="./images/hero.png"
              className="size-1230 max-lg:h-auto"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};
