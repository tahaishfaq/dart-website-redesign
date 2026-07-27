/**
 * Soft gradient patches on white section grounds.
 * Use sparingly — one variant per section, after the hero.
 */
const VARIANTS = {
  /** Top-right peach bloom */
  "peach-tr": (
    <>
      <div className="absolute -top-28 right-[-12%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,160,120,0.2),transparent_68%)]" />
      <div className="absolute top-[40%] right-[8%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,120,80,0.08),transparent_70%)]" />
    </>
  ),
  /** Bottom-left peach + soft forest */
  "peach-bl": (
    <>
      <div className="absolute -bottom-24 left-[-10%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(255,180,140,0.18),transparent_68%)]" />
      <div className="absolute top-[20%] left-[5%] h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(0,50,35,0.04),transparent_70%)]" />
    </>
  ),
  /** Center-top soft wash */
  "peach-top": (
    <>
      <div className="absolute -top-20 left-1/2 h-[22rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,160,120,0.16),transparent_68%)]" />
    </>
  ),
  /** Right mid peach */
  "peach-right": (
    <>
      <div className="absolute top-[10%] right-[-8%] h-[28rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(255,140,100,0.14),transparent_70%)]" />
    </>
  ),
  /** Left mid soft forest tint */
  "forest-left": (
    <>
      <div className="absolute top-[15%] left-[-12%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(0,50,35,0.05),transparent_68%)]" />
      <div className="absolute bottom-[10%] left-[20%] h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(255,160,120,0.1),transparent_70%)]" />
    </>
  ),
  /** Bottom-right peach */
  "peach-br": (
    <>
      <div className="absolute -bottom-32 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,150,110,0.16),transparent_68%)]" />
    </>
  ),
  /** Dual corners — airy */
  dual: (
    <>
      <div className="absolute -top-16 left-[-8%] h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(255,180,150,0.14),transparent_68%)]" />
      <div className="absolute -bottom-20 right-[-6%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(0,50,35,0.045),transparent_68%)]" />
    </>
  ),
};

export function SectionAtmosphere({ variant = "peach-tr" }) {
  const patches = VARIANTS[variant];
  if (!patches) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {patches}
    </div>
  );
}
