export type AnimeWeekday = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type AnimeSourceType = '原创' | '漫画改' | '小说改' | '游戏改' | '其他';

export type AnimeStatus = '未开播' | '连载中' | '已完结';

export type AnimeItem = {
  id: string;
  titleCn: string;
  titleJp: string;
  shortName: string;
  weekday: AnimeWeekday;
  airTime: string;
  startDate: string;
  cover: string;
  episodeTotal: number;
  platforms: string[];
  genres: string[];
  sourceType: AnimeSourceType;
  status: AnimeStatus;
  studio: string;
  staff: string[];
  cast: string[];
  officialUrl?: string;
  pvUrl?: string;
  sourceUrl?: string;
  summary: string;
  accent: string;
};

type CompactAnimeItem = Pick<
  AnimeItem,
  'id' | 'titleCn' | 'weekday' | 'airTime' | 'startDate' | 'cover' | 'platforms'
>;

export const animeQuarter = {
  label: '2026\u5e744\u6708',
  season: '\u6625\u5b63\u65b0\u756a',
  updatedAt: '2026-04-28',
  note: '\u6570\u636e\u6765\u6e90\uff1ayuc.wiki 2026\u5e744\u6708\u65b0\u756a\u8868\uff0c\u5f53\u524d\u5148\u505a\u7eaf\u524d\u7aef\u9884\u7f6e\u6570\u636e\u3002',
  sourceUrl: 'https://yuc.wiki/202604/',
};

