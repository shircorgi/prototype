import "../css/MainContainer.css";

const MainContainer = () => {
  return (
    <div className="MainContainer">
      <div className="MainContainer-wrap">
        <div className="MainContainer-container">
          <div className="MainContainer-title">
            팬들과의 특별한 순간, 이제 한 곳에서
          </div>
          {/* 1 */}
          <div className="MainContainer-floor">
            <div className="MainContainer-box">
              <a href="#!">
                <div className="MainContainer-img"></div>
                <div className="MainContainer-info">
                  <div className="info-tag">생일카페</div>
                  <div className="info-title">조슈아 생일카페 포카 나눔</div>
                  <div className="info-detail">📍 망원동 💬 포카</div>
                </div>
              </a>
            </div>
            {/* 2 */}
            <div className="MainContainer-box">
              <a href="#!">
                <div className="MainContainer-img"></div>
                <div className="MainContainer-info">
                  <div className="info-tag">콘서트</div>
                  <div className="info-title">마비노기 20주년 콘서트 동행</div>
                  <div className="info-detail">📍 서울,광주,부산 👥 동행</div>
                </div>
              </a>
            </div>
          </div>

          <div className="MainContainer-floor">
            {/* 3 */}
            <div className="MainContainer-box">
              <a href="#!">
                <div className="MainContainer-img"></div>
                <div className="MainContainer-info">
                  <div className="info-tag">대행사</div>
                  <div className="info-title">케이크스퀘어 카드 교환</div>
                  <div className="info-detail">📍 양재동 🪄 교환</div>
                </div>
              </a>
            </div>
            {/* 4 */}
            <div className="MainContainer-box">
              <a href="#!">
                <div className="MainContainer-img"></div>
                <div className="MainContainer-info">
                  <div className="info-tag">대절</div>
                  <div className="info-title">엔시티 팬미팅 버스 대절</div>
                  <div className="info-detail">📍 울산,광주 🚌 왕복</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
