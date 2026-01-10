import "./Cta.css"
const Cta = ({ title, description, buttonText, image }) => {
  return (
    <section className="cta">
      <div className="cta-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>

      <div className="cta-image">
        <img src={image} alt="CTA" />
      </div>
    </section>
  );
};

export default Cta;
