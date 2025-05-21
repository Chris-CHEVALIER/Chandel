'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExploreIcon } from './icons';
import { useTheme } from '@/context/ThemeContext';

const SearchBar = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="relative mb-4">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <ExploreIcon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Rechercher sur Chandel'Y"
        className={`h-12 pl-11 pr-4 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'
        }`}
      />
    </div>
  );
};

interface ProfileSuggestionProps {
  name: string;
  handle: string;
  isVerified?: boolean;
  avatarSrc?: string;
}

const ProfileSuggestion = ({ name, handle, isVerified, avatarSrc }: ProfileSuggestionProps) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex items-center p-3 transition-colors ${
      isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
    }`}>
      <div className="mr-3">
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center">
          <span className="font-bold text-sm truncate">{name}</span>
          {isVerified && (
            <svg className="ml-1 h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
            </svg>
          )}
        </div>
        <div className={`text-sm truncate ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>@{handle}</div>
      </div>
      <button className={`py-2 px-4 rounded-full font-medium text-white transition-colors ${
        isDarkMode
          ? 'bg-rightbar-darkButton hover:bg-rightbar-darkButtonHover'
          : 'bg-rightbar-button hover:bg-rightbar-buttonHover'
      }`}>
        Suivre
      </button>
    </div>
  );
};

const Gallery = () => {
  const images = [
    '/gallery-1.jpg',
    '/gallery-2.jpg',
    '/gallery-3.jpg',
    '/gallery-4.jpg',
    '/gallery-5.jpg',
    '/gallery-6.jpg',
    '/gallery-7.jpg',
    '/gallery-8.jpg',
  ];

  return (
    <div className="p-3">
      <div className="grid grid-cols-3 gap-1">
        {images.slice(0, 3).map((src, index) => (
          <div key={index} className="aspect-square relative rounded-md overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            ></div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-1 mt-1">
        {images.slice(3, 5).map((src, index) => (
          <div key={index} className="aspect-square relative rounded-md overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            ></div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-1 mt-1">
        {images.slice(5, 8).map((src, index) => (
          <div key={index} className="aspect-square relative rounded-md overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RightSidebar = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`sticky top-0 w-[350px] h-screen overflow-y-auto ${isDarkMode ? 'bg-[#1B2B3A]' : 'bg-white'}`}>
      <div className={`p-4 ${isDarkMode ? 'bg-[#1B2B3A]' : 'bg-white'}`}>
        <SearchBar />

        <div className={`rounded-2xl mb-4 overflow-hidden ${
          isDarkMode ? 'bg-rightbar-darkSection' : 'bg-rightbar-section'
        }`}>
          <h2 className="font-bold text-xl p-4">Abonnez-vous à Premium</h2>
          <div className="p-4 pt-0">
            <p className="text-sm mb-3">Abonnez-vous pour profiter de nouvelles fonctionnalités et recevoir une part des revenus si vous respectez les critères.</p>
            <button className={`py-2 px-4 rounded-full font-medium text-white transition-colors ${
              isDarkMode
                ? 'bg-rightbar-darkButton hover:bg-rightbar-darkButtonHover'
                : 'bg-rightbar-button hover:bg-rightbar-buttonHover'
            }`}>
              Souscrire
            </button>
          </div>
        </div>

        <div className={`rounded-2xl mb-4 overflow-hidden ${
          isDarkMode ? 'bg-rightbar-darkSection' : 'bg-rightbar-section'
        }`}>
          <h2 className="font-bold text-xl p-4">Suggestions</h2>
          <div>
            <ProfileSuggestion
              name="Oumaima Bougrine"
              handle="oumaima_bgrn"
              isVerified
            />
            <ProfileSuggestion
              name="Souhail Khair"
              handle="souhail_khair"
              isVerified
            />
            <ProfileSuggestion
              name="Téo Artmeier"
              handle="teo_artm"
            />
            <div className="p-4 text-blue-500 hover:underline">
              <Link href="/explore/people">Voir plus</Link>
            </div>
          </div>
        </div>

        <div className={`rounded-2xl mb-4 overflow-hidden ${
          isDarkMode ? 'bg-rightbar-darkSection' : 'bg-rightbar-section'
        }`}>
          <h2 className="font-bold text-xl p-4">Ma galerie</h2>
          <Gallery />
        </div>

        <div className={`text-xs mt-4 px-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <div className="flex flex-wrap">
            <Link href="/conditions" className="mr-2 mb-1 hover:underline">Conditions D'Utilisation</Link>
            <Link href="/privacy" className="mr-2 mb-1 hover:underline">Politique De Confidentialité</Link>
            <Link href="/cookies" className="mr-2 mb-1 hover:underline">Cookies</Link>
            <Link href="/accessibility" className="mr-2 mb-1 hover:underline">Accessibilité</Link>
            <Link href="/ads" className="mb-1 hover:underline">Infos Sur La Publicité</Link>
            <Link href="/more" className="mb-1 hover:underline">Plus ⋯</Link>
          </div>
          <div className="mt-1">© 2025 Chandel'Y, Inc.</div>
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
