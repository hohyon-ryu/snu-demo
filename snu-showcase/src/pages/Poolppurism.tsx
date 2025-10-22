import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Poolppurism.css';

interface Comment {
  id: string;
  author: string;
  date: string;
  content: string;
  likes: number;
  type?: 'resident' | 'official';
  officialTitle?: string;
}

interface TimelineEvent {
  date: string;
  status: string;
  description: string;
  officialResponse?: string;
}

interface VoteResult {
  agree: number;
  disagree: number;
  neutral: number;
  totalVoters: number;
}

interface Proposal {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  votes: number;
  status: 'opinion-gathering' | 'clustered' | 'agenda-created' | 'under-review' | 'voting' | 'accepted' | 'implemented' | 'rejected';
  description: string;
  detailedDescription?: string;
  comments: number;
  opinionCount?: number;
  relatedLinks?: string[];
  governmentResponse?: string;
  implementationProgress?: number;
  tags?: string[];
  timeline?: TimelineEvent[];
  voteResults?: VoteResult;
  clusterInfo?: {
    totalOpinions: number;
    mainKeywords: string[];
  };
  impactMetrics?: {
    affectedResidents: number;
    estimatedBudget: string;
    expectedCompletion: string;
  };
  relatedProposals?: string[];
  discussionThread?: Comment[];
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
    detailedDescription: '경로당을 이용하는 어르신들과 인근 주민들이 악취와 위생 문제로 불편을 겪고 있습니다. 특히 여름철에는 음식물 쓰레기로 인한 악취가 심각하며, 파리와 해충이 발생하고 있습니다. 주 2회 수거로는 쓰레기가 넘쳐나는 경우가 많아 주 3회 수거가 필요합니다.',
    comments: 156,
    opinionCount: 27,
    relatedLinks: ['2025년 생활폐기물 처리계획', '타 지역 수거 빈도 비교', '악취 민원 통계 자료'],
    governmentResponse: '00면 경로당 쓰레기 배출의 문제점을 확인했으며, 2025.09.15부터 주 3회로 증량했습니다. 이용에 불편을 드려 죄송합니다. 앞으로도 주민 여러분의 의견에 귀 기울이겠습니다.',
    implementationProgress: 100,
    tags: ['완료', '생활환경', '위생개선'],
    timeline: [
      { date: '2025.10.15', status: '의견 접수', description: '주민 27명의 의견 수집 완료' },
      { date: '2025.10.18', status: '안건 작성', description: '클러스터링을 통한 공식 안건 작성' },
      { date: '2025.10.20', status: '주민 투표', description: '찬성 892표로 통과' },
      { date: '2025.10.22', status: '정부 검토', description: '환경과 검토 및 예산 승인' },
      { date: '2025.09.15', status: '시행 완료', description: '주 3회 수거 체계 시작', officialResponse: '성공적으로 시행 중입니다' }
    ],
    voteResults: {
      agree: 892,
      disagree: 23,
      neutral: 15,
      totalVoters: 930
    },
    clusterInfo: {
      totalOpinions: 27,
      mainKeywords: ['악취', '위생', '수거 빈도', '여름철', '해충']
    },
    impactMetrics: {
      affectedResidents: 450,
      estimatedBudget: '연간 1,200만원',
      expectedCompletion: '2025.09.15 (완료)'
    },
    discussionThread: [
      { id: 'c1', author: 'resident-park', date: '2025.10.16', content: '정말 필요한 개선사항입니다. 여름에 정말 심각했어요.', likes: 45 },
      { id: 'c2', author: '환경과장', date: '2025.10.22', content: '예산 검토 후 즉시 시행하겠습니다. 소중한 의견 감사합니다.', likes: 89, type: 'official', officialTitle: '환경과장' },
      { id: 'c3', author: 'resident-kim', date: '2025.10.23', content: '우리 동네도 같은 문제가 있는데 확대 적용 가능할까요?', likes: 32 }
    ]
  },
  {
    id: '#156',
    title: '학교 앞 어린이 보호구역 CCTV 확대 및 횡단보도 개선',
    category: '안전/교통',
    author: 'parent-lee',
    date: '2025.10.10',
    votes: 1243,
    status: 'voting',
    description: '초등학교 앞 교통사고 위험이 높습니다. CCTV 3대 추가 설치와 노후 횡단보도 재정비가 필요합니다.',
    detailedDescription: '00초등학교 앞 스쿨존에서 최근 3년간 경미한 접촉사고가 5건 발생했습니다. CCTV 사각지대가 많고, 횡단보도 도색이 벗겨져 시인성이 떨어집니다. 아이들의 안전한 등하교를 위해 CCTV 3대 추가 설치(정문, 후문, 측면)와 횡단보도 3곳 재정비를 요청합니다.',
    comments: 234,
    opinionCount: 45,
    relatedLinks: ['어린이보호구역 교통사고 통계 (2022-2024)', '타 지역 안전시설 우수 사례', '스쿨존 CCTV 설치 가이드라인'],
    governmentResponse: '예산 검토 중입니다. 2026년 상반기 시행을 목표로 추진하겠습니다. 안전 문제는 최우선으로 다루겠습니다.',
    implementationProgress: 35,
    tags: ['투표진행중', '교육안전', '어린이보호'],
    timeline: [
      { date: '2025.10.10', status: '의견 접수', description: '학부모 45명 의견 수집' },
      { date: '2025.10.14', status: '안건 작성', description: '상세 안건 작성 완료' },
      { date: '2025.10.20', status: '투표 진행중', description: '현재 찬성 1,243표', officialResponse: '예산 검토 중' }
    ],
    voteResults: {
      agree: 1243,
      disagree: 45,
      neutral: 67,
      totalVoters: 1355
    },
    clusterInfo: {
      totalOpinions: 45,
      mainKeywords: ['CCTV', '횡단보도', '교통안전', '스쿨존', '사각지대']
    },
    impactMetrics: {
      affectedResidents: 1200,
      estimatedBudget: '3,500만원',
      expectedCompletion: '2026년 상반기'
    },
    discussionThread: [
      { id: 'c1', author: 'parent-kim', date: '2025.10.11', content: '우리 아이도 그 학교 다닙니다. 정말 위험해요. 꼭 개선되었으면 합니다.', likes: 156 },
      { id: 'c2', author: 'resident-jung', date: '2025.10.12', content: '학교 주변이라 차량 속도도 관리가 필요합니다. 과속 단속 카메라도 함께 설치하면 좋겠어요.', likes: 98 },
      { id: 'c3', author: '교육지원과장', date: '2025.10.15', content: '교육청과 협의하여 예산을 확보하겠습니다. 아이들 안전이 최우선입니다.', likes: 234, type: 'official', officialTitle: '교육지원과장' }
    ]
  },
  {
    id: '#178',
    title: '재활용 분리수거함 스마트화 및 IoT 관리 시스템 도입',
    category: '환경/기술',
    author: 'eco-park',
    date: '2025.10.08',
    votes: 678,
    status: 'under-review',
    description: 'IoT 센서가 장착된 스마트 분리수거함을 도입하여 수거 시기를 최적화하고, 주민들에게 실시간 포만도 정보를 제공합니다.',
    detailedDescription: '현재 분리수거함은 넘쳐도 수거가 늦어지거나, 비어있어도 정기 수거를 하는 등 비효율적입니다. IoT 센서로 포만도를 실시간 모니터링하고, 80% 이상 차면 자동으로 수거 요청이 가는 시스템을 구축하면 환경 개선과 수거 효율성 향상을 동시에 달성할 수 있습니다. 주민들은 앱으로 가까운 수거함의 포만도를 확인할 수 있습니다.',
    comments: 89,
    opinionCount: 23,
    relatedLinks: ['서울시 스마트 쓰레기통 시범사업 결과', 'IoT 분리수거 기술 백서', '환경부 스마트 재활용 가이드'],
    governmentResponse: '기술 검토 및 예산 산정 중입니다. 스마트시티 예산과 연계하여 시범 사업을 검토하겠습니다.',
    implementationProgress: 20,
    tags: ['검토중', '스마트시티', '환경혁신'],
    timeline: [
      { date: '2025.10.08', status: '의견 접수', description: '환경 관심 주민 23명 의견' },
      { date: '2025.10.12', status: '안건 작성', description: 'IoT 도입 상세 계획 수립' },
      { date: '2025.10.18', status: '검토 중', description: '기술 타당성 검토 진행', officialResponse: '스마트시티팀과 협의 중' }
    ],
    voteResults: {
      agree: 678,
      disagree: 89,
      neutral: 45,
      totalVoters: 812
    },
    clusterInfo: {
      totalOpinions: 23,
      mainKeywords: ['IoT', '스마트', '효율성', '실시간', '포만도']
    },
    impactMetrics: {
      affectedResidents: 3500,
      estimatedBudget: '1억 2천만원 (시범 10개소)',
      expectedCompletion: '2026년 하반기'
    }
  },
  {
    id: '#192',
    title: '노인 복지관 프로그램 확대 및 디지털 문해력 교육',
    category: '복지/교육',
    author: 'senior-kim',
    date: '2025.10.05',
    votes: 456,
    status: 'agenda-created',
    description: '고령화 사회에 대비하여 노인 복지관 프로그램을 확대하고, 스마트폰 사용법, 키오스크 이용 등 디지털 기기 활용 교육이 필요합니다.',
    detailedDescription: '어르신들이 디지털 소외를 경험하고 계십니다. 키오스크 앞에서 당황하시고, 스마트폰 사용이 어려워 택시 호출, 은행 업무 등 일상생활에 불편을 겪고 계십니다. 주 2회 정규 디지털 문해력 교육 프로그램을 개설하여 스마트폰 기본 사용법, 키오스크 이용법, 간단한 앱 사용법 등을 교육하고자 합니다.',
    comments: 67,
    opinionCount: 19,
    tags: ['안건작성됨', '고령친화', '디지털포용'],
    timeline: [
      { date: '2025.10.05', status: '의견 접수', description: '어르신 19명 의견 수집' },
      { date: '2025.10.09', status: '안건 작성 완료', description: '교육 프로그램 세부 계획 수립' }
    ],
    clusterInfo: {
      totalOpinions: 19,
      mainKeywords: ['디지털교육', '스마트폰', '키오스크', '고령자', '복지']
    },
    impactMetrics: {
      affectedResidents: 850,
      estimatedBudget: '연간 2,400만원',
      expectedCompletion: '2026년 1분기'
    }
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
    detailedDescription: '00공원은 넓지만 휴식 공간이 부족합니다. 북카페 형태의 야외 도서관을 설치하여 주민들이 책을 읽고, 담소를 나누며, 독서 모임을 할 수 있는 문화 공간을 만들고자 합니다. 방수 책장과 의자, 그늘막을 설치하고, 주민들이 기증한 책으로 운영하는 작은 도서관을 상상합니다.',
    comments: 112,
    opinionCount: 31,
    tags: ['의견수렴중', '문화공간', '커뮤니티'],
    timeline: [
      { date: '2025.10.03', status: '의견 접수', description: '독서 애호가 31명 의견' },
      { date: '2025.10.08', status: '클러스터링 완료', description: '의견 통합 및 주요 니즈 파악' }
    ],
    clusterInfo: {
      totalOpinions: 31,
      mainKeywords: ['야외도서관', '북카페', '독서문화', '커뮤니티', '휴식공간']
    },
    impactMetrics: {
      affectedResidents: 2100,
      estimatedBudget: '5,000만원',
      expectedCompletion: '2026년 봄'
    }
  },
  {
    id: '#214',
    title: '공영 주차장 부족 문제 해결 - 다층 주차장 건설',
    category: '교통/주차',
    author: 'driver-yoon',
    date: '2025.09.30',
    votes: 1089,
    status: 'voting',
    description: '주민 차량 증가로 주차 공간이 절대적으로 부족합니다. 00동 유휴 부지에 3층 규모의 공영 주차장 건설을 제안합니다.',
    detailedDescription: '00동 일대는 차량 보유율이 높지만 주차 공간이 턱없이 부족하여 주민들이 불법 주차, 이중 주차로 불편을 겪고 있습니다. 현재 비어있는 00동 123번지 부지(약 500평)를 활용하여 3층 규모의 공영 주차장을 건설하면 약 150대를 수용할 수 있습니다. 주차난 해소는 물론 교통 흐름도 개선될 것입니다.',
    comments: 198,
    opinionCount: 52,
    relatedLinks: ['주차장 수요 조사 보고서', '인근 지역 주차장 운영 현황', '국토부 공영주차장 설치 가이드'],
    governmentResponse: '부지 선정 및 타당성 조사를 진행하겠습니다. 예산 규모가 크므로 충분한 검토가 필요합니다.',
    implementationProgress: 15,
    tags: ['투표진행중', '주차문제', '교통개선'],
    timeline: [
      { date: '2025.09.30', status: '의견 접수', description: '주민 52명 의견 수집' },
      { date: '2025.10.05', status: '안건 작성', description: '주차장 건설 계획 수립' },
      { date: '2025.10.15', status: '투표 진행중', description: '찬성 1,089표', officialResponse: '타당성 조사 중' }
    ],
    voteResults: {
      agree: 1089,
      disagree: 123,
      neutral: 89,
      totalVoters: 1301
    },
    clusterInfo: {
      totalOpinions: 52,
      mainKeywords: ['주차난', '다층주차장', '공영주차장', '유휴부지', '교통']
    },
    impactMetrics: {
      affectedResidents: 2800,
      estimatedBudget: '15억원',
      expectedCompletion: '2027년'
    }
  },
  {
    id: '#225',
    title: '골목길 LED 가로등 교체 및 방범 CCTV 증설',
    category: '안전/치안',
    author: 'resident-kang',
    date: '2025.09.28',
    votes: 567,
    status: 'opinion-gathering',
    description: '어두운 골목길의 가로등을 밝은 LED로 교체하고 사각지대에 방범 CCTV를 증설하여 야간 안전을 강화해야 합니다.',
    detailedDescription: '00길 일대 골목길은 나트륨 가로등이 오래되어 어둡고, CCTV가 없어 야간에 불안감이 큽니다. 특히 여성 주민들이 밤늦게 귀가할 때 두려움을 느낍니다. LED 가로등 15개 교체와 방범 CCTV 5대 증설로 밝고 안전한 골목길을 만들고자 합니다.',
    comments: 45,
    opinionCount: 15,
    tags: ['의견모집중', '야간안전', '방범'],
    timeline: [
      { date: '2025.09.28', status: '의견 접수 중', description: '현재 15명 참여' }
    ],
    clusterInfo: {
      totalOpinions: 15,
      mainKeywords: ['LED가로등', 'CCTV', '야간안전', '골목길', '방범']
    },
    impactMetrics: {
      affectedResidents: 650,
      estimatedBudget: '4,500만원',
      expectedCompletion: '미정'
    }
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
    detailedDescription: '지역 청년들이 창업을 꿈꾸지만 자금, 공간, 노하우 부족으로 어려움을 겪고 있습니다. 청년 창업 지원센터를 설립하여 무료 사무 공간, 멘토링, 네트워킹, 초기 자금 연계 등을 지원하면 청년 유출을 막고 지역 경제를 활성화할 수 있습니다. 지역의 성공한 기업인들이 멘토로 참여하는 프로그램도 함께 운영합니다.',
    comments: 91,
    opinionCount: 28,
    tags: ['의견수렴중', '청년지원', '지역경제'],
    timeline: [
      { date: '2025.09.25', status: '의견 접수', description: '청년 28명 의견' },
      { date: '2025.10.01', status: '클러스터링 완료', description: '창업 지원 니즈 분석' }
    ],
    clusterInfo: {
      totalOpinions: 28,
      mainKeywords: ['청년창업', '멘토링', '지원센터', '경제활성화', '네트워킹']
    },
    impactMetrics: {
      affectedResidents: 450,
      estimatedBudget: '연간 2억원',
      expectedCompletion: '2026년 하반기'
    }
  },
  {
    id: '#248',
    title: '주민 참여 예산제 투명성 강화 - 실시간 집행 현황 공개',
    category: '행정/투명성',
    author: 'civic-lee',
    date: '2025.09.20',
    votes: 934,
    status: 'under-review',
    description: '주민 참여 예산제의 투명성을 높이기 위해 예산 집행 현황을 실시간으로 공개하고, 주민들이 진행 상황을 확인할 수 있는 대시보드를 구축합니다.',
    detailedDescription: '현재 주민 참여 예산제는 선정 후 집행 과정이 불투명합니다. 예산이 어떻게 사용되는지, 진행률은 어떤지 알기 어렵습니다. 실시간 예산 집행 현황 대시보드를 만들어 투명하게 공개하면 주민들의 신뢰를 높이고, 예산 낭비를 방지하며, 더 많은 주민 참여를 유도할 수 있습니다.',
    comments: 76,
    opinionCount: 21,
    tags: ['검토중', '투명성', '참여예산'],
    relatedLinks: ['타 지역 투명 예산 시스템 사례', '행정안전부 참여예산 가이드라인'],
    governmentResponse: '디지털 플랫폼 구축 방안을 검토하겠습니다. 투명성 강화는 중요한 과제입니다.',
    implementationProgress: 25,
    timeline: [
      { date: '2025.09.20', status: '의견 접수', description: '시민단체 및 주민 21명' },
      { date: '2025.09.25', status: '안건 작성', description: '대시보드 구축 계획 수립' },
      { date: '2025.10.10', status: '검토 중', description: 'IT 시스템 구축 방안 검토', officialResponse: '내년 예산 반영 검토 중' }
    ],
    clusterInfo: {
      totalOpinions: 21,
      mainKeywords: ['투명성', '실시간', '대시보드', '참여예산', '신뢰']
    },
    impactMetrics: {
      affectedResidents: 5000,
      estimatedBudget: '8,000만원',
      expectedCompletion: '2026년 상반기'
    }
  },
  {
    id: '#259',
    title: '반려동물 놀이터 및 배변 구역 확대 조성',
    category: '생활/환경',
    author: 'pet-owner-park',
    date: '2025.09.15',
    votes: 612,
    status: 'opinion-gathering',
    description: '반려동물 가구 증가에 따라 안전하게 놀 수 있는 놀이터와 배변 구역을 확대 조성하여 주민 간 갈등을 줄이고 쾌적한 환경을 만들고자 합니다.',
    detailedDescription: '반려동물을 키우는 가구가 늘면서 산책 공간과 배변 처리 문제로 주민 간 갈등이 발생하고 있습니다. 현재 1개소뿐인 반려동물 놀이터를 3개소로 확대하고, 공원 곳곳에 배변 봉투함과 처리함을 설치하면 반려동물과 비반려인 모두가 만족할 수 있습니다.',
    comments: 34,
    opinionCount: 12,
    tags: ['의견모집중', '반려동물', '생활환경'],
    timeline: [
      { date: '2025.09.15', status: '의견 접수 중', description: '현재 12명 참여' }
    ],
    clusterInfo: {
      totalOpinions: 12,
      mainKeywords: ['반려동물', '놀이터', '배변구역', '주민갈등', '공원']
    },
    impactMetrics: {
      affectedResidents: 1200,
      estimatedBudget: '1억 5천만원',
      expectedCompletion: '미정'
    }
  },
  {
    id: '#267',
    title: '전통시장 활성화 - 청년 상인 지원 및 문화 이벤트',
    category: '경제/문화',
    author: 'market-merchant',
    date: '2025.09.10',
    votes: 523,
    status: 'clustered',
    description: '침체된 전통시장을 활성화하기 위해 청년 상인 창업 지원, 정기 문화 이벤트 개최, 주차 공간 확보 등 종합 지원 방안을 제안합니다.',
    detailedDescription: '00전통시장은 대형마트에 밀려 상인들이 어려움을 겪고 있습니다. 청년 상인 창업 지원금, 월 1회 문화 이벤트(버스킹, 프리마켓), 시장 인근 주차 공간 확보, SNS 홍보 지원 등으로 전통시장을 문화와 상업이 어우러진 명소로 만들고자 합니다.',
    comments: 67,
    opinionCount: 18,
    tags: ['의견수렴중', '전통시장', '지역경제'],
    timeline: [
      { date: '2025.09.10', status: '의견 접수', description: '상인회 및 주민 18명' },
      { date: '2025.09.18', status: '클러스터링 완료', description: '시장 활성화 방안 통합' }
    ],
    clusterInfo: {
      totalOpinions: 18,
      mainKeywords: ['전통시장', '청년상인', '문화이벤트', '활성화', '주차']
    },
    impactMetrics: {
      affectedResidents: 3200,
      estimatedBudget: '연간 3억원',
      expectedCompletion: '2026년'
    }
  },
  {
    id: '#275',
    title: '마을버스 노선 신설 및 배차 간격 단축',
    category: '교통/복지',
    author: 'commuter-choi',
    date: '2025.09.05',
    votes: 1167,
    status: 'voting',
    description: '대중교통 사각지대 해소를 위해 00지역 마을버스 노선을 신설하고, 기존 노선의 배차 간격을 30분에서 15분으로 단축합니다.',
    detailedDescription: '00지역은 지하철역과 버스정류장에서 멀어 대중교통 이용이 어렵습니다. 특히 어르신과 학생들이 불편을 겪고 있습니다. 00역까지 연결되는 마을버스 노선을 신설하고, 기존 노선의 배차 간격을 15분으로 단축하면 주민 1,500명의 교통 편의성이 크게 향상됩니다.',
    comments: 145,
    opinionCount: 38,
    relatedLinks: ['교통 수요 조사 결과', '타 지역 마을버스 운영 사례'],
    governmentResponse: '교통 전문가 의견을 수렴하여 노선을 설계하고, 버스 업체와 협의하겠습니다.',
    implementationProgress: 40,
    tags: ['투표진행중', '교통개선', '복지'],
    timeline: [
      { date: '2025.09.05', status: '의견 접수', description: '주민 38명 의견' },
      { date: '2025.09.12', status: '안건 작성', description: '노선 설계 및 예산 산정' },
      { date: '2025.10.01', status: '투표 진행중', description: '찬성 1,167표', officialResponse: '버스 업체 협의 중' }
    ],
    voteResults: {
      agree: 1167,
      disagree: 78,
      neutral: 92,
      totalVoters: 1337
    },
    clusterInfo: {
      totalOpinions: 38,
      mainKeywords: ['마을버스', '노선신설', '배차간격', '교통사각지대', '대중교통']
    },
    impactMetrics: {
      affectedResidents: 1500,
      estimatedBudget: '연간 4억원',
      expectedCompletion: '2026년 상반기'
    }
  },
  {
    id: '#283',
    title: '공공 와이파이 확대 - 주요 공공장소 무료 인터넷 제공',
    category: '디지털/복지',
    author: 'student-han',
    date: '2025.08.30',
    votes: 789,
    status: 'agenda-created',
    description: '공원, 버스정류장, 복지관 등 주요 공공장소에 무료 공공 와이파이를 확대 설치하여 디지털 접근성을 높입니다.',
    detailedDescription: '데이터 요금 부담으로 인터넷 이용이 어려운 학생, 저소득층, 어르신들을 위해 공공 와이파이를 확대 설치합니다. 현재 5개소에서 20개소로 확대하여 공원, 주요 버스정류장, 복지관, 도서관 등에서 누구나 무료로 인터넷을 이용할 수 있도록 합니다.',
    comments: 58,
    opinionCount: 16,
    tags: ['안건작성됨', '디지털포용', '공공서비스'],
    timeline: [
      { date: '2025.08.30', status: '의견 접수', description: '학생 및 주민 16명' },
      { date: '2025.09.08', status: '안건 작성 완료', description: '와이파이 설치 계획 수립' }
    ],
    clusterInfo: {
      totalOpinions: 16,
      mainKeywords: ['공공와이파이', '디지털접근성', '무료인터넷', '공공장소', '복지']
    },
    impactMetrics: {
      affectedResidents: 4500,
      estimatedBudget: '1억 2천만원',
      expectedCompletion: '2026년 2분기'
    }
  },
  {
    id: '#291',
    title: '빈집 정비 및 소규모 공동체 공간으로 재활용',
    category: '주거/문화',
    author: 'community-organizer',
    date: '2025.08.25',
    votes: 445,
    status: 'opinion-gathering',
    description: '방치된 빈집을 정비하여 주민 공동체 공간, 작은 도서관, 청년 셰어하우스 등으로 재활용하는 프로젝트를 제안합니다.',
    detailedDescription: '00동에는 10여 채의 빈집이 방치되어 안전과 미관상 문제가 되고 있습니다. 소유주와 협의하여 빈집을 리모델링하고, 주민 공동체 공간, 작은 도서관, 청년 셰어하우스 등으로 활용하면 공간 자원을 효율적으로 사용하고 커뮤니티를 활성화할 수 있습니다.',
    comments: 29,
    opinionCount: 9,
    tags: ['의견모집중', '빈집정비', '공동체공간'],
    timeline: [
      { date: '2025.08.25', status: '의견 접수 중', description: '현재 9명 참여' }
    ],
    clusterInfo: {
      totalOpinions: 9,
      mainKeywords: ['빈집', '리모델링', '공동체공간', '재활용', '안전']
    },
    impactMetrics: {
      affectedResidents: 800,
      estimatedBudget: '5억원 (10채 기준)',
      expectedCompletion: '미정'
    }
  },
  {
    id: '#302',
    title: '공공 자전거 대여소 확대 및 자전거 도로 정비',
    category: '교통/환경',
    author: 'cyclist-kim',
    date: '2025.08.20',
    votes: 698,
    status: 'clustered',
    description: '친환경 교통수단 확대를 위해 공공 자전거 대여소를 늘리고, 안전한 자전거 도로를 정비하여 자전거 이용을 활성화합니다.',
    detailedDescription: '현재 3개소에 불과한 공공 자전거 대여소를 10개소로 확대하고, 끊어진 자전거 도로를 연결하며, 위험한 구간을 정비하여 안전하게 자전거를 탈 수 있는 환경을 만듭니다. 탄소 중립과 건강 증진에도 기여할 수 있습니다.',
    comments: 72,
    opinionCount: 22,
    tags: ['의견수렴중', '친환경', '자전거'],
    timeline: [
      { date: '2025.08.20', status: '의견 접수', description: '자전거 이용자 22명' },
      { date: '2025.08.28', status: '클러스터링 완료', description: '자전거 인프라 확대 방안' }
    ],
    clusterInfo: {
      totalOpinions: 22,
      mainKeywords: ['공공자전거', '대여소', '자전거도로', '친환경', '안전']
    },
    impactMetrics: {
      affectedResidents: 2500,
      estimatedBudget: '3억 5천만원',
      expectedCompletion: '2027년'
    }
  },
  {
    id: '#315',
    title: '재난 대비 주민 안전 훈련 정기 실시 및 대피소 확충',
    category: '안전/재난',
    author: 'safety-coordinator',
    date: '2025.08.15',
    votes: 834,
    status: 'under-review',
    description: '지진, 화재 등 재난 상황에 대비하여 분기별 주민 안전 훈련을 실시하고, 지정 대피소를 확충하여 재난 대응 역량을 강화합니다.',
    detailedDescription: '최근 지진, 화재 등 재난이 빈번해지고 있지만 주민들의 대응 역량은 부족합니다. 분기별로 실제 상황을 가정한 안전 훈련을 실시하고, 현재 3개소인 지정 대피소를 7개소로 확충하며, 비상 물품을 비축하여 재난 대응 체계를 강화합니다.',
    comments: 94,
    opinionCount: 25,
    relatedLinks: ['재난안전법 가이드라인', '타 지역 안전 훈련 사례'],
    governmentResponse: '안전행정과에서 훈련 계획을 수립하겠습니다. 주민 안전이 최우선입니다.',
    implementationProgress: 30,
    tags: ['검토중', '재난대비', '안전'],
    timeline: [
      { date: '2025.08.15', status: '의견 접수', description: '안전 관심 주민 25명' },
      { date: '2025.08.22', status: '안건 작성', description: '훈련 및 대피소 계획' },
      { date: '2025.09.10', status: '검토 중', description: '안전행정과 검토 중', officialResponse: '훈련 일정 조율 중' }
    ],
    clusterInfo: {
      totalOpinions: 25,
      mainKeywords: ['재난훈련', '안전', '대피소', '지진', '화재']
    },
    impactMetrics: {
      affectedResidents: 6000,
      estimatedBudget: '2억원',
      expectedCompletion: '2026년 1분기'
    }
  },
  {
    id: '#328',
    title: '학교 급식 로컬푸드 확대 및 투명한 식재료 공개',
    category: '교육/먹거리',
    author: 'parent-association',
    date: '2025.08.10',
    votes: 956,
    status: 'voting',
    description: '학교 급식에 로컬푸드 사용을 확대하고, 매일 사용되는 식재료의 원산지와 품질 정보를 투명하게 공개하여 안전한 급식을 제공합니다.',
    detailedDescription: '아이들이 먹는 급식의 안전성과 영양을 높이기 위해 지역 농산물(로컬푸드) 사용 비율을 현재 30%에서 60%로 확대하고, 매일 사용된 식재료의 원산지, 품질 인증 정보를 학교 홈페이지와 급식 앱에 실시간 공개합니다. 지역 경제 활성화에도 기여할 수 있습니다.',
    comments: 187,
    opinionCount: 42,
    relatedLinks: ['로컬푸드 급식 우수 사례', '식재료 안전 관리 기준'],
    governmentResponse: '교육청, 농업인 단체와 협의하여 로컬푸드 공급 체계를 구축하겠습니다.',
    implementationProgress: 45,
    tags: ['투표진행중', '급식안전', '로컬푸드'],
    timeline: [
      { date: '2025.08.10', status: '의견 접수', description: '학부모회 42명 의견' },
      { date: '2025.08.18', status: '안건 작성', description: '로컬푸드 급식 계획' },
      { date: '2025.09.05', status: '투표 진행중', description: '찬성 956표', officialResponse: '공급 체계 협의 중' }
    ],
    voteResults: {
      agree: 956,
      disagree: 67,
      neutral: 102,
      totalVoters: 1125
    },
    clusterInfo: {
      totalOpinions: 42,
      mainKeywords: ['로컬푸드', '급식', '식재료', '안전', '투명성']
    },
    impactMetrics: {
      affectedResidents: 2200,
      estimatedBudget: '연간 5억원',
      expectedCompletion: '2026년 3월'
    }
  },
  {
    id: '#340',
    title: '유기동물 보호소 운영 및 입양 활성화 프로그램',
    category: '동물복지',
    author: 'animal-rights',
    date: '2025.08.05',
    votes: 523,
    status: 'agenda-created',
    description: '유기동물을 보호하고 입양을 활성화하기 위해 지역 보호소를 운영하고, 정기 입양의 날, 중성화 지원 등 종합 프로그램을 실시합니다.',
    detailedDescription: '유기동물이 늘어나고 있지만 보호 시설이 부족합니다. 지역 보호소를 설립하여 유기동물을 임시 보호하고, 월 1회 입양의 날을 개최하며, 입양 가정에 중성화 수술비와 초기 사료비를 지원하는 종합 프로그램을 운영합니다. 생명 존중 문화도 확산할 수 있습니다.',
    comments: 61,
    opinionCount: 17,
    tags: ['안건작성됨', '동물복지', '입양'],
    timeline: [
      { date: '2025.08.05', status: '의견 접수', description: '동물 애호가 17명' },
      { date: '2025.08.14', status: '안건 작성 완료', description: '보호소 및 프로그램 계획' }
    ],
    clusterInfo: {
      totalOpinions: 17,
      mainKeywords: ['유기동물', '보호소', '입양', '중성화', '동물복지']
    },
    impactMetrics: {
      affectedResidents: 900,
      estimatedBudget: '연간 1억 5천만원',
      expectedCompletion: '2026년 하반기'
    }
  },
  {
    id: '#352',
    title: '주민 건강 증진 - 공공 운동 시설 확충 및 건강 프로그램',
    category: '보건/복지',
    author: 'health-promoter',
    date: '2025.08.01',
    votes: 712,
    status: 'clustered',
    description: '주민 건강 증진을 위해 야외 운동 시설을 확충하고, 무료 건강 검진, 운동 교실 등 정기 프로그램을 운영합니다.',
    detailedDescription: '주민들의 건강 관리를 위해 공원에 운동 기구를 추가 설치하고, 분기별 무료 건강 검진(혈압, 혈당, 콜레스테롤), 주 3회 운동 교실(요가, 스트레칭, 걷기)을 운영합니다. 건강 100세 시대를 위한 예방적 건강 관리 체계를 구축합니다.',
    comments: 83,
    opinionCount: 24,
    tags: ['의견수렴중', '건강', '운동시설'],
    timeline: [
      { date: '2025.08.01', status: '의견 접수', description: '건강 관심 주민 24명' },
      { date: '2025.08.10', status: '클러스터링 완료', description: '건강 프로그램 통합 계획' }
    ],
    clusterInfo: {
      totalOpinions: 24,
      mainKeywords: ['건강', '운동시설', '검진', '운동교실', '예방']
    },
    impactMetrics: {
      affectedResidents: 3800,
      estimatedBudget: '연간 1억 8천만원',
      expectedCompletion: '2026년'
    }
  },
  {
    id: '#365',
    title: '빗물 재활용 시스템 구축 - 친환경 물 관리',
    category: '환경/기술',
    author: 'eco-engineer',
    date: '2025.07.28',
    votes: 467,
    status: 'opinion-gathering',
    description: '공공 건물에 빗물 재활용 시스템을 구축하여 화장실 용수, 조경 용수로 활용하고, 물 자원을 절약하며 환경을 보호합니다.',
    detailedDescription: '물 부족 시대에 대비하여 구청, 복지관, 학교 등 공공 건물에 빗물 저장 탱크와 재활용 시스템을 설치합니다. 빗물을 화장실 용수, 조경 용수로 활용하여 연간 수도 요금 30% 절감과 물 자원 보존을 동시에 달성합니다.',
    comments: 32,
    opinionCount: 11,
    tags: ['의견모집중', '친환경', '물절약'],
    timeline: [
      { date: '2025.07.28', status: '의견 접수 중', description: '현재 11명 참여' }
    ],
    clusterInfo: {
      totalOpinions: 11,
      mainKeywords: ['빗물재활용', '친환경', '물절약', '지속가능', '공공건물']
    },
    impactMetrics: {
      affectedResidents: 5200,
      estimatedBudget: '4억원 (10개소)',
      expectedCompletion: '미정'
    }
  },
  {
    id: '#378',
    title: '청소년 진로 멘토링 및 직업 체험 프로그램',
    category: '교육/청소년',
    author: 'youth-counselor',
    date: '2025.07.25',
    votes: 589,
    status: 'clustered',
    description: '청소년들의 진로 탐색을 돕기 위해 지역 전문가 멘토링과 다양한 직업 체험 프로그램을 정기적으로 운영합니다.',
    detailedDescription: '청소년들이 진로를 고민할 때 실질적인 도움을 받기 어렵습니다. 지역의 다양한 분야 전문가(의사, 변호사, 요리사, 디자이너, 프로그래머 등)와 멘토-멘티를 매칭하고, 월 1회 직업 체험 프로그램을 운영하여 청소년들이 꿈을 찾도록 돕습니다.',
    comments: 74,
    opinionCount: 20,
    tags: ['의견수렴중', '청소년', '진로교육'],
    timeline: [
      { date: '2025.07.25', status: '의견 접수', description: '학부모 및 교사 20명' },
      { date: '2025.08.05', status: '클러스터링 완료', description: '멘토링 프로그램 설계' }
    ],
    clusterInfo: {
      totalOpinions: 20,
      mainKeywords: ['청소년', '진로', '멘토링', '직업체험', '교육']
    },
    impactMetrics: {
      affectedResidents: 800,
      estimatedBudget: '연간 1억원',
      expectedCompletion: '2026년'
    }
  },
  {
    id: '#390',
    title: '도시 텃밭 분양 확대 - 주민 참여형 농업',
    category: '농업/여가',
    author: 'urban-farmer',
    date: '2025.07.20',
    votes: 634,
    status: 'agenda-created',
    description: '유휴 토지를 활용하여 도시 텃밭을 조성하고 주민들에게 분양하여 직접 채소를 재배하며 여가를 즐기고 공동체를 형성합니다.',
    detailedDescription: '도심 속에서 농사를 짓고 싶어하는 주민이 많지만 공간이 부족합니다. 유휴 토지 3,000평을 도시 텃밭으로 조성하여 가구당 10평씩 300가구에 분양하고, 농업 전문가의 재배 교육과 공동 농기구 대여 서비스를 제공합니다. 신선한 먹거리와 여가, 공동체 모두를 얻을 수 있습니다.',
    comments: 68,
    opinionCount: 19,
    tags: ['안건작성됨', '도시농업', '여가'],
    timeline: [
      { date: '2025.07.20', status: '의견 접수', description: '도시농업 관심 주민 19명' },
      { date: '2025.07.30', status: '안건 작성 완료', description: '텃밭 분양 계획 수립' }
    ],
    clusterInfo: {
      totalOpinions: 19,
      mainKeywords: ['도시텃밭', '분양', '농사', '여가', '공동체']
    },
    impactMetrics: {
      affectedResidents: 300,
      estimatedBudget: '8,000만원',
      expectedCompletion: '2026년 봄'
    }
  }
];

