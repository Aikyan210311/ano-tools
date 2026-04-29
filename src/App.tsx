import type { CSSProperties } from 'react';
import { KeyboardEvent, useEffect, useMemo, useState } from 'react';
import { animeQuarter, animeSchedule, type AnimeItem, type AnimeWeekday } from './data/anime';
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

type RouteName = 'home' | 'anime';

const menuItems = [
  { label: '新番资讯', href: '#anime' },
  { label: '工具入口', href: '#home' },
  { label: '开发日志', href: '#home' },
  { label: '关于爱音', href: '#home' },
  { label: '音乐', href: '#home' },
  { label: '相关资源', href: '#home' },
  { label: '特别页面', href: '#home' },
];

const weekdays: { value: AnimeWeekday; label: string; short: string }[] = [
  { value: 1, label: '周一', short: 'MON' },
  { value: 2, label: '周二', short: 'TUE' },
  { value: 3, label: '周三', short: 'WED' },
  { value: 4, label: '周四', short: 'THU' },
  { value: 5, label: '周五', short: 'FRI' },
  { value: 6, label: '周六', short: 'SAT' },
  { value: 7, label: '周日', short: 'SUN' },
];

function getFileName(path: string) {
  return decodeURIComponent(path.split('/').pop() ?? 'toolbox image');
}

function getRouteFromHash(): RouteName {
  return window.location.hash === '#anime' ? 'anime' : 'home';
}

function getTodayWeekday(): AnimeWeekday {
  const day = new Date().getDay();
  return day === 0 ? 7 : (day as AnimeWeekday);
}

function getTimeSortValue(time: string) {
  const match = time.match(/^(\d{1,2}):(\d{2})/);

  if (!match) {
    return Number.POSITIVE_INFINITY;
  }

  return Number(match[1]) * 60 + Number(match[2]);
}

function getAnimeEpisodeProgress(anime: AnimeItem) {
  const match = anime.startDate.match(/^(\d{1,2})\/(\d{1,2})$/);

  if (!match) {
    return `?/${anime.episodeTotal}`;
  }

  const startDate = new Date(2026, Number(match[1]) - 1, Number(match[2]));
  const today = new Date();
  const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const diffWeeks = Math.floor((startOfToday.getTime() - startDate.getTime()) / (7 * 24 * 60 * 60 * 1000));
  const currentEpisode = Math.min(Math.max(diffWeeks + 1, 0), anime.episodeTotal);

  return `${currentEpisode}/${anime.episodeTotal}`;
}

