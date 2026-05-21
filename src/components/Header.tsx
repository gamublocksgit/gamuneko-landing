export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Gamu Neko home">
        <img src="./assets/app_icon.webp" alt="" />
        <span>Gamu Neko</span>
      </a>
      <nav aria-label="Main navigation">
        <a className="nav-button" href="#get-the-app">
          Get the App
        </a>
      </nav>
    </header>
  );
}
