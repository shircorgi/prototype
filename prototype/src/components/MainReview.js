import "../css/MainReview.css";

const MainReview = () => {
  return (
    <div className="MainReview">
      <h1>팬들의 생생한 경험을 확인하세요!</h1>
      <div className="MainReview-wrap">
        <div className="MainReview-box">
          <ul className="MainReview-ul">
            <li className="MainReview-li">
              <a href="#!">
                <div className="MainReview-img"></div>
              </a>
            </li>
            <li className="MainReview-li">
              <a href="#!">
                <div className="MainReview-img"></div>
              </a>
            </li>
            <li className="MainReview-li">
              <a href="#!">
                <div className="MainReview-img"></div>
              </a>
            </li>
            <li className="MainReview-li">
              <a href="#!">
                <div className="MainReview-img"></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainReview;
