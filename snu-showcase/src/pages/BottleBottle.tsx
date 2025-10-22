import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BottleBottle.css';

function BottleBottle() {
  const navigate = useNavigate();

  const achievements = [
    { id: 1, title: '첫 시작', description: '첫 다회용컵 사용', icon: '🌱', unlocked: true },
    { id: 2, title: '1주일 연속', description: '7일 연속 사용', icon: '🔥', unlocked: true },
    { id: 3, title: '환경 수호자', description: '50회 사용 달성', icon: '🌍', unlocked: true },
    { id: 4, title: '1개월 챌린지', description: '30일 연속 사용', icon: '⭐', unlocked: false },
    { id: 5, title: '플라스틱 제로', description: '100회 사용 달성', icon: '🏆', unlocked: false },
    { id: 6, title: '커뮤니티 리더', description: '친구 10명 초대', icon: '👥', unlocked: false }
  ];

  const weeklyStats = [
    { day: '월', used: true },
    { day: '화', used: true },
    { day: '수', used: true },
    { day: '목', used: true },
    { day: '금', used: true },
    { day: '토', used: false },
    { day: '일', used: false }
  ];

  const challenges = [
    { id: 1, title: '이번 주 5회 사용하기', progress: 5, total: 5, completed: true },
    { id: 2, title: '친구와 함께 카페 방문', progress: 1, total: 3, completed: false },
    { id: 3, title: '새로운 카페 탐험하기', progress: 2, total: 5, completed: false }
  ];

  return (
    <div className="bottle-bottle-page">
      {/* Navigation Header */}
      <header className="bb-header">
        <button onClick={() => navigate('/')} className="back-button">
          ← 홈으로
        </button>
        <h1>보들보틀</h1>
        <div className="header-spacer"></div>
      </header>

      {/* Hero Section */}
      <section className="bb-hero">
        <div className="hero-content">
          <div className="hero-icon">🌿</div>
          <h2>다회용컵 사용 습관화 앱</h2>
          <p>즐거운 제로웨이스트 실천</p>
          <div className="hero-tags">
            <span className="tag">환경</span>
            <span className="tag">습관형성</span>
            <span className="tag">게이미피케이션</span>
          </div>
        </div>
      </section>

      {/* Main Stats Dashboard */}
      <section className="bb-section">
        <h3 className="section-title">나의 환경 기여도</h3>
        <div className="stats-grid">
          <div className="stat-card highlight">
            <div className="stat-icon">🔥</div>
            <div className="stat-info">
              <div className="stat-number">23</div>
              <div className="stat-label">연속 사용일</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">♻️</div>
            <div className="stat-info">
              <div className="stat-number">47</div>
              <div className="stat-label">총 사용 횟수</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🌊</div>
            <div className="stat-info">
              <div className="stat-number">2.3kg</div>
              <div className="stat-label">플라스틱 절감</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🌲</div>
            <div className="stat-info">
              <div className="stat-number">12</div>
              <div className="stat-label">나무 심기 효과</div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Tracker */}
      <section className="bb-section">
        <h3 className="section-title">이번 주 사용 기록</h3>
        <div className="weekly-tracker">
          {weeklyStats.map((stat, index) => (
            <div key={index} className={`day-item ${stat.used ? 'used' : ''}`}>
              <div className="day-label">{stat.day}</div>
              <div className="day-indicator">
                {stat.used ? '✓' : '○'}
              </div>
            </div>
          ))}
        </div>
        <div className="weekly-summary">
          <p>이번 주 <strong className="highlight-text">5일</strong> 사용 중! 🎉</p>
        </div>
      </section>

      {/* Achievements */}
      <section className="bb-section">
        <h3 className="section-title">달성한 업적</h3>
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-info">
                <div className="achievement-title">{achievement.title}</div>
                <div className="achievement-description">{achievement.description}</div>
              </div>
              {achievement.unlocked && <div className="unlock-badge">✓</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section className="bb-section">
        <h3 className="section-title">진행 중인 챌린지</h3>
        <div className="challenges-list">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="challenge-card">
              <div className="challenge-header">
                <div className="challenge-title">{challenge.title}</div>
                <div className={`challenge-status ${challenge.completed ? 'completed' : ''}`}>
                  {challenge.completed ? '완료!' : `${challenge.progress}/${challenge.total}`}
                </div>
              </div>
              <div className="challenge-progress-bar">
                <div
                  className="challenge-progress-fill"
                  style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="bb-section">
        <h3 className="section-title">커뮤니티</h3>
        <div className="community-stats">
          <div className="community-card">
            <div className="community-icon">👥</div>
            <div className="community-info">
              <div className="community-number">1,247</div>
              <div className="community-label">함께하는 사용자</div>
            </div>
          </div>
          <div className="community-card">
            <div className="community-icon">🌍</div>
            <div className="community-info">
              <div className="community-number">32.4톤</div>
              <div className="community-label">전체 플라스틱 절감</div>
            </div>
          </div>
        </div>
        <div className="leaderboard">
          <div className="leaderboard-title">이번 주 리더보드</div>
          <div className="leaderboard-items">
            <div className="leaderboard-item">
              <div className="rank gold">1</div>
              <div className="user-name">환경지킴이</div>
              <div className="user-score">42회</div>
            </div>
            <div className="leaderboard-item">
              <div className="rank silver">2</div>
              <div className="user-name">그린워리어</div>
              <div className="user-score">38회</div>
            </div>
            <div className="leaderboard-item highlight">
              <div className="rank bronze">3</div>
              <div className="user-name">나 (에코러버)</div>
              <div className="user-score">35회</div>
            </div>
          </div>
        </div>
      </section>

      {/* Goal Setting */}
      <section className="bb-section">
        <h3 className="section-title">나의 목표</h3>
        <div className="goal-card">
          <div className="goal-header">
            <div className="goal-title">월간 목표: 50회 사용하기</div>
            <div className="goal-percentage">94%</div>
          </div>
          <div className="goal-progress-bar">
            <div className="goal-progress-fill" style={{ width: '94%' }}></div>
          </div>
          <div className="goal-footer">
            <span>47 / 50회</span>
            <span className="goal-remaining">3회 남음!</span>
          </div>
        </div>
        <div className="goal-message">
          <p>🎯 조금만 더 힘내세요! 목표까지 거의 다 왔어요!</p>
        </div>
      </section>

      {/* Impact Visualization */}
      <section className="bb-section">
        <h3 className="section-title">나의 환경 영향</h3>
        <div className="impact-cards">
          <div className="impact-card">
            <div className="impact-visual">🥤</div>
            <div className="impact-stat">47개</div>
            <div className="impact-label">일회용 컵 절약</div>
          </div>
          <div className="impact-card">
            <div className="impact-visual">💧</div>
            <div className="impact-stat">235L</div>
            <div className="impact-label">물 절약</div>
          </div>
          <div className="impact-card">
            <div className="impact-visual">⚡</div>
            <div className="impact-stat">14kWh</div>
            <div className="impact-label">에너지 절약</div>
          </div>
        </div>
        <div className="impact-comparison">
          <p>
            이는 <strong className="highlight-text">차나무 12그루</strong>를 심은 것과
            같은 환경 효과입니다! 🌳
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bb-cta">
        <div className="cta-content">
          <h3>지금 시작하세요!</h3>
          <p>작은 습관이 큰 변화를 만듭니다</p>
          <button className="cta-button">다회용컵 사용 기록하기</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bb-footer">
        <p>서울대학교 정보문화학 프로젝트</p>
        <p className="footer-subtitle">환경을 생각하는 습관형성 솔루션</p>
      </footer>
    </div>
  );
}

export default BottleBottle;
