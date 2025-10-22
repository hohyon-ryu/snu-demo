import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Mangles.css';

interface PurchaseItem {
  id: string;
  name: string;
  category: string;
  weight: number;
  unit: 'ml' | 'g';
  price: number;
  co2Saved: number;
  plasticSaved: number;
  origin: string;
  productInfo?: string;
  certifications?: string[];
}

interface Receipt {
  id: string;
  date: string;
  time: string;
  storeName: string;
  items: PurchaseItem[];
  totalPrice: number;
  totalCO2Saved: number;
  totalPlasticSaved: number;
}

interface MonthlyStats {
  month: string;
  refillCount: number;
  co2Saved: number;
  plasticSaved: number;
  totalVolume: number;
  spending: number;
}

interface CategoryAnalysis {
  category: string;
  count: number;
  spending: number;
  percentage: number;
  co2Saved: number;
  plasticSaved: number;
}

function Mangles() {
  const navigate = useNavigate();
  const [selectedReceipt, setSelectedReceipt] = useState<Receipt | null>(null);

  // Mock data - Realistic Korean refill station products
  const mockReceipts: Receipt[] = [
    {
      id: 'RCP-2024-001',
      date: '2024-10-18',
      time: '14:35',
      storeName: '그린리필 스테이션 강남점',
      items: [
        {
          id: '1',
          name: '천연 샴푸',
          category: '바디케어',
          weight: 300,
          unit: 'ml',
          price: 6000,
          co2Saved: 45,
          plasticSaved: 18,
          origin: '에코브랜드',
          productInfo: '식물성 계면활성제, 소디, 천연유료',
          certifications: ['유기농 인증', '비건']
        },
        {
          id: '2',
          name: '세탁세제',
          category: '세제',
          weight: 800,
          unit: 'ml',
          price: 12000,
          co2Saved: 68,
          plasticSaved: 32,
          origin: '에코워시',
          productInfo: '식물성 계면활성제',
          certifications: ['저자극', '환경마크']
        },
        {
          id: '3',
          name: '주방세제',
          category: '세제',
          weight: 550,
          unit: 'ml',
          price: 8250,
          co2Saved: 52,
          plasticSaved: 24,
          origin: '국내생산',
          productInfo: '천연 유래 성분 95%',
          certifications: ['저자극', '생분해']
        }
      ],
      totalPrice: 26250,
      totalCO2Saved: 165,
      totalPlasticSaved: 74
    },
    {
      id: 'RCP-2024-002',
      date: '2024-10-05',
      time: '16:22',
      storeName: '그린리필 스테이션 강남점',
      items: [
        {
          id: '4',
          name: '컨디셔너',
          category: '바디케어',
          weight: 300,
          unit: 'ml',
          price: 6500,
          co2Saved: 42,
          plasticSaved: 18,
          origin: '에코브랜드',
          productInfo: '천연 유래 성분',
          certifications: ['유기농 인증', '비건']
        },
        {
          id: '5',
          name: '바디워시',
          category: '바디케어',
          weight: 400,
          unit: 'ml',
          price: 7200,
          co2Saved: 48,
          plasticSaved: 22,
          origin: '에코브랜드',
          productInfo: '천연 보습 성분',
          certifications: ['저자극', '비건']
        }
      ],
      totalPrice: 13700,
      totalCO2Saved: 90,
      totalPlasticSaved: 40
    },
    {
      id: 'RCP-2024-003',
      date: '2024-09-28',
      time: '11:45',
      storeName: '알맹상점 홍대점',
      items: [
        {
          id: '6',
          name: '다목적 세정제',
          category: '세제',
          weight: 500,
          unit: 'ml',
          price: 7500,
          co2Saved: 55,
          plasticSaved: 26,
          origin: '국내생산',
          productInfo: '천연 계면활성제',
          certifications: ['생분해', '저자극']
        },
        {
          id: '7',
          name: '섬유유연제',
          category: '세제',
          weight: 1000,
          unit: 'ml',
          price: 9000,
          co2Saved: 72,
          plasticSaved: 38,
          origin: '에코워시',
          productInfo: '식물 추출 유연 성분',
          certifications: ['저자극', '생분해']
        },
        {
          id: '8',
          name: '핸드워시',
          category: '바디케어',
          weight: 250,
          unit: 'ml',
          price: 5000,
          co2Saved: 35,
          plasticSaved: 15,
          origin: '국내생산',
          productInfo: '천연 보습 성분',
          certifications: ['저자극']
        }
      ],
      totalPrice: 21500,
      totalCO2Saved: 162,
      totalPlasticSaved: 79
    },
    {
      id: 'RCP-2024-004',
      date: '2024-09-15',
      time: '15:18',
      storeName: '알맹상점 망원점',
      items: [
        {
          id: '9',
          name: '천연 샴푸',
          category: '바디케어',
          weight: 300,
          unit: 'ml',
          price: 6000,
          co2Saved: 45,
          plasticSaved: 18,
          origin: '에코브랜드',
          productInfo: '식물성 계면활성제',
          certifications: ['유기농 인증', '비건']
        },
        {
          id: '10',
          name: '주방세제',
          category: '세제',
          weight: 600,
          unit: 'ml',
          price: 9000,
          co2Saved: 58,
          plasticSaved: 28,
          origin: '국내생산',
          productInfo: '천연 유래 성분',
          certifications: ['생분해']
        }
      ],
      totalPrice: 15000,
      totalCO2Saved: 103,
      totalPlasticSaved: 46
    },
    {
      id: 'RCP-2024-005',
      date: '2024-09-02',
      time: '13:52',
      storeName: '그린리필 스테이션 강남점',
      items: [
        {
          id: '11',
          name: '세탁세제',
          category: '세제',
          weight: 1000,
          unit: 'ml',
          price: 15000,
          co2Saved: 85,
          plasticSaved: 40,
          origin: '에코워시',
          productInfo: '식물성 계면활성제',
          certifications: ['저자극', '환경마크']
        },
        {
          id: '12',
          name: '컨디셔너',
          category: '바디케어',
          weight: 300,
          unit: 'ml',
          price: 6500,
          co2Saved: 42,
          plasticSaved: 18,
          origin: '에코브랜드',
          productInfo: '천연 보습',
          certifications: ['유기농 인증', '비건']
        },
        {
          id: '13',
          name: '바디워시',
          category: '바디케어',
          weight: 350,
          unit: 'ml',
          price: 6300,
          co2Saved: 44,
          plasticSaved: 20,
          origin: '에코브랜드',
          productInfo: '천연 보습 성분',
          certifications: ['저자극', '비건']
        }
      ],
      totalPrice: 27800,
      totalCO2Saved: 171,
      totalPlasticSaved: 78
    }
  ];

  // Calculate comprehensive statistics
  const totalStats = {
    totalPurchases: mockReceipts.length,
    totalCO2: mockReceipts.reduce((sum, r) => sum + r.totalCO2Saved, 0),
    totalPlastic: mockReceipts.reduce((sum, r) => sum + r.totalPlasticSaved, 0),
    totalSpent: mockReceipts.reduce((sum, r) => sum + r.totalPrice, 0),
    totalVolume: mockReceipts.reduce((sum, r) => sum + r.items.reduce((s, i) => s + i.weight, 0), 0)
  };

  // Category breakdown analysis
  const categoryStats: { [key: string]: CategoryAnalysis } = {};
  mockReceipts.forEach(receipt => {
    receipt.items.forEach(item => {
      if (!categoryStats[item.category]) {
        categoryStats[item.category] = {
          category: item.category,
          count: 0,
          spending: 0,
          percentage: 0,
          co2Saved: 0,
          plasticSaved: 0
        };
      }
      categoryStats[item.category].count++;
      categoryStats[item.category].spending += item.price;
      categoryStats[item.category].co2Saved += item.co2Saved;
      categoryStats[item.category].plasticSaved += item.plasticSaved;
    });
  });

  // Calculate percentages
  Object.values(categoryStats).forEach(cat => {
    cat.percentage = (cat.spending / totalStats.totalSpent) * 100;
  });

  const sortedCategories = Object.values(categoryStats).sort((a, b) => b.spending - a.spending);

  // Monthly trend data (last 3 months)
  const monthlyTrend: MonthlyStats[] = [
    { month: '8월', refillCount: 6, co2Saved: 420, plasticSaved: 198, totalVolume: 3200, spending: 52000 },
    { month: '9월', refillCount: 8, co2Saved: 539, plasticSaved: 249, totalVolume: 4250, spending: 64300 },
    { month: '10월', refillCount: 5, co2Saved: 691, plasticSaved: 317, totalVolume: 5100, spending: 104250 }
  ];

  // Cumulative monthly data for trend chart
  const cumulativeData = monthlyTrend.map((month, idx) => ({
    month: month.month,
    cumCO2: monthlyTrend.slice(0, idx + 1).reduce((sum, m) => sum + m.co2Saved, 0),
    cumPlastic: monthlyTrend.slice(0, idx + 1).reduce((sum, m) => sum + m.plasticSaved, 0),
    cumVolume: monthlyTrend.slice(0, idx + 1).reduce((sum, m) => sum + m.totalVolume, 0)
  }));

  // Achievement tier calculation
  const getTierInfo = (co2Saved: number) => {
    if (co2Saved >= 2000) return { tier: 'PLATINUM', nextTier: null, progress: 100, color: '#9333EA' };
    if (co2Saved >= 1000) return { tier: 'GOLD', nextTier: 'PLATINUM', progress: ((co2Saved - 1000) / 1000) * 100, color: '#F59E0B' };
    if (co2Saved >= 500) return { tier: 'SILVER', nextTier: 'GOLD', progress: ((co2Saved - 500) / 500) * 100, color: '#6B7280' };
    return { tier: 'BRONZE', nextTier: 'SILVER', progress: (co2Saved / 500) * 100, color: '#B45309' };
  };

  const tierInfo = getTierInfo(totalStats.totalCO2);

  // Environmental impact equivalents
  const getImpactEquivalents = (co2: number, plastic: number) => {
    return {
      treesPlanted: Math.floor(co2 / 22), // 22g CO2 absorbed per tree per day
      plasticBottles: Math.floor(plastic / 30), // Average 500ml bottle weighs ~30g
      drivingKm: (co2 / 120).toFixed(1), // ~120g CO2 per km driven
      showerMinutes: Math.floor(plastic / 15) // ~15g plastic per shower product
    };
  };

  const impactEquiv = getImpactEquivalents(totalStats.totalCO2, totalStats.totalPlastic);

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
            <p className="header-subtitle">리필스테이션 스마트 영수증 및 소비 분석</p>
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
              <div className="summary-value">{(totalStats.totalCO2 / 1000).toFixed(1)}</div>
              <div className="summary-unit">킬로그램</div>
            </div>
            <div className="summary-card">
              <div className="summary-label">플라스틱 절감</div>
              <div className="summary-value">{totalStats.totalPlastic.toLocaleString()}</div>
              <div className="summary-unit">그램</div>
            </div>
            <div className="summary-card">
              <div className="summary-label">총 리필량</div>
              <div className="summary-value">{(totalStats.totalVolume / 1000).toFixed(1)}</div>
              <div className="summary-unit">리터</div>
            </div>
          </div>
        </section>

        {/* Environmental Impact Section */}
        <section className="environmental-impact-section">
          <div className="section-header">
            <h2 className="section-title">환경 기여도</h2>
            <div className="tier-badge" style={{ background: tierInfo.color }}>
              {tierInfo.tier} 등급
            </div>
          </div>

          <div className="impact-equivalents-grid">
            <div className="equiv-card">
              <div className="equiv-icon">🌳</div>
              <div className="equiv-value">{impactEquiv.treesPlanted}</div>
              <div className="equiv-label">나무 1일 흡수량</div>
              <div className="equiv-detail">{totalStats.totalCO2}g CO₂ 절감</div>
            </div>
            <div className="equiv-card">
              <div className="equiv-icon">🚗</div>
              <div className="equiv-value">{impactEquiv.drivingKm}</div>
              <div className="equiv-label">주행거리(km) 절감</div>
              <div className="equiv-detail">승용차 기준</div>
            </div>
            <div className="equiv-card">
              <div className="equiv-icon">♻️</div>
              <div className="equiv-value">{impactEquiv.plasticBottles}</div>
              <div className="equiv-label">플라스틱 병</div>
              <div className="equiv-detail">{totalStats.totalPlastic}g 절감</div>
            </div>
            <div className="equiv-card">
              <div className="equiv-icon">💧</div>
              <div className="equiv-value">{totalStats.totalPurchases}</div>
              <div className="equiv-label">리필 횟수</div>
              <div className="equiv-detail">지구를 위한 선택</div>
            </div>
          </div>

          {tierInfo.nextTier && (
            <div className="tier-progress-container">
              <div className="tier-progress-header">
                <span className="tier-progress-label">다음 등급까지 ({tierInfo.nextTier})</span>
                <span className="tier-progress-percent">{tierInfo.progress.toFixed(0)}%</span>
              </div>
              <div className="tier-progress-bar">
                <div className="tier-progress-fill" style={{ width: `${tierInfo.progress}%` }}></div>
              </div>
            </div>
          )}
        </section>

        {/* Monthly Trend Analysis */}
        <section className="monthly-trend-section">
          <div className="section-header">
            <h2 className="section-title">월별 리필 임팩트</h2>
          </div>

          <div className="trend-charts-container">
            <div className="chart-card">
              <h3 className="chart-title">월별 플라스틱 절감량</h3>
              <div className="bar-chart">
                {monthlyTrend.map((month, idx) => {
                  const maxValue = Math.max(...monthlyTrend.map(m => m.refillCount));
                  const height = (month.refillCount / maxValue) * 100;
                  return (
                    <div key={idx} className="bar-item">
                      <div className="bar-wrapper">
                        <div className="bar-value-label">{month.refillCount}</div>
                        <div className="bar-column" style={{ height: `${height}%` }}>
                          <div className="bar-fill"></div>
                        </div>
                      </div>
                      <div className="bar-label">{month.month}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="chart-card">
              <h3 className="chart-title">누적 환경 임팩트</h3>
              <div className="line-chart">
                <div className="chart-y-axis">
                  <span>3.2kg</span>
                  <span>2.4kg</span>
                  <span>1.6kg</span>
                  <span>0.8kg</span>
                </div>
                <div className="chart-area">
                  <svg viewBox="0 0 300 150" className="chart-svg">
                    <polyline
                      points={cumulativeData.map((d, i) =>
                        `${(i / (cumulativeData.length - 1)) * 280 + 10},${150 - (d.cumCO2 / 1650) * 140}`
                      ).join(' ')}
                      className="chart-line"
                    />
                    {cumulativeData.map((d, i) => (
                      <circle
                        key={i}
                        cx={(i / (cumulativeData.length - 1)) * 280 + 10}
                        cy={150 - (d.cumCO2 / 1650) * 140}
                        r="4"
                        className="chart-point"
                      />
                    ))}
                  </svg>
                  <div className="chart-x-labels">
                    {cumulativeData.map((d, i) => (
                      <span key={i}>{d.month}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="chart-legend">
                <span className="legend-item">누적 CO₂ 절감량 (kg)</span>
              </div>
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
                  <th className="col-volume">총 용량</th>
                  <th className="col-co2">CO₂ 절감</th>
                  <th className="col-plastic">플라스틱 절감</th>
                  <th className="col-amount">금액</th>
                  <th className="col-action"></th>
                </tr>
              </thead>
              <tbody>
                {mockReceipts.map((receipt) => {
                  const totalVolume = receipt.items.reduce((sum, item) => sum + item.weight, 0);
                  return (
                    <tr key={receipt.id} className="transaction-row">
                      <td className="col-date">{receipt.date}</td>
                      <td className="col-store">{receipt.storeName}</td>
                      <td className="col-items">{receipt.items.length}개 품목</td>
                      <td className="col-volume">{totalVolume}ml</td>
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
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Category Breakdown */}
        <section className="category-section">
          <div className="section-header">
            <h2 className="section-title">카테고리별 소비 분석</h2>
          </div>

          <div className="category-grid">
            {sortedCategories.map((cat, idx) => (
              <div key={idx} className="category-card">
                <div className="category-header">
                  <span className="category-name">{cat.category}</span>
                  <span className="category-percentage">{cat.percentage.toFixed(0)}%</span>
                </div>
                <div className="category-bar">
                  <div className="category-fill" style={{ width: `${cat.percentage}%` }}></div>
                </div>
                <div className="category-stats">
                  <span className="category-stat">{cat.count}회 구매</span>
                  <span className="category-stat">{cat.spending.toLocaleString()}원</span>
                </div>
                <div className="category-impact">
                  <div className="impact-mini">
                    <span className="impact-mini-label">CO₂</span>
                    <span className="impact-mini-value">{cat.co2Saved}g</span>
                  </div>
                  <div className="impact-mini">
                    <span className="impact-mini-label">플라스틱</span>
                    <span className="impact-mini-value">{cat.plasticSaved}g</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Receipt Detail Modal */}
      {selectedReceipt && (
        <div className="modal-overlay" onClick={() => setSelectedReceipt(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-group">
                <h3 className="modal-title">스마트 영수증</h3>
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
                  <span className="info-label">고객명</span>
                  <span className="info-value">박소연님</span>
                </div>
                <div className="info-row">
                  <span className="info-label">매장명</span>
                  <span className="info-value">{selectedReceipt.storeName}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">거래일시</span>
                  <span className="info-value">{selectedReceipt.date} {selectedReceipt.time}</span>
                </div>
              </div>

              {/* Items Table */}
              <div className="items-section">
                <h4 className="items-title">구매 품목</h4>
                <div className="items-list">
                  {selectedReceipt.items.map((item) => (
                    <div key={item.id} className="item-detail-card">
                      <div className="item-header-row">
                        <div className="item-name-col">
                          <div className="item-name">{item.name}</div>
                          <div className="item-category">{item.category}</div>
                        </div>
                        <div className="item-price">{item.price.toLocaleString()}원</div>
                      </div>

                      <div className="item-meta-row">
                        <span className="item-meta">
                          <strong>{item.weight}{item.unit}</strong>
                        </span>
                      </div>

                      {item.productInfo && (
                        <div className="item-info-row">
                          <span className="info-icon">ℹ️</span>
                          <span className="item-info-text">주요 성분</span>
                          <span className="item-info-value">{item.productInfo}</span>
                        </div>
                      )}

                      {item.origin && (
                        <div className="item-info-row">
                          <span className="info-icon">📦</span>
                          <span className="item-info-text">제조사/원산지</span>
                          <span className="item-info-value">{item.origin}</span>
                        </div>
                      )}

                      {item.certifications && item.certifications.length > 0 && (
                        <div className="item-certifications">
                          {item.certifications.map((cert, idx) => (
                            <span key={idx} className="certification-badge">{cert}</span>
                          ))}
                        </div>
                      )}

                      <div className="item-impact-row">
                        <div className="item-impact-mini">
                          <span className="mini-label">CO₂ 절감</span>
                          <span className="mini-value">{item.co2Saved}g</span>
                        </div>
                        <div className="item-impact-mini">
                          <span className="mini-label">플라스틱 절감</span>
                          <span className="mini-value">{item.plasticSaved}g</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div className="receipt-summary">
                <div className="summary-row">
                  <span className="summary-label">총 품목</span>
                  <span className="summary-value">{selectedReceipt.items.length}개</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">총 용량</span>
                  <span className="summary-value">
                    {selectedReceipt.items.reduce((sum, item) => sum + item.weight, 0)}ml
                  </span>
                </div>
                <div className="summary-row highlight">
                  <span className="summary-label">결제 금액</span>
                  <span className="summary-value">{selectedReceipt.totalPrice.toLocaleString()}원</span>
                </div>
              </div>

              {/* Environmental Impact */}
              <div className="impact-section">
                <h4 className="impact-title">이번 리필로 플라스틱 용기 3개를 절약했어요!</h4>
                <p className="impact-subtitle">지구를 위한 작은 실천, 감사합니다 🌍</p>
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

              {/* Action Button */}
              <div className="receipt-actions">
                <button className="action-button primary">
                  내 소비 기록 보기
                </button>
                <p className="auto-save-notice">이 영수증은 자동으로 저장됩니다</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Mangles;
