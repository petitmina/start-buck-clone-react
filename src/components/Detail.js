import React from "react";
import "../styles/DetailStyles.css";

function Detail() {
  return (
    <div>
      {/* 메인배너 구현시작 */}
      <section className="main-top-banner">
        <div className="banner-container">
          <div className="banner-slogan">
            <img
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_christmas_top_logo.png"
              alt="left-slogan"
            />
          </div>
          <div className="banner-menu-wrap">
            <div className="season-menu menu-1">
              <img
                src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_christmas_1_2_top_drink1.png"
                alt="img1"
              />
            </div>
            <div className="season-menu menu-2">
              <img
                src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_christmas_1_2_top_drink2.png"
                alt="img2"
              />
            </div>
            <div className="season-menu menu-3">
              <img
                src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_christmas_1_2_top_drink3.png"
                alt="img3"
              />
            </div>
            <div className="season-menu menu-4">
              <img
                src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_christmas_1_2_top_drink4.png"
                alt="img4"
              />
            </div>
          </div>
          <div className="banner-btn">
            <a href="/">자세히 보기</a>
          </div>
        </div>
      </section>
      {/* 메인배너 구현 끝 */}
      {/* notice 구현시작 */}
      <section className="notice-line">
        <div className="notice-bg">
          <div className="left-bg"></div>
          <div className="right-bg"></div>
        </div>
        <div className="notice-container">
          <div className="inner-text-left">
            <h1>공지사항</h1>
            <a className="inner-left-text" href="/">
              {" "}
              시스템 개선 및 서비스 점검 안내
            </a>
            <a href="/" className="inner-left-img">
              <img
                src="https://www.starbucks.co.kr/common/img/common/btn_notice_plus.png"
                alt="+"
              />
            </a>
          </div>
          <div className="inner-text-right">
            <a href="/">
              <p className="promotion-text">스타벅스 프로모션</p>
              <span className="promotion-btn">
                <img
                  src="https://image.istarbucks.co.kr/common/img/common/btn_prom_down.png"
                  alt="down-btn"
                />
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* notice 구현끝 */}
      {/* 리워드 구현시작 */}
      <section className="reward-wrap">
        <div className="reward-container">
          <div className="reward-logo">
            <img
              src="https://image.istarbucks.co.kr/common/img/main/rewards-logo.png"
              alt="logo"
            />
          </div>
          <div className="reward-content">
            <div className="info-content">
              <div className="content-text">
                <h1>
                  스타벅스만의 특별한 혜택,<strong>스타벅스 리워드</strong>
                </h1>
                <p>
                  <strong>스타벅스 회원이세요?</strong>로그인을 통해 나만의
                  리워드를 확인해보세요.
                  <br />
                  <strong>스타벅스 회원이 아니세요?</strong>가입을 통해 리워드
                  혜택을 즐기세요.
                </p>
              </div>
              <div className="group-btn">
                <a href="/" className="register">
                  회원가입
                </a>
                <a href="/" className="login">
                  로그인
                </a>
              </div>
            </div>
            <div className="gift-content">
              <div className="gift-text">
                <p>
                  회원 가입 후, 스타벅스 e-Gift Card를 편리하게 등록하세요!
                  <br />
                  카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를
                  하시면 무료 음료쿠폰을 드립니다!
                </p>
              </div>
              <div className="gift-btn">
                <a href="/">e-Gift Card 선물하기</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 리워드 구현 끝 */}
      {/*크리스마스 블렌드 빈 구현시작 */}
      <section className="christmas-blend-bean">
        <div className="christmas-blend-bean-container">
          <div className="christmas-blend-bean-img">
            <img
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_christmas_promotion_img.png"
              alt="bean"
            />
          </div>
          <div className="christmas-blend-bean-text">
            <img
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_christmas_promotion_txt_2.png"
              alt="text"
            />
            <div className="see-detail-btn">
              <a href="/">자세히 보기</a>
            </div>
          </div>
        </div>
      </section>
      {/*크리스마스 블렌드 빈 구현끝 */}
      {/* 리저브 배너 구현시작 */}
      <section className="reserve-bean">
        <div className="reserve-bean-container">
          <div className="reserve-bean-title">
            <img
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/231023_pc_reserve_logo.png"
              alt="text"
            />
          </div>
          <div className="reserve-bean-coffee">
            <img
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/231023_pc_reserve_coffee_bg.png
"
              alt="cup"
            />
          </div>
          <div className="reserve-bean-btn">
            <a href="/">자세히 보기</a>
          </div>
        </div>
      </section>
      {/* 리저브 배너 구현끝*/}

      {/* favorite 배너 구현시작 */}
      <section className="favorite-banner">
        <div className="favorite-banner-container">
          <div className="favorite-banner-text-wrap">
            <div className="favorite-banner-text-01"></div>
            <div className="favorite-banner-text-02"></div>
          </div>
          <div className="favorite-banner-detail-btn">
            <a href="/">자세히 보기</a>
          </div>

          <div className="favorite-banner-img-wrap">
            <div className="favorite-banner-mainImg"></div>
          </div>
        </div>
      </section>
      {/* favorite 배너 구현끝 */}
      {/* 리저브매거진 배너 구현시작 */}
      <section className="reserve-magazine-banner">
        <div className="reserve-magazine-banner-container">
            <div className="reserve-magazine-banner-title">
                <img src="https://image.istarbucks.co.kr/upload/common/img/etc/reserve_text_pc.png" alt="title"/>
            </div>
            <div className="reserve-magazine-banner-main-img">
                <img src="https://image.istarbucks.co.kr/upload/common/img/etc/reserve_visual_pc.png" alt="main"/>
            </div>
            <div className="reserve-magazine-banner-btn">
                <a href="/">자세히 보기</a>
            </div>
        </div>
      </section>
      {/* 리저브매거진 배너 구현끝 */}
    {/* store banner 구현시작 */}
    <section className="store-banner">
        <div className="store-banner-container">
            <div className="store-banner-img01"></div>
            <div className="store-banner-img02"></div>
            <div className="store-banner-text01"></div>
            <div className="store-banner-text02"></div>

            <div className="store-banner-btn">
                <a href="/">매장 찾기</a>
            </div>
            <div className="store-banner-img05"></div>
        </div>
    </section>
    {/* store banner 구현끝 */}

    </div>
  );
}

export default Detail;
