'use client';

import React from 'react';
import Link from 'next/link';
import {
  XLogo,
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ProfileIcon,
  MoreIcon,
  MoonIcon,
  SunIcon
} from './icons';
import { useTheme } from '@/context/ThemeContext';

const Sidebar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="fixed left-0 top-0 h-screen" style={{ 
      backgroundColor: isDarkMode ? '#1B2B3A' : 'rgba(229, 224, 149, 0.23)',
      width: 'calc((100vw - 1280px) / 2 + 275px)'
    }}>
      <div className={`w-[275px] h-full flex flex-col py-2 px-4 overflow-y-auto ml-auto ${isDarkMode ? 'text-white' : ''}`}>
        <div className="mb-4 px-4">
          <Link href="/">
            <XLogo className={`w-8 h-8 ${isDarkMode ? 'text-white' : 'text-black'}`} />
          </Link>
        </div>

        <nav className="flex flex-col space-y-2">
          <Link href="/" className={`sidebar-link ${isDarkMode ? 'text-white hover:bg-gray-800' : ''}`}>
            <HomeIcon className={`sidebar-icon ${isDarkMode ? 'text-white fill-white' : ''}`} />
            <span>Accueil</span>
          </Link>
          <Link href="/explore" className={`sidebar-link ${isDarkMode ? 'text-white hover:bg-gray-800' : ''}`}>
            <ExploreIcon className={`sidebar-icon ${isDarkMode ? 'text-white fill-white' : ''}`} />
            <span>Explorer</span>
          </Link>
          <Link href="/notifications" className={`sidebar-link ${isDarkMode ? 'text-white hover:bg-gray-800' : ''}`}>
            <NotificationsIcon className={`sidebar-icon ${isDarkMode ? 'text-white fill-white' : ''}`} />
            <span>Notifications</span>
          </Link>
          <Link href="/messages" className={`sidebar-link ${isDarkMode ? 'text-white hover:bg-gray-800' : ''}`}>
            <MessagesIcon className={`sidebar-icon ${isDarkMode ? 'text-white fill-white' : ''}`} />
            <span>Messages</span>
          </Link>
          <Link href="/bookmarks" className={`sidebar-link ${isDarkMode ? 'text-white hover:bg-gray-800' : ''}`}>
            <BookmarksIcon className={`sidebar-icon ${isDarkMode ? 'text-white fill-white' : ''}`} />
            <span>Signets</span>
          </Link>
          <Link href="/profile" className={`sidebar-link ${isDarkMode ? 'text-white hover:bg-gray-800' : ''}`}>
            <ProfileIcon className={`sidebar-icon ${isDarkMode ? 'text-white fill-white' : ''}`} />
            <span>Profil</span>
          </Link>
          <Link href="/more" className={`sidebar-link ${isDarkMode ? 'text-white hover:bg-gray-800' : ''}`}>
            <MoreIcon className={`sidebar-icon ${isDarkMode ? 'text-white fill-white' : ''}`} />
            <span>Paramètres</span>
          </Link>
          <button
            onClick={toggleDarkMode}
            className={`sidebar-link flex items-center justify-between w-full ${isDarkMode ? 'text-white hover:bg-gray-800' : ''}`}
          >
            <div className="flex items-center gap-4">
              {isDarkMode ? (
                <SunIcon className={`sidebar-icon text-white fill-white`} />
              ) : (
                <MoonIcon className="sidebar-icon" />
              )}
              <span>Dark mode</span>
            </div>
            <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
              isDarkMode ? 'bg-blue-500' : 'bg-gray-300'
            }`}>
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                isDarkMode ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </div>
          </button>
        </nav>

        <button className={`p-3 rounded-full w-full font-bold mt-4 transition-colors ${isDarkMode ? 'bg-sidebar-darkButton hover:bg-sidebar-darkButtonHover text-white' : 'bg-sidebar-button text-white hover:bg-sidebar-buttonHover'}`}>
          Poster
        </button>

        <div className={`mt-auto mb-4 flex items-center p-3 rounded-full transition-colors ${isDarkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-sidebar-buttonHover'}`}>
          <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
          <div className="flex-1">
            <p className="font-bold text-sm">Naël Meignant</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>@nael_mgnt</p>
          </div>
          <div className={`text-xl ${isDarkMode ? 'text-gray-200' : ''}`}>•••</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
