import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, ShieldCheck, X } from 'lucide-react';
import { getCookie, setCookie } from '@/lib/cookie';

const COOKIE_CONSENT_KEY = 'doctor_demo_cookie_consent';

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = getCookie(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay for smooth entry on first load
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    setCookie(COOKIE_CONSENT_KEY, 'all', { expires: 365 });
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    setCookie(COOKIE_CONSENT_KEY, 'essential', { expires: 180 });
    setIsVisible(false);
  };

  const handleDismiss = () => {
    // Dismiss for session (7 days)
    setCookie(COOKIE_CONSENT_KEY, 'dismissed', { expires: 7 });
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          aria-label="Cookie consent banner"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md md:max-w-lg z-50 bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl rounded-2xl p-4 sm:p-5 text-[#0F172A]"
        >
          <div className="flex items-start gap-3">
            {/* Cookie / Shield Icon */}
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] shrink-0">
              <Cookie className="w-5 h-5 text-[#0284C7]" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pr-6">
              <div className="flex items-center gap-2">
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#0F172A]">
                  Cookie & Privacy Preferences
                </h4>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3 h-3" /> Secure
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 mt-1 leading-relaxed">
                We use cookies to improve your booking experience, remember doctor preferences, and ensure optimal clinic site security.
              </p>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={handleDismiss}
              aria-label="Close cookie banner"
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-wrap items-center justify-end gap-2 pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={handleAcceptEssential}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all active:scale-95"
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="px-4 py-1.5 text-xs font-serif font-bold text-white bg-[#0284C7] hover:bg-[#0369A1] rounded-lg shadow-sm hover:shadow transition-all active:scale-95"
            >
              Accept All
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
