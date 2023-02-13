import Title from "./Title";
import { services } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="service" />
      <div className="section-center services-center">
        {services.map((newText) => {
          return (
            <article className="service" key={newText.id}>
              <span className="service-icon">
                <i className={newText.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{newText.title}</h4>
                <p className="service-text">{newText.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
