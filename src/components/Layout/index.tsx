import React, { useState, useEffect, useRef } from 'react';
import { Sunrise, Sunset, Logo, Hamburger, Close } from 'components/Icon';
import { useTheme } from 'next-themes';
import Tag from 'components/Tag';
import Sidebar from './Sidebar';

// DocSearch
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';
import Link from 'next/link';

interface PageProps {
  children: React.ReactNode;
}

function AlgoliaSearch() {
  return (
    <DocSearch
      indexName={process.env.ALGOLIA_INDEX_NAME}
      appId={process.env.ALGOLIA_APP_ID}
      apiKey={process.env.ALGOLIA_API_KEY}
    />
  );
}

export default function Layout({ children }: PageProps) {
  const { theme, setTheme, systemTheme } = useTheme();
  const isDarkTheme =
    theme === 'dark' || (theme === 'system' && systemTheme === 'dark');
  const [showChild, setShowChild] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  function toggleTheme() {
    setTheme(isDarkTheme ? 'light' : 'dark');
  }

  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <>
      <div className="grid h-full w-full grid-rows-[100px_1fr] text-gray-800 dark:bg-gray-800 dark:text-white md:grid-cols-[340px_1fr] md:grid-rows-[100px_1fr]">
        <div className="flex border-b px-6 dark:border-gray-500">
          <div className="en flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="h-6 w-6 cursor-pointer md:hidden"
                onClick={toggleMenu}>
                <Hamburger />
              </div>
              <Link href="/" passHref>
                <div className="w-10 cursor-pointer text-blue-800 dark:text-white">
                  <Logo />
                </div>
              </Link>
              <Tag variant="info">0.0.1</Tag>
            </div>
            <div
              className="h-6 w-6 cursor-pointer text-gray-400 dark:text-gray-100"
              onClick={toggleTheme}>
              {isDarkTheme ? <Sunrise /> : <Sunset />}
            </div>
          </div>
        </div>
        {/* Navbar */}
        <div className="hidden items-center border-b pr-20 dark:border-gray-500 md:flex">
          <AlgoliaSearch />
        </div>
        {/* Sidebar */}
        <Sidebar menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
        {/* Content */}
        <div className="overflow-auto py-4 px-5 md:px-20 md:py-6">
          {children}
        </div>
      </div>
    </>
  );
}
