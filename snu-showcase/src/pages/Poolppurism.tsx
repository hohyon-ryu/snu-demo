import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Poolppurism.css';

interface Proposal {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  votes: number;
  status: 'submitted' | 'reviewing' | 'voting' | 'approved' | 'implemented';
  description: string;
  comments: number;
}

const mockProposals: Proposal[] = [
  {
    id: '1',
    title: '마을 공원에 야외 도서관 설치 제안',
    category: '문화/여가',
    author: '김민수',
    date: '2025-10-15',
    votes: 234,
    status: 'voting',
    description: '주민들이 자유롭게 이용할 수 있는 야외 도서관을 공원에 설치하여 독서 문화를 활성화하고자 합니다.',
    comments: 45
  },
  {
    id: '2',
    title: '학교 앞 어린이 보호구역 CCTV 확대',
    category: '안전/교통',
    author: '이영희',
    date: '2025-10-12',
    votes: 567,
    status: 'approved',
    description: '초등학교 앞 교통사고 예방을 위해 CCTV를 추가 설치하고 횡단보도 개선이 필요합니다.',
    comments: 89
  },
  {
    id: '3',
    title: '재활용 분리수거함 스마트화 사업',
    category: '환경',
    author: '박지훈',
    date: '2025-10-10',
    votes: 423,
    status: 'reviewing',
    description: 'IoT 기술을 활용한 스마트 분리수거함 설치로 재활용률을 높이고 환경 개선에 기여합니다.',
    comments: 67
  },
  {
    id: '4',
    title: '노인 복지관 프로그램 확대',
    category: '복지',
    author: '최수진',
    date: '2025-10-08',
    votes: 189,
    status: 'submitted',
    description: '고령화 사회에 대비하여 노인 복지관의 프로그램을 다양화하고 이용 시간을 확대합니다.',
    comments: 23
  }
];

