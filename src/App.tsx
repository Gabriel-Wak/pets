import { ArrowRight, ArrowUpRight, Play, Plus, Search, ShoppingCart, Star } from "lucide-react";
import type { CSSProperties } from "react";

const ASSETS = "https://polo-pecan-73837341.figma.site/_assets/v11";
const LOGO = `${ASSETS}/0ae29d6d9628bede667f90d57bebe81b8f1ec2bf.svg`;
const AVATAR = `${ASSETS}/e62173d41f91350a59628e8a9a55ae078a886fb9.png?w=128`;
const PRODUCT = `${ASSETS}/3e5158dad63d392ade022e81890edc9f54d750bc.png`;
const VIDEO = `${ASSETS}/76be6ec3a93a703b15e9cc01e764a4e3f9d7d2c0.png`;
const BOTTOM_LEFT = `${ASSETS}/8d44b25186ef45a5789c74668fb781cea4e1ff49.png`;
const BOTTOM_CENTER = `${ASSETS}/96745c4e72ad5c5208e53a885df797fd82cd854a.png?h=1024`;
const BOTTOM_RIGHT = `${ASSETS}/81bd2e7a66b58f3d8f3ad78fd1ebf01af8dfdee1.png`;

const NAV = ["Home", "Shop", "Delivery and payment", "Brands", "Blog"];
const HEADING: string[][] = [["Everything"], ["Your", "Pets", "Love"]];
const WORD_DELAYS = ["delay-200", "delay-300", "delay-400", "delay-500", "delay-600"];
const OVERLAY_BOTTOM = { bottom: "clamp(20px, 4vh, 50px)" };

function Badge({ value }: { value: number }) {
  return (
    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-orange text-[10px] font-bold text-white">
      {value}
    </span>
  );
}

