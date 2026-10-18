import { NavLink, Route, Routes } from 'react-router-dom';

const modules = import.meta.glob('./pages/*Page.jsx', { eager: true });
const pages = Object.values(modules)
  .filter((m) => m.meta)
  .sort((a, b) => a.meta.title.localeCompare(b.meta.title));

function Home({ count }) {
  return (
    <section>
      <h2>Dashboard</h2>
      <p>Imitation jewellery management system with {count} modules.</p>
    </section>
  );
}

export default function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h1>Nakrani Imitation</h1>
        <nav>
          <NavLink to="/" end>Dashboard</NavLink>
          {pages.map(({ meta }) => (
            <NavLink key={meta.path} to={meta.path}>{meta.title}</NavLink>
          ))}
        </nav>
      </aside>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home count={pages.length} />} />
          {pages.map(({ meta, default: Page }) => (
            <Route key={meta.path} path={meta.path} element={<Page />} />
          ))}
        </Routes>
      </main>
    </div>
  );
}
