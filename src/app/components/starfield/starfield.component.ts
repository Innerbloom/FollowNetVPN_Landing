import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

type Star = {
  x: number; // 0..1
  y: number; // 0..1
  size: number; // px base size
  opacity: number; // 0..1
  isSymbol: boolean;
  symbolIndex: number;
  flickerSpeed: number;
  phase: number;
};

function mulberry32(seed: number) {
  let t = seed >>> 0;
  return function () {
    t += 0x6d2b79f5;
    let x = t;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

@Component({
  selector: 'app-starfield',
  standalone: true,
  templateUrl: './starfield.component.html',
  styleUrls: ['./starfield.component.css'],
})
export class StarfieldComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private readonly symbols = ['✦', '✶'];
  private readonly starCount = 220;
  private readonly seed = 42;

  private stars: Star[] = [];
  private rafId: number | null = null;
  private startTs = 0;

  private resizeObserver: ResizeObserver | null = null;

  ngAfterViewInit() {
    this.initStars();
    this.handleResize();

    this.resizeObserver = new ResizeObserver(() => this.handleResize());
    this.resizeObserver.observe(this.canvasRef.nativeElement);

    this.rafId = requestAnimationFrame((ts) => this.tick(ts));
  }

  ngOnDestroy() {
    if (this.rafId != null) cancelAnimationFrame(this.rafId);
    this.rafId = null;
    this.resizeObserver?.disconnect();
    this.resizeObserver = null;
  }

  private initStars() {
    const rnd = mulberry32(this.seed);
    const stars: Star[] = [];
    for (let i = 0; i < this.starCount; i++) {
      const isSymbol = i % 12 === 0; // same idea as iOS version
      const x = rnd();
      const y = rnd();
      const baseSize = Math.floor(rnd() * 2); // 0..1
      const size = isSymbol ? baseSize + 2 : baseSize + 1;
      const rop = Math.floor(rnd() * 30); // 0..29
      const opacity = 0.15 + rop / 100;
      const symbolIndex = Math.floor(rnd() * this.symbols.length);
      const flickerSpeed = 6 + Math.floor(rnd() * 18); // 6..23
      const phase = (Math.floor(rnd() * 628) / 100) * 1.0; // 0..6.28
      stars.push({
        x,
        y,
        size,
        opacity,
        isSymbol,
        symbolIndex,
        flickerSpeed,
        phase,
      });
    }
    this.stars = stars;
  }

  private handleResize() {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const w = Math.max(1, Math.floor(rect.width * dpr));
    const h = Math.max(1, Math.floor(rect.height * dpr));
    if (canvas.width !== w) canvas.width = w;
    if (canvas.height !== h) canvas.height = h;
  }

  private tick(ts: number) {
    if (!this.startTs) this.startTs = ts;
    const t = (ts - this.startTs) / 1000;

    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Draw dots
    for (const s of this.stars) {
      const flicker = 0.15 * Math.sin(s.phase + t * s.flickerSpeed);
      const op = Math.min(Math.max(s.opacity + flicker * 0.05, 0.12), 0.6);
      const x = s.x * w;
      const y = s.y * h;

      if (!s.isSymbol) {
        ctx.globalAlpha = op;
        ctx.fillStyle = '#8C8C8C'; // neutral gray (matches iOS)
        ctx.beginPath();
        const r = s.size;
        ctx.ellipse(x, y, r, r, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Draw symbols
    for (const s of this.stars) {
      if (!s.isSymbol) continue;
      const flicker = 0.15 * Math.sin(s.phase + t * s.flickerSpeed);
      const op = Math.min(Math.max(s.opacity + flicker * 0.05, 0.12), 0.6) * 0.9;
      const x = s.x * w;
      const y = s.y * h;
      ctx.globalAlpha = op;
      ctx.fillStyle = '#8C8C8C';
      const fontSize = s.size * 4;
      ctx.font = `${fontSize}px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.symbols[s.symbolIndex] ?? '✦', x, y);
    }

    ctx.globalAlpha = 1;
    this.rafId = requestAnimationFrame((next) => this.tick(next));
  }
}

