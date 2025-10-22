import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Ramp.css';

function Ramp() {
  const navigate = useNavigate();

  return (
    <div className="ramp-container">
      <header className="ramp-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← 홈으로
        </button>
        <div className="header-content">
          <h1>RAMP</h1>
          <p className="subtitle">휠체어 이동 정보 앱 - 심리적 장벽 해소</p>
          <div className="category-tag">접근성 / 이동권</div>
        </div>
      </header>

      <main className="ramp-main">
        <section className="hero-section">
          <div className="hero-content">
            <h2>모두가 자유롭게 이동할 수 있는 세상</h2>
            <p>RAMP는 휠체어 사용자의 이동권을 보장하고 심리적 장벽을 해소하는 통합 모빌리티 정보 플랫폼입니다.</p>
          </div>
          <div className="hero-image">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="map-interface">
                  <div className="map-placeholder">
                    <div className="route-line"></div>
                    <div className="marker start">출발</div>
                    <div className="marker end">도착</div>
                    <div className="accessible-badge">무장애 경로</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2>주요 기능</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon route">🗺️</div>
              <h3>무장애 경로 찾기</h3>
              <p>실시간으로 업데이트되는 접근 가능한 경로를 제공합니다. 경사로, 엘리베이터, 장애물 정보를 반영한 최적 경로를 안내합니다.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon report">📍</div>
              <h3>실시간 장애물 신고</h3>
              <p>커뮤니티 기반 실시간 장애물 신고 시스템으로 공사 구간, 임시 장애물 등 최신 정보를 공유합니다.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon validate">✓</div>
              <h3>커뮤니티 경로 검증</h3>
              <p>다른 사용자들의 경험과 평가를 통해 경로의 신뢰도를 높입니다. 실제 사용 후기와 팁을 공유합니다.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon safety">🛡️</div>
              <h3>심리적 안전감 제공</h3>
              <p>이동 전 경로 미리보기, 예상 소요 시간, 위험 요소 사전 확인으로 불안감을 해소합니다.</p>
            </div>
          </div>
        </section>

        <section className="demo-section">
          <h2>사용 시나리오</h2>
          <div className="scenario-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>목적지 입력</h3>
                <p>가고 싶은 장소를 검색하고 현재 위치에서 출발</p>
              </div>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>경로 선택</h3>
                <p>무장애 경로, 최단 경로, 안전 경로 중 선택</p>
              </div>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>실시간 안내</h3>
                <p>음성 안내와 함께 장애물 정보를 실시간 제공</p>
              </div>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>경험 공유</h3>
                <p>도착 후 경로 평가와 새로운 정보 업데이트</p>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <div className="info-grid">
            <div className="info-card">
              <h3>제공 정보</h3>
              <ul>
                <li>경사로 위치 및 경사도</li>
                <li>엘리베이터 위치 및 상태</li>
                <li>장애인 화장실 정보</li>
                <li>노면 상태 (포장/비포장)</li>
                <li>휠체어 진입 가능한 출입구</li>
                <li>주차 공간 정보</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>커뮤니티 기능</h3>
              <ul>
                <li>실시간 장애물 신고</li>
                <li>경로 평가 및 리뷰</li>
                <li>접근성 개선 요청</li>
                <li>동행 서비스 연결</li>
                <li>긴급 상황 알림</li>
                <li>베스트 경로 추천</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="impact-section">
          <h2>기대 효과</h2>
          <div className="impact-grid">
            <div className="impact-item">
              <div className="impact-value">95%</div>
              <div className="impact-label">경로 만족도</div>
            </div>
            <div className="impact-item">
              <div className="impact-value">40%</div>
              <div className="impact-label">이동 시간 단축</div>
            </div>
            <div className="impact-item">
              <div className="impact-value">3배</div>
              <div className="impact-label">외출 빈도 증가</div>
            </div>
            <div className="impact-item">
              <div className="impact-value">85%</div>
              <div className="impact-label">불안감 감소</div>
            </div>
          </div>
        </section>

        <section className="vision-section">
          <div className="vision-content">
            <h2>우리의 비전</h2>
            <p>
              RAMP는 단순한 길 안내 앱을 넘어, 휠체어 사용자들이 자유롭게 이동하고
              사회에 참여할 수 있도록 돕는 플랫폼입니다. 물리적 장벽뿐만 아니라
              '혹시 갈 수 있을까?'라는 심리적 장벽을 해소하여, 모든 사람이 평등하게
              도시를 누릴 수 있는 세상을 만들어갑니다.
            </p>
            <div className="vision-highlight">
              "모두가 당연하게 이동할 수 있는 권리를 누리는 사회"
            </div>
          </div>
        </section>
      </main>

      <footer className="ramp-footer">
        <p>서울대학교 정보문화학 프로젝트 | RAMP Team</p>
      </footer>
    </div>
  );
}

export default Ramp;
