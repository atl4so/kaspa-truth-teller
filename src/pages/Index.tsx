import { Hero } from "@/components/Hero";
import { Search } from "@/components/Search";
import { MythCard } from "@/components/MythCard";

const myths = [
  {
    myth: "Kaspa was unfairly launched and is secretly controlled by DAGLabs.",
    fact: "Kaspa had a fair launch with no pre-mine. DAGLabs openly mined less than 3% of total supply and has ceased operations, with complete transition to community ownership.",
  },
  {
    myth: "PoW is inherently inferior to Proof-of-Stake (PoS).",
    fact: "This is a misleading oversimplification. Both systems have distinct security and decentralization trade-offs, with neither being universally superior.",
  },
  {
    myth: "Kaspa has no smart contracts, making it uncompetitive.",
    fact: "Smart contract functionality is actively under development, building upon Kaspa's superior foundation of unparalleled scalability and security.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/20">
      <main className="container mx-auto">
        <Hero />
        <Search />
        
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Common Myths Debunked</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myths.map((item, index) => (
                <MythCard
                  key={index}
                  myth={item.myth}
                  fact={item.fact}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;