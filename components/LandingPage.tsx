
import React, { useState } from 'react';
import { UserType } from '../types';

interface LandingPageProps {
  onStart: (type: UserType) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  const heroImageUrl = "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop";

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 relative">
      <div className="absolute top-20 right-10 text-4xl sticker-float opacity-30 select-none">🌸</div>
      <div className="absolute bottom-40 left-10 text-4xl sticker-float opacity-30 select-none" style={{animationDelay: '2s'}}>🎨</div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-50 text-rose-600 rounded-full text-xs font-bold tracking-widest uppercase">
            <span className="animate-pulse">✨</span> Premium Cultural Bridge
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-black text-neutral-900 leading-tight">
              Bridging Hearts <br />
              Across the <span className="text-rose-500">Ocean</span>.
            </h1>
            <p className="text-xl font-bold text-neutral-400">
              한일 커플의 새로운 시작, AI 기술로 더 견고하게.<br/>
              <span className="text-sm font-medium">日韓カップルの新しい始まり、AI技術でもっと堅固に。</span>
            </p>
          </div>

          <p className="text-lg text-neutral-500 leading-relaxed max-w-lg">
            단순한 번역을 넘어 정(情)과 배려(配慮)의 마음을 연결합니다.<br/>
            한국에서의 새로운 삶, K-Kizuna가 함께 준비합니다.<br/>
            <span className="text-sm text-neutral-400">単なる翻訳を超え、「情」と「配慮」の心を繋ぎます。韓国での新しい生活、K-Kizunaが共に準備します。</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button 
              onClick={() => onStart('woman')}
              className="px-10 py-5 bg-rose-500 text-white rounded-[2rem] font-bold text-lg hover:bg-rose-600 shadow-xl shadow-rose-200 transition-all hover:-translate-y-1 flex flex-col items-center leading-tight"
            >
              <span>私は日本人女性です</span>
              <span className="text-xs opacity-80 mt-1">일본인 여성 시작하기 🇯🇵</span>
            </button>
            <button 
              onClick={() => onStart('man')}
              className="px-10 py-5 bg-indigo-600 text-white rounded-[2rem] font-bold text-lg hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all hover:-translate-y-1 flex flex-col items-center leading-tight"
            >
              <span>나는 한국인 남성입니다</span>
              <span className="text-xs opacity-80 mt-1">한국인 남성 시작하기 🇰🇷</span>
            </button>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-rose-100 rounded-full blur-3xl opacity-40"></div>
          <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-neutral-100 bg-neutral-50 aspect-square">
            <img 
              src={heroImageUrl} 
              alt="K-Kizuna Marriage Bridge" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* Why K-Kizuna Section - Bilingual for AdSense Quality */}
      <div className="bg-white rounded-[4rem] p-12 lg:p-20 shadow-sm border border-neutral-50 mb-32">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black mb-4 uppercase tracking-tighter">Why Choose K-Kizuna?</h2>
          <p className="text-rose-500 font-bold mb-6 italic">K-Kizunaを選ぶ理由</p>
          <div className="space-y-4 text-neutral-500 leading-relaxed">
            <p>
              국제 연애와 결혼은 서로 다른 문화와 생활 방식의 이해에서 시작됩니다. 
              K-Kizuna는 전문적인 데이터와 AI 분석을 통해 현실적인 가이드를 제공하여, 
              막연한 기대를 넘어선 지속 가능한 행복을 지원합니다.
            </p>
            <p className="text-sm text-neutral-400">
              国際恋愛と結婚は、互いの文化とライフスタイルの理解から始まります。
              K-Kizunaは専門的なデータとAI分析を通じて現実的なガイドを提供し、
              漠然とした期待を超えた持続可能な幸せをサポートします。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex gap-6">
            <div className="w-14 h-14 bg-rose-100 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl">🏡</div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-neutral-800">생활 안정성 분석 <span className="text-sm font-normal text-neutral-400 block mt-1">生活安定性の分析</span></h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-2">
                서울, 경기도 등 주요 지역의 실제 물가 데이터를 바탕으로 일본인 여성이 한국에서 생활할 때의 가계 경제를 정밀하게 예측합니다.
              </p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                ソウル、京畿道など主要地域の実際の物価データに基づき、日本人女性が韓国で生活する際の家計経済を精密に予測します。
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl">💬</div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-neutral-800">심층 문화 번역 <span className="text-sm font-normal text-neutral-400 block mt-1">深層文化翻訳</span></h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-2">
                직설적인 한국식 표현과 조심스러운 일본식 표현 사이의 오해를 줄이기 위해, 말의 맥락과 문화적 배경을 함께 전달합니다.
              </p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                直接的な韓国式の表現と慎重な日本式の表現の間の誤解を減らすため、言葉の文脈と文化的背景を併せて伝えます。
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl">📝</div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-neutral-800">전문적인 가치관 리포트 <span className="text-sm font-normal text-neutral-400 block mt-1">専門的な価値観レポート</span></h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-2">
                AI 인터뷰를 통해 결혼 후 발생할 수 있는 주요 쟁점들을 미리 확인하고, 서로의 적합성을 체계적으로 분석하여 리포트로 제공합니다.
              </p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                AIインタビューを通じて結婚後に発生しうる主要な争点を事前に確認し、互いの適合性を体系的に分析してレポートとして提供します。
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl">✨</div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-neutral-800">프로필 매력 최적화 <span className="text-sm font-normal text-neutral-400 block mt-1">プロフィールの魅力最適化</span></h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-2">
                각 문화권에서 선호하는 이미지와 말투를 분석하여, 사용자의 장점이 상대방에게 가장 매력적으로 다가갈 수 있도록 프로필을 재구성합니다.
              </p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                各文化圏で好まれるイメージと言葉遣いを分析し、ユーザーの長所が相手に最も魅力的に伝わるようプロフィールを再構成します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
