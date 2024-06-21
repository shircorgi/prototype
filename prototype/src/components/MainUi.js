import "../css/MainUi.css";

const MainUi = () => {
  return (
    <div className="MainUi">
      <div className="MainUi-header">
        <div className="MainUi-icon-wrap">
          <div className="MainUi-icon">
            <a href="#!">🎁</a>
          </div>
          <span>생일카페</span>
        </div>

        <div className="MainUi-icon-wrap">
          <div className="MainUi-icon">
            <a href="#!">🎈</a>
          </div>
          <span>펜페스티벌</span>
        </div>

        <div className="MainUi-icon-wrap">
          <div className="MainUi-icon">
            <a href="#!">🛍️</a>
          </div>
          <span>대형행사</span>
        </div>
      </div>
    </div>
  );
};

export default MainUi;
