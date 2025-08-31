import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <header className="header">
        <div className="container nav">
          <Link href="/" className="logo" style={{fontWeight:800}}>VERIDION23</Link>
          <nav className="nav-right">
            <Link href="/">Inicio</Link>
            <Link href="/series">Series</Link>
            <Link href="/cortos">Cortos</Link>
            <Link href="/peliculas">Películas</Link>
            <Link href="/trailers">Trailers</Link>
          </nav>
        </div>
      </header>
      <main className="container" style={{paddingTop:24, paddingBottom:24}}>
        {children}
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Veridion23 — Animación indie
      </footer>
    </div>
  );
}
