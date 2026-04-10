'use client';
import { useState } from 'react';
import styles from './page.module.css';

const PRODUCTS = [
  { id: 1, name: 'Urban Explorer Sneakers', category: 'Accessories', createdAt: '10 avr. 2026', createdTime: '9:00 am', stock: 0, stockLabel: 'out of stock', stockLevel: 0, price: '83,74 €', publish: 'Draft', img: '👟' },
  { id: 2, name: 'Classic Leather Loafers', category: 'Shoes', createdAt: '09 avr. 2026', createdTime: '8:00 am', stock: 72, stockLabel: '72 in stock', stockLevel: 100, price: '97,14 €', publish: 'Published', img: '👞' },
  { id: 3, name: 'Mountain Trekking Boots', category: 'Apparel', createdAt: '08 avr. 2026', createdTime: '7:00 am', stock: 10, stockLabel: '10 low stock', stockLevel: 14, price: '68,71 €', publish: 'Published', img: '🥾' },
  { id: 4, name: 'Elegance Stiletto Heels', category: 'Shoes', createdAt: '07 avr. 2026', createdTime: '6:00 am', stock: 72, stockLabel: '72 in stock', stockLevel: 100, price: '85,21 €', publish: 'Draft', img: '👠' },
  { id: 5, name: 'Comfy Running Shoes', category: 'Apparel', createdAt: '06 avr. 2026', createdTime: '5:00 am', stock: 10, stockLabel: '10 low stock', stockLevel: 14, price: '72,50 €', publish: 'Published', img: '👟' },
  { id: 6, name: 'Classic Oxford Shoes', category: 'Shoes', createdAt: '05 avr. 2026', createdTime: '4:00 am', stock: 45, stockLabel: '45 in stock', stockLevel: 62, price: '110,00 €', publish: 'Published', img: '👞' },
  { id: 7, name: 'Sport Basketball Shoes', category: 'Accessories', createdAt: '04 avr. 2026', createdTime: '3:00 am', stock: 0, stockLabel: 'out of stock', stockLevel: 0, price: '95,00 €', publish: 'Draft', img: '👟' },
  { id: 8, name: 'Casual Canvas Sneakers', category: 'Apparel', createdAt: '03 avr. 2026', createdTime: '2:00 am', stock: 33, stockLabel: '33 in stock', stockLevel: 46, price: '58,30 €', publish: 'Published', img: '👟' },
  { id: 9, name: 'Hiking Trail Boots', category: 'Accessories', createdAt: '02 avr. 2026', createdTime: '1:00 am', stock: 5, stockLabel: '5 low stock', stockLevel: 7, price: '79,99 €', publish: 'Draft', img: '🥾' },
  { id: 10, name: 'Platform Wedge Sandals', category: 'Shoes', createdAt: '01 avr. 2026', createdTime: '12:00 am', stock: 60, stockLabel: '60 in stock', stockLevel: 83, price: '64,00 €', publish: 'Published', img: '👡' },
];

type PublishFilter = 'All' | 'Published' | 'Draft';
type StockFilter = 'All' | 'In stock' | 'Low stock' | 'Out of stock';

export default function ProductsPage() {
  const [selected, setSelected] = useState<number[]>([]);
  const [stockFilter, setStockFilter] = useState<StockFilter>('All');
  const [publishFilter, setPublishFilter] = useState<PublishFilter>('All');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);

  const toggleAll = () => {
    if (selected.length === PRODUCTS.length) setSelected([]);
    else setSelected(PRODUCTS.map(p => p.id));
  };

  const toggleRow = (id: number) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const filtered = PRODUCTS.filter(p => {
    if (publishFilter !== 'All' && p.publish !== publishFilter) return false;
    if (stockFilter === 'In stock' && !(p.stock > 20)) return false;
    if (stockFilter === 'Low stock' && !(p.stock > 0 && p.stock <= 20)) return false;
    if (stockFilter === 'Out of stock' && p.stock !== 0) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const total = filtered.length;
  const start = (page - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  const getStockColor = (level: number) => {
    if (level === 0) return '#f87171';
    if (level < 20) return '#f59e0b';
    return '#22c55e';
  };

  return (
    <div className={styles.page}>
      {/* Filters bar */}
      <div className={styles.filtersBar}>
        <div className={styles.filterLeft}>
          <div className={styles.selectWrap}>
            <select className={styles.filterSelect} value={stockFilter} onChange={e => setStockFilter(e.target.value as StockFilter)}>
              <option value="All">Stock</option>
              <option value="In stock">In stock</option>
              <option value="Low stock">Low stock</option>
              <option value="Out of stock">Out of stock</option>
            </select>
            <svg className={styles.selectArrow} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
          </div>

          <div className={styles.selectWrap}>
            <select className={styles.filterSelect} value={publishFilter} onChange={e => setPublishFilter(e.target.value as PublishFilter)}>
              <option value="All">Publish</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>
            <svg className={styles.selectArrow} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
          </div>

          <div className={styles.searchWrap}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input
              className={styles.searchInput}
              placeholder="Rechercher..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.filterRight}>
          <button className={styles.actionBtn}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            Columns
          </button>
          <button className={styles.actionBtn}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
            Filters
          </button>
          <button className={styles.actionBtn}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Export
          </button>
          <button className={styles.actionBtn}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
            Settings
          </button>
        </div>
      </div>

      {/* Table */}
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.checkCol}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={selected.length === PRODUCTS.length}
                  onChange={toggleAll}
                />
              </th>
              <th>Product</th>
              <th>Create at</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Publish</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            {paginated.map(product => (
              <tr key={product.id} className={`${styles.row} ${selected.includes(product.id) ? styles.rowSelected : ''}`}>
                <td className={styles.checkCol}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={selected.includes(product.id)}
                    onChange={() => toggleRow(product.id)}
                  />
                </td>
                <td>
                  <div className={styles.productCell}>
                    <div className={styles.productThumb}>
                      <span style={{ fontSize: 22 }}>{product.img}</span>
                    </div>
                    <div className={styles.productInfo}>
                      <span className={styles.productName}>{product.name}</span>
                      <span className={styles.productCat}>{product.category}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.dateCell}>
                    <span className={styles.dateMain}>{product.createdAt}</span>
                    <span className={styles.dateSub}>{product.createdTime}</span>
                  </div>
                </td>
                <td>
                  <div className={styles.stockCell}>
                    <div className={styles.stockBar}>
                      <div
                        className={styles.stockFill}
                        style={{
                          width: `${product.stockLevel}%`,
                          background: getStockColor(product.stockLevel)
                        }}
                      />
                    </div>
                    <span className={styles.stockLabel} style={{ color: getStockColor(product.stockLevel) }}>
                      {product.stockLabel}
                    </span>
                  </div>
                </td>
                <td className={styles.priceCell}>{product.price}</td>
                <td>
                  <span className={`${styles.publishBadge} ${product.publish === 'Published' ? styles.publishedBadge : styles.draftBadge}`}>
                    {product.publish}
                  </span>
                </td>
                <td>
                  <button className={styles.moreBtn}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <div className={styles.pageInfo}>
          <span className={styles.pageLabel}>Lignes par page :</span>
          <select className={styles.pageSelect}>
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>
        <span className={styles.pageRange}>{start + 1}–{Math.min(start + perPage, total)} sur {total}</span>
        <div className={styles.pageBtns}>
          <button className={styles.pageBtn} disabled={page === 1} onClick={() => setPage(p => p - 1)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className={styles.pageBtn} disabled={start + perPage >= total} onClick={() => setPage(p => p + 1)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
