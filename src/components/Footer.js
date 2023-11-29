import React from "react";
import "../styles/FooterStyles.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <nav className="footer-menus">
          <div className="footer-menus-inner">
            <ul className="footer-menu-list">
              <li className="list-detail">
                <a href="/">COMPANY</a>
                <ul className="list-description">
                  <li>
                    <a href="/">한눈에 보기</a>
                  </li>
                  <li>
                    <a href="/">스타벅스 사명</a>
                  </li>
                  <li>
                    <a href="/">스타벅스 소개</a>
                  </li>
                  <li>
                    <a href="/">컴플라이언스</a>
                  </li>
                  <li>
                    <a href="/">국내 뉴스룸</a>
                  </li>
                  <li>
                    <a href="/">세계의 스타벅스</a>
                  </li>
                  <li>
                    <a href="/">글로벌 뉴스룸</a>
                  </li>
                </ul>
              </li>
              <li className="list-detail">
                <a href="/">CORPORATE SALES</a>
                <ul className="list-description">
                  <li>
                    <a href="/">단체 및 기업 구매 안내</a>
                  </li>
                  <li>
                    <a href="/">단체 주문 배달 안내</a>
                  </li>
                </ul>
              </li>
              <li className="list-detail">
                <a href="/">PARTNERSHIP </a>
                <ul className="list-description">
                  <li>
                    <a href="/">신규 입점 제의</a>
                  </li>
                  <li>
                    <a href="/">협력 고객사 등록신청</a>
                  </li>
                  <li>
                    <a href="/">중개업체 확인</a>
                  </li>
                </ul>
              </li>
              <li className="list-detail">
                <a href="/">ONLINE COMMUNITY</a>
                <ul className="list-description">
                  <li>
                    <a href="/">페이스북</a>
                  </li>
                  <li>
                    <a href="/">트위터</a>
                  </li>
                  <li>
                    <a href="/">유튜브</a>
                  </li>
                  <li>
                    <a href="/">인스타그램</a>
                  </li>
                </ul>
              </li>
              <li className="list-detail">
                <a href="/">RECRUIT</a>
                <ul className="list-description">
                  <li>
                    <a href="/">채용 소개</a>
                  </li>
                  <li>
                    <a href="/">채용 지원하기</a>
                  </li>
                </ul>
              </li>
              <li className="list-detail"></li>
            </ul>
          </div>
        </nav>

        <div className="footer-award-wrap">
          <ul className="award-img">
            <li>
              <a href="/">
                <img
                  src="https://image.istarbucks.co.kr/img/event/2022/footer_award_2211_01.jpg"
                  alt="award"
                />
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="https://image.istarbucks.co.kr/img/event/2022/footer_award_2211_02.jpg"
                  alt="award"
                />
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="https://image.istarbucks.co.kr/img/event/2022/footer_award_2211_03.jpg"
                  alt="award"
                />
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="https://image.istarbucks.co.kr/img/event/2022/footer_award_2211_04.jpg"
                  alt="award"
                />
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="https://image.istarbucks.co.kr/img/event/2022/footer_award_2211_05.jpg"
                  alt="award"
                />
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="https://image.istarbucks.co.kr/img/event/2022/footer_award_2211_06.jpg"
                  alt="award"
                />
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src="https://image.istarbucks.co.kr/img/event/2022/footer_award_2211_07.jpg"
                  alt="award"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
            <div className="copyright-container">
                <nav className="copyright-menu-bar">
                <ul >
                    <li><a href="/">개인정보처리방침</a></li>
                    <li><a href="/">영상정보처리기기</a></li>
                    <li><a href="/">운영관리 방침</a></li>
                    <li><a href="/">홈페이지 이용약관</a></li>
                    <li><a href="/">위치정보 이용약관</a></li>
                    <li><a href="/">스타벅스 카드 이용약관</a></li>
                    <li><a href="/">신세계 유니버스 클럽 이용약관</a></li>
                    <li><a href="/">비회원 이용약관</a></li>
                </ul>
                </nav>
                <div className="copyright-btn-group">
                    <a href="/">찾아오시는 길</a>
                    <a href="/">신규입점제의</a>
                    <a href="/">사이트 맵</a>
                </div>
                <div className="copyright-menu-text">
                    <ul>
                        <li> 사업자등록번호 : 201-81-21515</li>
                        <li>주식회사 에스씨케이컴퍼니 대표이사 : 손정현</li>
                        <li>TEL : 1522-3232</li>
                        <li>개인정보 책임자 : 이찬우</li>
                    </ul>
                    <span>ⓒ 2023 Starbucks Coffee Company. All Rights Reserved.</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
