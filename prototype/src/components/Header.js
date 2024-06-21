import "../css/Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-header">
        <div className="Header-input">
          <input type="text" placeholder="검색어를 입력하세요"></input>
        </div>
        <div className="Header-button">
          <button>만들기</button>
        </div>
        <div className="Header-menu">
          <a href="#!">로그인</a>
        </div>
        <div className="Header-menu">
          <a href="#!">회원가입</a>
        </div>
        <div className="Header-menu">
          <a href="#!">판매자신청</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
