/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TEMPLATES } from './templates';
import { Template } from './types';
import Editor from 'react-simple-code-editor';
// @ts-ignore
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism-tomorrow.css';
import { 
  Code, 
  Eye, 
  Layout, 
  RotateCcw, 
  Copy, 
  Check, 
  Sparkles, 
  Library,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentTemplate, setCurrentTemplate] = useState<Template>(TEMPLATES[0]);
  const [code, setCode] = useState<string>(TEMPLATES[0].code);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'editor' | 'preview' | 'split'>('split');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [zoom, setZoom] = useState(1);
  const [showRulers, setShowRulers] = useState(true);
  const [showGrid, setShowGrid] = useState(true);
  const [viewportMode, setViewportMode] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  const viewportSizes = {
    mobile: 'w-[375px] h-[667px]',
    tablet: 'w-[768px] h-[1024px]',
    desktop: 'w-full h-full'
  };

  useEffect(() => {
    setCode(currentTemplate.code);
  }, [currentTemplate]);

  const complexity = (code.match(/class="/g) || []).length + (code.match(/style="/g) || []).length;

  const formatCode = () => {
    let formatted = '';
    let indent = 0;
    code.split(/>\s*</).forEach(element => {
      if (element.match(/^\/\w/)) indent--;
      formatted += '  '.repeat(indent < 0 ? 0 : indent) + '<' + element + '>\n';
      if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith('input') && !element.startsWith('img') && !element.startsWith('br')) indent++;
    });
    // Very basic regex formatter for demo purposes
    const clean = code.replace(/>\s+</g, '><'); // remove gaps
    let result = '';
    let pad = 0;
    clean.split(/(?=<)|(?<=>)/).forEach(item => {
      if (item.match(/^<\/\w/)) pad--;
      result += '  '.repeat(pad < 0 ? 0 : pad) + item + '\n';
      if (item.match(/^<\w[^>]*[^\/]>$/)) pad++;
    });
    setCode(result.trim());
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const exportFullHTML = () => {
    const fullHTML = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Exported Shape - ${currentTemplate.name}</title>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center p-20">
    ${code}
</body>
</html>`;
    navigator.clipboard.writeText(fullHTML);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    alert('Codice HTML Completo copiato negli appunti!');
  };

  const resetCode = () => {
    setCode(currentTemplate.code);
  };

  const filteredTemplates = TEMPLATES.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         t.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || t.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(TEMPLATES.map(t => t.category))];

  return (
    <div className={`flex h-screen w-screen bg-[#FAF9F6] text-[#1A1A1A] overflow-hidden font-sans selection:bg-orange-500/30 ${isFullScreen ? 'p-0' : 'p-0'}`}>
      
      {/* LEFT SIDEBAR: Library & Gallery */}
      {!isFullScreen && (
        <aside className="w-80 h-full border-r border-black/10 bg-white shadow-xl flex flex-col z-20">
          <div className="p-8 border-b border-black/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                 <Sparkles size={16} className="text-white" />
              </div>
              <h1 className="text-xl font-bold tracking-tighter uppercase">ShapeLab</h1>
            </div>
            
            {/* Search */}
            <div className="relative mb-4">
              <input 
                type="text"
                placeholder="Cerca template..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-black/5 rounded-xl px-4 py-2 text-xs outline-none focus:border-black/20 transition-all"
              />
            </div>

            {/* Category Chips */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border transition-all
                  ${categoryFilter === cat ? 'bg-black text-white border-black' : 'bg-gray-100 text-black/40 border-transparent hover:border-black/10'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-4">
            {filteredTemplates.map((t) => (
              <button
                key={t.id}
                onClick={() => setCurrentTemplate(t)}
                className={`w-full text-left group p-4 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden
                  ${currentTemplate.id === t.id 
                    ? 'bg-black text-white border-black shadow-lg scale-[1.02]' 
                    : 'bg-white border-black/5 hover:border-black/20 hover:bg-gray-50'}`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs font-bold font-serif italic">{t.name}</span>
                  <ChevronRight size={14} className={`transition-transform ${currentTemplate.id === t.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                </div>
                <p className={`text-[10px] leading-tight ${currentTemplate.id === t.id ? 'text-white/60' : 'text-gray-400'}`}>
                  {t.description}
                </p>
              </button>
            ))}
          </div>

          <div className="p-6 border-t border-black/5 bg-gray-50/50">
             <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500"></div> System Live</span>
                <span>v.0.4.2</span>
             </div>
          </div>
        </aside>
      )}

      {/* MAIN CONTENT: Editor & Preview */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#E5E5E5] relative transition-all duration-500">
        
        {/* HEADER TOOLBAR */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-black/10 flex items-center justify-between px-8 z-10">
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
                <button 
                  onClick={() => setActiveTab('editor')}
                  className={`px-3 py-1.5 rounded-md text-[9px] font-bold uppercase tracking-widest transition-all
                  ${activeTab === 'editor' ? 'bg-black text-white shadow-md' : 'text-black/40 hover:text-black'}`}
                >
                  Code
                </button>
                <button 
                  onClick={() => setActiveTab('split')}
                  className={`px-3 py-1.5 rounded-md text-[9px] font-bold uppercase tracking-widest transition-all
                  ${activeTab === 'split' ? 'bg-black text-white shadow-md' : 'text-black/40 hover:text-black'}`}
                >
                  Split
                </button>
                <button 
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1.5 rounded-md text-[9px] font-bold uppercase tracking-widest transition-all
                  ${activeTab === 'preview' ? 'bg-black text-white shadow-md' : 'text-black/40 hover:text-black'}`}
                >
                  Preview
                </button>
             </div>
             
             <div className="h-4 w-px bg-black/10 mx-2" />

             {/* Preview Zoom */}
             <div className="flex items-center gap-3 ml-2">
                <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest">Zoom</span>
                <input 
                  type="range" min="0.2" max="2" step="0.1"
                  value={zoom}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="w-24 accent-black"
                />
                <span className="text-[10px] font-mono text-black/50">{Math.round(zoom * 100)}%</span>
             </div>

             <div className="h-4 w-px bg-black/10 mx-4" />

             <div className="flex items-center gap-2">
                <button 
                  onClick={() => setShowRulers(!showRulers)}
                  className={`p-2 rounded-md transition-colors ${showRulers ? 'text-orange-500 bg-orange-50' : 'text-black/30 hover:text-black'}`}
                  title="Toggle Rulers"
                >
                  <Maximize2 size={16} />
                </button>
                <button 
                  onClick={() => setShowGrid(!showGrid)}
                  className={`p-2 rounded-md transition-colors ${showGrid ? 'text-orange-500 bg-orange-50' : 'text-black/30 hover:text-black'}`}
                  title="Toggle Grid"
                >
                  <Layout size={16} />
                </button>
             </div>

             <div className="h-4 w-px bg-black/10 mx-4" />

             <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-lg">
                <button 
                  onClick={() => setViewportMode('mobile')}
                  className={`p-1.5 rounded transition-all ${viewportMode === 'mobile' ? 'bg-white text-black shadow-sm' : 'text-black/20 hover:text-black'}`}
                >
                  <div className="w-4 h-6 border-2 border-current rounded-sm" />
                </button>
                <button 
                  onClick={() => setViewportMode('tablet')}
                  className={`p-1.5 rounded transition-all ${viewportMode === 'tablet' ? 'bg-white text-black shadow-sm' : 'text-black/20 hover:text-black'}`}
                >
                  <div className="w-6 h-4 border-2 border-current rounded-sm" />
                </button>
                <button 
                  onClick={() => setViewportMode('desktop')}
                  className={`p-1.5 rounded transition-all ${viewportMode === 'desktop' ? 'bg-white text-black shadow-sm' : 'text-black/20 hover:text-black'}`}
                >
                  <div className="w-7 h-5 border-2 border-current rounded-t-sm border-b-4" />
                </button>
             </div>
          </div>

          <div className="flex items-center gap-3">
             <button 
               onClick={resetCode}
               className="p-2 text-black/30 hover:text-black transition-colors" title="Reset Code">
               <RotateCcw size={18} />
             </button>
             <button 
               onClick={exportFullHTML}
               className="p-2 text-black/30 hover:text-black transition-colors" title="Export as Standalone HTML">
               <Library size={18} />
             </button>
             <button 
               onClick={() => setIsFullScreen(!isFullScreen)}
               className="p-2 text-black/30 hover:text-orange-500 transition-colors" title="Toggle Sidebar">
               <Maximize2 size={18} />
             </button>
             <div className="h-4 w-px bg-black/10 mx-2" />
             <button 
               onClick={copyCode}
               className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full hover:bg-orange-600 transition-all text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-black/10"
             >
               {copied ? <Check size={14} /> : <Copy size={14} />}
               {copied ? 'Copied' : 'Copy Code'}
             </button>
          </div>
        </header>

        {/* WORKSPACE AREA */}
        <div className="flex-1 flex relative overflow-hidden bg-white">
           
           {/* EDITOR PANEL */}
           <AnimatePresence mode="popLayout">
             {(activeTab === 'editor' || activeTab === 'split') && (
               <motion.div 
                 initial={{ width: 0, opacity: 0 }}
                 animate={{ width: activeTab === 'editor' ? '100%' : '50%', opacity: 1 }}
                 exit={{ width: 0, opacity: 0 }}
                 transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                 className="h-full border-r border-black/10 flex flex-col bg-[#1e1e1e] shadow-2xl relative z-10 overflow-hidden"
               >
                 <div className="p-4 bg-black/30 border-b border-white/5 flex items-center justify-between shrink-0">
                   <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                     <Code size={14} className="text-orange-500" />
                     Tailwind Editor
                   </div>
                   <button 
                     onClick={formatCode}
                     className="p-1 px-2 hover:bg-white/10 rounded text-[9px] font-bold text-white/40 hover:text-white uppercase tracking-widest transition-all border border-white/5"
                   >
                     Format Code
                   </button>
                 </div>
                 <div className="flex-1 overflow-auto custom-scrollbar font-mono text-sm editor-container">
                   <Editor
                     value={code}
                     onValueChange={code => setCode(code)}
                     highlight={code => highlight(code, languages.markup)}
                     padding={32}
                     className="min-h-full"
                     style={{
                       fontFamily: '"JetBrains Mono", monospace',
                       fontSize: 14,
                       minHeight: '100%',
                       color: '#e5e7eb',
                       backgroundColor: 'transparent'
                     }}
                   />
                 </div>
               </motion.div>
             )}
           </AnimatePresence>

           {/* PREVIEW PANEL */}
           <div className={`relative flex items-center justify-center p-8 bg-[#E5E5E5] overflow-hidden transition-all duration-500
           ${activeTab === 'preview' ? 'w-full' : activeTab === 'split' ? 'w-1/2' : 'w-0'}`}>
              
              <div className={`${viewportSizes[viewportMode]} transition-all duration-700 ease-in-out border border-black/5 bg-white/30 rounded-2xl relative flex items-center justify-center overflow-auto custom-scrollbar shadow-2xl`}>
                {showGrid && <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '24px 24px' }} />}
                
                <div className="relative group p-12 min-h-full flex items-center justify-center w-full origin-center">
                  
                  {/* Rulers Overlay */}
                  {showRulers && (
                    <div className="absolute inset-0 pointer-events-none z-20">
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center group-hover:opacity-100 opacity-20 transition-opacity">
                          <div className="h-4 w-px bg-orange-500" />
                          <div className="text-[8px] font-bold text-orange-500 uppercase tracking-tighter mt-1 bg-white px-2 rounded-full">Intelligent Scale</div>
                      </div>
                    </div>
                  )}

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTemplate.id}
                      initial={{ opacity: 0, scale: 0.9 * zoom }}
                      animate={{ opacity: 1, scale: zoom }}
                      exit={{ opacity: 0, scale: 1.1 * zoom, filter: 'blur(10px)' }}
                      className="relative z-10 flex items-center justify-center origin-center"
                      dangerouslySetInnerHTML={{ __html: code }}
                    />
                  </AnimatePresence>
                </div>
              </div>

              {/* Legend Bottom */}
              <div className="absolute bottom-6 left-10 flex gap-10 text-[10px] font-bold text-black/40 uppercase tracking-[0.2em]">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                   Atomic Depth: {complexity}
                 </div>
                 <div>Screen: {viewportMode.toUpperCase()}</div>
              </div>
           </div>

        </div>

      </main>

    </div>
  );
}


