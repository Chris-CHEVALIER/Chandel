'use client';

import React from 'react';
import { VerifiedIcon, CommentIcon, RetweetIcon, LikeIcon, ShareIcon } from '@/components/icons';
import { useTheme } from '@/context/ThemeContext';

const ProfileHeader = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`pb-3 ${isDarkMode ? 'text-white' : ''}`}>
      {/* Header with back button */}
      <div className="sticky top-0 z-10 flex items-center p-4 backdrop-blur bg-opacity-70 bg-white dark:bg-opacity-70 dark:bg-black">
        <button className="mr-6">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" />
          </svg>
        </button>
        <div>
          <h1 className="font-bold text-xl">Naël Meignant</h1>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>162 posts</p>
        </div>
      </div>

      {/* Profile banner */}
      <div className="h-48 relative bg-blue-500">
        {/* Replace the Image component with div and background-image for static export */}
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/profile-banner.jpg)' }}
        ></div>
      </div>

      {/* Profile picture and actions */}
      <div className="px-4">
        <div className="flex justify-between">
          <div className="relative -mt-16">
            <div className="w-32 h-32 rounded-full border-4 border-white dark:border-black overflow-hidden bg-gray-300">
              {/* Replace the Image component with div and background-image for static export */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: 'url(/profile-picture.jpg)' }}
              ></div>
            </div>
          </div>
          <div className="mt-4">
            <button className={`px-4 py-2 font-bold rounded-full border ${isDarkMode ? 'border-gray-600 text-white' : 'border-gray-300'}`}>
              Éditer le profil
            </button>
          </div>
        </div>

        {/* Profile info */}
        <div className="mt-4">
          <h2 className="text-xl font-bold flex items-center">
            Naël Meignant
            <VerifiedIcon className="w-5 h-5 ml-1" />
          </h2>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>@nael_mgnt</p>

          <p className="mt-3">
            Développeur Frontend • Design enthusiast • UI/UX • ReactJS & TypeScript
          </p>

          <div className="flex mt-3 text-sm">
            <div className={`flex items-center mr-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current mr-1">
                <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z" />
              </svg>
              <span>Paris, France</span>
            </div>
            <div className={`flex items-center mr-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current mr-1">
                <path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.727.547z" />
                <path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932.832 1.127 1.176 2.51.968 3.895s-.942 2.605-2.068 3.438l-3.53 2.608c-.73.53-1.58.8-2.43.8z" />
              </svg>
              <span>nael.dev</span>
            </div>
            <div className={`flex items-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current mr-1">
                <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z" />
              </svg>
              <span>A rejoint en janvier 2019</span>
            </div>
          </div>

          <div className="flex mt-3">
            <div className="mr-4">
              <span className="font-bold">729</span>
              <span className={`ml-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Abonnements</span>
            </div>
            <div>
              <span className="font-bold">2,481</span>
              <span className={`ml-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Abonnés</span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile navigation */}
      <div className="flex border-b mt-4 px-2">
        <div className={`flex-1 text-center cursor-pointer ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}>
          <button className={`py-4 px-4 border-b-4 border-blue-500 font-semibold ${isDarkMode ? 'text-white' : ''}`}>
            Posts
          </button>
        </div>
        <div className={`flex-1 text-center cursor-pointer ${isDarkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100'} transition-colors`}>
          <button className="py-4 px-4">
            Réponses
          </button>
        </div>
        <div className={`flex-1 text-center cursor-pointer ${isDarkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100'} transition-colors`}>
          <button className="py-4 px-4">
            Médias
          </button>
        </div>
        <div className={`flex-1 text-center cursor-pointer ${isDarkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100'} transition-colors`}>
          <button className="py-4 px-4">
            J'aime
          </button>
        </div>
      </div>
    </div>
  );
};

