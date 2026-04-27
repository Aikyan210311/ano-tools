import { KeyboardEvent, useEffect, useMemo, useState } from 'react';
import titleImage from '../images/generated/title-cutout.png?url';
import ilohaImage from '../images/iloha.png?url';

const imageModules = import.meta.glob(
  [
    '../images/*.{jpg,jpeg,png,webp,avif,gif,JPG,JPEG,PNG,WEBP,AVIF,GIF}',
    '!../images/title.png',
    '!../images/iloha.png',
    '!../images/漂浮元素*.png',
  ],
  {
    eager: true,
    import: 'default',
    query: '?url',
  },
) as Record<string, string>;

type Slide = {
  name: string;
  src: string;
};

const menuItems = ['最新情报', '工具入口', '开发日志', '关于爱音', '音乐', '相关资源', '特别页面'];

function getFileName(path: string) {
  return decodeURIComponent(path.split('/').pop() ?? 'toolbox image');
}

function App() {
  const slides = useMemo<Slide[]>(
    () =>
      Object.entries(imageModules)
        .filter(([path]) => !/title|iloha|iroha|漂浮元素/i.test(getFileName(path)))
        .map(([path, src]) => ({
          name: getFileName(path),
          src,
        })),
    [],
  );
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const showNextSlide = () => {
    if (slides.length < 2) {
      return;
    }

    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const handleCircleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      showNextSlide();
    }
  };

  return (
    <main className="home-shell">
      <div className="loading-screen" aria-hidden="true">
        <div className="record-loader">
          <img alt="" decoding="async" src={ilohaImage} />
        </div>
        <span>LOADING</span>
      </div>
      <div className="deep-bg" aria-hidden="true" />
      <div className="halftone halftone--left" aria-hidden="true" />
      <div className="halftone halftone--right" aria-hidden="true" />

      <header className="site-header">
        <a className="logo-lockup" href="/" aria-label="爱音的工具箱首页">
          <img alt="爱音的工具箱" className="logo-image" decoding="async" src={titleImage} />
        </a>

        <div className={`menu-system ${isMenuOpen ? 'is-open' : ''}`}>
          <nav className="menu-panel" aria-label="主菜单">
            {menuItems.map((item) => (
              <a href="#" key={item} tabIndex={isMenuOpen ? 0 : -1}>
                {item}
              </a>
            ))}
          </nav>
          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? '关闭菜单' : '展开菜单'}
            className="menu-button"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            <span className="menu-button__line" />
            <span className="menu-button__line" />
            <span className="menu-button__text">MENU</span>
          </button>
        </div>
      </header>

      <section className="hero-stage" aria-label="爱音的工具箱首页主视觉">
        <div className="neon-cloud neon-cloud--upper" aria-hidden="true" />
        <div className="neon-cloud neon-cloud--lower" aria-hidden="true" />
        <div className="neon-creature jellyfish" aria-hidden="true" />
        <div className="neon-creature shellfish" aria-hidden="true" />

        <div
          aria-label="切换下一张轮播图"
          className="circle-stage"
          onClick={showNextSlide}
          onKeyDown={handleCircleKeyDown}
          role="button"
          tabIndex={0}
        >
          <span className="orbit orbit--one" aria-hidden="true" />
          <span className="orbit orbit--two" aria-hidden="true" />
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
