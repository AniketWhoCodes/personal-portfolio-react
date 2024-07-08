import { stackList } from "../../data/Data";
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./SkillsElements";

export default function Skills() {
  return (
    <ContactWrapper id="skills">
      <div className="Container">
        <div className="SectionTitle">Skills</div>
        <div className="BigCard">
          <div className="AboutBio">
            <Technologies>
              {stackList.map((stack, index) => (
                <Tech key={index} className="tech">
                  <TechImg src={stack.img} alt={stack.name} />
                  <TechName>{stack.name}</TechName>
                </Tech>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}
