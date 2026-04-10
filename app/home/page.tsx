'use client';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import styles from './page.module.css';

const areaData = [
  { month: 'Jan', asia: 8, europe: 4, americas: 5 },
  { month: 'Feb', asia: 20, europe: 18, americas: 14 },
  { month: 'Mar', asia: 15, europe: 12, americas: 12 },
  { month: 'Apr', asia: 10, europe: 8, americas: 8 },
  { month: 'May', asia: 24, europe: 18, americas: 14 },
  { month: 'Jun', asia: 8, europe: 6, americas: 5 },
  { month: 'Jul', asia: 28, europe: 22, americas: 14 },
  { month: 'Aug', asia: 24, europe: 18, americas: 14 },
  { month: 'Sep', asia: 12, europe: 8, americas: 6 },
  { month: 'Oct', asia: 28, europe: 20, americas: 14 },
  { month: 'Nov', asia: 14, europe: 6, americas: 5 },
  { month: 'Dec', asia: 22, europe: 18, americas: 12 },
];

const donutData = [
  { name: 'Mac', value: 30, color: '#a3d9a5' },
  { name: 'Window', value: 25, color: '#4ade80' },
  { name: 'iOS', value: 20, color: '#16a34a' },
  { name: 'Android', value: 25, color: '#1c252e' },
];

const invoices = [
  { id: 'INV-1990', category: 'Android', price: '83,74 €', status: 'Paid' },
  { id: 'INV-1991', category: 'Mac', price: '97,14 €', status: 'Out of date' },
  { id: 'INV-1992', category: 'Windows', price: '68,71 €', status: 'Progress' },
  { id: 'INV-1993', category: 'Android', price: '85,21 €', status: 'Paid' },
  { id: 'INV-1994', category: 'Mac', price: '52,17 €', status: 'Paid' },
];

const relatedApps = [
  { name: 'Microsoft office 365', badge: 'Free', downloads: '9,91 k', size: '9,68 Mb', rating: '9,91 k', color: '#6366f1' },
  { name: 'Opera', badge: 'Free', downloads: '1,95 k', size: '1,9 Mb', rating: '1,95 k', color: '#ef4444' },
  { name: 'Adobe acrobat reader DC', badge: '68,71 €', downloads: '9,12 k', size: '8,91 Mb', rating: '9,12 k', color: '#ef4444', isPaid: true },
  { name: 'Joplin', badge: 'Free', downloads: '6,98 k', size: '6,82 Mb', rating: '6,98 k', color: '#4ade80' },
  { name: 'Topaz photo AI', badge: '52,17 €', downloads: '8,49 k', size: '8,29 Mb', rating: '8,49 k', color: '#6366f1', isPaid: true },
];

const countries = [
  { name: 'Germany', flag: '🇩🇪', users: '9,91 k', size: '1,95 k', apps: '9,12 k' },
  { name: 'England', flag: '🇬🇧', users: '1,95 k', size: '9,12 k', apps: '6,98 k' },
  { name: 'France', flag: '🇫🇷', users: '9,12 k', size: '6,98 k', apps: '8,49 k' },
  { name: 'Korean', flag: '🇰🇷', users: '6,98 k', size: '8,49 k', apps: '2,03 k' },
  { name: 'USA', flag: '🇺🇸', users: '8,49 k', size: '2,03 k', apps: '3,36 k' },
];

const authors = [
  { name: 'Jayvion Simon', likes: '9,91 k', rank: '🥇' },
  { name: 'Deja Brady', likes: '9,12 k', rank: '🥈' },
  { name: 'Lucian Obrien', likes: '1,95 k', rank: '🥉' },
];

const statusStyle: Record<string, string> = {
  Paid: styles.statusPaid,
  'Out of date': styles.statusOutdate,
  Progress: styles.statusProgress,
};

