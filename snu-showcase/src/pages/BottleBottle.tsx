import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BottleBottle.css';

function BottleBottle() {
  const navigate = useNavigate();

  const achievements = [
    { id: 1, title: '첫 시작', description: '첫 다회용컵 사용', icon: '🌱', unlocked: true, xp: 10 },
    { id: 2, title: '1주일 연속', description: '7일 연속 사용', icon: '🔥', unlocked: true, xp: 50 },
    { id: 3, title: '환경 수호자', description: '50회 사용 달성', icon: '🌍', unlocked: true, xp: 100 },
    { id: 4, title: '1개월 챌린지', description: '30일 연속 사용', icon: '⭐', unlocked: false, xp: 200 },
    { id: 5, title: '플라스틱 제로', description: '100회 사용 달성', icon: '🏆', unlocked: false, xp: 500 },
    { id: 6, title: '커뮤니티 리더', description: '친구 10명 초대', icon: '👥', unlocked: false, xp: 150 }
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
    { id: 1, title: '이번 주 5회 사용하기', progress: 5, total: 5, completed: true, xp: 50 },
    { id: 2, title: '친구와 함께 카페 방문', progress: 1, total: 3, completed: false, xp: 30 },
    { id: 3, title: '새로운 카페 탐험하기', progress: 2, total: 5, completed: false, xp: 75 }
  ];

  const leaderboardData = [
    { rank: 1, name: '환경지킴이', score: 42, avatar: '🦸' },
    { rank: 2, name: '그린워리어', score: 38, avatar: '🌟' },
    { rank: 3, name: '에코러버', score: 35, avatar: '💚', isMe: true }
  ];

  return (
    <div className="bottle-bottle-page">
      {/* Fixed Top Navigation */}
      <header className="bb-header">
        <button onClick={() => navigate('/')} className="bb-back-btn">
          <span className="back-arrow">←</span>
        </button>
        <div className="bb-header-center">
          <div className="bb-logo">보들보틀</div>
        </div>
        <div className="bb-header-right">
          <div className="bb-level-badge">Lv 7</div>
        </div>
      </header>

      {/* XP Progress Banner */}
      <section className="bb-xp-banner">
        <div className="xp-info">
          <div className="xp-label">레벨 7</div>
          <div className="xp-numbers">470 / 500 XP</div>
        </div>
        <div className="xp-bar-container">
          <div className="xp-bar-fill" style={{ width: '94%' }}></div>
        </div>
      </section>

      {/* Daily Streak Section */}
      <section className="bb-streak-section">
        <div className="streak-main">
          <div className="streak-flame">🔥</div>
          <div className="streak-info">
            <div className="streak-number">23</div>
            <div className="streak-label">일 연속 기록</div>
          </div>
        </div>
        <div className="streak-calendar">
          {weeklyStats.map((stat, index) => (
            <div key={index} className={`streak-day ${stat.used ? 'completed' : 'empty'}`}>
              <div className="streak-day-label">{stat.day}</div>
              <div className="streak-day-dot"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="bb-quick-stats">
        <div className="quick-stat-card primary">
          <div className="quick-stat-icon">♻️</div>
          <div className="quick-stat-number">47</div>
          <div className="quick-stat-label">총 사용</div>
        </div>
        <div className="quick-stat-card">
          <div className="quick-stat-icon">🌊</div>
          <div className="quick-stat-number">2.3kg</div>
          <div className="quick-stat-label">플라스틱 절감</div>
        </div>
        <div className="quick-stat-card">
          <div className="quick-stat-icon">🌲</div>
          <div className="quick-stat-number">12</div>
          <div className="quick-stat-label">나무 효과</div>
        </div>
      </section>

      {/* Active Challenges */}
      <section className="bb-section">
        <div className="section-header">
          <h2 className="section-title">오늘의 챌린지</h2>
          <div className="section-count">{challenges.length}</div>
        </div>
        <div className="challenge-stack">
          {challenges.map((challenge) => (
            <div key={challenge.id} className={`challenge-item ${challenge.completed ? 'completed' : ''}`}>
              <div className="challenge-left">
                <div className="challenge-checkbox">
                  {challenge.completed && <span className="check-mark">✓</span>}
                </div>
                <div className="challenge-content">
                  <div className="challenge-name">{challenge.title}</div>
                  <div className="challenge-reward">+{challenge.xp} XP</div>
                </div>
              </div>
              <div className="challenge-right">
                <div className="challenge-progress-circle">
                  <span className="progress-text">{challenge.progress}/{challenge.total}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievement Showcase */}
      <section className="bb-section">
        <div className="section-header">
          <h2 className="section-title">업적</h2>
          <div className="section-count">{achievements.filter(a => a.unlocked).length}/{achievements.length}</div>
        </div>
        <div className="achievement-showcase">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`achievement-tile ${achievement.unlocked ? 'unlocked' : 'locked'}`}
            >
              <div className="achievement-tile-icon">{achievement.icon}</div>
              <div className="achievement-tile-name">{achievement.title}</div>
              {achievement.unlocked && (
                <div className="achievement-xp-badge">+{achievement.xp} XP</div>
              )}
              {!achievement.unlocked && (
                <div className="achievement-lock">🔒</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="bb-section">
        <div className="section-header">
          <h2 className="section-title">이번 주 순위</h2>
          <div className="leaderboard-prize">🏆</div>
        </div>
        <div className="leaderboard-list">
          {leaderboardData.map((user) => (
            <div
              key={user.rank}
              className={`leaderboard-row ${user.isMe ? 'is-me' : ''} rank-${user.rank}`}
            >
              <div className="leaderboard-rank">
                <div className="rank-number">{user.rank}</div>
              </div>
              <div className="leaderboard-avatar">{user.avatar}</div>
              <div className="leaderboard-name">{user.name}</div>
              <div className="leaderboard-score">{user.score}회</div>
            </div>
          ))}
        </div>
        <div className="leaderboard-footer">
          <div className="community-total">
            <span className="community-icon">👥</span>
            <span className="community-text">1,247명이 함께하고 있어요</span>
          </div>
        </div>
      </section>

      {/* Monthly Goal */}
      <section className="bb-section">
        <div className="section-header">
          <h2 className="section-title">월간 목표</h2>
          <div className="goal-percent">94%</div>
        </div>
        <div className="goal-box">
          <div className="goal-box-header">
            <div className="goal-icon">🎯</div>
            <div className="goal-title">50회 사용하기</div>
          </div>
          <div className="goal-progress-track">
            <div className="goal-progress-fill-track" style={{ width: '94%' }}></div>
          </div>
          <div className="goal-stats">
            <div className="goal-current">47 / 50회</div>
            <div className="goal-remaining">3회 남음</div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bb-section bb-impact-section">
        <div className="section-header">
          <h2 className="section-title">나의 환경 기여</h2>
        </div>
        <div className="impact-grid">
          <div className="impact-box">
            <div className="impact-emoji">🥤</div>
            <div className="impact-value">47개</div>
            <div className="impact-desc">일회용 컵 절약</div>
          </div>
          <div className="impact-box">
            <div className="impact-emoji">💧</div>
            <div className="impact-value">235L</div>
            <div className="impact-desc">물 절약</div>
          </div>
          <div className="impact-box">
            <div className="impact-emoji">⚡</div>
            <div className="impact-value">14kWh</div>
            <div className="impact-desc">에너지 절약</div>
          </div>
        </div>
        <div className="impact-summary">
          차나무 12그루를 심은 효과입니다 🌳
        </div>
      </section>

      {/* CTA Button */}
      <section className="bb-cta-section">
        <button className="bb-cta-btn">
          <span className="cta-icon">✓</span>
          <span className="cta-text">오늘의 사용 기록하기</span>
        </button>
      </section>

      {/* Footer */}
      <footer className="bb-footer">
        <div className="footer-text">서울대학교 정보문화학 프로젝트</div>
        <div className="footer-subtext">환경을 생각하는 습관형성 솔루션</div>
      </footer>
    </div>
  );
}

export default BottleBottle;
