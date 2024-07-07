import styled from "@emotion/styled";
import footerWave from "../../assets/footer_wave.svg";

export default function Footer() {
  return (
    <FooterSection>
      <div className="Container" />
    </FooterSection>
  );
}

const FooterSection = styled.div`
  background-image: url(${footerWave});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
