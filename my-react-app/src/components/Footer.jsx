const date = new Date().getFullYear();
const Footer = () => {
  return (
    <section className="section footer">
      <p className="copyright">
        &copy; {date} <strong>WonderLand</strong> - ERB Homework by #22 Kenny
      </p>
    </section>
  );
};

export default Footer;
