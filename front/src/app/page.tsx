'use client';

import Sidebar from '@/components/sidebar';
import Feed from '@/components/feed';
import RightSidebar from '@/components/right-sidebar';
import { useTheme } from '@/context/ThemeContext';

export default function Home() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#1B2B3A]' : 'bg-white'}`}>
      <div className="flex min-h-screen">
        <div className="max-w-7xl mx-auto flex w-full relative">
          <div className="w-[275px] flex-shrink-0 relative">
            <Sidebar />
          </div>

          <main className="w-[600px] flex-shrink-0 min-h-screen">
            <Feed />
          </main>

          <div className="w-[350px] ml-6 relative">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
