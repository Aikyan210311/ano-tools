type ToolStatus = 'ready' | 'planned';

type ToolEntry = {
  name: string;
  description: string;
  path: string;
  status: ToolStatus;
};

const tools: ToolEntry[] = [
  {
    name: '文本处理',
    description: '预留给格式化、去重、替换等常用文本小工具。',
    path: '#',
    status: 'planned',
  },
  {
    name: '图片工具',
    description: '预留给压缩、尺寸调整、格式转换等图片处理能力。',
    path: '#',
    status: 'planned',
  },
  {
    name: '日常计算',
    description: '预留给单位换算、日期计算、比例计算等轻量工具。',
    path: '#',
    status: 'planned',
  },
];

const statusLabel: Record<ToolStatus, string> = {
  ready: '可用',
  planned: '待添加',
};

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
          <h1 id="home-title">常用小工具，以后都放这里。</h1>
          <p className="intro">
            先搭好一个干净的入口，后续可以逐步加入文本、图片、计算和更多朋友会用到的小工具。
          </p>
        </div>

        <div className="tool-grid" aria-label="工具入口">
          {tools.map((tool) => (
            <a className="tool-card" href={tool.path} key={tool.name} aria-disabled={tool.status !== 'ready'}>
              <span className="tool-status">{statusLabel[tool.status]}</span>
              <h2>{tool.name}</h2>
              <p>{tool.description}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
