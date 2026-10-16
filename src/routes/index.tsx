import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus, Trash2, User, Lock, Check, Loader2, Menu, ShoppingCart, Search, Star, Mail, MessageCircle, Crown, BadgeCheck } from "lucide-react";
import logoImg from "@/assets/logo.png.asset.json";
import rv17 from "@/assets/review-17.jpg.asset.json";
import rv18 from "@/assets/review-18.jpg.asset.json";
import rv19 from "@/assets/review-19.jpg.asset.json";
import rv20 from "@/assets/review-20.jpg.asset.json";
import rv21 from "@/assets/review-21.jpg.asset.json";
import banner from "@/assets/banner.png.asset.json";
import img700 from "@/assets/robux-700.png.asset.json";
import img1200 from "@/assets/robux-1200.png.asset.json";
import img1700 from "@/assets/robux-1700.png.asset.json";
import img2100 from "@/assets/robux-2100.png.asset.json";
import img3600 from "@/assets/robux-3600.png.asset.json";
import img4500 from "@/assets/robux-4500.png.asset.json";
import img7000 from "@/assets/robux-7000.png.asset.json";
import img10000 from "@/assets/robux-10000.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kingdom Robux — Robux barato e entrega rápida" },
      { name: "description", content: "Compre Robux com os melhores preços do Brasil. 10% OFF na primeira compra." },
      { property: "og:title", content: "Kingdom Robux — Robux barato" },
      { property: "og:description", content: "Os melhores preços em Robux. 10% OFF na primeira compra." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  { amount: 700, price: 0, old: 0, img: "/images/robux-700.jpg", soldOut: true },
  { amount: 1200, price: 19.9, old: 24, img: "/images/robux-1200.jpg" },
  { amount: 1700, price: 24.9, old: 32, img: "/images/robux-1700.jpg" },
  { amount: 2100, price: 29.9, old: 39, img: "/images/robux-2100.jpg" },
  { amount: 3600, price: 44.9, old: 59, img: "/images/robux-3600.jpg" },
  { amount: 4500, price: 59.9, old: 79, img: "/images/robux-4500.jpg" },
  { amount: 7000, price: 89.9, old: 119, img: "/images/robux-7000.jpg" },
  { amount: 10000, price: 119.9, old: 159, img: "/images/robux-10000.jpg" },
];
const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function ProductCard({ p, onAdd }: { p: (typeof products)[0]; onAdd: () => void }) {
  const soldOut = "soldOut" in p && p.soldOut;
  return (
    <div className="w-64 shrink-0 snap-start overflow-hidden rounded-3xl border border-border bg-card shadow-gold">
      <img src={p.img} alt={`${p.amount} Robux`} width={1024} height={1536} loading="lazy" className="aspect-[2/3] w-full object-cover" />
      <div className="space-y-2 p-4">
        <h3 className="font-display text-lg font-bold">{p.amount.toLocaleString("pt-BR")} ROBUX</h3>
        <div className="flex items-center gap-1 text-primary">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
          <span className="ml-1 text-sm text-muted-foreground">({40 + p.amount % 97})</span>
        </div>
        <div className="flex items-baseline gap-2">
          {soldOut ? (
            <span className="font-display text-xl font-extrabold text-muted-foreground">Esgotado</span>
          ) : (
            <>
              <span className="font-display text-2xl font-extrabold text-primary">{brl(p.price)}</span>
              <span className="text-sm text-muted-foreground line-through">{brl(p.old)}</span>
            </>
          )}
        </div>
        {soldOut ? (
          <button disabled className="w-full cursor-not-allowed rounded-full bg-muted py-2.5 font-bold text-muted-foreground">
            Esgotado
          </button>
        ) : (
          <button onClick={onAdd} className="w-full rounded-full bg-gold py-2.5 font-bold text-primary-foreground transition hover:brightness-110">
            Comprar
          </button>
        )}
      </div>
    </div>
  );
}

function Logo({ big }: { big?: boolean }) {
  return <img src={"/images/logo.png"} alt="Robux Kingdom" className={big ? "w-72 max-w-full" : "h-14 w-auto"} />;
}