const compactSchedule: CompactAnimeItem[] = [
  { id: "yuc-202604-1", titleCn: "自称恶役千金的婚约者观察记录", weekday: 1 as AnimeWeekday, airTime: "21:00", startDate: "4/6", cover: "https://i0.hdslb.com/bfs/new_dyn/f630d5641812e600638e5b4ee69901ce512995925.jpg", platforms: ["环大陆"] },
  { id: "yuc-202604-2", titleCn: "尖帽子的魔法工坊", weekday: 1 as AnimeWeekday, airTime: "22:00", startDate: "4/6", cover: "https://i0.hdslb.com/bfs/new_dyn/57cf09b5afc26df61188687a275698c3512995925.jpg", platforms: ["待确认"] },
  { id: "yuc-202604-3", titleCn: "异世界悠闲农家第2期", weekday: 1 as AnimeWeekday, airTime: "22:00", startDate: "4/6", cover: "https://i0.hdslb.com/bfs/new_dyn/1d8dd91ad55e4c260eb6e5fd7f7a14bd512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-4", titleCn: "木头风纪委员和迷你裙JK的故事", weekday: 1 as AnimeWeekday, airTime: "22:30", startDate: "4/6", cover: "https://i0.hdslb.com/bfs/new_dyn/9d3cf7065e12f513e584ea3938e66be7512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-5", titleCn: "欺诈游戏", weekday: 1 as AnimeWeekday, airTime: "23:00", startDate: "4/6", cover: "https://i0.hdslb.com/bfs/new_dyn/4bfa8cc4febe963d9851462e7ed4642a512995925.jpg", platforms: ["环大陆"] },
  { id: "yuc-202604-6", titleCn: "最强职业不是勇者也不是贤者好像是鉴定士(伪)的样子", weekday: 2 as AnimeWeekday, airTime: "21:00", startDate: "3/31", cover: "https://i0.hdslb.com/bfs/new_dyn/b4df4e576234f5a3de0c374a8d4188fb512995925.jpg", platforms: ["环大陆"] },
  { id: "yuc-202604-7", titleCn: "女仆小姐的贪吃日常", weekday: 2 as AnimeWeekday, airTime: "23:00", startDate: "3/31", cover: "https://i0.hdslb.com/bfs/new_dyn/2c105435b70af7219acd8eb5885104bf512995925.jpg", platforms: ["环大陆"] },
  { id: "yuc-202604-8", titleCn: "身为悲剧始作俑者的最强邪恶BOSS女王为民竭心尽力第2期", weekday: 2 as AnimeWeekday, airTime: "21:00", startDate: "4/7", cover: "https://i0.hdslb.com/bfs/new_dyn/bdb084f1c0c98466035d91e18535a064512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-9", titleCn: "婚姻剧毒", weekday: 2 as AnimeWeekday, airTime: "22:00", startDate: "4/7", cover: "https://i0.hdslb.com/bfs/new_dyn/7c1fba215174116d34c896bd13356857512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-10", titleCn: "和班上第二可爱的女孩子成为朋友", weekday: 2 as AnimeWeekday, airTime: "22:30", startDate: "4/7", cover: "https://i0.hdslb.com/bfs/new_dyn/21e519ef73aae1a4f5784ecf65fd87c9512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-11", titleCn: "左撇子艾伦", weekday: 2 as AnimeWeekday, airTime: "23:00", startDate: "4/7", cover: "https://i0.hdslb.com/bfs/new_dyn/88d0d39ffba7e67a59e853a78be16d99512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-12", titleCn: "复制品也想谈恋爱", weekday: 2 as AnimeWeekday, airTime: "23:30", startDate: "4/7", cover: "https://i0.hdslb.com/bfs/new_dyn/fb9f217e5aece1234974dd1309c07585512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-13", titleCn: "当前正被打扰中", weekday: 2 as AnimeWeekday, airTime: "24:29", startDate: "4/7", cover: "https://i0.hdslb.com/bfs/new_dyn/8a4f4a6ce92dfe6798530e3bf05505a1512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-14", titleCn: "请求女神让我转生成勇者的肋骨", weekday: 2 as AnimeWeekday, airTime: "24:59", startDate: "4/7", cover: "https://i0.hdslb.com/bfs/new_dyn/42ef51e966f0bca159a672ddf21bf18c512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-15", titleCn: "想结束这场“我爱你”的游戏", weekday: 2 as AnimeWeekday, airTime: "22:00", startDate: "4/14", cover: "https://i0.hdslb.com/bfs/new_dyn/c04455e8573e3f3b2b8e32085e62796d512995925.jpg", platforms: ["待确认"] },
  { id: "yuc-202604-16", titleCn: "转生成自动贩卖机的我今天也在迷宫徘徊第3期", weekday: 3 as AnimeWeekday, airTime: "21:00", startDate: "4/1", cover: "https://i0.hdslb.com/bfs/new_dyn/77ec4ce340a9e294a8174e5469713729512995925.jpg", platforms: ["环大陆"] },
  { id: "yuc-202604-17", titleCn: "欢迎来到实力至上主义教室第4期", weekday: 3 as AnimeWeekday, airTime: "21:30", startDate: "4/1", cover: "https://i0.hdslb.com/bfs/new_dyn/7b348c0881c1d3c7a6188bc4cde78c5b512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-18", titleCn: "异兽魔都第2期", weekday: 3 as AnimeWeekday, airTime: "22:00", startDate: "4/1", cover: "https://i0.hdslb.com/bfs/new_dyn/6488e42f0b94d43f054733f1cdef0f71512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-19", titleCn: "关于逃走的鱼很大但钓上来的鱼更大这件事", weekday: 3 as AnimeWeekday, airTime: "23:00", startDate: "4/1", cover: "https://i0.hdslb.com/bfs/new_dyn/f232fa178243864cd9834294516794b1512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-20", titleCn: "加油吧中村君", weekday: 3 as AnimeWeekday, airTime: "23:30", startDate: "4/1", cover: "https://i0.hdslb.com/bfs/new_dyn/63fede151dbe674dfdf73c454e2258e9512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-21", titleCn: "三岁开始做王者第2期", weekday: 3 as AnimeWeekday, airTime: "23:45", startDate: "4/1", cover: "https://i0.hdslb.com/bfs/new_dyn/79970061ceb2d7c5b2d976428958b5d6512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-22", titleCn: "租借女友第5期", weekday: 3 as AnimeWeekday, airTime: "21:00", startDate: "4/8", cover: "https://i0.hdslb.com/bfs/new_dyn/3b666ff982d9be1dfd6b9f6138af3942512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-23", titleCn: "Re:从零开始的异世界生活第4期", weekday: 3 as AnimeWeekday, airTime: "21:00", startDate: "4/8", cover: "https://i0.hdslb.com/bfs/new_dyn/08a88d1ea1fbb0e8be7b8d9dcc277bc8512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-24", titleCn: "哪里有温柔对待阿宅的辣妹", weekday: 3 as AnimeWeekday, airTime: "22:45", startDate: "4/8", cover: "https://i0.hdslb.com/bfs/new_dyn/c854bbb1529710281bb8b1011c8856aa512995925.jpg", platforms: ["待确认"] },
  { id: "yuc-202604-25", titleCn: "元祖小邦多利", weekday: 4 as AnimeWeekday, airTime: "21:00", startDate: "(年番泡面)", cover: "https://i0.hdslb.com/bfs/new_dyn/1f69329fcadb72424dc1afe5b3a1ff5c512995925.jpg", platforms: ["大陆"] },
  { id: "yuc-202604-26", titleCn: "石纪元第4期Part.3", weekday: 4 as AnimeWeekday, airTime: "21:00", startDate: "4/2", cover: "https://i0.hdslb.com/bfs/new_dyn/2529af49347d34fb1380f77b1e0c3555512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-27", titleCn: "冰之城墙", weekday: 4 as AnimeWeekday, airTime: "22:56", startDate: "4/2", cover: "https://i0.hdslb.com/bfs/new_dyn/6759c9f1f604aceb6bb090178ebdacf2512995925.jpg", platforms: ["环大陆"] },
  { id: "yuc-202604-28", titleCn: "雾尾粉丝后援会", weekday: 4 as AnimeWeekday, airTime: "23:26", startDate: "4/2", cover: "https://i0.hdslb.com/bfs/new_dyn/f5c4a715c4d3e1d1b7391e8129ce1e28512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-29", titleCn: "轮回的花瓣", weekday: 4 as AnimeWeekday, airTime: "23:30", startDate: "4/2", cover: "https://i0.hdslb.com/bfs/new_dyn/e2f9b551cbcc95c34d249b802a72fdc0512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-30", titleCn: "灰原君的青春二周目", weekday: 4 as AnimeWeekday, airTime: "24:28", startDate: "4/2", cover: "https://i0.hdslb.com/bfs/new_dyn/8b832615249908eb76e92463c3ed17ac512995925.jpg", platforms: ["环大陆"] },
  { id: "yuc-202604-31", titleCn: "又被杀掉了呢侦探大人", weekday: 4 as AnimeWeekday, airTime: "24:58", startDate: "4/2", cover: "https://i0.hdslb.com/bfs/new_dyn/268e0406069d6c2e181c174fc4378bcd512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-32", titleCn: "女骑士成为蛮族的新娘", weekday: 4 as AnimeWeekday, airTime: "20:30", startDate: "4/9", cover: "https://i0.hdslb.com/bfs/new_dyn/e9b66e2479b7e84ab91edf2eb0abc23c512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-33", titleCn: "库兹马在家唱歌哆啰啰", weekday: 4 as AnimeWeekday, airTime: "22:30", startDate: "4/9", cover: "https://i0.hdslb.com/bfs/new_dyn/3a1c0294433702ab16fd7628e5cff291512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-34", titleCn: "淡岛百景", weekday: 4 as AnimeWeekday, airTime: "24:45", startDate: "4/9", cover: "https://i0.hdslb.com/bfs/new_dyn/b817496d558c060810e9028bf66faee1512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-35", titleCn: "关于邻家的天使大人不知不觉把我惯成了废人这件事第2期", weekday: 5 as AnimeWeekday, airTime: "21:30", startDate: "4/3", cover: "https://i0.hdslb.com/bfs/new_dyn/8af03e83659a799d0bb7251dfb2bcd90512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-36", titleCn: "关于我转生变成史莱姆这档事第4期Part.1", weekday: 5 as AnimeWeekday, airTime: "22:00", startDate: "4/3", cover: "https://i0.hdslb.com/bfs/new_dyn/648dca44ac3971f8c65a5d263480fb3d512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-37", titleCn: "冻结地球", weekday: 5 as AnimeWeekday, airTime: "22:30", startDate: "4/3", cover: "https://i0.hdslb.com/bfs/new_dyn/6bbdd35dc1e148e6c1cf52b62c2cdd98512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-38", titleCn: "神之水滴", weekday: 5 as AnimeWeekday, airTime: "22:30", startDate: "4/10", cover: "https://i0.hdslb.com/bfs/new_dyn/dffacfcc81daa70300e7d7ec5afd7e1c512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-39", titleCn: "上伊那牡丹酒醉身姿似百合", weekday: 5 as AnimeWeekday, airTime: "23:00", startDate: "4/10", cover: "https://i0.hdslb.com/bfs/new_dyn/d9f67c82db4a460b6a552d7ea0a86e3c512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-40", titleCn: "新北斗神拳", weekday: 5 as AnimeWeekday, airTime: "24:00", startDate: "4/10", cover: "https://i0.hdslb.com/bfs/new_dyn/4e321458a2f374343d9ff3637e47877f512995925.jpg", platforms: ["环大陆"] },
  { id: "yuc-202604-41", titleCn: "勇者之屑", weekday: 6 as AnimeWeekday, airTime: "24:30", startDate: "(全24话)", cover: "https://i0.hdslb.com/bfs/new_dyn/dab6dbdd8d73e26ef76d439852565915512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-42", titleCn: "春夏秋冬代行者春之舞", weekday: 6 as AnimeWeekday, airTime: "23:00", startDate: "3/28", cover: "https://i0.hdslb.com/bfs/new_dyn/875bca644358b15f81b33e5aa2140699512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-43", titleCn: "轻松熊", weekday: 6 as AnimeWeekday, airTime: "08:25", startDate: "4/4", cover: "https://i0.hdslb.com/bfs/new_dyn/2651151e2fe96b889565e33a7d4b69d9512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-44", titleCn: "小书痴的下克上第4期", weekday: 6 as AnimeWeekday, airTime: "16:30", startDate: "4/4", cover: "https://i0.hdslb.com/bfs/new_dyn/e102567e0958ad8d2656dd3bf5c65050512995925.jpg", platforms: ["待确认"] },
  { id: "yuc-202604-45", titleCn: "入间同学入魔了第4期", weekday: 6 as AnimeWeekday, airTime: "17:25", startDate: "4/4", cover: "https://i0.hdslb.com/bfs/new_dyn/a391a1fc78171684a9584086d0a95af8512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-46", titleCn: "黄泉的使者", weekday: 6 as AnimeWeekday, airTime: "22:30", startDate: "4/4", cover: "https://i0.hdslb.com/bfs/new_dyn/5be47c5c1e39ce9ce4ebebd5a4f34d1f512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-47", titleCn: "朱音落语", weekday: 6 as AnimeWeekday, airTime: "22:30", startDate: "4/4", cover: "https://i0.hdslb.com/bfs/new_dyn/b12f8ff88125ef18b83afffac05c3c32512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-48", titleCn: "摩绪", weekday: 6 as AnimeWeekday, airTime: "22:45", startDate: "4/4", cover: "https://i0.hdslb.com/bfs/new_dyn/c9ff953b58e6169ce055034b1da5b160512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-49", titleCn: "主播女孩重度依赖", weekday: 6 as AnimeWeekday, airTime: "23:30", startDate: "4/4", cover: "https://i0.hdslb.com/bfs/new_dyn/d0046d84267dfc7158c834f3607f26b8512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-50", titleCn: "迦楠大人的白给是恶魔级", weekday: 6 as AnimeWeekday, airTime: "24:00", startDate: "4/4", cover: "https://i0.hdslb.com/bfs/new_dyn/b8c8ce290b4983a7c36bc63969a61bcd512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-51", titleCn: "楠木邸的神明庭院", weekday: 6 as AnimeWeekday, airTime: "24:30", startDate: "4/4", cover: "https://i0.hdslb.com/bfs/new_dyn/5b8b132422918e96f5943081255c2026512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-52", titleCn: "弱弱老师", weekday: 6 as AnimeWeekday, airTime: "20:30", startDate: "4/11", cover: "https://i0.hdslb.com/bfs/new_dyn/6761a1f950a7052b8903dae7c6119bb9512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-53", titleCn: "杀手青春", weekday: 6 as AnimeWeekday, airTime: "22:00", startDate: "4/11", cover: "https://i0.hdslb.com/bfs/new_dyn/b72b0beb783526dbe08d455e3d7e03b7512995925.jpg", platforms: ["待确认"] },
  { id: "yuc-202604-54", titleCn: "一叠间漫画咖啡屋生活", weekday: 6 as AnimeWeekday, airTime: "25:00", startDate: "4/11", cover: "https://i0.hdslb.com/bfs/new_dyn/53787f0d1d7446347e2446cd2fed308d512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-55", titleCn: "名侦探光之美少女", weekday: 7 as AnimeWeekday, airTime: "07:30", startDate: "(年番)", cover: "https://i0.hdslb.com/bfs/new_dyn/04f8e8caa26b49173c93d547011e2000512995925.jpg", platforms: ["待确认"] },
  { id: "yuc-202604-56", titleCn: "数码宝贝BEATBREAK", weekday: 7 as AnimeWeekday, airTime: "08:00", startDate: "(长篇)", cover: "https://i0.hdslb.com/bfs/new_dyn/121eaf1a4dc9fecb15201af71e8a4fb6512995925.jpg", platforms: ["待确认"] },
  { id: "yuc-202604-57", titleCn: "拜托了偶像公主", weekday: 7 as AnimeWeekday, airTime: "08:30", startDate: "4/5", cover: "https://i0.hdslb.com/bfs/new_dyn/9e394c8578b1aa02e33150658ceef7ba512995925.jpg", platforms: ["待确认"] },
  { id: "yuc-202604-58", titleCn: "钻石王牌第4期(actⅡ第2期)", weekday: 7 as AnimeWeekday, airTime: "16:30", startDate: "4/5", cover: "https://i0.hdslb.com/bfs/new_dyn/6399b460bf5f3c871a635b66924003e1512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-59", titleCn: "日本三国", weekday: 7 as AnimeWeekday, airTime: "20:00", startDate: "4/5", cover: "https://i0.hdslb.com/bfs/new_dyn/f07ed704e019440dbe49a6c514faf93e512995925.jpg", platforms: ["环大陆"] },
  { id: "yuc-202604-60", titleCn: "魔法姐妹露露与莉莉", weekday: 7 as AnimeWeekday, airTime: "21:30", startDate: "4/5", cover: "https://i0.hdslb.com/bfs/new_dyn/d7390950413a88a1fedd2e83c8320fcb512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-61", titleCn: "公鸡斗士", weekday: 7 as AnimeWeekday, airTime: "23:00", startDate: "4/5", cover: "https://i0.hdslb.com/bfs/new_dyn/ef960cb5aa934a29d86ef453a2df8f71512995925.jpg", platforms: ["环大陆"] },
  { id: "yuc-202604-62", titleCn: "幽灵音乐会missingSongs", weekday: 7 as AnimeWeekday, airTime: "23:30", startDate: "4/5", cover: "https://i0.hdslb.com/bfs/new_dyn/07b78403cd2a2e973cb02c7f56084ad6512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-63", titleCn: "淫狱团地", weekday: 7 as AnimeWeekday, airTime: "24:10", startDate: "4/5", cover: "https://i0.hdslb.com/bfs/new_dyn/02a711f3f735ae6fd5c41edea6265449512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-64", titleCn: "茉莉花酱的好感度正在崩坏", weekday: 7 as AnimeWeekday, airTime: "??", startDate: "4/5", cover: "https://i0.hdslb.com/bfs/new_dyn/a0dcb13089963043bbf0ba1b81c6b720512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-65", titleCn: "小学3年级阿贝QQ小芝麻", weekday: 7 as AnimeWeekday, airTime: "06:00", startDate: "4/12", cover: "https://i0.hdslb.com/bfs/new_dyn/95c5077edf3354b5c74e6881c2305007512995925.jpg", platforms: ["待确认"] },
  { id: "yuc-202604-66", titleCn: "小鲨鱼去郊游第2期", weekday: 7 as AnimeWeekday, airTime: "06:00", startDate: "4/12", cover: "https://i0.hdslb.com/bfs/new_dyn/a7692ed66130421268847ff7557c2faa512995925.jpg", platforms: ["待确认"] },
  { id: "yuc-202604-67", titleCn: "夜樱家的大作战第2期", weekday: 7 as AnimeWeekday, airTime: "16:00", startDate: "4/12", cover: "https://i0.hdslb.com/bfs/new_dyn/d9d3a1ff9ce9c5bcfd026b38d7c46736512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-68", titleCn: "杖与剑的魔剑谭第2期", weekday: 7 as AnimeWeekday, airTime: "15:30", startDate: "4/12", cover: "https://i0.hdslb.com/bfs/new_dyn/6d890a6ba9ce229b8bd324b609a885bd512995925.jpg", platforms: ["港台"] },
  { id: "yuc-202604-69", titleCn: "黑猫和魔女的课堂", weekday: 7 as AnimeWeekday, airTime: "22:30", startDate: "4/12", cover: "https://i0.hdslb.com/bfs/new_dyn/ebbf753e84a0c569c5b35940a0644839512995925.jpg", platforms: ["港台"] },
];

const accents = ["#47d7ff","#ff6b83","#ffd166","#7c5cff","#62e6a8","#00e5ff","#9ad7ff","#ff9f1c","#f76fff","#70f0ce"];

export const animeSchedule: AnimeItem[] = compactSchedule.map((item, index) => ({
  ...item,
  titleJp: '',
  shortName: item.titleCn.slice(0, 4),
  episodeTotal: 13,
  genres: [],
  sourceType: '其他',
  status: '连载中',
  studio: '待补充',
  staff: [],
  cast: [],
  sourceUrl: animeQuarter.sourceUrl,
  summary: '数据来源：yuc.wiki 2026年4月新番表；当前预置周历排播、封面、开播日期和平台信息，制作阵容与简介后续可继续补充。',
  accent: accents[index % accents.length],
}));
