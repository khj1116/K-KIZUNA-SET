
import React from 'react';

export const PrivacyPolicy: React.FC = () => (
  <div className="max-w-5xl mx-auto p-8 lg:p-16 bg-white rounded-[3rem] shadow-sm my-12 text-neutral-600 border border-neutral-100">
    <div className="text-center mb-16">
      <h1 className="text-3xl font-black text-neutral-900 mb-2">개인정보 처리방침 / プライバシーポリシー</h1>
      <p className="text-sm text-neutral-400 tracking-widest uppercase font-bold">Privacy Policy</p>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-sm leading-relaxed">
      {/* Korean Version */}
      <div className="space-y-8 pr-0 lg:pr-8 border-r-0 lg:border-r border-neutral-100">
        <h2 className="inline-block px-3 py-1 bg-neutral-900 text-white rounded font-bold mb-4">KOREAN (한국어)</h2>
        
        <section>
          <h3 className="text-lg font-bold mb-3 text-neutral-800">1. 개인정보의 수집 항목</h3>
          <p>K-Kizuna는 사용자가 AI 서비스를 이용하는 과정에서 다음과 같은 정보를 수집할 수 있습니다.</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>사용자가 입력한 대화 텍스트, 프로필 정보, 가계 설정값</li>
            <li>기기 정보 및 로그 데이터 (IP 주소, 브라우저 종류 등)</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-3 text-neutral-800">2. 이용 목적</h3>
          <p>수집된 정보는 오직 AI 분석 결과 제공 및 서비스 품질 개선을 위해서만 사용됩니다. 사용자가 입력한 데이터는 마케팅 용도로 제3자에게 제공되지 않습니다.</p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-3 text-neutral-800">3. 쿠키 및 Google AdSense</h3>
          <p>본 사이트는 Google AdSense를 사용하여 광고를 게재합니다. Google은 쿠키를 사용하여 사용자의 웹사이트 방문 기록을 기반으로 맞춤형 광고를 제공할 수 있습니다. 사용자는 Google 광고 설정에서 이를 거부할 수 있습니다.</p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-3 text-neutral-800">4. 데이터 보안</h3>
          <p>사용자가 직접 입력한 대화 내용은 분석 후 즉시 파기되거나 익명화 처리되어 안전하게 보호됩니다.</p>
        </section>
      </div>

      {/* Japanese Version */}
      <div className="space-y-8 pl-0 lg:pl-8">
        <h2 className="inline-block px-3 py-1 bg-rose-500 text-white rounded font-bold mb-4">JAPANESE (日本語)</h2>
        
        <section>
          <h3 className="text-lg font-bold mb-3 text-neutral-800">1. 個人情報の収集項目</h3>
          <p>K-Kizunaは、ユーザーがAIサービスを利用する過程で、以下の情報を収集する場合があります。</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>入力された対話テキスト、プロフィール情報、家計設定値</li>
            <li>端末情報およびログデータ（IPアドレス、ブラウザの種類など）</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-3 text-neutral-800">2. 利用目的</h3>
          <p>収集された情報は、AI分析結果の提供およびサービス品質の改善のためにのみ使用されます。入力されたデータがマーケティング目的で第三者に提供されることはありません。</p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-3 text-neutral-800">3. クッキーおよびGoogle AdSense</h3>
          <p>当サイトはGoogle AdSenseを使用して広告を掲載しています。Googleはクッキーを使用して、ユーザーのウェブサイト訪問履歴に基づきパーソナライズ広告を提供することがあります。ユーザーはGoogleの広告設定からこれを拒否できます。</p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-3 text-neutral-800">4. データセキュリティ</h3>
          <p>直接入力された対話内容は、分析後直ちに破棄されるか、匿名化処理されて安全に保護されます。</p>
        </section>
      </div>
    </div>
    
    <div className="mt-16 pt-8 border-t border-neutral-100 text-center">
      <p className="font-bold text-neutral-400">최종 수정일 / 最終更新日: 2024. 12. 24</p>
      <p className="text-xs mt-2">support@k-kizuna.com</p>
    </div>
  </div>
);

export const TermsOfUse: React.FC = () => (
  <div className="max-w-5xl mx-auto p-8 lg:p-16 bg-white rounded-[3rem] shadow-sm my-12 text-neutral-600 border border-neutral-100">
    <div className="text-center mb-16">
      <h1 className="text-3xl font-black text-neutral-900 mb-2">이용약관 / 利用規約</h1>
      <p className="text-sm text-neutral-400 tracking-widest uppercase font-bold">Terms of Use</p>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-sm leading-relaxed">
      {/* Korean Version */}
      <div className="space-y-8 pr-0 lg:pr-8 border-r-0 lg:border-r border-neutral-100">
        <h2 className="inline-block px-3 py-1 bg-neutral-900 text-white rounded font-bold mb-4">KOREAN (한국어)</h2>
        
        <section>
          <h3 className="text-lg font-bold mb-3 text-neutral-800">1. 서비스 정의</h3>
          <p>K-Kizuna는 AI 기술을 활용하여 한일 국제 커플 간의 문화 이해를 돕고 생활 시뮬레이션을 제공하는 정보성 웹 서비스입니다.</p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-3 text-neutral-800">2. 책임의 한계</h3>
          <p>본 서비스에서 제공하는 시뮬레이션 및 분석 결과는 입력 데이터를 바탕으로 한 예측치이며, 실제 생활이나 관계의 결과를 보장하지 않습니다. 최종적인 판단의 책임은 사용자 본인에게 있습니다.</p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-3 text-neutral-800">3. 금지 사항</h3>
          <p>부적절한 텍스트 입력, 시스템 공격, 타인의 정보 도용 등 서비스 운영에 방해가 되는 행위 시 이용이 영구 제한될 수 있습니다.</p>
        </section>
      </div>

      {/* Japanese Version */}
      <div className="space-y-8 pl-0 lg:pl-8">
        <h2 className="inline-block px-3 py-1 bg-indigo-600 text-white rounded font-bold mb-4">JAPANESE (日本語)</h2>
        
        <section>
          <h3 className="text-lg font-bold mb-3 text-neutral-800">1. サービスの定義</h3>
          <p>K-KizunaはAI技術を活用し、日韓国際カップル間の文化理解を助け、生活シミュレーションを提供する情報提供型ウェブサービスです。</p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-3 text-neutral-800">2. 免責事項</h3>
          <p>当サービスで提供されるシミュレーションおよび分析結果は、入力データに基づく予測値であり、実際の生活や関係の結果を保証するものではありません。最終的な判断の責任はユーザー本人にあります。</p>
        </section>

        <section>
          <h3 className="text-lg font-bold mb-3 text-neutral-800">3. 禁止事項</h3>
          <p>不適切なテキスト入力、システム攻撃、他人の情報の盗用など、運営の妨げとなる行為があった場合、利用が永久に制限されることがあります。</p>
        </section>
      </div>
    </div>
    
    <div className="mt-16 pt-8 border-t border-neutral-100 text-center">
      <p className="font-bold text-neutral-400">최종 수정일 / 最終更新日: 2024. 12. 24</p>
    </div>
  </div>
);
