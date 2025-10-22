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
  emotionCard?: string;
  aiSuggestion?: string;
  originalText?: string;
  recordedBy: string;
  recordedByRole: string;
  photos?: string[];
  checklistItems?: string[];
}

interface Message {
  id: number;
  sender: string;
  role: string;
  content: string;
  timestamp: string;
  hasReply?: boolean;
  replyTo?: number;
}

interface EmotionData {
  emotion: string;
  emoji: string;
  count: number;
  trend: string;
}

interface CapabilityData {
  name: string;
  score: number;
  description: string;
  jobSuggestion?: string;
}

function DreamGarden() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'daily' | 'communication' | 'progress' | 'profile'>('daily');

  const todayActivities: Activity[] = [
    {
      id: 1,
      time: '08:30',
      type: '등교 전 상태 (집에서)',
      icon: '🏠',
      description: '아침에 일어나서 기분이 좋았어요. 밥을 잘 먹고 준비했습니다. 어젯밤 늦게 잠들어서 약간 피곤해 보였지만, 밝게 인사했습니다.',
      images: 2,
      emotionCard: '기뻐요 😊',
      recordedBy: '어머니 박은영',
      recordedByRole: '보호자',
      photos: ['아침식사 사진', '등교 준비 사진']
    },
    {
      id: 2,
      time: '09:30',
      type: '아침 활동 - 미술시간',
      icon: '🎨',
      description: '오늘 봄 풍경을 그렸습니다. 색감 선택이 정말 밝고 아름다웠어요. 30분 이상 집중하여 작품을 완성했습니다.',
      images: 4,
      emotionCard: '즐거워요 😄',
      recordedBy: '김선생님',
      recordedByRole: '담당교사',
      originalText: '민수가 오늘 정말 말을 안 듣고 산만했어요.',
      aiSuggestion: '민수가 오늘 활동에 집중하는데 어려움을 보였습니다. 추가 지원이 필요해 보입니다.',
      photos: ['미술작품 1', '미술작품 2', '작업 과정 1', '작업 과정 2']
    },
    {
      id: 3,
      time: '12:00',
      type: '점심 식사',
      icon: '🍱',
      description: '비빔밥을 잘 먹었습니다. 식사 예절을 스스로 잘 지켰어요. 숟가락 사용이 익숙해졌습니다.',
      images: 2,
      emotionCard: '행복해요 🥰',
      recordedBy: '이보조교사',
      recordedByRole: '보조교사',
      photos: ['점심식사 사진', '식사 모습']
    },
    {
      id: 4,
      time: '14:00',
      type: '사회성 활동 - 보드게임',
      icon: '🤝',
      description: '친구들과 함께 보드게임을 했습니다. 순서를 잘 기다리고 규칙을 지켰어요. 친구가 이겼을 때 박수쳐 주었습니다.',
      images: 4,
      emotionCard: '뿌듯해요 😌',
      recordedBy: '김선생님',
      recordedByRole: '담당교사',
      photos: ['보드게임 1', '보드게임 2', '친구들과 함께', '게임 완료'],
      checklistItems: ['순서 기다리기 ✓', '규칙 지키기 ✓', '친구 응원하기 ✓', '정리정돈 ✓']
    },
    {
      id: 5,
      time: '15:30',
      type: '공익자라는늘봄 - 식물관찰',
      icon: '🌱',
      description: '화분에 물을 주고 식물 관찰 일기를 작성했습니다. "잎이 커졌어요"라고 스스로 말하며 관찰한 내용을 이야기했어요.',
      images: 3,
      emotionCard: '호기심 😮',
      recordedBy: '정재활동보조사',
      recordedByRole: '재활동보조사',
      photos: ['식물 관찰', '물주기', '관찰일기 작성']
    },
    {
      id: 6,
      time: '16:00',
      type: '자유활동 시간',
      icon: '🎵',
      description: '친구들과 함께 음악을 듣고 율동을 했습니다. 리듬에 맞춰 몸을 움직이며 즐거워했어요.',
      images: 3,
      emotionCard: '신나요 🤩',
      recordedBy: '이보조교사',
      recordedByRole: '보조교사',
      photos: ['율동 시간 1', '율동 시간 2', '친구들과 함께']
    },
    {
      id: 7,
      time: '16:30',
      type: '정리정돈 시간',
      icon: '🧹',
      description: '하루 활동을 마치고 교실을 정리했습니다. 자신의 물건을 스스로 챙기고 가방에 넣었어요. 정리정돈을 정말 잘합니다.',
      images: 2,
      emotionCard: '뿌듯해요 😌',
      recordedBy: '김선생님',
      recordedByRole: '담당교사',
      photos: ['정리정돈 모습', '가방 챙기기']
    },
    {
      id: 8,
      time: '17:00',
      type: '하원 후 집에서',
      icon: '🏠',
      description: '집에 와서 오늘 있었던 일을 이야기했어요. 특히 미술 시간 이야기를 많이 했습니다. 저녁을 잘 먹고 씻었어요.',
      images: 2,
      emotionCard: '편안해요 😊',
      recordedBy: '어머니 박은영',
      recordedByRole: '보호자',
      photos: ['귀가 후 이야기', '저녁식사']
    }
  ];

  const messages: Message[] = [
    {
      id: 1,
      sender: '어머니 박은영',
      role: '보호자',
      content: '오늘 아침에 일어날 때 약간 피곤해 보였어요. 어젯밤에 늦게 잠들어서 그런 것 같아요. 오늘 활동 조절 부탁드립니다.',
      timestamp: '08:30',
      hasReply: true
    },
    {
      id: 2,
      sender: '김선생님',
      role: '담당교사',
      content: '네, 알겠습니다. 오전 활동은 조용한 미술 활동으로 시작하고, 점심 전에 충분한 휴식 시간을 가지도록 하겠습니다.',
      timestamp: '09:00',
      replyTo: 1
    },
    {
      id: 3,
      sender: '김선생님',
      role: '담당교사',
      content: '오늘 미술 시간에 봄 풍경을 그렸는데, 색감 선택이 정말 좋았어요. 집중력도 평소보다 더 높았습니다. 작품 사진 공유드립니다.',
      timestamp: '11:30',
      hasReply: true
    },
    {
      id: 4,
      sender: '어머니 박은영',
      role: '보호자',
      content: '와, 정말 잘 그렸네요! 집에 와서 자랑하고 싶어할 것 같아요. 오늘 기분이 좋아 보여서 다행입니다. 감사합니다!',
      timestamp: '12:00',
      replyTo: 3
    },
    {
      id: 5,
      sender: '정재활동보조사',
      role: '재활동보조사',
      content: '오후 식물 관찰 활동에서 민수가 식물 성장에 관심을 많이 보였습니다. "잎이 커졌어요"라고 말하며 스스로 관찰한 내용을 이야기했어요.',
      timestamp: '16:00',
      hasReply: true
    },
    {
      id: 6,
      sender: '이보조교사',
      role: '보조교사',
      content: '오늘 친구들과 보드게임할 때 순서를 잘 기다렸어요. 지난주보다 사회성 기술이 많이 향상되었습니다.',
      timestamp: '16:15'
    },
    {
      id: 7,
      sender: '어머니 박은영',
      role: '보호자',
      content: '식물 관찰 활동 정보 감사합니다. 집에서도 식물에 관심이 많은데, 이런 활동이 정말 도움이 되는 것 같아요.',
      timestamp: '16:30',
      replyTo: 5
    },
    {
      id: 8,
      sender: '전문상담사 최박사',
      role: '전문가',
      content: '이번 주 관찰 기록을 보니, 사회성 발달이 정말 긍정적입니다. 특히 순서 기다리기와 규칙 준수가 자연스러워졌네요. 다음 상담 시 구체적으로 논의하겠습니다.',
      timestamp: '17:00'
    }
  ];

  const progressData = [
    {
      category: '사회성',
      progress: 75,
      improvement: '+15%',
      recentActivity: '친구들과 협력하여 보드게임 완료',
      description: '그룹 활동 참여도가 꾸준히 향상되고 있습니다.'
    },
    {
      category: '의사소통',
      progress: 60,
      improvement: '+20%',
      recentActivity: '식물 관찰 내용을 스스로 말로 표현',
      description: '스스로 관찰한 내용을 말로 표현하는 능력이 크게 개선되었습니다.'
    },
    {
      category: '자립생활',
      progress: 80,
      improvement: '+10%',
      recentActivity: '식사 예절을 스스로 지킴',
      description: '일상생활 루틴을 안정적으로 수행하고 있습니다.'
    },
    {
      category: '학습능력',
      progress: 70,
      improvement: '+12%',
      recentActivity: '집중력 향상, 미술 활동 완성도 높음',
      description: '새로운 활동에 대한 이해와 적응이 빨라졌습니다.'
    },
    {
      category: '집중력',
      progress: 68,
      improvement: '+18%',
      recentActivity: '30분 이상 미술 활동 집중',
      description: '한 가지 활동에 집중하는 시간이 크게 늘었습니다.'
    },
    {
      category: '협동성',
      progress: 72,
      improvement: '+8%',
      recentActivity: '순서 기다리기, 규칙 준수',
      description: '친구들과 함께하는 활동에서 협력이 자연스러워졌습니다.'
    },
    {
      category: '창의성',
      progress: 85,
      improvement: '+5%',
      recentActivity: '미술 작품에서 독창적인 색감 표현',
      description: '예술 활동에서 자신만의 표현을 발전시키고 있습니다.'
    },
    {
      category: '정서조절',
      progress: 65,
      improvement: '+10%',
      recentActivity: '감정 카드로 자신의 감정 표현',
      description: '감정을 인식하고 적절히 표현하는 능력이 향상되었습니다.'
    },
  ];

  const emotionHistory: EmotionData[] = [
    { emotion: '기뻐요', emoji: '😊', count: 106, trend: '+12%' },
    { emotion: '즐거워요', emoji: '😄', count: 89, trend: '+8%' },
    { emotion: '행복해요', emoji: '🥰', count: 101, trend: '+15%' },
    { emotion: '뿌듯해요', emoji: '😌', count: 67, trend: '+20%' },
    { emotion: '호기심', emoji: '😮', count: 54, trend: '+18%' },
    { emotion: '우울해요', emoji: '😢', count: 12, trend: '-25%' },
  ];

  const capabilityProfile: CapabilityData[] = [
    {
      name: '정리정돈',
      score: 85,
      description: '유독 뛰어난 정리정돈 능력',
      jobSuggestion: '물류정리, 도서관 사서 보조, 사무 보조'
    },
    {
      name: '집중력',
      score: 68,
      description: '꾸준한 향상을 보이고 있습니다',
      jobSuggestion: '세밀한 수공예, 조립 작업'
    },
    {
      name: '협동성',
      score: 72,
      description: '순서 기다리기가 많이 좋아졌어요',
      jobSuggestion: '팀 기반 작업, 협력 활동'
    },
    {
      name: '의사소통',
      score: 60,
      description: '관찰한 내용을 말로 표현하는 능력 향상',
      jobSuggestion: '간단한 접객 업무, 팀 소통 역할'
    },
    {
      name: '친화력',
      score: 78,
      description: '새로운 친구를 잘 사귀고, 소규모 그룹에서 활발함',
      jobSuggestion: '소규모 그룹 활동, 사회적 협력 작업'
    },
    {
      name: '창의성',
      score: 85,
      description: '예술적 감각이 뛰어나고 색감 선택이 좋음',
      jobSuggestion: '미술 활동, 디자인 보조, 공예'
    },
  ];

  return (
    <div className="dreamgarden-container">
      {/* Header */}
      <header className="dreamgarden-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← 홈으로
        </button>
        <div className="header-content">
          <div className="header-logo">🌱</div>
          <div className="header-text">
            <h1 className="project-title">꿈뜰꿈뜰 (DreamGarden)</h1>
            <p className="project-subtitle">발달장애인의 소중한 일상 이해를 돕는 기록이음 서비스</p>
          </div>
        </div>
      </header>

      {/* User Profile Section */}
      <section className="user-profile">
        <div className="profile-avatar">
          <div className="avatar-circle">👤</div>
        </div>
        <div className="profile-info">
          <h2>김민수</h2>
          <p className="profile-meta">23세 · 꿈이자라는뜰 센터</p>
          <div className="profile-tags">
            <span className="tag tag-primary">사회성 우수</span>
            <span className="tag tag-secondary">예술적 감각</span>
            <span className="tag tag-tertiary">식물 관심</span>
            <span className="tag tag-success">정리정돈 강점</span>
          </div>
        </div>
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-icon">📝</span>
            <span className="stat-number">364</span>
            <span className="stat-label">누적 기록</span>
          </div>
          <div className="stat">
            <span className="stat-icon">👥</span>
            <span className="stat-number">12</span>
            <span className="stat-label">관계자</span>
          </div>
          <div className="stat">
            <span className="stat-icon">📈</span>
            <span className="stat-number">89%</span>
            <span className="stat-label">발달 성취도</span>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <nav className="tab-navigation">
        <button
          className={`tab ${activeTab === 'daily' ? 'active' : ''}`}
          onClick={() => setActiveTab('daily')}
        >
          <span className="tab-icon">📅</span>
          <span className="tab-text">일상 기록</span>
        </button>
        <button
          className={`tab ${activeTab === 'communication' ? 'active' : ''}`}
          onClick={() => setActiveTab('communication')}
        >
          <span className="tab-icon">💬</span>
          <span className="tab-text">소통</span>
        </button>
        <button
          className={`tab ${activeTab === 'progress' ? 'active' : ''}`}
          onClick={() => setActiveTab('progress')}
        >
          <span className="tab-icon">📊</span>
          <span className="tab-text">발달 현황</span>
        </button>
        <button
          className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <span className="tab-icon">👤</span>
          <span className="tab-text">나의 프로필</span>
        </button>
      </nav>

      {/* Content Area */}
      <div className="content-area">
        {/* Daily Activities Tab */}
        {activeTab === 'daily' && (
          <section className="daily-section">
            <div className="section-header">
              <div className="section-header-left">
                <h3>오늘의 활동 타임라인</h3>
                <p className="section-description">하루의 소중한 순간들을 기록합니다</p>
              </div>
              <span className="date">2025년 10월 22일 (수)</span>
            </div>

            {/* Context Understanding Banner */}
            <div className="context-banner success">
              <div className="context-icon">💡</div>
              <div className="context-content">
                <strong>맥락 이해 도움</strong>
                <p>아침에 보호자가 작성한 기록을 확인하면 오늘 민수의 상태를 미리 파악할 수 있어요. 이런 정보 공유가 더 나은 돌봄과 교육으로 이어집니다.</p>
              </div>
            </div>

            {/* Visual Communication Guide */}
            <div className="visual-guide-section">
              <h4>시각적 소통 도구 가이드</h4>
              <div className="visual-guide-grid">
                <div className="visual-guide-item">
                  <span className="guide-icon">😊</span>
                  <span className="guide-text">감정 카드 사용</span>
                </div>
                <div className="visual-guide-item">
                  <span className="guide-icon">📷</span>
                  <span className="guide-text">사진으로 기록</span>
                </div>
                <div className="visual-guide-item">
                  <span className="guide-icon">✅</span>
                  <span className="guide-text">체크리스트 활용</span>
                </div>
                <div className="visual-guide-item">
                  <span className="guide-icon">🎨</span>
                  <span className="guide-text">그림으로 표현</span>
                </div>
              </div>
            </div>

            <div className="activities-timeline">
              {todayActivities.map((activity) => (
                <div key={activity.id} className="activity-card">
                  <div className="activity-time-marker">
                    <div className="time-dot"></div>
                    <div className="time-text">{activity.time}</div>
                  </div>
                  <div className="activity-content">
                    <div className="activity-header">
                      <span className="activity-icon-large">{activity.icon}</span>
                      <div className="activity-title-group">
                        <h4>{activity.type}</h4>
                        <div className="activity-meta">
                          <span className="activity-recorder">
                            <span className="recorder-icon">✍️</span>
                            {activity.recordedBy} ({activity.recordedByRole})
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="activity-description">{activity.description}</p>

                    {/* Emotion Card Display */}
                    {activity.emotionCard && (
                      <div className="emotion-card-display">
                        <span className="emotion-label">오늘의 감정</span>
                        <span className="emotion-badge-large">{activity.emotionCard}</span>
                      </div>
                    )}

                    {/* Checklist Items */}
                    {activity.checklistItems && (
                      <div className="checklist-display">
                        <h5>활동 체크리스트</h5>
                        <div className="checklist-items">
                          {activity.checklistItems.map((item, idx) => (
                            <div key={idx} className="checklist-item">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* AI Suggestion for Emotional Language */}
                    {activity.aiSuggestion && (
                      <div className="ai-suggestion-box">
                        <div className="ai-header">
                          <span className="ai-icon">🤖</span>
                          <span className="ai-title">AI 감정 중립화 제안</span>
                          <span className="ai-badge">신뢰 기반 소통</span>
                        </div>
                        <div className="suggestion-content">
                          <div className="original-text">
                            <small>원본 표현:</small>
                            <p>{activity.originalText}</p>
                          </div>
                          <div className="arrow-down">↓</div>
                          <div className="suggested-text">
                            <small>중립적 표현 제안:</small>
                            <p>{activity.aiSuggestion}</p>
                          </div>
                        </div>
                        <div className="ai-actions">
                          <button className="apply-suggestion-btn">✓ 제안 적용</button>
                          <button className="dismiss-suggestion-btn">원본 유지</button>
                        </div>
                      </div>
                    )}

                    {/* Photo Gallery */}
                    <div className="activity-images">
                      <h5>활동 사진 ({activity.images}장)</h5>
                      <div className="image-grid">
                        {[...Array(activity.images)].map((_, idx) => (
                          <div key={idx} className="image-placeholder">
                            <div className="image-icon">📷</div>
                            <div className="image-label">
                              {activity.photos && activity.photos[idx] ? activity.photos[idx] : `사진 ${idx + 1}`}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Celebration */}
                    {activity.emotionCard && activity.emotionCard.includes('뿌듯') && (
                      <div className="celebration-banner">
                        <span className="celebration-icon">🎉</span>
                        <span className="celebration-text">잘했어요! 작은 성취를 축하합니다!</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Add Activity Button */}
            <div className="add-activity-section">
              <button className="add-activity-button">
                <span className="button-icon">+</span>
                <span className="button-text">활동 추가하기</span>
              </button>
              <p className="helper-text">사진, 감정 카드, 체크리스트 등 다양한 방법으로 기록할 수 있어요</p>
            </div>
          </section>
        )}

        {/* Communication Tab */}
        {activeTab === 'communication' && (
          <section className="communication-section">
            <div className="section-header">
              <div className="section-header-left">
                <h3>다자간 소통 - 신뢰 기반 공유</h3>
                <p className="section-description">보호자, 교사, 전문가가 함께 소통하는 공간</p>
              </div>
              <span className="unread-badge">2개 새 메시지</span>
            </div>

            {/* Trust-based Sharing Info */}
            <div className="trust-info-box">
              <div className="trust-icon">🔒</div>
              <div className="trust-content">
                <strong>안전한 정보 공유</strong>
                <p>보호자, 담당교사, 보조교사, 전문가가 모두 참여하는 신뢰 기반 소통 공간입니다. 모든 정보는 암호화되어 안전하게 보호됩니다.</p>
              </div>
            </div>

            {/* Stakeholder Overview */}
            <div className="stakeholder-overview">
              <h4>참여 관계자</h4>
              <div className="stakeholder-list">
                <div className="stakeholder-item">
                  <span className="stakeholder-icon">👨‍👩‍👦</span>
                  <span className="stakeholder-name">보호자 2명</span>
                </div>
                <div className="stakeholder-item">
                  <span className="stakeholder-icon">👨‍🏫</span>
                  <span className="stakeholder-name">담당교사 1명</span>
                </div>
                <div className="stakeholder-item">
                  <span className="stakeholder-icon">👩‍🏫</span>
                  <span className="stakeholder-name">보조교사 2명</span>
                </div>
                <div className="stakeholder-item">
                  <span className="stakeholder-icon">👨‍⚕️</span>
                  <span className="stakeholder-name">전문가 1명</span>
                </div>
              </div>
            </div>

            {/* Stakeholder Filter */}
            <div className="stakeholder-filter">
              <button className="filter-btn active">전체 보기</button>
              <button className="filter-btn">보호자</button>
              <button className="filter-btn">담당교사</button>
              <button className="filter-btn">보조교사</button>
              <button className="filter-btn">전문가</button>
            </div>

            <div className="messages-container">
              {messages.map((message) => (
                <div key={message.id} className={`message-card ${message.hasReply ? 'has-reply' : ''} ${message.replyTo ? 'is-reply' : ''}`}>
                  {message.replyTo && (
                    <div className="reply-indicator-top">
                      <span className="reply-arrow">↳</span>
                      <span className="reply-text">답글</span>
                    </div>
                  )}
                  <div className="message-header">
                    <div className="sender-info">
                      <div className="sender-avatar">{getRoleEmoji(message.role)}</div>
                      <div className="sender-details">
                        <span className="sender-name">{message.sender}</span>
                        <span className={`sender-role role-${message.role.replace(/\s+/g, '-')}`}>
                          {message.role}
                        </span>
                      </div>
                    </div>
                    <span className="message-time">{message.timestamp}</span>
                  </div>
                  <p className="message-content">{message.content}</p>
                  <div className="message-actions">
                    <button className="action-btn">
                      <span className="action-icon">💬</span>
                      <span className="action-text">답글</span>
                    </button>
                    <button className="action-btn">
                      <span className="action-icon">👍</span>
                      <span className="action-text">공감</span>
                    </button>
                    <button className="action-btn">
                      <span className="action-icon">📌</span>
                      <span className="action-text">중요</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Communication Aids */}
            <div className="visual-aids-section">
              <h4>시각적 소통 도구</h4>
              <p className="aids-description">말보다 쉽게 전달할 수 있는 도구들을 사용해보세요</p>
              <div className="visual-aids-grid">
                <button className="visual-aid-btn">
                  <span className="aid-icon">😊</span>
                  <span className="aid-text">감정 카드</span>
                </button>
                <button className="visual-aid-btn">
                  <span className="aid-icon">📷</span>
                  <span className="aid-text">사진 첨부</span>
                </button>
                <button className="visual-aid-btn">
                  <span className="aid-icon">🎨</span>
                  <span className="aid-text">그림판</span>
                </button>
                <button className="visual-aid-btn">
                  <span className="aid-icon">✅</span>
                  <span className="aid-text">체크리스트</span>
                </button>
                <button className="visual-aid-btn">
                  <span className="aid-icon">📝</span>
                  <span className="aid-text">템플릿</span>
                </button>
                <button className="visual-aid-btn">
                  <span className="aid-icon">🎵</span>
                  <span className="aid-text">음성 녹음</span>
                </button>
              </div>
            </div>

            {/* Message Templates */}
            <div className="message-templates">
              <h4>빠른 메시지 템플릿</h4>
              <div className="template-grid">
                <button className="template-btn">잘했어요! 👏</button>
                <button className="template-btn">확인했습니다 ✓</button>
                <button className="template-btn">감사합니다 🙏</button>
                <button className="template-btn">질문이 있어요 ❓</button>
              </div>
            </div>

            <div className="message-input-area">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="메시지를 입력하세요... (AI가 자동으로 중립화 제안을 해드립니다)"
                  className="message-input"
                />
                <div className="input-actions">
                  <button className="attach-btn" title="파일 첨부">📎</button>
                  <button className="emoji-btn" title="이모지">😊</button>
                  <button className="send-button">전송</button>
                </div>
              </div>
              <p className="ai-helper-text">💡 AI가 감정적 표현을 자동으로 감지하여 중립적인 표현을 제안해드립니다</p>
            </div>
          </section>
        )}

        {/* Progress Tab */}
        {activeTab === 'progress' && (
          <section className="progress-section">
            <div className="section-header">
              <div className="section-header-left">
                <h3>발달 현황 - 성장 여정 추적</h3>
                <p className="section-description">기록을 통해 발견한 성장의 패턴</p>
              </div>
              <span className="period">최근 3개월 (2025.7 - 2025.10)</span>
            </div>

            {/* Summary Banner */}
            <div className="growth-summary-banner">
              <div className="summary-icon-large">📈</div>
              <div className="summary-content">
                <div className="summary-header">
                  <strong className="summary-title">전체 성장률: +14%</strong>
                  <span className="summary-badge">꾸준한 향상</span>
                </div>
                <p className="summary-description">민수는 지난 3개월간 꾸준한 성장을 보이고 있습니다. 특히 의사소통과 집중력이 크게 향상되었습니다.</p>
                <div className="summary-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">⭐</span>
                    <span className="highlight-text">최고 향상: 의사소통 (+20%)</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🎯</span>
                    <span className="highlight-text">집중 영역: 집중력 지속 훈련</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Cards */}
            <div className="progress-cards-container">
              <h4>영역별 발달 현황</h4>
              <div className="progress-cards">
                {progressData.map((item, index) => (
                  <div key={index} className="progress-card">
                    <div className="progress-header">
                      <div className="progress-title-group">
                        <h4>{item.category}</h4>
                        <p className="progress-description">{item.description}</p>
                      </div>
                      <span className={`improvement ${item.improvement.includes('+') ? 'positive' : ''}`}>
                        {item.improvement}
                      </span>
                    </div>
                    <div className="progress-bar-container">
                      <div
                        className="progress-bar"
                        style={{ width: `${item.progress}%` }}
                      >
                        <span className="progress-bar-label">{item.progress}%</span>
                      </div>
                    </div>
                    <div className="progress-details">
                      <span className="recent-activity-label">최근 활동:</span>
                      <span className="recent-activity">{item.recentActivity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Time-based Causality Visualization */}
            <div className="causality-section">
              <h4>행동 인과관계 분석 - 맥락 이해하기</h4>
              <p className="causality-description">시간축 기반으로 다자간 기록을 연결하여 행동의 배경을 파악합니다</p>

              <div className="causality-examples">
                <div className="causality-example">
                  <div className="cause-item">
                    <span className="cause-label">원인 (보호자 기록)</span>
                    <div className="cause-content">
                      <span className="cause-icon">🏠</span>
                      <p>아침에 충분한 수면 (8시간)</p>
                      <span className="cause-time">08:30 기록</span>
                    </div>
                  </div>
                  <div className="arrow-connector">
                    <div className="arrow-line"></div>
                    <div className="arrow-head">→</div>
                  </div>
                  <div className="effect-item">
                    <span className="effect-label">결과 (교사 기록)</span>
                    <div className="effect-content">
                      <span className="effect-icon">🎨</span>
                      <p>오전 활동 집중력 향상 (30분 이상 집중)</p>
                      <span className="effect-time">09:30 기록</span>
                    </div>
                  </div>
                  <div className="insight-badge">
                    <span className="insight-icon">💡</span>
                    <span className="insight-text">충분한 휴식이 집중력에 긍정적 영향</span>
                  </div>
                </div>

                <div className="causality-example">
                  <div className="cause-item">
                    <span className="cause-label">원인 (교사 기록)</span>
                    <div className="cause-content">
                      <span className="cause-icon">🤝</span>
                      <p>친구와 보드게임 성공 경험</p>
                      <span className="cause-time">14:00 기록</span>
                    </div>
                  </div>
                  <div className="arrow-connector">
                    <div className="arrow-line"></div>
                    <div className="arrow-head">→</div>
                  </div>
                  <div className="effect-item">
                    <span className="effect-label">결과 (장기 추이)</span>
                    <div className="effect-content">
                      <span className="effect-icon">📈</span>
                      <p>사회성 점수 +15% 향상 (최근 3개월)</p>
                      <span className="effect-time">누적 데이터</span>
                    </div>
                  </div>
                  <div className="insight-badge">
                    <span className="insight-icon">💡</span>
                    <span className="insight-text">성공 경험이 사회성 발달로 연결</span>
                  </div>
                </div>

                <div className="causality-example">
                  <div className="cause-item">
                    <span className="cause-label">원인 (보호자 기록)</span>
                    <div className="cause-content">
                      <span className="cause-icon">😴</span>
                      <p>어젯밤 늦게 잠듦 (피곤한 상태)</p>
                      <span className="cause-time">08:30 기록</span>
                    </div>
                  </div>
                  <div className="arrow-connector">
                    <div className="arrow-line"></div>
                    <div className="arrow-head">→</div>
                  </div>
                  <div className="effect-item">
                    <span className="effect-label">대응 (교사 기록)</span>
                    <div className="effect-content">
                      <span className="effect-icon">🎨</span>
                      <p>조용한 미술 활동으로 조정</p>
                      <span className="effect-time">09:00 대응</span>
                    </div>
                  </div>
                  <div className="insight-badge success">
                    <span className="insight-icon">✓</span>
                    <span className="insight-text">맥락 이해를 통한 적절한 활동 조정</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="insights-box">
              <div className="insights-header">
                <h4>AI 기반 전문가 인사이트</h4>
                <span className="insights-badge">데이터 기반 분석</span>
              </div>
              <div className="insights-grid">
                <div className="insight-card">
                  <div className="insight-icon">🤝</div>
                  <div className="insight-content">
                    <h5>사회성</h5>
                    <p>그룹 활동 참여도가 꾸준히 향상되고 있습니다. 친구들과의 협력 활동에서 긍정적인 변화가 관찰됩니다. 순서 기다리기와 규칙 준수가 자연스러워졌습니다.</p>
                    <div className="insight-recommendation">
                      <strong>추천:</strong> 소규모 그룹 활동을 계속 유지하세요
                    </div>
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon">💬</div>
                  <div className="insight-content">
                    <h5>의사소통</h5>
                    <p>스스로 관찰한 내용을 말로 표현하는 능력이 크게 개선되었습니다. 감정 카드 활용이 효과적입니다. "잎이 커졌어요"와 같이 구체적으로 표현합니다.</p>
                    <div className="insight-recommendation">
                      <strong>추천:</strong> 감정 카드와 시각 자료를 계속 활용하세요
                    </div>
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon">🏠</div>
                  <div className="insight-content">
                    <h5>자립생활</h5>
                    <p>식사 예절, 개인 위생 등 일상생활 루틴을 안정적으로 수행하고 있습니다. 스스로 준비하고 정리하는 능력이 향상되었습니다.</p>
                    <div className="insight-recommendation">
                      <strong>추천:</strong> 새로운 일상 루틴을 추가할 준비가 되었습니다
                    </div>
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-icon">🎯</div>
                  <div className="insight-content">
                    <h5>집중력</h5>
                    <p>30분 이상 한 가지 활동에 집중할 수 있게 되었습니다. 미술 활동에서 특히 두드러집니다. 지속 시간이 점진적으로 증가하고 있습니다.</p>
                    <div className="insight-recommendation">
                      <strong>추천:</strong> 관심 분야를 중심으로 집중 시간을 늘려보세요
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Report Download */}
            <div className="report-download-section">
              <div className="report-icon">📋</div>
              <div className="report-content">
                <h4>성장 리포트</h4>
                <p>지난 3개월간의 발달 현황을 종합한 리포트를 다운로드하실 수 있습니다. 리포트에는 모든 영역의 발달 추이, AI 인사이트, 전문가 의견이 포함됩니다.</p>
                <div className="report-includes">
                  <div className="include-item">✓ 8개 영역 발달 추이</div>
                  <div className="include-item">✓ 행동 인과관계 분석</div>
                  <div className="include-item">✓ AI 기반 인사이트</div>
                  <div className="include-item">✓ 다음 단계 제안</div>
                </div>
                <button className="download-report-btn">
                  <span className="button-icon">📥</span>
                  <span className="button-text">성장 리포트 다운로드 (PDF)</span>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <section className="profile-section">
            <div className="section-header">
              <div className="section-header-left">
                <h3>나의 프로필 - 성장의 기록</h3>
                <p className="section-description">축적된 기록으로 발견한 나만의 강점</p>
              </div>
              <span className="profile-badge">36개월 누적 데이터</span>
            </div>

            {/* Profile Summary Card */}
            <div className="profile-summary-card">
              <div className="profile-summary-header">
                <div className="profile-avatar-large">👤</div>
                <div className="profile-summary-info">
                  <h2>김민수</h2>
                  <p className="profile-age">23세</p>
                  <div className="profile-center">
                    <span className="center-icon">🌱</span>
                    <span className="center-name">꿈이자라는뜰 센터</span>
                  </div>
                </div>
                <div className="profile-achievement">
                  <div className="achievement-circle">
                    <span className="achievement-number">80%</span>
                    <span className="achievement-label">발달 성취도</span>
                  </div>
                </div>
              </div>
              <div className="profile-strength-tag">
                <span className="strength-icon">⭐</span>
                <span className="strength-text">유독 뛰어난 정리정돈 능력을 가지고 있어요</span>
              </div>
            </div>

            {/* Emotion History */}
            <div className="emotion-history-section">
              <div className="emotion-section-header">
                <h4>나의 감정 살펴보기</h4>
                <p className="section-description">
                  지난 3개월간 기록된 감정 패턴입니다. 긍정적 감정이 <strong>86%</strong>로 높게 나타났어요!
                </p>
              </div>

              <div className="emotion-chart">
                <div className="emotion-chart-title">감정 분포</div>
                <div className="emotion-bar-chart">
                  {emotionHistory.map((emotion, index) => (
                    <div key={index} className="emotion-bar-item">
                      <div className="emotion-bar-header">
                        <span className="emotion-emoji-large">{emotion.emoji}</span>
                        <span className="emotion-name">{emotion.emotion}</span>
                      </div>
                      <div className="emotion-bar-container">
                        <div
                          className="emotion-bar-fill"
                          style={{ width: `${(emotion.count / 106) * 100}%` }}
                        ></div>
                      </div>
                      <div className="emotion-bar-footer">
                        <span className="emotion-count">{emotion.count}회</span>
                        <span className={`emotion-trend ${emotion.trend.includes('+') ? 'positive' : 'negative'}`}>
                          {emotion.trend}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="emotion-insights">
                <div className="emotion-insight-card">
                  <span className="insight-icon">😊</span>
                  <div className="insight-text">
                    <strong>긍정 감정이 크게 증가했어요</strong>
                    <p>특히 '뿌듯해요' 감정이 20% 증가했습니다</p>
                  </div>
                </div>
                <div className="emotion-insight-card">
                  <span className="insight-icon">📉</span>
                  <div className="insight-text">
                    <strong>부정 감정이 감소하고 있어요</strong>
                    <p>'우울해요'가 25% 감소했습니다</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Capability Radar Chart */}
            <div className="capability-section">
              <div className="capability-section-header">
                <h4>나의 역량 살펴보기</h4>
                <p className="section-description">6개 영역에서 발견한 나만의 강점과 특성</p>
              </div>

              <div className="radar-chart-container">
                <div className="radar-chart-visual">
                  <svg viewBox="0 0 400 400" className="radar-svg">
                    {/* Background circles */}
                    <circle cx="200" cy="200" r="150" fill="none" stroke="#e0e0e0" strokeWidth="1" />
                    <circle cx="200" cy="200" r="120" fill="none" stroke="#e0e0e0" strokeWidth="1" />
                    <circle cx="200" cy="200" r="90" fill="none" stroke="#e0e0e0" strokeWidth="1" />
                    <circle cx="200" cy="200" r="60" fill="none" stroke="#e0e0e0" strokeWidth="1" />
                    <circle cx="200" cy="200" r="30" fill="none" stroke="#e0e0e0" strokeWidth="1" />

                    {/* Axes */}
                    <line x1="200" y1="200" x2="200" y2="50" stroke="#d0d0d0" strokeWidth="1" />
                    <line x1="200" y1="200" x2="330" y2="125" stroke="#d0d0d0" strokeWidth="1" />
                    <line x1="200" y1="200" x2="330" y2="275" stroke="#d0d0d0" strokeWidth="1" />
                    <line x1="200" y1="200" x2="200" y2="350" stroke="#d0d0d0" strokeWidth="1" />
                    <line x1="200" y1="200" x2="70" y2="275" stroke="#d0d0d0" strokeWidth="1" />
                    <line x1="200" y1="200" x2="70" y2="125" stroke="#d0d0d0" strokeWidth="1" />

                    {/* Data polygon */}
                    <polygon
                      points="200,72.5 277.5,134 277.5,242 200,302 122.5,242 122.5,134"
                      fill="rgba(76, 175, 80, 0.2)"
                      stroke="rgba(76, 175, 80, 0.8)"
                      strokeWidth="2"
                    />

                    {/* Data points */}
                    <circle cx="200" cy="72.5" r="5" fill="#4CAF50" />
                    <circle cx="277.5" cy="134" r="5" fill="#4CAF50" />
                    <circle cx="277.5" cy="242" r="5" fill="#4CAF50" />
                    <circle cx="200" cy="302" r="5" fill="#4CAF50" />
                    <circle cx="122.5" cy="242" r="5" fill="#4CAF50" />
                    <circle cx="122.5" cy="134" r="5" fill="#4CAF50" />
                  </svg>

                  <div className="radar-labels">
                    <div className="radar-label" style={{ top: '5%', left: '50%', transform: 'translateX(-50%)' }}>
                      정리정돈<br/><strong>85</strong>
                    </div>
                    <div className="radar-label" style={{ top: '20%', right: '5%' }}>
                      창의성<br/><strong>85</strong>
                    </div>
                    <div className="radar-label" style={{ bottom: '20%', right: '5%' }}>
                      친화력<br/><strong>78</strong>
                    </div>
                    <div className="radar-label" style={{ bottom: '5%', left: '50%', transform: 'translateX(-50%)' }}>
                      협동성<br/><strong>72</strong>
                    </div>
                    <div className="radar-label" style={{ bottom: '20%', left: '5%' }}>
                      집중력<br/><strong>68</strong>
                    </div>
                    <div className="radar-label" style={{ top: '20%', left: '5%' }}>
                      의사소통<br/><strong>60</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="capability-details">
                {capabilityProfile.map((capability, index) => (
                  <div key={index} className="capability-item">
                    <div className="capability-header">
                      <div className="capability-name-group">
                        <span className="capability-name">{capability.name}</span>
                        {capability.score >= 80 && <span className="capability-star">⭐</span>}
                      </div>
                      <span className="capability-score">{capability.score}점</span>
                    </div>
                    <div className="capability-bar">
                      <div
                        className="capability-fill"
                        style={{ width: `${capability.score}%` }}
                      ></div>
                    </div>
                    <p className="capability-description">{capability.description}</p>
                    {capability.jobSuggestion && (
                      <div className="job-suggestion">
                        <span className="job-icon">💼</span>
                        <span className="job-text">{capability.jobSuggestion}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio Download */}
            <div className="portfolio-section">
              <div className="portfolio-header">
                <div className="portfolio-icon-large">📄</div>
                <h4>포트폴리오 다운로드</h4>
              </div>

              <div className="portfolio-highlight">
                <div className="highlight-box">
                  <span className="highlight-icon">⭐</span>
                  <p className="highlight-text">
                    <strong>커버비는 유독 꾸준한 정리정돈에 강점이 있어요</strong>
                  </p>
                </div>
                <div className="highlight-box">
                  <span className="highlight-icon">💼</span>
                  <p className="highlight-text">
                    꾸준한 정리정돈 역량을 살릴 수 있는 직업: 물류정리, 도서관 사서 보조, 사무 보조
                  </p>
                </div>
                <div className="highlight-box">
                  <span className="highlight-icon">🎨</span>
                  <p className="highlight-text">
                    사소한 것들을 잘 챙기는 세밀한 수공예 작업에도 적합합니다
                  </p>
                </div>
              </div>

              <div className="portfolio-preview">
                <div className="preview-icon">📄</div>
                <div className="preview-text">
                  <strong>김민수 포트폴리오</strong>
                  <p>36개월간의 성장 기록, 역량 분석, 전문가 의견 포함</p>
                </div>
              </div>

              <div className="portfolio-contents">
                <h5>포트폴리오 내용</h5>
                <div className="contents-grid">
                  <div className="content-item">
                    <span className="content-icon">📊</span>
                    <span className="content-text">6개 역량 프로필</span>
                  </div>
                  <div className="content-item">
                    <span className="content-icon">😊</span>
                    <span className="content-text">감정 패턴 분석</span>
                  </div>
                  <div className="content-item">
                    <span className="content-icon">📈</span>
                    <span className="content-text">3년간 발달 추이</span>
                  </div>
                  <div className="content-item">
                    <span className="content-icon">🎯</span>
                    <span className="content-text">강점 및 특성</span>
                  </div>
                  <div className="content-item">
                    <span className="content-icon">💼</span>
                    <span className="content-text">직업 적합성 분석</span>
                  </div>
                  <div className="content-item">
                    <span className="content-icon">📝</span>
                    <span className="content-text">전문가 종합 의견</span>
                  </div>
                </div>
              </div>

              <div className="portfolio-usage">
                <h5>활용 분야</h5>
                <div className="usage-grid">
                  <div className="usage-item">
                    <span className="usage-icon">✅</span>
                    <div className="usage-text">
                      <strong>취업 지원 자료</strong>
                      <p>구체적인 역량 증명 자료로 활용</p>
                    </div>
                  </div>
                  <div className="usage-item">
                    <span className="usage-icon">✅</span>
                    <div className="usage-text">
                      <strong>전문가 상담 자료</strong>
                      <p>장기 기록 기반 상담 진행</p>
                    </div>
                  </div>
                  <div className="usage-item">
                    <span className="usage-icon">✅</span>
                    <div className="usage-text">
                      <strong>교육 기관 전환 시 참고 자료</strong>
                      <p>새로운 환경 적응 지원</p>
                    </div>
                  </div>
                  <div className="usage-item">
                    <span className="usage-icon">✅</span>
                    <div className="usage-text">
                      <strong>자기 이해 및 성장 확인</strong>
                      <p>스스로 발전을 확인하고 동기부여</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="download-portfolio-btn">
                <span className="button-icon">📥</span>
                <span className="button-text">포트폴리오 다운로드</span>
              </button>
              <p className="portfolio-helper-text">PDF 형식으로 다운로드되며, 언제든지 업데이트할 수 있습니다</p>
            </div>
          </section>
        )}
      </div>

      {/* Feature Highlights */}
      <section className="features-section">
        <div className="features-header">
          <h3>플랫폼 핵심 기능 - 3가지 UX 키워드</h3>
          <p className="features-description">발달장애인과 관련 이해관계자의 포괄적 성장을 지원합니다</p>
        </div>

        <div className="features-grid">
          <div className="feature-item feature-understanding">
            <div className="feature-icon-container">
              <span className="feature-icon">💡</span>
            </div>
            <h4>Understanding - 맥락 이해</h4>
            <p className="feature-description">쌍방향 기록 템플릿으로 행동의 배경과 인과관계를 시각화합니다</p>
            <ul className="feature-details">
              <li><span className="detail-icon">✓</span>시간축 기반 다자간 기록 연결</li>
              <li><span className="detail-icon">✓</span>보호자-교사-전문가 기록 통합</li>
              <li><span className="detail-icon">✓</span>행동 인과관계 자동 분석</li>
              <li><span className="detail-icon">✓</span>맥락적 이해를 통한 적절한 대응</li>
            </ul>
            <div className="feature-example">
              <strong>예시:</strong> 보호자의 "어젯밤 늦게 잠듦" 기록 → 교사의 "조용한 활동" 조정
            </div>
          </div>

          <div className="feature-item feature-reliable">
            <div className="feature-icon-container">
              <span className="feature-icon">🤝</span>
            </div>
            <h4>Reliable - 신뢰 관계 유지</h4>
            <p className="feature-description">AI 기반 감정 중립화로 오해 없는 소통을 지원합니다</p>
            <ul className="feature-details">
              <li><span className="detail-icon">✓</span>감정적 표현 자동 감지 및 중립화</li>
              <li><span className="detail-icon">✓</span>신뢰 기반 권한 관리</li>
              <li><span className="detail-icon">✓</span>안전한 정보 공유 시스템</li>
              <li><span className="detail-icon">✓</span>다자간 협력 소통 플랫폼</li>
            </ul>
            <div className="feature-example">
              <strong>예시:</strong> "정말 말을 안 듣고 산만했어요" → "활동에 집중하는데 어려움을 보였습니다"
            </div>
          </div>

          <div className="feature-item feature-valuable">
            <div className="feature-icon-container">
              <span className="feature-icon">💎</span>
            </div>
            <h4>Valuable - 추가 가치 창출</h4>
            <p className="feature-description">기록을 돌봄에서 성장으로 확장하여 가치를 만듭니다</p>
            <ul className="feature-details">
              <li><span className="detail-icon">✓</span>AI 기반 역량 프로필 생성</li>
              <li><span className="detail-icon">✓</span>취업 포트폴리오 자동 생성</li>
              <li><span className="detail-icon">✓</span>장기 발달 추이 리포트</li>
              <li><span className="detail-icon">✓</span>강점 기반 직업 제안</li>
            </ul>
            <div className="feature-example">
              <strong>예시:</strong> 정리정돈 강점 발견 → 물류정리, 사무 보조 직업 제안
            </div>
          </div>
        </div>

        <div className="additional-features">
          <h4>추가 핵심 기능</h4>
          <div className="additional-features-grid">
            <div className="additional-feature">
              <span className="feature-icon-large">👁️</span>
              <h5>시각적 인터페이스</h5>
              <p>아이콘, 감정 카드, 이미지 중심의 직관적 소통. 누구나 쉽게 사용할 수 있는 접근성 우선 디자인.</p>
            </div>
            <div className="additional-feature">
              <span className="feature-icon-large">🔒</span>
              <h5>프라이버시 보호</h5>
              <p>민감 정보 암호화 및 접근 권한 관리. 신뢰할 수 있는 관계자만 정보를 공유합니다.</p>
            </div>
            <div className="additional-feature">
              <span className="feature-icon-large">📊</span>
              <h5>데이터 기반 인사이트</h5>
              <p>AI가 패턴을 분석하여 발달 인사이트 제공. 구체적이고 실행 가능한 제안을 드립니다.</p>
            </div>
            <div className="additional-feature">
              <span className="feature-icon-large">🌐</span>
              <h5>다자간 협력</h5>
              <p>보호자, 교사, 전문가 간 실시간 협력. 모두가 함께 성장을 지원합니다.</p>
            </div>
          </div>
        </div>

        {/* Project Vision */}
        <div className="project-vision">
          <div className="vision-icon">🌱</div>
          <h4>프로젝트 비전</h4>
          <blockquote>
            <p className="vision-main">
              "발달장애인의 소중한 일상 이해를 돕는 기록이음 서비스"
            </p>
            <p className="vision-description">
              교육기관과 보호자 간의 기록을 신뢰 기반으로 공유하고,
              이를 통해 발달장애인의 성장 여정과 프로필을 축적합니다.
            </p>
            <p className="vision-promise">
              우리는 장애인 당사자와 관련 이해관계자의 포괄적 성장을 지원하고 꿈꿉니다.
              <br />
              그래서, <strong>서로 믿을 수 있는 방식으로 기록을 잇겠습니다.</strong>
              <br />
              그리하여 <strong className="vision-highlight">이해와 신뢰 아래 새로운 가치</strong>를 만들겠습니다.
            </p>
          </blockquote>
        </div>
      </section>
    </div>
  );
}

// Helper function for role emojis
function getRoleEmoji(role: string): string {
  const emojiMap: { [key: string]: string } = {
    '보호자': '👨‍👩‍👦',
    '담당교사': '👨‍🏫',
    '보조교사': '👩‍🏫',
    '재활동보조사': '👨‍⚕️',
    '전문가': '👨‍⚕️'
  };
  return emojiMap[role] || '👤';
}

export default DreamGarden;
