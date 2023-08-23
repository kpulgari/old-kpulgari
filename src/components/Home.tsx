import "../styles/Home.css";

export const Home = () => {
  return (
    <div className="homepage">
      <div className="homepage text">
        <h1 className="homepage header">Kaushik Pulgari</h1>
        <span className="homepage blurb">CS + Economics @ UIUC</span>
      </div>
      <div className="blobs">
        <div className="blob one"></div>
        <div className="blob two"></div>
        <div className="blob three"></div>
        <div className="blur"></div>
      </div>
    </div>
  );
};
