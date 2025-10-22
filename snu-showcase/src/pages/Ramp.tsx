import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Ramp.css';

interface RouteSegment {
  type: 'subway' | 'walk' | 'elevator' | 'ramp' | 'bus';
  description: string;
  accessibility: 'excellent' | 'good' | 'caution' | 'difficult';
  duration?: string;
  icon: string;
}

interface DetailedRoute {
  id: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  accessibility: 'excellent' | 'good' | 'caution';
  verified: boolean;
  verificationCount: number;
  lastVerified: string;
  segments: RouteSegment[];
  facilities: {
    elevator: string;
    ramp: string;
    restroom: string;
    parking?: string;
  };
  userTips: Array<{
    author: string;
    tip: string;
    date: string;
    helpful: number;
  }>;
  warnings?: Array<{
    type: 'construction' | 'maintenance' | 'crowded';
    description: string;
    validUntil?: string;
  }>;
}

function Ramp() {
  const navigate = useNavigate();
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);

  const detailedRoutes: DetailedRoute[] = [
    {
      id: 'route-1',
      from: '홍대입구역 2호선',
      to: '연남동 카페거리',
      distance: '650m',
      duration: '8분',
      accessibility: 'excellent',
      verified: true,
      verificationCount: 47,
      lastVerified: '2024.10.20',
      segments: [
        { type: 'subway', description: '홍대입구역 2호선 하차', accessibility: 'excellent', icon: '🚇' },
        { type: 'elevator', description: '2번 출구 엘리베이터 이용 (24시간 가동)', accessibility: 'excellent', duration: '2분', icon: '🛗' },
        { type: 'walk', description: '동교로 방향 평지 이동', accessibility: 'excellent', duration: '5분', icon: '🚶' },
        { type: 'ramp', description: '연남동 카페거리 진입 (경사로 설치)', accessibility: 'excellent', duration: '1분', icon: '♿' }
      ],
      facilities: {
        elevator: '2번 출구 - 신형 엘리베이터 (2023년 설치)',
        ramp: '주요 카페 90% 경사로 설치 완료',
        restroom: '카페 내부 장애인 화장실 70% 구비',
        parking: '연남동 공영주차장 (장애인 전용 5면)'
      },
      userTips: [
        { author: '김민서', tip: '동교로 쪽이 경사가 완만해요. 커피숲 카페는 입구가 평평하고 화장실도 넓어서 추천합니다!', date: '2024.10.18', helpful: 23 },
        { author: '박준영', tip: '연남토끼굴 입구는 계단이 있어요. 대신 옆 건물 통해서 우회하면 접근 가능합니다.', date: '2024.10.15', helpful: 18 },
        { author: '이서윤', tip: '주말 오후에는 사람이 많아서 이동이 조금 불편할 수 있어요. 평일 오전 추천!', date: '2024.10.12', helpful: 15 }
      ]
    },
    {
      id: 'route-2',
      from: '강남역 2호선',
      to: '코엑스몰',
      distance: '1.2km',
      duration: '15분',
      accessibility: 'caution',
      verified: true,
      verificationCount: 62,
      lastVerified: '2024.10.19',
      segments: [
        { type: 'subway', description: '강남역 2호선 하차', accessibility: 'good', icon: '🚇' },
        { type: 'elevator', description: '10번 출구 엘리베이터 이용', accessibility: 'good', duration: '3분', icon: '🛗' },
        { type: 'walk', description: '영동대로 지상 이동 (우회 필요)', accessibility: 'caution', duration: '10분', icon: '🚶' },
        { type: 'bus', description: '셔틀버스 이용 권장 (저상버스)', accessibility: 'excellent', duration: '5분', icon: '🚌' }
      ],
      facilities: {
        elevator: '10번 출구 엘리베이터 - 혼잡 시 대기 필요',
        ramp: '코엑스몰 내부 모든 층 경사로 완비',
        restroom: '각 층 장애인 화장실 구비 (B1, 1F, 3F)',
        parking: 'B5-B6 장애인 전용 주차구역 50면'
      },
      userTips: [
        { author: '박희완', tip: '지하보도는 좁고 복잡해서 비추. 셔틀버스가 훨씬 편해요! 배차간격 10분입니다.', date: '2024.10.17', helpful: 31 },
        { author: '정수민', tip: '코엑스몰 내부는 완벽해요. 문제는 강남역에서 가는 길인데, 날씨 좋으면 지상으로 가세요.', date: '2024.10.14', helpful: 26 },
        { author: '최동훈', tip: '10번 출구 엘리베이터 출퇴근 시간엔 대기 5분 이상. 여유 두고 출발하세요.', date: '2024.10.10', helpful: 19 }
      ],
      warnings: [
        { type: 'construction', description: '영동대로 보도 공사로 일부 구간 우회 필요', validUntil: '2024.10.30' }
      ]
    },
    {
      id: 'route-3',
      from: '이태원역 6호선',
      to: '경리단길',
      distance: '400m',
      duration: '5분',
      accessibility: 'excellent',
      verified: true,
      verificationCount: 38,
      lastVerified: '2024.10.21',
      segments: [
        { type: 'subway', description: '이태원역 6호선 하차', accessibility: 'excellent', icon: '🚇' },
        { type: 'elevator', description: '3번 출구 신설 엘리베이터 (2023)', accessibility: 'excellent', duration: '2분', icon: '🛗' },
        { type: 'walk', description: '경리단길 평지 이동', accessibility: 'excellent', duration: '3분', icon: '🚶' }
      ],
      facilities: {
        elevator: '3번 출구 - 2023년 신설, 넓고 쾌적함',
        ramp: '경리단길 주요 식당 80% 평지 또는 경사로',
        restroom: '주요 식당 내 장애인 화장실 60% 구비',
        parking: '경리단길 공영주차장 (장애인 전용 3면)'
      },
      userTips: [
        { author: '윤정우', tip: '녹사평역보다 이태원역이 더 편해요. 경리단길은 평지라 이동이 수월합니다.', date: '2024.10.19', helpful: 28 },
        { author: '강민지', tip: '트라또리아 제로는 턱이 없고 내부도 넓어요. 화장실도 접근 가능합니다!', date: '2024.10.16', helpful: 22 },
        { author: '송재현', tip: '경리단길 초입 카페들이 접근성 좋아요. 안쪽으로 갈수록 계단 있는 곳 많아요.', date: '2024.10.13', helpful: 17 }
      ]
    },
    {
      id: 'route-4',
      from: '서울대입구역 2호선',
      to: '관악구청',
      distance: '800m',
      duration: '10분',
      accessibility: 'good',
      verified: true,
      verificationCount: 29,
      lastVerified: '2024.10.18',
      segments: [
        { type: 'subway', description: '서울대입구역 2호선 하차', accessibility: 'good', icon: '🚇' },
        { type: 'elevator', description: '3번 출구 엘리베이터', accessibility: 'good', duration: '2분', icon: '🛗' },
        { type: 'walk', description: '관악로 평지 이동', accessibility: 'good', duration: '7분', icon: '🚶' },
        { type: 'ramp', description: '관악구청 진입 경사로', accessibility: 'excellent', duration: '1분', icon: '♿' }
      ],
      facilities: {
        elevator: '3번 출구 엘리베이터 - 정상 가동',
        ramp: '관악구청 건물 경사로 및 자동문',
        restroom: '관악구청 내 각 층 장애인 화장실',
        parking: '관악구청 지하주차장 장애인 전용 10면'
      },
      userTips: [
        { author: '임수진', tip: '관악로는 평탄해서 이동 편해요. 구청 직원분들도 친절하게 도와주세요.', date: '2024.10.16', helpful: 14 },
        { author: '김태호', tip: '3번 출구 나와서 오른쪽으로 쭉 가면 됩니다. 신호등 2개 건너야 해요.', date: '2024.10.11', helpful: 11 }
      ]
    },
    {
      id: 'route-5',
      from: '시청역 1호선',
      to: '덕수궁',
      distance: '300m',
      duration: '4분',
      accessibility: 'excellent',
      verified: true,
      verificationCount: 52,
      lastVerified: '2024.10.20',
      segments: [
        { type: 'subway', description: '시청역 1호선 하차', accessibility: 'excellent', icon: '🚇' },
        { type: 'elevator', description: '1번 출구 엘리베이터', accessibility: 'excellent', duration: '2분', icon: '🛗' },
        { type: 'walk', description: '덕수궁 정문 평지 이동', accessibility: 'excellent', duration: '2분', icon: '🚶' }
      ],
      facilities: {
        elevator: '1번 출구 - 대형 엘리베이터',
        ramp: '덕수궁 무장애 관람로 완비',
        restroom: '덕수궁 내 장애인 화장실 2곳',
        parking: '시청 지하주차장 이용'
      },
      userTips: [
        { author: '한지영', tip: '덕수궁은 무장애 관람로가 잘 되어 있어요. 돌담길도 휠체어로 갈 수 있습니다!', date: '2024.10.18', helpful: 35 },
        { author: '오민석', tip: '대한문 입구에서 직원분께 말씀하면 경사로 안내해주세요.', date: '2024.10.15', helpful: 27 }
      ]
    }
  ];

  const accessibilityBadge = (level: string) => {
    const badges = {
      excellent: { text: '우수', color: '#10b981', icon: '✓' },
      good: { text: '양호', color: '#3b82f6', icon: '○' },
      caution: { text: '주의', color: '#f59e0b', icon: '⚠' }
    };
    const badge = badges[level as keyof typeof badges];
    return (
      <span className={`accessibility-badge ${level}`} style={{ background: badge.color }}>
        {badge.icon} {badge.text}
      </span>
    );
  };

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

      {/* Hero Section */}
      <section className="ramp-hero">
        <div className="hero-content">
          <div className="hero-badge">접근성 / 이동권</div>
          <h1 className="hero-title">RAMP</h1>
          <p className="hero-subtitle">Reducing psychological barriers to Accessible Mobility Platform</p>
          <div className="hero-transformation">
            <span className="before-text">혹시 갈 수 있을까? 😰</span>
            <span className="arrow">→</span>
            <span className="after-text">당연히 갈 수 있어! 😊</span>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="problem-statement">
        <div className="section-header">
          <h2>우리가 해결하는 문제</h2>
        </div>
        <div className="problem-grid">
          <div className="problem-card highlight">
            <div className="problem-icon">🚧</div>
            <div className="problem-stat">89.2%</div>
            <h3>설치율의 함정</h3>
            <p>2023년 기준 장애인 편의시설 설치율은 89.2%로 충분히 높습니다. 그러나 <strong>실제로 사용 가능한지는 현장에 가봐야 압니다.</strong></p>
          </div>
          <div className="problem-card highlight">
            <div className="problem-icon">❌</div>
            <div className="problem-stat">31%</div>
            <h3>부적절한 시설</h3>
            <p>2022년 기준 경찰서의 편의시설 부적절 및 미설치율 31%. <strong>제공되는 정보를 믿을 수 없습니다.</strong></p>
          </div>
          <div className="problem-card highlight">
            <div className="problem-icon">😰</div>
            <div className="problem-stat">1,400만명</div>
            <h3>심리적 장벽</h3>
            <p>휠체어 사용자와 교통약자가 겪는 가장 큰 문제: <strong>"혹시 갈 수 있을까?"</strong>라는 불안감이 외출을 막습니다.</p>
          </div>
        </div>
      </section>

      {/* Detailed Routes Section */}
      <section className="detailed-routes">
        <div className="section-header">
          <h2>실시간 검증된 무장애 경로</h2>
          <p className="section-subtitle">커뮤니티가 직접 검증한 신뢰할 수 있는 이동 정보</p>
        </div>

        <div className="routes-container">
          {detailedRoutes.map((route) => (
            <div key={route.id} className={`route-card detailed ${selectedRoute === route.id ? 'expanded' : ''}`}>
              <div className="route-card-header" onClick={() => setSelectedRoute(selectedRoute === route.id ? null : route.id)}>
                <div className="route-main-info">
                  <div className="route-endpoints">
                    <div className="endpoint start">
                      <span className="endpoint-icon">📍</span>
                      <span className="endpoint-name">{route.from}</span>
                    </div>
                    <div className="route-arrow">→</div>
                    <div className="endpoint end">
                      <span className="endpoint-icon">🎯</span>
                      <span className="endpoint-name">{route.to}</span>
                    </div>
                  </div>
                  <div className="route-summary">
                    <span className="route-duration">{route.duration}</span>
                    <span className="route-distance">{route.distance}</span>
                    {accessibilityBadge(route.accessibility)}
                    {route.verified && (
                      <span className="verification-badge">
                        ✓ {route.verificationCount}명 검증
                      </span>
                    )}
                  </div>
                </div>
                <button className="expand-button">
                  {selectedRoute === route.id ? '▲' : '▼'}
                </button>
              </div>

              {selectedRoute === route.id && (
                <div className="route-card-details">
                  {/* Route Segments */}
                  <div className="route-segments">
                    <h4>🗺️ 단계별 이동 경로</h4>
                    <div className="segments-list">
                      {route.segments.map((segment, idx) => (
                        <div key={idx} className="segment-item">
                          <div className="segment-icon">{segment.icon}</div>
                          <div className="segment-info">
                            <div className="segment-description">{segment.description}</div>
                            {segment.duration && <div className="segment-duration">{segment.duration}</div>}
                            {accessibilityBadge(segment.accessibility)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="route-facilities">
                    <h4>🏗️ 편의시설 정보</h4>
                    <div className="facilities-list">
                      <div className="facility-item">
                        <span className="facility-icon">🛗</span>
                        <div className="facility-info">
                          <strong>엘리베이터:</strong> {route.facilities.elevator}
                        </div>
                      </div>
                      <div className="facility-item">
                        <span className="facility-icon">♿</span>
                        <div className="facility-info">
                          <strong>경사로:</strong> {route.facilities.ramp}
                        </div>
                      </div>
                      <div className="facility-item">
                        <span className="facility-icon">🚻</span>
                        <div className="facility-info">
                          <strong>화장실:</strong> {route.facilities.restroom}
                        </div>
                      </div>
                      {route.facilities.parking && (
                        <div className="facility-item">
                          <span className="facility-icon">🅿️</span>
                          <div className="facility-info">
                            <strong>주차:</strong> {route.facilities.parking}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Warnings */}
                  {route.warnings && route.warnings.length > 0 && (
                    <div className="route-warnings">
                      <h4>⚠️ 주의사항</h4>
                      {route.warnings.map((warning, idx) => (
                        <div key={idx} className="warning-item">
                          <div className="warning-content">
                            {warning.description}
                            {warning.validUntil && (
                              <span className="warning-date"> (~ {warning.validUntil})</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* User Tips */}
                  <div className="route-tips">
                    <h4>💡 사용자 꿀팁</h4>
                    <div className="tips-list">
                      {route.userTips.map((tip, idx) => (
                        <div key={idx} className="tip-item">
                          <div className="tip-header">
                            <span className="tip-author">{tip.author}</span>
                            <span className="tip-date">{tip.date}</span>
                            <span className="tip-helpful">👍 {tip.helpful}</span>
                          </div>
                          <div className="tip-content">{tip.tip}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Verification Info */}
                  <div className="route-verification">
                    <div className="verification-info">
                      ✓ 최근 검증: {route.lastVerified} | 총 {route.verificationCount}명이 이 경로를 검증했습니다
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Core Features Section */}
      <section className="core-features">
        <div className="section-header">
          <h2>핵심 기능</h2>
          <p className="section-subtitle">Must Have → Should Have → Nice to Have</p>
        </div>

        <div className="features-container">
          <div className="feature-category must-have">
            <h3 className="category-title">Must Have</h3>
            <div className="feature-cards">
              <div className="feature-card">
                <div className="feature-icon">📔</div>
                <h4>일기 형식으로 장소 방문 기록</h4>
                <ul>
                  <li>가고 싶은 장소를 검색하고 저장</li>
                  <li>방문 후 장소별 상세 기록 (사진, 접근성 정보, 팁)</li>
                  <li>개인 일기장처럼 시간순 정렬</li>
                  <li>이동 경로와 편의시설 정보 기록</li>
                </ul>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👥</div>
                <h4>일기 내용과 장소를 다른 이용자와 공유</h4>
                <ul>
                  <li>커뮤니티 피드에 일기 공유</li>
                  <li>다른 사용자의 경험 확인</li>
                  <li>장소별 접근성 정보 집단 검증</li>
                  <li>비슷한 조건의 사용자 필터링</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="feature-category should-have">
            <h3 className="category-title">Should Have</h3>
            <div className="feature-cards">
              <div className="feature-card">
                <div className="feature-icon">💬</div>
                <h4>다른 이용자의 일기에 피드백</h4>
                <ul>
                  <li>댓글과 반응으로 경험 공유</li>
                  <li>추가 팁과 최신 정보 업데이트</li>
                  <li>경로 추천과 대안 제시</li>
                </ul>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h4>정보 필요 부분 퀘스트 제공</h4>
                <ul>
                  <li>특정 장소나 시설 정보 요청</li>
                  <li>카테고리별 퀘스트 (경사로, 엘리베이터 등)</li>
                  <li>미션 완료 시 보상 시스템</li>
                </ul>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h4>개인 프로필에서 아바타 생성</h4>
                <ul>
                  <li>수동휠체어, 전동휠체어 등 이동수단 선택</li>
                  <li>보조기구 종류 설정 (접근성 레벨)</li>
                  <li>맞춤형 경로 및 정보 제공</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="feature-category nice-to-have">
            <h3 className="category-title">Nice to Have</h3>
            <div className="feature-cards">
              <div className="feature-card">
                <div className="feature-icon">🗺️</div>
                <h4>장소별 페이지 및 경로 추천</h4>
                <ul>
                  <li>저장한 장소 기반 경로 추천</li>
                  <li>행동 종류와 횟수에 따라 아바타 반영</li>
                  <li>마일리지 적립 및 보상</li>
                </ul>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚨</div>
                <h4>실시간 장애물 정보 공유</h4>
                <ul>
                  <li>지하철 엘리베이터 고장 공유</li>
                  <li>실시간 시설 이용 불가 정보</li>
                  <li>자유게시판 및 긴급 우회 경로</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Persona */}
      <section className="user-persona">
        <div className="section-header">
          <h2>사용자 시나리오 - 치소윤님의 이야기</h2>
        </div>
        <div className="persona-container">
          <div className="persona-profile">
            <div className="persona-avatar">👩‍🦽</div>
            <div className="persona-info">
              <h3>치소윤 / 22세 / 여성</h3>
              <p className="persona-role">대학생, 정치외교학과 전공</p>
              <p className="persona-location">서울 서대문구 거주 (대학 기숙사)</p>
            </div>
          </div>

          <div className="persona-details">
            <div className="persona-section frustration">
              <h4>😰 핵심 불편사항 (Frustration)</h4>
              <ul>
                <li><strong>새로운 곳에 갈 때마다</strong> 매번 너무 많은 시간을 쏟아 정보를 찾아야 합니다.</li>
                <li><strong>정보를 찾다 지쳐</strong> 결국 알고 있는 익숙한 식당으로 가곤 합니다.</li>
                <li><strong>정보를 찾아도 자처럼 결과 알 수 없는 의심:</strong> 공방, 불판집, PT 등 다양한 활동을 하고 싶은데 운영자가 휠체어를 탄 자신을 환영할지 알 수 없어 포기하곤 합니다.</li>
              </ul>
            </div>

            <div className="persona-section goals">
              <h4>🎯 목표 (Goals)</h4>
              <ul>
                <li>휠체어 진입 가능 시설 및 경로를 찾는 <strong>에너지 줄이기</strong></li>
                <li>비슷한 지역에 사는 <strong>휠체어 이용자의 경험을 공유</strong> 받기</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey */}
      <section className="user-journey">
        <div className="section-header">
          <h2>핵심 사용자 여정 (Core User Journey)</h2>
        </div>
        <div className="journey-steps">
          <div className="journey-step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>목표 설정</h4>
              <p>학과 친구들과의 약속 장소인 강남에서 방문할 식당과 카페를 찾기로 함</p>
            </div>
          </div>
          <div className="journey-connector"></div>
          <div className="journey-step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>일반 검색</h4>
              <p>강남 지도 화면에서 자신과 동일한 보조기구를 사용하고, 유사한 접근성 레벨을 가진 사용자의 프로필을 찾음</p>
            </div>
          </div>
          <div className="journey-connector"></div>
          <div className="journey-step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>상세 검색 및 검증</h4>
              <p>조건에 맞는 사용자의 프로필에 있는 일기를 보고, 지점별 이용 편의성을 파악함. 글과 사진을 통해 경사로 및 엘리베이터 설치 여부, 화장실, 직원 태도 등에 대한 생생한 후기를 꼼꼼히 확인함</p>
            </div>
          </div>
          <div className="journey-connector"></div>
          <div className="journey-step highlight">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>최종 결정 - "당연히 갈 수 있어!"</h4>
              <p>접근이 가장 용이해보이는 가게를 최종 방문지로 확정한 후 친구들에게 공유함</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Options */}
      <section className="accessibility-options">
        <div className="section-header">
          <h2>맞춤형 접근성 필터</h2>
        </div>
        <div className="options-grid">
          <div className="options-panel">
            <h3>이동 유형 선택</h3>
            <div className="options-list">
              <div className="option-item">
                <span className="option-icon">🚶</span>
                <span>해당 없음 (보행자)</span>
              </div>
              <div className="option-item">
                <span className="option-icon">♿</span>
                <span>수동 휠체어</span>
              </div>
              <div className="option-item">
                <span className="option-icon">🦽</span>
                <span>전동 휠체어</span>
              </div>
              <div className="option-item">
                <span className="option-icon">🦯</span>
                <span>보행 보조도구</span>
              </div>
              <div className="option-item">
                <span className="option-icon">⚡</span>
                <span>수전동 휠체어</span>
              </div>
              <div className="option-item">
                <span className="option-icon">👶</span>
                <span>유아차 동반</span>
              </div>
            </div>
          </div>

          <div className="options-panel">
            <h3>접근 가능 범위</h3>
            <div className="options-list">
              <div className="option-item">
                <span className="option-icon">✓</span>
                <span><strong>계단/턱 X</strong> - 완전 평지만</span>
              </div>
              <div className="option-item">
                <span className="option-icon">△</span>
                <span><strong>계단/턱 하나 정도</strong> - 소형 단차 허용</span>
              </div>
              <div className="option-item">
                <span className="option-icon">○</span>
                <span><strong>계단/턱 상관없음</strong> - 보조 가능</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Psychological Barrier Section */}
      <section className="psychological-barrier">
        <div className="section-header">
          <h2>심리적 장벽 해소 - RAMP의 핵심 가치</h2>
        </div>
        <div className="barrier-comparison">
          <div className="before-state">
            <div className="state-header">Before RAMP</div>
            <div className="state-emotion">😰</div>
            <h3>"혹시 갈 수 있을까?"</h3>
            <ul className="state-points">
              <li>정보를 찾다 지쳐서 익숙한 곳만 방문</li>
              <li>현장에 가봐야 알 수 있는 불확실성</li>
              <li>운영자가 환영할지 모르는 불안감</li>
              <li>정보를 찾아도 믿을 수 없음</li>
            </ul>
          </div>

          <div className="transformation-arrow">
            <div className="arrow-content">
              <div className="arrow-line"></div>
              <div className="arrow-text">RAMP</div>
              <div className="arrow-line"></div>
            </div>
          </div>

          <div className="after-state">
            <div className="state-header">After RAMP</div>
            <div className="state-emotion">😊</div>
            <h3>"당연히 갈 수 있어!"</h3>
            <ul className="state-points">
              <li>실제 이용자의 검증된 정보</li>
              <li>사진과 상세한 후기로 미리 확인</li>
              <li>비슷한 조건의 사용자 경험 공유</li>
              <li>커뮤니티 집단 검증으로 신뢰도 확보</li>
            </ul>
          </div>
        </div>

        <div className="key-insight">
          <h4>💡 핵심 인사이트</h4>
          <p>
            설치율 89.2%는 충분히 높지만, <strong>실제로 이용 가능한지는 현장에 가봐야 알 수 있습니다.</strong>
          </p>
          <p>
            RAMP는 플랫폼 파편화로 인한 편의시설 정보 조각들을 모으고,
            <strong> 실시간 정보를 검증</strong>하여 다른 휠체어 사용자들에게 공유할 수 있는 플랫폼을 만듭니다.
          </p>
          <p className="insight-highlight">
            이는 단순한 정보 제공이 아닌, <strong>심리적 장벽을 해소</strong>하는 것입니다.
          </p>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="impact-stats">
        <div className="section-header">
          <h2>기대 효과</h2>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">✓</div>
            <div className="stat-value">95%</div>
            <div className="stat-label">경로 만족도</div>
            <p className="stat-description">커뮤니티 검증으로 신뢰할 수 있는 정보</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <div className="stat-value">40%</div>
            <div className="stat-label">이동 시간 단축</div>
            <p className="stat-description">최적 경로로 효율적인 이동</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🌟</div>
            <div className="stat-value">3배</div>
            <div className="stat-label">외출 빈도 증가</div>
            <p className="stat-description">심리적 장벽 해소로 자유로운 이동</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">😊</div>
            <div className="stat-value">85%</div>
            <div className="stat-label">불안감 감소</div>
            <p className="stat-description">"혹시?"에서 "당연히!"로</p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="vision-section">
        <div className="vision-content">
          <h2>우리의 개선 방향</h2>
          <div className="vision-text">
            <p>
              RAMP는 <strong>이동 관련 정보 및 시설 이용 후기를 기록</strong>하고,
              이를 <strong>다른 휠체어 사용자들에게 공유</strong>할 수 있는 플랫폼을 만들어 문제를 해결하고자 합니다.
            </p>
          </div>
          <div className="vision-pillars">
            <div className="pillar">
              <h4>1,400만 명의 교통약자</h4>
              <p>영유아 사용 부모를 포함한 모든 이동약자에게 영향을 미칠 수 있는 광범위한 문제</p>
            </div>
            <div className="pillar">
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
        <p className="team-members">김민서, 김자우, 박희완, 윤정우, 이윤재</p>
      </footer>
    </div>
  );
}

export default Ramp;
