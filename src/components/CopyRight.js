const CopyRight = ({ title, subTitle, spans }) => {
  return (
    <p className="copyright">
      {title} &copy; {subTitle}
      <span id="date">{new Date().getFullYear()}</span> {spans}
    </p>
  );
};
export default CopyRight;
