import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  ScrollDown,
  ScrollLink,
  Image,
} from "./HeroElements";
import { useState } from "react";
import manSvg from "./../../assets/man-svgrepo-com.svg";
import scrollDownImg from "../../assets/scroll-down.svg";
import Header from "../Header/Header";
import Dropdown from "../Dropdown/Dropdown";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn">
              <TypeAnimation
                cursor={false}
                sequence={["Hi, I'm Aniket.", () => setShowSubtitle(true)]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle && (
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    "A full-stack Java developer.",
                    1000,
                    "A software developer.",
                    1000,
                    "A problem solver.",
                    1000,
                    "An innovative thinker.",
                    1000,
                    "A....",
                    1000,
                    "A.... cool guy?",
                    1000,
                    "Ok...",
                    1000,
                    "Ok...  I'm running out of ideas...",
                    1000,
                    "Uhh...",
                    1000,
                    "Uhh... you can scroll down to see my projects now...",
                    300,
                    () => setShowScrollDown(true),
                    1000,
                    "Seriously, my projects are really cool, go check them out!",
                    1000,
                    "You're uh...",
                    1000,
                    "You're uh... still here?",
                    1000,
                    "Ok, this has been fun, but I'm gonna restart the loop now...",
                    1000,
                    "See ya! :)",
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              )}
            </ScrollAnimation>
          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image src={manSvg} />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown && (
          <ScrollAnimation animateIn="flipInX" offset={0}>
            <ScrollDown to="projects" id="scrollDown">
              <ScrollLink>
                Scroll down
                <img src={scrollDownImg} alt="scroll-down" />
              </ScrollLink>
            </ScrollDown>
          </ScrollAnimation>
        )}
      </HeroContainer>
    </main>
  );
}
