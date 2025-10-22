import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Ramp.css';

function Ramp() {
  const navigate = useNavigate();

  return (
    <div className="ramp-container">
      {/* Top Navigation Bar */}
      <nav className="ramp-nav">
        <button className="nav-back" onClick={() => navigate('/')}>
          <span className="nav-arrow">←</span>
          <span>홈</span>
        </button>
        <div className="nav-title">RAMP</div>
        <div className="nav-spacer"></div>
      </nav>

      {/* Route Header Section */}
      <section className="route-header">
        <div className="route-header-content">
          <div className="route-badge">접근성 / 이동권</div>
          <h1 className="route-title">RAMP</h1>
          <p className="route-subtitle">Reducing psychological barriers to Accessible Mobility Platform</p>
          <p className="route-tagline">혹시 갈 수 있을까? → 당연히 갈 수 있어!</p>
        </div>
      </section>

      {/* Map Preview Section */}
      <section className="map-preview">
        <div className="map-container">
          <div className="map-overlay">
            <div className="route-visualization">
              <div className="route-point start">
                <div className="point-marker"></div>
                <div className="point-label">출발</div>
              </div>
              <div className="route-path">
                <div className="path-segment"></div>
                <div className="path-segment"></div>
                <div className="path-segment"></div>
              </div>
              <div className="route-point end">
                <div className="point-marker"></div>
                <div className="point-label">도착</div>
              </div>
              <div className="route-info-pill">무장애 경로</div>
            </div>
          </div>
        </div>
        <div className="map-description">
          <h2>모두가 자유롭게 이동할 수 있는 세상</h2>
          <p>휠체어 사용자 1,400만 명의 교통약자가 겪는 심리적 장벽을 해소합니다. 2023년 장애인 편의시설 설치율은 89.2%이지만, 실제로 이용 가능한지는 현장에 가봐야 알 수 있습니다.</p>
          <p className="problem-highlight">RAMP는 실시간 정보를 검증하여 "혹시 갈 수 있을까?"라는 불안감을 "당연히 갈 수 있어!"로 바꿉니다.</p>
        </div>
      </section>

      {/* Core Value Proposition */}
      <section className="value-prop">
        <div className="section-header">
          <h2>해결하는 핵심 문제</h2>
        </div>
        <div className="problem-cards">
          <div className="problem-card">
            <div className="problem-number">89.2%</div>
            <div className="problem-text">
              <h3>설치율의 함정</h3>
              <p>2023년 기준 장애인 편의시설 설치율은 89.2%이지만, 실제로 이용 가능한지는 현장에 가봐야 알 수 있습니다.</p>
            </div>
          </div>
          <div className="problem-card">
            <div className="problem-number">31%</div>
            <div className="problem-text">
              <h3>불충분한 정보</h3>
              <p>2022년 기준 경찰서의 편의시설 부적절 및 미설치율은 31%. 제공되는 정보를 믿을 수 없습니다.</p>
            </div>
          </div>
          <div className="problem-card highlight">
            <div className="problem-icon">❓</div>
            <div className="problem-text">
              <h3>심리적 장벽</h3>
              <p>"혹시 갈 수 있을까?"라는 불안감이 외출을 막습니다. 정보를 찾아도 현장과 다를 수 있다는 의심이 남습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Route Options Grid */}
      <section className="route-options">
        <div className="section-header">
          <h2>핵심 기능 요약</h2>
          <p className="section-subtitle">Must have → Should have → Nice to have</p>
        </div>
        <div className="options-grid">
          <div className="option-card must-have">
            <div className="card-priority">Must Have</div>
            <div className="card-header">
              <div className="card-icon">🗺️</div>
              <h3>일기 형식으로 다양한 장소 방문 기록</h3>
            </div>
            <div className="card-body">
              <ul>
                <li>가고 싶은 장소를 검색하고 저장</li>
                <li>방문 후 장소별 상세 기록 (사진, 접근성 정보, 팁)</li>
                <li>개인 일기장처럼 시간순 정렬</li>
              </ul>
            </div>
          </div>

          <div className="option-card must-have">
            <div className="card-priority">Must Have</div>
            <div className="card-header">
              <div className="card-icon">👥</div>
              <h3>일기 내용과 장소를 다른 이용자와 공유</h3>
            </div>
            <div className="card-body">
              <ul>
                <li>커뮤니티 피드에 일기 공유</li>
                <li>다른 사용자의 경험 확인</li>
                <li>장소별 접근성 정보 집단 검증</li>
              </ul>
            </div>
          </div>

          <div className="option-card should-have">
            <div className="card-priority">Should Have</div>
            <div className="card-header">
              <div className="card-icon">📝</div>
              <h3>다른 이용자의 일기에 피드백 남기기</h3>
            </div>
            <div className="card-body">
              <ul>
                <li>댓글과 반응으로 경험 공유</li>
                <li>추가 팁과 최신 정보 업데이트</li>
                <li>경로 추천과 대안 제시</li>
              </ul>
            </div>
          </div>

          <div className="option-card should-have">
            <div className="card-priority">Should Have</div>
            <div className="card-header">
              <div className="card-icon">🎯</div>
              <h3>정보 필요 부분 퀘스트 제공</h3>
            </div>
            <div className="card-body">
              <ul>
                <li>특정 장소나 시설 정보 요청</li>
                <li>키테고리별 퀘스트 (경사로, 엘리베이터 등)</li>
                <li>미션 완료 시 보상 시스템</li>
              </ul>
            </div>
          </div>

          <div className="option-card should-have">
            <div className="card-priority">Should Have</div>
            <div className="card-header">
              <div className="card-icon">🚨</div>
              <h3>개인 프로필에서 아바타 생성</h3>
            </div>
            <div className="card-body">
              <ul>
                <li>수동휠체어, 전동휠체어 등 이동수단 선택</li>
                <li>보조기구 종류 설정 (접근성 레벨)</li>
                <li>맞춤형 경로 및 정보 제공</li>
              </ul>
            </div>
          </div>

          <div className="option-card nice-to-have">
            <div className="card-priority">Nice to Have</div>
            <div className="card-header">
              <div className="card-icon">🏆</div>
              <h3>장소별 페이지 확인</h3>
            </div>
            <div className="card-body">
              <ul>
                <li>저장해놓은 장소들을 바탕으로 경로 추천</li>
                <li>행동 종류와 횟수에 따라 아바타에 반영</li>
                <li>마일리지 적립 및 보상</li>
              </ul>
            </div>
          </div>

          <div className="option-card nice-to-have">
            <div className="card-priority">Nice to Have</div>
            <div className="card-header">
              <div className="card-icon">🎨</div>
              <h3>지하철 엘리베이터 고장 공유</h3>
            </div>
            <div className="card-body">
              <ul>
                <li>실시간 시설 이용 불가 정보 공유</li>
                <li>자유게시판 기능</li>
                <li>긴급 우회 경로 제안</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Persona - Soyoon */}
      <section className="user-persona">
        <div className="section-header">
          <h2>사용자 시나리오 - 치소윤님의 이야기</h2>
        </div>
        <div className="persona-content">
          <div className="persona-profile">
            <div className="persona-image-placeholder">
              <div className="profile-icon">👩‍🦽</div>
            </div>
            <div className="persona-details">
              <h3>치소윤 / 22세 / 여성</h3>
              <p className="persona-subtitle">대학생, 정치외교학과 전공, 서울 서대문구 거주 (대학 기숙사)</p>
              <div className="persona-frustration">
                <h4>핵심 불편사항 (Frustration)</h4>
                <ul>
                  <li>새로운 곳에 갈 때마다 매번 너무 많은 시간을 쏟아 정보를 찾아야 합니다.</li>
                  <li><strong>정보를 찾다 지쳐</strong> 결국 알고 있는 익숙한 식당으로 가곤 합니다.</li>
                  <li>공방, 불판집, PT 등 다양한 활동을 하고 싶은데 운영자가 휠체어를 탄 자신을 환영할지 알 수 없어 포기하곤 합니다.</li>
                </ul>
              </div>
              <div className="persona-goals">
                <h4>목표 (Goals)</h4>
                <ul>
                  <li>휠체어 진입 가능 시설 및 경로를 찾는 에너지 줄이기</li>
                  <li>비슷한 지역에 사는 휠체어 이용자의 경험을 공유 받기</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="journey-steps">
        <div className="section-header">
          <h2>핵심 사용자 여정 (Core User Journey)</h2>
        </div>
        <div className="steps-timeline">
          <div className="timeline-step">
            <div className="step-marker">1</div>
            <div className="step-content">
              <h3>목표 설정</h3>
              <p>학과 친구들과의 약속 장소인 강남에서 방문할 식당과 카페를 찾기로 함</p>
            </div>
          </div>
          <div className="timeline-connector"></div>
          <div className="timeline-step">
            <div className="step-marker">2</div>
            <div className="step-content">
              <h3>일반 검색</h3>
              <p>강남 지도 화면에서 자신과 동일한 보조기구를 사용하고, 유사한 접근성 레벨을 가진 사용자의 프로필을 찾음</p>
            </div>
          </div>
          <div className="timeline-connector"></div>
          <div className="timeline-step">
            <div className="step-marker">3</div>
            <div className="step-content">
              <h3>상세 검색 및 검증</h3>
              <p>조건에 맞는 사용자의 프로필에 있는 일기를 보고, 지점별 이용 편의성을 파악함. 글과 사진을 통해 경사로 및 엘리베이터 설치 여부, 화장실, 직원 태도 등에 대한 생생한 후기를 꼼꼼히 확인함</p>
            </div>
          </div>
          <div className="timeline-connector"></div>
          <div className="timeline-step highlight">
            <div className="step-marker">4</div>
            <div className="step-content">
              <h3>최종 결정</h3>
              <p>접근이 가장 용이해보이는 가게를 최종 방문지로 확정한 후 친구들에게 공유함</p>
            </div>
          </div>
        </div>
      </section>

      {/* Realistic Korean Location Examples */}
      <section className="location-examples">
        <div className="section-header">
          <h2>실제 사용 예시 - 서울 주요 지역</h2>
        </div>
        <div className="location-grid">
          <div className="location-card verified">
            <div className="location-header">
              <h3>홍대입구역 → 연남동 카페거리</h3>
              <span className="verification-badge">검증됨 ✓</span>
            </div>
            <div className="route-details">
              <div className="detail-item">
                <span className="label">이동수단:</span>
                <span className="value">2호선 → 도보 8분</span>
              </div>
              <div className="detail-item">
                <span className="label">접근성:</span>
                <span className="value accessibility-good">양호</span>
              </div>
              <div className="detail-item">
                <span className="label">엘리베이터:</span>
                <span className="value">홍대입구역 2번 출구 (가동중)</span>
              </div>
              <div className="detail-item">
                <span className="label">경사로:</span>
                <span className="value">연남동 주요 카페 90% 설치</span>
              </div>
              <div className="user-tip">
                <strong>사용자 팁:</strong> "동교로 쪽이 경사가 완만해요. 커피숲 카페는 입구가 평평하고 화장실도 넓어서 추천합니다!" - 김민서님
              </div>
            </div>
          </div>

          <div className="location-card warning">
            <div className="location-header">
              <h3>강남역 → 코엑스몰</h3>
              <span className="verification-badge caution">주의 ⚠️</span>
            </div>
            <div className="route-details">
              <div className="detail-item">
                <span className="label">이동수단:</span>
                <span className="value">2호선 → 도보 15분 또는 셔틀버스</span>
              </div>
              <div className="detail-item">
                <span className="label">접근성:</span>
                <span className="value accessibility-caution">보통 (우회 필요)</span>
              </div>
              <div className="detail-item">
                <span className="label">엘리베이터:</span>
                <span className="value">강남역 10번 출구 엘리베이터 이용</span>
              </div>
              <div className="detail-item">
                <span className="label">최근 장애물:</span>
                <span className="value alert">영동대로 보도 공사 (2024.10.15~10.30)</span>
              </div>
              <div className="user-tip">
                <strong>사용자 팁:</strong> "지하보도는 좁고 복잡해서 비추. 셔틀버스가 훨씬 편해요!" - 박희완님
              </div>
            </div>
          </div>

          <div className="location-card verified">
            <div className="location-header">
              <h3>이태원역 → 경리단길</h3>
              <span className="verification-badge">검증됨 ✓</span>
            </div>
            <div className="route-details">
              <div className="detail-item">
                <span className="label">이동수단:</span>
                <span className="value">6호선 → 도보 5분</span>
              </div>
              <div className="detail-item">
                <span className="label">접근성:</span>
                <span className="value accessibility-excellent">우수</span>
              </div>
              <div className="detail-item">
                <span className="label">엘리베이터:</span>
                <span className="value">이태원역 3번 출구 (최근 신설)</span>
              </div>
              <div className="detail-item">
                <span className="label">특징:</span>
                <span className="value">경리단길 주요 식당 80% 접근 가능</span>
              </div>
              <div className="user-tip">
                <strong>사용자 팁:</strong> "녹사평역보다 이태원역이 더 편해요. 경리단길은 평지라 이동이 수월합니다." - 윤정우님
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Panels */}
      <section className="info-panels">
        <div className="info-panel">
          <div className="panel-header">
            <h3>이동 유형별 선택 옵션</h3>
          </div>
          <div className="panel-list">
            <div className="list-item">
              <span className="item-marker"></span>
              <span><strong>해당 없음</strong> - 보행자 전용</span>
            </div>
            <div className="list-item">
              <span className="item-marker"></span>
              <span><strong>수동 휠체어</strong> - 경사도 주의 필요</span>
            </div>
            <div className="list-item">
              <span className="item-marker"></span>
              <span><strong>전동 휠체어</strong> - 충전소 위치 표시</span>
            </div>
            <div className="list-item">
              <span className="item-marker"></span>
              <span><strong>보행 보조도구</strong> - 휴게시설 경로</span>
            </div>
            <div className="list-item">
              <span className="item-marker"></span>
              <span><strong>수전동 휠체어</strong> - 혼합형 최적 경로</span>
            </div>
            <div className="list-item">
              <span className="item-marker"></span>
              <span><strong>유아차 동반</strong> - 엘리베이터 우선</span>
            </div>
          </div>
        </div>

        <div className="info-panel">
          <div className="panel-header">
            <h3>접근 가능 범위 선택</h3>
          </div>
          <div className="panel-list">
            <div className="list-item">
              <span className="item-marker"></span>
              <span><strong>계단 턱 X</strong> - 완전 평지만</span>
            </div>
            <div className="list-item">
              <span className="item-marker"></span>
              <span><strong>계단 턱 하나 정도는 괜찮음</strong> - 소형 단차 허용</span>
            </div>
            <div className="list-item">
              <span className="item-marker"></span>
              <span><strong>계단 턱 상관 없음</strong> - 보조 가능</span>
            </div>
          </div>
        </div>

        <div className="info-panel">
          <div className="panel-header">
            <h3>커뮤니티 기능</h3>
          </div>
          <div className="panel-list">
            <div className="list-item">
              <span className="item-marker"></span>
              <span>실시간 장애물 신고 (공사, 고장 등)</span>
            </div>
            <div className="list-item">
              <span className="item-marker"></span>
              <span>장소별 일기 작성 및 공유</span>
            </div>
            <div className="list-item">
              <span className="item-marker"></span>
              <span>아바타 프로필로 맞춤형 필터링</span>
            </div>
            <div className="list-item">
              <span className="item-marker"></span>
              <span>퀘스트 미션 - 정보 수집 보상</span>
            </div>
            <div className="list-item">
              <span className="item-marker"></span>
              <span>댓글과 피드백으로 정보 업데이트</span>
            </div>
            <div className="list-item">
              <span className="item-marker"></span>
              <span>베스트 경로 추천 및 저장</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="stats-banner">
        <div className="stat-item">
          <div className="stat-value">95%</div>
          <div className="stat-label">경로 만족도</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-value">40%</div>
          <div className="stat-label">이동 시간 단축</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-value">3배</div>
          <div className="stat-label">외출 빈도 증가</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-value">85%</div>
          <div className="stat-label">불안감 감소</div>
        </div>
      </section>

      {/* Psychological Safety Features */}
      <section className="psychological-safety">
        <div className="section-header">
          <h2>심리적 장벽 해소 - RAMP의 핵심 가치</h2>
        </div>
        <div className="safety-content">
          <div className="before-after">
            <div className="before-state">
              <h3>Before RAMP</h3>
              <div className="state-item anxiety">
                <span className="emotion">😰</span>
                <p><strong>"혹시 갈 수 있을까?"</strong></p>
                <ul>
                  <li>정보를 찾다 지쳐서 익숙한 곳만 방문</li>
                  <li>현장에 가봐야 알 수 있는 불확실성</li>
                  <li>운영자가 환영할지 모르는 불안감</li>
                  <li>정보를 찾아도 믿을 수 없음</li>
                </ul>
              </div>
            </div>
            <div className="arrow-transition">→</div>
            <div className="after-state">
              <h3>After RAMP</h3>
              <div className="state-item confidence">
                <span className="emotion">😊</span>
                <p><strong>"당연히 갈 수 있어!"</strong></p>
                <ul>
                  <li>실제 이용자의 검증된 정보</li>
                  <li>사진과 상세한 후기로 미리 확인</li>
                  <li>비슷한 조건의 사용자 경험 공유</li>
                  <li>커뮤니티 집단 검증으로 신뢰도 확보</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="key-insight">
            <h4>핵심 인사이트</h4>
            <p>
              설치율 89.2%는 충분히 높지만, <strong>실제로 이용 가능한지는 현장에 가봐야 알 수 있습니다.</strong>
              RAMP는 플랫폼 파편화로 인한 편의시설 정보 조각들을 모으고,
              <strong>실시간 정보를 검증</strong>하여 다른 휠체어 사용자들에게 공유할 수 있는 플랫폼을 만듭니다.
            </p>
            <p className="highlight-text">
              이는 단순한 정보 제공이 아닌, <strong>심리적 장벽을 해소</strong>하는 것입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="vision-statement">
        <div className="vision-content">
          <h2>우리의 개선 방향</h2>
          <p>
            RAMP는 <strong>이동 관련 정보 및 시설 이용 후기를 기록</strong>하고,
            이를 <strong>다른 휠체어 사용자들에게 공유</strong>할 수 있는 플랫폼을 만들어
            문제를 해결하고자 합니다.
          </p>
          <div className="improvement-strategy">
            <div className="strategy-card">
              <h4>1,400만 명의 교통약자</h4>
              <p>영유아 사용 부모를 포함한 모든 이동약자에게 영향을 미칠 수 있는 광범위한 문제</p>
            </div>
            <div className="strategy-card">
              <h4>집단 지성의 힘</h4>
              <p>커뮤니티 검증을 통해 해결이 필요하고 판단했습니다</p>
            </div>
          </div>
          <div className="vision-quote">
            "혹시 갈 수 있을까?" → "당연히 갈 수 있어!"
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ramp-footer">
        <p>서울대학교 정보문화학 프로젝트 | RAMP Team</p>
      </footer>
    </div>
  );
}

export default Ramp;