function App() {
  const [route, setRoute] = useState<RouteName>(() => getRouteFromHash());

  useEffect(() => {
    const syncRoute = () => setRoute(getRouteFromHash());
    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  if (route === 'anime') {
    return <AnimePage />;
  }

  return <HomePage />;
}

function HomePage() {
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
        <a className="logo-lockup" href="#home" aria-label="爱音的工具箱首页">
          <img alt="爱音的工具箱" className="logo-image" decoding="async" src={titleImage} />
        </a>

        <HomeMenu isMenuOpen={isMenuOpen} onToggle={() => setIsMenuOpen((open) => !open)} />
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
          <a href="#anime">NEWS</a>
          <a href="#home">TOOLS</a>
          <a href="#home">ABOUT</a>
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

function HomeMenu({ isMenuOpen, onToggle }: { isMenuOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`menu-system ${isMenuOpen ? 'is-open' : ''}`}>
      <nav className="menu-panel" aria-label="主菜单">
        {menuItems.map((item) => (
          <a href={item.href} key={item.label} tabIndex={isMenuOpen ? 0 : -1}>
            {item.label}
          </a>
        ))}
      </nav>
      <button
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? '关闭菜单' : '展开菜单'}
        className="menu-button"
        onClick={onToggle}
        type="button"
      >
        <span className="menu-button__line" />
        <span className="menu-button__line" />
        <span className="menu-button__text">MENU</span>
      </button>
    </div>
  );
}

function AnimePage() {
  const todayWeekday = getTodayWeekday();
  const [activeWeekday, setActiveWeekday] = useState<AnimeWeekday>(todayWeekday);
  const [selectedAnime, setSelectedAnime] = useState<AnimeItem | null>(null);
  const [followedIds, setFollowedIds] = useState<string[]>(() => {
    const saved = window.localStorage.getItem('ano-tools-followed-anime');
    return saved ? (JSON.parse(saved) as string[]) : [];
  });

  const activeDayAnime = useMemo(
    () =>
      animeSchedule
        .filter((item) => item.weekday === activeWeekday)
        .sort((left, right) => getTimeSortValue(left.airTime) - getTimeSortValue(right.airTime)),
    [activeWeekday],
  );
  const followedAnime = useMemo(
    () => animeSchedule.filter((item) => followedIds.includes(item.id)),
    [followedIds],
  );

  const toggleFollow = (animeId: string) => {
    setFollowedIds((current) => {
      const next = current.includes(animeId) ? current.filter((id) => id !== animeId) : [...current, animeId];
      window.localStorage.setItem('ano-tools-followed-anime', JSON.stringify(next));
      return next;
    });
  };

  return (
    <main className="anime-shell">
      <div className="deep-bg anime-bg" aria-hidden="true" />
      <div className="halftone anime-halftone anime-halftone--left" aria-hidden="true" />
      <div className="halftone anime-halftone anime-halftone--right" aria-hidden="true" />

      <header className="anime-header">
        <a className="anime-back" href="#home">
          BACK
        </a>
        <div>
          <p className="anime-eyebrow">Anime Radar</p>
          <h1>新番资讯</h1>
          <p>{animeQuarter.label} · {animeQuarter.season} · 更新 {animeQuarter.updatedAt}</p>
        </div>
      </header>

      <section className="anime-calendar" aria-label="新番周历">
        <div className="anime-calendar__top">
          <div>
            <p>{weekdays.find((item) => item.value === activeWeekday)?.short}</p>
            <h2>{weekdays.find((item) => item.value === activeWeekday)?.label}周历</h2>
          </div>
          <span>{activeDayAnime.length} 部排播</span>
        </div>

        <div className="anime-week-strip" aria-label="星期列表">
          {weekdays.map((weekday) => {
            const dayAnime = animeSchedule.filter((item) => item.weekday === weekday.value);
            const isActive = activeWeekday === weekday.value;
            const isToday = todayWeekday === weekday.value;

            return (
              <button
                className={`${isActive ? 'is-active' : ''} ${isToday ? 'is-today' : ''}`}
                key={weekday.value}
                onClick={() => setActiveWeekday(weekday.value)}
                type="button"
              >
                <span>{weekday.short}</span>
                <strong>{weekday.label}</strong>
                <i>{dayAnime.length}</i>
              </button>
            );
          })}
        </div>

        <div className="anime-selected-grid">
          {activeDayAnime.length === 0 ? (
            <p className="anime-empty">这一天暂时没有排播。</p>
          ) : (
            activeDayAnime.map((anime) => (
              <AnimeCard
                anime={anime}
                episodeProgress={getAnimeEpisodeProgress(anime)}
                isFollowed={followedIds.includes(anime.id)}
                key={anime.id}
                onOpen={() => setSelectedAnime(anime)}
                onToggleFollow={() => toggleFollow(anime.id)}
              />
            ))
          )}
        </div>
      </section>

      <section className="watch-panel" aria-label="我的追番">
        <div className="watch-panel__head">
          <div>
            <p className="anime-eyebrow">Watchlist</p>
            <h2>我的追番</h2>
          </div>
          <span>{followedAnime.length}</span>
        </div>

        {followedAnime.length === 0 ? (
          <p className="watch-empty">点击番剧卡片右下角“关注”，这里会保存你的追番列表。</p>
        ) : (
          <div className="watch-list">
            {followedAnime.map((anime) => (
              <button
                key={anime.id}
                onClick={() => {
                  setActiveWeekday(anime.weekday);
                  setSelectedAnime(anime);
                }}
                style={{ '--anime-accent': anime.accent } as CSSProperties}
                type="button"
              >
                <span>{anime.airTime} · {getAnimeEpisodeProgress(anime)}</span>
                <strong>{anime.titleCn}</strong>
                <i>{weekdays.find((item) => item.value === anime.weekday)?.label}</i>
              </button>
            ))}
          </div>
        )}
      </section>

      {selectedAnime ? (
        <AnimeDetail
          anime={selectedAnime}
          episodeProgress={getAnimeEpisodeProgress(selectedAnime)}
          isFollowed={followedIds.includes(selectedAnime.id)}
          onClose={() => setSelectedAnime(null)}
          onToggleFollow={() => toggleFollow(selectedAnime.id)}
        />
      ) : null}
    </main>
  );
}

function AnimeCard({
  anime,
  episodeProgress,
  isFollowed,
  onOpen,
  onToggleFollow,
}: {
  anime: AnimeItem;
  episodeProgress: string;
  isFollowed: boolean;
  onOpen: () => void;
  onToggleFollow: () => void;
}) {
  return (
    <article className="anime-card" style={{ '--anime-accent': anime.accent } as CSSProperties}>
      <button className="anime-card__body" onClick={onOpen} type="button">
        <div className="anime-card__poster">
          <img alt="" decoding="async" loading="lazy" referrerPolicy="no-referrer" src={anime.cover} />
          <span className="anime-card__time">{anime.airTime}</span>
          <span className="anime-card__episode">{episodeProgress}</span>
        </div>
        <div className="anime-card__title">
          <h3>{anime.titleCn}</h3>
        </div>
      </button>
      <button
        aria-label={isFollowed ? `取消关注${anime.titleCn}` : `关注${anime.titleCn}`}
        className={`anime-follow ${isFollowed ? 'is-active' : ''}`}
        onClick={onToggleFollow}
        type="button"
      >
        {isFollowed ? '已追' : '追'}
      </button>
    </article>
  );
}

function AnimeDetail({
  anime,
  episodeProgress,
  isFollowed,
  onClose,
  onToggleFollow,
}: {
  anime: AnimeItem;
  episodeProgress: string;
  isFollowed: boolean;
  onClose: () => void;
  onToggleFollow: () => void;
}) {
  return (
    <div className="anime-modal" role="dialog" aria-modal="true" aria-label={`${anime.titleCn}详情`}>
      <button className="anime-modal__shade" onClick={onClose} type="button" aria-label="关闭详情" />
      <section className="anime-modal__panel" style={{ '--anime-accent': anime.accent } as CSSProperties}>
        <button className="anime-modal__close" onClick={onClose} type="button">
          CLOSE
        </button>
        <div className="anime-detail-poster">
          <img alt="" decoding="async" referrerPolicy="no-referrer" src={anime.cover} />
        </div>
        <div className="anime-detail-content">
          <p className="anime-eyebrow">{anime.sourceType} · {anime.status}</p>
          <h2>{anime.titleCn}</h2>
          {anime.titleJp ? <p className="anime-jp-title">{anime.titleJp}</p> : null}
          <p>{anime.summary}</p>
          <dl>
            <div>
              <dt>开播</dt>
              <dd>{anime.startDate} / {anime.airTime}</dd>
            </div>
            <div>
              <dt>进度</dt>
              <dd>{episodeProgress}</dd>
            </div>
            <div>
              <dt>平台</dt>
              <dd>{anime.platforms.join(' / ')}</dd>
            </div>
            <div>
              <dt>制作</dt>
              <dd>{anime.studio}</dd>
            </div>
            <div>
              <dt>Staff</dt>
              <dd>{anime.staff.length > 0 ? anime.staff.join(' · ') : '待补充'}</dd>
            </div>
            <div>
              <dt>Cast</dt>
              <dd>{anime.cast.length > 0 ? anime.cast.join(' · ') : '待补充'}</dd>
            </div>
          </dl>
          <div className="anime-detail-actions">
            <button className={isFollowed ? 'is-active' : ''} onClick={onToggleFollow} type="button">
              {isFollowed ? '已加入追番' : '加入追番'}
            </button>
            {anime.sourceUrl ? <a href={anime.sourceUrl} rel="noreferrer" target="_blank">数据源</a> : null}
            {anime.officialUrl ? <a href={anime.officialUrl} rel="noreferrer" target="_blank">官网</a> : null}
            {anime.pvUrl ? <a href={anime.pvUrl} rel="noreferrer" target="_blank">PV</a> : null}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
