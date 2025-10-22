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
  status: 'open' | 'under-review' | 'voting' | 'accepted' | 'closed';
  description: string;
  comments: number;
}

const mockProposals: Proposal[] = [
  {
    id: '#1',
    title: '마을 공원에 야외 도서관 설치 제안',
    category: '문화/여가',
    author: 'kimminsu',
    date: 'Oct 15',
    votes: 234,
    status: 'voting',
    description: '주민들이 자유롭게 이용할 수 있는 야외 도서관을 공원에 설치하여 독서 문화를 활성화하고자 합니다.',
    comments: 45
  },
  {
    id: '#2',
    title: '학교 앞 어린이 보호구역 CCTV 확대',
    category: '안전/교통',
    author: 'younghee-lee',
    date: 'Oct 12',
    votes: 567,
    status: 'accepted',
    description: '초등학교 앞 교통사고 예방을 위해 CCTV를 추가 설치하고 횡단보도 개선이 필요합니다.',
    comments: 89
  },
  {
    id: '#3',
    title: '재활용 분리수거함 스마트화 사업',
    category: '환경',
    author: 'jihoon-park',
    date: 'Oct 10',
    votes: 423,
    status: 'under-review',
    description: 'IoT 기술을 활용한 스마트 분리수거함 설치로 재활용률을 높이고 환경 개선에 기여합니다.',
    comments: 67
  },
  {
    id: '#4',
    title: '노인 복지관 프로그램 확대',
    category: '복지',
    author: 'sujin-choi',
    date: 'Oct 8',
    votes: 189,
    status: 'open',
    description: '고령화 사회에 대비하여 노인 복지관의 프로그램을 다양화하고 이용 시간을 확대합니다.',
    comments: 23
  }
];

function Poolppurism() {
  const navigate = useNavigate();
  const [selectedView, setSelectedView] = useState<'proposals' | 'categories'>('proposals');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      open: { text: 'Open', className: 'status-open' },
      'under-review': { text: 'Under review', className: 'status-review' },
      voting: { text: 'Voting', className: 'status-voting' },
      accepted: { text: 'Accepted', className: 'status-accepted' },
      closed: { text: 'Closed', className: 'status-closed' }
    };
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.open;
  };

  return (
    <div className="gh-container">
      {/* Header */}
      <header className="gh-header">
        <div className="gh-header-container">
          <div className="gh-header-left">
            <button className="gh-back-btn" onClick={() => navigate('/')}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M7.78 12.53a.75.75 0 0 1-1.06 0L2.47 8.28a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L4.81 7h7.44a.75.75 0 0 1 0 1.5H4.81l2.97 2.97a.75.75 0 0 1 0 1.06Z"></path>
              </svg>
              Back
            </button>
            <div className="gh-header-divider"></div>
            <h1 className="gh-title">풀뿌리즘</h1>
            <span className="gh-subtitle">Community Policy Platform</span>
          </div>
          <button className="gh-btn-primary">New proposal</button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="gh-nav">
        <div className="gh-nav-container">
          <button
            className={`gh-nav-item ${selectedView === 'proposals' ? 'active' : ''}`}
            onClick={() => setSelectedView('proposals')}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
            </svg>
            Proposals
            <span className="gh-counter">4</span>
          </button>
          <button
            className={`gh-nav-item ${selectedView === 'categories' ? 'active' : ''}`}
            onClick={() => setSelectedView('categories')}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75C0 1.784.784 1 1.75 1ZM1.5 2.75v10.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path>
            </svg>
            Categories
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="gh-main">
        <div className="gh-main-container">
          {/* Sidebar */}
          <aside className="gh-sidebar">
            <div className="gh-sidebar-section">
              <h3 className="gh-sidebar-title">Filters</h3>
              <div className="gh-filter-group">
                <button
                  className={`gh-filter-item ${selectedFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('all')}
                >
                  All proposals
                  <span className="gh-filter-count">4</span>
                </button>
                <button
                  className={`gh-filter-item ${selectedFilter === 'open' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('open')}
                >
                  Open
                  <span className="gh-filter-count">1</span>
                </button>
                <button
                  className={`gh-filter-item ${selectedFilter === 'voting' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('voting')}
                >
                  Voting
                  <span className="gh-filter-count">1</span>
                </button>
                <button
                  className={`gh-filter-item ${selectedFilter === 'accepted' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('accepted')}
                >
                  Accepted
                  <span className="gh-filter-count">1</span>
                </button>
              </div>
            </div>

            <div className="gh-sidebar-section">
              <h3 className="gh-sidebar-title">Categories</h3>
              <div className="gh-category-list">
                <div className="gh-category-item">문화/여가</div>
                <div className="gh-category-item">안전/교통</div>
                <div className="gh-category-item">환경</div>
                <div className="gh-category-item">복지</div>
                <div className="gh-category-item">교육</div>
              </div>
            </div>

            <div className="gh-sidebar-section">
              <h3 className="gh-sidebar-title">Statistics</h3>
              <div className="gh-stats-list">
                <div className="gh-stat-item">
                  <span className="gh-stat-label">Total proposals</span>
                  <span className="gh-stat-value">1,234</span>
                </div>
                <div className="gh-stat-item">
                  <span className="gh-stat-label">Accepted</span>
                  <span className="gh-stat-value">567</span>
                </div>
                <div className="gh-stat-item">
                  <span className="gh-stat-label">In progress</span>
                  <span className="gh-stat-value">89</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <div className="gh-content">
            {/* Search and Sort */}
            <div className="gh-toolbar">
              <div className="gh-search-wrapper">
                <svg className="gh-search-icon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.5 4.5 0 1 0-8.999 0A4.5 4.5 0 0 0 11.5 7Z"></path>
                </svg>
                <input
                  type="text"
                  className="gh-search-input"
                  placeholder="Search all proposals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="gh-sort-group">
                <button className="gh-sort-btn">
                  Sort: Newest
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M4.427 7.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Proposal List */}
            <div className="gh-proposal-list">
              {mockProposals.map((proposal) => {
                const statusBadge = getStatusBadge(proposal.status);
                return (
                  <div key={proposal.id} className="gh-proposal-item">
                    <div className="gh-proposal-icon">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                      </svg>
                    </div>
                    <div className="gh-proposal-content">
                      <div className="gh-proposal-header">
                        <h3 className="gh-proposal-title">{proposal.title}</h3>
                        <div className="gh-proposal-labels">
                          <span className={`gh-label ${statusBadge.className}`}>
                            {statusBadge.text}
                          </span>
                          <span className="gh-label gh-label-category">
                            {proposal.category}
                          </span>
                        </div>
                      </div>
                      <p className="gh-proposal-description">{proposal.description}</p>
                      <div className="gh-proposal-meta">
                        <span className="gh-proposal-number">{proposal.id}</span>
                        <span className="gh-meta-dot">•</span>
                        <span className="gh-proposal-author">@{proposal.author}</span>
                        <span className="gh-meta-text">opened on {proposal.date}</span>
                      </div>
                    </div>
                    <div className="gh-proposal-stats">
                      <div className="gh-stat-box">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                        </svg>
                        <span>{proposal.votes}</span>
                      </div>
                      <div className="gh-stat-box">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Z"></path>
                        </svg>
                        <span>{proposal.comments}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="gh-footer">
        <div className="gh-footer-container">
          <div className="gh-footer-content">
            <span>풀뿌리즘 - Community Policy Platform</span>
            <span className="gh-footer-divider">•</span>
            <span>서울대학교 정보문화학 프로젝트</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Poolppurism;
