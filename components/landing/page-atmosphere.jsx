"use client";

/**
 * Continuous atmosphere layer for the full landing flow.
 * This avoids section-by-section seams where gradients restart or clip.
 */
export function PageAtmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute top-[8%] right-[-12%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,160,120,0.2),transparent_68%)]" />
      <div className="absolute top-[24%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,180,140,0.15),transparent_68%)]" />
      <div className="absolute top-[40%] right-[-14%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(255,145,105,0.16),transparent_70%)]" />
      <div className="absolute top-[54%] left-[12%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(0,50,35,0.045),transparent_70%)]" />
      <div className="absolute top-[68%] right-[8%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(255,170,130,0.14),transparent_68%)]" />
      <div className="absolute top-[82%] left-[-8%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,155,115,0.12),transparent_68%)]" />
    </div>
  );
}

