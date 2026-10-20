import { useEffect, useState } from "react";

const bonuses = [50, 100, 200, 275, 50, 100, 200, 275];
export function BonusWheel() {
  const [open, setOpen] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [angle, setAngle] = useState(0);
  const [prize, setPrize] = useState<number | null>(null);
  useEffect(() => {
    if (!sessionStorage.getItem("kr-wheel-seen")) {
      setOpen(true);
      sessionStorage.setItem("kr-wheel-seen", "1");
    }
  }, []);
  const spin = () => {
    if (spinning || prize !== null) return;
    const index = Math.floor(Math.random() * bonuses.length);
    const current = angle % 360;
    const desired = (360 - (index * 45 + 22.5)) % 360;
    const delta = (desired - current + 360) % 360;
    setSpinning(true);
    setAngle(angle + 1800 + delta);
    window.setTimeout(() => { setPrize(bonuses[index]); setSpinning(false); }, 4200);
  };
  return (
    <>
      {!open && <button type="button" onClick={() => setOpen(true)} className="fixed bottom-5 right-5 z-40 rounded-full border-2 border-yellow-300 bg-zinc-950 px-5 py-3 font-bold text-yellow-300 shadow-xl">🎰 Roleta de bônus</button>}
      {open && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4" role="dialog" aria-modal="true" aria-label="Roleta de bônus">
        <div className="relative w-full max-w-md rounded-3xl border-2 border-yellow-400 bg-zinc-950 p-6 text-center text-white shadow-2xl">
          <button type="button" aria-label="Fechar" onClick={() => setOpen(false)} className="absolute right-4 top-3 text-3xl text-white">×</button>
          <h2 className="mb-2 text-3xl font-black text-yellow-300">🎁 ROLETA DE BÔNUS</h2>
          <p className="mb-4 text-sm text-zinc-200">Gire e descubra seu bônus de Robux!</p>
          <div className="relative mx-auto my-5 h-64 w-64 max-w-full">
            <div className="absolute left-1/2 top-[-10px] z-10 -translate-x-1/2 text-3xl text-yellow-300">▼</div>
            <div className="h-full w-full rounded-full border-8 border-yellow-400 shadow-lg" style={{ background: "conic-gradient(#facc15 0deg 45deg,#262626 45deg 90deg,#f59e0b 90deg 135deg,#404040 135deg 180deg,#facc15 180deg 225deg,#262626 225deg 270deg,#f59e0b 270deg 315deg,#404040 315deg 360deg)", transform: `rotate(${angle}deg)`, transition: spinning ? "transform 4.2s cubic-bezier(.12,.7,.12,1)" : "none" }}>
              {bonuses.map((n, i) => <span key={i} className="absolute left-1/2 top-1/2 text-xs font-black text-white" style={{ transform: `rotate(${i * 45 + 22.5}deg) translateY(-92px) rotate(90deg)`, transformOrigin: "center" }}>+{n}</span>)}
            </div>
            <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-yellow-400 bg-zinc-950" />
          </div>
          {prize === null ? <button type="button" disabled={spinning} onClick={spin} className="w-full rounded-full bg-yellow-400 py-3 text-lg font-black text-black disabled:opacity-60">{spinning ? "GIRANDO..." : "GIRAR ROLETA"}</button> : <p className="text-xl font-black text-yellow-300">🎉 Você sorteou +{prize} Robux!</p>}
          <p className="mt-4 rounded-xl border border-yellow-500/50 bg-yellow-400/10 p-3 text-sm font-bold text-yellow-100">Para liberar o bônus sorteado, é necessário realizar uma compra no site. O bônus não é creditado automaticamente.</p>
          <button type="button" onClick={() => { setOpen(false); document.querySelector("main")?.scrollIntoView({ behavior: "smooth" }); }} className="mt-4 w-full rounded-full border border-yellow-400 py-3 font-bold text-yellow-300">VER PRODUTOS</button>
        </div>
      </div>}
    </>
  );
}
