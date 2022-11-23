import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';
import NAV_LIST from '../navData';

const Nav = ({ isActive, showNav, isMember, handleNavigate, goToCart }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={`dim ${isActive ? ' active' : ''}`} onClick={showNav} />
      <div className={`nav_box ${isActive ? ' active' : ''}`}>
        <section className="menu_top">
          <h3 className="menu_name">메뉴</h3>
          <ul className="icon_menu">
            <li className="cart" onClick={goToCart}>
              <i className="fa-solid fa-cart-shopping" />
            </li>
            <li className="close" onClick={showNav}>
              <i className="fa-solid fa-xmark" />
            </li>
          </ul>
        </section>
        <section className="menu_list">
          <h4 className="menu_name">쇼핑하기</h4>
          <ul className="catogry_list">
            {NAV_LIST.map(({ id, image, catogory, path }) => (
              <li
                key={id}
                onClick={() => {
                  navigate(path);
                }}
              >
                <img src={image} alt={catogory} />
                <p className="category_name">{catogory}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="menu_link">
          <p className="menu_name">브랜드스토리</p>
          <p className="menu_name">이용가이드</p>
          <p className="menu_name">공지사항</p>
          <p className="menu_name">고객센터</p>
        </section>
        <section className="menu_member">
          {isMember.map((info, index) => (
            <p
              className="menu_name"
              key={index}
              onClick={() => handleNavigate(info)}
            >
              {info}
            </p>
          ))}
        </section>
      </div>
    </>
  );
};

export default Nav;
