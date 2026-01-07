import Header from "../general/Header";
import SkillCard from "./SkillCard";
import { mySkills } from "./MySkills";

export default function SkillSection() {
  return (
    <section id="skills" className="py-16">
      <Header title="My Skills" />
      <div className="flex flex-wrap justify-center gap-6">
        {mySkills.map((s, index) => (
          <div key={index} data-aos="flip-right" data-aos-delay={index * 100}>
            <SkillCard name={s.name} icon={s.icon} skillLevel={s.skillLevel} />
          </div>
        ))}
      </div>
    </section>
  );
}
