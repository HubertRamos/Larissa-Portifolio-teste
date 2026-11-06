import React, { createContext, useContext, useEffect, useState, useTransition } from 'react';

export type RouteType =
  | { page: 'home' }
  | { page: 'gallery' }
  | { page: 'project'; id: string }
  | { page: '404' };

interface RouterContextType {
  path: string;
  route: RouteType;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

function parsePath(pathname: string): RouteType {
  // Remove trailing slash if not root
  const cleanPath = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  if (cleanPath === '' || cleanPath === '/') {
    return { page: 'home' };
  }

  if (cleanPath === '/projetos' || cleanPath === '/galeria') {
    return { page: 'gallery' };
  }

  if (cleanPath.startsWith('/projeto/')) {
    const id = cleanPath.replace('/projeto/', '');
    if (id) {
      return { page: 'project', id };
    }
  }

  return { page: '404' };
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [path, setPath] = useState<string>(() => window.location.pathname);
  const [, startTransition] = useTransition();

  useEffect(() => {
    const handlePopState = () => {
      startTransition(() => {
        setPath(window.location.pathname);
      });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    // Check if it's an anchor on the same page
    if (to.startsWith('#')) {
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Check if it has a hash attached (ex: /#sobre)
    if (to.startsWith('/#')) {
      const anchor = to.replace('/', '');
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/');
        startTransition(() => setPath('/'));
      }
      setTimeout(() => {
        const element = document.querySelector(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
      return;
    }

    // Standard path navigation
    if (to !== window.location.pathname) {
      window.history.pushState({}, '', to);
      startTransition(() => {
        setPath(to);
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const route = parsePath(path);

  return (
    <RouterContext.Provider value={{ path, route, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, className, onClick, ...rest }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    // If external link or open in new tab, let default behavior take place
    if (
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey
    ) {
      return;
    }

    e.preventDefault();
    navigate(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
};