const reviews: { name: string; text: string; img?: string }[] = [
  { name: "gui_rbx", text: "Chegou certinho, olha meus robux aí! 5,7 mil na conta 🔥", img: rv17.url },
  { name: "nyx.dark", text: "Já comprei várias vezes, 27,3 mil robux e nunca tive problema!", img: rv18.url },
  { name: "davizinho", text: "18K na conta, entrega rapidinha. Melhor loja!", img: rv19.url },
  { name: "mari_cute", text: "Recebi meus robux em minutos, super confiável 💛", img: rv20.url },
  { name: "lari.rblx", text: "Caiu tudo certinho, já tô comprando roupa nova kkkk", img: rv21.url },
  { name: "manunana", text: "Melhorrrrr loja pqp não aguentava mais só golpe e golpe, recomendo pessoal" },
  { name: "igabriel", text: "Pedido demorou poucos minutos e meu robux caiu certinho, muito confiável!" },
  { name: "luana_rbx", text: "Preço muito bom, já comprei 3 vezes e sempre chega rápido." },
  { name: "pedrinho77", text: "Atendimento top no Discord, me ajudaram em tudo. Nota 10!" },
  { name: "julinhaxx", text: "Comprei 1.700 e chegou em menos de 10 minutos, amei demais!" },
  { name: "kauã_br", text: "Achei que era golpe mas veio certinho kkkk virei cliente fiel" },
  { name: "biazinha.rbx", text: "Melhor preço que achei, usei o cupom e ficou mais barato ainda." },
  { name: "matheusgamer", text: "Já é minha quinta compra, nunca tive problema. Recomendo!" },
  { name: "sofia_2012", text: "Suporte respondeu super rápido, entrega perfeita 💛" },
  { name: "lucasrblx", text: "Pix caiu na hora e os robux vieram logo depois. Top demais." },
];

const faqs = [
  { q: "Como posso saber que é confiável?", a: "Temos milhares de clientes satisfeitos e uma comunidade enorme no Discord. Confira as avaliações reais logo acima." },
  { q: "Em quanto tempo vou receber meu pedido?", a: "A maioria dos pedidos é entregue em poucos minutos após a confirmação do pagamento." },
  { q: "Posso cancelar minha compra após o pagamento?", a: "Se o pedido ainda não foi entregue, você pode solicitar o cancelamento pelo suporte. Veja nossa Política de reembolso." },
  { q: "Como entro em contato com o suporte?", a: "Pelo e-mail suporte@kingdomrobux.com ou pelo nosso servidor no Discord." },
];

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen(!open)} className="w-full rounded-3xl border border-border bg-card p-6 text-left shadow-gold">
      <div className="flex items-center justify-between gap-4">
        <span className="text-lg font-semibold">{q}</span>
        {open ? <Minus className="h-5 w-5 shrink-0 text-primary" /> : <Plus className="h-5 w-5 shrink-0 text-primary" />}
      </div>
      {open && <p className="mt-3 text-muted-foreground">{a}</p>}
    </button>
  );
}

