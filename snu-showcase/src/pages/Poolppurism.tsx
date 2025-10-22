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
  status: 'opinion-gathering' | 'clustered' | 'agenda-created' | 'under-review' | 'voting' | 'accepted' | 'implemented' | 'rejected';
  description: string;
  comments: number;
  opinionCount?: number;
  relatedLinks?: string[];
  governmentResponse?: string;
  implementationProgress?: number;
  tags?: string[];
}

const mockProposals: Proposal[] = [
  {
    id: '#127',
    title: '00면 경로당 쓰레기 배출 요구',
    category: '생활/환경',
    author: 'resident-choi',
    date: '2025.10.15',
    votes: 892,
    status: 'implemented',
    description: '00면 경로당 앞 쓰레기 수거가 너무 늦게 이루어져 악취와 위생 문제가 발생하고 있습니다. 쓰레기 배출 빈도를 주 2회에서 주 3회로 늘려주시기 바랍니다.',
    comments: 156,
    opinionCount: 27,
    relatedLinks: ['2025년 생활폐기물 처리계획', '타 지역 수거 빈도 비교'],
    governmentResponse: '00면 경로당 쓰레기 배출이 문제점을 확인했으며, 2025.09.15부터 주 3회로 증량했습니다. 이용에 불편을 드려 죄송합니다.',
    implementationProgress: 100,
    tags: ['완료', '생활환경']
  },
  {
    id: '#156',
    title: '학교 앞 어린이 보호구역 CCTV 확대 및 횡단보도 개선',
    category: '안전/교통',
    author: 'parent-lee',
    date: '2025.10.10',
    votes: 1243,
    status: 'voting',
    description: '초등학교 앞 교통사고 위험이 높습니다. CCTV 3대 추가 설치와 노후 횡단보도 재정비가 필요합니다. 아이들의 안전한 등하교를 위해 시급한 조치가 필요합니다.',
    comments: 234,
    opinionCount: 45,
    relatedLinks: ['어린이보호구역 교통사고 통계', '타 지역 안전시설 사례'],
    governmentResponse: '예산 검토 중입니다. 2026년 상반기 시행 계획 중입니다.',
    implementationProgress: 35,
    tags: ['투표진행중', '교육안전']
  },
  {
    id: '#178',
    title: '재활용 분리수거함 스마트화 및 IoT 관리 시스템 도입',
    category: '환경',
    author: 'eco-park',
    date: '2025.10.08',
    votes: 678,
    status: 'under-review',
    description: 'IoT 센서가 장착된 스마트 분리수거함을 도입하여 수거 시기를 최적화하고, 주민들에게 실시간 포만도 정보를 제공합니다. 환경 개선과 수거 효율성 향상을 동시에 달성할 수 있습니다.',
    comments: 89,
    opinionCount: 23,
    relatedLinks: ['서울시 스마트 쓰레기통 시범사업', 'IoT 분리수거 기술 보고서'],
    governmentResponse: '기술 검토 및 예산 산정 중입니다.',
    implementationProgress: 20,
    tags: ['검토중', '스마트시티']
  },
  {
    id: '#192',
    title: '노인 복지관 프로그램 확대 및 디지털 문해력 교육',
    category: '복지/교육',
    author: 'senior-kim',
    date: '2025.10.05',
    votes: 456,
    status: 'agenda-created',
    description: '고령화 사회에 대비하여 노인 복지관 프로그램을 확대하고, 스마트폰 사용법, 키오스크 이용 등 디지털 기기 활용 교육이 필요합니다. 주 2회 정규 프로그램 개설을 요청합니다.',
    comments: 67,
    opinionCount: 19,
    tags: ['안건작성됨', '고령친화']
  },
  {
    id: '#203',
    title: '마을 공원에 야외 도서관 및 북카페 공간 조성',
    category: '문화/여가',
    author: 'bookworm-jung',
    date: '2025.10.03',
    votes: 834,
    status: 'clustered',
    description: '주민들이 자유롭게 책을 읽고 교류할 수 있는 야외 도서관을 마을 공원에 설치하여 독서 문화를 활성화하고 커뮤니티 공간으로 활용하고자 합니다.',
    comments: 112,
    opinionCount: 31,
    tags: ['의견수렴중', '문화공간']
  },
  {
    id: '#214',
    title: '공영 주차장 부족 문제 해결 - 다층 주차장 건설',
    category: '교통/주차',
    author: 'driver-yoon',
    date: '2025.09.30',
    votes: 1089,
    status: 'voting',
    description: '주민 차량 증가로 주차 공간이 절대적으로 부족합니다. 00동 유휴 부지에 3층 규모의 공영 주차장 건설을 제안합니다. 약 150대 수용 가능합니다.',
    comments: 198,
    opinionCount: 52,
    relatedLinks: ['주차장 수요 조사 보고서', '인근 지역 주차장 현황'],
    governmentResponse: '부지 선정 및 타당성 조사를 진행하겠습니다.',
    implementationProgress: 15,
    tags: ['투표진행중', '주차문제']
  },
  {
    id: '#225',
    title: '골목길 LED 가로등 교체 및 방범 CCTV 증설',
    category: '안전/치안',
    author: 'resident-kang',
    date: '2025.09.28',
    votes: 567,
    status: 'opinion-gathering',
    description: '어두운 골목길의 가로등을 밝은 LED로 교체하고 사각지대에 방범 CCTV를 증설하여 야간 안전을 강화해야 합니다. 특히 00길 일대가 시급합니다.',
    comments: 45,
    opinionCount: 15,
    tags: ['의견모집중', '야간안전']
  },
  {
    id: '#236',
    title: '청년 창업 지원센터 설립 및 멘토링 프로그램',
    category: '경제/일자리',
    author: 'entrepreneur-han',
    date: '2025.09.25',
    votes: 723,
    status: 'clustered',
    description: '지역 청년들의 창업을 지원하는 센터를 설립하고, 성공한 지역 기업인들의 멘토링 프로그램을 운영하여 지역 경제 활성화에 기여하고자 합니다.',
    comments: 91,
    opinionCount: 28,
    tags: ['의견수렴중', '청년지원']
  }
];

