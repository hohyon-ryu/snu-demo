import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OurDrama.css';

function OurDrama() {
  const navigate = useNavigate();

  // Realistic Korean locations with detailed accessibility information
  const locations = [
    {
      id: 1,
      name: '카페 봄날',
      category: '카페',
      address: '서울 마포구 연남동 239-2',
      rating: 4.8,
      reviews: 24,
      hasRamp: true,
      hasElevator: false,
      hasAccessibleBathroom: true,
      hasParking: true,
      distance: '0.3km',
      image: '☕',
      rampAngle: '완만 (5도)',
      doorWidth: '넓음 (90cm)',
      interiorSpace: '휠체어 이동 용이',
      recentUpdate: '2일 전'
    },
    {
      id: 2,
      name: '북촌 한옥마을 갤러리',
      category: '문화시설',
      address: '서울 종로구 계동길 37',
      rating: 4.2,
      reviews: 15,
      hasRamp: true,
      hasElevator: false,
      hasAccessibleBathroom: false,
      hasParking: false,
      distance: '0.5km',
      image: '🎨',
      rampAngle: '경사 있음 (8도)',
      doorWidth: '좁음 (80cm)',
      interiorSpace: '일부 제한',
      recentUpdate: '5일 전'
    },
    {
      id: 3,
      name: '서울대학교 중앙도서관',
      category: '도서관',
      address: '서울 관악구 관악로 1',
      rating: 4.9,
      reviews: 42,
      hasRamp: true,
      hasElevator: true,
      hasAccessibleBathroom: true,
      hasParking: true,
      distance: '0.8km',
      image: '📚',
      rampAngle: '완만 (3도)',
      doorWidth: '매우 넓음 (120cm)',
      interiorSpace: '휠체어 전용 공간',
      recentUpdate: '1일 전'
    },
    {
      id: 4,
      name: '이태원 글로벌 식당',
      category: '음식점',
      address: '서울 용산구 이태원로 55길 22',
      rating: 4.5,
      reviews: 31,
      hasRamp: true,
      hasElevator: false,
      hasAccessibleBathroom: true,
      hasParking: false,
      distance: '1.2km',
      image: '🍜',
      rampAngle: '완만 (4도)',
      doorWidth: '넓음 (95cm)',
      interiorSpace: '테이블 간격 넓음',
      recentUpdate: '3일 전'
    },
    {
      id: 5,
      name: '홍대 예술극장',
      category: '문화시설',
      address: '서울 마포구 양화로 160',
      rating: 4.6,
      reviews: 28,
      hasRamp: true,
      hasElevator: true,
      hasAccessibleBathroom: true,
      hasParking: true,
      distance: '1.5km',
      image: '🎭',
      rampAngle: '완만 (5도)',
      doorWidth: '매우 넓음 (130cm)',
      interiorSpace: '휠체어 전용석',
      recentUpdate: '1주일 전'
    },
    {
      id: 6,
      name: '성미산 마을카페',
      category: '카페',
      address: '서울 마포구 성미산로 15길 33',
      rating: 4.7,
      reviews: 19,
      hasRamp: true,
      hasElevator: false,
      hasAccessibleBathroom: true,
      hasParking: false,
      distance: '2.1km',
      image: '🏡',
      rampAngle: '완만 (6도)',
      doorWidth: '넓음 (85cm)',
      interiorSpace: '여유로운 공간',
      recentUpdate: '4일 전'
    }
  ];

  // Enhanced reviews with more detail
  const recentReviews = [
    {
      id: 1,
      user: '김민수',
      userType: '수동휠체어',
      location: '카페 봄날',
      rating: 5,
      comment: '출입구 경사로가 정말 완만해서 혼자서도 쉽게 진입할 수 있었어요. 내부 테이블 간격도 넓어서 이동이 편했고, 직원분들이 자연스럽게 도와주셔서 감사했습니다. 화장실도 넓고 깨끗해요!',
      date: '2일 전',
      photos: 3,
      helpful: 12,
      details: {
        visitTime: '주중 오후',
        withCompanion: false,
        difficulty: '쉬움'
      }
    },
    {
      id: 2,
      user: '이지은',
      userType: '전동휠체어',
      location: '서울대학교 중앙도서관',
      rating: 5,
      comment: '엘리베이터가 넓어서 전동휠체어로 이용하기 정말 좋았습니다. 휠체어 전용 열람실도 따로 있어서 장시간 이용하기 편해요. 화장실 손잡이와 공간 배치가 완벽합니다!',
      date: '1일 전',
      photos: 4,
      helpful: 18,
      details: {
        visitTime: '주중 오전',
        withCompanion: true,
        difficulty: '쉬움'
      }
    },
    {
      id: 3,
      user: '박준호',
      userType: '수동휠체어',
      location: '이태원 글로벌 식당',
      rating: 4,
      comment: '입구 경사로는 괜찮은데, 테이블이 조금 높아서 팔 올리기가 약간 불편했어요. 하지만 직원분들이 친절하고 음식은 정말 맛있었습니다. 화장실은 넓어서 좋았어요.',
      date: '3일 전',
      photos: 2,
      helpful: 8,
      details: {
        visitTime: '주말 저녁',
        withCompanion: true,
        difficulty: '보통'
      }
    },
    {
      id: 4,
      user: '정수아',
      userType: '보호자',
      location: '홍대 예술극장',
      rating: 5,
      comment: '어머니 모시고 갔는데 휠체어 전용석이 따로 있어서 공연 관람이 정말 편했어요. 엘리베이터도 크고, 화장실도 1층에 있어서 접근성이 좋습니다. 직원분들도 매우 친절하세요!',
      date: '1주일 전',
      photos: 5,
      helpful: 22,
      details: {
        visitTime: '주말 오후',
        withCompanion: true,
        difficulty: '쉬움'
      }
    }
  ];

  // Story-based motivational content from PDF
  const userStories = [
    {
      id: 1,
      user: '유진민',
      age: 58,
      quote: '발달장애인인 저희 딸이 처음으로 혼자 외출했어요',
      story: '사부작 덕분에 안전한 경로를 미리 확인할 수 있어서, 딸이 처음으로 혼자 동네 카페에 갔다 왔습니다. 이제는 조금씩 세상을 만들고 싶어요.',
      impact: '심리적 장벽 해소'
    },
    {
      id: 2,
      user: '김윤희',
      age: 32,
      quote: '그래서 응호가게가 뭔데요? 좀 더 자세히, 마음에 와닿는 설명이 필요해요',
      story: '휠체어를 타고 돌아다니려면 정말 많은 것들을 고려해야 해요. 경사로 각도, 문 폭, 화장실... 사부작이 있어서 미리 알 수 있어 정말 도움이 됩니다.',
      impact: '정보 접근성 향상'
    }
  ];

  return (
    <div className="od-container">
      {/* Navigation Bar */}
      <nav className="od-nav">
        <button onClick={() => navigate('/')} className="od-back-btn">
          ← 목록으로
        </button>
        <div className="od-nav-title">우리들의 사부작 드라마</div>
      </nav>

      {/* Hero Section with Mission Statement */}
      <section className="od-hero">
        <div className="od-hero-content">
          <div className="od-hero-badge">심리적 장벽을 낮추는 스토리맵</div>
          <h1 className="od-hero-title">휠체어로 갈 수 있는 곳을 찾아보세요</h1>
          <p className="od-hero-subtitle">
            실제 휠체어 사용자들이 직접 방문하고 검증한 접근성 정보
          </p>
          <p className="od-hero-description">
            "1등 1사부작을 실현하고 싶다" - 사부작과 성미산마을이 만든 공감 프로젝트
          </p>

          {/* Search Bar */}
          <div className="od-search-bar">
            <div className="od-search-section">
              <label>장소 유형</label>
              <input type="text" placeholder="카페, 음식점, 문화시설..." />
            </div>
            <div className="od-search-divider"></div>
            <div className="od-search-section">
              <label>위치</label>
              <input type="text" placeholder="현재 위치에서 검색" />
            </div>
            <div className="od-search-divider"></div>
            <div className="od-search-section">
              <label>접근성</label>
              <input type="text" placeholder="경사로, 엘리베이터..." />
            </div>
            <button className="od-search-button">검색</button>
          </div>

          {/* Enhanced Stats */}
          <div className="od-stats-bar">
            <div className="od-stat">
              <span className="od-stat-number">1,234</span>
              <span className="od-stat-label">등록 장소</span>
            </div>
            <div className="od-stat">
              <span className="od-stat-number">3,567</span>
              <span className="od-stat-label">사용자 리뷰</span>
            </div>
            <div className="od-stat">
              <span className="od-stat-number">8,901</span>
              <span className="od-stat-label">공유 사진</span>
            </div>
            <div className="od-stat">
              <span className="od-stat-number">456</span>
              <span className="od-stat-label">기여자</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters with Accessibility Options */}
      <section className="od-filters">
        <button className="od-filter-chip od-filter-active">전체</button>
        <button className="od-filter-chip">카페</button>
        <button className="od-filter-chip">음식점</button>
        <button className="od-filter-chip">문화시설</button>
        <button className="od-filter-chip">도서관</button>
        <button className="od-filter-chip od-filter-accessibility">경사로 있음</button>
        <button className="od-filter-chip od-filter-accessibility">엘리베이터 있음</button>
        <button className="od-filter-chip od-filter-accessibility">장애인 화장실</button>
        <button className="od-filter-chip od-filter-accessibility">주차 가능</button>
      </section>

      {/* Enhanced Locations Grid */}
      <section className="od-locations">
        <div className="od-section-header">
          <h2 className="od-section-title">내 주변 장소</h2>
          <div className="od-sort-options">
            <button className="od-sort-btn od-sort-active">거리순</button>
            <button className="od-sort-btn">평점순</button>
            <button className="od-sort-btn">최신순</button>
          </div>
        </div>
        <div className="od-locations-grid">
          {locations.map((location) => (
            <div key={location.id} className="od-location-card">
              <div className="od-location-image">
                <div className="od-location-emoji">{location.image}</div>
                <div className="od-location-distance">{location.distance}</div>
                {location.recentUpdate && (
                  <div className="od-location-recent-badge">
                    {location.recentUpdate} 업데이트
                  </div>
                )}
              </div>
              <div className="od-location-details">
                <div className="od-location-main">
                  <h3 className="od-location-name">{location.name}</h3>
                  <div className="od-location-rating">
                    <span className="od-rating-star">★</span>
                    <span className="od-rating-value">{location.rating}</span>
                    <span className="od-rating-count">({location.reviews})</span>
                  </div>
                </div>
                <p className="od-location-category">{location.category}</p>
                <p className="od-location-address">{location.address}</p>

                {/* Detailed Accessibility Information */}
                <div className="od-accessibility-details">
                  <div className="od-access-detail-row">
                    <span className="od-access-detail-label">경사로:</span>
                    <span className="od-access-detail-value">{location.rampAngle}</span>
                  </div>
                  <div className="od-access-detail-row">
                    <span className="od-access-detail-label">출입구:</span>
                    <span className="od-access-detail-value">{location.doorWidth}</span>
                  </div>
                  <div className="od-access-detail-row">
                    <span className="od-access-detail-label">내부공간:</span>
                    <span className="od-access-detail-value">{location.interiorSpace}</span>
                  </div>
                </div>

                <div className="od-accessibility-tags">
                  {location.hasRamp && (
                    <span className="od-access-tag od-access-tag-has">✓ 경사로</span>
                  )}
                  {location.hasElevator && (
                    <span className="od-access-tag od-access-tag-has">✓ 엘리베이터</span>
                  )}
                  {location.hasAccessibleBathroom && (
                    <span className="od-access-tag od-access-tag-has">✓ 장애인 화장실</span>
                  )}
                  {location.hasParking && (
                    <span className="od-access-tag od-access-tag-has">✓ 주차장</span>
                  )}
                  {!location.hasElevator && (
                    <span className="od-access-tag od-access-tag-none">엘리베이터 없음</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* User Stories Section - Key from PDF */}
      <section className="od-user-stories">
        <h2 className="od-section-title">사용자 이야기</h2>
        <p className="od-section-subtitle">
          성미산 마을의 성미들이 전하는 진짜 1등 1사부작의 의미
        </p>
        <div className="od-stories-grid">
          {userStories.map((story) => (
            <div key={story.id} className="od-story-card">
              <div className="od-story-quote">"{story.quote}"</div>
              <div className="od-story-content">
                <p className="od-story-text">{story.story}</p>
                <div className="od-story-footer">
                  <div className="od-story-author">
                    <span className="od-story-name">{story.user}</span>
                    <span className="od-story-age">{story.age}세</span>
                  </div>
                  <div className="od-story-impact">{story.impact}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Reviews Section */}
      <section className="od-reviews">
        <div className="od-reviews-header">
          <div>
            <h2 className="od-section-title">커뮤니티 리뷰</h2>
            <p className="od-section-subtitle">
              실제 방문자들의 솔직한 경험과 사진
            </p>
          </div>
          <div className="od-reviews-summary">
            <span className="od-overall-rating">★ 4.7</span>
            <span className="od-total-reviews">총 142개의 리뷰</span>
          </div>
        </div>

        <div className="od-reviews-grid">
          {recentReviews.map((review) => (
            <div key={review.id} className="od-review-card">
              <div className="od-review-top">
                <div className="od-reviewer">
                  <div className="od-reviewer-avatar">{review.user[0]}</div>
                  <div className="od-reviewer-info">
                    <div className="od-reviewer-name">{review.user}</div>
                    <div className="od-reviewer-type">{review.userType}</div>
                    <div className="od-review-date">{review.date}</div>
                  </div>
                </div>
                <div className="od-review-stars">
                  {'★'.repeat(review.rating)}
                </div>
              </div>
              <div className="od-review-location-tag">{review.location}</div>
              <p className="od-review-text">{review.comment}</p>

              {/* Review Details */}
              <div className="od-review-details">
                <span className="od-review-detail-badge">
                  {review.details.visitTime}
                </span>
                <span className="od-review-detail-badge">
                  {review.details.withCompanion ? '동행' : '혼자'}
                </span>
                <span className={`od-review-difficulty od-difficulty-${review.details.difficulty}`}>
                  난이도: {review.details.difficulty}
                </span>
              </div>

              <div className="od-review-footer">
                <div className="od-review-photos">
                  <span className="od-photo-indicator">📷 사진 {review.photos}장</span>
                </div>
                <div className="od-review-helpful">
                  <button className="od-helpful-btn">👍 도움돼요 ({review.helpful})</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contribution CTA - Key Feature from PDF */}
      <section className="od-contribution-cta">
        <div className="od-contribution-content">
          <div className="od-contribution-icon">📍</div>
          <h2 className="od-contribution-title">당신의 경험이 누군가의 용기가 됩니다</h2>
          <p className="od-contribution-text">
            여러분이 방문한 장소의 접근성 정보를 공유해주세요.<br />
            작은 정보 하나가 휠체어 사용자의 외출 결정에 큰 도움이 됩니다.
          </p>
          <div className="od-contribution-stats">
            <div className="od-contribution-stat">
              <span className="od-contribution-stat-number">10분</span>
              <span className="od-contribution-stat-label">평균 작성 시간</span>
            </div>
            <div className="od-contribution-stat">
              <span className="od-contribution-stat-number">4.8점</span>
              <span className="od-contribution-stat-label">기여자 만족도</span>
            </div>
          </div>
          <div className="od-contribution-buttons">
            <button className="od-contribution-primary">
              <span className="od-btn-icon">📝</span>
              장소 등록하기
            </button>
            <button className="od-contribution-secondary">
              <span className="od-btn-icon">⭐</span>
              리뷰 작성하기
            </button>
            <button className="od-contribution-secondary">
              <span className="od-btn-icon">📸</span>
              사진 업로드
            </button>
          </div>
          <p className="od-contribution-help">
            카카오맵 URL만 있으면 쉽게 등록할 수 있어요
          </p>
        </div>
      </section>

      {/* How It Works - From PDF User Journey */}
      <section className="od-how-it-works">
        <h2 className="od-section-title">사부작 이용 방법</h2>
        <div className="od-steps-grid">
          <div className="od-step-card">
            <div className="od-step-number">1</div>
            <h3 className="od-step-title">주변 장소 검색</h3>
            <p className="od-step-description">
              카카오맵에서 카페를 찾고 싶어 탐색을 시작합니다
            </p>
          </div>
          <div className="od-step-card">
            <div className="od-step-number">2</div>
            <h3 className="od-step-title">응호가게 확인</h3>
            <p className="od-step-description">
              장소 설명란에 '응호가게'라는 문구가 있으면 해당 장소 접근 정보를 확인할 수 있습니다
            </p>
          </div>
          <div className="od-step-card">
            <div className="od-step-number">3</div>
            <h3 className="od-step-title">접근성 정보 확인</h3>
            <p className="od-step-description">
              경사로 각도, 출입구 폭, 내부 공간 등 상세한 접근성 정보를 확인합니다
            </p>
          </div>
          <div className="od-step-card">
            <div className="od-step-number">4</div>
            <h3 className="od-step-title">안심하고 방문</h3>
            <p className="od-step-description">
              실제 사용자들의 리뷰를 바탕으로 자신있게 외출합니다
            </p>
          </div>
        </div>
      </section>

      {/* Project Mission - From PDF */}
      <section className="od-mission">
        <h2 className="od-section-title">프로젝트 미션</h2>
        <div className="od-mission-grid">
          <div className="od-mission-card">
            <div className="od-mission-icon">🎯</div>
            <h3 className="od-mission-title">심리적 장벽 해소 (스트리밍 장착)</h3>
            <p className="od-mission-text">
              사부작 발달장애인 청년 당사자를 가이드로 설정하여 모든 콘텐츠를 그들의 목소리로 전달합니다.
              '정보는 따라 갈는 이야기 지도'로써 사용자가 '공감의 여정'을 겪으며 자연스럽게 인터랙티브 스토리맵을 구축합니다.
            </p>
          </div>
          <div className="od-mission-card">
            <div className="od-mission-icon">🤝</div>
            <h3 className="od-mission-title">인터랙티브 로드맵 플로우 구축</h3>
            <p className="od-mission-text">
              다수 목록 나열이 아닌, 지도 기반의 순차적 로드맵을 제공하고 스토리를 입력한 때마다 '공감하기' 버튼을 통해 즉시적인 피드백을 유도하여 사용자의 경험 흐름도를 높입니다.
            </p>
          </div>
          <div className="od-mission-card">
            <div className="od-mission-icon">🌍</div>
            <h3 className="od-mission-title">행동 연계 극대화</h3>
            <p className="od-mission-text">
              모든 스토리를 감상한 이후, 페이지 끝에 카카오 갈아가지 링크를 제공하여, 형성된 공감이 실질적인 응원 및 기부로 이어지게 합니다.
            </p>
          </div>
          <div className="od-mission-card">
            <div className="od-mission-icon">💡</div>
            <h3 className="od-mission-title">역할 전승</h3>
            <p className="od-mission-text">
              프로젝트는 스토리를 담아 기술적 구조와 인터랙티브 플로우를 설계하는 데 집중하고, 스토리 콘텐츠의 구체적인 창생은 사부작 측과의 협업 가이드라인을 통해 진행합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="od-cta">
        <div className="od-cta-content">
          <h2 className="od-cta-title">함께 만드는 포용적인 세상</h2>
          <p className="od-cta-text">
            '사부작(四部作)'은 네 가지 큰 작품을 의미합니다.<br />
            여러분의 참여가 이 드라마의 중요한 한 부분이 됩니다.
          </p>
          <div className="od-cta-buttons">
            <button className="od-cta-primary">지금 시작하기</button>
            <button className="od-cta-secondary">프로젝트 더 알아보기</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="od-footer">
        <div className="od-footer-content">
          <div className="od-footer-main">
            <h3 className="od-footer-title">우리들의 사부작 드라마</h3>
            <p className="od-footer-text">
              서울대학교 정보문화학 프로젝트
            </p>
            <p className="od-footer-subtext">
              휠체어 사용자들의 실제 니즈를 반영하여 더 포용적인 사회를 만듭니다
            </p>
          </div>
          <div className="od-footer-links">
            <div className="od-footer-link-group">
              <h4 className="od-footer-link-title">프로젝트</h4>
              <a href="#" className="od-footer-link">소개</a>
              <a href="#" className="od-footer-link">팀</a>
              <a href="#" className="od-footer-link">파트너</a>
            </div>
            <div className="od-footer-link-group">
              <h4 className="od-footer-link-title">참여하기</h4>
              <a href="#" className="od-footer-link">장소 등록</a>
              <a href="#" className="od-footer-link">리뷰 작성</a>
              <a href="#" className="od-footer-link">사진 공유</a>
            </div>
            <div className="od-footer-link-group">
              <h4 className="od-footer-link-title">지원</h4>
              <a href="#" className="od-footer-link">도움말</a>
              <a href="#" className="od-footer-link">문의하기</a>
              <a href="#" className="od-footer-link">개인정보처리방침</a>
            </div>
          </div>
        </div>
        <div className="od-footer-bottom">
          <p className="od-footer-copyright">
            © 2024 우리들의 사부작 드라마. All rights reserved.
          </p>
          <p className="od-footer-partner">
            In partnership with 성미산마을 & 사부작
          </p>
        </div>
      </footer>
    </div>
  );
}

export default OurDrama;
