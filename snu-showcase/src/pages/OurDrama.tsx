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
    <div className="container">
      <header className="our-drama-header">
        <button onClick={() => navigate('/')} className="back-button">
          ← 목록으로
        </button>
        <div className="header-content">
          <h1>우리들의 사부작 드라마</h1>
          <p className="subtitle">휠체어 사용자를 위한 장소 공유 플랫폼</p>
          <div className="header-tags">
            <span className="tag">접근성 정보</span>
            <span className="tag">커뮤니티 리뷰</span>
            <span className="tag">실시간 공유</span>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2>모두가 접근 가능한 세상을 만듭니다</h2>
          <p>휠체어 사용자들이 직접 공유하는 접근성 정보로<br />더 자유로운 이동을 경험하세요</p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">1,234</div>
              <div className="stat-label">등록된 장소</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3,567</div>
              <div className="stat-label">사용자 리뷰</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8,901</div>
              <div className="stat-label">공유된 사진</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">주요 기능</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3>위치 기반 검색</h3>
            <p>현재 위치에서 가까운 접근 가능한 장소를 실시간으로 찾아보세요</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">♿</div>
            <h3>상세 접근성 정보</h3>
            <p>경사로, 엘리베이터, 장애인 화장실 등 필수 접근성 시설 정보 제공</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>사용자 리뷰</h3>
            <p>실제 휠체어 사용자들의 경험담과 평가를 공유하고 확인하세요</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📸</div>
            <h3>사진 공유</h3>
            <p>경사로, 입구, 화장실 등의 실제 사진으로 미리 확인 가능</p>
          </div>
        </div>
      </section>

      <section className="locations-section">
        <div className="section-header">
          <h2 className="section-title">주변 추천 장소</h2>
          <div className="filter-buttons">
            <button className="filter-btn active">전체</button>
            <button className="filter-btn">카페</button>
            <button className="filter-btn">음식점</button>
            <button className="filter-btn">문화시설</button>
          </div>
        </div>

        <div className="locations-grid">
          {locations.map((location) => (
            <div key={location.id} className="location-card">
              <div className="location-image">{location.image}</div>
              <div className="location-info">
                <div className="location-header">
                  <h3>{location.name}</h3>
                  <span className="distance">{location.distance}</span>
                </div>
                <p className="category">{location.category}</p>
                <div className="rating-section">
                  <span className="rating">⭐ {location.rating}</span>
                  <span className="review-count">리뷰 {location.reviews}개</span>
                </div>
                <div className="accessibility-icons">
                  {location.hasRamp && (
                    <div className="icon-badge" title="경사로">
                      <span>🛤️</span>
                    </div>
                  )}
                  {location.hasElevator && (
                    <div className="icon-badge" title="엘리베이터">
                      <span>🛗</span>
                    </div>
                  )}
                  {location.hasAccessibleBathroom && (
                    <div className="icon-badge" title="장애인 화장실">
                      <span>♿</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="reviews-section">
        <h2 className="section-title">최근 리뷰</h2>
        <div className="reviews-list">
          {recentReviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="user-info">
                  <div className="user-avatar">{review.user[0]}</div>
                  <div>
                    <div className="user-name">{review.user}</div>
                    <div className="review-location">{review.location}</div>
                  </div>
                </div>
                <div className="review-meta">
                  <div className="review-rating">{'⭐'.repeat(review.rating)}</div>
                  <div className="review-date">{review.date}</div>
                </div>
              </div>
              <p className="review-comment">{review.comment}</p>
              <div className="review-footer">
                <span className="photo-count">📷 사진 {review.photos}장</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="community-section">
        <div className="community-content">
          <h2>함께 만드는 접근성 지도</h2>
          <p>여러분의 경험이 누군가의 자유로운 이동을 돕습니다</p>
          <div className="cta-buttons">
            <button className="cta-button primary">장소 등록하기</button>
            <button className="cta-button secondary">리뷰 작성하기</button>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <h2 className="section-title">프로젝트 목표</h2>
        <div className="impact-grid">
          <div className="impact-card">
            <h3>🎯 심리적 장벽 해소</h3>
            <p>접근성 정보 부족으로 인한 외출 두려움을 해소하고, 휠체어 사용자들의 자신감 있는 이동을 지원합니다.</p>
          </div>
          <div className="impact-card">
            <h3>🤝 커뮤니티 기반 정보</h3>
            <p>실제 사용자들의 경험을 바탕으로 한 신뢰할 수 있는 정보를 제공하여, 더 정확한 의사결정을 돕습니다.</p>
          </div>
          <div className="impact-card">
            <h3>🌍 접근성 인식 확산</h3>
            <p>사진과 리뷰를 통해 접근성 문제를 가시화하고, 더 많은 장소가 접근 가능하도록 사회적 변화를 만들어갑니다.</p>
          </div>
        </div>
      </section>

      <footer className="project-footer">
        <p>서울대학교 정보문화학 프로젝트</p>
        <p className="footer-note">
          이 프로젝트는 휠체어 사용자들의 실제 니즈를 반영하여<br />
          더 포용적인 사회를 만들기 위해 기획되었습니다.
        </p>
      </footer>
    </div>
  );
}

export default OurDrama;
