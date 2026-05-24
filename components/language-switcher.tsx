'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState<'en' | 'ar'>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get language from localStorage or URL
    const saved = localStorage.getItem('language') as 'en' | 'ar' | null;
    const lang = saved || 'en';
    setCurrentLang(lang);
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setCurrentLang(newLang);
    localStorage.setItem('language', newLang);
    
    // Update HTML attributes
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('font-tajweel', newLang === 'ar');
    
    // Reload page to apply language change
    window.location.reload();
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors text-white font-medium"
      aria-label="Toggle language"
    >
      <span className="text-sm uppercase font-bold">{currentLang === 'en' ? 'AR' : 'EN'}</span>
    </button>
  );
}
