import { Template } from './types';

export const TEMPLATES: Template[] = [
  {
    id: 'blackboard-master',
    name: 'Lavagna Artistica',
    category: 'artistic',
    description: 'Effetto ardesia con cornice in legno e polvere di gesso.',
    code: `<div class="w-[600px] h-[400px] bg-zinc-900 rounded-xl border-[12px] border-amber-900 shadow-2xl relative overflow-hidden flex items-center justify-center">
  <!-- Texture Ardesia -->
  <div class="absolute inset-0 opacity-20 pointer-events-none" 
       style="background-image: url('https://www.transparenttextures.com/patterns/dark-wood.png')"></div>
  
  <div class="w-[96%] h-[94%] bg-zinc-800/50 rounded-sm border border-white/5 relative shadow-inner overflow-hidden flex items-center justify-center">
    <!-- Gesso / Chalk noise -->
    <div class="absolute inset-0 opacity-30" 
         style="background-image: url('data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'n\\' %3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.65\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23n)\\'/%3E%3C/svg%3E')"></div>
    
    <div class="z-10 text-center">
       <h2 class="text-white/80 font-serif italic text-4xl tracking-widest">Lezione d'Arte</h2>
       <p class="text-white/40 font-mono text-xs mt-4 uppercase">Tailwind CSS Renderer v.04</p>
    </div>

    <!-- Chalk Dust -->
    <div class="absolute bottom-2 left-10 w-16 h-1.5 bg-white/10 blur-sm rounded-full"></div>
    <div class="absolute bottom-3 left-32 w-8 h-1 bg-white/5 blur-[2px] rounded-full"></div>
  </div>
</div>`
  },
  {
    id: 'stamp-retro',
    name: 'Francobollo Vintage',
    category: 'artistic',
    description: 'Bordi merlettati e gradiente postale.',
    code: `<div class="relative group">
  <div class="w-[320px] h-[420px] bg-white p-4 shadow-xl flex items-center justify-center" 
       style="clip-path: polygon(0% 5%, 5% 5%, 5% 0%, 10% 0%, 10% 5%, 15% 5%, 15% 0%, 20% 0%, 20% 5%, 25% 5%, 25% 0%, 30% 0%, 30% 5%, 35% 5%, 35% 0%, 40% 0%, 40% 5%, 45% 5%, 45% 0%, 50% 0%, 50% 5%, 55% 5%, 55% 0%, 60% 0%, 60% 5%, 65% 5%, 65% 0%, 70% 0%, 70% 5%, 75% 5%, 75% 0%, 80% 0%, 80% 5%, 85% 5%, 85% 0%, 90% 0%, 90% 5%, 95% 5%, 95% 0%, 100% 0%, 100% 5%, 95% 5%, 95% 10%, 100% 10%, 100% 15%, 95% 15%, 95% 20%, 100% 20%, 100% 25%, 95% 25%, 95% 30%, 100% 30%, 100% 35%, 95% 35%, 95% 40%, 100% 40%, 100% 45%, 95% 45%, 95% 50%, 100% 50%, 100% 55%, 95% 55%, 95% 60%, 100% 60%, 100% 65%, 95% 65%, 95% 70%, 100% 70%, 100% 75%, 95% 75%, 95% 80%, 100% 80%, 100% 85%, 95% 85%, 95% 90%, 100% 90%, 100% 95%, 95% 95%, 95% 100%, 90% 100%, 90% 95%, 85% 95%, 85% 100%, 80% 100%, 80% 95%, 75% 95%, 75% 100%, 70% 100%, 70% 95%, 65% 95%, 65% 100%, 60% 100%, 60% 95%, 55% 95%, 55% 100%, 50% 100%, 50% 95%, 45% 95%, 45% 100%, 40% 100%, 40% 95%, 35% 95%, 35% 100%, 30% 100%, 30% 95%, 25% 95%, 25% 100%, 20% 100%, 20% 95%, 15% 95%, 15% 100%, 10% 100%, 10% 95%, 5% 95%, 5% 100%, 0% 100%, 0% 95%, 5% 95%, 5% 90%, 0% 90%, 0% 85%, 5% 85%, 5% 80%, 0% 80%, 0% 75%, 5% 75%, 5% 70%, 0% 70%, 0% 65%, 5% 65%, 5% 60%, 0% 60%, 0% 55%, 5% 55%, 5% 50%, 0% 50%, 0% 45%, 5% 45%, 5% 40%, 0% 40%, 0% 35%, 5% 35%, 5% 30%, 0% 30%, 0% 25%, 5% 25%, 5% 20%, 0% 20%, 0% 15%, 5% 15%, 5% 10%, 0% 10%);">
    <div class="w-full h-full bg-gradient-to-br from-orange-400 via-rose-500 to-indigo-600 border-4 border-white flex flex-col p-6 space-y-4">
      <div class="flex justify-between items-start text-white/90">
        <span class="text-[10px] font-mono tracking-widest uppercase">Postage Italy</span>
        <div class="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-[10px]">$1.50</div>
      </div>
      <div class="flex-1 border-2 border-white/20 rounded-sm flex items-center justify-center">
         <div class="text-4xl">🏛️</div>
      </div>
      <div class="text-white">
        <h4 class="text-lg font-serif italic">Classic Art</h4>
        <div class="h-0.5 w-12 bg-white/50 mt-1"></div>
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: 'artistic-note',
    name: 'Blocknote Artistico',
    category: 'office',
    description: 'Foglio strappato con spirale e linee.',
    code: `<div class="w-[350px] h-[500px] bg-[#fffcf0] shadow-2xl relative p-10 border-l-[16px] border-[#e5e7eb]">
  <!-- Spirale -->
  <div class="absolute -left-5 top-0 bottom-0 flex flex-col justify-around py-8">
    <div class="w-8 h-8 rounded-full bg-zinc-200 border-4 border-zinc-300 shadow-inner"></div>
    <div class="w-8 h-8 rounded-full bg-zinc-200 border-4 border-zinc-300 shadow-inner"></div>
    <div class="w-8 h-8 rounded-full bg-zinc-200 border-4 border-zinc-300 shadow-inner"></div>
    <div class="w-8 h-8 rounded-full bg-zinc-200 border-4 border-zinc-300 shadow-inner"></div>
    <div class="w-8 h-8 rounded-full bg-zinc-200 border-4 border-zinc-300 shadow-inner"></div>
    <div class="w-8 h-8 rounded-full bg-zinc-200 border-4 border-zinc-300 shadow-inner"></div>
  </div>

  <div class="w-full h-full border-t border-blue-200 bg-[linear-gradient(transparent_0%,transparent_98%,#bfdbfe_98%,#bfdbfe_100%)]" 
       style="background-size: 100% 32px">
     <div class="h-16 border-b-2 border-red-200/50 flex items-end pb-2">
       <span class="text-[10px] font-bold text-red-300 uppercase tracking-widest">Data / 07.05.2024</span>
     </div>
     <div class="mt-8 space-y-4">
        <div class="h-4 bg-zinc-900/5 w-3/4 rounded-full"></div>
        <div class="h-4 bg-zinc-900/5 w-full rounded-full"></div>
        <div class="h-4 bg-zinc-900/5 w-5/6 rounded-full"></div>
     </div>
  </div>
</div>`
  },
  {
    id: 'folder-tab',
    name: 'Cartella Archivio',
    category: 'office',
    description: 'Design a cartella con linguetta superiore.',
    code: `<div class="relative w-[500px] h-[350px]">
  <!-- Linguetta -->
  <div class="absolute -top-6 left-0 h-8 w-40 bg-indigo-600 rounded-t-2xl shadow-[-5px_0_10px_rgba(0,0,0,0.1)] flex items-center justify-center">
    <span class="text-white text-[10px] font-bold uppercase tracking-widest">Documenti_01</span>
  </div>
  
  <!-- Corpo Cartella -->
  <div class="w-full h-full bg-indigo-500 rounded-b-2xl rounded-tr-2xl shadow-2xl p-8 border-t-2 border-white/20">
    <div class="w-full h-full bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm flex items-center justify-center p-12">
      <div class="text-center text-white/80">
        <div class="text-4xl mb-4">📁</div>
        <h3 class="text-xl font-bold">Progetti Personali</h3>
        <p class="text-[10px] uppercase tracking-wider opacity-60">Ultima modifica: Oggi</p>
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: 'glass-card',
    name: 'Glassmorphic Card',
    category: 'cards',
    description: 'Effetto vetro con bagliore e ombre profonde.',
    code: `<div class="w-[450px] h-[280px] rounded-[40px] bg-white/20 backdrop-blur-2xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden flex flex-col p-8 justify-between">
  <div class="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/30 blur-[80px] rounded-full"></div>
  <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/30 blur-[80px] rounded-full"></div>
  
  <div class="relative z-10 flex justify-between items-start">
    <div class="w-12 h-12 bg-white/40 rounded-2xl border border-white/50 backdrop-blur-md"></div>
    <div class="text-right text-white/80">
      <div class="text-[10px] font-bold uppercase tracking-[0.2em]">Premium Status</div>
      <div class="text-2xl font-serif">Verified User</div>
    </div>
  </div>

  <div class="relative z-10 text-white/90">
     <div class="text-sm border-t border-white/20 pt-4 flex justify-between uppercase font-bold tracking-widest text-[10px]">
       <span>0000 4444 8888 1111</span>
       <span>05 / 28</span>
     </div>
  </div>
</div>`
  },
  {
    id: 'abstract-gradient-blob',
    name: 'Blob Astratto Dinamico',
    category: 'backgrounds',
    description: 'Forma organica con ombre soffuse e gradiente mesh.',
    code: `<div class="w-[500px] h-[500px] relative flex items-center justify-center">
  <!-- Sfondo bagliore -->
  <div class="absolute inset-0 bg-orange-500/20 blur-[120px] rounded-full animate-pulse"></div>
  
  <!-- Il Blob -->
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
    <defs>
      <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#f97316;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
      </linearGradient>
    </defs>
    <path fill="url(#g1)" d="M44.7,-76.4C58.3,-69.2,70.1,-58.5,78.1,-45.5C86.1,-32.5,90.3,-17.1,89.1,-2.3C87.9,12.5,81.3,26.7,72.4,39.4C63.5,52.1,52.3,63.3,39,71.2C25.7,79.1,10.3,83.7,-4.8,81.9C-19.9,80.1,-34.7,71.9,-47.1,62.1C-59.5,52.3,-69.5,40.9,-75.8,27.7C-82.1,14.5,-84.7,-0.5,-82.3,-14.8C-79.9,-29.1,-72.5,-42.6,-61.8,-51.2C-51.1,-59.8,-37.1,-63.5,-23.7,-71C-10.3,-78.5,2.5,-89.8,17.4,-87.7C32.3,-85.6,49.3,-70.1,44.7,-76.4Z" transform="translate(100 100)" />
  </svg>

  <!-- Elementi di dettaglio -->
  <div class="absolute top-1/4 right-1/4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full border border-white/30"></div>
  <div class="absolute bottom-1/3 left-1/4 w-6 h-6 bg-white/40 backdrop-blur-sm rounded-full"></div>
</div>`
  },
  {
    id: 'blueprint-technical',
    name: 'Blueprint Tecnico',
    category: 'backgrounds',
    description: 'Stile progetto ingegneristico con griglia e quote.',
    code: `<div class="w-[800px] h-[500px] bg-[#0047AB] relative overflow-hidden flex flex-col p-8 border-[2px] border-white/20">
  <!-- Grid -->
  <div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px); background-size: 20px 20px;"></div>
  <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px); background-size: 100px 100px;"></div>

  <div class="relative z-10 flex-1 border border-white/40 border-dashed m-10 flex items-center justify-center">
    <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#0047AB] px-4 text-white text-[10px] font-mono">SPEC: AX-400_V2</div>
    
    <div class="w-64 h-48 border-2 border-white flex flex-col items-center justify-center gap-4 relative">
       <!-- Dimensions -->
       <div class="absolute -left-12 top-0 bottom-0 flex flex-col justify-between items-center text-white/50 text-[8px] font-mono">
         <div class="h-full border-l border-white/30 relative">
            <span class="absolute top-1/2 -translate-y-1/2 -left-8 -rotate-90">H: 180mm</span>
         </div>
       </div>

       <div class="w-20 h-20 rounded-full border-[2px] border-white/80 border-dashed animate-spin-[10s]"></div>
       <div class="text-white font-mono text-xs uppercase tracking-tighter text-center">Module Core<br/>Integration</div>
    </div>
  </div>

  <!-- Table info -->
  <div class="absolute bottom-0 right-0 w-64 h-24 border-t border-l border-white/40 bg-[#0047AB] p-4 text-white font-mono flex flex-col justify-between">
    <div class="flex justify-between text-[8px] opacity-60"><span>DATE: 07/05/2024</span><span>SCALE: 1:25</span></div>
    <div class="text-[10px] font-bold border-b border-white/20 pb-1">SHAPELAB TECHNICAL DEPT.</div>
    <div class="text-[12px] text-right">SHEET 04/A</div>
  </div>
</div>`
  },
  {
    id: 'cinema-ticket',
    name: 'Ticket Cinema',
    category: 'cards',
    description: 'Biglietto con fori laterali e linea di perforazione.',
    code: `<div class="relative w-[500px] h-[200px] bg-amber-400 group shadow-[0_30px_60px_-15px_rgba(251,191,36,0.3)] flex overflow-hidden rounded-xl">
  <!-- Perforation effect -->
  <div class="absolute left-1/4 top-0 bottom-0 border-l-2 border-dashed border-black/20 z-10"></div>
  <div class="absolute left-1/4 top-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#E5E5E5] rounded-full z-20"></div>
  <div class="absolute left-1/4 bottom-0 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-[#E5E5E5] rounded-full z-20"></div>

  <!-- Left Part (Stub) -->
  <div class="w-1/4 bg-amber-500/20 flex flex-col items-center justify-center gap-4 py-4 overflow-hidden relative">
    <div class="rotate-[-90deg] whitespace-nowrap text-black/40 font-black text-2xl tracking-[0.3em] uppercase">ADMIT ONE</div>
    <div class="text-black/60 font-mono text-[10px] absolute bottom-2">#884920</div>
  </div>

  <!-- Main Part -->
  <div class="flex-1 p-8 flex flex-col justify-between">
    <div class="flex justify-between items-start">
      <div>
        <h3 class="text-2xl font-black italic uppercase leading-none">The Great<br/>Aesthetic</h3>
        <p class="text-[10px] font-bold bg-black text-amber-400 px-2 py-0.5 rounded inline-block mt-2">PREMIUM SEATS</p>
      </div>
      <div class="text-right">
        <div class="text-xs font-mono font-bold">ROW: 04</div>
        <div class="text-xs font-mono font-bold">SEAT: A12</div>
      </div>
    </div>
    
    <div class="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-black/60">
      <span>7:45 PM</span>
      <span>•</span>
      <span>07 MAY</span>
    </div>
  </div>
</div>`
  },
  {
    id: 'retro-terminal',
    name: 'Terminale CRT',
    category: 'artistic',
    description: 'Schermo anni 80 con scanlines e bagliore verde.',
    code: `<div class="w-[500px] h-[350px] bg-black rounded-3xl border-[16px] border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col p-8">
  <!-- Scanlines Effect -->
  <div class="absolute inset-0 z-20 pointer-events-none opacity-10" 
       style="background: repeating-linear-gradient(rgba(0,0,0,0) 0px, rgba(0,0,0,0) 1px, rgba(0,0,0,1) 2px, rgba(0,0,0,1) 3px); background-size: 100% 4px;"></div>
  
  <!-- Screen Glow -->
  <div class="absolute inset-0 bg-green-500/5 z-10 pointer-events-none blur-3xl"></div>

  <div class="relative z-0 font-mono text-green-500 space-y-2 text-sm">
    <div class="flex gap-2"><span>></span><span class="animate-pulse">_</span></div>
    <div class="mt-4 opacity-80">LOADING SYSTEM_CORE...</div>
    <div class="text-green-400">STATUS: INITIALIZED</div>
    <div class="text-[10px] text-green-900 mt-8">
      0x44920 INITIALIZING BUFFER...<br/>
      0x44921 ALLOCATING MEMORY...<br/>
      0x44922 STACK OVERFLOW RECOVERED
    </div>
  </div>
</div>`
  },
  {
    id: 'old-parchment',
    name: 'Pergamena Antica',
    category: 'artistic',
    description: 'Carta ingiallita con bordi irregolari e bussola.',
    code: `<div class="relative w-[400px] h-[550px] bg-[#f4e4bc] shadow-2xl p-12 border-2 border-[#d4b483]" 
       style="clip-path: polygon(2% 0%, 98% 1%, 100% 4%, 99% 95%, 97% 100%, 3% 99%, 0% 96%, 1% 5%);">
  <div class="absolute inset-0 opacity-10" 
       style="background-image: url('https://www.transparenttextures.com/patterns/handmade-paper.png')"></div>
  
  <div class="w-full h-full border border-[#d4b483]/50 relative flex flex-col p-4">
    <div class="text-2xl text-center font-serif text-[#5d4037] uppercase tracking-[0.2em] mb-4">Old World Map</div>
    <div class="flex-1 flex items-center justify-center relative">
       <div class="w-32 h-32 border-2 border-[#5d4037]/20 rounded-full flex items-center justify-center">
          <div class="text-4xl opacity-40">🧭</div>
       </div>
    </div>
    <div class="text-[#5d4037]/60 font-serif italic text-xs leading-relaxed text-center mt-6">
      "Sotto il segno della fenice, troverai il tesoro nascosto tra le dune."
    </div>
  </div>
</div>`
  },
  {
    id: 'game-slot',
    name: 'Inventory Slot',
    category: 'cards',
    description: 'Slot caricamento oggetti con look metallico.',
    code: `<div class="w-24 h-24 bg-zinc-900 rounded-2xl border-4 border-zinc-700 shadow-[inset_0_4px_10px_rgba(0,0,0,0.8),0_10px_20px_rgba(0,0,0,0.4)] flex items-center justify-center group cursor-pointer relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent"></div>
  <div class="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors"></div>
  
  <div class="text-3xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform">⚔️</div>
  
  <!-- Multiplier/Count -->
  <div class="absolute bottom-1 right-1 bg-black/60 px-1.5 rounded text-[10px] font-bold text-white border border-white/20">x12</div>
</div>`
  },
  {
    id: 'playing-card',
    name: 'Carta da Gioco',
    category: 'cards',
    description: 'Design minimale dell\'Asso di Picche.',
    code: `<div class="w-[300px] h-[420px] bg-white rounded-2xl shadow-2xl border-2 border-black/5 p-6 flex flex-col justify-between select-none">
  <div class="flex flex-col items-center self-start">
    <span class="text-3xl font-bold leading-none">A</span>
    <span class="text-xl">♠</span>
  </div>

  <div class="flex-1 flex items-center justify-center">
    <div class="text-9xl filter drop-shadow-lg">♠</div>
  </div>

  <div class="flex flex-col items-center self-end rotate-180">
    <span class="text-3xl font-bold leading-none">A</span>
    <span class="text-xl">♠</span>
  </div>
</div>`
  }
];
