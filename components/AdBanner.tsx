
import React, { useEffect } from 'react';

interface AdBannerProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
}

const AdBanner: React.FC<AdBannerProps> = ({ slot, format = 'auto' }) => {
  useEffect(() => {
    try {
      // Fix: Access adsbygoogle via a casted window object to satisfy TypeScript
      const adsWindow = window as any;
      if (adsWindow && adsWindow.adsbygoogle) {
        (adsWindow.adsbygoogle = adsWindow.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  return (
    <div className="ad-container my-8 overflow-hidden flex flex-col items-center">
      {/* 실제 애드센스 광고 단위 */}
      <ins className="adsbygoogle"
           style={{ display: 'block', minWidth: '250px', minHeight: '90px' }}
           data-ad-client="ca-pub-2137108243977260"
           data-ad-slot={slot || "7421683490"} // 기본 슬롯 번호가 없을 경우를 대비한 임시 번호
           data-ad-format={format}
           data-full-width-responsive="true"></ins>
      
      {/* 개발 중 시각적 확인을 위한 플레이스홀더 (광고 로드 시 숨겨짐) */}
      <div className="ad-placeholder w-full max-w-4xl rounded-xl mt-2">
        <p className="text-[10px] text-neutral-300 uppercase tracking-widest">Sponsored Content</p>
      </div>
    </div>
  );
};

export default AdBanner;
