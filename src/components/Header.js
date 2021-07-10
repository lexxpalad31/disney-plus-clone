import styled from "styled-components";

const Header = () => {
  return (
    <HeaderNav>
      <HeaderLogo src="/images/logo.svg" />
      <HeaderMenu>
        <a>
          <img src="images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </HeaderMenu>
      <HeaderUser src="https://www.nicepng.com/png/detail/139-1391592_kikyo-inuyasha-svg.png" />
    </HeaderNav>
  );
};

export default Header;

const HeaderNav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const HeaderLogo = styled.img`
  width: 80px;
  cursor: pointer;
`;

const HeaderMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const HeaderUser = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: fill;
`;
