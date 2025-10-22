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
}

interface Message {
  id: number;
  sender: string;
  role: string;
  content: string;
  timestamp: string;
  hasReply?: boolean;
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
}

function DreamGarden() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'daily' | 'communication' | 'progress' | 'profile'>('daily');

  const todayActivities: Activity[] = [
    {
      id: 1,
      time: '08:30',
      type: '등교 전 상태',
      icon: '🏠',
      description: '아침에 일어나서 기분이 좋았어요. 밥을 잘 먹었습니다.',
      images: 1,
      emotionCard: '기뻐요',
      recordedBy: '어머니 박은영',
      recordedByRole: '보호자'
    },
    {
      id: 2,
      time: '09:30',
      type: '아침 활동',
      icon: '🎨',
      description: '꿈이자라는뜰에서 미술 시간에 봄 풍경을 그렸습니다. 색감이 밝고 집중력이 높았어요.',
      images: 3,
      emotionCard: '즐거워요',
      recordedBy: '김선생님',
      recordedByRole: '담당교사',
      originalText: '민수가 오늘 정말 말을 안 듣고 산만했어요.',
      aiSuggestion: '민수가 오늘 활동에 집중하는데 어려움을 보였습니다. 추가 지원이 필요해 보입니다.'
    },
    {
      id: 3,
      time: '12:00',
      type: '점심 식사',
      icon: '🍱',
      description: '비빔밥을 잘 먹었습니다. 식사 예절을 잘 지켰어요.',
      images: 2,
      recordedBy: '이보조교사',
      recordedByRole: '보조교사'
    },
    {
      id: 4,
      time: '14:00',
      type: '사회성 활동',
      icon: '🤝',
      description: '친구들과 함께 보드게임을 했습니다. 순서를 잘 기다리고 규칙을 지켰어요.',
      images: 4,
      emotionCard: '행복해요',
      recordedBy: '김선생님',
      recordedByRole: '담당교사'
    },
    {
      id: 5,
      time: '15:30',
      type: '공익자라는늘봄',
      icon: '🌱',
      description: '화분에 물을 주고 식물 관찰 일기를 작성했습니다. 식물 성장에 관심이 높습니다.',
      images: 3,
      emotionCard: '뿌듯해요',
      recordedBy: '정재활동보조사',
      recordedByRole: '재활동보조사'
    },
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
      timestamp: '09:00'
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
      timestamp: '12:00'
    },
    {
      id: 5,
      sender: '정재활동보조사',
      role: '재활동보조사',
      content: '오후 식물 관찰 활동에서 민수가 식물 성장에 관심을 많이 보였습니다. "잎이 커졌어요"라고 말하며 스스로 관찰한 내용을 이야기했어요.',
      timestamp: '16:00'
    },
    {
      id: 6,
      sender: '이보조교사',
      role: '보조교사',
      content: '오늘 친구들과 보드게임할 때 순서를 잘 기다렸어요. 지난주보다 사회성 기술이 많이 향상되었습니다.',
      timestamp: '16:15'
    }
  ];

  const progressData = [
    { category: '사회성', progress: 75, improvement: '+15%', recentActivity: '친구들과 협력하여 보드게임 완료' },
    { category: '의사소통', progress: 60, improvement: '+20%', recentActivity: '식물 관찰 내용을 스스로 말로 표현' },
    { category: '자립생활', progress: 80, improvement: '+10%', recentActivity: '식사 예절을 스스로 지킴' },
    { category: '학습능력', progress: 70, improvement: '+12%', recentActivity: '집중력 향상, 미술 활동 완성도 높음' },
    { category: '집중력', progress: 68, improvement: '+18%', recentActivity: '30분 이상 미술 활동 집중' },
    { category: '협동성', progress: 72, improvement: '+8%', recentActivity: '순서 기다리기, 규칙 준수' },
  ];

  const emotionHistory: EmotionData[] = [
    { emotion: '기뻐요', emoji: '😊', count: 89, trend: '+12%' },
    { emotion: '즐거워요', emoji: '😄', count: 76, trend: '+8%' },
    { emotion: '행복해요', emoji: '🥰', count: 91, trend: '+15%' },
    { emotion: '뿌듯해요', emoji: '😌', count: 54, trend: '+20%' },
  ];

  const capabilityProfile: CapabilityData[] = [
    { name: '창의성', score: 85, description: '유독 뛰어난 정리정돈에 강점' },
    { name: '집중력', score: 68, description: '꾸준한 향상을 보이고 있습니다' },
    { name: '협동성', score: 72, description: '순서 기다리기가 많이 좋아졌어요' },
    { name: '의사소통', score: 60, description: '새벽한 습관을 잘 수 있는 작업' },
    { name: '친화력', score: 78, description: '새로운 친구를 잘 사귀고, 소규모 그룹에서 활발함' },
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
          <p>23세 · 꿈이자라는뜰 센터</p>
          <div className="profile-tags">
            <span className="tag tag-primary">사회성 우수</span>
            <span className="tag tag-secondary">예술적 감각</span>
            <span className="tag tag-tertiary">식물 관심</span>
          </div>
        </div>
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-number">364</span>
            <span className="stat-label">누적 기록</span>
          </div>
          <div className="stat">
            <span className="stat-number">12</span>
            <span className="stat-label">관계자</span>
          </div>
          <div className="stat">
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
        <button
          className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          👤 나의 프로필
        </button>
      </nav>

      {/* Content Area */}
      <div className="content-area">
        {/* Daily Activities Tab */}
        {activeTab === 'daily' && (
          <section className="daily-section">
            <div className="section-header">
              <h3>오늘의 활동 타임라인</h3>
              <span className="date">2025년 10월 22일 (수)</span>
            </div>

            {/* Context Understanding Banner */}
            <div className="context-banner">
              <div className="context-icon">💡</div>
              <div className="context-content">
                <strong>맥락 이해 도움:</strong> 아침에 보호자가 작성한 기록을 확인하면 오늘 민수의 상태를 미리 파악할 수 있어요.
              </div>
            </div>

            <div className="activities-timeline">
              {todayActivities.map((activity) => (
                <div key={activity.id} className="activity-card">
                  <div className="activity-time">{activity.time}</div>
                  <div className="activity-content">
                    <div className="activity-header">
                      <span className="activity-icon">{activity.icon}</span>
                      <div className="activity-title-group">
                        <h4>{activity.type}</h4>
                        <span className="activity-recorder">
                          기록자: {activity.recordedBy} ({activity.recordedByRole})
                        </span>
                      </div>
                    </div>
                    <p className="activity-description">{activity.description}</p>

                    {/* Emotion Card Display */}
                    {activity.emotionCard && (
                      <div className="emotion-card-display">
                        <span className="emotion-label">오늘의 감정</span>
                        <span className="emotion-badge">{activity.emotionCard}</span>
                      </div>
                    )}

                    {/* AI Suggestion for Emotional Language */}
                    {activity.aiSuggestion && (
                      <div className="ai-suggestion-box">
                        <div className="ai-label">🤖 AI 중립화 제안</div>
                        <div className="original-text">
                          <small>원본:</small> {activity.originalText}
                        </div>
                        <div className="suggested-text">
                          <small>제안:</small> {activity.aiSuggestion}
                        </div>
                        <button className="apply-suggestion-btn">제안 적용</button>
                      </div>
                    )}

                    <div className="activity-images">
                      {[...Array(activity.images)].map((_, idx) => (
                        <div key={idx} className="image-placeholder">
                          📷 사진 {idx + 1}
                        </div>
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
              <h3>다자간 소통 - 신뢰 기반 공유</h3>
              <span className="unread-badge">2 new</span>
            </div>

            {/* Trust-based Sharing Info */}
            <div className="trust-info-box">
              <div className="trust-icon">🔒</div>
              <div className="trust-content">
                <strong>안전한 정보 공유</strong>
                <p>보호자, 담당교사, 보조교사, 전문가가 모두 참여하는 신뢰 기반 소통 공간입니다.</p>
              </div>
            </div>

            {/* Stakeholder Filter */}
            <div className="stakeholder-filter">
              <button className="filter-btn active">전체</button>
              <button className="filter-btn">보호자</button>
              <button className="filter-btn">담당교사</button>
              <button className="filter-btn">보조교사</button>
              <button className="filter-btn">전문가</button>
            </div>

            <div className="messages-container">
              {messages.map((message) => (
                <div key={message.id} className={`message-card ${message.hasReply ? 'has-reply' : ''}`}>
                  <div className="message-header">
                    <div className="sender-info">
                      <span className="sender-name">{message.sender}</span>
                      <span className={`sender-role role-${message.role.replace(/\s+/g, '-')}`}>
                        {message.role}
                      </span>
                    </div>
                    <span className="message-time">{message.timestamp}</span>
                  </div>
                  <p className="message-content">{message.content}</p>
                  {message.hasReply && (
                    <div className="reply-indicator">
                      💬 답장 있음
                    </div>
                  )}
                  <div className="message-actions">
                    <button className="action-btn">답글</button>
                    <button className="action-btn">공감</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Communication Aids */}
            <div className="visual-aids-section">
              <h4>시각적 소통 도구</h4>
              <div className="visual-aids-grid">
                <button className="visual-aid-btn">😊 감정 카드</button>
                <button className="visual-aid-btn">📷 사진 첨부</button>
                <button className="visual-aid-btn">🎨 그림판</button>
                <button className="visual-aid-btn">✅ 체크리스트</button>
              </div>
            </div>

            <div className="message-input-area">
              <input
                type="text"
                placeholder="메시지를 입력하세요... (AI가 자동으로 중립화 제안을 해드립니다)"
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
              <h3>발달 현황 - 성장 여정 추적</h3>
              <span className="period">최근 3개월 (2025.7 - 2025.10)</span>
            </div>

            {/* Summary Banner */}
            <div className="growth-summary-banner">
              <div className="summary-icon">📈</div>
              <div className="summary-text">
                <strong>전체 성장률: +14%</strong>
                <p>민수는 지난 3개월간 꾸준한 성장을 보이고 있습니다. 특히 의사소통과 집중력이 크게 향상되었습니다.</p>
              </div>
            </div>

            <div className="progress-cards">
              {progressData.map((item, index) => (
                <div key={index} className="progress-card">
                  <div className="progress-header">
                    <h4>{item.category}</h4>
                    <span className={`improvement ${item.improvement.includes('+') ? 'positive' : ''}`}>
                      {item.improvement}
                    </span>
                  </div>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <div className="progress-details">
                    <span className="progress-percentage">{item.progress}%</span>
                    <span className="recent-activity">{item.recentActivity}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Time-based Causality Visualization */}
            <div className="causality-section">
              <h4>📊 행동 인과관계 분석</h4>
              <div className="causality-example">
                <div className="cause-item">
                  <span className="cause-label">원인</span>
                  <p>아침에 충분한 수면 (보호자 기록)</p>
                </div>
                <div className="arrow">→</div>
                <div className="effect-item">
                  <span className="effect-label">결과</span>
                  <p>오전 활동 집중력 향상 (교사 기록)</p>
                </div>
              </div>
              <div className="causality-example">
                <div className="cause-item">
                  <span className="cause-label">원인</span>
                  <p>친구와 보드게임 성공 경험</p>
                </div>
                <div className="arrow">→</div>
                <div className="effect-item">
                  <span className="effect-label">결과</span>
                  <p>사회성 점수 +15% 향상</p>
                </div>
              </div>
            </div>

            <div className="insights-box">
              <h4>💡 AI 기반 전문가 인사이트</h4>
              <ul>
                <li><strong>사회성:</strong> 그룹 활동 참여도가 꾸준히 향상되고 있습니다. 친구들과의 협력 활동에서 긍정적인 변화가 관찰됩니다.</li>
                <li><strong>의사소통:</strong> 스스로 관찰한 내용을 말로 표현하는 능력이 크게 개선되었습니다. 감정 카드 활용이 효과적입니다.</li>
                <li><strong>자립생활:</strong> 식사 예절, 개인 위생 등 일상생활 루틴을 안정적으로 수행하고 있습니다.</li>
                <li><strong>집중력:</strong> 30분 이상 한 가지 활동에 집중할 수 있게 되었습니다. 미술 활동에서 특히 두드러집니다.</li>
              </ul>
            </div>

            {/* Growth Report Download */}
            <div className="report-download-section">
              <h4>📋 성장 리포트</h4>
              <p>지난 3개월간의 발달 현황을 종합한 리포트를 다운로드하실 수 있습니다.</p>
              <button className="download-report-btn">📥 리포트 다운로드 (PDF)</button>
            </div>
          </section>
        )}

        {/* Profile Tab - NEW */}
        {activeTab === 'profile' && (
          <section className="profile-section">
            <div className="section-header">
              <h3>나의 프로필 - 성장의 기록</h3>
              <span className="profile-badge">36개월 누적 데이터</span>
            </div>

            {/* Emotion History */}
            <div className="emotion-history-section">
              <h4>나의 감정 살펴보기</h4>
              <p className="section-description">
                커버비는 유독 <strong>꾸준한 정리정돈에 강점</strong>이 있어요.
              </p>
              <div className="emotion-grid">
                {emotionHistory.map((emotion, index) => (
                  <div key={index} className="emotion-item">
                    <div className="emotion-emoji">{emotion.emoji}</div>
                    <div className="emotion-name">{emotion.emotion}</div>
                    <div className="emotion-count">{emotion.count}회 경험</div>
                    <div className="emotion-trend">{emotion.trend}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Capability Radar Chart */}
            <div className="capability-section">
              <h4>나의 역량 살펴보기</h4>
              <div className="radar-chart-placeholder">
                <div className="radar-visual">
                  <div className="radar-center">민수</div>
                  <div className="radar-point radar-creativity" style={{ top: '10%', left: '50%' }}>
                    창의성 85
                  </div>
                  <div className="radar-point radar-focus" style={{ top: '30%', right: '10%' }}>
                    집중력 68
                  </div>
                  <div className="radar-point radar-cooperation" style={{ bottom: '30%', right: '15%' }}>
                    협동성 72
                  </div>
                  <div className="radar-point radar-communication" style={{ bottom: '10%', left: '50%' }}>
                    의사소통 60
                  </div>
                  <div className="radar-point radar-affinity" style={{ top: '30%', left: '10%' }}>
                    친화력 78
                  </div>
                </div>
              </div>
              <div className="capability-details">
                {capabilityProfile.map((capability, index) => (
                  <div key={index} className="capability-item">
                    <div className="capability-header">
                      <span className="capability-name">{capability.name}</span>
                      <span className="capability-score">{capability.score}점</span>
                    </div>
                    <div className="capability-bar">
                      <div
                        className="capability-fill"
                        style={{ width: `${capability.score}%` }}
                      ></div>
                    </div>
                    <p className="capability-description">{capability.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio Download */}
            <div className="portfolio-section">
              <h4>포트폴리오 다운로드</h4>
              <p className="portfolio-description">
                꾸준한 정리정돈 역량을 살릴 수 있는 직업<br />
                사소한 것들을 잘 챙기는, 수공예
              </p>
              <div className="portfolio-preview">
                <div className="preview-icon">📄</div>
                <div className="preview-text">
                  <strong>김민수 포트폴리오</strong>
                  <p>36개월간의 성장 기록, 역량 분석, 전문가 의견 포함</p>
                </div>
              </div>
              <div className="portfolio-usage">
                <h5>활용 분야</h5>
                <ul>
                  <li>✅ 취업 지원 자료</li>
                  <li>✅ 전문가 상담 자료</li>
                  <li>✅ 교육 기관 전환 시 참고 자료</li>
                  <li>✅ 자기 이해 및 성장 확인</li>
                </ul>
              </div>
              <button className="download-portfolio-btn">📥 포트폴리오 다운로드</button>
            </div>
          </section>
        )}
      </div>

      {/* Feature Highlights */}
      <section className="features-section">
        <h3>플랫폼 핵심 기능 - 3가지 UX 키워드</h3>
        <div className="features-grid">
          <div className="feature-item feature-understanding">
            <span className="feature-icon">💡</span>
            <h4>Understanding - 맥락 이해</h4>
            <p>쌍방향 기록 템플릿으로 행동의 배경과 인과관계를 시각화합니다</p>
            <ul className="feature-details">
              <li>시간축 기반 다자간 기록 연결</li>
              <li>보호자-교사-전문가 기록 통합</li>
              <li>행동 인과관계 자동 분석</li>
            </ul>
          </div>
          <div className="feature-item feature-reliable">
            <span className="feature-icon">🤝</span>
            <h4>Reliable - 신뢰 관계 유지</h4>
            <p>AI 기반 감정 중립화로 오해 없는 소통을 지원합니다</p>
            <ul className="feature-details">
              <li>감정적 표현 자동 감지 및 중립화</li>
              <li>신뢰 기반 권한 관리</li>
              <li>안전한 정보 공유 시스템</li>
            </ul>
          </div>
          <div className="feature-item feature-valuable">
            <span className="feature-icon">💎</span>
            <h4>Valuable - 추가 가치 창출</h4>
            <p>기록을 돌봄에서 성장으로 확장하여 가치를 만듭니다</p>
            <ul className="feature-details">
              <li>AI 기반 역량 프로필 생성</li>
              <li>취업 포트폴리오 자동 생성</li>
              <li>장기 발달 추이 리포트</li>
            </ul>
          </div>
        </div>

        <div className="additional-features">
          <h4>추가 핵심 기능</h4>
          <div className="additional-features-grid">
            <div className="additional-feature">
              <span className="feature-icon">👁️</span>
              <h5>시각적 인터페이스</h5>
              <p>아이콘, 감정 카드, 이미지 중심의 직관적 소통</p>
            </div>
            <div className="additional-feature">
              <span className="feature-icon">🔒</span>
              <h5>프라이버시 보호</h5>
              <p>민감 정보 암호화 및 접근 권한 관리</p>
            </div>
            <div className="additional-feature">
              <span className="feature-icon">📊</span>
              <h5>데이터 기반 인사이트</h5>
              <p>AI가 패턴을 분석하여 발달 인사이트 제공</p>
            </div>
            <div className="additional-feature">
              <span className="feature-icon">🌐</span>
              <h5>다자간 협력</h5>
              <p>보호자, 교사, 전문가 간 실시간 협력</p>
            </div>
          </div>
        </div>

        {/* Project Vision */}
        <div className="project-vision">
          <h4>프로젝트 비전</h4>
          <blockquote>
            "발달장애인의 소중한 일상 이해를 돕는 기록이음 서비스"
            <br /><br />
            교육기관과 보호자 간의 기록을 신뢰 기반으로 공유하고,
            이를 통해 발달장애인의 성장 여정과 프로필을 축적합니다.
            <br /><br />
            우리는 장애인 당사자와 관련 이해관계자의 포괄적 성장을 지원하고 꿈꿉니다.
            그래서, 서로 믿을 수 있는 방식으로 기록을 잇겠습니다.
            그리하여 <strong>이해와 신뢰 아래 새로운 가치</strong>를 만들겠습니다.
          </blockquote>
        </div>
      </section>
    </div>
  );
}

export default DreamGarden;
