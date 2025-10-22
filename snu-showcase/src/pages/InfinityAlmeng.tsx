import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './InfinityAlmeng.css';

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  pricePerGram: number;
  ingredients: string;
  lastRefillDate: string;
  description: string;
  rating: number;
  reviewCount: number;
  certifications: string[];
  usageNote: string;
  expiryDays: number;
}

interface PurchaseHistory {
  productName: string;
  weight: number;
  price: number;
  date: string;
  plasticSaved: number;
  co2Saved: number;
}

interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

function InfinityAlmeng() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'entrance' | 'browse' | 'scan' | 'weigh' | 'payment' | 'loyalty' | 'history'>('entrance');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [weight, setWeight] = useState<number>(0);
  const [isWeighing, setIsWeighing] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [containerWeight, setContainerWeight] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  // 확장된 알맹상점 제품 데이터 (20개 제품)
  const products: Product[] = [
    {
      id: '1',
      name: '라보H 핸드워시',
      brand: 'LABO-H',
      category: '욕실용품',
      pricePerGram: 32,
      ingredients: '식물성 계면활성제, 천연 에센셜 오일, 글리세린, 알로에 베라 추출물',
      lastRefillDate: '2025-10-20',
      description: '프랑스 유기농 인증 핸드워시. 시트러스 향으로 상쾌한 세정력을 제공하며, 손을 건조하지 않게 보호합니다.',
      rating: 4.8,
      reviewCount: 127,
      certifications: ['유기농 인증', '비건 인증', '동물실험 반대'],
      usageNote: '펌프 2-3회 분량으로 손을 충분히 문지른 후 물로 헹구세요',
      expiryDays: 365
    },
    {
      id: '2',
      name: '모미래 샴푸',
      brand: 'MOMIRAE',
      category: '욕실용품',
      pricePerGram: 32,
      ingredients: '코코넛 오일, 아르간 오일, 천연 단백질, 병풀 추출물, 녹차 추출물',
      lastRefillDate: '2025-10-19',
      description: '저자극 천연 샴푸. 민감성 두피에도 안심하고 사용 가능하며, 풍성한 거품과 은은한 허브향이 특징입니다.',
      rating: 4.9,
      reviewCount: 203,
      certifications: ['유기농 인증', '저자극 테스트 완료', '피부 저자극'],
      usageNote: '젖은 모발에 적당량을 덜어 두피를 마사지하듯 문지른 후 헹구세요',
      expiryDays: 365
    },
    {
      id: '3',
      name: '닥터포헤어 샴푸',
      brand: 'Dr.FORHAIR',
      category: '욕실용품',
      pricePerGram: 30,
      ingredients: '비오틴, 판테놀, 맥주효모 추출물, 나이아신아마이드, 징크피리치온',
      lastRefillDate: '2025-10-21',
      description: '탈모 케어 전문 샴푸. 두피 건강과 모발 강화에 도움을 주며, 비오틴 성분이 모근을 튼튼하게 합니다.',
      rating: 4.7,
      reviewCount: 156,
      certifications: ['탈모 완화 기능성', '두피 케어 인증'],
      usageNote: '두피에 직접 도포 후 2-3분 마사지하고 미온수로 헹구세요',
      expiryDays: 365
    },
    {
      id: '4',
      name: '스냅 세제',
      brand: 'SNAP',
      category: '세탁용품',
      pricePerGram: 20,
      ingredients: '식물성 계면활성제, 효소, 천연 향료, 베이킹소다, 과탄산소다',
      lastRefillDate: '2025-10-18',
      description: '고농축 천연 세탁세제. 소량으로도 강력한 세정력을 발휘하며, 섬유 유연 효과까지 있습니다.',
      rating: 4.6,
      reviewCount: 89,
      certifications: ['친환경 인증', '식물성 원료'],
      usageNote: '물 5L당 10g 사용, 찌든 때는 20g 사용을 권장합니다',
      expiryDays: 730
    },
    {
      id: '5',
      name: '모미래 바디워시',
      brand: 'MOMIRAE',
      category: '욕실용품',
      pricePerGram: 28,
      ingredients: '올리브 오일, 시어버터, 녹차 추출물, 라벤더 오일, 카모마일 추출물',
      lastRefillDate: '2025-10-20',
      description: '보습력이 뛰어난 천연 바디워시. 건조한 피부에 적합하며, 은은한 라벤더 향으로 릴렉스 효과를 줍니다.',
      rating: 4.8,
      reviewCount: 142,
      certifications: ['유기농 인증', '저자극 테스트'],
      usageNote: '샤워 타월이나 손에 적당량을 덜어 거품을 낸 후 사용하세요',
      expiryDays: 365
    },
    {
      id: '6',
      name: '피톤치드 주방세제',
      brand: 'NATURAL CLEAN',
      category: '주방용품',
      pricePerGram: 18,
      ingredients: '피톤치드, 베이킹소다, 구연산, 야자 계면활성제, 편백나무 추출물',
      lastRefillDate: '2025-10-19',
      description: '식물성 주방세제. 기름때 제거와 살균 효과가 뛰어나며, 자연 유래 성분으로 안전합니다.',
      rating: 4.5,
      reviewCount: 94,
      certifications: ['친환경 인증', '식기용 적합'],
      usageNote: '설거지 스펀지에 1-2회 분량을 덜어 사용하세요',
      expiryDays: 730
    },
    {
      id: '7',
      name: '일랑일랑 컨디셔너',
      brand: 'NATURAL HAIR',
      category: '욕실용품',
      pricePerGram: 30,
      ingredients: '일랑일랑 오일, 호호바 오일, 시어버터, 케라틴, 실크 단백질',
      lastRefillDate: '2025-10-17',
      description: '모발에 윤기와 탄력을 부여하는 천연 컨디셔너. 손상된 모발을 케어하고 정전기를 방지합니다.',
      rating: 4.7,
      reviewCount: 118,
      certifications: ['천연 원료', '실리콘 프리'],
      usageNote: '샴푸 후 모발 끝부분 중심으로 도포하고 2-3분 후 헹구세요',
      expiryDays: 365
    },
    {
      id: '8',
      name: '레몬 식기세척기 세제',
      brand: 'ECO KITCHEN',
      category: '주방용품',
      pricePerGram: 22,
      ingredients: '레몬 추출물, 구연산, 소다, 식물성 계면활성제',
      lastRefillDate: '2025-10-21',
      description: '식기세척기 전용 천연 세제. 강력한 세정력과 깨끗한 린스 효과로 얼룩 없는 마무리가 가능합니다.',
      rating: 4.6,
      reviewCount: 76,
      certifications: ['친환경 인증', '식기 안전'],
      usageNote: '식기세척기 세제 투입구에 20g 정도 넣어 사용하세요',
      expiryDays: 730
    },
    {
      id: '9',
      name: '히말라야 핑크솔트 바디스크럽',
      brand: 'SALT & SKIN',
      category: '욕실용품',
      pricePerGram: 45,
      ingredients: '히말라야 핑크솔트, 아몬드 오일, 비타민E, 라벤더 오일',
      lastRefillDate: '2025-10-16',
      description: '천연 미네랄이 풍부한 바디스크럽. 각질 제거와 동시에 피부에 영양을 공급합니다.',
      rating: 4.9,
      reviewCount: 134,
      certifications: ['천연 원료', '비건 인증'],
      usageNote: '젖은 피부에 원을 그리며 마사지 후 미온수로 헹구세요',
      expiryDays: 180
    },
    {
      id: '10',
      name: '베이킹소다 다목적 세정제',
      brand: 'CLEAN HOME',
      category: '주방용품',
      pricePerGram: 15,
      ingredients: '베이킹소다, 과탄산소다, 구연산, 티트리 오일',
      lastRefillDate: '2025-10-20',
      description: '주방, 욕실, 거실 등 집안 곳곳에 사용 가능한 만능 세정제. 냄새 제거와 살균 효과가 뛰어납니다.',
      rating: 4.8,
      reviewCount: 201,
      certifications: ['친환경 인증', '다목적 사용'],
      usageNote: '물 500ml에 10g을 희석하여 스프레이로 사용하세요',
      expiryDays: 1095
    },
    {
      id: '11',
      name: '아르간 헤어오일',
      brand: 'ARGAN PURE',
      category: '욕실용품',
      pricePerGram: 50,
      ingredients: '아르간 오일, 카멜리아 오일, 비타민E, 로즈마리 오일',
      lastRefillDate: '2025-10-18',
      description: '모로코산 순수 아르간 오일로 만든 헤어 에센스. 손상된 모발에 깊은 영양을 공급합니다.',
      rating: 4.9,
      reviewCount: 167,
      certifications: ['100% 천연', 'USDA 유기농'],
      usageNote: '타월 드라이 후 모발 끝에 2-3방울 도포하세요',
      expiryDays: 365
    },
    {
      id: '12',
      name: '편백나무 섬유유연제',
      brand: 'FOREST FRESH',
      category: '세탁용품',
      pricePerGram: 25,
      ingredients: '편백나무 추출물, 식물성 유연제, 천연 향료',
      lastRefillDate: '2025-10-19',
      description: '합성향료 무첨가 천연 섬유유연제. 은은한 편백 향과 부드러운 촉감을 선사합니다.',
      rating: 4.7,
      reviewCount: 143,
      certifications: ['천연 원료', '저자극'],
      usageNote: '세탁기 유연제 투입구에 30ml 정도 넣어 사용하세요',
      expiryDays: 730
    },
    {
      id: '13',
      name: '티트리 페이스워시',
      brand: 'TEA TREE LAB',
      category: '욕실용품',
      pricePerGram: 35,
      ingredients: '티트리 오일, 살리실산, 센텔라 추출물, 알로에 베라',
      lastRefillDate: '2025-10-21',
      description: '지성 피부와 트러블 피부를 위한 클렌징 폼. 과도한 피지를 제거하고 모공을 케어합니다.',
      rating: 4.8,
      reviewCount: 189,
      certifications: ['저자극 테스트', '여드름성 피부 적합'],
      usageNote: '미온수로 얼굴을 적신 후 거품을 내어 마사지하고 헹구세요',
      expiryDays: 365
    },
    {
      id: '14',
      name: '코코넛 오일 클렌징',
      brand: 'COCO BEAUTY',
      category: '욕실용품',
      pricePerGram: 40,
      ingredients: '코코넛 오일, 호호바 오일, 비타민E, 카모마일 추출물',
      lastRefillDate: '2025-10-17',
      description: '메이크업과 노폐물을 부드럽게 녹여내는 오일 클렌저. 건조하지 않고 촉촉한 마무리감.',
      rating: 4.9,
      reviewCount: 156,
      certifications: ['천연 오일', '비건 인증'],
      usageNote: '마른 손에 적당량을 덜어 얼굴에 마사지 후 미온수로 유화하여 헹구세요',
      expiryDays: 365
    },
    {
      id: '15',
      name: '유칼립투스 세탁세제',
      brand: 'ECO WASH',
      category: '세탁용품',
      pricePerGram: 22,
      ingredients: '유칼립투스 오일, 식물성 계면활성제, 효소, 소다',
      lastRefillDate: '2025-10-20',
      description: '항균 효과가 있는 유칼립투스 세탁세제. 상쾌한 향과 강력한 세정력을 동시에 제공합니다.',
      rating: 4.7,
      reviewCount: 122,
      certifications: ['친환경 인증', '항균 효과'],
      usageNote: '드럼세탁기 기준 세제 투입구에 30ml 사용하세요',
      expiryDays: 730
    },
    {
      id: '16',
      name: '로즈마리 헤어토닉',
      brand: 'HERB THERAPY',
      category: '욕실용품',
      pricePerGram: 38,
      ingredients: '로즈마리 추출물, 멘톨, 비오틴, 카페인, 징크',
      lastRefillDate: '2025-10-18',
      description: '두피 건강을 위한 헤어토닉. 혈액순환을 촉진하고 모근을 강화하여 탈모를 예방합니다.',
      rating: 4.6,
      reviewCount: 98,
      certifications: ['두피 케어', '탈모 완화'],
      usageNote: '샴푸 후 두피에 직접 분사하고 마사지하세요',
      expiryDays: 365
    },
    {
      id: '17',
      name: '감귤 다목적 클리너',
      brand: 'CITRUS CLEAN',
      category: '주방용품',
      pricePerGram: 16,
      ingredients: '감귤 추출물, 구연산, 베이킹소다, 식물성 계면활성제',
      lastRefillDate: '2025-10-21',
      description: '상큼한 감귤향의 만능 세정제. 기름때와 찌든 때를 효과적으로 제거합니다.',
      rating: 4.7,
      reviewCount: 145,
      certifications: ['친환경 인증', '천연 향료'],
      usageNote: '더러운 표면에 직접 뿌려 마른 천으로 닦아내세요',
      expiryDays: 730
    },
    {
      id: '18',
      name: '시어버터 바디로션',
      brand: 'SHEA LOVE',
      category: '욕실용품',
      pricePerGram: 42,
      ingredients: '시어버터, 호호바 오일, 알로에 베라, 비타민E, 라벤더 오일',
      lastRefillDate: '2025-10-19',
      description: '깊은 보습을 제공하는 바디로션. 건조하고 민감한 피부를 진정시키고 영양을 공급합니다.',
      rating: 4.9,
      reviewCount: 178,
      certifications: ['유기농 인증', '저자극 테스트'],
      usageNote: '샤워 후 물기가 남아있을 때 바로 펴 발라주세요',
      expiryDays: 365
    },
    {
      id: '19',
      name: '과탄산소다 표백제',
      brand: 'WHITE MAGIC',
      category: '세탁용품',
      pricePerGram: 12,
      ingredients: '과탄산소다, 탄산나트륨',
      lastRefillDate: '2025-10-20',
      description: '산소계 표백제로 색상 손상 없이 얼룩을 제거합니다. 환경에 무해한 성분으로 안심 사용.',
      rating: 4.8,
      reviewCount: 167,
      certifications: ['친환경 인증', '색상 옷 사용 가능'],
      usageNote: '세탁 시 물 5L당 10g을 추가하세요',
      expiryDays: 1095
    },
    {
      id: '20',
      name: '녹차 치약',
      brand: 'GREEN SMILE',
      category: '욕실용품',
      pricePerGram: 26,
      ingredients: '녹차 추출물, 자일리톨, 프로폴리스, 박하 오일, 불소',
      lastRefillDate: '2025-10-18',
      description: '천연 녹차 성분의 치약. 구취 제거와 잇몸 건강에 도움을 주며, 상쾌한 사용감을 제공합니다.',
      rating: 4.7,
      reviewCount: 211,
      certifications: ['천연 원료', '불소 함유'],
      usageNote: '칫솔에 완두콩 크기만큼 덜어 3분간 양치하세요',
      expiryDays: 730
    }
  ];

  // 구매 이력 데이터
  const purchaseHistory: PurchaseHistory[] = [
    { productName: '모미래 샴푸', weight: 280, price: 8960, date: '2025-10-15', plasticSaved: 85, co2Saved: 0.51 },
    { productName: '라보H 핸드워시', weight: 250, price: 8000, date: '2025-10-08', plasticSaved: 76, co2Saved: 0.46 },
    { productName: '스냅 세제', weight: 500, price: 10000, date: '2025-09-28', plasticSaved: 152, co2Saved: 0.91 },
    { productName: '모미래 바디워시', weight: 320, price: 8960, date: '2025-09-18', plasticSaved: 97, co2Saved: 0.58 },
  ];

  // 리뷰 데이터
  const reviews: { [key: string]: Review[] } = {
    '1': [
      { author: '김**', rating: 5, text: '향도 좋고 세정력도 만족스러워요. 리필로 구매하니 가격도 저렴!', date: '2025-10-15' },
      { author: '박**', rating: 5, text: '손이 건조하지 않아서 좋아요. 계속 구매할 예정입니다.', date: '2025-10-12' },
      { author: '이**', rating: 4, text: '시트러스 향이 상쾌해요. 세정력도 괜찮습니다.', date: '2025-10-08' }
    ],
    '2': [
      { author: '최**', rating: 5, text: '민감한 두피인데 자극 없이 사용하기 좋네요!', date: '2025-10-18' },
      { author: '정**', rating: 5, text: '거품도 풍성하고 향도 은은해서 마음에 들어요.', date: '2025-10-14' },
    ],
    '3': [
      { author: '강**', rating: 5, text: '탈모 케어 효과가 있는 것 같아요. 계속 쓸게요!', date: '2025-10-16' },
      { author: '조**', rating: 4, text: '두피가 건강해지는 느낌입니다.', date: '2025-10-10' }
    ]
  };

  // Toast 알림 표시 함수
  const showToastMessage = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // 무게 측정 시뮬레이션
  useEffect(() => {
    if (isWeighing && weight < 500) {
      const timer = setTimeout(() => {
        setWeight(prev => Math.min(prev + Math.floor(Math.random() * 50 + 10), 500));
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isWeighing, weight]);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setActiveTab('scan');
    showToastMessage(`${product.name} 제품을 선택했습니다`);
  };

  const handleStartWeighing = () => {
    if (!containerWeight) {
      setCurrentStep('빈 용기를 저울에 올려주세요');
      showToastMessage('용기 무게를 측정합니다');
      setTimeout(() => {
        setContainerWeight(120);
        setCurrentStep(`용기 무게: 120g - 영점 조정 완료!`);
        showToastMessage('영점 조정이 완료되었습니다');
      }, 1500);
      setTimeout(() => {
        setCurrentStep('이제 제품을 담아주세요');
        setIsWeighing(true);
      }, 3000);
    }
  };

  const handleStopWeighing = () => {
    setIsWeighing(false);
    setCurrentStep(`측정 완료: ${weight}g`);
    showToastMessage(`${weight}g 측정 완료`);
  };

  const handleWeightConfirm = () => {
    if (weight > 0) {
      setActiveTab('payment');
      showToastMessage('결제 화면으로 이동합니다');
    }
  };

  const handlePayment = async (method: string) => {
    setIsProcessing(true);
    setCurrentStep('결제 처리 중...');

    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setShowSuccess(true);
    setCurrentStep('결제 완료!');
    showToastMessage('결제가 완료되었습니다!');

    setTimeout(() => {
      setActiveTab('loyalty');
      setShowSuccess(false);
    }, 2000);
  };

  const calculateTotal = () => {
    if (!selectedProduct || !weight) return 0;
    return selectedProduct.pricePerGram * weight;
  };

  const calculateTotalPlasticSaved = () => {
    const historyTotal = purchaseHistory.reduce((sum, item) => sum + item.plasticSaved, 0);
    const currentPurchase = weight > 0 ? Math.floor(weight * 0.3) : 0;
    return historyTotal + currentPurchase;
  };

  const calculateTotalCO2Saved = () => {
    const historyCO2 = purchaseHistory.reduce((sum, item) => sum + item.co2Saved, 0);
    const currentCO2 = weight > 0 ? (weight * 0.3 / 1000 * 6) : 0;
    return (historyCO2 + currentCO2).toFixed(2);
  };

  const filteredProducts = selectedCategory === '전체'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="infinity-almeng-container">
      {/* Toast Notification */}
      {showToast && (
        <div className="toast-notification">
          <div className="toast-icon">✓</div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <header className="ia-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← 홈으로
        </button>
        <div className="header-content">
          <h1>인피니티알맹</h1>
          <p className="ia-subtitle">매장 입장부터 결제, 재방문까지 리필 여정 전체를 개인 스마트폰 하나로 완결하는 ALL-IN-ONE 솔루션</p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="ia-tabs">
        <button
          className={`ia-tab ${activeTab === 'entrance' ? 'active' : ''}`}
          onClick={() => setActiveTab('entrance')}
        >
          <span className="tab-icon">📱</span>
          <span>NFC 입장</span>
        </button>
        <button
          className={`ia-tab ${activeTab === 'browse' ? 'active' : ''}`}
          onClick={() => setActiveTab('browse')}
        >
          <span className="tab-icon">📋</span>
          <span>디지털 카탈로그</span>
        </button>
        <button
          className={`ia-tab ${activeTab === 'scan' ? 'active' : ''}`}
          onClick={() => setActiveTab('scan')}
        >
          <span className="tab-icon">🔍</span>
          <span>제품 정보</span>
        </button>
        <button
          className={`ia-tab ${activeTab === 'weigh' ? 'active' : ''}`}
          onClick={() => setActiveTab('weigh')}
        >
          <span className="tab-icon">⚖️</span>
          <span>저울 연동</span>
        </button>
        <button
          className={`ia-tab ${activeTab === 'payment' ? 'active' : ''}`}
          onClick={() => setActiveTab('payment')}
        >
          <span className="tab-icon">💳</span>
          <span>간편 결제</span>
        </button>
        <button
          className={`ia-tab ${activeTab === 'loyalty' ? 'active' : ''}`}
          onClick={() => setActiveTab('loyalty')}
        >
          <span className="tab-icon">🌱</span>
          <span>환경 마일리지</span>
        </button>
        <button
          className={`ia-tab ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          <span className="tab-icon">📜</span>
          <span>구매 내역</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="ia-content">
        {/* Entrance Tab - NFC 태깅 */}
        {activeTab === 'entrance' && (
          <div className="ia-section entrance-section">
            <div className="section-header">
              <div className="ia-icon-large">📱</div>
              <h2>알맹상점에 오신 것을 환영합니다</h2>
              <p className="ia-description">
                저울 옆 NFC 태그에 휴대폰을 갖다 대면<br />
                자동으로 리필 과정이 시작됩니다
              </p>
            </div>

            <div className="ia-card nfc-card">
              <div className="nfc-animation">
                <div className="nfc-icon">📲</div>
                <div className="nfc-waves">
                  <div className="wave wave-1"></div>
                  <div className="wave wave-2"></div>
                  <div className="wave wave-3"></div>
                </div>
              </div>
              <h3>NFC 태그를 스캔하세요</h3>
              <p className="nfc-guide">휴대폰 뒷면을 저울 옆 거치대에 가까이 대주세요</p>
              <button className="ia-button-primary pulse" onClick={() => {
                setActiveTab('browse');
                showToastMessage('NFC 태그 인식 완료!');
              }}>
                <span className="btn-icon">✓</span>
                태그 완료 (시뮬레이션)
              </button>
            </div>

            <div className="info-box gradient-border">
              <h4>💡 처음 방문하시나요?</h4>
              <p className="info-subtitle">인피니티알맹은 이런 점이 다릅니다</p>
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-number">1</div>
                  <div className="feature-content">
                    <strong>NFC 태그로 자동 입장</strong>
                    <p>앱 설치 없이 웹으로 바로 연결됩니다</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-number">2</div>
                  <div className="feature-content">
                    <strong>투명한 제품 정보</strong>
                    <p>성분, 리필일자, 후기를 실시간으로 확인하세요</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-number">3</div>
                  <div className="feature-content">
                    <strong>블루투스 저울 연동</strong>
                    <p>무게가 실시간으로 측정되어 가격을 즉시 계산합니다</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-number">4</div>
                  <div className="feature-content">
                    <strong>OKPOS 간편 결제</strong>
                    <p>카카오페이/네이버페이로 빠르게 결제하세요</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="store-info-grid">
              <div className="store-card">
                <h4>🏪 알맹상점 망원점</h4>
                <div className="store-detail">
                  <span className="detail-icon">📍</span>
                  <span>서울시 마포구 포은로8길 21</span>
                </div>
                <div className="store-detail">
                  <span className="detail-icon">⏰</span>
                  <span>11:00 - 20:00 (월요일 휴무)</span>
                </div>
                <div className="store-detail">
                  <span className="detail-icon">📞</span>
                  <span>02-123-4567</span>
                </div>
              </div>

              <div className="stats-card">
                <h4>📊 리필스테이션 현황</h4>
                <div className="stat-row">
                  <span>전국 리필 매장</span>
                  <strong>26곳</strong>
                </div>
                <div className="stat-row">
                  <span>MSW 발생량 (2050년 예측)</span>
                  <strong>38억톤</strong>
                </div>
                <div className="stat-row">
                  <span>리필스테이션 실제 이용률</span>
                  <strong>33.7%</strong>
                </div>
              </div>
            </div>

            <div className="mission-statement">
              <h4>🎯 프로젝트 목표</h4>
              <p>리필스테이션 이용 과정을 간소화하여 초기 사용자의 진입 장벽을 낮추고, 리필 문화 확산을 목적으로 합니다.</p>
            </div>
          </div>
        )}

        {/* Browse Tab - 디지털 카탈로그 */}
        {activeTab === 'browse' && (
          <div className="ia-section browse-section">
            <div className="section-header">
              <div className="ia-icon-large">📋</div>
              <h2>디지털 카탈로그</h2>
              <p className="ia-description">
                투명한 제품 정보로 신뢰할 수 있는 선택을 하세요
              </p>
            </div>

            <div className="category-filters">
              {['전체', '욕실용품', '세탁용품', '주방용품'].map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedCategory(category);
                    showToastMessage(`${category} 카테고리를 선택했습니다`);
                  }}
                >
                  {category}
                  {category === '전체' && <span className="badge">{products.length}</span>}
                  {category !== '전체' && (
                    <span className="badge">
                      {products.filter(p => p.category === category).length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="product-card enhanced"
                  onClick={() => handleProductSelect(product)}
                >
                  <div className="product-header">
                    <div className="product-icon">
                      {product.category === '욕실용품' ? '🧴' :
                       product.category === '세탁용품' ? '🧺' : '🍽️'}
                    </div>
                    <div className="product-badge">{product.category}</div>
                  </div>
                  <h3>{product.name}</h3>
                  <p className="product-brand">{product.brand}</p>
                  <p className="product-description">{product.description}</p>

                  <div className="product-meta">
                    <div className="rating">
                      <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
                      <span className="rating-value">{product.rating}</span>
                      <span className="review-count">({product.reviewCount})</span>
                    </div>
                    <div className="refill-date">
                      <span className="date-icon">📅</span>
                      <span className="date-value">{product.lastRefillDate}</span>
                    </div>
                  </div>

                  <div className="product-certifications">
                    {product.certifications.slice(0, 2).map((cert, idx) => (
                      <span key={idx} className="cert-badge">{cert}</span>
                    ))}
                  </div>

                  <div className="product-footer">
                    <div className="product-price">
                      <span className="price-value">{product.pricePerGram}원</span>
                      <span className="price-unit">/g</span>
                    </div>
                    <button className="product-select-btn">
                      상세보기 →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="info-banner">
              <div className="banner-icon">💚</div>
              <div className="banner-content">
                <strong>모든 제품은 유기농 인증 또는 친환경 인증을 받은 제품입니다</strong>
                <p>성분, 브랜드 스토리, 최근 리필(소분) 일자와 같은 투명한 정보를 제공합니다</p>
              </div>
            </div>
          </div>
        )}

        {/* Scan Tab - 상세 제품 정보 */}
        {activeTab === 'scan' && (
          <div className="ia-section scan-section">
            {selectedProduct ? (
              <>
                <div className="product-detail-header">
                  <button className="back-btn" onClick={() => setActiveTab('browse')}>
                    ← 목록으로
                  </button>
                </div>

                <div className="ia-card product-detail">
                  <div className="product-detail-hero">
                    <div className="product-icon-large">
                      {selectedProduct.category === '욕실용품' ? '🧴' :
                       selectedProduct.category === '세탁용품' ? '🧺' : '🍽️'}
                    </div>
                    <div className="product-title-section">
                      <h3>{selectedProduct.name}</h3>
                      <p className="brand-name">{selectedProduct.brand}</p>
                      <div className="rating-large">
                        <span className="stars">{'★'.repeat(Math.floor(selectedProduct.rating))}</span>
                        <span className="rating-value">{selectedProduct.rating}</span>
                        <span className="review-count">({selectedProduct.reviewCount}개 리뷰)</span>
                      </div>
                    </div>
                  </div>

                  <div className="product-detail-section">
                    <h4>📝 제품 설명</h4>
                    <p>{selectedProduct.description}</p>
                  </div>

                  <div className="product-detail-section">
                    <h4>🧪 주요 성분</h4>
                    <div className="ingredients-list">
                      {selectedProduct.ingredients.split(', ').map((ingredient, idx) => (
                        <span key={idx} className="ingredient-tag">{ingredient}</span>
                      ))}
                    </div>
                  </div>

                  <div className="product-detail-section">
                    <h4>📅 리필 정보</h4>
                    <div className="refill-info-grid">
                      <div className="info-item">
                        <span className="info-label">최근 리필(소분) 일자</span>
                        <span className="info-value highlighted">{selectedProduct.lastRefillDate}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">가격</span>
                        <span className="info-value price-highlight">{selectedProduct.pricePerGram}원/g</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">유통기한</span>
                        <span className="info-value">{selectedProduct.expiryDays}일</span>
                      </div>
                    </div>
                  </div>

                  <div className="product-detail-section">
                    <h4>📖 사용 방법</h4>
                    <p className="usage-note">{selectedProduct.usageNote}</p>
                  </div>

                  <div className="product-detail-section trust-section">
                    <h4>✅ 신뢰 정보</h4>
                    <div className="trust-badges">
                      {selectedProduct.certifications.map((cert, idx) => (
                        <div key={idx} className="badge">
                          <span className="badge-icon">
                            {cert.includes('유기농') ? '🌿' :
                             cert.includes('비건') ? '🥬' :
                             cert.includes('친환경') ? '♻️' :
                             cert.includes('테스트') ? '🔬' : '📋'}
                          </span>
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="product-reviews">
                    <h4>💬 최근 리뷰</h4>
                    {reviews[selectedProduct.id]?.slice(0, 3).map((review, idx) => (
                      <div key={idx} className="review-item">
                        <div className="review-header">
                          <span className="reviewer">{review.author}</span>
                          <span className="review-rating">{'★'.repeat(review.rating)}</span>
                        </div>
                        <p className="review-text">{review.text}</p>
                        <span className="review-date">{review.date}</span>
                      </div>
                    ))}
                    {!reviews[selectedProduct.id] && (
                      <p className="no-reviews">아직 작성된 리뷰가 없습니다. 첫 번째 리뷰를 남겨주세요!</p>
                    )}
                  </div>
                </div>

                <button
                  className="ia-button-primary large"
                  onClick={() => {
                    setActiveTab('weigh');
                    setWeight(0);
                    setContainerWeight(0);
                    setCurrentStep('');
                    showToastMessage('무게 측정을 시작합니다');
                  }}
                >
                  이 제품 리필하기 →
                </button>
              </>
            ) : (
              <div className="no-product">
                <div className="ia-icon-large">📋</div>
                <h3>제품을 먼저 선택해주세요</h3>
                <p>디지털 카탈로그에서 원하는 제품을 선택하세요</p>
                <button className="ia-button-primary" onClick={() => setActiveTab('browse')}>
                  제품 탐색하기
                </button>
              </div>
            )}
          </div>
        )}

        {/* Weigh Tab - 저울 연동 실시간 측정 */}
        {activeTab === 'weigh' && (
          <div className="ia-section weigh-section">
            <div className="section-header">
              <div className="ia-icon-large">⚖️</div>
              <h2>저울 연동 무게 측정</h2>
              <p className="ia-description">
                블루투스 저울이 자동으로 무게를 측정합니다
              </p>
            </div>

            {selectedProduct ? (
              <div className="ia-card weighing-card">
                <div className="product-summary">
                  <div className="product-icon">
                    {selectedProduct.category === '욕실용품' ? '🧴' :
                     selectedProduct.category === '세탁용품' ? '🧺' : '🍽️'}
                  </div>
                  <div>
                    <h3>{selectedProduct.name}</h3>
                    <p className="product-brand">{selectedProduct.brand}</p>
                  </div>
                </div>

                <div className="weighing-process">
                  {currentStep && (
                    <div className={`step-indicator ${isWeighing ? 'active' : ''}`}>
                      <span className="step-icon">{isWeighing ? '⏳' : '✓'}</span>
                      <span className="step-text">{currentStep}</span>
                    </div>
                  )}

                  <div className={`weight-display-large ${isWeighing ? 'weighing' : ''}`}>
                    <div className="weight-circle">
                      <span className="weight-label">측정 무게</span>
                      <div className="weight-main">
                        <span className="weight-value">{weight}</span>
                        <span className="weight-unit">g</span>
                      </div>
                      {containerWeight > 0 && (
                        <span className="container-note">용기 {containerWeight}g 제외</span>
                      )}
                    </div>
                  </div>

                  <div className="price-preview-large">
                    <div className="price-row">
                      <span>단가</span>
                      <span>{selectedProduct.pricePerGram}원/g</span>
                    </div>
                    <div className="price-row">
                      <span>내용물 무게</span>
                      <span>{weight}g</span>
                    </div>
                    <div className="divider"></div>
                    <div className="price-row total">
                      <span>결제 금액</span>
                      <span className="total-price">
                        {(selectedProduct.pricePerGram * weight).toLocaleString()}원
                      </span>
                    </div>
                    <div className="eco-impact-preview">
                      <span className="eco-icon">♻️</span>
                      <span>플라스틱 {Math.floor(weight * 0.3)}g 절감 예상</span>
                    </div>
                  </div>
                </div>

                <div className="weighing-controls">
                  {!containerWeight ? (
                    <button
                      className="ia-button-primary large pulse"
                      onClick={handleStartWeighing}
                    >
                      <span className="btn-icon">⚖️</span>
                      무게 측정 시작하기
                    </button>
                  ) : isWeighing ? (
                    <button
                      className="ia-button-secondary large"
                      onClick={handleStopWeighing}
                    >
                      <span className="btn-icon">✓</span>
                      리필 완료
                    </button>
                  ) : (
                    <div className="button-group">
                      <button
                        className="ia-button-secondary"
                        onClick={() => {
                          setIsWeighing(true);
                          setCurrentStep('리필 중...');
                          showToastMessage('리필을 계속합니다');
                        }}
                      >
                        더 담기
                      </button>
                      <button
                        className="ia-button-primary"
                        onClick={handleWeightConfirm}
                        disabled={weight === 0}
                      >
                        결제하기 →
                      </button>
                    </div>
                  )}
                </div>

                <div className="weighing-tips">
                  <h4>💡 리필 가이드</h4>
                  <ul>
                    <li><strong>1단계:</strong> 빈 용기를 저울에 올려 영점 조정을 합니다</li>
                    <li><strong>2단계:</strong> 제품을 필요한 만큼만 담아 낭비를 줄이세요</li>
                    <li><strong>3단계:</strong> 무게가 실시간으로 표시되어 정확한 양을 확인할 수 있습니다</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="no-product">
                <div className="ia-icon-large">📋</div>
                <h3>제품을 먼저 선택해주세요</h3>
                <p>디지털 카탈로그에서 리필할 제품을 선택하세요</p>
                <button className="ia-button-primary" onClick={() => setActiveTab('browse')}>
                  제품 탐색하기
                </button>
              </div>
            )}
          </div>
        )}

        {/* Payment Tab - 간편 결제 */}
        {activeTab === 'payment' && (
          <div className="ia-section payment-section">
            <div className="section-header">
              <div className="ia-icon-large">💳</div>
              <h2>간편 결제</h2>
              <p className="ia-description">
                OKPOS 연동 또는 모바일 간편결제를 선택하세요
              </p>
            </div>

            {selectedProduct && weight > 0 && (
              <>
                <div className="ia-card order-summary-card">
                  <h3>주문 내역</h3>
                  <div className="order-detail-box">
                    <div className="order-product">
                      <div className="product-icon">
                        {selectedProduct.category === '욕실용품' ? '🧴' :
                         selectedProduct.category === '세탁용품' ? '🧺' : '🍽️'}
                      </div>
                      <div className="product-info">
                        <h4>{selectedProduct.name}</h4>
                        <p className="product-brand">{selectedProduct.brand}</p>
                      </div>
                    </div>

                    <div className="order-breakdown">
                      <div className="breakdown-row">
                        <span>무게</span>
                        <span>{weight}g</span>
                      </div>
                      <div className="breakdown-row">
                        <span>단가</span>
                        <span>{selectedProduct.pricePerGram}원/g</span>
                      </div>
                      <div className="breakdown-row">
                        <span>용기 무게 (차감)</span>
                        <span>-{containerWeight}g</span>
                      </div>
                      <div className="divider"></div>
                      <div className="breakdown-row total">
                        <span>결제 금액</span>
                        <span className="total-price">{calculateTotal().toLocaleString()}원</span>
                      </div>
                    </div>

                    <div className="eco-impact">
                      <div className="impact-item">
                        <span className="impact-icon">♻️</span>
                        <div className="impact-details">
                          <strong>플라스틱 {Math.floor(weight * 0.3)}g 절감</strong>
                          <p>페트병 약 {Math.floor(weight * 0.3 / 30)}개 분량</p>
                        </div>
                      </div>
                      <div className="impact-item">
                        <span className="impact-icon">🌱</span>
                        <div className="impact-details">
                          <strong>CO2 {(weight * 0.3 / 1000 * 6).toFixed(2)}kg 감축</strong>
                          <p>나무 {Math.floor(weight * 0.3 / 1000 * 6 / 6.6)}그루 심은 효과</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 적립 정보 입력 */}
                {!phoneNumber && !isProcessing && !showSuccess && (
                  <div className="ia-card loyalty-signup-card">
                    <h4>📱 휴대폰 번호로 적립하기</h4>
                    <p className="signup-desc">
                      번호를 입력하시면 포인트 적립과 환경 마일리지를 받을 수 있습니다
                    </p>
                    <input
                      type="tel"
                      className="phone-input"
                      placeholder="010-0000-0000"
                      maxLength={13}
                      onChange={(e) => {
                        let value = e.target.value.replace(/[^0-9]/g, '');
                        if (value.length > 3 && value.length <= 7) {
                          value = value.slice(0, 3) + '-' + value.slice(3);
                        } else if (value.length > 7) {
                          value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
                        }
                        setPhoneNumber(value);
                      }}
                      value={phoneNumber}
                    />
                    <div className="benefits-preview">
                      <div className="benefit">
                        <span className="benefit-icon">💰</span>
                        <span>구매 금액의 5% 포인트 적립</span>
                      </div>
                      <div className="benefit">
                        <span className="benefit-icon">🌍</span>
                        <span>환경 마일리지 자동 누적</span>
                      </div>
                      <div className="benefit">
                        <span className="benefit-icon">🔔</span>
                        <span>재구매 예측 알림</span>
                      </div>
                    </div>
                    <p className="privacy-notice">
                      * 입력하신 번호는 적립 목적으로만 사용되며, 마케팅 동의는 선택입니다
                    </p>
                  </div>
                )}

                {/* 결제 수단 선택 */}
                {!isProcessing && !showSuccess && (
                  <div className="ia-card payment-methods-card">
                    <h4>결제 수단 선택</h4>
                    <p className="payment-subtitle">편리한 간편 결제를 이용하세요</p>
                    <div className="payment-methods-grid">
                      <button
                        className="payment-method-btn kakao"
                        onClick={() => handlePayment('kakao')}
                      >
                        <div className="payment-icon">💬</div>
                        <span>카카오페이</span>
                      </button>
                      <button
                        className="payment-method-btn naver"
                        onClick={() => handlePayment('naver')}
                      >
                        <div className="payment-icon">N</div>
                        <span>네이버페이</span>
                      </button>
                      <button
                        className="payment-method-btn toss"
                        onClick={() => handlePayment('toss')}
                      >
                        <div className="payment-icon">💙</div>
                        <span>토스페이</span>
                      </button>
                      <button
                        className="payment-method-btn card"
                        onClick={() => handlePayment('card')}
                      >
                        <div className="payment-icon">💳</div>
                        <span>신용카드</span>
                      </button>
                    </div>
                    <div className="okpos-info">
                      <div className="info-icon">ℹ️</div>
                      <p>OKPOS 연동으로 매장 결제 시스템과 자동 연결됩니다</p>
                    </div>
                  </div>
                )}

                {/* 결제 처리 중 */}
                {isProcessing && (
                  <div className="ia-card processing-card">
                    <div className="loading-spinner"></div>
                    <h3>{currentStep}</h3>
                    <p>잠시만 기다려주세요...</p>
                  </div>
                )}

                {/* 결제 완료 */}
                {showSuccess && (
                  <div className="ia-card success-card">
                    <div className="success-icon">✓</div>
                    <h3>결제가 완료되었습니다!</h3>
                    <p>환경을 지키는 선택에 동참해주셔서 감사합니다</p>
                    <div className="success-details">
                      <div className="detail-row">
                        <span>적립 포인트</span>
                        <strong>+{Math.floor(calculateTotal() * 0.05)}P</strong>
                      </div>
                      <div className="detail-row">
                        <span>플라스틱 절감</span>
                        <strong>{Math.floor(weight * 0.3)}g</strong>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* Loyalty Tab - 환경 마일리지 */}
        {activeTab === 'loyalty' && (
          <div className="ia-section loyalty-section">
            <div className="section-header">
              <div className="ia-icon-large">🌱</div>
              <h2>환경 마일리지</h2>
              <p className="ia-description">
                당신의 작은 실천이 만드는 큰 변화를 확인하세요
              </p>
            </div>

            {/* 포인트 적립 */}
            <div className="ia-card points-card gradient-bg">
              <h3>💚 나의 포인트</h3>
              <div className="points-display-large">
                <div className="points-circle">
                  <span className="points-label">보유 포인트</span>
                  <div className="points-main">
                    <span className="points-value">1,250</span>
                    <span className="points-unit">P</span>
                  </div>
                </div>
              </div>
              {weight > 0 && selectedProduct && (
                <div className="points-earned-banner">
                  <span className="earned-icon">🎉</span>
                  <span className="earned-text">
                    이번 구매로 <strong>+{Math.floor(calculateTotal() * 0.05)}P</strong> 적립!
                  </span>
                </div>
              )}
              <div className="points-usage">
                <div className="usage-item">
                  <span className="usage-icon">💰</span>
                  <div>
                    <strong>1,000 포인트 = 1,000원</strong>
                    <p>다음 구매시 자동으로 적용됩니다</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 환경 기여도 */}
            <div className="ia-card eco-impact-card">
              <h3>🌍 나의 환경 기여도</h3>
              <p className="eco-subtitle">지금까지 이만큼 지구를 지켰어요!</p>
              <div className="eco-stats-grid">
                <div className="eco-stat-item large primary">
                  <div className="eco-icon">♻️</div>
                  <div className="eco-value">{(calculateTotalPlasticSaved() / 1000).toFixed(1)}kg</div>
                  <div className="eco-label">플라스틱 절감</div>
                  <div className="eco-comparison">
                    = 페트병 {Math.floor(calculateTotalPlasticSaved() / 30)}개 분량
                  </div>
                </div>
                <div className="eco-stat-item large secondary">
                  <div className="eco-icon">🌱</div>
                  <div className="eco-value">{calculateTotalCO2Saved()}kg</div>
                  <div className="eco-label">CO2 감축</div>
                  <div className="eco-comparison">
                    = 소나무 {Math.floor(Number(calculateTotalCO2Saved()) / 6.6)}그루 심은 효과
                  </div>
                </div>
                <div className="eco-stat-item">
                  <div className="eco-icon">🔄</div>
                  <div className="eco-value">{purchaseHistory.length + (weight > 0 ? 1 : 0)}</div>
                  <div className="eco-label">총 리필 횟수</div>
                </div>
                <div className="eco-stat-item">
                  <div className="eco-icon">💧</div>
                  <div className="eco-value">
                    {Math.floor(calculateTotalPlasticSaved() * 2.5 / 1000)}L
                  </div>
                  <div className="eco-label">물 절약</div>
                </div>
              </div>
              <div className="eco-formula">
                <h5>📐 환경 영향 계산 공식</h5>
                <div className="formula-item">
                  <strong>플라스틱 절감량 =</strong> 제품 무게 × 0.3 (일반 용기 대비)
                </div>
                <div className="formula-item">
                  <strong>CO2 감축량 =</strong> 플라스틱 절감량 × 6 (플라스틱 1kg당 CO2 6kg 발생)
                </div>
                <div className="formula-item">
                  <strong>물 절약량 =</strong> 플라스틱 절감량 × 2.5 (플라스틱 1kg당 물 2.5L 소비)
                </div>
              </div>
            </div>

            {/* 환경 마일리지 레벨 */}
            <div className="ia-card level-card">
              <h3>🏆 환경지킴이 레벨</h3>
              <div className="level-system">
                <div className="current-level">
                  <div className="level-badge">
                    <div className="badge-icon">🌿</div>
                    <div className="badge-info">
                      <h4>그린 스타터</h4>
                      <p>Level 2</p>
                    </div>
                  </div>
                  <div className="level-benefits">
                    <h5>현재 혜택</h5>
                    <ul>
                      <li>포인트 적립률 5%</li>
                      <li>환경 마일리지 1.2배 적용</li>
                      <li>생일 축하 쿠폰</li>
                    </ul>
                  </div>
                </div>
                <div className="level-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '40%' }}></div>
                  </div>
                  <p className="progress-text">다음 레벨까지 리필 6회 남음 (40%)</p>
                </div>
                <div className="next-level">
                  <h5>🎯 다음 레벨 (그린 챌린저)</h5>
                  <div className="next-rewards">
                    <div className="reward-item">
                      <span className="reward-icon">📈</span>
                      <span>포인트 적립률 5% → 7%</span>
                    </div>
                    <div className="reward-item">
                      <span className="reward-icon">🎁</span>
                      <span>매월 무료 리필 쿠폰 1장</span>
                    </div>
                    <div className="reward-item">
                      <span className="reward-icon">👥</span>
                      <span>친구 초대 보너스 포인트</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 카카오톡 알림 연동 */}
            <div className="ia-card kakao-card">
              <h3>💬 카카오톡 알림 서비스</h3>
              <p className="kakao-desc">
                리필 주기 알림, 신상품 소식, 할인 정보를 받아보세요
              </p>
              <button className="kakao-connect-btn">
                <span className="kakao-icon">💬</span>
                <span>카카오톡 채널 추가하기</span>
              </button>
              <div className="kakao-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">🔔</span>
                  <div>
                    <strong>재구매 예측 알림</strong>
                    <p>구매 주기를 분석하여 리필 시기를 알려드려요</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">📦</span>
                  <div>
                    <strong>신제품 입고 안내</strong>
                    <p>새로운 친환경 제품이 입고되면 바로 알려드려요</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🎁</span>
                  <div>
                    <strong>특별 할인 혜택</strong>
                    <p>채널 친구만을 위한 독점 할인과 이벤트</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* History Tab - 구매 내역 */}
        {activeTab === 'history' && (
          <div className="ia-section history-section">
            <div className="section-header">
              <div className="ia-icon-large">📜</div>
              <h2>구매 내역</h2>
              <p className="ia-description">
                내가 구매한 제품의 상세 정보와 환경 기여도를 확인하세요
              </p>
            </div>

            <div className="history-summary">
              <div className="summary-stat">
                <div className="stat-icon">🛒</div>
                <div>
                  <span className="stat-value">{purchaseHistory.length + (weight > 0 ? 1 : 0)}</span>
                  <span className="stat-label">총 구매 횟수</span>
                </div>
              </div>
              <div className="summary-stat">
                <div className="stat-icon">♻️</div>
                <div>
                  <span className="stat-value">
                    {(calculateTotalPlasticSaved() / 1000).toFixed(1)}kg
                  </span>
                  <span className="stat-label">플라스틱 절감</span>
                </div>
              </div>
              <div className="summary-stat">
                <div className="stat-icon">💰</div>
                <div>
                  <span className="stat-value">
                    {(purchaseHistory.reduce((sum, item) => sum + item.price, 0) + calculateTotal()).toLocaleString()}원
                  </span>
                  <span className="stat-label">총 구매 금액</span>
                </div>
              </div>
            </div>

            <div className="history-list">
              {/* 현재 구매 (시뮬레이션) */}
              {selectedProduct && weight > 0 && (
                <div className="history-item current">
                  <div className="history-header">
                    <div className="history-date">
                      <span className="date-badge new">방금 전</span>
                      <span className="date-text">2025-10-22</span>
                    </div>
                    <div className="history-status completed">결제완료</div>
                  </div>
                  <div className="history-body">
                    <div className="history-product">
                      <div className="product-icon">
                        {selectedProduct.category === '욕실용품' ? '🧴' :
                         selectedProduct.category === '세탁용품' ? '🧺' : '🍽️'}
                      </div>
                      <div className="product-details">
                        <h4>{selectedProduct.name}</h4>
                        <p className="product-meta">
                          {weight}g × {selectedProduct.pricePerGram}원
                        </p>
                        <p className="product-brand">{selectedProduct.brand}</p>
                      </div>
                    </div>
                    <div className="history-price">
                      {calculateTotal().toLocaleString()}원
                    </div>
                  </div>
                  <div className="history-footer">
                    <div className="eco-badges">
                      <div className="eco-badge">
                        ♻️ 플라스틱 {Math.floor(weight * 0.3)}g 절감
                      </div>
                      <div className="eco-badge">
                        🌱 CO2 {(weight * 0.3 / 1000 * 6).toFixed(2)}kg 감축
                      </div>
                    </div>
                    <button className="review-btn primary">리뷰 작성</button>
                  </div>
                </div>
              )}

              {/* 과거 구매 내역 */}
              {purchaseHistory.map((item, index) => (
                <div key={index} className="history-item">
                  <div className="history-header">
                    <div className="history-date">
                      <span className="date-text">{item.date}</span>
                    </div>
                    <div className="history-status completed">구매완료</div>
                  </div>
                  <div className="history-body">
                    <div className="history-product">
                      <div className="product-icon">🧴</div>
                      <div className="product-details">
                        <h4>{item.productName}</h4>
                        <p className="product-meta">{item.weight}g</p>
                      </div>
                    </div>
                    <div className="history-price">
                      {item.price.toLocaleString()}원
                    </div>
                  </div>
                  <div className="history-footer">
                    <div className="eco-badges">
                      <div className="eco-badge">
                        ♻️ 플라스틱 {item.plasticSaved}g 절감
                      </div>
                      <div className="eco-badge">
                        🌱 CO2 {item.co2Saved}kg 감축
                      </div>
                    </div>
                    <button className="review-btn">리뷰 작성</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="info-banner">
              <div className="banner-icon">📱</div>
              <div className="banner-content">
                <strong>카카오톡 채널에서 더 자세한 정보를 확인하세요</strong>
                <p>상세 구매 내역, 제품 정보, 유통기한 안내를 받아볼 수 있습니다</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="ia-footer">
        <div className="footer-content">
          <div className="footer-main">
            <h3>인피니티알맹</h3>
            <p className="footer-tagline">
              매장 입장부터 결제, 재방문까지<br />
              리필 여정 전체를 개인 스마트폰 하나로 완결하는 ALL-IN-ONE 솔루션
            </p>
          </div>

          <div className="footer-features">
            <div className="footer-feature">
              <span className="feature-icon">📱</span>
              <div>
                <strong>NFC 태그 자동 입장</strong>
                <p>앱 설치 없이 웹으로 바로 연결</p>
              </div>
            </div>
            <div className="footer-feature">
              <span className="feature-icon">⚖️</span>
              <div>
                <strong>블루투스 저울 연동</strong>
                <p>실시간 무게 측정 및 가격 계산</p>
              </div>
            </div>
            <div className="footer-feature">
              <span className="feature-icon">💳</span>
              <div>
                <strong>OKPOS 간편 결제</strong>
                <p>카카오페이/네이버페이 지원</p>
              </div>
            </div>
            <div className="footer-feature">
              <span className="feature-icon">💬</span>
              <div>
                <strong>카카오톡 알림톡</strong>
                <p>재구매 예측 알림 및 신상품 안내</p>
              </div>
            </div>
          </div>

          <div className="footer-project-info">
            <p className="project-label">서울대학교 창의연구실습 프로젝트</p>
            <p className="project-goal">
              <strong>목표:</strong> 리필스테이션 이용 과정을 간소화하여<br />
              초기 사용자의 진입 장벽을 낮추고 리필 문화 확산
            </p>
          </div>

          <div className="footer-stats">
            <div className="stat">
              <span className="stat-icon">🌍</span>
              <span className="stat-text">전 세계 MSW 발생량: 21억톤 → 38억톤 (2050년 예측)</span>
            </div>
            <div className="stat">
              <span className="stat-icon">♻️</span>
              <span className="stat-text">국내 리필 매장: 26곳 (2024년 기준)</span>
            </div>
            <div className="stat">
              <span className="stat-icon">📊</span>
              <span className="stat-text">리필스테이션 인지자 중 실제 이용: 33.7%</span>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 인피니티알맹 - 알맹상점 2조</p>
            <p className="footer-note">제로웨이스트 실천으로 지속 가능한 미래를 만듭니다</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default InfinityAlmeng;