function Poolppurism() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<'all' | 'popular' | 'new'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const categories = ['전체', '문화/여가', '안전/교통', '환경', '복지', '교육', '기타'];

  const getStatusText = (status: string) => {
    const statusMap = {
      submitted: '제안완료',
      reviewing: '검토중',
      voting: '투표중',
      approved: '승인됨',
      implemented: '시행완료'
    };
    return statusMap[status as keyof typeof statusMap] || status;
  };

  const getStatusColor = (status: string) => {
    const colorMap = {
      submitted: '#6B7280',
      reviewing: '#F59E0B',
      voting: '#3B82F6',
      approved: '#10B981',
      implemented: '#8B5CF6'
    };
    return colorMap[status as keyof typeof colorMap] || '#6B7280';
  };

  return (
    <div className="poolppurism-container">
      {/* Header */}
      <header className="poolppurism-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← 홈으로
        </button>
        <div className="header-content">
          <h1>풀뿌리즘</h1>
          <p className="subtitle">지역 주민이 만드는 우리 동네 정책</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>당신의 목소리로 우리 동네를 바꿔보세요</h2>
          <p>주민 여러분의 아이디어가 실제 정책이 됩니다</p>
          <button className="cta-button">
            정책 제안하기
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">1,234</div>
            <div className="stat-label">제안된 정책</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">567</div>
            <div className="stat-label">승인된 정책</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">89</div>
            <div className="stat-label">시행중인 정책</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>풀뿌리즘은 이렇게 작동합니다</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>정책 제안</h3>
            <p>우리 동네에 필요한 정책을 자유롭게 제안합니다</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>주민 투표</h3>
            <p>다른 주민들이 제안에 투표하고 의견을 나눕니다</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>정부 검토</h3>
            <p>일정 득표 이상의 제안을 지방정부가 검토합니다</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>정책 시행</h3>
            <p>승인된 정책이 실제로 우리 동네에 적용됩니다</p>
          </div>
        </div>
      </section>

      {/* Proposal List */}
      <section className="proposals-section">
        <div className="section-header">
          <h2>제안된 정책 목록</h2>
          <div className="tab-buttons">
            <button
              className={selectedTab === 'all' ? 'active' : ''}
              onClick={() => setSelectedTab('all')}
            >
              전체
            </button>
            <button
              className={selectedTab === 'popular' ? 'active' : ''}
              onClick={() => setSelectedTab('popular')}
            >
              인기순
            </button>
            <button
              className={selectedTab === 'new' ? 'active' : ''}
              onClick={() => setSelectedTab('new')}
            >
              최신순
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Proposals Grid */}
        <div className="proposals-grid">
          {mockProposals.map(proposal => (
            <div key={proposal.id} className="proposal-card">
              <div className="proposal-header">
                <span className="proposal-category">{proposal.category}</span>
                <span
                  className="proposal-status"
                  style={{ backgroundColor: getStatusColor(proposal.status) }}
                >
                  {getStatusText(proposal.status)}
                </span>
              </div>
              <h3 className="proposal-title">{proposal.title}</h3>
              <p className="proposal-description">{proposal.description}</p>
              <div className="proposal-meta">
                <span className="proposal-author">제안자: {proposal.author}</span>
                <span className="proposal-date">{proposal.date}</span>
              </div>
              <div className="proposal-footer">
                <div className="proposal-votes">
                  <span className="vote-icon">👍</span>
                  <span className="vote-count">{proposal.votes}</span>
                </div>
                <div className="proposal-comments">
                  <span className="comment-icon">💬</span>
                  <span className="comment-count">{proposal.comments}</span>
                </div>
                <button className="view-details-button">자세히 보기</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>풀뿌리즘의 주요 기능</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>간편한 정책 제안</h3>
            <p>누구나 쉽게 정책을 제안하고 공유할 수 있습니다</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🗳️</div>
            <h3>투명한 투표 시스템</h3>
            <p>블록체인 기반 투명한 투표로 신뢰성을 보장합니다</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>활발한 토론</h3>
            <p>제안에 대한 건설적인 토론과 개선이 이루어집니다</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏛️</div>
            <h3>정부 연계</h3>
            <p>지방자치단체와 직접 연결되어 실제 정책화가 가능합니다</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>진행 상황 추적</h3>
            <p>제안한 정책의 진행 상황을 실시간으로 확인할 수 있습니다</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>맞춤형 알림</h3>
            <p>관심 있는 분야의 새로운 제안을 즉시 알려드립니다</p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <h2>실현된 정책 사례</h2>
        <div className="stories-grid">
          <div className="story-card">
            <div className="story-badge">시행완료</div>
            <h3>어린이공원 놀이터 개선</h3>
            <p className="story-description">
              주민 김OO님의 제안으로 낙후된 놀이터가 안전하고 현대적인 시설로 새롭게 단장되었습니다.
            </p>
            <div className="story-stats">
              <span>투표: 892명</span>
              <span>시행기간: 3개월</span>
            </div>
          </div>
          <div className="story-card">
            <div className="story-badge">시행완료</div>
            <h3>심야버스 노선 신설</h3>
            <p className="story-description">
              야간 근무자들을 위한 심야버스 노선이 주민 투표를 거쳐 실제로 개설되었습니다.
            </p>
            <div className="story-stats">
              <span>투표: 1,234명</span>
              <span>시행기간: 6개월</span>
            </div>
          </div>
          <div className="story-card">
            <div className="story-badge">시행완료</div>
            <h3>공공 와이파이 확대</h3>
            <p className="story-description">
              공원과 주요 거점에 무료 공공 와이파이가 설치되어 디지털 접근성이 향상되었습니다.
            </p>
            <div className="story-stats">
              <span>투표: 756명</span>
              <span>시행기간: 4개월</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>지금 바로 시작하세요</h2>
        <p>당신의 아이디어가 우리 동네를 더 살기 좋은 곳으로 만듭니다</p>
        <div className="cta-buttons">
          <button className="primary-cta">정책 제안하기</button>
          <button className="secondary-cta">정책 둘러보기</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="poolppurism-footer">
        <p>풀뿌리즘 - 지역 주민 정책 제안 플랫폼</p>
        <p className="footer-note">서울대학교 정보문화학 프로젝트</p>
      </footer>
    </div>
  );
}

export default Poolppurism;