export default function HomePage() {
  const [activeRelated, setActiveRelated] = useState('Top 7 days');

  return (
    <div className={styles.page}>
      {/* Welcome banner + featured card */}
      <div className={styles.topRow}>
        <div className={styles.welcomeBanner}>
          <div className={styles.bannerText}>
            <h2 className={styles.bannerTitle}>Welcome back 👋<br/>Jaydon Frankie</h2>
            <p className={styles.bannerSub}>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</p>
            <button className={styles.goNowBtn}>Go now</button>
          </div>
          <div className={styles.bannerIllustration}>
            <svg width="120" height="100" viewBox="0 0 120 100">
              <rect x="10" y="20" width="80" height="55" rx="6" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
              <rect x="20" y="30" width="60" height="8" rx="3" fill="rgba(255,255,255,0.3)"/>
              <rect x="20" y="44" width="40" height="5" rx="2.5" fill="rgba(255,255,255,0.2)"/>
              <polyline points="20,65 35,50 50,58 65,42 80,48" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="80" cy="48" r="3" fill="#4ade80"/>
              {/* Paper airplane */}
              <path d="M100 20L85 35L90 38L100 20Z" fill="#4ade80"/>
              <path d="M85 35L88 45L90 38L85 35Z" fill="#22c55e"/>
            </svg>
            <div className={styles.bannerChar}>👩‍💻</div>
          </div>
        </div>

        <div className={styles.featuredCard}>
          <div className={styles.featuredDots}>
            <span/><span className={styles.dotActive}/><span/>
          </div>
          <div style={{ flex: 1, background: 'linear-gradient(135deg, #0f766e 0%, #065f46 100%)', borderRadius: 8, padding: '16px', minHeight: 120 }}>
            <div className={styles.featuredBadge}>FEATURED APP</div>
            <h3 className={styles.featuredTitle}>Understanding Blockchain Techn...</h3>
            <p className={styles.featuredSub}>The children giggled with joy as they ran throu...</p>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className={styles.statsRow}>
        <StatCard title="Total active users" value="18 765" change="+2,6 %" positive trend={[40,55,45,60,50,65,55,70,60,75,65,80]} color="#22c55e" />
        <StatCard title="Total installed" value="4 876" change="+0,2 %" positive trend={[30,40,35,50,40,55,45,60,50,65,55,70]} color="#22d3ee" />
        <StatCard title="Total downloads" value="678" change="-0,1 %" positive={false} trend={[70,60,65,50,60,45,55,40,50,35,45,30]} color="#f97316" />
      </div>

      {/* Charts row */}
      <div className={styles.chartsRow}>
        {/* Donut */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Current download</h3>
          <p className={styles.cardSub}>Downloaded by operating system</p>
          <div className={styles.donutWrap}>
            <PieChart width={200} height={200}>
              <Pie data={donutData} cx={100} cy={100} innerRadius={60} outerRadius={90} paddingAngle={2} dataKey="value" startAngle={90} endAngle={-270}>
                {donutData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
            </PieChart>
            <div className={styles.donutCenter}>
              <span className={styles.donutLabel}>Total</span>
              <span className={styles.donutValue}>188 245</span>
            </div>
          </div>
          <div className={styles.donutLegend}>
            {donutData.map(d => (
              <div key={d.name} className={styles.legendItem}>
                <span className={styles.legendDot} style={{ background: d.color }}/>
                <span>{d.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bar chart */}
        <div className={styles.card} style={{ flex: 1 }}>
          <div className={styles.cardHeader}>
            <div>
              <h3 className={styles.cardTitle}>Area installed</h3>
              <p className={styles.cardSub}>(+43%) than last year</p>
            </div>
            <select className={styles.yearSelect}><option>2023</option><option>2024</option></select>
          </div>
          <div className={styles.legendRow}>
            <div className={styles.legendItem}><span className={styles.legendDot} style={{ background: '#1c252e' }}/>Asia</div>
            <div className={styles.legendItem}><span className={styles.legendDot} style={{ background: '#f59e0b' }}/>Europe</div>
            <div className={styles.legendItem}><span className={styles.legendDot} style={{ background: '#22d3ee' }}/>Americas</div>
          </div>
          <div className={styles.barValues}>
            <span>1,23 k</span><span>6,79 k</span><span>1,01 k</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={areaData} barSize={8} barCategoryGap="30%">
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#919eab' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#919eab' }} axisLine={false} tickLine={false} domain={[0, 80]} ticks={[0,20,40,60,80]} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e5e8eb' }} />
              <Bar dataKey="asia" fill="#1c252e" radius={[4,4,0,0]} stackId="a" />
              <Bar dataKey="europe" fill="#f59e0b" radius={[0,0,0,0]} stackId="a" />
              <Bar dataKey="americas" fill="#22d3ee" radius={[4,4,0,0]} stackId="a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom row */}
      <div className={styles.bottomRow}>
        {/* Invoices */}
        <div className={styles.card} style={{ flex: 1 }}>
          <h3 className={styles.cardTitle}>New Invoices</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th/>
              </tr>
            </thead>
            <tbody>
              {invoices.map(inv => (
                <tr key={inv.id}>
                  <td className={styles.invId}>{inv.id}</td>
                  <td>{inv.category}</td>
                  <td>{inv.price}</td>
                  <td><span className={`${styles.statusBadge} ${statusStyle[inv.status]}`}>{inv.status}</span></td>
                  <td>
                    <button className={styles.moreBtn}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.viewAll}>
            <a href="#">View all <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
          </div>
        </div>

        {/* Related apps */}
        <div className={styles.relatedCard}>
          <h3 className={styles.cardTitle}>Related applications</h3>
          <div className={styles.relatedTabs}>
            {['Top 7 days', 'Top 30 days', 'All times'].map(tab => (
              <button key={tab} className={`${styles.relatedTab} ${activeRelated === tab ? styles.relatedTabActive : ''}`} onClick={() => setActiveRelated(tab)}>{tab}</button>
            ))}
          </div>
          <div className={styles.appList}>
            {relatedApps.map(app => (
              <div key={app.name} className={styles.appItem}>
                <div className={styles.appIcon} style={{ background: app.color + '22' }}>
                  <span style={{ fontSize: 18 }}>📦</span>
                </div>
                <div className={styles.appInfo}>
                  <div className={styles.appNameRow}>
                    <span className={styles.appName}>{app.name}</span>
                    <span className={`${styles.appBadge} ${app.isPaid ? styles.appBadgePaid : ''}`}>{app.badge}</span>
                  </div>
                  <div className={styles.appMeta}>
                    <span>⬇ {app.downloads}</span>
                    <span>• 📦 {app.size}</span>
                    <span>• ⭐ {app.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Countries + Authors + Conversion */}
      <div className={styles.lastRow}>
        <div className={styles.card} style={{ flex: 1 }}>
          <h3 className={styles.cardTitle}>Top installed countries</h3>
          <div className={styles.countriesList}>
            {countries.map(c => (
              <div key={c.name} className={styles.countryRow}>
                <span className={styles.flagEmoji}>{c.flag}</span>
                <span className={styles.countryName}>{c.name}</span>
                <span className={styles.countryMeta}>👥 {c.users}</span>
                <span className={styles.countryMeta}>📦 {c.size}</span>
                <span className={styles.countryMeta}>📱 {c.apps}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card} style={{ flex: 1 }}>
          <h3 className={styles.cardTitle}>Top authors</h3>
          <div className={styles.authorList}>
            {authors.map(a => (
              <div key={a.name} className={styles.authorRow}>
                <div className={styles.authorAvatar}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{a.name}</span>
                  <span className={styles.authorLikes}>❤️ {a.likes}</span>
                </div>
                <span className={styles.authorRank}>{a.rank}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.statsCards}>
          <div className={styles.convCard} style={{ background: 'linear-gradient(135deg, #00897b, #004d40)' }}>
            <div className={styles.convCircle}>
              <svg width="70" height="70" viewBox="0 0 70 70">
                <circle cx="35" cy="35" r="28" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="6"/>
                <circle cx="35" cy="35" r="28" fill="none" stroke="#4ade80" strokeWidth="6" strokeDasharray={`${0.48 * 2 * Math.PI * 28} ${2 * Math.PI * 28}`} strokeLinecap="round" transform="rotate(-90 35 35)"/>
              </svg>
              <span className={styles.convPct}>48%</span>
            </div>
            <div className={styles.convInfo}>
              <span className={styles.convValue}>38 566</span>
              <span className={styles.convLabel}>Conversion</span>
            </div>
          </div>
          <div className={styles.convCard} style={{ background: 'linear-gradient(135deg, #0284c7, #0c4a6e)' }}>
            <div className={styles.convCircle}>
              <svg width="70" height="70" viewBox="0 0 70 70">
                <circle cx="35" cy="35" r="28" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="6"/>
                <circle cx="35" cy="35" r="28" fill="none" stroke="#22d3ee" strokeWidth="6" strokeDasharray={`${0.75 * 2 * Math.PI * 28} ${2 * Math.PI * 28}`} strokeLinecap="round" transform="rotate(-90 35 35)"/>
              </svg>
              <span className={styles.convPct}>75%</span>
            </div>
            <div className={styles.convInfo}>
              <span className={styles.convValue}>55 566</span>
              <span className={styles.convLabel}>Applications</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, positive, trend, color }: any) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statLeft}>
        <span className={styles.statTitle}>{title}</span>
        <span className={styles.statValue}>{value}</span>
        <div className={`${styles.statChange} ${positive ? styles.changePos : styles.changeNeg}`}>
          {positive
            ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15"/></svg>
            : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
          }
          <span>{change} last 7 days</span>
        </div>
      </div>
      <div className={styles.sparkWrap}>
        <svg width="80" height="48" viewBox="0 0 80 48">
          {trend.map((v: number, i: number) => {
            if (i === 0) return null;
            const prev = trend[i-1];
            const max = Math.max(...trend);
            const x1 = ((i-1) / (trend.length-1)) * 78 + 1;
            const y1 = 46 - (prev/max) * 42;
            const x2 = (i / (trend.length-1)) * 78 + 1;
            const y2 = 46 - (v/max) * 42;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2.5" strokeLinecap="round"/>;
          })}
        </svg>
      </div>
    </div>
  );
}
