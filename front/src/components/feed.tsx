'use client';

import React, { useEffect } from 'react';
import { VerifiedIcon, CommentIcon, RetweetIcon, LikeIcon, ShareIcon } from './icons';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';

const NavTabs = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex border-b ${isDarkMode ? 'border-gray-700 text-white' : 'border-gray-200'}`}>
      <div className={`flex-1 text-center cursor-pointer ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}>
        <button className={`py-4 px-4 border-b-4 border-blue-500 font-semibold text-white`}>
          Pour vous
        </button>
      </div>
      <div className={`flex-1 text-center cursor-pointer ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}>
        <button className={`py-4 px-4 ${isDarkMode ? 'text-white' : ''}`}>
          Abonnements
        </button>
      </div>
    </div>
  );
};

const PostInput = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`border-b p-4 flex ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="mr-4">
        <div className="w-12 h-12 rounded-full bg-gray-300"></div>
      </div>
      <div className="flex-1">
        <div className="mb-2">
          <input
            type="text"
            placeholder="Quoi de neuf ?!"
            className={`w-full p-2 outline-none text-xl ${isDarkMode ? 'bg-transparent text-white placeholder-gray-300' : ''}`}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-white hover:bg-blue-900/30' : 'hover:bg-blue-50 text-blue-400'}`}>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
              </svg>
            </button>
            <button className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-white hover:bg-blue-900/30' : 'hover:bg-blue-50 text-blue-400'}`}>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zm13 14.5c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5h-13c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13zM12 12.75a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zM7 9.75A.75.75 0 017.75 9h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 017 9.75zm1 6a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75z"></path>
              </svg>
            </button>
          </div>
          <button className={`bg-blue-500 text-white px-4 py-2 rounded-full font-bold transition-opacity hover:opacity-90 ${isDarkMode ? 'opacity-75' : 'opacity-50'}`}>
            Poster
          </button>
        </div>
      </div>
    </div>
  );
};

