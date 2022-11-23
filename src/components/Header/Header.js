import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from './components/Nav';
import './Header.scss';

const Header = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const isMember = TOKEN ? MEMBER_MENU : NON_MEMBER_MENU;

  const showNav = () => {
    setIsActive(!isActive);
  };

  const goToHome = () => {
    navigate('/');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  const goToCart = () => {
    navigate('/cart');
  };

  const goToList = () => {
    navigate('/list');
  };

  const goToMyPage = () => {
    navigate('/mypage');
  };

  const handleNavigate = name => {
    if (name === '로그인') {
      goToLogin();
    } else if (name === '회원가입') {
      goToSignUp();
    } else if (name === '마이페이지') {
      goToMyPage();
    } else {
      localStorage.removeItem('token');
      goToHome();
    }
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="logo" onClick={goToCart}>
            <img src="/images/logo_w.png" alt="정육쩜 로고" />
          </h1>
          <div className="menu_wrap">
            <ul className="service_menu">
              <li onClick={goToList}>쇼핑하기</li>
              <li>배송안내</li>
              <li>이벤트</li>
            </ul>
            <div className="etc_menu">
              <ul className="contact_menu">
                <li>공지사항</li>
                <li>고객센터</li>
              </ul>
              <ul className="register_menu">
                {isMember.map((info, index) => (
                  <li key={index} onClick={() => handleNavigate(info)}>
                    {info}
                  </li>
                ))}
              </ul>
              <button className="cart_btn" onClick={goToCart}>
                <i className="fa-solid fa-cart-shopping" />
              </button>
              <button className="all_menu_btn" onClick={showNav}>
                <i className="fa-solid fa-bars" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <Nav
        isActive={isActive}
        showNav={showNav}
        isMember={isMember}
        goToCart={goToCart}
        handleNavigate={handleNavigate}
      />
    </>
  );
};

export default Header;

const TOKEN = localStorage.getItem('token');
const MEMBER_MENU = ['로그아웃', '마이페이지'];
const NON_MEMBER_MENU = ['로그인', '회원가입'];
