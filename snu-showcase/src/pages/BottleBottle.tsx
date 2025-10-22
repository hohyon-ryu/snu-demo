import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BottleBottle.css';

function BottleBottle() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<'challenges' | 'diary' | 'friends'>('challenges');

  // Character/Mascot data - core to the gamification experience
  const characterData = {
    name: '보들이',
    level: 7,
    currentXp: 470,
    maxXp: 500,
    mood: 'happy',
    message: '오늘도 환경을 위한 작은 실천, 함께 해요!'
  };

  // Enhanced achievements with more detailed progression
  const achievements = [
    { id: 1, title: '첫 시작', description: '첫 다회용컵 사용', icon: '🌱', unlocked: true, xp: 10, category: 'beginner' },
    { id: 2, title: '1주일 연속', description: '7일 연속 사용', icon: '🔥', unlocked: true, xp: 50, category: 'streak' },
    { id: 3, title: '환경 수호자', description: '50회 사용 달성', icon: '🌍', unlocked: true, xp: 100, category: 'milestone' },
    { id: 4, title: '카페 탐험가', description: '5개 다른 카페 방문', icon: '☕', unlocked: true, xp: 75, category: 'exploration' },
    { id: 5, title: '1개월 챌린지', description: '30일 연속 사용', icon: '⭐', unlocked: false, xp: 200, category: 'streak' },
    { id: 6, title: '플라스틱 제로', description: '100회 사용 달성', icon: '🏆', unlocked: false, xp: 500, category: 'milestone' },
    { id: 7, title: '커뮤니티 리더', description: '친구 10명 초대', icon: '👥', unlocked: false, xp: 150, category: 'social' },
    { id: 8, title: '일기 작가', description: '30개 일기 작성', icon: '📝', unlocked: false, xp: 120, category: 'diary' },
    { id: 9, title: '얼리버드', description: '오전 8시 전 5회 사용', icon: '🌅', unlocked: false, xp: 80, category: 'special' }
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

  // Realistic Korean cafe names and mission data
  const challenges = [
    { id: 1, title: '이번 주 5회 사용하기', description: '주 5회 다회용컵 사용', progress: 5, total: 5, completed: true, xp: 50, type: 'weekly' },
    { id: 2, title: '친구와 함께 스타벅스 방문', description: '친구 초대해서 함께 카페 가기', progress: 1, total: 3, completed: false, xp: 30, type: 'social', cafe: '스타벅스' },
    { id: 3, title: '신촌 카페 탐험하기', description: '5개의 다른 카페에서 사용', progress: 2, total: 5, completed: false, xp: 75, type: 'exploration', location: '신촌' },
    { id: 4, title: '텀블러 영수증 인증', description: '오늘 사용한 텀블러 영수증 찍기', progress: 0, total: 1, completed: false, xp: 15, type: 'daily' },
    { id: 5, title: '일기 작성하기', description: '오늘의 제로웨이스트 경험 기록', progress: 0, total: 1, completed: false, xp: 20, type: 'diary' }
  ];

  // Realistic Korean cafe data
  const visitedCafes = [
    { name: '스타벅스 신촌점', visits: 12, lastVisit: '2일 전', discount: '300원 할인' },
    { name: '투썸플레이스 이대점', visits: 8, lastVisit: '4일 전', discount: '500원 할인' },
    { name: '커피빈 홍대점', visits: 5, lastVisit: '1주일 전', discount: '300원 할인' },
    { name: '블루보틀 성수점', visits: 3, lastVisit: '2주일 전', discount: '없음' },
    { name: '폴바셋 강남점', visits: 7, lastVisit: '5일 전', discount: '400원 할인' }
  ];

  // Community/Leaderboard data with realistic Korean names
  const leaderboardData = [
    { rank: 1, name: '에코워리어_지수', score: 42, avatar: '🦸', streak: 28, region: '서울 서대문구' },
    { rank: 2, name: '그린라이프_민준', score: 38, avatar: '🌟', streak: 21, region: '서울 마포구' },
    { rank: 3, name: '에코러버_유진', score: 35, avatar: '💚', isMe: true, streak: 23, region: '서울 신촌' },
    { rank: 4, name: '제로웨이스트_서연', score: 32, avatar: '🌿', streak: 19, region: '서울 홍대' },
    { rank: 5, name: '플라스틱프리_재훈', score: 29, avatar: '♻️', streak: 15, region: '서울 강남구' }
  ];

  // Friend activity data
  const friendsActivity = [
    { name: '지수', action: '스타벅스에서 텀블러 사용', time: '10분 전', likes: 5, avatar: '🦸' },
    { name: '민준', action: '7일 연속 달성!', time: '1시간 전', likes: 12, avatar: '🌟' },
    { name: '서연', action: '새로운 카페 탐험 완료', time: '2시간 전', likes: 8, avatar: '🌿' }
  ];

  // Diary entries
  const diaryEntries = [
    {
      id: 1,
      date: '2025-10-22',
      cafe: '스타벅스 신촌점',
      content: '오늘도 텀블러 챙겨서 카페 다녀왔어요! 할인도 받고 기분도 좋네요 😊',
      photo: true,
      likes: 7,
      comments: 3
    },
    {
      id: 2,
      date: '2025-10-21',
      cafe: '투썸플레이스 이대점',
      content: '친구들이랑 같이 다회용컵 쓰니까 더 뿌듯해요!',
      photo: false,
      likes: 12,
      comments: 5
    }
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
          <div className="bb-level-badge">Lv {characterData.level}</div>
        </div>
      </header>

      {/* XP Progress Banner with Character */}
      <section className="bb-xp-banner">
        <div className="xp-info">
          <div className="xp-label">레벨 {characterData.level}</div>
          <div className="xp-numbers">{characterData.currentXp} / {characterData.maxXp} XP</div>
        </div>
        <div className="xp-bar-container">
          <div className="xp-bar-fill" style={{ width: `${(characterData.currentXp / characterData.maxXp) * 100}%` }}></div>
        </div>
        <div className="character-message">
          <span className="character-icon">🌱</span>
          <span className="character-text">{characterData.message}</span>
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

      {/* Tab Navigation */}
      <section className="bb-tab-section">
        <div className="tab-nav">
          <button
            className={`tab-btn ${selectedTab === 'challenges' ? 'active' : ''}`}
            onClick={() => setSelectedTab('challenges')}
          >
            📋 미션
          </button>
          <button
            className={`tab-btn ${selectedTab === 'diary' ? 'active' : ''}`}
            onClick={() => setSelectedTab('diary')}
          >
            📝 일기
          </button>
          <button
            className={`tab-btn ${selectedTab === 'friends' ? 'active' : ''}`}
            onClick={() => setSelectedTab('friends')}
          >
            👥 친구
          </button>
        </div>
      </section>

      {/* Active Challenges Tab */}
      {selectedTab === 'challenges' && (
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
                    <div className="challenge-description">{challenge.description}</div>
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
      )}

      {/* Diary Tab */}
      {selectedTab === 'diary' && (
        <section className="bb-section">
          <div className="section-header">
            <h2 className="section-title">나의 일기</h2>
            <button className="add-diary-btn">+ 작성</button>
          </div>
          <div className="diary-stack">
            {diaryEntries.map((entry) => (
              <div key={entry.id} className="diary-card">
                <div className="diary-header">
                  <span className="diary-date">{entry.date}</span>
                  <span className="diary-cafe">📍 {entry.cafe}</span>
                </div>
                <div className="diary-content">{entry.content}</div>
                {entry.photo && (
                  <div className="diary-photo-placeholder">
                    📷 사진 첨부됨
                  </div>
                )}
                <div className="diary-footer">
                  <span className="diary-likes">❤️ {entry.likes}</span>
                  <span className="diary-comments">💬 {entry.comments}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Friends Tab */}
      {selectedTab === 'friends' && (
        <section className="bb-section">
          <div className="section-header">
            <h2 className="section-title">친구 활동</h2>
            <button className="invite-friend-btn">+ 초대</button>
          </div>
          <div className="friends-activity-stack">
            {friendsActivity.map((friend, index) => (
              <div key={index} className="friend-activity-card">
                <div className="friend-avatar">{friend.avatar}</div>
                <div className="friend-activity-content">
                  <div className="friend-name">{friend.name}</div>
                  <div className="friend-action">{friend.action}</div>
                  <div className="friend-time">{friend.time}</div>
                </div>
                <div className="friend-likes">❤️ {friend.likes}</div>
              </div>
            ))}
          </div>
        </section>
      )}

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

      {/* Visited Cafes Section */}
      <section className="bb-section">
        <div className="section-header">
          <h2 className="section-title">방문한 카페</h2>
          <div className="section-count">{visitedCafes.length}</div>
        </div>
        <div className="cafe-grid">
          {visitedCafes.slice(0, 3).map((cafe, index) => (
            <div key={index} className="cafe-card">
              <div className="cafe-icon">☕</div>
              <div className="cafe-name">{cafe.name}</div>
              <div className="cafe-visits">{cafe.visits}회 방문</div>
              <div className="cafe-discount">{cafe.discount}</div>
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
              <div className="leaderboard-info">
                <div className="leaderboard-name">{user.name}</div>
                <div className="leaderboard-region">{user.region}</div>
              </div>
              <div className="leaderboard-stats">
                <div className="leaderboard-score">{user.score}회</div>
                <div className="leaderboard-streak">🔥 {user.streak}일</div>
              </div>
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
