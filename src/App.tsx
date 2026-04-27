function App() {
  return (
    <main className="app-shell">
      <div className="background" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="/" aria-label="爱音的工具箱首页">
          爱音的工具箱
        </a>
      </header>

      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">AnoTools</p>
          <h1 id="home-title">用于制作发布一些小工具，开发中~~</h1>
        </div>
      </section>
    </main>
  );
}

export default App;
