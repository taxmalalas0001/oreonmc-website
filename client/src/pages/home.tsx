import { useState } from "react";
import { 
  Copy, 
  Gamepad2, 
  Server, 
  ShieldCheck, 
  MessageCircle, 
  ShoppingBag, 
  Globe,
  Mail,
  Sparkles,
  ChevronDown
} from "lucide-react";

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-slate-700">
      <button
        onClick={onClick}
        className="w-full py-4 px-2 flex items-center justify-between text-left hover:text-blue-400 transition-colors"
      >
        <span className="font-semibold text-lg pr-4">{question}</span>
        <ChevronDown 
          className={`h-5 w-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <div className="px-2 text-slate-400 text-base">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const copyIp = () => {
    navigator.clipboard.writeText("play.oreonmc.org");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white selection:bg-blue-500/20">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-950" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0aDJ2Mmgtdi0yem0wIDRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-blue-400 text-sm font-medium">Now Supporting Hytale!</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            OreonMC
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light mb-4 max-w-3xl mx-auto">
            Your cross-platform gaming community for Minecraft and the upcoming Hytale.
          </p>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Experience seamless survival gameplay today on Minecraft, and be ready for the next evolution in block-based adventures.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button 
              onClick={copyIp}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-6 rounded-lg shadow-xl transition-all hover:scale-105 hover:shadow-blue-500/50 flex items-center gap-2"
            >
              {copied ? "Copied!" : "Copy Minecraft IP"}
              <Copy className="h-5 w-5" />
            </button>
            <a 
              href="https://discord.gg/K3HvRmcayK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-800/50 hover:bg-slate-700/50 border-2 border-slate-700 text-white font-semibold text-lg px-8 py-6 rounded-lg shadow-xl transition-all hover:scale-105 backdrop-blur-sm flex items-center gap-2"
            >
              Join Discord
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
        
        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg backdrop-blur-sm shadow-xl hover:shadow-2xl hover:bg-slate-800/70 transition-all duration-300 p-6">
            <div className="text-center">
              <div className="mx-auto bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-blue-400 border border-blue-500/20">
                <Gamepad2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cross-Platform</h3>
              <p className="text-slate-400 text-sm">
                Play on Java & Bedrock editions seamlessly via GeyserMC.
              </p>
            </div>
          </div>
          
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg backdrop-blur-sm shadow-xl hover:shadow-2xl hover:bg-slate-800/70 transition-all duration-300 p-6">
            <div className="text-center">
              <div className="mx-auto bg-purple-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-purple-400 border border-purple-500/20">
                <Server className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Multi-Version</h3>
              <p className="text-slate-400 text-sm">
                Support for Minecraft versions from 1.9 onwards.
              </p>
            </div>
          </div>
          
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg backdrop-blur-sm shadow-xl hover:shadow-2xl hover:bg-slate-800/70 transition-all duration-300 p-6">
            <div className="text-center">
              <div className="mx-auto bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-green-400 border border-green-500/20">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safe Community</h3>
              <p className="text-slate-400 text-sm">
                Whitelist protection prevents griefing and maintains quality.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-lg backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 relative overflow-hidden p-6">
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="text-center relative z-10">
              <div className="mx-auto bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-blue-300 border border-blue-400/30">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-100">Hytale Ready</h3>
              <p className="text-blue-200/80 text-sm">
                We'll be there on day one when Hytale launches!
              </p>
            </div>
          </div>
        </section>

        <div className="bg-slate-700/50 h-px mb-24" />

        {/* FAQ Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Frequently Asked Questions
          </h2>
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-lg border border-slate-700/50">
            <div className="w-full">
              <AccordionItem
                question="What is the Minecraft Server IP?"
                answer={
                  <span>
                    You can join using either <span className="font-mono bg-slate-900 px-2 py-1 rounded text-blue-400">play.oreonmc.org</span> or <span className="font-mono bg-slate-900 px-2 py-1 rounded text-blue-400">join.oreonmc.org</span>.
                  </span>
                }
                isOpen={openFaq === 0}
                onClick={() => toggleFaq(0)}
              />
              
              <AccordionItem
                question="Can I play on Bedrock?"
                answer="Yes! We support both Java and Bedrock editions using GeyserMC. Everyone plays on the same server together."
                isOpen={openFaq === 1}
                onClick={() => toggleFaq(1)}
              />
              
              <AccordionItem
                question="What Minecraft versions are supported?"
                answer="We support Minecraft versions going all the way back to 1.9, so you can play on your preferred version."
                isOpen={openFaq === 2}
                onClick={() => toggleFaq(2)}
              />

              <AccordionItem
                question="What about Hytale support?"
                answer="We're committed to supporting Hytale from day one of its release! Our community will expand to include Hytale servers, and we're already planning features and gameplay modes. Stay tuned to our Discord for updates and announcements as we get closer to Hytale's launch."
                isOpen={openFaq === 3}
                onClick={() => toggleFaq(3)}
              />

              <AccordionItem
                question="Will my Minecraft progress carry over to Hytale?"
                answer="Minecraft and Hytale will be separate gaming experiences with their own servers and progression systems. However, your community standing, friendships, and membership in our Discord will remain consistent across both games!"
                isOpen={openFaq === 4}
                onClick={() => toggleFaq(4)}
              />
              
              <AccordionItem
                question="Are cracked accounts supported?"
                answer="We are currently working on adding support for cracked clients. Stay tuned to our Discord for updates!"
                isOpen={openFaq === 5}
                onClick={() => toggleFaq(5)}
              />

              <AccordionItem
                question="How do you prevent griefing and hacking?"
                answer="We have multiple anti-griefing plugins and anti-cheat plugins in place. Additionally, whitelist ensures that someone can't just join and do whatever they want."
                isOpen={openFaq === 6}
                onClick={() => toggleFaq(6)}
              />

              <AccordionItem
                question="Is there a live map?"
                answer={
                  <span>
                    Yes! You can view our live Minecraft world map at <a href="https://map.oreonmc.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">map.oreonmc.org</a> to see builds and player locations in real-time.
                  </span>
                }
                isOpen={openFaq === 7}
                onClick={() => toggleFaq(7)}
              />

              <AccordionItem
                question="How do I join the Minecraft server?"
                answer={
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-white">Java Edition:</h4>
                      <p>Go to Multiplayer &gt; Add Server and enter <span className="font-mono bg-slate-900 px-1 rounded text-blue-400">play.oreonmc.org</span> as the server address.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Bedrock Edition (Mobile/Win10):</h4>
                      <p>Go to Servers &gt; Add Server and enter <span className="font-mono bg-slate-900 px-1 rounded text-blue-400">play.oreonmc.org</span> with port <span className="font-mono bg-slate-900 px-1 rounded text-blue-400">19382</span>.</p>
                    </div>
                  </div>
                }
                isOpen={openFaq === 8}
                onClick={() => toggleFaq(8)}
              />
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Support The Project
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://store.oreonmc.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-auto py-4 px-8 border-2 border-blue-500/20 hover:border-blue-500 hover:bg-blue-500/10 bg-slate-800/50 rounded-lg text-lg group flex items-center gap-2 transition-all"
            >
              <ShoppingBag className="h-6 w-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
              Store
            </a>
            
            <a 
              href="https://oreonhq.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-auto py-4 px-8 border-2 border-purple-500/20 hover:border-purple-500 hover:bg-purple-500/10 bg-slate-800/50 rounded-lg text-lg group flex items-center gap-2 transition-all"
            >
              <Globe className="h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
              Main Website
            </a>

            <a 
              href="https://map.oreonmc.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-auto py-4 px-8 border-2 border-green-500/20 hover:border-green-500 hover:bg-green-500/10 bg-slate-800/50 rounded-lg text-lg group flex items-center gap-2 transition-all"
            >
              <Globe className="h-6 w-6 text-green-400 group-hover:text-green-300 transition-colors" />
              Live Map
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            OreonMC
          </h2>
          <div className="flex items-center justify-center gap-2 text-slate-400 mb-8 hover:text-blue-400 transition-colors">
            <Mail className="h-4 w-4" />
            <a href="mailto:admin@oreonmc.org">admin@oreonmc.org</a>
          </div>
          
          <div className="bg-slate-700/50 h-px w-1/3 mx-auto mb-8" />
          
          <p className="text-sm text-slate-500">
            &copy; 2026 Oreon Community. Not affiliated with Mojang AB or Hypixel Studios.
          </p>
        </div>
      </footer>
    </div>
  );
}
