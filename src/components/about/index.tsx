import { about } from "./../../utils/portfolio";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import "./About.css";

const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <div className="about center">
      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}
      {!!description.length && (
        <div className="about__desc">
          {description.map(({ id, desc }) => (
            <p className="my-2" key={id}>{desc}</p>
          ))}
        </div>
      )}

      <div className="about__contact center">
        {resume && (
          <a href={resume}>
            <span className="btn btn--outline">
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <GitHub />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedIn />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
