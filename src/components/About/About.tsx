import { Image, ContactWrapper } from "./AboutElements";
import manSvg from "./../../assets/man-svgrepo-com.svg";

export default function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image src={manSvg} alt="man-svgrepo" />
          <div className="AboutBio">
            Hello! My name is <strong>Aniket Kolte</strong>. I'm an India based
            software engineer with a bachelor's degree in computer science. I am
            deeply passionate about creating efficient and elegant web
            applications that provide meaningful solutions to real-world
            problems. I am also fascinated by blogging and wish to make a career
            out of it someday. Currently, I focus on developing high-quality and
            robust web applications at <strong>AccionLabs</strong>.
            <br />
            <br />I finished my bachelor's in computer science from{" "}
            <strong>Savitribai Phule Pune University</strong> in 2021. During my
            studies, I discovered a passion for web development and have been
            hooked ever since. In addition to programming, I have a keen
            interest in designing interactive UIs. Whether it's creating a
            user-friendly app or designing an eye-catching website, I enjoy the
            creative process of making digital experiences that are both
            functional and aesthetically pleasing.
            <br />
            <br />
            I'm a firm believer in continuous learning, and I'm always on the
            lookout for new challenges and opportunities to expand my skillset.
            I am a strong advocate for open source, and I am always interested
            in working on new projects with new people. Do check out my
            repositories and feel free to reach out on WhatsApp or email if you
            would like to collaborate on any project.
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}
