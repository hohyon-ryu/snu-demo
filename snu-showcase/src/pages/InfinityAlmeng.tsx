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
}

interface PurchaseHistory {
  productName: string;
  weight: number;
  price: number;
  date: string;
  plasticSaved: number;
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

  // 알맹상점 실제 제품 데이터 (PDF 기반)
  const products: Product[] = [
    {
      id: '1',
      name: '라보H 핸드워시',
      brand: 'LABO-H',
      category: '욕실용품',
      pricePerGram: 32,
      ingredients: '식물성 계면활성제, 천연 에센셜 오일, 글리세린',
      lastRefillDate: '2025-10-20',
      description: '프랑스 유기농 인증 핸드워시. 시트러스 향으로 상쾌한 세정력',
      rating: 4.8,
      reviewCount: 127
    },
    {
      id: '2',
      name: '모미래 샴푸',
      brand: 'MOMIRAE',
      category: '욕실용품',
      pricePerGram: 32,
      ingredients: '코코넛 오일, 아르간 오일, 천연 단백질',
      lastRefillDate: '2025-10-19',
      description: '저자극 천연 샴푸. 민감성 두피에도 안심하고 사용',
      rating: 4.9,
      reviewCount: 203
    },
    {
      id: '3',
      name: '닥터포헤어 샴푸',
      brand: 'Dr.FORHAIR',
      category: '욕실용품',
      pricePerGram: 30,
      ingredients: '비오틴, 판테놀, 맥주효모 추출물',
      lastRefillDate: '2025-10-21',
      description: '탈모 케어 전문 샴푸. 두피 건강과 모발 강화',
      rating: 4.7,
      reviewCount: 156
    },
    {
      id: '4',
      name: '스냅 세제',
      brand: 'SNAP',
      category: '세탁용품',
      pricePerGram: 20,
      ingredients: '식물성 계면활성제, 효소, 천연 향료',
      lastRefillDate: '2025-10-18',
      description: '고농축 천연 세탁세제. 소량으로도 강력한 세정력',
      rating: 4.6,
      reviewCount: 89
    },
    {
      id: '5',
      name: '모미래 바디워시',
      brand: 'MOMIRAE',
      category: '욕실용품',
      pricePerGram: 28,
      ingredients: '올리브 오일, 시어버터, 녹차 추출물',
      lastRefillDate: '2025-10-20',
      description: '보습력이 뛰어난 천연 바디워시. 건조한 피부에 적합',
      rating: 4.8,
      reviewCount: 142
    },
    {
      id: '6',
      name: '피톤치드 주방세제',
      brand: 'NATURAL CLEAN',
      category: '주방용품',
      pricePerGram: 18,
      ingredients: '피톤치드, 베이킹소다, 구연산',
      lastRefillDate: '2025-10-19',
      description: '식물성 주방세제. 기름때 제거와 살균 효과',
      rating: 4.5,
      reviewCount: 94
    },
  ];

