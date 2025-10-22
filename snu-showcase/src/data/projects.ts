export interface Project {
  id: string;
  name: string;
  description: string;
  color: string;
  route: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 'infinity-almeng',
    name: '인피니티알맹',
    description: '리필스테이션 올인원 솔루션 - 매장 입장부터 결제까지',
    color: '#10B981', // Green
    route: '/infinity-almeng',
    category: '환경 / 제로웨이스트'
  },
  {
    id: 'bottle-bottle',
    name: '보들보틀',
    description: '다회용컵 사용 습관화 앱 - 즐거운 제로웨이스트 실천',
    color: '#22C55E', // Light Green
    route: '/bottle-bottle',
    category: '환경 / 습관형성'
  },
  {
    id: 'poolppurism',
    name: '풀뿌리즘',
    description: '지역 주민 정책 제안 플랫폼 - 풀뿌리 민주주의 실현',
    color: '#3B82F6', // Blue
    route: '/poolppurism',
    category: '지역사회 / 민주주의'
  },
  {
    id: 'dream-garden',
    name: '꿈뜰꿈뜰',
    description: '발달장애인 기록 이음 서비스 - 신뢰 기반 커뮤니케이션',
    color: '#A3E635', // Lime
    route: '/dream-garden',
    category: '사회복지 / 장애인지원'
  },
  {
    id: 'mangles',
    name: '맹글즈',
    description: '리필스테이션 스마트 영수증 - 소비 기록 관리 플랫폼',
    color: '#10B981', // Emerald
    route: '/mangles',
    category: '환경 / 데이터관리'
  },
  {
    id: 'our-drama',
    name: '우리들의 사부작 드라마',
    description: '휠체어 사용자 장소 공유 - 접근성 정보 플랫폼',
    color: '#EC4899', // Pink
    route: '/our-drama',
    category: '접근성 / 장애인지원'
  },
  {
    id: 'ramp',
    name: 'RAMP',
    description: '휠체어 이동 정보 앱 - 심리적 장벽 해소',
    color: '#F59E0B', // Amber
    route: '/ramp',
    category: '접근성 / 이동권'
  }
];
