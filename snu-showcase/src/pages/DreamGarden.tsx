import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DreamGarden.css';

interface Activity {
  id: number;
  time: string;
  type: string;
  icon: string;
  description: string;
  images: number;
}

interface Message {
  id: number;
  sender: string;
  role: string;
  content: string;
  timestamp: string;
}

function DreamGarden() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'daily' | 'communication' | 'progress'>('daily');

  const todayActivities: Activity[] = [
    { id: 1, time: '09:00', type: '아침 식사', icon: '🍚', description: '밥 한 공기, 김치찌개, 계란말이', images: 2 },
    { id: 2, time: '10:30', type: '미술 활동', icon: '🎨', description: '수채화 그리기 - 봄 풍경', images: 3 },
    { id: 3, time: '12:00', type: '점심 식사', icon: '🍱', description: '비빔밥, 된장국', images: 1 },
    { id: 4, time: '14:00', type: '산책', icon: '🚶', description: '공원에서 30분 산책', images: 4 },
    { id: 5, time: '15:30', type: '간식', icon: '🍎', description: '사과, 우유', images: 1 },
  ];

  const messages: Message[] = [
    {
      id: 1,
      sender: '김선생님',
      role: '담당교사',
      content: '오늘 미술 시간에 정말 집중해서 그림을 그렸어요. 봄 풍경을 표현하는데 색감이 밝고 좋았습니다.',
      timestamp: '14:30'
    },
    {
      id: 2,
      sender: '어머니',
      role: '보호자',
      content: '감사합니다! 집에서도 그림 그리는 걸 좋아하더라고요. 오늘 그린 작품 사진 공유해주실 수 있을까요?',
      timestamp: '15:00'
    },
    {
      id: 3,
      sender: '이보조교사',
      role: '보조교사',
      content: '산책 시간에 다른 친구들과 즐겁게 놀았어요. 사회성이 많이 좋아지고 있습니다.',
      timestamp: '15:45'
    }
  ];

  const progressData = [
    { category: '사회성', progress: 75, improvement: '+15%' },
    { category: '의사소통', progress: 60, improvement: '+20%' },
    { category: '자립생활', progress: 80, improvement: '+10%' },
    { category: '학습능력', progress: 70, improvement: '+12%' },
  ];

  return (
    <div className="dreamgarden-container">
      {/* Header */}
      <header className="dreamgarden-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← 홈으로
        </button>
        <div className="header-content">
          <h1 className="project-title">꿈뜰꿈뜰 (DreamGarden)</h1>
          <p className="project-subtitle">발달장애인 통합 소통 플랫폼</p>
        </div>
      </header>

      {/* User Profile Section */}
      <section className="user-profile">
        <div className="profile-avatar">👤</div>
        <div className="profile-info">
          <h2>김민수</h2>
          <p>20세 · OO복지센터</p>
        </div>
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-number">127</span>
            <span className="stat-label">누적 활동</span>
          </div>
          <div className="stat">
            <span className="stat-number">15</span>
            <span className="stat-label">관계자</span>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <nav className="tab-navigation">
        <button
          className={`tab ${activeTab === 'daily' ? 'active' : ''}`}
          onClick={() => setActiveTab('daily')}
        >
          📅 일상 기록
        </button>
        <button
          className={`tab ${activeTab === 'communication' ? 'active' : ''}`}
          onClick={() => setActiveTab('communication')}
        >
          💬 소통
        </button>
        <button
          className={`tab ${activeTab === 'progress' ? 'active' : ''}`}
          onClick={() => setActiveTab('progress')}
        >
          📊 발달 현황
        </button>
      </nav>

      {/* Content Area */}
      <div className="content-area">
        {/* Daily Activities Tab */}
        {activeTab === 'daily' && (
          <section className="daily-section">
            <div className="section-header">
              <h3>오늘의 활동</h3>
              <span className="date">2024년 3월 15일 (금)</span>
            </div>
            <div className="activities-timeline">
              {todayActivities.map((activity) => (
                <div key={activity.id} className="activity-card">
                  <div className="activity-time">{activity.time}</div>
                  <div className="activity-content">
                    <div className="activity-header">
                      <span className="activity-icon">{activity.icon}</span>
                      <h4>{activity.type}</h4>
                    </div>
                    <p className="activity-description">{activity.description}</p>
                    <div className="activity-images">
                      {[...Array(activity.images)].map((_, idx) => (
                        <div key={idx} className="image-placeholder">📷</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="add-activity-button">+ 활동 추가하기</button>
          </section>
        )}

        {/* Communication Tab */}
        {activeTab === 'communication' && (
          <section className="communication-section">
            <div className="section-header">
              <h3>소통 메시지</h3>
              <span className="unread-badge">3 new</span>
            </div>
            <div className="messages-container">
              {messages.map((message) => (
                <div key={message.id} className="message-card">
                  <div className="message-header">
                    <div className="sender-info">
                      <span className="sender-name">{message.sender}</span>
                      <span className="sender-role">{message.role}</span>
                    </div>
                    <span className="message-time">{message.timestamp}</span>
                  </div>
                  <p className="message-content">{message.content}</p>
                </div>
              ))}
            </div>
            <div className="message-input-area">
              <input
                type="text"
                placeholder="메시지를 입력하세요..."
                className="message-input"
              />
              <button className="send-button">전송</button>
            </div>
          </section>
        )}

        {/* Progress Tab */}
        {activeTab === 'progress' && (
          <section className="progress-section">
            <div className="section-header">
              <h3>발달 현황</h3>
              <span className="period">최근 3개월</span>
            </div>
            <div className="progress-cards">
              {progressData.map((item, index) => (
                <div key={index} className="progress-card">
                  <div className="progress-header">
                    <h4>{item.category}</h4>
                    <span className="improvement">{item.improvement}</span>
                  </div>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <span className="progress-percentage">{item.progress}%</span>
                </div>
              ))}
            </div>
            <div className="insights-box">
              <h4>💡 전문가 인사이트</h4>
              <ul>
                <li>사회성 발달이 꾸준히 향상되고 있습니다. 그룹 활동 참여도가 높아졌습니다.</li>
                <li>의사소통 능력이 크게 개선되었습니다. AAC 도구 활용이 효과적입니다.</li>
                <li>자립생활 기술이 안정적입니다. 일상생활 루틴을 잘 따르고 있습니다.</li>
              </ul>
            </div>
          </section>
        )}
      </div>

      {/* Feature Highlights */}
      <section className="features-section">
        <h3>플랫폼 핵심 기능</h3>
        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-icon">👁️</span>
            <h4>시각적 인터페이스</h4>
            <p>아이콘과 이미지 중심의 직관적인 소통</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🤝</span>
            <h4>신뢰 기반 공유</h4>
            <p>보호자·교사·기관 간 안전한 정보 교류</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📈</span>
            <h4>발달 추적</h4>
            <p>장기적인 성장 과정 데이터 기록</p>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🔒</span>
            <h4>프라이버시 보호</h4>
            <p>민감 정보 암호화 및 접근 권한 관리</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DreamGarden;