const Post = ({ author, handle, time, verified, content, image, comments, retweets, likes }: {
  author: string;
  handle: string;
  time: string;
  verified?: boolean;
  content: string;
  image?: string;
  comments: number;
  retweets: number;
  likes: number;
}) => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
  fetch('http://127.0.0.1:8000/post/test/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur réseau');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Erreur fetch :', error);
      });
  }, []);

  return (
    <Link href={`/${handle}/status/${Date.now()}`}>
      <div className={`border-b-[3px] p-4 cursor-pointer transition-colors ${
        isDarkMode 
          ? 'border-gray-700 bg-[#1B2B3A] text-white hover:bg-[#243447]' 
          : 'border-[#D1D2B0] hover:bg-[#E9E9E0]'
      }`} style={{ backgroundColor: isDarkMode ? '' : '#F1F1E8' }}>
        <div className="flex">
          <div className="mr-3">
            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          </div>
          <div className="flex-1">
            <div className="flex items-center mb-1">
              <span className="font-bold mr-1">{author}</span>
              {verified && <VerifiedIcon className={`w-4 h-4 mr-1 ${isDarkMode ? 'text-white' : ''}`} />}
              <span className={`mr-1 ${isDarkMode ? 'text-white' : 'text-gray-500'}`}>@{handle}</span>
              <span className={`mr-1 ${isDarkMode ? 'text-white' : 'text-gray-500'}`}>·</span>
              <span className={isDarkMode ? 'text-white' : 'text-gray-500'}>{time}</span>
              <button 
                className={`ml-auto ${isDarkMode ? 'text-white hover:text-blue-200' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={(e) => e.preventDefault()}
              >•••</button>
            </div>
            <div className="mb-3">
              <p className={isDarkMode ? 'text-white' : ''}>{content}</p>
            </div>
            {image && (
              <div className="mb-3 rounded-xl overflow-hidden relative h-80">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              </div>
            )}
            <div className="flex justify-between max-w-md">
              <button 
                className={`flex items-center group ${isDarkMode ? 'text-white hover:text-blue-200' : 'text-gray-500 hover:text-blue-500'}`}
                onClick={(e) => e.preventDefault()}
              >
                <div className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-blue-900/30' : 'hover:bg-blue-50'}`}>
                  <CommentIcon className="w-5 h-5" />
                </div>
                <span className="text-sm ml-1">{comments}</span>
              </button>
              <button 
                className={`flex items-center group ${isDarkMode ? 'text-white hover:text-green-200' : 'text-gray-500 hover:text-green-500'}`}
                onClick={(e) => e.preventDefault()}
              >
                <div className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-green-900/30' : 'hover:bg-green-50'}`}>
                  <RetweetIcon className="w-5 h-5" />
                </div>
                <span className="text-sm ml-1">{retweets}</span>
              </button>
              <button 
                className={`flex items-center group ${isDarkMode ? 'text-white hover:text-red-200' : 'text-gray-500 hover:text-red-500'}`}
                onClick={(e) => e.preventDefault()}
              >
                <div className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-red-900/30' : 'hover:bg-red-50'}`}>
                  <LikeIcon className="w-5 h-5" />
                </div>
                <span className="text-sm ml-1">{likes}</span>
              </button>
              <button 
                className={`flex items-center group ${isDarkMode ? 'text-white hover:text-blue-200' : 'text-gray-500 hover:text-blue-500'}`}
                onClick={(e) => e.preventDefault()}
              >
                <div className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-blue-900/30' : 'hover:bg-blue-50'}`}>
                  <ShareIcon className="w-5 h-5" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Feed = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`w-full h-full ${isDarkMode ? 'bg-[#1B2B3A]' : 'bg-white'}`}>
      <div className={`sticky top-0 z-20 ${isDarkMode ? 'bg-[#1B2B3A]' : 'bg-white'} border-x ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h1 className={`font-bold text-xl p-4 ${isDarkMode ? 'text-white' : ''}`}>Accueil</h1>
        <NavTabs />
      </div>

      <div className={`relative border-x ${isDarkMode ? 'border-gray-700 bg-[#1B2B3A]' : 'border-gray-200 bg-white'}`}>
        <PostInput />

        <div>
          <Post
            author="OTP LoL"
            handle="OTPLoL"
            time="5 min"
            verified
            content="Tout est encore possible ! 🔥"
            image="/post-image1.jpg"
            comments={1}
            retweets={5}
            likes={148}
          />

          <Post
            author="LoL Esports"
            handle="lolesports"
            time="2h"
            verified
            content="The second match of the day: @KarmineCorpvs @TOP.Esports. starts NOW!! #FST2025🔥"
            image="/post-image2.jpg"
            comments={12}
            retweets={43}
            likes={329}
          />

          <Post
            author="LeBron James"
            handle="KingJames"
            time="3h"
            verified
            content="Just a kid from Akron!! Another amazing night with the @Lakers 🏀 #StriveForGreatness🚀"
            comments={1485}
            retweets={3209}
            likes={45871}
          />

          <Post
            author="Steph Curry"
            handle="StephenCurry30"
            time="5h"
            verified
            content="Back in the gym today getting ready for the season! Every day is an opportunity to get better 💪 #DubNation"
            comments={985}
            retweets={2156}
            likes={28943}
          />

          <Post
            author="Tim Cook"
            handle="tim_cook"
            time="6h"
            verified
            content="Exciting day at Apple Park today. Can't wait to share what we've been working on. Stay tuned! #AppleEvent"
            image="/gallery-3.jpg"
            comments={3291}
            retweets={7890}
            likes={54209}
          />

          <Post
            author="Corey"
            handle="corey_tech"
            time="8h"
            content="Just tried the new React 19 features and they're game changing! Server components are going to revolutionize front-end development 🚀 #ReactDev"
            comments={28}
            retweets={54}
            likes={317}
          />
        </div>
      </div>
    </div>
  );
};

export default Feed;