export function Index() {
  const [items, setItems] = useState<Record<number, number>>({});
  const [view, setView] = useState<"home" | "checkout" | "pix">("home");
  const cart = Object.values(items).reduce((a, b) => a + b, 0);
  const add = (amount: number) => { setItems((it) => ({ ...it, [amount]: (it[amount] || 0) + 1 })); setView("checkout"); window.scrollTo(0, 0); };
  const [q, setQ] = useState("");
  const list = products.filter((p) => `${p.amount} robux`.includes(q.toLowerCase().replace(/\./g, "")));
  const marquee = "👑 KINGDOM ROBUX   ROBUXBARATO   10% OFF NA SUA PRIMEIRA COMPRA!   ";

  return (
    <div className="min-h-screen bg-kingdom font-sans">
      <div className="overflow-hidden bg-gold py-2 text-primary-foreground">
        <div className="flex w-max animate-marquee whitespace-pre font-display text-sm font-extrabold">
          {marquee.repeat(6)}
        </div>
      </div>

      <header className="sticky top-0 z-10 border-b-2 border-primary/60 bg-background/90 px-4 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <button aria-label="Menu"><Menu className="h-7 w-7" /></button>
          <button onClick={() => setView("home")} aria-label="Início"><Logo /></button>
          <button onClick={() => setView("checkout")} aria-label="Carrinho" className="relative grid h-12 w-12 place-items-center rounded-full bg-gold text-primary-foreground shadow-gold">
            <ShoppingCart className="h-5 w-5" />
            {cart > 0 && <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-foreground text-xs font-bold text-background">{cart}</span>}
          </button>
        </div>
        <div className="mx-auto mt-4 flex max-w-6xl items-center rounded-full border border-border bg-muted pl-5 pr-1.5">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar produtos..." className="flex-1 bg-transparent py-3 outline-none placeholder:text-muted-foreground" />
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-primary-foreground"><Search className="h-5 w-5" /></span>
        </div>
      </header>

      {view !== "home" ? (
        <Checkout view={view} setView={setView} items={items} setItems={setItems} onAdd={add} />
      ) : (<>
      <img src={"/images/banner.png"} alt="Cansado de pagar caro em Robux? Aqui temos os melhores preços!" className="mx-auto w-full max-w-6xl" />

      <main className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-display text-4xl font-extrabold text-gold-grad">Promoções</h2>
        <div className="mt-2 h-1 w-48 rounded-full bg-gold" />
        <div className="-mx-4 mt-8 flex snap-x gap-5 overflow-x-auto px-4 pb-4">
          {list.map((p) => <ProductCard key={p.amount} p={p} onAdd={() => add(p.amount)} />)}
          {list.length === 0 && <p className="text-muted-foreground">Nenhum produto encontrado.</p>}
        </div>

        <section className="mt-16 text-center">
          <h2 className="font-display text-3xl font-extrabold">
            SOMOS QUASE 146 MIL <span className="text-gold-grad">MEMBROS NO DISCORD!</span>
          </h2>
          <div className="mx-auto mt-3 h-1 w-64 rounded-full bg-gold" />
          <p className="mx-auto mt-5 max-w-md text-lg text-muted-foreground">
            Venha fazer parte da nossa comunidade. O que você está esperando?
          </p>
          <div className="mx-auto mt-8 max-w-md overflow-hidden rounded-2xl border-2 border-primary text-left">
            <div className="h-20 bg-gold" />
            <div className="bg-card p-5">
              <div className="-mt-14 mb-3 h-20 w-20 overflow-hidden rounded-2xl border-4 border-card bg-background"><img src={"/images/logo.png"} alt="Robux Kingdom" className="h-full w-full object-cover" /></div>
              <p className="flex items-center gap-2 font-display text-xl font-bold">Robux Kingdom <BadgeCheck className="h-5 w-5 text-primary" /></p>
              <p className="mt-1 text-sm text-muted-foreground">● 2.983 online · 146.293 membros</p>
              <p className="mt-1 text-sm text-muted-foreground">Desde ago. de 2021</p>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-display text-4xl font-extrabold text-gold-grad">Últimas avaliações</h2>
          <div className="mt-2 h-1 w-48 rounded-full bg-gold" />
          <div className="-mx-4 mt-8 flex snap-x gap-5 overflow-x-auto px-4 pb-4">
            {reviews.map((r) => (
              <div key={r.name} className="min-h-56 w-72 shrink-0 snap-start rounded-3xl border border-border bg-card p-6 shadow-gold">
                <div className="flex items-center justify-between">
                  <p className="font-display text-lg font-bold">{r.name}</p>
                  <div className="flex text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}</div>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">{r.text}</p>
                {r.img && <img src={r.img} alt={`Robux recebidos por ${r.name}`} loading="lazy" className="mt-4 aspect-[4/3] w-full rounded-2xl border border-border object-cover" />}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center font-display text-5xl font-extrabold text-gold-grad">Perguntas Frequentes</h2>
          <div className="mx-auto mt-3 h-1 w-64 rounded-full bg-gold" />
          <div className="mx-auto mt-8 max-w-3xl space-y-5">
            {faqs.map((f) => <Faq key={f.q} {...f} />)}
          </div>
        </section>
      </main>
      </>)}

      <footer className="border-t-2 border-primary/60 px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <Logo big />
          <div>
            <h4 className="font-bold tracking-widest text-primary">ATENDIMENTO AO CLIENTE</h4>
            <p className="mt-4 flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4" /> suporte@kingdomrobux.com</p>
            <p className="mt-3 flex items-center gap-2 text-muted-foreground"><MessageCircle className="h-4 w-4" /> Discord</p>
          </div>
          <div>
            <h4 className="font-bold tracking-widest text-primary">POLÍTICAS</h4>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li>Sobre nós</li><li>Termos de serviço</li><li>Política de reembolso</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

type Items = Record<number, number>;
function Checkout({ view, setView, items, setItems, onAdd }: { view: "checkout" | "pix"; setView: (v: "home" | "checkout" | "pix") => void; items: Items; setItems: (f: (i: Items) => Items) => void; onAdd: (a: number) => void }) {
  const [email, setEmail] = useState("");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [msg, setMsg] = useState("");
  const lines = products.filter((p) => items[p.amount]);
  const subtotal = lines.reduce((t, p) => t + p.price * (items[p.amount] ?? 0), 0);
  const total = subtotal * (1 - discount);
  const setQty = (a: number, d: number) => setItems((it) => { const n = { ...it, [a]: (it[a] || 0) + d }; if ((n[a] ?? 0) <= 0) delete n[a]; return n; });
  const card = "rounded-3xl border border-border bg-card p-6 shadow-gold";

  if (view === "pix") {
    const code = "00020126580014BR.GOV.BCB.PIX0136kingdomrobux" + Math.round(total * 100);
    return (
      <main className="mx-auto max-w-xl space-y-6 px-4 py-8">
        <div className={card + " text-center"}>
          <h2 className="font-display text-2xl font-extrabold">Pague {brl(total)} via PIX</h2>
          <div className="mx-auto mt-5 grid h-48 w-48 place-items-center rounded-2xl bg-foreground p-3 text-xs text-background">QR Code PIX</div>
          <p className="mt-4 break-all rounded-xl bg-muted p-3 text-xs text-muted-foreground">{code}</p>
          <button onClick={() => navigator.clipboard?.writeText(code)} className="mt-3 w-full rounded-full bg-gold py-3 font-bold text-primary-foreground">Copiar código PIX</button>
        </div>
        <div className={card}>
          <h3 className="text-center text-lg font-bold">Como pagar:</h3>
          <ol className="mt-5 space-y-4">
            {["Abra o app do seu banco", "Escaneie o QR Code ou cole o código PIX", "Confirme o pagamento no seu banco", "Aguarde a confirmação automática"].map((t, i) => (
              <li key={t} className="flex items-center gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold font-bold text-primary-foreground">{i + 1}</span>{t}</li>
            ))}
          </ol>
        </div>
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 font-semibold"><Lock className="h-4 w-4 text-primary" /> Pagamento seguro via PIX</p>
          <p className="text-sm text-primary">A confirmação é automática após o pagamento</p>
        </div>
        <div className={card}>
          <div className="flex items-center gap-4"><Loader2 className="h-6 w-6 animate-spin text-primary" /><div><p className="text-lg text-primary">Aguardando pagamento...</p><p className="text-sm text-muted-foreground">A página será atualizada automaticamente</p></div></div>
          <button onClick={() => alert("Obrigado! Vamos confirmar seu pagamento e enviar os Robux para " + email)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-success py-3 font-bold text-success-foreground"><Check className="h-5 w-5" /> JÁ FIZ O PAGAMENTO</button>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-xl space-y-6 px-4 py-8">
      <div className={card}>
        <h2 className="flex items-center gap-3 font-display text-2xl font-extrabold"><User className="h-6 w-6" /> Seus Dados</h2>
        <label className="mt-5 block text-muted-foreground">Email *</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com" className="mt-2 w-full rounded-xl border border-border bg-muted px-4 py-3 outline-none focus:border-primary" />
      </div>
      <div className={card}>
        <h2 className="flex items-center gap-3 font-display text-2xl font-extrabold"><Lock className="h-6 w-6" /> Seus Produtos ({lines.length})</h2>
        {lines.length === 0 && <p className="mt-4 text-muted-foreground">Seu carrinho está vazio.</p>}
        {lines.map((p) => (
          <div key={p.amount} className="mt-4 flex items-center gap-3 rounded-2xl border border-border bg-muted p-3">
            <img src={p.img} alt="" className="h-16 w-12 rounded-lg object-cover" />
            <div className="flex-1"><p className="font-bold">{p.amount.toLocaleString("pt-BR")} ROBUX</p><p className="text-primary">{brl(p.price)}</p></div>
            <button aria-label="Menos" onClick={() => setQty(p.amount, -1)} className="grid h-8 w-8 place-items-center rounded-full bg-destructive text-destructive-foreground"><Minus className="h-4 w-4" /></button>
            <span className="w-5 text-center font-bold">{items[p.amount]}</span>
            <button aria-label="Mais" onClick={() => setQty(p.amount, 1)} className="grid h-8 w-8 place-items-center rounded-full bg-success text-success-foreground"><Plus className="h-4 w-4" /></button>
            <button aria-label="Remover" onClick={() => setQty(p.amount, -(items[p.amount] ?? 0))} className="grid h-8 w-8 place-items-center rounded-full bg-background"><Trash2 className="h-4 w-4" /></button>
          </div>
        ))}
      </div>
      <div className={card}>
        <h2 className="font-display text-2xl font-extrabold">Resumo do Pedido</h2>
        <div className="mt-5 flex justify-between text-muted-foreground"><span>Subtotal:</span><span className="text-primary">{brl(subtotal)}</span></div>
        {discount > 0 && <div className="mt-2 flex justify-between text-muted-foreground"><span>Cupom (10%):</span><span>-{brl(subtotal * discount)}</span></div>}
        <div className="my-4 h-px bg-border" />
        <div className="flex justify-between font-display text-3xl font-extrabold"><span>Total:</span><span className="text-gold-grad">{brl(total)}</span></div>
        <div className="mt-5 flex gap-3">
          <input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Código do cupom" className="min-w-0 flex-1 rounded-xl border border-border bg-muted px-4 py-3 outline-none" />
          <button onClick={() => { const ok = coupon.trim().toUpperCase() === "ROBUXBARATO"; setDiscount(ok ? 0.1 : 0); setMsg(ok ? "Cupom aplicado: 10% OFF!" : "Cupom inválido"); }} className="rounded-xl bg-gold px-5 font-bold text-primary-foreground">Aplicar</button>
        </div>
        {msg && <p className="mt-2 text-sm text-primary">{msg}</p>}
        <button disabled={!lines.length || !/\S+@\S+\.\S+/.test(email)} onClick={() => { setView("pix"); window.scrollTo(0, 0); }} className="mt-5 w-full rounded-full bg-gold py-4 font-display text-lg font-extrabold text-primary-foreground disabled:opacity-50">FINALIZAR COMPRA</button>
        {lines.length > 0 && !/\S+@\S+\.\S+/.test(email) && <p className="mt-2 text-center text-sm text-muted-foreground">Preencha seu email para continuar</p>}
      </div>
      <section className="pt-6">
        <h2 className="text-center font-display text-3xl font-extrabold text-gold-grad">VOCÊ TAMBÉM PODE GOSTAR</h2>
        <div className="mx-auto mt-3 h-1 w-40 rounded-full bg-gold" />
        <div className="-mx-4 mt-6 flex snap-x gap-5 overflow-x-auto px-4 pb-4">
          {products.map((p) => <ProductCard key={p.amount} p={p} onAdd={() => onAdd(p.amount)} />)}
        </div>
      </section>
    </main>
  );
}
