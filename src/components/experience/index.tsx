"use client";

import { experience } from "@/utils/portfolio";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";


const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <h2 className="section__title">EXPERIENCE</h2>
      <div className="flex justify-center items-center">
        <VerticalTimeline className="before:!bg-[var(--clr-primary)]">
          {!!experience.length &&
            experience.map((exp) => (
              <VerticalTimelineElement
                key={exp.id}
                className="vertical-timeline-element--work transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent"
                contentStyle={{
                  background: "inherit",
                  boxShadow: "var(--shadow)",
                  color: "var(--clr-primary)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  var(--clr-primary)",
                }}
                date={`${exp.from} - ${exp.to}`}
                iconStyle={{
                  background: "var(--clr-primary)",
                  boxShadow:
                    "0 0 0 4px var(--clr-primary), inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 4px rgba(0, 0, 0, .05",
                }}
                icon={
                  <div className="flex justify-center items-center h-full w-full bg-transparent">
                    <img
                      className="h-3/4 w-3/4 object-contain rounded-full"
                      src={exp.logo}
                    />
                  </div>
                }
              >
                <h3 className="vertical-timeline-element-title">
                  {exp.designation}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {exp.company}
                </h5>
              </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
