import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Mangles.css';

interface PurchaseItem {
  id: string;
  name: string;
  category: string;
  weight: number;
  price: number;
  co2Saved: number;
  plasticSaved: number;
  origin: string;
}

interface Receipt {
  id: string;
  date: string;
  storeName: string;
  items: PurchaseItem[];
  totalPrice: number;
  totalCO2Saved: number;
  totalPlasticSaved: number;
}

function Mangles() {
  const navigate = useNavigate();
  const [selectedReceipt, setSelectedReceipt] = useState<Receipt | null>(null);

  // Mock data
  const mockReceipts: Receipt[] = [
    {
      id: 'RCP-2024-001',
      date: '2024-10-22',
      storeName: '알맹상점 홍대점',
      items: [
        {
          id: '1',
          name: '주방세제',
          category: '세제',
          weight: 500,
          price: 3500,
          co2Saved: 45,
          plasticSaved: 12,
          origin: '국내생산 (충북 청주)'
        },
        {
          id: '2',
          name: '샴푸',
          category: '바디케어',
          weight: 300,
          price: 4200,
          co2Saved: 38,
          plasticSaved: 15,
          origin: '국내생산 (경기 화성)'
        },
        {
          id: '3',
          name: '올리브유',
          category: '식품',
          weight: 250,
          price: 7800,
          co2Saved: 28,
          plasticSaved: 8,
          origin: '이탈리아 토스카나'
        }
      ],
      totalPrice: 15500,
      totalCO2Saved: 111,
      totalPlasticSaved: 35
    },
    {
      id: 'RCP-2024-002',
      date: '2024-10-15',
      storeName: '알맹상점 홍대점',
      items: [
        {
          id: '4',
          name: '섬유유연제',
          category: '세제',
          weight: 400,
          price: 3800,
          co2Saved: 42,
          plasticSaved: 14,
          origin: '국내생산 (서울)'
        },
        {
          id: '5',
          name: '바디워시',
          category: '바디케어',
          weight: 350,
          price: 5500,
          co2Saved: 41,
          plasticSaved: 16,
          origin: '국내생산 (경기 화성)'
        }
      ],
      totalPrice: 9300,
      totalCO2Saved: 83,
      totalPlasticSaved: 30
    }
  ];

  const totalStats = {
    totalPurchases: mockReceipts.length,
    totalCO2: mockReceipts.reduce((sum, r) => sum + r.totalCO2Saved, 0),
    totalPlastic: mockReceipts.reduce((sum, r) => sum + r.totalPlasticSaved, 0),
    totalSpent: mockReceipts.reduce((sum, r) => sum + r.totalPrice, 0)
  };

  return (
    <div className="mangles-container">
      <header className="mangles-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← 돌아가기
        </button>
        <h1>맹글즈</h1>
        <p className="subtitle">리필스테이션 스마트 영수증</p>
      </header>

      <div className="mangles-content">
        {/* Environmental Impact Dashboard */}
        <section className="impact-dashboard">
          <h2>나의 환경 영향</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🌱</div>
              <div className="stat-value">{totalStats.totalCO2}g</div>
              <div className="stat-label">CO₂ 절감</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">♻️</div>
              <div className="stat-value">{totalStats.totalPlastic}g</div>
              <div className="stat-label">플라스틱 절감</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🛒</div>
              <div className="stat-value">{totalStats.totalPurchases}회</div>
              <div className="stat-label">리필 구매</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <div className="stat-value">{totalStats.totalSpent.toLocaleString()}원</div>
              <div className="stat-label">총 지출</div>
            </div>
          </div>
        </section>

        {/* Receipt History */}
        <section className="receipt-history">
          <h2>구매 기록</h2>
          <div className="receipt-list">
            {mockReceipts.map((receipt) => (
              <div
                key={receipt.id}
                className="receipt-item"
                onClick={() => setSelectedReceipt(receipt)}
              >
                <div className="receipt-header">
                  <span className="receipt-store">{receipt.storeName}</span>
                  <span className="receipt-date">{receipt.date}</span>
                </div>
                <div className="receipt-summary">
                  <span>{receipt.items.length}개 품목</span>
                  <span className="receipt-total">{receipt.totalPrice.toLocaleString()}원</span>
                </div>
                <div className="receipt-impact">
                  <span className="impact-badge">
                    🌱 CO₂ {receipt.totalCO2Saved}g 절감
                  </span>
                  <span className="impact-badge">
                    ♻️ 플라스틱 {receipt.totalPlasticSaved}g 절감
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Receipt View */}
        {selectedReceipt && (
          <section className="receipt-detail">
            <div className="detail-header">
              <h2>영수증 상세</h2>
              <button
                className="close-button"
                onClick={() => setSelectedReceipt(null)}
              >
                ✕
              </button>
            </div>

            <div className="receipt-card">
              <div className="receipt-card-header">
                <h3>{selectedReceipt.storeName}</h3>
                <p>{selectedReceipt.date}</p>
                <p className="receipt-id">{selectedReceipt.id}</p>
              </div>

              <div className="receipt-items">
                <h4>구매 품목</h4>
                {selectedReceipt.items.map((item) => (
                  <div key={item.id} className="item-detail">
                    <div className="item-main">
                      <div className="item-name-category">
                        <span className="item-name">{item.name}</span>
                        <span className="item-category">{item.category}</span>
                      </div>
                      <span className="item-price">{item.price.toLocaleString()}원</span>
                    </div>
                    <div className="item-info">
                      <span className="item-weight">{item.weight}g</span>
                      <span className="item-origin">📍 {item.origin}</span>
                    </div>
                    <div className="item-impact">
                      <span className="impact-detail">🌱 CO₂ {item.co2Saved}g</span>
                      <span className="impact-detail">♻️ 플라스틱 {item.plasticSaved}g</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="receipt-total-section">
                <div className="total-row">
                  <span>총 금액</span>
                  <span className="total-amount">{selectedReceipt.totalPrice.toLocaleString()}원</span>
                </div>
                <div className="total-impact">
                  <div className="impact-row">
                    <span>총 CO₂ 절감</span>
                    <span className="impact-value">{selectedReceipt.totalCO2Saved}g</span>
                  </div>
                  <div className="impact-row">
                    <span>총 플라스틱 절감</span>
                    <span className="impact-value">{selectedReceipt.totalPlasticSaved}g</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Consumption Pattern Analysis */}
        <section className="consumption-pattern">
          <h2>소비 패턴 분석</h2>
          <div className="pattern-grid">
            <div className="pattern-card">
              <h3>자주 구매하는 카테고리</h3>
              <div className="category-list">
                <div className="category-item">
                  <span className="category-name">세제</span>
                  <div className="category-bar">
                    <div className="category-fill" style={{ width: '80%' }}></div>
                  </div>
                  <span className="category-count">4회</span>
                </div>
                <div className="category-item">
                  <span className="category-name">바디케어</span>
                  <div className="category-bar">
                    <div className="category-fill" style={{ width: '60%' }}></div>
                  </div>
                  <span className="category-count">3회</span>
                </div>
                <div className="category-item">
                  <span className="category-name">식품</span>
                  <div className="category-bar">
                    <div className="category-fill" style={{ width: '40%' }}></div>
                  </div>
                  <span className="category-count">2회</span>
                </div>
              </div>
            </div>

            <div className="pattern-card">
              <h3>월별 리필 트렌드</h3>
              <div className="trend-chart">
                <div className="chart-bar" style={{ height: '60%' }}>
                  <span className="chart-label">8월</span>
                </div>
                <div className="chart-bar" style={{ height: '75%' }}>
                  <span className="chart-label">9월</span>
                </div>
                <div className="chart-bar" style={{ height: '90%' }}>
                  <span className="chart-label">10월</span>
                </div>
              </div>
              <p className="trend-insight">매달 리필 횟수가 증가하고 있어요!</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Mangles;
