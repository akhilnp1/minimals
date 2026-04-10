'use client';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ProfileDrawer.module.css';

const MENU_ITEMS = [
  { label: 'Home', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { label: 'Profile', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  { label: 'Projects', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, badge: 3 },
  { label: 'Subscription', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
  { label: 'Security', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { label: 'Account settings', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg> },
];

const FRIENDS = ['👩‍🦰', '👩‍🦱', '🧑‍🦳'];

export default function ProfileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (open && drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open, onClose]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  const handleLogout = () => {
    onClose();
    router.push('/login');
  };

  return (
    <>
      {/* Backdrop */}
      <div className={`${styles.backdrop} ${open ? styles.backdropVisible : ''}`} onClick={onClose} />

      {/* Drawer */}
      <div ref={drawerRef} className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        {/* Close button */}
        <button className={styles.closeBtn} onClick={onClose}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Avatar */}
        <div className={styles.avatarSection}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatar}>
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#00897b" strokeWidth="1.2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <span className={styles.onlineDot} />
          </div>
          <h3 className={styles.userName}>Jaydon Frankie</h3>
          <p className={styles.userEmail}>demo@minimals.cc</p>
        </div>

        {/* Friend avatars */}
        <div className={styles.friendsRow}>
          {FRIENDS.map((f, i) => (
            <div key={i} className={styles.friendAvatar}>{f}</div>
          ))}
          <button className={styles.addFriend}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Menu */}
        <nav className={styles.menu}>
          {MENU_ITEMS.map(item => (
            <button key={item.label} className={styles.menuItem}>
              <span className={styles.menuIcon}>{item.icon}</span>
              <span className={styles.menuLabel}>{item.label}</span>
              {item.badge && <span className={styles.menuBadge}>{item.badge}</span>}
            </button>
          ))}
        </nav>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Logout */}
        <div className={styles.footer}>
          <div className={styles.gradientBar} />
          <button className={styles.logoutBtn} onClick={handleLogout}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
