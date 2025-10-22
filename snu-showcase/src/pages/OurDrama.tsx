import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OurDrama.css';

function OurDrama() {
  const navigate = useNavigate();

  // Comprehensive Seoul locations with detailed accessibility information (30+ locations)
  const locations = [
    {
      id: 1,
      name: '카페 봄날',
      category: '카페',
      address: '서울 마포구 연남동 239-2',
      rating: 4.8,
      reviews: 24,
      hasRamp: true,
      hasElevator: false,
      hasAccessibleBathroom: true,
      hasParking: true,
      distance: '0.3km',
      image: '☕',
      rampAngle: '완만 (5도)',
      doorWidth: '넓음 (90cm)',
      interiorSpace: '휠체어 이동 용이',
      tableHeight: '적정 (72cm)',
      floorMaterial: '평탄함',
      staffSupport: '친절한 응대',
      recentUpdate: '2일 전',
      photos: 8,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 92
    },
    {
      id: 2,
      name: '북촌 한옥마을 갤러리',
      category: '문화시설',
      address: '서울 종로구 계동길 37',
      rating: 4.2,
      reviews: 15,
      hasRamp: true,
      hasElevator: false,
      hasAccessibleBathroom: false,
      hasParking: false,
      distance: '0.5km',
      image: '🎨',
      rampAngle: '경사 있음 (8도)',
      doorWidth: '좁음 (80cm)',
      interiorSpace: '일부 제한',
      tableHeight: '-',
      floorMaterial: '단차 있음',
      staffSupport: '도움 필요시 가능',
      recentUpdate: '5일 전',
      photos: 5,
      verifiedBy: '보호자',
      accessibilityScore: 68
    },
    {
      id: 3,
      name: '서울대학교 중앙도서관',
      category: '도서관',
      address: '서울 관악구 관악로 1',
      rating: 4.9,
      reviews: 42,
      hasRamp: true,
      hasElevator: true,
      hasAccessibleBathroom: true,
      hasParking: true,
      distance: '0.8km',
      image: '📚',
      rampAngle: '완만 (3도)',
      doorWidth: '매우 넓음 (120cm)',
      interiorSpace: '휠체어 전용 공간',
      tableHeight: '조절 가능',
      floorMaterial: '완전 평탄',
      staffSupport: '전문 지원팀',
      recentUpdate: '1일 전',
      photos: 12,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 98
    },
    {
      id: 4,
      name: '이태원 글로벌 식당',
      category: '음식점',
      address: '서울 용산구 이태원로 55길 22',
      rating: 4.5,
      reviews: 31,
      hasRamp: true,
      hasElevator: false,
      hasAccessibleBathroom: true,
      hasParking: false,
      distance: '1.2km',
      image: '🍜',
      rampAngle: '완만 (4도)',
      doorWidth: '넓음 (95cm)',
      interiorSpace: '테이블 간격 넓음',
      tableHeight: '약간 높음 (76cm)',
      floorMaterial: '평탄함',
      staffSupport: '매우 친절',
      recentUpdate: '3일 전',
      photos: 9,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 85
    },
    {
      id: 5,
      name: '홍대 예술극장',
      category: '문화시설',
      address: '서울 마포구 양화로 160',
      rating: 4.6,
      reviews: 28,
      hasRamp: true,
      hasElevator: true,
      hasAccessibleBathroom: true,
      hasParking: true,
      distance: '1.5km',
      image: '🎭',
      rampAngle: '완만 (5도)',
      doorWidth: '매우 넓음 (130cm)',
      interiorSpace: '휠체어 전용석',
      tableHeight: '-',
      floorMaterial: '완전 평탄',
      staffSupport: '전문 안내원',
      recentUpdate: '1주일 전',
      photos: 15,
      verifiedBy: '보호자',
      accessibilityScore: 95
    },
    {
      id: 6,
      name: '성미산 마을카페',
      category: '카페',
      address: '서울 마포구 성미산로 15길 33',
      rating: 4.7,
      reviews: 19,
      hasRamp: true,
      hasElevator: false,
      hasAccessibleBathroom: true,
      hasParking: false,
      distance: '2.1km',
      image: '🏡',
      rampAngle: '완만 (6도)',
      doorWidth: '넓음 (85cm)',
      interiorSpace: '여유로운 공간',
      tableHeight: '적정 (70cm)',
      floorMaterial: '평탄함',
      staffSupport: '커뮤니티 지원',
      recentUpdate: '4일 전',
      photos: 11,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 88
    },
    {
      id: 7,
      name: '경복궁 국립고궁박물관',
      category: '문화시설',
      address: '서울 종로구 세종로 189',
      rating: 4.4,
      reviews: 37,
      hasRamp: true,
      hasElevator: true,
      hasAccessibleBathroom: true,
      hasParking: true,
      distance: '2.3km',
      image: '🏛️',
      rampAngle: '완만 (4도)',
      doorWidth: '매우 넓음 (150cm)',
      interiorSpace: '넓은 관람 공간',
      tableHeight: '-',
      floorMaterial: '완전 평탄',
      staffSupport: '무료 휠체어 대여',
      recentUpdate: '3일 전',
      photos: 18,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 94
    },
    {
      id: 8,
      name: '광화문 독립서점',
      category: '서점',
      address: '서울 종로구 사직로 8길 34',
      rating: 4.3,
      reviews: 16,
      hasRamp: true,
      hasElevator: false,
      hasAccessibleBathroom: false,
      hasParking: false,
      distance: '2.5km',
      image: '📖',
      rampAngle: '약간 경사 (7도)',
      doorWidth: '보통 (85cm)',
      interiorSpace: '좁은 통로',
      tableHeight: '-',
      floorMaterial: '평탄함',
      staffSupport: '친절한 응대',
      recentUpdate: '1주일 전',
      photos: 6,
      verifiedBy: '보호자',
      accessibilityScore: 72
    },
    {
      id: 9,
      name: '한강공원 여의도지구',
      category: '공원',
      address: '서울 영등포구 여의동로 330',
      rating: 4.8,
      reviews: 52,
      hasRamp: true,
      hasElevator: true,
      hasAccessibleBathroom: true,
      hasParking: true,
      distance: '3.2km',
      image: '🌳',
      rampAngle: '완만 (2도)',
      doorWidth: '개방형',
      interiorSpace: '매우 넓음',
      tableHeight: '-',
      floorMaterial: '평탄한 산책로',
      staffSupport: '안내센터 운영',
      recentUpdate: '1일 전',
      photos: 22,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 96
    },
    {
      id: 10,
      name: '종로 전통찻집',
      category: '카페',
      address: '서울 종로구 인사동길 35',
      rating: 4.1,
      reviews: 13,
      hasRamp: false,
      hasElevator: false,
      hasAccessibleBathroom: false,
      hasParking: false,
      distance: '2.8km',
      image: '🍵',
      rampAngle: '계단 있음',
      doorWidth: '좁음 (75cm)',
      interiorSpace: '전통 온돌',
      tableHeight: '낮음 (40cm)',
      floorMaterial: '단차 많음',
      staffSupport: '도움 가능',
      recentUpdate: '2주일 전',
      photos: 4,
      verifiedBy: '일반 사용자',
      accessibilityScore: 45
    },
    {
      id: 11,
      name: '강남역 CGV',
      category: '문화시설',
      address: '서울 강남구 강남대로 438',
      rating: 4.6,
      reviews: 48,
      hasRamp: true,
      hasElevator: true,
      hasAccessibleBathroom: true,
      hasParking: true,
      distance: '5.2km',
      image: '🎬',
      rampAngle: '완만 (3도)',
      doorWidth: '매우 넓음 (140cm)',
      interiorSpace: '휠체어석 다수',
      tableHeight: '-',
      floorMaterial: '완전 평탄',
      staffSupport: '전담 직원',
      recentUpdate: '2일 전',
      photos: 14,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 93
    },
    {
      id: 12,
      name: '삼청동 공방카페',
      category: '카페',
      address: '서울 종로구 삼청로 95',
      rating: 4.4,
      reviews: 21,
      hasRamp: true,
      hasElevator: false,
      hasAccessibleBathroom: true,
      hasParking: false,
      distance: '2.9km',
      image: '☕',
      rampAngle: '완만 (5도)',
      doorWidth: '넓음 (88cm)',
      interiorSpace: '테이블 간격 적정',
      tableHeight: '적정 (71cm)',
      floorMaterial: '평탄함',
      staffSupport: '친절한 응대',
      recentUpdate: '5일 전',
      photos: 10,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 82
    },
    {
      id: 13,
      name: '코엑스 별마당도서관',
      category: '도서관',
      address: '서울 강남구 영동대로 513',
      rating: 4.7,
      reviews: 65,
      hasRamp: true,
      hasElevator: true,
      hasAccessibleBathroom: true,
      hasParking: true,
      distance: '6.1km',
      image: '📚',
      rampAngle: '완만 (2도)',
      doorWidth: '매우 넓음 (160cm)',
      interiorSpace: '개방형 공간',
      tableHeight: '-',
      floorMaterial: '완전 평탄',
      staffSupport: '안내 데스크',
      recentUpdate: '1일 전',
      photos: 20,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 97
    },
    {
      id: 14,
      name: '망원시장 전통음식점',
      category: '음식점',
      address: '서울 마포구 망원로 14길 4',
      rating: 4.3,
      reviews: 27,
      hasRamp: true,
      hasElevator: false,
      hasAccessibleBathroom: false,
      hasParking: false,
      distance: '1.8km',
      image: '🍲',
      rampAngle: '약간 경사 (6도)',
      doorWidth: '보통 (82cm)',
      interiorSpace: '테이블 간격 좁음',
      tableHeight: '적정 (73cm)',
      floorMaterial: '평탄함',
      staffSupport: '친절함',
      recentUpdate: '1주일 전',
      photos: 7,
      verifiedBy: '보호자',
      accessibilityScore: 70
    },
    {
      id: 15,
      name: '서촌 갤러리카페',
      category: '카페',
      address: '서울 종로구 자하문로 10길 17',
      rating: 4.5,
      reviews: 19,
      hasRamp: true,
      hasElevator: false,
      hasAccessibleBathroom: true,
      hasParking: false,
      distance: '3.1km',
      image: '🎨',
      rampAngle: '완만 (4도)',
      doorWidth: '넓음 (90cm)',
      interiorSpace: '여유로움',
      tableHeight: '적정 (70cm)',
      floorMaterial: '평탄함',
      staffSupport: '친절한 응대',
      recentUpdate: '4일 전',
      photos: 9,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 84
    },
    {
      id: 16,
      name: '용산 전쟁기념관',
      category: '문화시설',
      address: '서울 용산구 이태원로 29',
      rating: 4.6,
      reviews: 44,
      hasRamp: true,
      hasElevator: true,
      hasAccessibleBathroom: true,
      hasParking: true,
      distance: '4.5km',
      image: '🏛️',
      rampAngle: '완만 (3도)',
      doorWidth: '매우 넓음 (150cm)',
      interiorSpace: '매우 넓음',
      tableHeight: '-',
      floorMaterial: '완전 평탄',
      staffSupport: '무료 휠체어 대여',
      recentUpdate: '2일 전',
      photos: 16,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 95
    },
    {
      id: 17,
      name: '연남동 베이커리',
      category: '카페',
      address: '서울 마포구 동교로 38길 27',
      rating: 4.7,
      reviews: 33,
      hasRamp: true,
      hasElevator: false,
      hasAccessibleBathroom: true,
      hasParking: false,
      distance: '1.4km',
      image: '🥐',
      rampAngle: '완만 (5도)',
      doorWidth: '넓음 (92cm)',
      interiorSpace: '테이블 간격 넓음',
      tableHeight: '적정 (72cm)',
      floorMaterial: '평탄함',
      staffSupport: '매우 친절',
      recentUpdate: '3일 전',
      photos: 13,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 90
    },
    {
      id: 18,
      name: '남산 서울타워',
      category: '문화시설',
      address: '서울 용산구 남산공원길 105',
      rating: 4.2,
      reviews: 38,
      hasRamp: true,
      hasElevator: true,
      hasAccessibleBathroom: true,
      hasParking: true,
      distance: '4.8km',
      image: '🗼',
      rampAngle: '완만 (4도)',
      doorWidth: '매우 넓음 (130cm)',
      interiorSpace: '넓음',
      tableHeight: '-',
      floorMaterial: '평탄함',
      staffSupport: '안내 데스크',
      recentUpdate: '1주일 전',
      photos: 19,
      verifiedBy: '보호자',
      accessibilityScore: 86
    },
    {
      id: 19,
      name: '신촌 이디야커피',
      category: '카페',
      address: '서울 서대문구 신촌로 83',
      rating: 4.4,
      reviews: 25,
      hasRamp: true,
      hasElevator: false,
      hasAccessibleBathroom: true,
      hasParking: false,
      distance: '3.7km',
      image: '☕',
      rampAngle: '완만 (6도)',
      doorWidth: '넓음 (87cm)',
      interiorSpace: '적정',
      tableHeight: '적정 (73cm)',
      floorMaterial: '평탄함',
      staffSupport: '친절함',
      recentUpdate: '5일 전',
      photos: 8,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 81
    },
    {
      id: 20,
      name: '성수동 카페거리',
      category: '카페',
      address: '서울 성동구 연무장길 74',
      rating: 4.6,
      reviews: 29,
      hasRamp: true,
      hasElevator: false,
      hasAccessibleBathroom: true,
      hasParking: true,
      distance: '5.9km',
      image: '☕',
      rampAngle: '완만 (4도)',
      doorWidth: '넓음 (95cm)',
      interiorSpace: '넓음',
      tableHeight: '적정 (71cm)',
      floorMaterial: '평탄함',
      staffSupport: '친절한 응대',
      recentUpdate: '2일 전',
      photos: 11,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 87
    },
    {
      id: 21,
      name: '익선동 한옥카페',
      category: '카페',
      address: '서울 종로구 수표로28길 8',
      rating: 4.0,
      reviews: 14,
      hasRamp: false,
      hasElevator: false,
      hasAccessibleBathroom: false,
      hasParking: false,
      distance: '3.3km',
      image: '🏡',
      rampAngle: '계단 있음',
      doorWidth: '좁음 (78cm)',
      interiorSpace: '좁음',
      tableHeight: '낮음 (45cm)',
      floorMaterial: '단차 있음',
      staffSupport: '도움 가능',
      recentUpdate: '2주일 전',
      photos: 5,
      verifiedBy: '일반 사용자',
      accessibilityScore: 48
    },
    {
      id: 22,
      name: '올림픽공원',
      category: '공원',
      address: '서울 송파구 올림픽로 424',
      rating: 4.8,
      reviews: 56,
      hasRamp: true,
      hasElevator: true,
      hasAccessibleBathroom: true,
      hasParking: true,
      distance: '8.2km',
      image: '🌳',
      rampAngle: '완만 (2도)',
      doorWidth: '개방형',
      interiorSpace: '매우 넓음',
      tableHeight: '-',
      floorMaterial: '평탄한 산책로',
      staffSupport: '안내센터 운영',
      recentUpdate: '1일 전',
      photos: 25,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 97
    },
    {
      id: 23,
      name: '북서울꿈의숲',
      category: '공원',
      address: '서울 강북구 월계로 173',
      rating: 4.7,
      reviews: 41,
      hasRamp: true,
      hasElevator: true,
      hasAccessibleBathroom: true,
      hasParking: true,
      distance: '9.1km',
      image: '🌲',
      rampAngle: '완만 (3도)',
      doorWidth: '개방형',
      interiorSpace: '매우 넓음',
      tableHeight: '-',
      floorMaterial: '평탄한 산책로',
      staffSupport: '안내센터 운영',
      recentUpdate: '3일 전',
      photos: 21,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 94
    },
    {
      id: 24,
      name: '을지로 레트로카페',
      category: '카페',
      address: '서울 중구 을지로 168',
      rating: 4.3,
      reviews: 18,
      hasRamp: true,
      hasElevator: true,
      hasAccessibleBathroom: true,
      hasParking: false,
      distance: '4.2km',
      image: '☕',
      rampAngle: '완만 (5도)',
      doorWidth: '넓음 (89cm)',
      interiorSpace: '적정',
      tableHeight: '적정 (72cm)',
      floorMaterial: '평탄함',
      staffSupport: '친절함',
      recentUpdate: '6일 전',
      photos: 9,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 83
    },
    {
      id: 25,
      name: 'DDP 동대문디자인플라자',
      category: '문화시설',
      address: '서울 중구 을지로 281',
      rating: 4.7,
      reviews: 62,
      hasRamp: true,
      hasElevator: true,
      hasAccessibleBathroom: true,
      hasParking: true,
      distance: '5.5km',
      image: '🏢',
      rampAngle: '완만 (2도)',
      doorWidth: '매우 넓음 (180cm)',
      interiorSpace: '매우 넓음',
      tableHeight: '-',
      floorMaterial: '완전 평탄',
      staffSupport: '전문 안내원',
      recentUpdate: '1일 전',
      photos: 28,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 99
    },
    {
      id: 26,
      name: '낙원상가 악기점',
      category: '상점',
      address: '서울 종로구 삼일대로 428',
      rating: 3.9,
      reviews: 11,
      hasRamp: false,
      hasElevator: true,
      hasAccessibleBathroom: false,
      hasParking: false,
      distance: '3.8km',
      image: '🎵',
      rampAngle: '계단 있음',
      doorWidth: '보통 (80cm)',
      interiorSpace: '좁음',
      tableHeight: '-',
      floorMaterial: '평탄함',
      staffSupport: '보통',
      recentUpdate: '2주일 전',
      photos: 3,
      verifiedBy: '일반 사용자',
      accessibilityScore: 58
    },
    {
      id: 27,
      name: '서울숲공원',
      category: '공원',
      address: '서울 성동구 뚝섬로 273',
      rating: 4.8,
      reviews: 58,
      hasRamp: true,
      hasElevator: false,
      hasAccessibleBathroom: true,
      hasParking: true,
      distance: '6.8km',
      image: '🌳',
      rampAngle: '완만 (2도)',
      doorWidth: '개방형',
      interiorSpace: '매우 넓음',
      tableHeight: '-',
      floorMaterial: '평탄한 산책로',
      staffSupport: '안내센터 운영',
      recentUpdate: '2일 전',
      photos: 24,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 95
    },
    {
      id: 28,
      name: '국립중앙박물관',
      category: '문화시설',
      address: '서울 용산구 서빙고로 137',
      rating: 4.9,
      reviews: 74,
      hasRamp: true,
      hasElevator: true,
      hasAccessibleBathroom: true,
      hasParking: true,
      distance: '5.3km',
      image: '🏛️',
      rampAngle: '완만 (2도)',
      doorWidth: '매우 넓음 (200cm)',
      interiorSpace: '매우 넓음',
      tableHeight: '-',
      floorMaterial: '완전 평탄',
      staffSupport: '무료 휠체어 대여',
      recentUpdate: '1일 전',
      photos: 30,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 100
    },
    {
      id: 29,
      name: '이태원 세계음식거리',
      category: '음식점',
      address: '서울 용산구 이태원로 27길 19',
      rating: 4.4,
      reviews: 36,
      hasRamp: true,
      hasElevator: false,
      hasAccessibleBathroom: true,
      hasParking: false,
      distance: '4.1km',
      image: '🌍',
      rampAngle: '완만 (5도)',
      doorWidth: '넓음 (93cm)',
      interiorSpace: '적정',
      tableHeight: '적정 (74cm)',
      floorMaterial: '평탄함',
      staffSupport: '친절함',
      recentUpdate: '4일 전',
      photos: 12,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 84
    },
    {
      id: 30,
      name: '아현동 제과점',
      category: '카페',
      address: '서울 마포구 마포대로 72',
      rating: 4.5,
      reviews: 22,
      hasRamp: true,
      hasElevator: false,
      hasAccessibleBathroom: true,
      hasParking: false,
      distance: '2.7km',
      image: '🍰',
      rampAngle: '완만 (6도)',
      doorWidth: '넓음 (88cm)',
      interiorSpace: '적정',
      tableHeight: '적정 (71cm)',
      floorMaterial: '평탄함',
      staffSupport: '매우 친절',
      recentUpdate: '5일 전',
      photos: 10,
      verifiedBy: '휠체어 사용자',
      accessibilityScore: 85
    }
  ];

  // Enhanced reviews with more detail and photos
  const recentReviews = [
    {
      id: 1,
      user: '김민수',
      userType: '수동휠체어',
      location: '카페 봄날',
      rating: 5,
      comment: '출입구 경사로가 정말 완만해서 혼자서도 쉽게 진입할 수 있었어요. 내부 테이블 간격도 넓어서 이동이 편했고, 직원분들이 자연스럽게 도와주셔서 감사했습니다. 화장실도 넓고 깨끗해요! 손잡이 위치도 완벽하고, 세면대 높이도 적절했습니다.',
      date: '2일 전',
      photos: 3,
      helpful: 12,
      details: {
        visitTime: '주중 오후',
        withCompanion: false,
        difficulty: '쉬움',
        weather: '맑음'
      },
      photoDescriptions: ['입구 경사로', '내부 테이블 배치', '장애인 화장실']
    },
    {
      id: 2,
      user: '이지은',
      userType: '전동휠체어',
      location: '서울대학교 중앙도서관',
      rating: 5,
      comment: '엘리베이터가 넓어서 전동휠체어로 이용하기 정말 좋았습니다. 휠체어 전용 열람실도 따로 있어서 장시간 이용하기 편해요. 화장실 손잡이와 공간 배치가 완벽합니다! 책상 높이도 조절 가능해서 편하게 공부할 수 있었어요.',
      date: '1일 전',
      photos: 4,
      helpful: 18,
      details: {
        visitTime: '주중 오전',
        withCompanion: true,
        difficulty: '쉬움',
        weather: '맑음'
      },
      photoDescriptions: ['넓은 엘리베이터', '휠체어 전용 열람실', '장애인 화장실', '조절 가능한 책상']
    },
    {
      id: 3,
      user: '박준호',
      userType: '수동휠체어',
      location: '이태원 글로벌 식당',
      rating: 4,
      comment: '입구 경사로는 괜찮은데, 테이블이 조금 높아서 팔 올리기가 약간 불편했어요. 하지만 직원분들이 친절하고 음식은 정말 맛있었습니다. 화장실은 넓어서 좋았어요. 다만 테이블 높이만 조금 낮추면 완벽할 것 같아요.',
      date: '3일 전',
      photos: 2,
      helpful: 8,
      details: {
        visitTime: '주말 저녁',
        withCompanion: true,
        difficulty: '보통',
        weather: '흐림'
      },
      photoDescriptions: ['입구 경사로', '테이블 높이']
    },
    {
      id: 4,
      user: '정수아',
      userType: '보호자',
      location: '홍대 예술극장',
      rating: 5,
      comment: '어머니 모시고 갔는데 휠체어 전용석이 따로 있어서 공연 관람이 정말 편했어요. 엘리베이터도 크고, 화장실도 1층에 있어서 접근성이 좋습니다. 직원분들도 매우 친절하세요! 공연 시작 전 미리 자리 안내도 해주셨어요.',
      date: '1주일 전',
      photos: 5,
      helpful: 22,
      details: {
        visitTime: '주말 오후',
        withCompanion: true,
        difficulty: '쉬움',
        weather: '맑음'
      },
      photoDescriptions: ['휠체어 전용석', '넓은 엘리베이터', '1층 화장실', '안내 데스크', '공연장 입구']
    },
    {
      id: 5,
      user: '최현우',
      userType: '전동휠체어',
      location: '코엑스 별마당도서관',
      rating: 5,
      comment: '접근성이 정말 뛰어납니다. 엘리베이터도 여러 개 있고, 공간이 넓어서 이동이 자유로워요. 책도 낮은 곳에 많이 배치되어 있어서 혼자서도 편하게 이용할 수 있었습니다. 직원분들도 친절하게 도와주셨어요.',
      date: '2일 전',
      photos: 6,
      helpful: 15,
      details: {
        visitTime: '주중 오후',
        withCompanion: false,
        difficulty: '쉬움',
        weather: '맑음'
      },
      photoDescriptions: ['개방형 공간', '낮은 서가', '엘리베이터', '안내 데스크', '휴게 공간', '화장실']
    },
    {
      id: 6,
      user: '강지원',
      userType: '수동휠체어',
      location: '한강공원 여의도지구',
      rating: 5,
      comment: '산책로가 완전히 평탄해서 휠체어로 이동하기 정말 좋았어요. 화장실도 곳곳에 있고 모두 장애인 화장실이 잘 되어 있습니다. 주차장에서 산책로까지 경사로도 완만해서 편했어요. 날씨 좋은 날 다시 오고 싶어요!',
      date: '3일 전',
      photos: 4,
      helpful: 20,
      details: {
        visitTime: '주말 오전',
        withCompanion: true,
        difficulty: '쉬움',
        weather: '맑음'
      },
      photoDescriptions: ['평탄한 산책로', '장애인 화장실', '주차장 경사로', '한강 전망']
    },
    {
      id: 7,
      user: '윤서영',
      userType: '보호자',
      location: '국립중앙박물관',
      rating: 5,
      comment: '아버지와 함께 방문했는데, 박물관 입구부터 모든 동선이 휠체어 친화적으로 설계되어 있었어요. 무료로 휠체어도 대여해주시고, 직원분들이 동선 안내도 자세히 해주셨습니다. 전시실마다 경사로가 완벽하게 설치되어 있어요.',
      date: '4일 전',
      photos: 5,
      helpful: 25,
      details: {
        visitTime: '주중 오전',
        withCompanion: true,
        difficulty: '쉬움',
        weather: '맑음'
      },
      photoDescriptions: ['박물관 입구', '전시실 경사로', '휠체어 대여소', '장애인 화장실', '안내 데스크']
    },
    {
      id: 8,
      user: '임도현',
      userType: '전동휠체어',
      location: 'DDP 동대문디자인플라자',
      rating: 5,
      comment: '건물 자체가 접근성을 고려해서 설계된 것 같아요. 모든 공간이 경사로로 연결되어 있고, 엘리베이터도 넓고 많습니다. 전시 관람하는 내내 불편함이 전혀 없었어요. 화장실도 각 층마다 잘 되어 있습니다.',
      date: '1일 전',
      photos: 7,
      helpful: 28,
      details: {
        visitTime: '주말 오후',
        withCompanion: false,
        difficulty: '쉬움',
        weather: '맑음'
      },
      photoDescriptions: ['건물 외관', '내부 경사로', '넓은 엘리베이터', '전시 공간', '화장실', '안내 표지판', 'DDP 야경']
    }
  ];

  // Story-based motivational content from PDF
  const userStories = [
    {
      id: 1,
      user: '유진민',
      age: 58,
      quote: '발달장애인인 저희 딸이 처음으로 혼자 외출했어요',
      story: '사부작 덕분에 안전한 경로를 미리 확인할 수 있어서, 딸이 처음으로 혼자 동네 카페에 갔다 왔습니다. 카페 입구의 경사로 각도부터 내부 공간까지 상세히 알 수 있어서 안심하고 보낼 수 있었어요. 이제는 조금씩 세상을 만들어가고 있습니다.',
      impact: '심리적 장벽 해소',
      location: '성미산 마을카페',
      duration: '3개월 이용'
    },
    {
      id: 2,
      user: '김윤희',
      age: 32,
      quote: '그래서 응호가게가 뭔데요? 좀 더 자세히, 마음에 와닿는 설명이 필요해요',
      story: '휠체어를 타고 돌아다니려면 정말 많은 것들을 고려해야 해요. 경사로 각도, 문 폭, 화장실, 테이블 높이까지... 사부작이 있어서 미리 알 수 있어 정말 도움이 됩니다. 이제는 새로운 곳을 방문하는 게 두렵지 않아요.',
      impact: '정보 접근성 향상',
      location: '카페 봄날',
      duration: '6개월 이용'
    },
    {
      id: 3,
      user: '이성민',
      age: 45,
      quote: '1등 1사부작을 실현하고 싶다',
      story: '성미산마을에서 사부작 활동을 하면서 우리 동네가 얼마나 많은 장벽이 있는지 깨달았어요. 하지만 하나씩 정보를 모으고 공유하면서, 우리 동네가 조금씩 변하고 있습니다. 이제는 다른 동네에서도 문의가 와요.',
      impact: '커뮤니티 활성화',
      location: '성미산 마을 전체',
      duration: '1년 활동'
    }
  ];

  // Accessibility features breakdown
  const accessibilityFeatures = [
    { icon: '♿', name: '경사로', description: '각도 측정 정보', locations: 25 },
    { icon: '🚪', name: '출입구 폭', description: '휠체어 통과 가능', locations: 28 },
    { icon: '🚻', name: '장애인 화장실', description: '공간 및 손잡이', locations: 22 },
    { icon: '🅿️', name: '주차 시설', description: '장애인 주차구역', locations: 18 },
    { icon: '🛗', name: '엘리베이터', description: '넓이 및 위치', locations: 15 },
    { icon: '🪑', name: '테이블 높이', description: '휠체어 접근 가능', locations: 20 },
    { icon: '🎯', name: '바닥 재질', description: '평탄도 및 재질', locations: 30 },
    { icon: '👥', name: '직원 응대', description: '지원 수준', locations: 30 }
  ];

  return (
    <div className="od-container">
      {/* Navigation Bar */}
      <nav className="od-nav">
        <button onClick={() => navigate('/')} className="od-back-btn">
          ← 목록으로
        </button>
        <div className="od-nav-title">우리들의 사부작 드라마</div>
      </nav>

      {/* Hero Section with Mission Statement */}
      <section className="od-hero">
        <div className="od-hero-content">
          <div className="od-hero-badge">심리적 장벽을 낮추는 스토리맵</div>
          <h1 className="od-hero-title">휠체어로 갈 수 있는 곳을 찾아보세요</h1>
          <p className="od-hero-subtitle">
            실제 휠체어 사용자들이 직접 방문하고 검증한 접근성 정보
          </p>
          <p className="od-hero-description">
            "1등 1사부작을 실현하고 싶다" - 사부작과 성미산마을이 만든 공감 프로젝트
          </p>

          {/* Enhanced Search Bar */}
          <div className="od-search-bar">
            <div className="od-search-section">
              <label>장소 유형</label>
              <input type="text" placeholder="카페, 음식점, 문화시설..." />
            </div>
            <div className="od-search-divider"></div>
            <div className="od-search-section">
              <label>위치</label>
              <input type="text" placeholder="현재 위치에서 검색" />
            </div>
            <div className="od-search-divider"></div>
            <div className="od-search-section">
              <label>접근성</label>
              <input type="text" placeholder="경사로, 엘리베이터..." />
            </div>
            <button className="od-search-button">검색</button>
          </div>

          {/* Enhanced Stats */}
          <div className="od-stats-bar">
            <div className="od-stat">
              <span className="od-stat-number">1,234</span>
              <span className="od-stat-label">등록 장소</span>
            </div>
            <div className="od-stat">
              <span className="od-stat-number">3,567</span>
              <span className="od-stat-label">사용자 리뷰</span>
            </div>
            <div className="od-stat">
              <span className="od-stat-number">8,901</span>
              <span className="od-stat-label">공유 사진</span>
            </div>
            <div className="od-stat">
              <span className="od-stat-number">456</span>
              <span className="od-stat-label">기여자</span>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features Overview */}
      <section className="od-accessibility-features">
        <h2 className="od-section-title">확인 가능한 접근성 정보</h2>
        <p className="od-section-subtitle">
          사부작은 휠체어 사용자들이 실제로 필요한 8가지 핵심 정보를 제공합니다
        </p>
        <div className="od-features-grid">
          {accessibilityFeatures.map((feature, index) => (
            <div key={index} className="od-feature-card">
              <div className="od-feature-icon">{feature.icon}</div>
              <h3 className="od-feature-name">{feature.name}</h3>
              <p className="od-feature-description">{feature.description}</p>
              <div className="od-feature-count">{feature.locations}개 장소</div>
            </div>
          ))}
        </div>
      </section>

      {/* Filters with Accessibility Options */}
      <section className="od-filters">
        <button className="od-filter-chip od-filter-active">전체 ({locations.length})</button>
        <button className="od-filter-chip">카페 ({locations.filter(l => l.category === '카페').length})</button>
        <button className="od-filter-chip">음식점 ({locations.filter(l => l.category === '음식점').length})</button>
        <button className="od-filter-chip">문화시설 ({locations.filter(l => l.category === '문화시설').length})</button>
        <button className="od-filter-chip">도서관 ({locations.filter(l => l.category === '도서관').length})</button>
        <button className="od-filter-chip">공원 ({locations.filter(l => l.category === '공원').length})</button>
        <div className="od-filter-divider"></div>
        <button className="od-filter-chip od-filter-accessibility">♿ 경사로 있음</button>
        <button className="od-filter-chip od-filter-accessibility">🛗 엘리베이터 있음</button>
        <button className="od-filter-chip od-filter-accessibility">🚻 장애인 화장실</button>
        <button className="od-filter-chip od-filter-accessibility">🅿️ 주차 가능</button>
        <button className="od-filter-chip od-filter-accessibility">⭐ 평점 4.5+</button>
      </section>

      {/* Enhanced Locations Grid */}
      <section className="od-locations">
        <div className="od-section-header">
          <div>
            <h2 className="od-section-title">내 주변 장소</h2>
            <p className="od-section-subtitle">
              {locations.length}개 장소 · 실시간 업데이트
            </p>
          </div>
          <div className="od-sort-options">
            <button className="od-sort-btn od-sort-active">거리순</button>
            <button className="od-sort-btn">평점순</button>
            <button className="od-sort-btn">최신순</button>
            <button className="od-sort-btn">접근성 높은순</button>
          </div>
        </div>
        <div className="od-locations-grid">
          {locations.map((location) => (
            <div key={location.id} className="od-location-card">
              {/* Image Section with Photo Gallery Indicator */}
              <div className="od-location-image">
                <div className="od-location-emoji">{location.image}</div>
                <div className="od-location-distance">{location.distance}</div>
                {location.recentUpdate && (
                  <div className="od-location-recent-badge">
                    {location.recentUpdate} 업데이트
                  </div>
                )}
                <div className="od-location-photos-badge">
                  📷 {location.photos}장
                </div>
                <div className="od-location-accessibility-score">
                  <div className="od-score-circle" style={{
                    background: `conic-gradient(#4CAF50 ${location.accessibilityScore * 3.6}deg, #e0e0e0 0deg)`
                  }}>
                    <div className="od-score-inner">
                      {location.accessibilityScore}
                    </div>
                  </div>
                </div>
              </div>

              <div className="od-location-details">
                <div className="od-location-main">
                  <h3 className="od-location-name">{location.name}</h3>
                  <div className="od-location-rating">
                    <span className="od-rating-star">★</span>
                    <span className="od-rating-value">{location.rating}</span>
                    <span className="od-rating-count">({location.reviews})</span>
                  </div>
                </div>
                <div className="od-location-meta">
                  <span className="od-location-category">{location.category}</span>
                  <span className="od-location-verified">✓ {location.verifiedBy} 검증</span>
                </div>
                <p className="od-location-address">{location.address}</p>

                {/* Detailed Accessibility Information */}
                <div className="od-accessibility-details">
                  <div className="od-access-detail-row">
                    <span className="od-access-detail-icon">♿</span>
                    <span className="od-access-detail-label">경사로:</span>
                    <span className="od-access-detail-value">{location.rampAngle}</span>
                  </div>
                  <div className="od-access-detail-row">
                    <span className="od-access-detail-icon">🚪</span>
                    <span className="od-access-detail-label">출입구:</span>
                    <span className="od-access-detail-value">{location.doorWidth}</span>
                  </div>
                  <div className="od-access-detail-row">
                    <span className="od-access-detail-icon">🏠</span>
                    <span className="od-access-detail-label">내부공간:</span>
                    <span className="od-access-detail-value">{location.interiorSpace}</span>
                  </div>
                  {location.tableHeight && location.tableHeight !== '-' && (
                    <div className="od-access-detail-row">
                      <span className="od-access-detail-icon">🪑</span>
                      <span className="od-access-detail-label">테이블:</span>
                      <span className="od-access-detail-value">{location.tableHeight}</span>
                    </div>
                  )}
                  <div className="od-access-detail-row">
                    <span className="od-access-detail-icon">🎯</span>
                    <span className="od-access-detail-label">바닥:</span>
                    <span className="od-access-detail-value">{location.floorMaterial}</span>
                  </div>
                  <div className="od-access-detail-row">
                    <span className="od-access-detail-icon">👥</span>
                    <span className="od-access-detail-label">직원:</span>
                    <span className="od-access-detail-value">{location.staffSupport}</span>
                  </div>
                </div>

                {/* Accessibility Tags */}
                <div className="od-accessibility-tags">
                  {location.hasRamp && (
                    <span className="od-access-tag od-access-tag-has">✓ 경사로</span>
                  )}
                  {location.hasElevator && (
                    <span className="od-access-tag od-access-tag-has">✓ 엘리베이터</span>
                  )}
                  {location.hasAccessibleBathroom && (
                    <span className="od-access-tag od-access-tag-has">✓ 장애인 화장실</span>
                  )}
                  {location.hasParking && (
                    <span className="od-access-tag od-access-tag-has">✓ 주차장</span>
                  )}
                  {!location.hasRamp && (
                    <span className="od-access-tag od-access-tag-none">경사로 없음</span>
                  )}
                  {!location.hasElevator && location.category !== '공원' && (
                    <span className="od-access-tag od-access-tag-none">엘리베이터 없음</span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="od-location-actions">
                  <button className="od-location-btn od-location-btn-primary">
                    상세정보
                  </button>
                  <button className="od-location-btn od-location-btn-secondary">
                    길찾기
                  </button>
                  <button className="od-location-btn od-location-btn-icon">
                    ❤️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="od-load-more">
          <button className="od-load-more-btn">
            더 많은 장소 보기
          </button>
        </div>
      </section>

      {/* User Stories Section - Key from PDF */}
      <section className="od-user-stories">
        <h2 className="od-section-title">사용자 이야기</h2>
        <p className="od-section-subtitle">
          성미산 마을의 성미들이 전하는 진짜 1등 1사부작의 의미
        </p>
        <div className="od-stories-grid">
          {userStories.map((story) => (
            <div key={story.id} className="od-story-card">
              <div className="od-story-quote">"{story.quote}"</div>
              <div className="od-story-content">
                <p className="od-story-text">{story.story}</p>
                <div className="od-story-meta">
                  <div className="od-story-location">📍 {story.location}</div>
                  <div className="od-story-duration">🕐 {story.duration}</div>
                </div>
                <div className="od-story-footer">
                  <div className="od-story-author">
                    <div className="od-story-avatar">{story.user[0]}</div>
                    <div className="od-story-author-info">
                      <span className="od-story-name">{story.user}</span>
                      <span className="od-story-age">{story.age}세</span>
                    </div>
                  </div>
                  <div className="od-story-impact-badge">{story.impact}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Reviews Section */}
      <section className="od-reviews">
        <div className="od-reviews-header">
          <div>
            <h2 className="od-section-title">커뮤니티 리뷰</h2>
            <p className="od-section-subtitle">
              실제 방문자들의 솔직한 경험과 사진 ({recentReviews.length}개)
            </p>
          </div>
          <div className="od-reviews-summary">
            <span className="od-overall-rating">★ 4.7</span>
            <span className="od-total-reviews">총 342개의 리뷰</span>
          </div>
        </div>

        {/* Review Filters */}
        <div className="od-review-filters">
          <button className="od-review-filter od-review-filter-active">전체</button>
          <button className="od-review-filter">휠체어 사용자</button>
          <button className="od-review-filter">보호자</button>
          <button className="od-review-filter">사진 있음</button>
          <button className="od-review-filter">평점 높은순</button>
        </div>

        <div className="od-reviews-grid">
          {recentReviews.map((review) => (
            <div key={review.id} className="od-review-card">
              <div className="od-review-top">
                <div className="od-reviewer">
                  <div className="od-reviewer-avatar">{review.user[0]}</div>
                  <div className="od-reviewer-info">
                    <div className="od-reviewer-name">{review.user}</div>
                    <div className="od-reviewer-type-badge">{review.userType}</div>
                    <div className="od-review-date">{review.date}</div>
                  </div>
                </div>
                <div className="od-review-rating-section">
                  <div className="od-review-stars">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                  <div className="od-review-rating-number">{review.rating}.0</div>
                </div>
              </div>

              <div className="od-review-location-tag">
                📍 {review.location}
              </div>

              <p className="od-review-text">{review.comment}</p>

              {/* Photo Gallery Preview */}
              {review.photoDescriptions && review.photoDescriptions.length > 0 && (
                <div className="od-review-photo-gallery">
                  {review.photoDescriptions.map((desc, index) => (
                    <div key={index} className="od-review-photo-placeholder">
                      <div className="od-photo-icon">📷</div>
                      <div className="od-photo-desc">{desc}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Review Details */}
              <div className="od-review-details">
                <span className="od-review-detail-badge">
                  🕐 {review.details.visitTime}
                </span>
                <span className="od-review-detail-badge">
                  👥 {review.details.withCompanion ? '동행' : '혼자'}
                </span>
                <span className={`od-review-difficulty od-difficulty-${review.details.difficulty}`}>
                  난이도: {review.details.difficulty}
                </span>
                {review.details.weather && (
                  <span className="od-review-detail-badge">
                    🌤️ {review.details.weather}
                  </span>
                )}
              </div>

              <div className="od-review-footer">
                <div className="od-review-photos">
                  <span className="od-photo-indicator">📷 사진 {review.photos}장</span>
                </div>
                <div className="od-review-helpful">
                  <button className="od-helpful-btn">
                    👍 도움돼요 ({review.helpful})
                  </button>
                  <button className="od-share-btn">
                    📤 공유
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Reviews */}
        <div className="od-reviews-load-more">
          <button className="od-load-more-btn">
            더 많은 리뷰 보기
          </button>
        </div>
      </section>

      {/* Contribution CTA - Key Feature from PDF */}
      <section className="od-contribution-cta">
        <div className="od-contribution-content">
          <div className="od-contribution-icon">📍</div>
          <h2 className="od-contribution-title">당신의 경험이 누군가의 용기가 됩니다</h2>
          <p className="od-contribution-text">
            여러분이 방문한 장소의 접근성 정보를 공유해주세요.<br />
            작은 정보 하나가 휠체어 사용자의 외출 결정에 큰 도움이 됩니다.
          </p>

          {/* Contribution Process */}
          <div className="od-contribution-process">
            <div className="od-process-step">
              <div className="od-process-number">1</div>
              <div className="od-process-desc">카카오맵에서<br />장소 찾기</div>
            </div>
            <div className="od-process-arrow">→</div>
            <div className="od-process-step">
              <div className="od-process-number">2</div>
              <div className="od-process-desc">URL 복사하여<br />등록하기</div>
            </div>
            <div className="od-process-arrow">→</div>
            <div className="od-process-step">
              <div className="od-process-number">3</div>
              <div className="od-process-desc">접근성 정보<br />입력하기</div>
            </div>
            <div className="od-process-arrow">→</div>
            <div className="od-process-step">
              <div className="od-process-number">4</div>
              <div className="od-process-desc">사진 업로드<br />(선택사항)</div>
            </div>
          </div>

          <div className="od-contribution-stats">
            <div className="od-contribution-stat">
              <span className="od-contribution-stat-number">10분</span>
              <span className="od-contribution-stat-label">평균 작성 시간</span>
            </div>
            <div className="od-contribution-stat">
              <span className="od-contribution-stat-number">4.8점</span>
              <span className="od-contribution-stat-label">기여자 만족도</span>
            </div>
            <div className="od-contribution-stat">
              <span className="od-contribution-stat-number">456명</span>
              <span className="od-contribution-stat-label">활동 중인 기여자</span>
            </div>
          </div>

          <div className="od-contribution-buttons">
            <button className="od-contribution-primary">
              <span className="od-btn-icon">📝</span>
              장소 등록하기
            </button>
            <button className="od-contribution-secondary">
              <span className="od-btn-icon">⭐</span>
              리뷰 작성하기
            </button>
            <button className="od-contribution-secondary">
              <span className="od-btn-icon">📸</span>
              사진 업로드
            </button>
          </div>

          <p className="od-contribution-help">
            💡 카카오맵 URL만 있으면 쉽게 등록할 수 있어요
          </p>
        </div>
      </section>

      {/* How It Works - From PDF User Journey */}
      <section className="od-how-it-works">
        <h2 className="od-section-title">사부작 이용 방법</h2>
        <p className="od-section-subtitle">
          6단계로 알아보는 응호가게 스토리맵 활용법
        </p>
        <div className="od-steps-grid">
          <div className="od-step-card">
            <div className="od-step-number">STEP 1</div>
            <div className="od-step-icon">🗺️</div>
            <h3 className="od-step-title">주변 장소 검색</h3>
            <p className="od-step-description">
              카카오맵에서 카페를 찾고 싶어 탐색을 시작합니다
            </p>
          </div>
          <div className="od-step-card">
            <div className="od-step-number">STEP 2</div>
            <div className="od-step-icon">🔍</div>
            <h3 className="od-step-title">응호가게 확인</h3>
            <p className="od-step-description">
              장소 설명란에 '응호가게'라는 문구가 있으면 해당 장소 접근 정보를 확인할 수 있습니다
            </p>
          </div>
          <div className="od-step-card">
            <div className="od-step-number">STEP 3</div>
            <div className="od-step-icon">📋</div>
            <h3 className="od-step-title">접근성 정보 확인</h3>
            <p className="od-step-description">
              경사로 각도, 출입구 폭, 내부 공간 등 상세한 접근성 정보를 확인합니다
            </p>
          </div>
          <div className="od-step-card">
            <div className="od-step-number">STEP 4</div>
            <div className="od-step-icon">📸</div>
            <h3 className="od-step-title">사진으로 미리보기</h3>
            <p className="od-step-description">
              실제 사용자들이 올린 사진을 통해 현장 상황을 미리 파악합니다
            </p>
          </div>
          <div className="od-step-card">
            <div className="od-step-number">STEP 5</div>
            <div className="od-step-icon">💭</div>
            <h3 className="od-step-title">리뷰 읽기</h3>
            <p className="od-step-description">
              다른 휠체어 사용자들의 실제 방문 경험담을 읽고 참고합니다
            </p>
          </div>
          <div className="od-step-card">
            <div className="od-step-number">STEP 6</div>
            <div className="od-step-icon">✨</div>
            <h3 className="od-step-title">안심하고 방문</h3>
            <p className="od-step-description">
              충분한 정보를 바탕으로 자신있게 외출하고, 방문 후 경험을 공유합니다
            </p>
          </div>
        </div>
      </section>

      {/* Map Integration Mockup */}
      <section className="od-map-integration">
        <h2 className="od-section-title">카카오맵 연동 방식</h2>
        <p className="od-section-subtitle">
          기존 카카오맵에서 '응호가게' 문구로 접근성 정보 확인
        </p>
        <div className="od-map-mockup">
          <div className="od-map-mockup-content">
            <div className="od-map-mockup-header">
              <div className="od-map-mockup-title">카페 봄날</div>
              <div className="od-map-mockup-rating">★ 4.8</div>
            </div>
            <div className="od-map-mockup-description">
              <p className="od-map-mockup-text">
                <strong>응호가게</strong> - 휠체어 접근성 정보가 등록된 장소입니다
              </p>
              <div className="od-map-mockup-accessibility">
                <div className="od-map-mockup-badge">♿ 경사로 완만</div>
                <div className="od-map-mockup-badge">🚪 출입구 넓음</div>
                <div className="od-map-mockup-badge">🚻 장애인 화장실</div>
              </div>
            </div>
            <button className="od-map-mockup-button">
              자세한 접근성 정보 보기
            </button>
          </div>
        </div>
      </section>

      {/* Project Mission - From PDF */}
      <section className="od-mission">
        <h2 className="od-section-title">프로젝트 미션</h2>
        <p className="od-section-subtitle">
          사부작이 만들어가는 포용적인 세상
        </p>
        <div className="od-mission-grid">
          <div className="od-mission-card">
            <div className="od-mission-icon">🎯</div>
            <h3 className="od-mission-title">심리적 장벽 해소 (스토리텔링 장착)</h3>
            <p className="od-mission-text">
              사부작 발달장애인 청년 당사자를 가이드로 설정하여 모든 콘텐츠를 그들의 목소리로 전달합니다.
              '정보는 따라가는 이야기 지도'로써 사용자가 '공감의 여정'을 겪으며 자연스럽게 인터랙티브 스토리맵을 구축합니다.
            </p>
          </div>
          <div className="od-mission-card">
            <div className="od-mission-icon">🤝</div>
            <h3 className="od-mission-title">인터랙티브 로드맵 플로우 구축</h3>
            <p className="od-mission-text">
              다수 목록 나열이 아닌, 지도 기반의 순차적 로드맵을 제공하고 스토리를 읽을 때마다 '공감하기' 버튼을 통해 즉시적인 피드백을 유도하여 사용자의 경험 몰입도를 높입니다.
            </p>
          </div>
          <div className="od-mission-card">
            <div className="od-mission-icon">🌍</div>
            <h3 className="od-mission-title">행동 연계 극대화</h3>
            <p className="od-mission-text">
              모든 스토리를 감상한 이후, 페이지 끝에 카카오 같이가치 링크를 제공하여, 형성된 공감이 실질적인 응원 및 기부로 이어지게 합니다.
            </p>
          </div>
          <div className="od-mission-card">
            <div className="od-mission-icon">💡</div>
            <h3 className="od-mission-title">역할 분담</h3>
            <p className="od-mission-text">
              프로젝트는 스토리를 담을 기술적 구조와 인터랙티브 플로우를 설계하는 데 집중하고, 스토리 콘텐츠의 구체적인 창작은 사부작 측과의 협업 가이드라인을 통해 진행합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="od-social-proof">
        <h2 className="od-section-title">함께하는 커뮤니티</h2>
        <div className="od-social-stats">
          <div className="od-social-stat-card">
            <div className="od-social-stat-number">125만원</div>
            <div className="od-social-stat-label">카카오 같이가치 모금액</div>
            <div className="od-social-stat-progress">
              <div className="od-social-stat-bar" style={{ width: '75%' }}></div>
            </div>
            <div className="od-social-stat-subtext">목표: 1,257,026원 (100%)</div>
          </div>
          <div className="od-social-stat-card">
            <div className="od-social-stat-number">456명</div>
            <div className="od-social-stat-label">참여 기부자</div>
          </div>
          <div className="od-social-stat-card">
            <div className="od-social-stat-number">1,234개</div>
            <div className="od-social-stat-label">등록된 장소</div>
          </div>
        </div>

        <div className="od-partner-logos">
          <div className="od-partner-logo">
            <div className="od-partner-name">성미산마을</div>
          </div>
          <div className="od-partner-logo">
            <div className="od-partner-name">사부작</div>
          </div>
          <div className="od-partner-logo">
            <div className="od-partner-name">서울대학교</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="od-cta">
        <div className="od-cta-content">
          <h2 className="od-cta-title">함께 만드는 포용적인 세상</h2>
          <p className="od-cta-text">
            '사부작(四部作)'은 네 가지 큰 작품을 의미합니다.<br />
            여러분의 참여가 이 드라마의 중요한 한 부분이 됩니다.
          </p>
          <div className="od-cta-features">
            <div className="od-cta-feature">
              <div className="od-cta-feature-icon">✨</div>
              <div className="od-cta-feature-text">쉬운 참여</div>
            </div>
            <div className="od-cta-feature">
              <div className="od-cta-feature-icon">🤝</div>
              <div className="od-cta-feature-text">실질적 도움</div>
            </div>
            <div className="od-cta-feature">
              <div className="od-cta-feature-icon">💪</div>
              <div className="od-cta-feature-text">함께하는 변화</div>
            </div>
          </div>
          <div className="od-cta-buttons">
            <button className="od-cta-primary">
              <span className="od-cta-btn-icon">🚀</span>
              지금 시작하기
            </button>
            <button className="od-cta-secondary">
              <span className="od-cta-btn-icon">📖</span>
              프로젝트 더 알아보기
            </button>
            <button className="od-cta-secondary">
              <span className="od-cta-btn-icon">❤️</span>
              카카오 같이가치 후원
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="od-footer">
        <div className="od-footer-content">
          <div className="od-footer-main">
            <h3 className="od-footer-title">우리들의 사부작 드라마</h3>
            <p className="od-footer-text">
              서울대학교 정보문화학 프로젝트
            </p>
            <p className="od-footer-subtext">
              휠체어 사용자들의 실제 니즈를 반영하여 더 포용적인 사회를 만듭니다
            </p>
            <div className="od-footer-contact">
              <div className="od-footer-contact-item">
                📧 contact@sabujak-drama.com
              </div>
              <div className="od-footer-contact-item">
                📱 카카오톡: 사부작드라마
              </div>
            </div>
          </div>
          <div className="od-footer-links">
            <div className="od-footer-link-group">
              <h4 className="od-footer-link-title">프로젝트</h4>
              <a href="#" className="od-footer-link">소개</a>
              <a href="#" className="od-footer-link">팀</a>
              <a href="#" className="od-footer-link">파트너</a>
              <a href="#" className="od-footer-link">보도자료</a>
            </div>
            <div className="od-footer-link-group">
              <h4 className="od-footer-link-title">참여하기</h4>
              <a href="#" className="od-footer-link">장소 등록</a>
              <a href="#" className="od-footer-link">리뷰 작성</a>
              <a href="#" className="od-footer-link">사진 공유</a>
              <a href="#" className="od-footer-link">기여자 가이드</a>
            </div>
            <div className="od-footer-link-group">
              <h4 className="od-footer-link-title">지원</h4>
              <a href="#" className="od-footer-link">도움말</a>
              <a href="#" className="od-footer-link">문의하기</a>
              <a href="#" className="od-footer-link">개인정보처리방침</a>
              <a href="#" className="od-footer-link">이용약관</a>
            </div>
            <div className="od-footer-link-group">
              <h4 className="od-footer-link-title">커뮤니티</h4>
              <a href="#" className="od-footer-link">SNS 공유</a>
              <a href="#" className="od-footer-link">같이가치 후원</a>
              <a href="#" className="od-footer-link">뉴스레터</a>
              <a href="#" className="od-footer-link">FAQ</a>
            </div>
          </div>
        </div>
        <div className="od-footer-bottom">
          <p className="od-footer-copyright">
            © 2024 우리들의 사부작 드라마. All rights reserved.
          </p>
          <p className="od-footer-partner">
            In partnership with 성미산마을 & 사부작 · 서울대학교 정보문화학
          </p>
          <div className="od-footer-social">
            <a href="#" className="od-footer-social-link">Instagram</a>
            <a href="#" className="od-footer-social-link">Facebook</a>
            <a href="#" className="od-footer-social-link">KakaoTalk</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default OurDrama;