  // 구매 이력 데이터
  const purchaseHistory: PurchaseHistory[] = [
    { productName: '모미래 샴푸', weight: 280, price: 8960, date: '2025-10-15', plasticSaved: 85 },
    { productName: '라보H 핸드워시', weight: 250, price: 8000, date: '2025-10-08', plasticSaved: 76 },
    { productName: '스냅 세제', weight: 500, price: 10000, date: '2025-09-28', plasticSaved: 152 },
  ];

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
  };

  const handleStartWeighing = () => {
    if (!containerWeight) {
      setCurrentStep('빈 용기를 저울에 올려주세요');
      setContainerWeight(120); // 시뮬레이션
      setTimeout(() => {
        setCurrentStep(`용기 무게: ${120}g - 영점 조정 완료!`);
      }, 1000);
      setTimeout(() => {
        setCurrentStep('이제 제품을 담아주세요');
        setIsWeighing(true);
      }, 2500);
    }
  };

  const handleStopWeighing = () => {
    setIsWeighing(false);
    setCurrentStep(`측정 완료: ${weight}g`);
  };

  const handleWeightConfirm = () => {
    if (weight > 0) {
      setActiveTab('payment');
    }
  };

  const handlePayment = async (method: string) => {
    setIsProcessing(true);
    setCurrentStep('결제 처리 중...');

    // 결제 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setShowSuccess(true);
    setCurrentStep('결제 완료!');

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
    return purchaseHistory.reduce((sum, item) => sum + item.plasticSaved, 0);
  };

  const calculateTotalCO2Saved = () => {
    // 플라스틱 1kg당 약 6kg의 CO2 발생
    return (calculateTotalPlasticSaved() / 1000 * 6).toFixed(1);
  };

  return (
    <div className="infinity-almeng-container">
      {/* Header */}
      <header className="ia-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← 홈으로
        </button>
        <h1>인피니티알맹</h1>
        <p className="ia-subtitle">리필스테이션 올인원 솔루션</p>
      </header>

      {/* Navigation Tabs */}
      <div className="ia-tabs">
        <button
          className={`ia-tab ${activeTab === 'entrance' ? 'active' : ''}`}
          onClick={() => setActiveTab('entrance')}
        >
          NFC 입장
        </button>
        <button
          className={`ia-tab ${activeTab === 'browse' ? 'active' : ''}`}
          onClick={() => setActiveTab('browse')}
        >
          디지털 카탈로그
        </button>
        <button
          className={`ia-tab ${activeTab === 'scan' ? 'active' : ''}`}
          onClick={() => setActiveTab('scan')}
        >
          제품 정보
        </button>
        <button
          className={`ia-tab ${activeTab === 'weigh' ? 'active' : ''}`}
          onClick={() => setActiveTab('weigh')}
        >
          저울 연동
        </button>
        <button
          className={`ia-tab ${activeTab === 'payment' ? 'active' : ''}`}
          onClick={() => setActiveTab('payment')}
        >
          간편 결제
        </button>
        <button
          className={`ia-tab ${activeTab === 'loyalty' ? 'active' : ''}`}
          onClick={() => setActiveTab('loyalty')}
        >
          환경 마일리지
        </button>
        <button
          className={`ia-tab ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          구매 내역
        </button>
      </div>

      {/* Content Area */}
      <div className="ia-content">
        {/* Entrance Tab - NFC 태깅 */}
        {activeTab === 'entrance' && (
          <div className="ia-section">
            <div className="ia-icon-large">📱</div>
            <h2>알맹상점에 오신 것을 환영합니다</h2>
            <p className="ia-description">
              저울 옆 NFC 태그에 휴대폰을 갖다 대면<br />
              자동으로 리필 과정이 시작됩니다
            </p>

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
              <button className="ia-button-primary" onClick={() => setActiveTab('browse')}>
                태그 완료 (시뮬레이션)
              </button>
            </div>

            <div className="info-box">
              <h4>💡 처음 방문하시나요?</h4>
              <div className="feature-list">
                <div className="feature-item">
                  <span className="feature-icon">1</span>
                  <span><strong>NFC 태그</strong>로 자동 입장 - 앱 설치 불필요</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">2</span>
                  <span><strong>제품 정보</strong> 실시간 확인 - 성분, 리필일자, 후기</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">3</span>
                  <span><strong>무게 자동 측정</strong> - 저울 연동으로 가격 즉시 계산</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">4</span>
                  <span><strong>간편 결제</strong> - 카카오페이/네이버페이 지원</span>
                </div>
              </div>
            </div>

            <div className="store-info">
              <h4>🏪 알맹상점 망원점</h4>
              <p>서울시 마포구 포은로8길 21</p>
              <p>영업시간: 11:00 - 20:00 (월요일 휴무)</p>
            </div>
          </div>
        )}

        {/* Browse Tab - 디지털 카탈로그 */}
        {activeTab === 'browse' && (
          <div className="ia-section">
            <div className="ia-icon-large">📋</div>
            <h2>디지털 카탈로그</h2>
            <p className="ia-description">
              투명한 제품 정보로 신뢰할 수 있는 선택을 하세요
            </p>

            <div className="category-filters">
              <button className="filter-btn active">전체</button>
              <button className="filter-btn">욕실용품</button>
              <button className="filter-btn">세탁용품</button>
              <button className="filter-btn">주방용품</button>
            </div>

            <div className="products-grid">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="product-card enhanced"
                  onClick={() => handleProductSelect(product)}
                >
                  <div className="product-header">
                    <div className="product-icon">🧴</div>
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
                      <span className="date-label">최근 리필:</span>
                      <span className="date-value">{product.lastRefillDate}</span>
                    </div>
                  </div>

                  <div className="product-footer">
                    <div className="product-price">
                      <span className="price-value">{product.pricePerGram}원</span>
                      <span className="price-unit">/g</span>
                    </div>
                    <button className="product-select-btn">상세보기</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="info-banner">
              <p>💚 모든 제품은 유기농 인증 또는 친환경 인증을 받은 제품입니다</p>
            </div>
          </div>
        )}

        {/* Scan Tab - 상세 제품 정보 */}
        {activeTab === 'scan' && (
          <div className="ia-section">
            {selectedProduct ? (
              <>
                <div className="product-detail-header">
                  <button className="back-btn" onClick={() => setActiveTab('browse')}>
                    ← 목록으로
                  </button>
                  <h2>제품 상세 정보</h2>
                </div>

                <div className="ia-card product-detail">
                  <div className="product-detail-hero">
                    <div className="product-icon-large">🧴</div>
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
                    <p className="ingredients">{selectedProduct.ingredients}</p>
                  </div>

                  <div className="product-detail-section">
                    <h4>📅 리필 정보</h4>
                    <div className="refill-info-grid">
                      <div className="info-item">
                        <span className="info-label">최근 리필(소분) 일자</span>
                        <span className="info-value">{selectedProduct.lastRefillDate}</span>
                      </div>
                      <div className="info-item">
                        <span className="info-label">가격</span>
                        <span className="info-value price-highlight">{selectedProduct.pricePerGram}원/g</span>
                      </div>
                    </div>
                  </div>

                  <div className="product-detail-section trust-section">
                    <h4>✅ 신뢰 정보</h4>
                    <div className="trust-badges">
                      <div className="badge">🌿 유기농 인증</div>
                      <div className="badge">♻️ 친환경 포장</div>
                      <div className="badge">🔬 성분 공개</div>
                      <div className="badge">📋 투명한 이력</div>
                    </div>
                  </div>

                  <div className="product-reviews">
                    <h4>💬 최근 리뷰</h4>
                    <div className="review-item">
                      <div className="review-header">
                        <span className="reviewer">김**</span>
                        <span className="review-rating">★★★★★</span>
                      </div>
                      <p className="review-text">향도 좋고 세정력도 만족스러워요. 리필로 구매하니 가격도 저렴!</p>
                      <span className="review-date">2025-10-15</span>
                    </div>
                  </div>
                </div>

                <button
                  className="ia-button-primary large"
                  onClick={() => {
                    setActiveTab('weigh');
                    setWeight(0);
                    setContainerWeight(0);
                    setCurrentStep('');
                  }}
                >
                  이 제품 리필하기 →
                </button>
              </>
            ) : (
              <div className="no-product">
                <div className="ia-icon-large">📋</div>
                <h3>제품을 먼저 선택해주세요</h3>
                <button className="ia-button-primary" onClick={() => setActiveTab('browse')}>
                  제품 탐색하기
                </button>
              </div>
            )}
          </div>
        )}

        {/* Weigh Tab - 저울 연동 실시간 측정 */}
        {activeTab === 'weigh' && (
          <div className="ia-section">
            <div className="ia-icon-large">⚖️</div>
            <h2>저울 연동 무게 측정</h2>
            <p className="ia-description">
              블루투스 저울이 자동으로 무게를 측정합니다
            </p>

            {selectedProduct ? (
              <div className="ia-card weighing-card">
                <div className="product-summary">
                  <div className="product-icon">🧴</div>
                  <div>
                    <h3>{selectedProduct.name}</h3>
                    <p className="product-brand">{selectedProduct.brand}</p>
                  </div>
                </div>

                <div className="weighing-process">
                  {currentStep && (
                    <div className="step-indicator">
                      <span className="step-icon">{isWeighing ? '⏳' : '✓'}</span>
                      <span className="step-text">{currentStep}</span>
                    </div>
                  )}

                  <div className={`weight-display-large ${isWeighing ? 'weighing' : ''}`}>
                    <div className="weight-circle">
                      <span className="weight-value">{weight}</span>
                      <span className="weight-unit">g</span>
                    </div>
                  </div>

                  {containerWeight > 0 && (
                    <div className="container-info">
                      <span>용기 무게: {containerWeight}g (자동 차감)</span>
                    </div>
                  )}

                  <div className="price-preview-large">
                    <div className="price-row">
                      <span>단가</span>
                      <span>{selectedProduct.pricePerGram}원/g</span>
                    </div>
                    <div className="price-row">
                      <span>내용물</span>
                      <span>{weight}g</span>
                    </div>
                    <div className="price-row total">
                      <span>결제 금액</span>
                      <span className="total-price">
                        {(selectedProduct.pricePerGram * weight).toLocaleString()}원
                      </span>
                    </div>
                  </div>
                </div>

                <div className="weighing-controls">
                  {!containerWeight ? (
                    <button
                      className="ia-button-primary large"
                      onClick={handleStartWeighing}
                    >
                      무게 측정 시작하기
                    </button>
                  ) : isWeighing ? (
                    <button
                      className="ia-button-secondary large"
                      onClick={handleStopWeighing}
                    >
                      리필 완료
                    </button>
                  ) : (
                    <div className="button-group">
                      <button
                        className="ia-button-secondary"
                        onClick={() => {
                          setIsWeighing(true);
                          setCurrentStep('리필 중...');
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
                  <h4>💡 리필 팁</h4>
                  <ul>
                    <li>빈 용기를 먼저 저울에 올려 영점 조정을 합니다</li>
                    <li>필요한 만큼만 담아 낭비를 줄이세요</li>
                    <li>무게가 실시간으로 표시되어 정확한 양을 확인할 수 있습니다</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="no-product">
                <div className="ia-icon-large">📋</div>
                <h3>제품을 먼저 선택해주세요</h3>
                <button className="ia-button-primary" onClick={() => setActiveTab('browse')}>
                  제품 탐색하기
                </button>
              </div>
            )}
          </div>
        )}

        {/* Payment Tab - 간편 결제 */}
        {activeTab === 'payment' && (
          <div className="ia-section">
            <div className="ia-icon-large">💳</div>
            <h2>간편 결제</h2>
            <p className="ia-description">
              OKPOS 연동 또는 모바일 간편결제를 선택하세요
            </p>

            {selectedProduct && weight > 0 && (
              <>
                <div className="ia-card order-summary-card">
                  <h3>주문 내역</h3>
                  <div className="order-detail-box">
                    <div className="order-product">
                      <div className="product-icon">🧴</div>
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
                      <div className="breakdown-row total">
                        <span>결제 금액</span>
                        <span className="total-price">{calculateTotal().toLocaleString()}원</span>
                      </div>
                    </div>

                    <div className="eco-impact">
                      <div className="impact-item">
                        <span className="impact-icon">♻️</span>
                        <span className="impact-text">
                          플라스틱 {Math.floor(weight * 0.3)}g 절감 예정
                        </span>
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
                    <p className="privacy-notice">
                      * 입력하신 번호는 적립 목적으로만 사용되며, 마케팅 동의는 선택입니다
                    </p>
                  </div>
                )}

                {/* 결제 수단 선택 */}
                {!isProcessing && !showSuccess && (
                  <div className="ia-card payment-methods-card">
                    <h4>결제 수단 선택</h4>
                    <div className="payment-methods-grid">
                      <button
                        className="payment-method-btn"
                        onClick={() => handlePayment('kakao')}
                      >
                        <div className="payment-icon">💬</div>
                        <span>카카오페이</span>
                      </button>
                      <button
                        className="payment-method-btn"
                        onClick={() => handlePayment('naver')}
                      >
                        <div className="payment-icon">N</div>
                        <span>네이버페이</span>
                      </button>
                      <button
                        className="payment-method-btn"
                        onClick={() => handlePayment('toss')}
                      >
                        <div className="payment-icon">💙</div>
                        <span>토스페이</span>
                      </button>
                      <button
                        className="payment-method-btn"
                        onClick={() => handlePayment('card')}
                      >
                        <div className="payment-icon">💳</div>
                        <span>신용카드</span>
                      </button>
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
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* Loyalty Tab - 환경 마일리지 */}
        {activeTab === 'loyalty' && (
          <div className="ia-section">
            <div className="ia-icon-large">🌱</div>
            <h2>환경 마일리지</h2>
            <p className="ia-description">
              당신의 작은 실천이 만드는 큰 변화를 확인하세요
            </p>

            {/* 포인트 적립 */}
            <div className="ia-card points-card">
              <h3>💚 나의 포인트</h3>
              <div className="points-display-large">
                <div className="points-circle">
                  <span className="points-value">1,250</span>
                  <span className="points-label">P</span>
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
                <p>1,000 포인트당 1,000원으로 사용 가능</p>
                <p>다음 구매시 자동으로 적용됩니다</p>
              </div>
            </div>

            {/* 환경 기여도 */}
            <div className="ia-card eco-impact-card">
              <h3>🌍 나의 환경 기여도</h3>
              <div className="eco-stats-grid">
                <div className="eco-stat-item large">
                  <div className="eco-icon">♻️</div>
                  <div className="eco-value">{(calculateTotalPlasticSaved() / 1000).toFixed(1)}kg</div>
                  <div className="eco-label">플라스틱 절감</div>
                  <div className="eco-comparison">
                    = 페트병 {Math.floor(calculateTotalPlasticSaved() / 30)}개 분량
                  </div>
                </div>
                <div className="eco-stat-item large">
                  <div className="eco-icon">🌱</div>
                  <div className="eco-value">{calculateTotalCO2Saved()}kg</div>
                  <div className="eco-label">CO2 감축</div>
                  <div className="eco-comparison">
                    = 소나무 {Math.floor(Number(calculateTotalCO2Saved()) / 6.6)}그루 심은 효과
                  </div>
                </div>
                <div className="eco-stat-item">
                  <div className="eco-icon">🔄</div>
                  <div className="eco-value">{purchaseHistory.length + 1}</div>
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
            </div>

            {/* 환경 마일리지 레벨 */}
            <div className="ia-card level-card">
              <h3>🏆 환경지킴이 레벨</h3>
              <div className="level-badge">
                <div className="badge-icon">🌿</div>
                <div className="badge-info">
                  <h4>그린 스타터</h4>
                  <p>Level 2</p>
                </div>
              </div>
              <div className="level-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '40%' }}></div>
                </div>
                <p>다음 레벨까지 리필 6회 남음</p>
              </div>
              <div className="next-rewards">
                <h5>다음 레벨 혜택</h5>
                <ul>
                  <li>포인트 적립률 5% → 7%</li>
                  <li>매월 무료 리필 쿠폰 1장</li>
                  <li>친구 초대 보너스 포인트</li>
                </ul>
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
                  <span>재구매 예측 알림</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">📦</span>
                  <span>신제품 입고 안내</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🎁</span>
                  <span>특별 할인 혜택</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* History Tab - 구매 내역 */}
        {activeTab === 'history' && (
          <div className="ia-section">
            <div className="ia-icon-large">📜</div>
            <h2>구매 내역</h2>
            <p className="ia-description">
              내가 구매한 제품의 상세 정보와 환경 기여도를 확인하세요
            </p>

            <div className="history-summary">
              <div className="summary-stat">
                <span className="stat-value">{purchaseHistory.length + 1}</span>
                <span className="stat-label">총 구매 횟수</span>
              </div>
              <div className="summary-stat">
                <span className="stat-value">
                  {(calculateTotalPlasticSaved() / 1000).toFixed(1)}kg
                </span>
                <span className="stat-label">플라스틱 절감</span>
              </div>
            </div>

            <div className="history-list">
              {/* 현재 구매 (시뮬레이션) */}
              {selectedProduct && weight > 0 && (
                <div className="history-item current">
                  <div className="history-header">
                    <div className="history-date">
                      <span className="date-badge">방금 전</span>
                      <span className="date-text">2025-10-22</span>
                    </div>
                    <div className="history-status completed">결제완료</div>
                  </div>
                  <div className="history-body">
                    <div className="history-product">
                      <div className="product-icon">🧴</div>
                      <div className="product-details">
                        <h4>{selectedProduct.name}</h4>
                        <p className="product-meta">
                          {weight}g × {selectedProduct.pricePerGram}원
                        </p>
                      </div>
                    </div>
                    <div className="history-price">
                      {calculateTotal().toLocaleString()}원
                    </div>
                  </div>
                  <div className="history-footer">
                    <div className="eco-badge">
                      ♻️ 플라스틱 {Math.floor(weight * 0.3)}g 절감
                    </div>
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
                    <div className="eco-badge">
                      ♻️ 플라스틱 {item.plasticSaved}g 절감
                    </div>
                    <button className="review-btn">리뷰 작성</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="info-banner">
              <p>📱 카카오톡 채널에서 상세 구매 내역과 제품 정보를 확인할 수 있습니다</p>
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
              <span>NFC 태그 자동 입장</span>
            </div>
            <div className="footer-feature">
              <span className="feature-icon">⚖️</span>
              <span>블루투스 저울 연동</span>
            </div>
            <div className="footer-feature">
              <span className="feature-icon">💳</span>
              <span>OKPOS 간편 결제</span>
            </div>
            <div className="footer-feature">
              <span className="feature-icon">💬</span>
              <span>카카오톡 알림톡</span>
            </div>
          </div>

          <div className="footer-project-info">
            <p className="project-label">서울대학교 창의연구실습 프로젝트</p>
            <p className="project-goal">
              목표: 리필스테이션 이용 과정을 간소화하여<br />
              초기 사용자의 진입 장벽을 낮추고 리필 문화 확산
            </p>
          </div>

          <div className="footer-stats">
            <div className="stat">
              <span className="stat-icon">🌍</span>
              <span className="stat-text">전 세계 MSW 발생량: 21억톤 → 38억톤 (2050년)</span>
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
