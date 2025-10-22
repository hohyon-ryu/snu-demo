import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InfinityAlmeng.css';

interface Product {
  id: string;
  name: string;
  category: string;
  pricePerGram: number;
}

function InfinityAlmeng() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'entrance' | 'browse' | 'scan' | 'weigh' | 'payment' | 'loyalty'>('entrance');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [weight, setWeight] = useState<number>(0);

  const products: Product[] = [
    { id: '1', name: '유기농 세탁세제', category: '세탁용품', pricePerGram: 15 },
    { id: '2', name: '친환경 샴푸', category: '욕실용품', pricePerGram: 20 },
    { id: '3', name: '주방세제', category: '주방용품', pricePerGram: 12 },
    { id: '4', name: '바디워시', category: '욕실용품', pricePerGram: 18 },
    { id: '5', name: '섬유유연제', category: '세탁용품', pricePerGram: 16 },
    { id: '6', name: '핸드워시', category: '욕실용품', pricePerGram: 14 },
  ];

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setActiveTab('scan');
  };

  const handleWeightInput = (value: number) => {
    setWeight(value);
    setActiveTab('payment');
  };

  const calculateTotal = () => {
    if (!selectedProduct || !weight) return 0;
    return selectedProduct.pricePerGram * weight;
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
          매장 입장
        </button>
        <button
          className={`ia-tab ${activeTab === 'browse' ? 'active' : ''}`}
          onClick={() => setActiveTab('browse')}
        >
          제품 탐색
        </button>
        <button
          className={`ia-tab ${activeTab === 'scan' ? 'active' : ''}`}
          onClick={() => setActiveTab('scan')}
        >
          바코드 스캔
        </button>
        <button
          className={`ia-tab ${activeTab === 'weigh' ? 'active' : ''}`}
          onClick={() => setActiveTab('weigh')}
        >
          무게 측정
        </button>
        <button
          className={`ia-tab ${activeTab === 'payment' ? 'active' : ''}`}
          onClick={() => setActiveTab('payment')}
        >
          결제
        </button>
        <button
          className={`ia-tab ${activeTab === 'loyalty' ? 'active' : ''}`}
          onClick={() => setActiveTab('loyalty')}
        >
          적립 혜택
        </button>
      </div>

      {/* Content Area */}
      <div className="ia-content">
        {/* Entrance Tab */}
        {activeTab === 'entrance' && (
          <div className="ia-section">
            <div className="ia-icon-large">🏪</div>
            <h2>리필스테이션 방문을 환영합니다</h2>
            <p className="ia-description">
              인피니티알맹 앱으로 간편하게 매장에 입장하고,
              제로웨이스트를 실천하세요.
            </p>
            <div className="ia-card">
              <h3>QR 코드로 입장하기</h3>
              <div className="qr-mockup">
                <div className="qr-pattern"></div>
              </div>
              <button className="ia-button-primary" onClick={() => setActiveTab('browse')}>
                입장 완료
              </button>
            </div>
            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>빠른 매장 체크인</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>자동 방문 기록</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>멤버십 자동 적용</span>
              </div>
            </div>
          </div>
        )}

        {/* Browse Tab */}
        {activeTab === 'browse' && (
          <div className="ia-section">
            <div className="ia-icon-large">🔍</div>
            <h2>제품 탐색하기</h2>
            <p className="ia-description">
              다양한 친환경 리필 제품을 둘러보고 선택하세요.
            </p>
            <div className="products-grid">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="product-card"
                  onClick={() => handleProductSelect(product)}
                >
                  <div className="product-icon">🧴</div>
                  <h3>{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <p className="product-price">{product.pricePerGram}원/g</p>
                  <button className="product-select-btn">선택하기</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scan Tab */}
        {activeTab === 'scan' && (
          <div className="ia-section">
            <div className="ia-icon-large">📱</div>
            <h2>바코드 스캔</h2>
            <p className="ia-description">
              제품 바코드를 스캔하여 자동으로 제품 정보를 불러옵니다.
            </p>
            {selectedProduct && (
              <div className="ia-card">
                <h3>선택된 제품</h3>
                <div className="selected-product-info">
                  <div className="product-icon-large">🧴</div>
                  <h4>{selectedProduct.name}</h4>
                  <p>{selectedProduct.category}</p>
                  <p className="price-info">{selectedProduct.pricePerGram}원/g</p>
                </div>
              </div>
            )}
            <div className="barcode-scanner-mockup">
              <div className="scanner-frame">
                <div className="scanner-line"></div>
              </div>
              <p>제품에 부착된 바코드를 스캔하세요</p>
            </div>
            <button className="ia-button-primary" onClick={() => setActiveTab('weigh')}>
              스캔 완료
            </button>
          </div>
        )}

        {/* Weigh Tab */}
        {activeTab === 'weigh' && (
          <div className="ia-section">
            <div className="ia-icon-large">⚖️</div>
            <h2>무게 측정</h2>
            <p className="ia-description">
              원하는 양만큼 담아서 무게를 측정하세요.
            </p>
            {selectedProduct && (
              <div className="ia-card">
                <h3>{selectedProduct.name}</h3>
                <div className="weight-input-area">
                  <div className="weight-display">
                    <span className="weight-value">{weight}</span>
                    <span className="weight-unit">g</span>
                  </div>
                  <div className="weight-buttons">
                    <button className="weight-btn" onClick={() => handleWeightInput(100)}>
                      100g
                    </button>
                    <button className="weight-btn" onClick={() => handleWeightInput(250)}>
                      250g
                    </button>
                    <button className="weight-btn" onClick={() => handleWeightInput(500)}>
                      500g
                    </button>
                    <button className="weight-btn" onClick={() => handleWeightInput(1000)}>
                      1kg
                    </button>
                  </div>
                  <div className="price-preview">
                    <span>예상 금액:</span>
                    <span className="price-amount">
                      {weight > 0 ? `${(selectedProduct.pricePerGram * weight).toLocaleString()}원` : '0원'}
                    </span>
                  </div>
                </div>
                <button
                  className="ia-button-primary"
                  onClick={() => weight > 0 && setActiveTab('payment')}
                  disabled={weight === 0}
                >
                  결제하기
                </button>
              </div>
            )}
          </div>
        )}

        {/* Payment Tab */}
        {activeTab === 'payment' && (
          <div className="ia-section">
            <div className="ia-icon-large">💳</div>
            <h2>결제</h2>
            <p className="ia-description">
              간편하고 안전한 결제 시스템
            </p>
            {selectedProduct && weight > 0 && (
              <div className="ia-card">
                <h3>주문 내역</h3>
                <div className="order-summary">
                  <div className="order-item">
                    <span className="item-name">{selectedProduct.name}</span>
                    <span className="item-weight">{weight}g</span>
                  </div>
                  <div className="order-detail">
                    <span>단가:</span>
                    <span>{selectedProduct.pricePerGram}원/g</span>
                  </div>
                  <div className="order-total">
                    <span>총 결제 금액:</span>
                    <span className="total-amount">{calculateTotal().toLocaleString()}원</span>
                  </div>
                </div>
                <div className="payment-methods">
                  <button className="payment-method-btn">신용카드</button>
                  <button className="payment-method-btn">카카오페이</button>
                  <button className="payment-method-btn">네이버페이</button>
                  <button className="payment-method-btn">토스</button>
                </div>
                <button
                  className="ia-button-primary"
                  onClick={() => setActiveTab('loyalty')}
                >
                  결제 완료
                </button>
              </div>
            )}
          </div>
        )}

        {/* Loyalty Tab */}
        {activeTab === 'loyalty' && (
          <div className="ia-section">
            <div className="ia-icon-large">🎁</div>
            <h2>적립 혜택</h2>
            <p className="ia-description">
              제로웨이스트 실천으로 다양한 혜택을 받으세요.
            </p>
            <div className="ia-card">
              <h3>나의 포인트</h3>
              <div className="points-display">
                <span className="points-value">1,250</span>
                <span className="points-label">포인트</span>
              </div>
              <div className="points-earned">
                <span>이번 구매로</span>
                <span className="earned-amount">+{Math.floor(calculateTotal() * 0.05)}P</span>
              </div>
            </div>
            <div className="ia-card">
              <h3>환경 기여도</h3>
              <div className="eco-stats">
                <div className="eco-stat-item">
                  <div className="eco-icon">🌍</div>
                  <div className="eco-value">12회</div>
                  <div className="eco-label">리필 횟수</div>
                </div>
                <div className="eco-stat-item">
                  <div className="eco-icon">♻️</div>
                  <div className="eco-value">3.2kg</div>
                  <div className="eco-label">플라스틱 절감</div>
                </div>
                <div className="eco-stat-item">
                  <div className="eco-icon">🌱</div>
                  <div className="eco-value">15.8kg</div>
                  <div className="eco-label">CO2 감축</div>
                </div>
              </div>
            </div>
            <div className="benefits-list">
              <h3>멤버십 혜택</h3>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>구매 금액의 5% 포인트 적립</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>생일 월 10% 추가 할인</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>월 1회 무료 배송 쿠폰</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>신제품 사전 체험 기회</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="ia-footer">
        <p>인피니티알맹 - 지속 가능한 소비를 위한 올인원 솔루션</p>
        <p className="footer-note">서울대학교 정보문화학 프로젝트</p>
      </footer>
    </div>
  );
}

export default InfinityAlmeng;
