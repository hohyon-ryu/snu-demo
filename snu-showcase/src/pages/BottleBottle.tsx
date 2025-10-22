import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BottleBottle.css';

function BottleBottle() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<'challenges' | 'diary' | 'friends'>('challenges');
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [pulseCharacter, setPulseCharacter] = useState(true);

  // Character/Mascot data - core to the gamification experience
  const characterData = {
    name: '보들이',
    level: 7,
    currentXp: 470,
    maxXp: 500,
    mood: 'happy',
    message: '오늘도 환경을 위한 작은 실천, 함께 해요!',
    expression: '🌱'
  };

  // Enhanced achievements with more detailed progression
  const achievements = [
    { id: 1, title: '첫 시작', description: '첫 다회용컵 사용', icon: '🌱', unlocked: true, xp: 10, category: 'beginner', rarity: 'common' },
    { id: 2, title: '1주일 연속', description: '7일 연속 사용', icon: '🔥', unlocked: true, xp: 50, category: 'streak', rarity: 'common' },
    { id: 3, title: '환경 수호자', description: '50회 사용 달성', icon: '🌍', unlocked: true, xp: 100, category: 'milestone', rarity: 'rare' },
    { id: 4, title: '카페 탐험가', description: '5개 다른 카페 방문', icon: '☕', unlocked: true, xp: 75, category: 'exploration', rarity: 'rare' },
    { id: 5, title: '1개월 챌린지', description: '30일 연속 사용', icon: '⭐', unlocked: false, xp: 200, category: 'streak', rarity: 'epic' },
    { id: 6, title: '플라스틱 제로', description: '100회 사용 달성', icon: '🏆', unlocked: false, xp: 500, category: 'milestone', rarity: 'legendary' },
    { id: 7, title: '커뮤니티 리더', description: '친구 10명 초대', icon: '👥', unlocked: false, xp: 150, category: 'social', rarity: 'epic' },
    { id: 8, title: '일기 작가', description: '30개 일기 작성', icon: '📝', unlocked: false, xp: 120, category: 'diary', rarity: 'rare' },
    { id: 9, title: '얼리버드', description: '오전 8시 전 5회 사용', icon: '🌅', unlocked: false, xp: 80, category: 'special', rarity: 'rare' },
    { id: 10, title: '주말 워리어', description: '주말에도 10회 사용', icon: '🎖️', unlocked: false, xp: 90, category: 'special', rarity: 'rare' },
    { id: 11, title: '환경 전도사', description: '친구 5명과 같이 인증', icon: '🌿', unlocked: false, xp: 130, category: 'social', rarity: 'epic' },
    { id: 12, title: '완벽주의자', description: '한 달 미션 100% 완료', icon: '💯', unlocked: false, xp: 250, category: 'special', rarity: 'legendary' }
  ];

  const weeklyStats = [
    { day: '월', used: true, date: '10/17' },
    { day: '화', used: true, date: '10/18' },
    { day: '수', used: true, date: '10/19' },
    { day: '목', used: true, date: '10/20' },
    { day: '금', used: true, date: '10/21' },
    { day: '토', used: false, date: '10/22' },
    { day: '일', used: false, date: '10/23' }
  ];

  // Realistic Korean cafe names and mission data
  const challenges = [
    {
      id: 1,
      title: '이번 주 5회 사용하기',
      description: '주 5회 다회용컵 사용',
      progress: 5,
      total: 5,
      completed: true,
      xp: 50,
      type: 'weekly',
      emoji: '📅'
    },
    {
      id: 2,
      title: '친구와 함께 스타벅스 방문',
      description: '친구 초대해서 함께 카페 가기',
      progress: 1,
      total: 3,
      completed: false,
      xp: 30,
      type: 'social',
      cafe: '스타벅스',
      emoji: '👥'
    },
    {
      id: 3,
      title: '신촌 카페 탐험하기',
      description: '5개의 다른 카페에서 사용',
      progress: 2,
      total: 5,
      completed: false,
      xp: 75,
      type: 'exploration',
      location: '신촌',
      emoji: '🗺️'
    },
    {
      id: 4,
      title: '텀블러 영수증 인증',
      description: '오늘 사용한 텀블러 영수증 찍기',
      progress: 0,
      total: 1,
      completed: false,
      xp: 15,
      type: 'daily',
      emoji: '📸'
    },
    {
      id: 5,
      title: '일기 작성하기',
      description: '오늘의 제로웨이스트 경험 기록',
      progress: 0,
      total: 1,
      completed: false,
      xp: 20,
      type: 'diary',
      emoji: '✍️'
    },
    {
      id: 6,
      title: '오전 8시 전 카페 방문',
      description: '아침 일찍 텀블러 챙기기',
      progress: 0,
      total: 1,
      completed: false,
      xp: 25,
      type: 'special',
      emoji: '☀️'
    }
  ];

  // Enhanced Korean cafe data with more details
  const visitedCafes = [
    { name: '스타벅스 신촌점', visits: 12, lastVisit: '2일 전', discount: '300원 할인', rating: 4.5, emoji: '☕', address: '서울 서대문구 신촌로' },
    { name: '투썸플레이스 이대점', visits: 8, lastVisit: '4일 전', discount: '500원 할인', rating: 4.8, emoji: '🍰', address: '서울 서대문구 이화여대길' },
    { name: '커피빈 홍대점', visits: 5, lastVisit: '1주일 전', discount: '300원 할인', rating: 4.3, emoji: '☕', address: '서울 마포구 홍대입구' },
    { name: '블루보틀 성수점', visits: 3, lastVisit: '2주일 전', discount: '없음', rating: 4.9, emoji: '☕', address: '서울 성동구 성수동' },
    { name: '폴바셋 강남점', visits: 7, lastVisit: '5일 전', discount: '400원 할인', rating: 4.4, emoji: '☕', address: '서울 강남구 역삼동' },
    { name: '엔제리너스 신촌점', visits: 6, lastVisit: '3일 전', discount: '300원 할인', rating: 4.2, emoji: '☕', address: '서울 서대문구 창천동' },
    { name: '할리스 이대점', visits: 4, lastVisit: '1주일 전', discount: '200원 할인', rating: 4.1, emoji: '☕', address: '서울 서대문구 대현동' },
    { name: '탐앤탐스 홍대점', visits: 9, lastVisit: '3일 전', discount: '350원 할인', rating: 4.6, emoji: '🍹', address: '서울 마포구 서교동' }
  ];

  // Community/Leaderboard data with realistic Korean names
  const leaderboardData = [
    { rank: 1, name: '에코워리어_지수', score: 42, avatar: '🦸', streak: 28, region: '서울 서대문구', level: 9, badges: 15 },
    { rank: 2, name: '그린라이프_민준', score: 38, avatar: '🌟', streak: 21, region: '서울 마포구', level: 8, badges: 12 },
    { rank: 3, name: '에코러버_유진', score: 35, avatar: '💚', isMe: true, streak: 23, region: '서울 신촌', level: 7, badges: 9 },
    { rank: 4, name: '제로웨이스트_서연', score: 32, avatar: '🌿', streak: 19, region: '서울 홍대', level: 7, badges: 10 },
    { rank: 5, name: '플라스틱프리_재훈', score: 29, avatar: '♻️', streak: 15, region: '서울 강남구', level: 6, badges: 8 },
    { rank: 6, name: '보틀매니아_하윤', score: 27, avatar: '🌊', streak: 17, region: '서울 성동구', level: 6, badges: 7 },
    { rank: 7, name: '친환경_도현', score: 25, avatar: '🍃', streak: 14, region: '서울 종로구', level: 5, badges: 6 }
  ];

  // Enhanced friend activity data
  const friendsActivity = [
    {
      name: '지수',
      action: '스타벅스에서 텀블러 사용',
      time: '10분 전',
      likes: 5,
      avatar: '🦸',
      cafe: '스타벅스 신촌점',
      hasPhoto: true
    },
    {
      name: '민준',
      action: '7일 연속 달성!',
      time: '1시간 전',
      likes: 12,
      avatar: '🌟',
      achievement: true
    },
    {
      name: '서연',
      action: '새로운 카페 탐험 완료',
      time: '2시간 전',
      likes: 8,
      avatar: '🌿',
      cafe: '블루보틀 성수점'
    },
    {
      name: '하윤',
      action: '일기 작성: 오늘도 텀블러 챙겼어요!',
      time: '3시간 전',
      likes: 6,
      avatar: '🌊',
      hasPhoto: true
    },
    {
      name: '도현',
      action: '친구 3명과 함께 인증 완료',
      time: '5시간 전',
      likes: 15,
      avatar: '🍃',
      isCollaborative: true
    }
  ];

  // Enhanced diary entries
  const diaryEntries = [
    {
      id: 1,
      date: '2025-10-22',
      cafe: '스타벅스 신촌점',
      content: '오늘도 텀블러 챙겨서 카페 다녀왔어요! 할인도 받고 기분도 좋네요 😊 바리스타님이 칭찬해주셔서 더 뿌듯했어요!',
      photo: true,
      likes: 7,
      comments: 3,
      xpEarned: 15,
      tags: ['텀블러', '할인', '스타벅스']
    },
    {
      id: 2,
      date: '2025-10-21',
      cafe: '투썸플레이스 이대점',
      content: '친구들이랑 같이 다회용컵 쓰니까 더 뿌듯해요! 다 같이 환경 보호하는 기분 ✨',
      photo: false,
      likes: 12,
      comments: 5,
      xpEarned: 20,
      tags: ['친구', '다회용컵', '투썸']
    },
    {
      id: 3,
      date: '2025-10-20',
      cafe: '블루보틀 성수점',
      content: '처음 가본 카페에서도 텀블러 사용! 새로운 곳 탐험하는 재미가 있네요 🗺️',
      photo: true,
      likes: 9,
      comments: 2,
      xpEarned: 25,
      tags: ['탐험', '블루보틀', '성수']
    }
  ];

  // Notification reminders
  const todayReminders = [
    { time: '08:00', message: '출근 전 텀블러 챙기셨나요? 🌅', completed: true },
    { time: '12:00', message: '점심 시간! 텀블러로 커피 한잔 어때요? ☕', completed: true },
    { time: '15:00', message: '오후 카페 타임! 텀블러 준비되셨나요? ☕', completed: false },
    { time: '20:00', message: '오늘의 일기를 작성해보세요 📝', completed: false }
  ];

  // Reward system
  const availableRewards = [
    { id: 1, title: '스타벅스 500원 할인', points: 100, icon: '☕', redeemed: false },
    { id: 2, title: '투썸 1000원 할인', points: 200, icon: '🍰', redeemed: true },
    { id: 3, title: '커피빈 무료 사이즈업', points: 150, icon: '⬆️', redeemed: false },
    { id: 4, title: '특별 뱃지 획득', points: 300, icon: '🏅', redeemed: false }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCharacter(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleMissionComplete = (missionId: number) => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="bottle-bottle-page">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="confetti-container">
          {Array.from({ length: 50 }).map((_, i) => (
            <div key={i} className="confetti" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 0.5}s`,
              backgroundColor: ['#4CAF50', '#8BC34A', '#CDDC39', '#FFC107'][Math.floor(Math.random() * 4)]
            }} />
          ))}
        </div>
      )}

      {/* Fixed Top Navigation */}
      <header className="bb-header">
        <button onClick={() => navigate('/')} className="bb-back-btn">
          <span className="back-arrow">←</span>
        </button>
        <div className="bb-header-center">
          <div className="bb-logo">보들보틀</div>
          <div className="bb-logo-subtitle">환경을 생각하는 습관</div>
        </div>
        <div className="bb-header-right">
          <div className="bb-level-badge shine">Lv {characterData.level}</div>
        </div>
      </header>

      {/* XP Progress Banner with Character */}
      <section className="bb-xp-banner">
        <div className="character-showcase">
          <div className={`character-avatar ${pulseCharacter ? 'pulse' : ''}`}>
            {characterData.expression}
          </div>
          <div className="character-name">{characterData.name}</div>
        </div>
        <div className="xp-info">
          <div className="xp-label">레벨 {characterData.level}</div>
          <div className="xp-numbers">{characterData.currentXp} / {characterData.maxXp} XP</div>
        </div>
        <div className="xp-bar-container">
          <div className="xp-bar-fill" style={{ width: `${(characterData.currentXp / characterData.maxXp) * 100}%` }}>
            <div className="xp-bar-shine" />
          </div>
          <div className="xp-bar-notch" style={{ left: '50%' }} />
        </div>
        <div className="character-message bounce">
          <span className="character-bubble">{characterData.message}</span>
        </div>
      </section>

      {/* Daily Streak Section - Enhanced */}
      <section className="bb-streak-section">
        <div className="streak-main">
          <div className="streak-flame animated-flame">🔥</div>
          <div className="streak-info">
            <div className="streak-number">23</div>
            <div className="streak-label">일 연속 기록</div>
            <div className="streak-sublabel">계속 가보자!</div>
          </div>
          <div className="streak-milestone">
            <div className="milestone-text">30일까지 7일 남음!</div>
          </div>
        </div>
        <div className="streak-calendar">
          {weeklyStats.map((stat, index) => (
            <div key={index} className={`streak-day ${stat.used ? 'completed' : 'empty'}`}>
              <div className="streak-day-label">{stat.day}</div>
              <div className="streak-day-dot">
                {stat.used && <span className="check-icon">✓</span>}
              </div>
              <div className="streak-day-date">{stat.date}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Stats Grid - Enhanced */}
      <section className="bb-quick-stats">
        <div className="quick-stat-card primary glow">
          <div className="quick-stat-icon">♻️</div>
          <div className="quick-stat-number counter">47</div>
          <div className="quick-stat-label">총 사용</div>
          <div className="quick-stat-sublabel">이번 달 +12</div>
        </div>
        <div className="quick-stat-card">
          <div className="quick-stat-icon">🌊</div>
          <div className="quick-stat-number">2.3kg</div>
          <div className="quick-stat-label">플라스틱 절감</div>
          <div className="quick-stat-sublabel">지구를 살려요!</div>
        </div>
        <div className="quick-stat-card">
          <div className="quick-stat-icon">🌲</div>
          <div className="quick-stat-number">12</div>
          <div className="quick-stat-label">나무 효과</div>
          <div className="quick-stat-sublabel">그루 상당</div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bb-tab-section">
        <div className="tab-nav">
          <button
            className={`tab-btn ${selectedTab === 'challenges' ? 'active' : ''}`}
            onClick={() => setSelectedTab('challenges')}
          >
            <span className="tab-icon">📋</span>
            <span className="tab-text">미션</span>
            {challenges.filter(c => !c.completed).length > 0 && (
              <span className="tab-badge">{challenges.filter(c => !c.completed).length}</span>
            )}
          </button>
          <button
            className={`tab-btn ${selectedTab === 'diary' ? 'active' : ''}`}
            onClick={() => setSelectedTab('diary')}
          >
            <span className="tab-icon">📝</span>
            <span className="tab-text">일기</span>
          </button>
          <button
            className={`tab-btn ${selectedTab === 'friends' ? 'active' : ''}`}
            onClick={() => setSelectedTab('friends')}
          >
            <span className="tab-icon">👥</span>
            <span className="tab-text">친구</span>
          </button>
        </div>
      </section>

      {/* Active Challenges Tab */}
      {selectedTab === 'challenges' && (
        <>
          <section className="bb-section">
            <div className="section-header">
              <h2 className="section-title">오늘의 챌린지</h2>
              <div className="section-count">{challenges.filter(c => !c.completed).length}/{challenges.length}</div>
            </div>
            <div className="challenge-stack">
              {challenges.map((challenge) => (
                <div key={challenge.id} className={`challenge-item ${challenge.completed ? 'completed' : ''} slide-in`}>
                  <div className="challenge-emoji">{challenge.emoji}</div>
                  <div className="challenge-left">
                    <div className="challenge-checkbox">
                      {challenge.completed && <span className="check-mark">✓</span>}
                    </div>
                    <div className="challenge-content">
                      <div className="challenge-name">{challenge.title}</div>
                      <div className="challenge-description">{challenge.description}</div>
                      <div className="challenge-meta">
                        <span className="challenge-reward">+{challenge.xp} XP</span>
                        {challenge.type && (
                          <span className={`challenge-type type-${challenge.type}`}>
                            {challenge.type === 'daily' && '데일리'}
                            {challenge.type === 'weekly' && '위클리'}
                            {challenge.type === 'social' && '소셜'}
                            {challenge.type === 'exploration' && '탐험'}
                            {challenge.type === 'special' && '스페셜'}
                            {challenge.type === 'diary' && '일기'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="challenge-right">
                    <div className="challenge-progress-circle" style={{
                      background: `conic-gradient(#4CAF50 ${(challenge.progress / challenge.total) * 360}deg, #e0e0e0 0deg)`
                    }}>
                      <div className="progress-inner">
                        <span className="progress-text">{challenge.progress}/{challenge.total}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Today's Reminders */}
          <section className="bb-section">
            <div className="section-header">
              <h2 className="section-title">오늘의 알림</h2>
              <span className="section-icon">🔔</span>
            </div>
            <div className="reminder-list">
              {todayReminders.map((reminder, index) => (
                <div key={index} className={`reminder-item ${reminder.completed ? 'completed' : ''}`}>
                  <div className="reminder-time">{reminder.time}</div>
                  <div className="reminder-message">{reminder.message}</div>
                  {reminder.completed && <span className="reminder-check">✓</span>}
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Diary Tab */}
      {selectedTab === 'diary' && (
        <>
          <section className="bb-section">
            <div className="section-header">
              <h2 className="section-title">나의 일기</h2>
              <button className="add-diary-btn pulse-btn">
                <span className="btn-icon">✍️</span>
                <span>작성</span>
              </button>
            </div>
            <div className="diary-stack">
              {diaryEntries.map((entry) => (
                <div key={entry.id} className="diary-card slide-in">
                  <div className="diary-header">
                    <span className="diary-date">📅 {entry.date}</span>
                    <span className="diary-cafe">📍 {entry.cafe}</span>
                  </div>
                  <div className="diary-content">{entry.content}</div>
                  {entry.photo && (
                    <div className="diary-photo-placeholder">
                      <div className="photo-icon">📷</div>
                      <div className="photo-text">사진 첨부됨</div>
                    </div>
                  )}
                  {entry.tags && entry.tags.length > 0 && (
                    <div className="diary-tags">
                      {entry.tags.map((tag, idx) => (
                        <span key={idx} className="diary-tag">#{tag}</span>
                      ))}
                    </div>
                  )}
                  <div className="diary-footer">
                    <div className="diary-stats">
                      <span className="diary-likes">❤️ {entry.likes}</span>
                      <span className="diary-comments">💬 {entry.comments}</span>
                    </div>
                    {entry.xpEarned && (
                      <div className="diary-xp">+{entry.xpEarned} XP</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Monthly Calendar View */}
          <section className="bb-section">
            <div className="section-header">
              <h2 className="section-title">이번 달 기록</h2>
              <span className="month-label">10월</span>
            </div>
            <div className="calendar-grid">
              {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                <div key={day} className={`calendar-day ${day <= 22 ? 'has-entry' : ''} ${day === 22 ? 'today' : ''}`}>
                  <div className="calendar-day-number">{day}</div>
                  {day <= 22 && <div className="calendar-day-dot">🌱</div>}
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Friends Tab */}
      {selectedTab === 'friends' && (
        <>
          <section className="bb-section">
            <div className="section-header">
              <h2 className="section-title">친구 활동</h2>
              <button className="invite-friend-btn pulse-btn">
                <span className="btn-icon">➕</span>
                <span>초대</span>
              </button>
            </div>
            <div className="friends-activity-stack">
              {friendsActivity.map((friend, index) => (
                <div key={index} className="friend-activity-card slide-in">
                  <div className="friend-avatar-wrapper">
                    <div className="friend-avatar">{friend.avatar}</div>
                    {friend.achievement && <div className="achievement-badge">🏆</div>}
                  </div>
                  <div className="friend-activity-content">
                    <div className="friend-name">{friend.name}</div>
                    <div className="friend-action">{friend.action}</div>
                    {friend.cafe && <div className="friend-cafe">📍 {friend.cafe}</div>}
                    <div className="friend-time">⏰ {friend.time}</div>
                  </div>
                  <div className="friend-interaction">
                    <button className="like-btn">
                      <span className="like-icon">❤️</span>
                      <span className="like-count">{friend.likes}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Collaborative Challenges */}
          <section className="bb-section">
            <div className="section-header">
              <h2 className="section-title">친구와 함께</h2>
              <span className="section-icon">🤝</span>
            </div>
            <div className="collaborative-challenges">
              <div className="collab-card">
                <div className="collab-header">
                  <span className="collab-title">친구 3명과 카페 가기</span>
                  <span className="collab-progress">1/3</span>
                </div>
                <div className="collab-participants">
                  <div className="participant">🦸 지수</div>
                  <div className="participant empty">?</div>
                  <div className="participant empty">?</div>
                </div>
                <div className="collab-reward">+50 XP 보상</div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Achievement Showcase */}
      <section className="bb-section">
        <div className="section-header">
          <h2 className="section-title">업적</h2>
          <div className="achievement-progress">
            <span className="achievement-count">{achievements.filter(a => a.unlocked).length}/{achievements.length}</span>
            <span className="achievement-percent">({Math.round((achievements.filter(a => a.unlocked).length / achievements.length) * 100)}%)</span>
          </div>
        </div>
        <div className="achievement-showcase">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`achievement-tile ${achievement.unlocked ? 'unlocked' : 'locked'} rarity-${achievement.rarity}`}
            >
              <div className={`achievement-tile-icon ${achievement.unlocked ? 'shine' : ''}`}>
                {achievement.icon}
              </div>
              <div className="achievement-tile-name">{achievement.title}</div>
              <div className="achievement-tile-desc">{achievement.description}</div>
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
          <div className="section-count">{visitedCafes.length}개</div>
        </div>
        <div className="cafe-list">
          {visitedCafes.map((cafe, index) => (
            <div key={index} className="cafe-card-detail slide-in">
              <div className="cafe-icon-large">{cafe.emoji}</div>
              <div className="cafe-info">
                <div className="cafe-name-large">{cafe.name}</div>
                <div className="cafe-address">{cafe.address}</div>
                <div className="cafe-meta">
                  <span className="cafe-visits">🔄 {cafe.visits}회 방문</span>
                  <span className="cafe-last-visit">⏰ {cafe.lastVisit}</span>
                </div>
                <div className="cafe-benefits">
                  <span className="cafe-discount">{cafe.discount}</span>
                  <span className="cafe-rating">⭐ {cafe.rating}</span>
                </div>
              </div>
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
                <div className={`rank-number ${user.rank <= 3 ? 'medal' : ''}`}>
                  {user.rank === 1 && '🥇'}
                  {user.rank === 2 && '🥈'}
                  {user.rank === 3 && '🥉'}
                  {user.rank > 3 && user.rank}
                </div>
              </div>
              <div className="leaderboard-avatar">{user.avatar}</div>
              <div className="leaderboard-info">
                <div className="leaderboard-name">{user.name}</div>
                <div className="leaderboard-region">📍 {user.region}</div>
                <div className="leaderboard-meta">
                  <span className="leaderboard-level">Lv.{user.level}</span>
                  <span className="leaderboard-badges">🏅 {user.badges}</span>
                </div>
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
            <div className="goal-info">
              <div className="goal-title">50회 사용하기</div>
              <div className="goal-subtitle">10월의 도전</div>
            </div>
          </div>
          <div className="goal-progress-track">
            <div className="goal-progress-fill-track" style={{ width: '94%' }}>
              <div className="goal-progress-shine" />
            </div>
          </div>
          <div className="goal-stats">
            <div className="goal-current">47 / 50회</div>
            <div className="goal-remaining">3회만 더!</div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="bb-section">
        <div className="section-header">
          <h2 className="section-title">리워드</h2>
          <div className="points-balance">💎 450 포인트</div>
        </div>
        <div className="rewards-grid">
          {availableRewards.map((reward) => (
            <div key={reward.id} className={`reward-card ${reward.redeemed ? 'redeemed' : ''}`}>
              <div className="reward-icon">{reward.icon}</div>
              <div className="reward-title">{reward.title}</div>
              <div className="reward-points">{reward.points} 포인트</div>
              {reward.redeemed ? (
                <div className="reward-redeemed">사용 완료</div>
              ) : (
                <button className="reward-claim-btn">교환하기</button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bb-section bb-impact-section">
        <div className="section-header">
          <h2 className="section-title">나의 환경 기여</h2>
          <span className="section-subtitle">지구를 위한 작은 실천</span>
        </div>
        <div className="impact-grid">
          <div className="impact-box glow">
            <div className="impact-emoji">🥤</div>
            <div className="impact-value counter">47개</div>
            <div className="impact-desc">일회용 컵 절약</div>
            <div className="impact-subdesc">이번 달 +12개</div>
          </div>
          <div className="impact-box">
            <div className="impact-emoji">💧</div>
            <div className="impact-value">235L</div>
            <div className="impact-desc">물 절약</div>
            <div className="impact-subdesc">욕조 1개 분량</div>
          </div>
          <div className="impact-box">
            <div className="impact-emoji">⚡</div>
            <div className="impact-value">14kWh</div>
            <div className="impact-desc">에너지 절약</div>
            <div className="impact-subdesc">TV 70시간</div>
          </div>
          <div className="impact-box">
            <div className="impact-emoji">🌡️</div>
            <div className="impact-value">3.2kg</div>
            <div className="impact-desc">CO₂ 감축</div>
            <div className="impact-subdesc">나무 12그루</div>
          </div>
        </div>
        <div className="impact-summary">
          <div className="impact-summary-icon">🌳</div>
          <div className="impact-summary-text">차나무 12그루를 심은 효과입니다</div>
        </div>
        <div className="impact-comparison">
          <div className="comparison-text">우리 팀 전체는 이번 달</div>
          <div className="comparison-value">🌍 584kg CO₂ 감축</div>
          <div className="comparison-desc">나무 146그루 상당</div>
        </div>
      </section>

      {/* CTA Button */}
      <section className="bb-cta-section">
        <button className="bb-cta-btn pulse-btn">
          <span className="cta-icon">✓</span>
          <span className="cta-text">오늘의 사용 기록하기</span>
          <span className="cta-reward">+15 XP</span>
        </button>
      </section>

      {/* Footer */}
      <footer className="bb-footer">
        <div className="footer-text">서울대학교 정보문화학 프로젝트</div>
        <div className="footer-subtext">환경을 생각하는 습관형성 솔루션</div>
        <div className="footer-team">보틀보틀 팀 | 2025-2 창의연구실습</div>
      </footer>
    </div>
  );
}

export default BottleBottle;
