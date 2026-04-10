'use client';
import { useState } from 'react';
import ProfileDrawer from './ProfileDrawer';
import styles from './Topbar.module.css';

export default function Topbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className={styles.topbar}>
        <div className={styles.left}>
          <div className={styles.workspace}>
            <div className={styles.wsIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="9" height="9" rx="2" fill="#4ade80"/>
                <rect x="13" y="2" width="9" height="9" rx="2" fill="#22d3ee" opacity=".7"/>
                <rect x="2" y="13" width="9" height="9" rx="2" fill="#f472b6" opacity=".7"/>
                <rect x="13" y="13" width="9" height="9" rx="2" fill="#fb923c" opacity=".7"/>
              </svg>
            </div>
            <span className={styles.wsName}>Team 1</span>
            <span className={styles.wsBadge}>Free</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-muted)' }}><path d="M7 10l5 5 5-5"/></svg>
          </div>
        </div>

        <div className={styles.right}>
          <button className={styles.searchBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <span className={styles.searchText}>Search...</span>
            <kbd className={styles.kbd}>⌘K</kbd>
          </button>

          <button className={styles.iconBtn}>
            <img src="https://flagcdn.com/w20/fr.png" alt="FR" style={{ width: 20, height: 14, borderRadius: 2, objectFit: 'cover' }} />
          </button>

          <button className={styles.iconBtn} style={{ position: 'relative' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            <span className={styles.badge}>4</span>
          </button>

          <button className={styles.iconBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </button>

          <button className={styles.iconBtn} style={{ position: 'relative' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
            <span className={styles.dotRed}/>
          </button>

          {/* Profile avatar — opens drawer */}
          <button
            className={`${styles.avatar} ${drawerOpen ? styles.avatarActive : ''}`}
            onClick={() => setDrawerOpen(true)}
            title="Open profile"
          >
            <div className={styles.avatarInner}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
          </button>
        </div>
      </header>

      <ProfileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