const ProfilePost = ({ content, time, image, comments, retweets, likes }: {
  content: string;
  time: string;
  image?: string;
  comments: number;
  retweets: number;
  likes: number;
}) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`border-b p-4 ${isDarkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}>
      <div className="flex">
        <div className="mr-3">
          <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
            {/* Replace the Image component with div and background-image for static export */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: 'url(/profile-picture.jpg)' }}
            ></div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center mb-1">
            <span className="font-bold mr-1">Naël Meignant</span>
            <VerifiedIcon className="w-4 h-4 mr-1" />
            <span className={`mr-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>@nael_mgnt</span>
            <span className={`mr-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>·</span>
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>{time}</span>
            <button className={`ml-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>•••</button>
          </div>
          <div className="mb-3">
            <p>{content}</p>
          </div>
          {image && (
            <div className="mb-3 rounded-xl overflow-hidden relative h-80">
              {/* Replace the Image component with div and background-image for static export */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
          )}
          <div className="flex justify-between max-w-md">
            <button className={`flex items-center group ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-500'}`}>
              <div className={`p-2 rounded-full ${isDarkMode ? 'group-hover:bg-blue-900/30' : 'group-hover:bg-blue-50'}`}>
                <CommentIcon className="w-5 h-5" />
              </div>
              <span className="text-sm ml-1">{comments}</span>
            </button>
            <button className={`flex items-center group ${isDarkMode ? 'text-gray-400 hover:text-green-400' : 'text-gray-500 hover:text-green-500'}`}>
              <div className={`p-2 rounded-full ${isDarkMode ? 'group-hover:bg-green-900/30' : 'group-hover:bg-green-50'}`}>
                <RetweetIcon className="w-5 h-5" />
              </div>
              <span className="text-sm ml-1">{retweets}</span>
            </button>
            <button className={`flex items-center group ${isDarkMode ? 'text-gray-400 hover:text-red-400' : 'text-gray-500 hover:text-red-500'}`}>
              <div className={`p-2 rounded-full ${isDarkMode ? 'group-hover:bg-red-900/30' : 'group-hover:bg-red-50'}`}>
                <LikeIcon className="w-5 h-5" />
              </div>
              <span className="text-sm ml-1">{likes}</span>
            </button>
            <button className={`flex items-center group ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-500'}`}>
              <div className={`p-2 rounded-full ${isDarkMode ? 'group-hover:bg-blue-900/30' : 'group-hover:bg-blue-50'}`}>
                <ShareIcon className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProfilePage() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`w-full border-l border-r ${isDarkMode ? 'bg-post-darkBg text-white border-gray-700' : 'bg-white border-gray-200'}`}>
      <ProfileHeader />

      <div>
        <ProfilePost
          content="Just finished implementing a new @reactjs component library with TypeScript. It's amazing how much faster development becomes with proper type checking! #TypeScript #ReactJS"
          time="2h"
          comments={12}
          retweets={28}
          likes={143}
        />

        <ProfilePost
          content="Beautiful day at the office today! #coding #webdev"
          time="4h"
          image="/gallery-4.jpg"
          comments={8}
          retweets={4}
          likes={89}
        />

        <ProfilePost
          content="La nouvelle mise à jour de Tailwind CSS est incroyable! Tellement d'options pour créer des interfaces élégantes rapidement. Si vous ne l'avez pas encore essayé, je vous le recommande fortement. #TailwindCSS #WebDev"
          time="1d"
          comments={5}
          retweets={15}
          likes={76}
        />

        <ProfilePost
          content="Paris est magnifique en automne 🍂"
          time="2d"
          image="/gallery-1.jpg"
          comments={23}
          retweets={7}
          likes={215}
        />

        <ProfilePost
          content="J'ai participé à un hackathon ce week-end et notre équipe a remporté le premier prix ! Tellement fier du travail accompli en seulement 48 heures. #Hackathon #Innovation"
          time="3d"
          comments={34}
          retweets={42}
          likes={327}
        />
      </div>
    </div>
  );
}
