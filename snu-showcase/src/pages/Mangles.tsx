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
  manufacturer: string;
  productInfo?: string;
  certifications?: string[];
}

interface Receipt {
  id: string;
  date: string;
  time: string;
  storeName: string;
  storeLocation: string;
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

  // Comprehensive mock data - 6 months of realistic Korean refill station products
  const mockReceipts: Receipt[] = [
    {
      id: 'RCP-2024-10-18',
      date: '2024-10-18',
      time: '14:35',
      storeName: '그린리필 스테이션',
      storeLocation: '강남점',
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
          origin: '국내산',
          manufacturer: '에코브랜드',
          productInfo: '식물성 계면활성제, 소디움코코일글루타메이트, 천연유료 95%',
          certifications: ['유기농 인증', '비건', '저자극']
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
          origin: '국내산',
          manufacturer: '에코워시',
          productInfo: '식물성 계면활성제, 소디움라우레스설페이트 무첨가',
          certifications: ['저자극', '환경마크', '생분해']
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
          origin: '국내산',
          manufacturer: '그린홈',
          productInfo: '천연 유래 성분 95%, 야자유 계면활성제',
          certifications: ['저자극', '생분해']
        }
      ],
      totalPrice: 26250,
      totalCO2Saved: 165,
      totalPlasticSaved: 74
    },
    {
      id: 'RCP-2024-10-05',
      date: '2024-10-05',
      time: '16:22',
      storeName: '그린리필 스테이션',
      storeLocation: '강남점',
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
          origin: '국내산',
          manufacturer: '에코브랜드',
          productInfo: '천연 유래 성분, 시어버터, 아르간오일',
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
          origin: '국내산',
          manufacturer: '에코브랜드',
          productInfo: '천연 보습 성분, 히알루론산, 알로에베라',
          certifications: ['저자극', '비건']
        }
      ],
      totalPrice: 13700,
      totalCO2Saved: 90,
      totalPlasticSaved: 40
    },
    {
      id: 'RCP-2024-09-28',
      date: '2024-09-28',
      time: '11:45',
      storeName: '알맹상점',
      storeLocation: '홍대점',
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
          origin: '국내산',
          manufacturer: '클린에코',
          productInfo: '천연 계면활성제, 레몬 에센셜 오일',
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
          origin: '국내산',
          manufacturer: '에코워시',
          productInfo: '식물 추출 유연 성분, 천연 향료',
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
          origin: '국내산',
          manufacturer: '그린홈',
          productInfo: '천연 보습 성분, 글리세린, 비타민E',
          certifications: ['저자극']
        }
      ],
      totalPrice: 21500,
      totalCO2Saved: 162,
      totalPlasticSaved: 79
    },
    {
      id: 'RCP-2024-09-15',
      date: '2024-09-15',
      time: '15:18',
      storeName: '알맹상점',
      storeLocation: '망원점',
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
          origin: '국내산',
          manufacturer: '에코브랜드',
          productInfo: '식물성 계면활성제, 동백오일, 미강오일',
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
          origin: '국내산',
          manufacturer: '그린홈',
          productInfo: '천연 유래 성분, 자몽 에센셜 오일',
          certifications: ['생분해', '저자극']
        }
      ],
      totalPrice: 15000,
      totalCO2Saved: 103,
      totalPlasticSaved: 46
    },
    {
      id: 'RCP-2024-09-02',
      date: '2024-09-02',
      time: '13:52',
      storeName: '그린리필 스테이션',
      storeLocation: '강남점',
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
          origin: '국내산',
          manufacturer: '에코워시',
          productInfo: '식물성 계면활성제, 효소 첨가',
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
          origin: '국내산',
          manufacturer: '에코브랜드',
          productInfo: '천연 보습, 호호바오일, 코코넛오일',
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
          origin: '국내산',
          manufacturer: '에코브랜드',
          productInfo: '천연 보습 성분, 세라마이드, 병풀추출물',
          certifications: ['저자극', '비건']
        }
      ],
      totalPrice: 27800,
      totalCO2Saved: 171,
      totalPlasticSaved: 78
    },
    {
      id: 'RCP-2024-08-25',
      date: '2024-08-25',
      time: '10:30',
      storeName: '알맹상점',
      storeLocation: '성수점',
      items: [
        {
          id: '14',
          name: '치약',
          category: '바디케어',
          weight: 100,
          unit: 'g',
          price: 4500,
          co2Saved: 28,
          plasticSaved: 12,
          origin: '국내산',
          manufacturer: '에코덴탈',
          productInfo: '천연 미네랄, 불소 무첨가, 자일리톨',
          certifications: ['비건', '저자극']
        },
        {
          id: '15',
          name: '설거지비누',
          category: '세제',
          weight: 200,
          unit: 'g',
          price: 5000,
          co2Saved: 32,
          plasticSaved: 15,
          origin: '국내산',
          manufacturer: '클린에코',
          productInfo: '천연 야자유, 베이킹소다',
          certifications: ['생분해', '저자극']
        },
        {
          id: '16',
          name: '핸드크림',
          category: '바디케어',
          weight: 50,
          unit: 'ml',
          price: 6000,
          co2Saved: 18,
          plasticSaved: 8,
          origin: '국내산',
          manufacturer: '에코브랜드',
          productInfo: '시어버터, 천연 보습 성분',
          certifications: ['유기농 인증', '비건']
        }
      ],
      totalPrice: 15500,
      totalCO2Saved: 78,
      totalPlasticSaved: 35
    },
    {
      id: 'RCP-2024-08-12',
      date: '2024-08-12',
      time: '17:05',
      storeName: '그린리필 스테이션',
      storeLocation: '강남점',
      items: [
        {
          id: '17',
          name: '천연 샴푸',
          category: '바디케어',
          weight: 300,
          unit: 'ml',
          price: 6000,
          co2Saved: 45,
          plasticSaved: 18,
          origin: '국내산',
          manufacturer: '에코브랜드',
          productInfo: '식물성 계면활성제, 라벤더 에센셜 오일',
          certifications: ['유기농 인증', '비건']
        },
        {
          id: '18',
          name: '섬유유연제',
          category: '세제',
          weight: 800,
          unit: 'ml',
          price: 7200,
          co2Saved: 58,
          plasticSaved: 30,
          origin: '국내산',
          manufacturer: '에코워시',
          productInfo: '식물 추출 유연 성분, 코튼 향',
          certifications: ['저자극', '생분해']
        }
      ],
      totalPrice: 13200,
      totalCO2Saved: 103,
      totalPlasticSaved: 48
    },
    {
      id: 'RCP-2024-07-28',
      date: '2024-07-28',
      time: '14:20',
      storeName: '알맹상점',
      storeLocation: '홍대점',
      items: [
        {
          id: '19',
          name: '주방세제',
          category: '세제',
          weight: 550,
          unit: 'ml',
          price: 8250,
          co2Saved: 52,
          plasticSaved: 24,
          origin: '국내산',
          manufacturer: '그린홈',
          productInfo: '천연 유래 성분, 베이킹소다 첨가',
          certifications: ['저자극', '생분해']
        },
        {
          id: '20',
          name: '바디워시',
          category: '바디케어',
          weight: 400,
          unit: 'ml',
          price: 7200,
          co2Saved: 48,
          plasticSaved: 22,
          origin: '국내산',
          manufacturer: '에코브랜드',
          productInfo: '천연 보습 성분, 녹차추출물',
          certifications: ['저자극', '비건']
        },
        {
          id: '21',
          name: '컨디셔너',
          category: '바디케어',
          weight: 300,
          unit: 'ml',
          price: 6500,
          co2Saved: 42,
          plasticSaved: 18,
          origin: '국내산',
          manufacturer: '에코브랜드',
          productInfo: '천연 유래 성분, 카멜리아오일',
          certifications: ['유기농 인증', '비건']
        }
      ],
      totalPrice: 21950,
      totalCO2Saved: 142,
      totalPlasticSaved: 64
    },
    {
      id: 'RCP-2024-07-15',
      date: '2024-07-15',
      time: '11:35',
      storeName: '그린리필 스테이션',
      storeLocation: '강남점',
      items: [
        {
          id: '22',
          name: '세탁세제',
          category: '세제',
          weight: 1000,
          unit: 'ml',
          price: 15000,
          co2Saved: 85,
          plasticSaved: 40,
          origin: '국내산',
          manufacturer: '에코워시',
          productInfo: '식물성 계면활성제, 천연 효소',
          certifications: ['저자극', '환경마크']
        },
        {
          id: '23',
          name: '핸드워시',
          category: '바디케어',
          weight: 250,
          unit: 'ml',
          price: 5000,
          co2Saved: 35,
          plasticSaved: 15,
          origin: '국내산',
          manufacturer: '그린홈',
          productInfo: '천연 보습 성분, 유칼립투스 오일',
          certifications: ['저자극']
        }
      ],
      totalPrice: 20000,
      totalCO2Saved: 120,
      totalPlasticSaved: 55
    },
    {
      id: 'RCP-2024-07-02',
      date: '2024-07-02',
      time: '16:45',
      storeName: '알맹상점',
      storeLocation: '망원점',
      items: [
        {
          id: '24',
          name: '천연 샴푸',
          category: '바디케어',
          weight: 300,
          unit: 'ml',
          price: 6000,
          co2Saved: 45,
          plasticSaved: 18,
          origin: '국내산',
          manufacturer: '에코브랜드',
          productInfo: '식물성 계면활성제, 로즈마리 오일',
          certifications: ['유기농 인증', '비건']
        },
        {
          id: '25',
          name: '다목적 세정제',
          category: '세제',
          weight: 500,
          unit: 'ml',
          price: 7500,
          co2Saved: 55,
          plasticSaved: 26,
          origin: '국내산',
          manufacturer: '클린에코',
          productInfo: '천연 계면활성제, 오렌지 오일',
          certifications: ['생분해', '저자극']
        }
      ],
      totalPrice: 13500,
      totalCO2Saved: 100,
      totalPlasticSaved: 44
    },
    {
      id: 'RCP-2024-06-20',
      date: '2024-06-20',
      time: '13:10',
      storeName: '그린리필 스테이션',
      storeLocation: '강남점',
      items: [
        {
          id: '26',
          name: '주방세제',
          category: '세제',
          weight: 600,
          unit: 'ml',
          price: 9000,
          co2Saved: 58,
          plasticSaved: 28,
          origin: '국내산',
          manufacturer: '그린홈',
          productInfo: '천연 유래 성분, 레몬밤 추출물',
          certifications: ['생분해', '저자극']
        },
        {
          id: '27',
          name: '섬유유연제',
          category: '세제',
          weight: 1000,
          unit: 'ml',
          price: 9000,
          co2Saved: 72,
          plasticSaved: 38,
          origin: '국내산',
          manufacturer: '에코워시',
          productInfo: '식물 추출 유연 성분, 라벤더 향',
          certifications: ['저자극', '생분해']
        },
        {
          id: '28',
          name: '바디워시',
          category: '바디케어',
          weight: 400,
          unit: 'ml',
          price: 7200,
          co2Saved: 48,
          plasticSaved: 22,
          origin: '국내산',
          manufacturer: '에코브랜드',
          productInfo: '천연 보습 성분, 카렌듈라 추출물',
          certifications: ['저자극', '비건']
        }
      ],
      totalPrice: 25200,
      totalCO2Saved: 178,
      totalPlasticSaved: 88
    },
    {
      id: 'RCP-2024-06-08',
      date: '2024-06-08',
      time: '10:50',
      storeName: '알맹상점',
      storeLocation: '성수점',
      items: [
        {
          id: '29',
          name: '천연 샴푸',
          category: '바디케어',
          weight: 300,
          unit: 'ml',
          price: 6000,
          co2Saved: 45,
          plasticSaved: 18,
          origin: '국내산',
          manufacturer: '에코브랜드',
          productInfo: '식물성 계면활성제, 페퍼민트 오일',
          certifications: ['유기농 인증', '비건']
        },
        {
          id: '30',
          name: '컨디셔너',
          category: '바디케어',
          weight: 300,
          unit: 'ml',
          price: 6500,
          co2Saved: 42,
          plasticSaved: 18,
          origin: '국내산',
          manufacturer: '에코브랜드',
          productInfo: '천연 보습, 마카다미아오일',
          certifications: ['유기농 인증', '비건']
        }
      ],
      totalPrice: 12500,
      totalCO2Saved: 87,
      totalPlasticSaved: 36
    },
    {
      id: 'RCP-2024-05-25',
      date: '2024-05-25',
      time: '15:30',
      storeName: '그린리필 스테이션',
      storeLocation: '강남점',
      items: [
        {
          id: '31',
          name: '세탁세제',
          category: '세제',
          weight: 800,
          unit: 'ml',
          price: 12000,
          co2Saved: 68,
          plasticSaved: 32,
          origin: '국내산',
          manufacturer: '에코워시',
          productInfo: '식물성 계면활성제, 베이킹소다',
          certifications: ['저자극', '환경마크']
        },
        {
          id: '32',
          name: '주방세제',
          category: '세제',
          weight: 550,
          unit: 'ml',
          price: 8250,
          co2Saved: 52,
          plasticSaved: 24,
          origin: '국내산',
          manufacturer: '그린홈',
          productInfo: '천연 유래 성분, 자몽씨 추출물',
          certifications: ['저자극', '생분해']
        },
        {
          id: '33',
          name: '핸드워시',
          category: '바디케어',
          weight: 250,
          unit: 'ml',
          price: 5000,
          co2Saved: 35,
          plasticSaved: 15,
          origin: '국내산',
          manufacturer: '그린홈',
          productInfo: '천연 보습 성분, 티트리 오일',
          certifications: ['저자극']
        }
      ],
      totalPrice: 25250,
      totalCO2Saved: 155,
      totalPlasticSaved: 71
    },
    {
      id: 'RCP-2024-05-12',
      date: '2024-05-12',
      time: '12:15',
      storeName: '알맹상점',
      storeLocation: '홍대점',
      items: [
        {
          id: '34',
          name: '바디워시',
          category: '바디케어',
          weight: 400,
          unit: 'ml',
          price: 7200,
          co2Saved: 48,
          plasticSaved: 22,
          origin: '국내산',
          manufacturer: '에코브랜드',
          productInfo: '천연 보습 성분, 쌀추출물',
          certifications: ['저자극', '비건']
        },
        {
          id: '35',
          name: '다목적 세정제',
          category: '세제',
          weight: 500,
          unit: 'ml',
          price: 7500,
          co2Saved: 55,
          plasticSaved: 26,
          origin: '국내산',
          manufacturer: '클린에코',
          productInfo: '천연 계면활성제, 시트러스 오일',
          certifications: ['생분해', '저자극']
        }
      ],
      totalPrice: 14700,
      totalCO2Saved: 103,
      totalPlasticSaved: 48
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

  // Monthly trend data (last 6 months)
  const monthlyTrend: MonthlyStats[] = [
    { month: '5월', refillCount: 2, co2Saved: 258, plasticSaved: 119, totalVolume: 2450, spending: 39950 },
    { month: '6월', refillCount: 2, co2Saved: 265, plasticSaved: 124, totalVolume: 2700, spending: 37700 },
    { month: '7월', refillCount: 3, co2Saved: 365, plasticSaved: 167, totalVolume: 4100, spending: 55150 },
    { month: '8월', refillCount: 2, co2Saved: 181, plasticSaved: 83, totalVolume: 1450, spending: 28700 },
    { month: '9월', refillCount: 4, co2Saved: 536, plasticSaved: 247, totalVolume: 4850, spending: 78000 },
    { month: '10월', refillCount: 2, co2Saved: 255, plasticSaved: 114, totalVolume: 1650, spending: 39950 }
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
    if (co2Saved >= 2000) return { tier: 'PLATINUM', nextTier: null, progress: 100, color: '#9333EA', nextGoal: 0 };
    if (co2Saved >= 1000) return { tier: 'GOLD', nextTier: 'PLATINUM', progress: ((co2Saved - 1000) / 1000) * 100, color: '#F59E0B', nextGoal: 2000 - co2Saved };
    if (co2Saved >= 500) return { tier: 'SILVER', nextTier: 'GOLD', progress: ((co2Saved - 500) / 500) * 100, color: '#9CA3AF', nextGoal: 1000 - co2Saved };
    return { tier: 'BRONZE', nextTier: 'SILVER', progress: (co2Saved / 500) * 100, color: '#CD7F32', nextGoal: 500 - co2Saved };
  };

  const tierInfo = getTierInfo(totalStats.totalCO2);

  // Environmental impact equivalents (based on real data)
  const getImpactEquivalents = (co2: number, plastic: number) => {
    return {
      treesPlanted: Math.floor(co2 / 22), // 22g CO2 absorbed per tree per day
      plasticBottles: Math.floor(plastic / 30), // Average 500ml bottle weighs ~30g
      drivingKm: (co2 / 120).toFixed(1), // ~120g CO2 per km driven (average car)
      waterSaved: Math.floor(plastic * 3.5), // ~3.5L water to produce 1g of plastic
      oilSaved: (plastic * 0.0062).toFixed(2) // ~6.2ml oil per 1g plastic
    };
  };

  const impactEquiv = getImpactEquivalents(totalStats.totalCO2, totalStats.totalPlastic);

  // Calculate savings vs conventional products
  const conventionalCost = totalStats.totalVolume * 0.035; // Average 35원/ml for conventional products
  const savings = conventionalCost - totalStats.totalSpent;
  const savingsPercentage = ((savings / conventionalCost) * 100);

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
        {/* Hero Summary Section */}
        <section className="hero-summary">
          <div className="hero-card">
            <div className="hero-icon">🌱</div>
            <div className="hero-content">
              <div className="hero-label">제로 웨이스트 실천 기간</div>
              <div className="hero-value">6개월</div>
              <div className="hero-description">2024년 5월부터 꾸준한 리필 생활</div>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-icon">♻️</div>
            <div className="hero-content">
              <div className="hero-label">이번 리필로 플라스틱 용기</div>
              <div className="hero-value">{impactEquiv.plasticBottles}개</div>
              <div className="hero-description">절약했어요! 지구를 위한 작은 실천 🌍</div>
            </div>
          </div>
        </section>

        {/* Summary Cards */}
        <section className="summary-section">
          <div className="summary-grid">
            <div className="summary-card">
              <div className="summary-icon">💰</div>
              <div className="summary-label">총 리필 지출</div>
              <div className="summary-value primary">{totalStats.totalSpent.toLocaleString()}</div>
              <div className="summary-unit">원</div>
              <div className="summary-trend positive">
                일반 제품 대비 {savingsPercentage.toFixed(0)}% 절약
              </div>
            </div>
            <div className="summary-card">
              <div className="summary-icon">🌍</div>
              <div className="summary-label">CO₂ 절감</div>
              <div className="summary-value">{(totalStats.totalCO2 / 1000).toFixed(2)}</div>
              <div className="summary-unit">킬로그램</div>
              <div className="summary-detail">승용차 {impactEquiv.drivingKm}km 주행량</div>
            </div>
            <div className="summary-card">
              <div className="summary-icon">♻️</div>
              <div className="summary-label">플라스틱 절감</div>
              <div className="summary-value">{totalStats.totalPlastic.toLocaleString()}</div>
              <div className="summary-unit">그램</div>
              <div className="summary-detail">500ml 병 {impactEquiv.plasticBottles}개 분량</div>
            </div>
            <div className="summary-card">
              <div className="summary-icon">💧</div>
              <div className="summary-label">총 리필량</div>
              <div className="summary-value">{(totalStats.totalVolume / 1000).toFixed(1)}</div>
              <div className="summary-unit">리터</div>
              <div className="summary-detail">{totalStats.totalPurchases}회 리필</div>
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
              <div className="equiv-source">출처: 산림청 탄소흡수량 기준</div>
            </div>
            <div className="equiv-card">
              <div className="equiv-icon">🚗</div>
              <div className="equiv-value">{impactEquiv.drivingKm}</div>
              <div className="equiv-label">주행거리(km) 절감</div>
              <div className="equiv-detail">승용차 기준 CO₂ 배출량</div>
              <div className="equiv-source">출처: 환경부 온실가스 배출계수</div>
            </div>
            <div className="equiv-card">
              <div className="equiv-icon">💧</div>
              <div className="equiv-value">{impactEquiv.waterSaved.toLocaleString()}</div>
              <div className="equiv-label">물 절약 (리터)</div>
              <div className="equiv-detail">플라스틱 생산 과정에서</div>
              <div className="equiv-source">출처: 한국환경산업기술원</div>
            </div>
            <div className="equiv-card">
              <div className="equiv-icon">🛢️</div>
              <div className="equiv-value">{impactEquiv.oilSaved}</div>
              <div className="equiv-label">석유 절약 (리터)</div>
              <div className="equiv-detail">플라스틱 원료 절감</div>
              <div className="equiv-source">출처: 한국석유화학협회</div>
            </div>
          </div>

          {tierInfo.nextTier && (
            <div className="tier-progress-container">
              <div className="tier-progress-header">
                <span className="tier-progress-label">
                  다음 등급까지 ({tierInfo.nextTier}) - {tierInfo.nextGoal}g CO₂ 더 필요해요
                </span>
                <span className="tier-progress-percent">{tierInfo.progress.toFixed(0)}%</span>
              </div>
              <div className="tier-progress-bar">
                <div className="tier-progress-fill" style={{ width: `${tierInfo.progress}%`, background: tierInfo.color }}></div>
              </div>
            </div>
          )}
        </section>

        {/* Monthly Trend Analysis */}
        <section className="monthly-trend-section">
          <div className="section-header">
            <h2 className="section-title">월별 리필 임팩트</h2>
            <div className="section-description">지난 6개월간의 리필 패턴 분석</div>
          </div>

          <div className="trend-charts-container">
            <div className="chart-card">
              <h3 className="chart-title">월별 리필 횟수</h3>
              <div className="bar-chart">
                {monthlyTrend.map((month, idx) => {
                  const maxValue = Math.max(...monthlyTrend.map(m => m.refillCount));
                  const height = (month.refillCount / maxValue) * 100;
                  return (
                    <div key={idx} className="bar-item">
                      <div className="bar-wrapper">
                        <div className="bar-value-label">{month.refillCount}회</div>
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
              <h3 className="chart-title">누적 CO₂ 절감량 (kg)</h3>
              <div className="line-chart">
                <div className="chart-y-axis">
                  <span>2.0</span>
                  <span>1.5</span>
                  <span>1.0</span>
                  <span>0.5</span>
                </div>
                <div className="chart-area">
                  <svg viewBox="0 0 300 150" className="chart-svg">
                    <polyline
                      points={cumulativeData.map((d, i) =>
                        `${(i / (cumulativeData.length - 1)) * 280 + 10},${150 - (d.cumCO2 / 2000) * 140}`
                      ).join(' ')}
                      className="chart-line"
                    />
                    {cumulativeData.map((d, i) => (
                      <circle
                        key={i}
                        cx={(i / (cumulativeData.length - 1)) * 280 + 10}
                        cy={150 - (d.cumCO2 / 2000) * 140}
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
            </div>

            <div className="chart-card">
              <h3 className="chart-title">누적 플라스틱 절감량 (g)</h3>
              <div className="line-chart">
                <div className="chart-y-axis">
                  <span>1000</span>
                  <span>750</span>
                  <span>500</span>
                  <span>250</span>
                </div>
                <div className="chart-area">
                  <svg viewBox="0 0 300 150" className="chart-svg">
                    <polyline
                      points={cumulativeData.map((d, i) =>
                        `${(i / (cumulativeData.length - 1)) * 280 + 10},${150 - (d.cumPlastic / 1000) * 140}`
                      ).join(' ')}
                      className="chart-line plastic"
                    />
                    {cumulativeData.map((d, i) => (
                      <circle
                        key={i}
                        cx={(i / (cumulativeData.length - 1)) * 280 + 10}
                        cy={150 - (d.cumPlastic / 1000) * 140}
                        r="4"
                        className="chart-point plastic"
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
            </div>
          </div>

          {/* Monthly Stats Table */}
          <div className="monthly-stats-table">
            <table>
              <thead>
                <tr>
                  <th>월</th>
                  <th>리필 횟수</th>
                  <th>총 용량</th>
                  <th>지출액</th>
                  <th>CO₂ 절감</th>
                  <th>플라스틱 절감</th>
                </tr>
              </thead>
              <tbody>
                {monthlyTrend.map((month, idx) => (
                  <tr key={idx}>
                    <td>{month.month}</td>
                    <td>{month.refillCount}회</td>
                    <td>{(month.totalVolume / 1000).toFixed(1)}L</td>
                    <td>{month.spending.toLocaleString()}원</td>
                    <td>{month.co2Saved}g</td>
                    <td>{month.plasticSaved}g</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Category Breakdown */}
        <section className="category-section">
          <div className="section-header">
            <h2 className="section-title">카테고리별 소비 분석</h2>
            <div className="section-description">품목별 리필 패턴과 환경 기여도</div>
          </div>

          <div className="category-grid">
            {sortedCategories.map((cat, idx) => (
              <div key={idx} className="category-card">
                <div className="category-header">
                  <span className="category-name">{cat.category}</span>
                  <span className="category-percentage">{cat.percentage.toFixed(1)}%</span>
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

        {/* Transactions Table */}
        <section className="transactions-section">
          <div className="section-header">
            <h2 className="section-title">거래 내역</h2>
            <div className="section-count">{mockReceipts.length}건</div>
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
                      <td className="col-store">
                        <div className="store-name">{receipt.storeName}</div>
                        <div className="store-location">{receipt.storeLocation}</div>
                      </td>
                      <td className="col-items">{receipt.items.length}개 품목</td>
                      <td className="col-volume">{totalVolume}{receipt.items[0].unit}</td>
                      <td className="col-co2">
                        <span className="metric-value">{receipt.totalCO2Saved}g</span>
                      </td>
                      <td className="col-plastic">
                        <span className="metric-value">{receipt.totalPlasticSaved}g</span>
                      </td>
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

        {/* Insights Section */}
        <section className="insights-section">
          <div className="section-header">
            <h2 className="section-title">소비 인사이트</h2>
          </div>

          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-icon">📊</div>
              <div className="insight-title">가장 많이 리필하는 품목</div>
              <div className="insight-value">{sortedCategories[0].category}</div>
              <div className="insight-detail">{sortedCategories[0].count}회 구매</div>
            </div>
            <div className="insight-card">
              <div className="insight-icon">💚</div>
              <div className="insight-title">평균 리필 주기</div>
              <div className="insight-value">약 13일</div>
              <div className="insight-detail">지난 6개월 기준</div>
            </div>
            <div className="insight-card">
              <div className="insight-icon">🎯</div>
              <div className="insight-title">가장 선호하는 매장</div>
              <div className="insight-value">그린리필 스테이션</div>
              <div className="insight-detail">강남점</div>
            </div>
            <div className="insight-card">
              <div className="insight-icon">⭐</div>
              <div className="insight-title">다음 등급까지</div>
              <div className="insight-value">
                {tierInfo.nextTier ? `${tierInfo.nextGoal}g` : '최고 등급 달성!'}
              </div>
              <div className="insight-detail">
                {tierInfo.nextTier ? `CO₂ 절감 필요` : '축하합니다!'}
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
                <div className="receipt-header-banner">
                  <div className="banner-icon">✓</div>
                  <div className="banner-text">결제가 완료되었습니다</div>
                </div>
                <div className="receipt-store-info">
                  <div className="store-name-large">{selectedReceipt.storeName}</div>
                  <div className="store-location">{selectedReceipt.storeLocation}</div>
                </div>
                <div className="info-row">
                  <span className="info-label">고객명</span>
                  <span className="info-value">박소연님</span>
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
                        <span className="item-meta-separator">|</span>
                        <span className="item-meta">
                          {item.manufacturer}
                        </span>
                      </div>

                      {item.productInfo && (
                        <div className="item-info-row">
                          <span className="info-icon">ℹ️</span>
                          <div className="item-info-content">
                            <span className="item-info-text">주요 성분</span>
                            <span className="item-info-value">{item.productInfo}</span>
                          </div>
                        </div>
                      )}

                      {item.origin && (
                        <div className="item-info-row">
                          <span className="info-icon">📦</span>
                          <div className="item-info-content">
                            <span className="item-info-text">원산지</span>
                            <span className="item-info-value">{item.origin}</span>
                          </div>
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
                          <span className="mini-icon">🌍</span>
                          <span className="mini-label">CO₂ 절감</span>
                          <span className="mini-value">{item.co2Saved}g</span>
                        </div>
                        <div className="item-impact-mini">
                          <span className="mini-icon">♻️</span>
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
                    {selectedReceipt.items.reduce((sum, item) => sum + item.weight, 0)}{selectedReceipt.items[0].unit}
                  </span>
                </div>
                <div className="summary-row highlight">
                  <span className="summary-label">결제 금액</span>
                  <span className="summary-value">{selectedReceipt.totalPrice.toLocaleString()}원</span>
                </div>
              </div>

              {/* Environmental Impact */}
              <div className="impact-section">
                <div className="impact-highlight">
                  <div className="impact-emoji">🌱</div>
                  <h4 className="impact-title">
                    이번 리필로 플라스틱 용기 {Math.floor(selectedReceipt.totalPlasticSaved / 30)}개를 절약했어요!
                  </h4>
                  <p className="impact-subtitle">지구를 위한 작은 실천, 감사합니다 🌍</p>
                </div>
                <div className="impact-grid">
                  <div className="impact-item">
                    <span className="impact-icon">🌍</span>
                    <span className="impact-label">CO₂ 절감</span>
                    <span className="impact-value">{selectedReceipt.totalCO2Saved}g</span>
                  </div>
                  <div className="impact-item">
                    <span className="impact-icon">♻️</span>
                    <span className="impact-label">플라스틱 절감</span>
                    <span className="impact-value">{selectedReceipt.totalPlasticSaved}g</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="receipt-actions">
                <button className="action-button primary" onClick={() => setSelectedReceipt(null)}>
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
