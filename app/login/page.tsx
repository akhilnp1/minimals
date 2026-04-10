'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('demo@minimals.cc');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    router.push('/home');
  };

  return (
    <div className={styles.root}>
      {/* Top bar */}
      <div className={styles.topbar}>
        <div className={styles.logo}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="10" fill="#1c252e"/>
            <path d="M10 18L18 10L26 18L18 26L10 18Z" fill="#22c55e"/>
            <path d="M14 18L18 14L22 18L18 22L14 18Z" fill="#fff"/>
          </svg>
          <span className={styles.logoText}>minimals</span>
          <span className={styles.logoTilde}>.</span>
        </div>
        <div className={styles.topRight}>
          <span className={styles.helpText}>Need help?</span>
          <div className={styles.helpBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        {/* Left panel */}
        <div className={styles.left}>
          <div className={styles.leftInner}>
            <h1 className={styles.leftTitle}>Hi, Welcome back</h1>
            <p className={styles.leftSub}>More effectively with optimized workflows.</p>

            <div className={styles.illustration}>
              {/* Dashboard UI illustration */}
              <div className={styles.illCard} style={{ top: '30px', left: '20px', width: '160px', height: '130px', background: '#1e3a5f', borderRadius: '16px', padding: '16px' }}>
                <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '4px', marginBottom: '8px' }}/>
                <div style={{ width: '70%', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', marginBottom: '16px' }}/>
                <svg width="80" height="60" viewBox="0 0 80 60">
                  <polyline points="0,50 15,35 30,40 45,20 60,25 75,10" fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinejoin="round"/>
                  <circle cx="75" cy="10" r="4" fill="#22d3ee"/>
                </svg>
                {/* Hand pointer */}
                <div style={{ position: 'absolute', bottom: '-20px', left: '10px', fontSize: '32px' }}>🤚</div>
              </div>

              <div className={styles.illCard} style={{ top: '0px', right: '30px', width: '130px', height: '120px', background: '#fff', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}/>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }}/>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}/>
                </div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 40%, #3b82f6 70%, #1e3a5f 100%)', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: '18px', borderRadius: '50%', background: '#fff' }}/>
                  </div>
                </div>
              </div>

              <div className={styles.illCard} style={{ bottom: '20px', right: '10px', width: '150px', height: '90px', background: '#fff', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', padding: '14px' }}>
                <div style={{ width: '60%', height: '4px', background: '#e5e7eb', borderRadius: '4px', marginBottom: '12px' }}/>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '44px' }}>
                  {[30,50,40,70,55,80,65].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '3px', background: i % 2 === 0 ? '#22c55e' : '#00897b', opacity: 0.8 + i * 0.02 }}/>
                  ))}
                </div>
              </div>

              {/* Pencil */}
              <div style={{ position: 'absolute', top: '60px', right: '140px', fontSize: '28px', transform: 'rotate(-30deg)' }}>✏️</div>
              {/* Magnifier */}
              <div style={{ position: 'absolute', top: '20px', left: '170px', fontSize: '22px' }}>🔍</div>
            </div>

            {/* Brand logos row */}
            <div className={styles.brands}>
              {['❄️', '🔥', '⚠️', '🛡️', '⚡'].map((icon, i) => (
                <div key={i} className={styles.brandIcon}>{icon}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel — form */}
        <div className={styles.right}>
          <div className={styles.formWrap}>
            <h2 className={styles.formTitle}>Sign in to your account</h2>
            <p className={styles.formSub}>
              Don't have an account?{' '}
              <a href="#" className={styles.link}>Get started</a>
            </p>

            <div className={styles.demoHint}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00897b" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <span>Use <strong>demo@minimals.cc</strong> with password <strong>@2Minimal</strong></span>
            </div>

            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.field}>
                <label className={styles.label}>Email address</label>
                <input
                  type="email"
                  className={styles.input}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="hello@example.com"
                  required
                />
              </div>

              <div className={styles.field}>
                <div className={styles.labelRow}>
                  <label className={styles.label}>Password</label>
                  <a href="#" className={styles.forgot}>Forgot password?</a>
                </div>
                <div className={styles.inputWrap}>
                  <input
                    type={showPass ? 'text' : 'password'}
                    className={styles.input}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                  <button type="button" className={styles.eyeBtn} onClick={() => setShowPass(!showPass)}>
                    {showPass ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </div>
              </div>

              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 0.8s linear infinite' }}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                ) : 'Sign in'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
