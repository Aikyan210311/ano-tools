import { useEffect, useMemo, useState } from 'react';

const imageModules = import.meta.glob('../images/*.{jpg,jpeg,png,webp,avif,gif,JPG,JPEG,PNG,WEBP,AVIF,GIF}', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>;

type Slide = {
  name: string;
  src: string;
};

function getFileName(path: string) {
  return decodeURIComponent(path.split('/').pop() ?? 'toolbox image');
}

function App() {
  const slides = useMemo<Slide[]>(
    () =>
      Object.entries(imageModules).map(([path, src]) => ({
        name: getFileName(path),
        src,
      })),
    [],
  );
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <main className="home-shell">
      <div className="stage-bg" aria-hidden="true" />

      <header className="site-header" aria-label="站点页眉">
        <a className="brand-mark" href="/" aria-label="爱音的工具箱首页">
          <span className="brand-mark__cn">爱音的工具箱</span>
          <span className="brand-mark__en">AnoTools</span>
        </a>

        <button className="menu-button" type="button" aria-label="菜单">
          <span className="menu-button__line" />
          <span className="menu-button__line" />
          <span className="menu-button__text">MENU</span>
        </button>
      </header>

      <section className="hero-stage" aria-label="首页主视觉">
        <div className="circle-stage" aria-label="图片轮播">
          <span className="orbit orbit--one" aria-hidden="true" />
          <span className="orbit orbit--two" aria-hidden="true" />
          <span className="neon-cloud neon-cloud--left" aria-hidden="true" />
          <span className="neon-cloud neon-cloud--right" aria-hidden="true" />
          <span className="spark spark--one" aria-hidden="true" />
          <span className="spark spark--two" aria-hidden="true" />

          <div className="circle-frame">
            <div className="slide-stack">
              {slides.map((slide, index) => (
                <img
                  alt=""
                  className={`slide-image ${index === activeSlide ? 'is-active' : ''}`}
                  decoding="async"
                  key={slide.src}
                  src={slide.src}
                />
              ))}
              {slides.length === 0 ? <div className="empty-slide">Add images</div> : null}
            </div>
          </div>

          <div className="slide-switcher" aria-label="轮播切换">
            {slides.map((slide, index) => (
              <button
                aria-label={`显示图片 ${index + 1}: ${slide.name}`}
                className={`slide-dot ${index === activeSlide ? 'is-active' : ''}`}
                key={slide.src}
                onClick={() => setActiveSlide(index)}
                type="button"
              />
            ))}
          </div>
        </div>

        <div className="hero-copy">
          <p className="hero-kicker">AnoTools</p>
          <h1>用于制作发布一些小工具，开发中~~</h1>
        </div>

        <nav className="side-nav" aria-label="首页快捷按钮">
          <button type="button">NEWS</button>
          <button type="button">TOOLS</button>
          <button type="button">ABOUT</button>
        </nav>

        <div className="official-block" aria-label="站点信息">
          <span>OFFICIAL</span>
          <strong>AnoTools</strong>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span>SCROLL</span>
          <i />
        </div>
      </section>
    </main>
  );
}

export default App;
