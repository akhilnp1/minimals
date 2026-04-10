// 'use client';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import styles from './Sidebar.module.css';

// const NAV = [
//   { label: 'App', href: '/home', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg> },
//   { label: 'Ecommerce', href: '/ecommerce', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> },
//   { label: 'Analytics', href: '/analytics', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
//   { label: 'Banking', href: '/banking', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
//   { label: 'Booking', href: '/booking', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
//   { label: 'File', href: '/file', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
//   { label: 'Course', href: '/course', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> },
//   { label: 'User', href: '/user', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, hasChevron: true },
//   { label: 'Product', href: '/products', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>, hasChevron: true },
//   { label: 'Order', href: '/order', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>, hasChevron: true },
//   { label: '$', href: '/finance', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, hasChevron: true },
// ];

// export default function Sidebar() {
//   const pathname = usePathname();

//   return (
//     <aside className={styles.sidebar}>
//       <div className={styles.logoWrap}>
//         <Link href="/home" className={styles.logo}>
//           <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
//             <rect width="36" height="36" rx="10" fill="#1c252e"/>
//             <path d="M10 18L18 10L26 18L18 26L10 18Z" fill="#22c55e"/>
//             <path d="M14 18L18 14L22 18L18 22L14 18Z" fill="#fff"/>
//           </svg>
//         </Link>
//         <button className={styles.collapseBtn}>
//           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
//         </button>
//       </div>

//       <nav className={styles.nav}>
//         {NAV.map(item => {
//           const active = pathname === item.href || (item.href !== '/home' && pathname.startsWith(item.href));
//           return (
//             <Link key={item.href} href={item.href} className={`${styles.navItem} ${active ? styles.active : ''}`}>
//               <span className={styles.icon}>{item.icon}</span>
//               <span className={styles.navLabel}>{item.label}</span>
//               {item.hasChevron && (
//                 <svg className={styles.chevron} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
//               )}
//             </Link>
//           );
//         })}
//       </nav>
//     </aside>
//   );
// }


'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef } from 'react';
import styles from './Sidebar.module.css';

const NAV = [
  { label: 'App', href: '/home', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg> },
  { label: 'Ecommerce', href: '/ecommerce', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> },
  { label: 'Analytics', href: '/analytics', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { label: 'Banking', href: '/banking', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
  { label: 'Booking', href: '/booking', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { label: 'File', href: '/file', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
  { label: 'Course', href: '/course', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> },
  { label: 'User', href: '/user', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>, hasChevron: true },
  {
    label: 'Product', href: '/products',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
    hasChevron: true,
    submenu: [
      { label: 'List',    href: '/products' },
      { label: 'Details', href: '/products/details' },
      { label: 'Create',  href: '/products/create' },
      { label: 'Edit',    href: '/products/edit' },
    ],
  },
  { label: 'Order', href: '/order', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>, hasChevron: true },
  { label: '$', href: '/finance', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, hasChevron: true },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [submenuTop, setSubmenuTop] = useState(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string, e: React.MouseEvent<HTMLDivElement>) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    const rect = e.currentTarget.getBoundingClientRect();
    setSubmenuTop(rect.top);
    setOpenSubmenu(label);
  };

  const handleMouseLeave = () => {
    hideTimer.current = setTimeout(() => setOpenSubmenu(null), 120);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoWrap}>
        <Link href="/home" className={styles.logo}>
          <svg width="38" height="38" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="l1" x1="152" y1="167.79" x2="65.523" y2="259.624" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#007B55"/>
                  <stop offset="1" stopColor="#00AB55"/>
                </linearGradient>
                <linearGradient id="l2" x1="86" y1="128" x2="86" y2="384" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5BE584"/>
                  <stop offset="1" stopColor="#00AB55"/>
                </linearGradient>
                <linearGradient id="l3" x1="402" y1="288" x2="402" y2="384" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5BE584"/>
                  <stop offset="1" stopColor="#00AB55"/>
                </linearGradient>
              </defs>
              <path fill="url(#l1)" d="M86.352 246.358C137.511 214.183 161.836 245.017 183.168 285.573C165.515 317.716 153.837 337.331 148.132 344.418C137.373 357.788 125.636 367.911 111.202 373.752C80.856 388.014 43.132 388.681 14 371.048L86.352 246.358Z"/>
              <path fill="url(#l2)" fillRule="evenodd" clipRule="evenodd" d="M444.31 229.726C398.04 148.77 350.21 72.498 295.267 184.382C287.751 198.766 282.272 226.719 270 226.719V226.577C257.728 226.577 252.251 198.624 244.735 184.24C189.79 72.356 141.96 148.628 95.689 229.584C92.207 235.69 88.862 241.516 86 246.58C192.038 179.453 183.11 382.247 270 383.858V384C356.891 382.389 347.962 179.595 454 246.72C451.139 241.658 447.794 235.832 444.31 229.726Z"/>
              <path fill="url(#l3)" fillRule="evenodd" clipRule="evenodd" d="M450 384C476.509 384 498 362.509 498 336C498 309.491 476.509 288 450 288C423.491 288 402 309.491 402 336C402 362.509 423.491 384 450 384Z"/>
            </svg>
        </Link>
        <button className={styles.collapseBtn}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
      </div>

      <nav className={styles.nav}>
        {NAV.map(item => {
          const active = pathname === item.href || (item.href !== '/home' && pathname.startsWith(item.href));
          const submenuOpen = openSubmenu === item.label;

          if (item.submenu) {
            return (
              <div
                key={item.href}
                className={styles.navItemWrap}
                onMouseEnter={(e) => handleMouseEnter(item.label, e)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={item.href} className={`${styles.navItem} ${active ? styles.active : ''}`}>
                  <span className={styles.icon}>{item.icon}</span>
                  <span className={styles.navLabel}>{item.label}</span>
                  <svg className={styles.chevron} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                </Link>

                <div
                  className={`${styles.submenu} ${submenuOpen ? styles.submenuOpen : ''}`}
                  style={{ top: submenuTop }}
                  onMouseEnter={(e) => handleMouseEnter(item.label, e)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={styles.submenuTitle}>{item.label}</div>
                  {item.submenu.map(sub => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={`${styles.submenuItem} ${pathname === sub.href ? styles.submenuItemActive : ''}`}
                      onClick={() => setOpenSubmenu(null)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link key={item.href} href={item.href} className={`${styles.navItem} ${active ? styles.active : ''}`}>
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.navLabel}>{item.label}</span>
              {item.hasChevron && (
                <svg className={styles.chevron} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}