function Header() {
  return (
    <header className="relative z-30 flex shrink-0 items-center justify-between px-4 py-4 md:px-8 lg:px-12">
      <img
        src={LOGO}
        alt="CozyPaws"
        className="animate-fade-in delay-100 h-[33px] w-[130px] md:h-[52px] md:w-[205px]"
      />

      <nav className="animate-fade-in delay-200 hidden items-center gap-8 text-sm font-medium md:flex">
        {NAV.map((item, i) => (
          <a
            key={item}
            href="#"
            className={i === 0 ? "text-gray-900" : "text-gray-600 transition-colors hover:text-gray-900"}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="animate-fade-in delay-300 flex items-center gap-2 sm:gap-3">
        <button
          aria-label="Search"
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-800 transition-colors hover:bg-white sm:flex"
        >
          <Search size={18} />
        </button>
        <button
          aria-label="Favorites"
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-orange text-white transition-colors hover:bg-orange-hover"
        >
          <Star size={18} fill="currentColor" />
          <Badge value={4} />
        </button>
        <button
          aria-label="Cart"
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-800 transition-colors hover:bg-white"
        >
          <ShoppingCart size={18} />
          <Badge value={1} />
        </button>
        <img src={AVATAR} alt="Profile" className="h-10 w-10 rounded-full object-cover" />
      </div>
    </header>
  );
}

function Heading({ className }: { className: string }) {
  let n = 0;
  return (
    <h1 className={`font-serif-display tracking-tight text-brand ${className}`}>
      {HEADING.map((line, li) => (
        <span key={li} className="block">
          {line.map((word, wi) => (
            <span key={word} className={`animate-word-pop inline-block ${WORD_DELAYS[n++]}`}>
              {word}
              {wi < line.length - 1 && " "}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}

function ArrowButton({ size = 36 }: { size?: number }) {
  return (
    <button
      aria-label="View product"
      className="flex items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-hover"
      style={{ width: size, height: size }}
    >
      <ArrowUpRight size={size * 0.5} />
    </button>
  );
}

function ProductCard({ className, style }: { className: string; style?: CSSProperties }) {
  return (
    <div className={className} style={style}>
      <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "260 / 257" }}>
        <img src={PRODUCT} alt="Cozy Cat House" className="h-full w-full object-cover" />
        <div className="absolute right-2 bottom-2">
          <ArrowButton />
        </div>
      </div>
      <p className="mt-2 text-gray-700" style={{ fontSize: "clamp(12px, 1vw, 16px)" }}>
        Cozy Cat House
      </p>
      <p className="font-bold text-brand" style={{ fontSize: "clamp(14px, 1.2vw, 20px)" }}>
        $49.99
      </p>
    </div>
  );
}

function VideoCard({ className, style }: { className: string; style?: CSSProperties }) {
  return (
    <div className={className} style={style}>
      <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "177 / 287" }}>
        <img src={VIDEO} alt="Product review video" className="h-full w-full object-cover" />
        <div className="absolute inset-x-0 bottom-3 flex flex-col items-center gap-2 px-2 text-center">
          <button
            aria-label="Play video"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-hover"
          >
            <Play size={16} fill="currentColor" />
          </button>
          <p className="leading-tight font-medium text-white" style={{ fontSize: "clamp(9px, 0.75vw, 12px)" }}>
            Watch Product Reviews on TikTok and YouTube
          </p>
        </div>
      </div>
    </div>
  );
}

function AvatarStack() {
  return (
    <div className="flex items-center">
      <img src={AVATAR} alt="" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
      <span className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand text-white">
        <Plus size={14} />
      </span>
    </div>
  );
}

function ExploreButton({ className = "" }: { className?: string }) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-hover ${className}`}
    >
      Explore Products
      <ArrowRight size={16} />
    </button>
  );
}

function BottomImages({ maxHeights, overlays }: { maxHeights?: [string, string, string]; overlays: boolean }) {
  const [left, center, right] = maxHeights ?? [];
  return (
    <div className="flex items-end">
      <div className="animate-photo-reveal delay-700 relative flex-1">
        <img src={BOTTOM_LEFT} alt="Dog with toys" className="block h-auto w-full object-contain object-bottom" style={{ maxHeight: left }} />
        {overlays && (
          <div className="animate-scale-in delay-1000 absolute left-[12%] flex items-center gap-3" style={OVERLAY_BOTTOM}>
            <span className="font-semibold text-white drop-shadow" style={{ fontSize: "clamp(20px, 2.2vw, 36px)" }}>
              98K+
            </span>
            <AvatarStack />
          </div>
        )}
      </div>

      <div className="animate-photo-reveal delay-600 relative flex-[1.265]">
        <img src={BOTTOM_CENTER} alt="Happy pet" className="block h-auto w-full object-contain object-bottom" style={{ maxHeight: center }} />
        {overlays && (
          <div className="animate-scale-in delay-1100 absolute inset-x-0 flex flex-col items-center gap-3 px-4 text-center" style={OVERLAY_BOTTOM}>
            <h2 className="leading-tight font-semibold text-white drop-shadow" style={{ fontSize: "clamp(16px, 1.8vw, 28px)" }}>
              Best Products for Your Pet
            </h2>
            <ExploreButton />
          </div>
        )}
      </div>

      <div className="animate-photo-reveal delay-800 relative flex-1">
        <img src={BOTTOM_RIGHT} alt="Cat relaxing" className="block h-auto w-full object-contain object-bottom" style={{ maxHeight: right }} />
        {overlays && (
          <div className="animate-scale-in delay-1200 absolute right-[12%] flex items-center gap-2" style={OVERLAY_BOTTOM}>
            <Star className="text-orange" fill="currentColor" style={{ width: "clamp(18px, 1.8vw, 28px)", height: "auto" }} />
            <span className="font-semibold text-white drop-shadow" style={{ fontSize: "clamp(20px, 2.2vw, 36px)" }}>
              4.6
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function DesktopHero() {
  return (
    <div className="relative hidden flex-1 lg:flex">
      <div className="relative z-[5] w-full px-12 pt-[5.4rem] text-center">
        <Heading className="text-[clamp(60px,7.5vw,110px)] leading-[0.95]" />
      </div>
      <ProductCard
        className="animate-slide-in-left delay-600 absolute top-[50px] left-12 z-20"
        style={{ width: "clamp(160px, 14vw, 260px)" }}
      />
      <VideoCard
        className="animate-slide-in-right delay-700 absolute top-[50px] right-12 z-20"
        style={{ width: "clamp(120px, 10vw, 177px)" }}
      />
      <div className="absolute inset-x-0 bottom-0 z-10">
        <BottomImages overlays maxHeights={["min(70vh, 55vw)", "min(85vh, 70vw)", "min(70vh, 55vw)"]} />
      </div>
    </div>
  );
}

function TabletHero() {
  return (
    <div className="relative hidden flex-1 md:flex lg:hidden">
      <div className="relative z-[5] w-full px-8 pt-16 text-center">
        <Heading className="text-7xl leading-[0.95]" />
      </div>
      <ProductCard className="animate-slide-in-left delay-600 absolute top-[80px] left-4 z-20 w-[160px]" />
      <VideoCard className="animate-slide-in-right delay-700 absolute top-[80px] right-4 z-20 w-[120px]" />
      <div className="absolute inset-x-0 bottom-0 z-10">
        <BottomImages overlays maxHeights={["60vh", "75vh", "60vh"]} />
      </div>
    </div>
  );
}

function MobileHero() {
  return (
    <div className="flex flex-1 flex-col md:hidden">
      <div className="flex flex-col items-center px-4 pt-2 text-center">
        <Heading className="text-[36px] leading-[1.05]" />
        <p className="animate-fade-up delay-500 mt-2 text-sm text-gray-600">Best Products for Your Pet</p>
        <ExploreButton className="animate-fade-up delay-600 mt-3" />
      </div>

      <div className="mt-4 flex gap-3 px-4">
        <div className="animate-slide-in-left delay-600 flex-1">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <img src={PRODUCT} alt="Cozy Cat House" className="h-full w-full object-cover" />
            <div className="absolute right-2 bottom-2">
              <ArrowButton size={32} />
            </div>
          </div>
          <p className="mt-1 text-xs text-gray-700">Cozy Cat House</p>
          <p className="text-sm font-bold text-brand">$49.99</p>
        </div>
        <div className="animate-slide-in-right delay-700 relative flex-1 overflow-hidden rounded-2xl" style={{ aspectRatio: "3 / 4" }}>
          <img src={VIDEO} alt="Product review video" className="h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-2 flex flex-col items-center gap-1 px-2 text-center">
            <button aria-label="Play video" className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
              <Play size={14} fill="currentColor" />
            </button>
            <p className="text-[9px] leading-tight font-medium text-white">Watch Product Reviews on TikTok and YouTube</p>
          </div>
        </div>
      </div>

      <div className="animate-fade-up delay-1000 mt-3 flex items-center justify-center gap-4 px-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-brand">98K+</span>
          <AvatarStack />
        </div>
        <span className="h-6 w-px bg-gray-300" />
        <div className="flex items-center gap-1">
          <Star size={18} className="text-orange" fill="currentColor" />
          <span className="text-lg font-semibold text-brand">4.6</span>
        </div>
      </div>

      <div className="mt-auto">
        <BottomImages overlays={false} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      <Header />
      <main className="flex flex-1 flex-col overflow-hidden">
        <DesktopHero />
        <TabletHero />
        <MobileHero />
      </main>
    </div>
  );
}
