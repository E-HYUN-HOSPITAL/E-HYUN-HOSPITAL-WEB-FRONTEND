// Ad/analytics events (GA4, Meta Pixel, Naver)
type AnyFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: AnyFn;
    fbq?: AnyFn;
    wcs?: { cnv: (type: string, value: string) => unknown; inflow?: AnyFn };
    wcs_do?: (nasa: Record<string, unknown>) => void;
  }
}

const safe = (fn: () => void) => {
  try {
    fn();
  } catch {
    /* ignore tracking errors */
  }
};

/** SPA page view */
export const trackPageView = () => {
  safe(() => window.fbq?.("track", "PageView"));
  safe(() => {
    if (window.wcs && window.wcs_do) window.wcs_do({});
  });
};

/** phone click */
export const trackPhoneClick = () => {
  safe(() => window.gtag?.("event", "phone_call_click"));
  safe(() => window.fbq?.("track", "Contact", { method: "phone" }));
  safe(() => {
    if (window.wcs && window.wcs_do) {
      window.wcs_do({ cnv: window.wcs.cnv("4", "1") });
    }
  });
};

/** kakao click */
export const trackKakaoClick = () => {
  safe(() => window.gtag?.("event", "kakao_click"));
  safe(() => window.fbq?.("track", "Contact", { method: "kakao" }));
  safe(() => {
    if (window.wcs && window.wcs_do) {
      window.wcs_do({ cnv: window.wcs.cnv("5", "1") });
    }
  });
};

/** naver booking click */
export const trackNaverBookingClick = () => {
  safe(() => window.gtag?.("event", "naver_booking_click"));
  safe(() => window.fbq?.("track", "Contact", { method: "naver_booking" }));
};

/** directions click */
export const trackDirectionsClick = () => {
  safe(() => window.gtag?.("event", "directions_click"));
};