function Poolppurism() {
  const navigate = useNavigate();
  const [selectedView, setSelectedView] = useState<'proposals' | 'categories'>('proposals');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'opinion-gathering': { text: '의견 모집 중', className: 'status-gathering' },
      'clustered': { text: '의견 수렴 중', className: 'status-clustered' },
      'agenda-created': { text: '안건 작성됨', className: 'status-agenda' },
      'under-review': { text: '검토 중', className: 'status-review' },
      'voting': { text: '투표 진행 중', className: 'status-voting' },
      'accepted': { text: '승인됨', className: 'status-accepted' },
      'implemented': { text: '시행 완료', className: 'status-implemented' },
      'rejected': { text: '거부됨', className: 'status-rejected' }
    };
    return statusConfig[status as keyof typeof statusConfig] || statusConfig['opinion-gathering'];
  };

  const getFilteredProposals = () => {
    let filtered = mockProposals;

    if (selectedFilter !== 'all') {
      filtered = filtered.filter(p => p.status === selectedFilter);
    }

    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const filteredProposals = getFilteredProposals();

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
            <span className="gh-subtitle">지역 주민 정책 제안 플랫폼</span>
          </div>
          <button className="gh-btn-primary">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: '6px' }}>
              <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
            </svg>
            새로운 의견 제출
          </button>
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
            정책 제안
            <span className="gh-counter">{mockProposals.length}</span>
          </button>
          <button
            className={`gh-nav-item ${selectedView === 'categories' ? 'active' : ''}`}
            onClick={() => setSelectedView('categories')}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75C0 1.784.784 1 1.75 1ZM1.5 2.75v10.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path>
            </svg>
            카테고리
          </button>
          <button className="gh-nav-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M1.5 3.25c0-.966.784-1.75 1.75-1.75h2.5c.966 0 1.75.784 1.75 1.75v2.5c0 .966-.784 1.75-1.75 1.75h-2.5c-.966 0-1.75-.784-1.75-1.75v-2.5Zm7.5 0c0-.966.784-1.75 1.75-1.75h2.5c.966 0 1.75.784 1.75 1.75v2.5c0 .966-.784 1.75-1.75 1.75h-2.5c-.966 0-1.75-.784-1.75-1.75v-2.5Zm-7.5 7.5c0-.966.784-1.75 1.75-1.75h2.5c.966 0 1.75.784 1.75 1.75v2.5c0 .966-.784 1.75-1.75 1.75h-2.5c-.966 0-1.75-.784-1.75-1.75v-2.5Zm7.5 0c0-.966.784-1.75 1.75-1.75h2.5c.966 0 1.75.784 1.75 1.75v2.5c0 .966-.784 1.75-1.75 1.75h-2.5c-.966 0-1.75-.784-1.75-1.75v-2.5Z"></path>
            </svg>
            통계
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="gh-main">
        <div className="gh-main-container">
          {/* Sidebar */}
          <aside className="gh-sidebar">
            <div className="gh-sidebar-section">
              <h3 className="gh-sidebar-title">제안 단계별 필터</h3>
              <div className="gh-filter-group">
                <button
                  className={`gh-filter-item ${selectedFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('all')}
                >
                  전체 제안
                  <span className="gh-filter-count">{mockProposals.length}</span>
                </button>
                <button
                  className={`gh-filter-item ${selectedFilter === 'opinion-gathering' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('opinion-gathering')}
                >
                  의견 모집 중
                  <span className="gh-filter-count">
                    {mockProposals.filter(p => p.status === 'opinion-gathering').length}
                  </span>
                </button>
                <button
                  className={`gh-filter-item ${selectedFilter === 'clustered' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('clustered')}
                >
                  의견 수렴 중
                  <span className="gh-filter-count">
                    {mockProposals.filter(p => p.status === 'clustered').length}
                  </span>
                </button>
                <button
                  className={`gh-filter-item ${selectedFilter === 'voting' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('voting')}
                >
                  투표 진행 중
                  <span className="gh-filter-count">
                    {mockProposals.filter(p => p.status === 'voting').length}
                  </span>
                </button>
                <button
                  className={`gh-filter-item ${selectedFilter === 'under-review' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('under-review')}
                >
                  검토 중
                  <span className="gh-filter-count">
                    {mockProposals.filter(p => p.status === 'under-review').length}
                  </span>
                </button>
                <button
                  className={`gh-filter-item ${selectedFilter === 'implemented' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('implemented')}
                >
                  시행 완료
                  <span className="gh-filter-count">
                    {mockProposals.filter(p => p.status === 'implemented').length}
                  </span>
                </button>
              </div>
            </div>

            <div className="gh-sidebar-section">
              <h3 className="gh-sidebar-title">카테고리</h3>
              <div className="gh-category-list">
                <div className="gh-category-item">
                  <span className="category-icon">🏘️</span>
                  생활/환경
                </div>
                <div className="gh-category-item">
                  <span className="category-icon">🚸</span>
                  안전/교통
                </div>
                <div className="gh-category-item">
                  <span className="category-icon">♻️</span>
                  환경
                </div>
                <div className="gh-category-item">
                  <span className="category-icon">🏥</span>
                  복지/교육
                </div>
                <div className="gh-category-item">
                  <span className="category-icon">📚</span>
                  문화/여가
                </div>
                <div className="gh-category-item">
                  <span className="category-icon">💼</span>
                  경제/일자리
                </div>
              </div>
            </div>

            <div className="gh-sidebar-section">
              <h3 className="gh-sidebar-title">플랫폼 통계</h3>
              <div className="gh-stats-list">
                <div className="gh-stat-item">
                  <span className="gh-stat-label">전체 제안</span>
                  <span className="gh-stat-value">2,847</span>
                </div>
                <div className="gh-stat-item">
                  <span className="gh-stat-label">시행 완료</span>
                  <span className="gh-stat-value">1,234</span>
                </div>
                <div className="gh-stat-item">
                  <span className="gh-stat-label">검토/투표 중</span>
                  <span className="gh-stat-value">156</span>
                </div>
                <div className="gh-stat-item">
                  <span className="gh-stat-label">참여 주민</span>
                  <span className="gh-stat-value">8,923</span>
                </div>
                <div className="gh-stat-item">
                  <span className="gh-stat-label">이번 달 제안</span>
                  <span className="gh-stat-value">47</span>
                </div>
              </div>
            </div>

            <div className="gh-sidebar-section">
              <h3 className="gh-sidebar-title">제안 프로세스</h3>
              <div className="process-flow">
                <div className="process-step">
                  <div className="process-number">1</div>
                  <div className="process-label">의견 수집</div>
                </div>
                <div className="process-arrow">↓</div>
                <div className="process-step">
                  <div className="process-number">2</div>
                  <div className="process-label">클러스터링</div>
                </div>
                <div className="process-arrow">↓</div>
                <div className="process-step">
                  <div className="process-number">3</div>
                  <div className="process-label">안건 작성</div>
                </div>
                <div className="process-arrow">↓</div>
                <div className="process-step">
                  <div className="process-number">4</div>
                  <div className="process-label">주민 투표</div>
                </div>
                <div className="process-arrow">↓</div>
                <div className="process-step">
                  <div className="process-number">5</div>
                  <div className="process-label">정부 검토</div>
                </div>
                <div className="process-arrow">↓</div>
                <div className="process-step">
                  <div className="process-number">6</div>
                  <div className="process-label">시행 및 피드백</div>
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
                  placeholder="제안 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="gh-sort-group">
                <button className="gh-sort-btn">
                  정렬: 최신순
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M4.427 7.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Proposal List */}
            <div className="gh-proposal-list">
              {filteredProposals.map((proposal) => {
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
                          {proposal.opinionCount && (
                            <span className="gh-label gh-label-opinions">
                              수집된 의견: {proposal.opinionCount}개
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="gh-proposal-description">{proposal.description}</p>

                      {proposal.tags && proposal.tags.length > 0 && (
                        <div className="gh-proposal-tags">
                          {proposal.tags.map((tag, idx) => (
                            <span key={idx} className="gh-tag">#{tag}</span>
                          ))}
                        </div>
                      )}

                      {proposal.implementationProgress !== undefined && proposal.implementationProgress > 0 && (
                        <div className="gh-progress-section">
                          <div className="gh-progress-header">
                            <span className="gh-progress-label">시행 진행도</span>
                            <span className="gh-progress-value">{proposal.implementationProgress}%</span>
                          </div>
                          <div className="gh-progress-bar">
                            <div
                              className="gh-progress-fill"
                              style={{ width: `${proposal.implementationProgress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}

                      {proposal.governmentResponse && (
                        <div className="gh-government-response">
                          <div className="gh-response-header">
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                              <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Z"></path>
                            </svg>
                            <strong>정부 답변</strong>
                          </div>
                          <p>{proposal.governmentResponse}</p>
                        </div>
                      )}

                      {proposal.relatedLinks && proposal.relatedLinks.length > 0 && (
                        <div className="gh-related-links">
                          <span className="gh-links-label">관련 자료:</span>
                          {proposal.relatedLinks.map((link, idx) => (
                            <a key={idx} href="#" className="gh-link-item">
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                              </svg>
                              {link}
                            </a>
                          ))}
                        </div>
                      )}

                      <div className="gh-proposal-meta">
                        <span className="gh-proposal-number">{proposal.id}</span>
                        <span className="gh-meta-dot">•</span>
                        <span className="gh-proposal-author">@{proposal.author}</span>
                        <span className="gh-meta-text">제출일 {proposal.date}</span>
                      </div>
                    </div>
                    <div className="gh-proposal-stats">
                      <div className="gh-stat-box" title="동의 투표">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
                        </svg>
                        <span>{proposal.votes}</span>
                      </div>
                      <div className="gh-stat-box" title="댓글">
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
            <span>풀뿌리즘 - 지역 주민 정책 제안 플랫폼</span>
            <span className="gh-footer-divider">•</span>
            <span>서울대학교 정보문화학 × 옥천신문</span>
            <span className="gh-footer-divider">•</span>
            <span>실질적인 주민 자치를 위한 풀뿌리 민주주의 실현</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Poolppurism;