function Poolppurism() {
  const navigate = useNavigate();
  const [selectedView, setSelectedView] = useState<'proposals' | 'categories'>('proposals');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null);
  const [showVoiceInput, setShowVoiceInput] = useState<boolean>(false);

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

  const ProposalDetailModal = ({ proposal }: { proposal: Proposal }) => (
    <div className="gh-modal-overlay" onClick={() => setSelectedProposal(null)}>
      <div className="gh-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="gh-modal-header">
          <div>
            <h2>{proposal.title}</h2>
            <div className="gh-proposal-labels" style={{ marginTop: '8px' }}>
              <span className={`gh-label ${getStatusBadge(proposal.status).className}`}>
                {getStatusBadge(proposal.status).text}
              </span>
              <span className="gh-label gh-label-category">{proposal.category}</span>
            </div>
          </div>
          <button className="gh-modal-close" onClick={() => setSelectedProposal(null)}>
            <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
              <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
            </svg>
          </button>
        </div>

        <div className="gh-modal-body">
          {/* Main Description */}
          <div className="gh-detail-section">
            <h3>제안 내용</h3>
            <p>{proposal.detailedDescription || proposal.description}</p>
          </div>

          {/* Cluster Info */}
          {proposal.clusterInfo && (
            <div className="gh-detail-section gh-cluster-info">
              <h3>수집된 주민 의견 분석</h3>
              <div className="gh-cluster-stats">
                <div className="gh-cluster-stat">
                  <span className="gh-cluster-label">총 의견 수</span>
                  <span className="gh-cluster-value">{proposal.clusterInfo.totalOpinions}개</span>
                </div>
                <div className="gh-cluster-keywords">
                  <span className="gh-cluster-label">주요 키워드</span>
                  <div className="gh-keyword-tags">
                    {proposal.clusterInfo.mainKeywords.map((keyword, idx) => (
                      <span key={idx} className="gh-keyword-tag">#{keyword}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Vote Results */}
          {proposal.voteResults && (
            <div className="gh-detail-section gh-vote-section">
              <h3>투표 결과</h3>
              <div className="gh-vote-stats">
                <div className="gh-vote-bar-container">
                  <div className="gh-vote-bar">
                    <div
                      className="gh-vote-bar-fill gh-vote-agree"
                      style={{ width: `${(proposal.voteResults.agree / proposal.voteResults.totalVoters) * 100}%` }}
                    />
                    <div
                      className="gh-vote-bar-fill gh-vote-neutral"
                      style={{ width: `${(proposal.voteResults.neutral / proposal.voteResults.totalVoters) * 100}%` }}
                    />
                    <div
                      className="gh-vote-bar-fill gh-vote-disagree"
                      style={{ width: `${(proposal.voteResults.disagree / proposal.voteResults.totalVoters) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="gh-vote-numbers">
                  <div className="gh-vote-item">
                    <span className="gh-vote-dot gh-vote-agree-dot"></span>
                    <span>찬성 {proposal.voteResults.agree}표</span>
                    <span className="gh-vote-percent">
                      ({((proposal.voteResults.agree / proposal.voteResults.totalVoters) * 100).toFixed(1)}%)
                    </span>
                  </div>
                  <div className="gh-vote-item">
                    <span className="gh-vote-dot gh-vote-neutral-dot"></span>
                    <span>중립 {proposal.voteResults.neutral}표</span>
                    <span className="gh-vote-percent">
                      ({((proposal.voteResults.neutral / proposal.voteResults.totalVoters) * 100).toFixed(1)}%)
                    </span>
                  </div>
                  <div className="gh-vote-item">
                    <span className="gh-vote-dot gh-vote-disagree-dot"></span>
                    <span>반대 {proposal.voteResults.disagree}표</span>
                    <span className="gh-vote-percent">
                      ({((proposal.voteResults.disagree / proposal.voteResults.totalVoters) * 100).toFixed(1)}%)
                    </span>
                  </div>
                </div>
                <div className="gh-vote-total">
                  총 {proposal.voteResults.totalVoters}명 참여
                </div>
              </div>
            </div>
          )}

          {/* Timeline */}
          {proposal.timeline && (
            <div className="gh-detail-section">
              <h3>진행 타임라인</h3>
              <div className="gh-timeline">
                {proposal.timeline.map((event, idx) => (
                  <div key={idx} className="gh-timeline-item">
                    <div className="gh-timeline-marker"></div>
                    <div className="gh-timeline-content">
                      <div className="gh-timeline-date">{event.date}</div>
                      <div className="gh-timeline-status">{event.status}</div>
                      <div className="gh-timeline-desc">{event.description}</div>
                      {event.officialResponse && (
                        <div className="gh-timeline-official">
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Z"></path>
                          </svg>
                          {event.officialResponse}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Impact Metrics */}
          {proposal.impactMetrics && (
            <div className="gh-detail-section gh-impact-section">
              <h3>예상 영향 및 예산</h3>
              <div className="gh-impact-grid">
                <div className="gh-impact-item">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M5.5 3.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4.5 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5.5 6a3 3 0 0 0-2.7 1.652L.5 12.5a.75.75 0 0 0 1.3.75l1.7-2.93L3.5 15a.75.75 0 0 0 1.5 0v-4.01l1.5 2.01v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-.156-.465L6 9.01V6.5A.5.5 0 0 1 6.5 6h3a.5.5 0 0 1 .5.5v2.51l-1.844 3.534A.75.75 0 0 0 8 12.5v2a.75.75 0 0 0 1.5 0v-2l1.5-2.01V15a.75.75 0 0 0 1.5 0l-.001-4.675 1.7 2.93a.75.75 0 0 0 1.3-.75l-2.3-4.848A3 3 0 0 0 10.5 6h-5Z"></path>
                  </svg>
                  <div>
                    <div className="gh-impact-label">영향 받는 주민</div>
                    <div className="gh-impact-value">{proposal.impactMetrics.affectedResidents.toLocaleString()}명</div>
                  </div>
                </div>
                <div className="gh-impact-item">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7-3.25v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5a.75.75 0 0 1 1.5 0Z"></path>
                  </svg>
                  <div>
                    <div className="gh-impact-label">예상 완료 시기</div>
                    <div className="gh-impact-value">{proposal.impactMetrics.expectedCompletion}</div>
                  </div>
                </div>
                <div className="gh-impact-item">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M7.25 0h1.5a.75.75 0 0 1 .75.75V3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H3.5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3V.75A.75.75 0 0 1 7.25 0ZM3.5 4.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5h-9Z"></path>
                  </svg>
                  <div>
                    <div className="gh-impact-label">예상 예산</div>
                    <div className="gh-impact-value">{proposal.impactMetrics.estimatedBudget}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Related Links */}
          {proposal.relatedLinks && proposal.relatedLinks.length > 0 && (
            <div className="gh-detail-section">
              <h3>관련 자료 및 근거</h3>
              <div className="gh-related-links-list">
                {proposal.relatedLinks.map((link, idx) => (
                  <a key={idx} href="#" className="gh-related-link">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                    </svg>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Discussion Thread */}
          {proposal.discussionThread && proposal.discussionThread.length > 0 && (
            <div className="gh-detail-section">
              <h3>토론 및 의견</h3>
              <div className="gh-discussion-thread">
                {proposal.discussionThread.map((comment) => (
                  <div key={comment.id} className={`gh-comment ${comment.type === 'official' ? 'gh-comment-official' : ''}`}>
                    <div className="gh-comment-header">
                      <div className="gh-comment-author">
                        <strong>@{comment.author}</strong>
                        {comment.officialTitle && (
                          <span className="gh-official-badge">{comment.officialTitle}</span>
                        )}
                      </div>
                      <span className="gh-comment-date">{comment.date}</span>
                    </div>
                    <div className="gh-comment-content">{comment.content}</div>
                    <div className="gh-comment-footer">
                      <button className="gh-comment-like">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
                        </svg>
                        {comment.likes}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const VoiceInputModal = () => (
    <div className="gh-modal-overlay" onClick={() => setShowVoiceInput(false)}>
      <div className="gh-voice-modal" onClick={(e) => e.stopPropagation()}>
        <button className="gh-modal-close" onClick={() => setShowVoiceInput(false)}>
          <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
            <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
          </svg>
        </button>
        <div className="gh-voice-content">
          <h2>민원 혹은 제안을 말씀해주세요</h2>
          <p className="gh-voice-subtitle">디지털에 익숙하지 않으신 분들도 쉽게 의견을 제출하실 수 있습니다</p>

          <div className="gh-voice-options">
            <button className="gh-voice-option">
              <div className="gh-voice-icon gh-voice-mic">
                <svg width="48" height="48" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"></path>
                  <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <span>말로 제안하기</span>
              <p>마이크 버튼을 누르고 의견을 말씀해주세요</p>
            </button>

            <button className="gh-voice-option">
              <div className="gh-voice-icon gh-voice-keyboard">
                <svg width="48" height="48" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M0 4.75A2.75 2.75 0 0 1 2.75 2h10.5A2.75 2.75 0 0 1 16 4.75v6.5A2.75 2.75 0 0 1 13.25 14H2.75A2.75 2.75 0 0 1 0 11.25ZM2.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25ZM4 6.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6.75 5.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM8 6.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm2.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 6.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5.5 8.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM8 9.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm2.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-6 2.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10 11.5a.75.75 0 1 1-4.5 0h4.5Zm2-.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
                </svg>
              </div>
              <span>키보드로 작성</span>
              <p>직접 글로 의견을 작성하시겠습니까?</p>
            </button>
          </div>

          <div className="gh-voice-examples">
            <h3>이런 의견들을 말씀해주세요</h3>
            <div className="gh-voice-example-list">
              <div className="gh-voice-example">"안남면 노인 복지관의 프로그램을 늘려주세요"</div>
              <div className="gh-voice-example">"쓰레기 배출이 너무 늦어요. 수거를 자주 해주세요"</div>
              <div className="gh-voice-example">"학교 앞 횡단보도가 위험합니다"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

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
            <span className="gh-subtitle">지역 주민이 만드는 정책 플랫폼</span>
          </div>
          <button className="gh-btn-primary" onClick={() => setShowVoiceInput(true)}>
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
            통계 대시보드
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
                  className={`gh-filter-item ${selectedFilter === 'agenda-created' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('agenda-created')}
                >
                  안건 작성됨
                  <span className="gh-filter-count">
                    {mockProposals.filter(p => p.status === 'agenda-created').length}
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
                <div className="gh-category-item">생활/환경</div>
                <div className="gh-category-item">안전/교통</div>
                <div className="gh-category-item">환경/기술</div>
                <div className="gh-category-item">복지/교육</div>
                <div className="gh-category-item">문화/여가</div>
                <div className="gh-category-item">경제/일자리</div>
                <div className="gh-category-item">행정/투명성</div>
                <div className="gh-category-item">디지털/복지</div>
              </div>
            </div>

            <div className="gh-sidebar-section">
              <h3 className="gh-sidebar-title">플랫폼 통계</h3>
              <div className="gh-stats-list">
                <div className="gh-stat-item">
                  <span className="gh-stat-label">전체 제안</span>
                  <span className="gh-stat-value">3,847</span>
                </div>
                <div className="gh-stat-item">
                  <span className="gh-stat-label">시행 완료</span>
                  <span className="gh-stat-value">1,456</span>
                </div>
                <div className="gh-stat-item">
                  <span className="gh-stat-label">검토/투표 중</span>
                  <span className="gh-stat-value">267</span>
                </div>
                <div className="gh-stat-item">
                  <span className="gh-stat-label">참여 주민</span>
                  <span className="gh-stat-value">12,345</span>
                </div>
                <div className="gh-stat-item">
                  <span className="gh-stat-label">이번 달 제안</span>
                  <span className="gh-stat-value">89</span>
                </div>
                <div className="gh-stat-item">
                  <span className="gh-stat-label">정책 통과율</span>
                  <span className="gh-stat-value">68.4%</span>
                </div>
              </div>
            </div>

            <div className="gh-sidebar-section">
              <h3 className="gh-sidebar-title">민주적 프로세스</h3>
              <div className="process-flow">
                <div className="process-step">
                  <div className="process-number">1</div>
                  <div className="process-label">의견 수집</div>
                  <div className="process-desc">음성/텍스트로 자유롭게 의견 제출</div>
                </div>
                <div className="process-arrow">↓</div>
                <div className="process-step">
                  <div className="process-number">2</div>
                  <div className="process-label">AI 클러스터링</div>
                  <div className="process-desc">유사 의견을 자동으로 그룹화</div>
                </div>
                <div className="process-arrow">↓</div>
                <div className="process-step">
                  <div className="process-number">3</div>
                  <div className="process-label">안건 작성</div>
                  <div className="process-desc">주요 니즈를 바탕으로 공식 안건 생성</div>
                </div>
                <div className="process-arrow">↓</div>
                <div className="process-step">
                  <div className="process-number">4</div>
                  <div className="process-label">주민 투표</div>
                  <div className="process-desc">모든 주민이 찬반 투표에 참여</div>
                </div>
                <div className="process-arrow">↓</div>
                <div className="process-step">
                  <div className="process-number">5</div>
                  <div className="process-label">정부 검토</div>
                  <div className="process-desc">근거 자료 기반 정책 검토</div>
                </div>
                <div className="process-arrow">↓</div>
                <div className="process-step">
                  <div className="process-number">6</div>
                  <div className="process-label">시행 및 피드백</div>
                  <div className="process-desc">진행 상황 투명하게 공개</div>
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
                  <div
                    key={proposal.id}
                    className="gh-proposal-item"
                    onClick={() => setSelectedProposal(proposal)}
                    style={{ cursor: 'pointer' }}
                  >
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
            <span>풀뿌리즘 - 실질적인 주민 자치를 위한 플랫폼</span>
            <span className="gh-footer-divider">•</span>
            <span>서울대학교 정보문화학 × 옥천신문</span>
            <span className="gh-footer-divider">•</span>
            <span>주민의 목소리가 정책이 되는 풀뿌리 민주주의</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {selectedProposal && <ProposalDetailModal proposal={selectedProposal} />}
      {showVoiceInput && <VoiceInputModal />}
    </div>
  );
}

export default Poolppurism;
