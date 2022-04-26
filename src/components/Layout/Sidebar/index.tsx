import React, { useRef } from 'react';
import { ChevronDown, ChevronRight } from 'components/Icon';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import sidenavRoutes from 'routes/sidebav.json';
import { Logo, Close } from 'components/Icon';
import { useOnClickOutside } from 'hooks/use-click-outside';

interface MenuEntryType {
  id: string;
  title: string;
  path: string;
  redirectPath?: string;
  routes?: Array<MenuEntryType>;
}

interface PageProps {
  menuIsOpen: boolean;
  toggleMenu: () => void;
}

function getNodeChilds(item: MenuEntryType): Array<MenuEntryType> {
  let childs: Array<MenuEntryType> = [];

  childs.push(item);

  (item.routes ?? []).forEach((routeItem) => {
    const innerChilds = getNodeChilds(routeItem);
    childs = [...childs, ...innerChilds];
  });

  return childs;
}

function Nav({
  items,
  identationLevel = 0,
  isMobile = false,
  toggleMenu,
}: {
  items: Array<MenuEntryType>;
  identationLevel?: number;
  isMobile?: boolean;
  toggleMenu?: () => void;
}) {
  const { pathname } = useRouter();

  function getCarretItem(item: MenuEntryType) {
    const CarretComponent =
      item.path === pathname || isNodeActive(item) ? ChevronDown : ChevronRight;
    return <CarretComponent className="w-4" />;
  }

  function isNodeActive(root: MenuEntryType) {
    const childs = getNodeChilds(root);
    return (
      isMobile ||
      pathname === root.path ||
      (childs ?? []).filter((route) => {
        return route.path === pathname;
      }).length > 0
    );
  }

  return (
    <nav>
      <ul>
        {items.map((link) => (
          <Link
            href={link.redirectPath ?? link.path}
            key={link.id}
            passHref={true}>
            <li
              className={cn('flex cursor-pointer flex-col')}
              onClick={() => {
                if (!isMobile || !toggleMenu) return;
                toggleMenu();
              }}>
              <div
                className={cn('flex items-center justify-between rounded p-3', {
                  'bg-sky-100 text-sky-600 dark:bg-gray-700':
                    link.path === pathname,
                  'font-medium': identationLevel === 0,
                  'text-sm': identationLevel > 0,
                  'hover:bg-gray-50 dark:hover:bg-gray-600':
                    link.path !== pathname,
                })}>
                <span
                  className={cn({
                    [`ml-${identationLevel}`]: identationLevel > 0,
                  })}>
                  {link.title}
                </span>
                {link.routes && getCarretItem(link)}
              </div>
              {link.routes?.length && isNodeActive(link) && (
                <div>
                  <Nav
                    items={link.routes}
                    identationLevel={identationLevel + 2}
                    toggleMenu={toggleMenu}
                  />
                </div>
              )}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default function Sidebar({ menuIsOpen, toggleMenu }: PageProps) {
  const navbarRef = useRef(null);

  useOnClickOutside(navbarRef, function () {
    if (!menuIsOpen) return;
    toggleMenu();
  });

  return (
    <>
      {/* Desktop Sidenav */}
      <div className="no-bg-scrollbar hidden px-5 pt-6 dark:border-gray-500 md:block">
        <Nav items={sidenavRoutes} />
      </div>
      {/* Mobile Sidenav */}
      <div
        className={cn(
          'absolute bottom-0 top-0 h-full w-full transition-all duration-300',
          {
            '-left-full': !menuIsOpen,
            'left-0 backdrop-blur-sm': menuIsOpen,
          }
        )}>
        <div
          ref={navbarRef}
          className={cn(
            'h-full w-10/12 bg-white px-4 shadow-2xl dark:bg-gray-800 dark:shadow-black'
          )}>
          <div className="flex h-[100px] items-center justify-between">
            <div className="w-10 cursor-pointer text-blue-800 dark:text-white">
              <Logo />
            </div>
            <div
              className="w-6 cursor-pointer text-gray-500"
              onClick={toggleMenu}>
              <Close />
            </div>
          </div>
          <div className="overflow-auto">
            <Nav items={sidenavRoutes} isMobile toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
    </>
  );
}
