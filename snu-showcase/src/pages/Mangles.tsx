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
      {/* Header */}
      <header className="mangles-header">
        <div className="header-content">
          <button className="back-button" onClick={() => navigate('/')}>
            <span className="back-arrow">←</span>
            <span className="back-text">뒤로</span>
          </button>
          <div className="header-title-group">
            <h1 className="header-title">맹글즈</h1>
            <p className="header-subtitle">리필스테이션 스마트 영수증</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="mangles-content">
        {/* Summary Cards */}
        <section className="summary-section">
          <div className="summary-grid">
            <div className="summary-card">
              <div className="summary-label">총 지출</div>
              <div className="summary-value primary">{totalStats.totalSpent.toLocaleString()}</div>
              <div className="summary-unit">원</div>
            </div>
            <div className="summary-card">
              <div className="summary-label">CO₂ 절감</div>
              <div className="summary-value">{totalStats.totalCO2.toLocaleString()}</div>
              <div className="summary-unit">그램</div>
            </div>
            <div className="summary-card">
              <div className="summary-label">플라스틱 절감</div>
              <div className="summary-value">{totalStats.totalPlastic.toLocaleString()}</div>
              <div className="summary-unit">그램</div>
            </div>
            <div className="summary-card">
              <div className="summary-label">리필 구매</div>
              <div className="summary-value">{totalStats.totalPurchases}</div>
              <div className="summary-unit">건</div>
            </div>
          </div>
        </section>

        {/* Transactions Table */}
        <section className="transactions-section">
          <div className="section-header">
            <h2 className="section-title">거래 내역</h2>
            <div className="section-count">{mockReceipts.length} 건</div>
          </div>

          <div className="table-container">
            <table className="transactions-table">
              <thead>
                <tr>
                  <th className="col-date">날짜</th>
                  <th className="col-store">매장</th>
                  <th className="col-items">품목</th>
                  <th className="col-co2">CO₂ 절감</th>
                  <th className="col-plastic">플라스틱 절감</th>
                  <th className="col-amount">금액</th>
                  <th className="col-action"></th>
                </tr>
              </thead>
              <tbody>
                {mockReceipts.map((receipt) => (
                  <tr key={receipt.id} className="transaction-row">
                    <td className="col-date">{receipt.date}</td>
                    <td className="col-store">{receipt.storeName}</td>
                    <td className="col-items">{receipt.items.length}개 품목</td>
                    <td className="col-co2">{receipt.totalCO2Saved}g</td>
                    <td className="col-plastic">{receipt.totalPlasticSaved}g</td>
                    <td className="col-amount">{receipt.totalPrice.toLocaleString()}원</td>
                    <td className="col-action">
                      <button
                        className="view-button"
                        onClick={() => setSelectedReceipt(receipt)}
                      >
                        상세보기
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Category Breakdown */}
        <section className="category-section">
          <div className="section-header">
            <h2 className="section-title">카테고리별 분석</h2>
          </div>

          <div className="category-grid">
            <div className="category-card">
              <div className="category-header">
                <span className="category-name">세제</span>
                <span className="category-percentage">40%</span>
              </div>
              <div className="category-bar">
                <div className="category-fill" style={{ width: '40%' }}></div>
              </div>
              <div className="category-stats">
                <span className="category-stat">4회 구매</span>
                <span className="category-stat">14,600원</span>
              </div>
            </div>

            <div className="category-card">
              <div className="category-header">
                <span className="category-name">바디케어</span>
                <span className="category-percentage">35%</span>
              </div>
              <div className="category-bar">
                <div className="category-fill" style={{ width: '35%' }}></div>
              </div>
              <div className="category-stats">
                <span className="category-stat">3회 구매</span>
                <span className="category-stat">13,900원</span>
              </div>
            </div>

            <div className="category-card">
              <div className="category-header">
                <span className="category-name">식품</span>
                <span className="category-percentage">25%</span>
              </div>
              <div className="category-bar">
                <div className="category-fill" style={{ width: '25%' }}></div>
              </div>
              <div className="category-stats">
                <span className="category-stat">2회 구매</span>
                <span className="category-stat">7,800원</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Receipt Detail Modal */}
      {selectedReceipt && (
        <div className="modal-overlay" onClick={() => setSelectedReceipt(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-group">
                <h3 className="modal-title">영수증 상세</h3>
                <p className="modal-id">{selectedReceipt.id}</p>
              </div>
              <button className="modal-close" onClick={() => setSelectedReceipt(null)}>
                ✕
              </button>
            </div>

            <div className="modal-body">
              {/* Receipt Info */}
              <div className="receipt-info">
                <div className="info-row">
                  <span className="info-label">매장명</span>
                  <span className="info-value">{selectedReceipt.storeName}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">거래일시</span>
                  <span className="info-value">{selectedReceipt.date}</span>
                </div>
              </div>

              {/* Items Table */}
              <div className="items-section">
                <h4 className="items-title">구매 품목</h4>
                <table className="items-table">
                  <thead>
                    <tr>
                      <th>품목명</th>
                      <th>중량</th>
                      <th>금액</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedReceipt.items.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="item-name">{item.name}</div>
                          <div className="item-category">{item.category}</div>
                        </td>
                        <td>{item.weight}g</td>
                        <td className="item-price">{item.price.toLocaleString()}원</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Environmental Impact */}
              <div className="impact-section">
                <h4 className="impact-title">환경 영향</h4>
                <div className="impact-grid">
                  <div className="impact-item">
                    <span className="impact-label">CO₂ 절감</span>
                    <span className="impact-value">{selectedReceipt.totalCO2Saved}g</span>
                  </div>
                  <div className="impact-item">
                    <span className="impact-label">플라스틱 절감</span>
                    <span className="impact-value">{selectedReceipt.totalPlasticSaved}g</span>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="receipt-total">
                <div className="total-row">
                  <span className="total-label">총 금액</span>
                  <span className="total-amount">{selectedReceipt.totalPrice.toLocaleString()}원</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mangles;
