import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Copy, 
  Gamepad2, 
  Server, 
  ShieldCheck, 
  MessageCircle, 
  ShoppingBag, 
  Globe,
  Mail
} from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/voxel_adventurer_sitting_on_hill.png";

export default function Home() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyIp = () => {
    navigator.clipboard.writeText("play.oreonmc.org");
    setCopied(true);
    toast({
      title: "IP Address Copied!",
      description: "See you on the server!",
      duration: 3000,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Adventurer sitting on a hill" 
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white drop-shadow-lg mb-4 tracking-tight">
              OreonMC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-8 max-w-2xl mx-auto font-sans drop-shadow-md">
              A cross-platform survival experience where your journey begins.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button 
                size="lg" 
                onClick={copyIp}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg px-8 py-6 shadow-xl transition-all hover:scale-105"
              >
                {copied ? "Copied!" : "Copy IP Address"}
                <Copy className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                asChild
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-serif text-lg px-8 py-6 shadow-xl transition-all hover:scale-105 backdrop-blur-sm"
              >
                <a href="https://discord.gg/K3HvRmcayK" target="_blank" rel="noopener noreferrer">
                  Join Discord
                  <MessageCircle className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        
        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <Card className="bg-card/50 border-none shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary">
                <Gamepad2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Cross-Platform</h3>
              <p className="text-muted-foreground">
                Play together on both Java and Bedrock editions seamlessy via GeyserMC.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 border-none shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-secondary">
                <Server className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Multi-Version</h3>
              <p className="text-muted-foreground">
                We support almost all minecraft versions so you can play on any version you want.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50 border-none shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-accent-foreground">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2">Safe Community</h3>
              <p className="text-muted-foreground">
                We have whitelist enabled which means that someone cant just join and do whatever they want. No unannounced griefers here.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator className="bg-border/40 mb-24" />

        {/* FAQ Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-serif text-center mb-12 text-primary">Frequently Asked Questions</h2>
          <div className="bg-card/40 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-sm border border-border/50">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-serif text-lg">What is the Server IP?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  You can join using either <span className="font-mono bg-muted px-1 py-0.5 rounded text-foreground">play.oreonmc.org</span> or <span className="font-mono bg-muted px-1 py-0.5 rounded text-foreground">join.oreonmc.org</span>.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-serif text-lg">Can I play on Bedrock?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Yes! We support both Java and Bedrock editions using GeyserMC. Everyone plays on the same server together.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-serif text-lg">What Minecraft versions are supported?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  We support Minecraft versions going all the way back to 1.9, so you can play on your preferred version.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-serif text-lg">Are cracked accounts supported?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  We are currently working on adding support for cracked clients. Stay tuned to our Discord for updates!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="font-serif text-lg">How do you prevent griefing and hacking?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  We have multiple antigriefing plugins and anticheat plugins in place to prevent hacking and griefing. Additionally, whitelist ensures that someone can't just join and do whatever they want.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="font-serif text-lg">Is there a live map?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  Yes! You can view our live world map at <a href="https://map.oreonmc.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">map.oreonmc.org</a> to see builds and player locations in real-time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="font-serif text-lg">How do I join the server?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base space-y-4">
                  <div>
                    <h4 className="font-bold text-foreground">Java Edition:</h4>
                    <p>Go to Multiplayer &gt; Add Server and enter <span className="font-mono bg-muted px-1 rounded">play.oreonmc.org</span> or <span className="font-mono bg-muted px-1 rounded">join.oreonmc.org</span> as the server address.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Bedrock Edition (Mobile/Win10):</h4>
                    <p>Go to Servers &gt; Add Server and enter <span className="font-mono bg-muted px-1 rounded">play.oreonmc.org</span> or <span className="font-mono bg-muted px-1 rounded">join.oreonmc.org</span> with the port <span className="font-mono bg-muted px-1 rounded">19382</span>.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Links Section */}
        <section className="text-center mb-24">
          <h2 className="text-4xl font-serif mb-12 text-primary">Support The Project</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-8 border-2 border-accent/20 hover:border-accent hover:bg-accent/5 font-serif text-lg group">
              <a href="https://store.oreonmc.org" target="_blank" rel="noopener noreferrer">
                <ShoppingBag className="mr-2 h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                Store
              </a>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-8 border-2 border-primary/20 hover:border-primary hover:bg-primary/5 font-serif text-lg group">
              <a href="https://oreonhq.com" target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-6 w-6 text-primary group-hover:text-primary transition-colors" />
                Main Website
              </a>
            </Button>

            <Button asChild size="lg" variant="outline" className="h-auto py-4 px-8 border-2 border-secondary/20 hover:border-secondary hover:bg-secondary/5 font-serif text-lg group">
              <a href="https://map.oreonmc.org" target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-6 w-6 text-secondary group-hover:text-secondary transition-colors" />
                Live Map
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif mb-4">OreonMC</h2>
          <div className="flex items-center justify-center gap-2 text-primary-foreground/80 mb-8 hover:text-white transition-colors">
            <Mail className="h-4 w-4" />
            <a href="mailto:admin@oreonmc.org">admin@oreonmc.org</a>
          </div>
          
          <Separator className="bg-primary-foreground/20 w-1/3 mx-auto mb-8" />
          
          <p className="text-sm text-primary-foreground/60 font-sans">
            &copy; 2026 Oreon Community. Not affiliated with Mojang AB.
          </p>
        </div>
      </footer>
    </div>
  );
}
