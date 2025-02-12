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
                iconStyle={{ background: "var(--clr-primary)", boxShadow: "0 0 0 4px var(--clr-primary), inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 4px rgba(0, 0, 0, .05"}}
                icon={null}
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
        {/*  <ol className="relative border-s border-l border-solid border-gray-200 dark:border-gray-700">
          {!!experience.length &&
            experience.map((exp) => (
              <li key={exp.id} className="ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {exp.from} - {exp.to}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                 {exp.designation}
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {exp.company}
                </p>
              </li>
            ))}
        </ol> */}
      </div>
    </section>
  );
};

export default Experience;
