import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OurDrama.css';

function OurDrama() {
  const navigate = useNavigate();

  const locations = [
    {
      id: 1,
      name: '스타벅스 종로점',
      category: '카페',
      rating: 4.5,
      reviews: 12,
      hasRamp: true,
      hasElevator: true,
      hasAccessibleBathroom: true,
      distance: '0.3km',
      image: '🏪'
    },
    {
      id: 2,
      name: '관악문화관',
      category: '문화시설',
      rating: 5.0,
      reviews: 8,
      hasRamp: true,
      hasElevator: true,
      hasAccessibleBathroom: true,
      distance: '0.5km',
      image: '🎭'
    },
    {
      id: 3,
      name: '서울대학교 중앙도서관',
      category: '도서관',
      rating: 4.0,
      reviews: 15,
      hasRamp: true,
      hasElevator: true,
      hasAccessibleBathroom: true,
      distance: '0.8km',
      image: '📚'
    }
  ];

  const recentReviews = [
    {
      id: 1,
      user: '김민수',
      location: '스타벅스 종로점',
      rating: 5,
      comment: '출입구 경사로가 완만해서 진입이 편리했어요. 내부 공간도 넓어서 이동이 수월합니다.',
      date: '2일 전',
      photos: 2
    },
    {
      id: 2,
      user: '이지은',
      location: '관악문화관',
      rating: 5,
      comment: '장애인 화장실이 잘 관리되어 있고, 엘리베이터도 넓어서 좋았습니다.',
      date: '3일 전',
      photos: 3
    }
  ];

  return (
    <div className="od-container">
      {/* Navigation Bar - Airbnb style */}
      <nav className="od-nav">
        <button onClick={() => navigate('/')} className="od-back-btn">
          ← 목록으로
        </button>
        <div className="od-nav-title">우리들의 사부작 드라마</div>
      </nav>

      {/* Hero Section - Location Search Focus */}
      <section className="od-hero">
        <div className="od-hero-content">
          <h1 className="od-hero-title">휠체어로 갈 수 있는 곳을 찾아보세요</h1>
          <p className="od-hero-subtitle">실제 사용자들이 직접 공유한 접근성 정보</p>

          {/* Search Bar - Airbnb inspired */}
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
            <button className="od-search-button">검색</button>
          </div>

          {/* Stats Bar */}
          <div className="od-stats-bar">
            <div className="od-stat">
              <span className="od-stat-number">1,234</span>
              <span className="od-stat-label">장소</span>
            </div>
            <div className="od-stat">
              <span className="od-stat-number">3,567</span>
              <span className="od-stat-label">리뷰</span>
            </div>
            <div className="od-stat">
              <span className="od-stat-number">8,901</span>
              <span className="od-stat-label">사진</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters - Airbnb category style */}
      <section className="od-filters">
        <button className="od-filter-chip od-filter-active">전체</button>
        <button className="od-filter-chip">카페</button>
        <button className="od-filter-chip">음식점</button>
        <button className="od-filter-chip">문화시설</button>
        <button className="od-filter-chip">도서관</button>
      </section>

      {/* Locations Grid - Airbnb card layout */}
      <section className="od-locations">
        <h2 className="od-section-title">내 주변 장소</h2>
        <div className="od-locations-grid">
          {locations.map((location) => (
            <div key={location.id} className="od-location-card">
              <div className="od-location-image">
                <div className="od-location-emoji">{location.image}</div>
                <div className="od-location-distance">{location.distance}</div>
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
                <div className="od-accessibility-tags">
                  {location.hasRamp && (
                    <span className="od-access-tag">경사로</span>
                  )}
                  {location.hasElevator && (
                    <span className="od-access-tag">엘리베이터</span>
                  )}
                  {location.hasAccessibleBathroom && (
                    <span className="od-access-tag">화장실</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section - Airbnb review style */}
      <section className="od-reviews">
        <div className="od-reviews-header">
          <h2 className="od-section-title">최근 리뷰</h2>
          <div className="od-reviews-summary">
            <span className="od-overall-rating">★ 4.7</span>
            <span className="od-total-reviews">총 20개의 리뷰</span>
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
                    <div className="od-review-date">{review.date}</div>
                  </div>
                </div>
                <div className="od-review-stars">
                  {'★'.repeat(review.rating)}
                </div>
              </div>
              <div className="od-review-location-tag">{review.location}</div>
              <p className="od-review-text">{review.comment}</p>
              <div className="od-review-photos">
                <span className="od-photo-indicator">사진 {review.photos}장</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="od-cta">
        <div className="od-cta-content">
          <h2 className="od-cta-title">당신의 경험을 공유해주세요</h2>
          <p className="od-cta-text">여러분이 방문한 장소의 접근성 정보가 다른 사람들에게 큰 도움이 됩니다</p>
          <div className="od-cta-buttons">
            <button className="od-cta-primary">장소 등록</button>
            <button className="od-cta-secondary">리뷰 작성</button>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="od-info">
        <h2 className="od-section-title">프로젝트 소개</h2>
        <div className="od-info-grid">
          <div className="od-info-card">
            <div className="od-info-icon">🎯</div>
            <h3 className="od-info-title">심리적 장벽 해소</h3>
            <p className="od-info-text">접근성 정보 부족으로 인한 외출 두려움 해소</p>
          </div>
          <div className="od-info-card">
            <div className="od-info-icon">🤝</div>
            <h3 className="od-info-title">커뮤니티 기반</h3>
            <p className="od-info-text">실제 사용자 경험 기반의 신뢰할 수 있는 정보</p>
          </div>
          <div className="od-info-card">
            <div className="od-info-icon">🌍</div>
            <h3 className="od-info-title">인식 확산</h3>
            <p className="od-info-text">접근성 문제 가시화로 사회적 변화 촉진</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="od-footer">
        <p className="od-footer-text">서울대학교 정보문화학 프로젝트</p>
        <p className="od-footer-subtext">
          휠체어 사용자들의 실제 니즈를 반영하여 더 포용적인 사회를 만듭니다
        </p>
      </footer>
    </div>
  );
}

export default OurDrama;
