import Header from "../general/Header";
import ResumeCard from "./ResumeCard";
import { myEducationExperience } from "./MyEducationExperience";
import { myWorkExperience } from "./MyWorkExperience";

export default function ResumeSection() {
  return (
    <section id="resume" className="my-12">
      <div
        className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2
        gap-10"
      >
        {/* Education */}
        <div data-aos="zoom-out">
          <Header title="My Education" as="h2" />
          <div className="space-y-6">
            {myEducationExperience.map((e, index) => (
              <ResumeCard
                key={index}
                icon={e.icon}
                role={e.role}
                description={e.description}
                subDescription={e.subDescription}
                date={e.date}
              />
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <Header title="My Work Experience" as="h2" />
          <div className="space-y-6">
            {myWorkExperience.map((e, index) => (
              <ResumeCard
                key={index}
                icon={e.icon}
                role={e.role}
                description={e.description}
                subDescription={e.subDescription}
                date={e.date}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
