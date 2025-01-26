import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Search } from "@/components/Search";
import { MythCard } from "@/components/MythCard";
import { myths } from "@/data/myths";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMyths = myths.filter((item) => {
    const searchContent = `${item.category} ${item.myth} ${item.fact}`.toLowerCase();
    return searchContent.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/20">
      <main className="container mx-auto">
        <Hero />
        <Search onSearch={setSearchTerm} />
        
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Common Myths Debunked</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMyths.map((item, index) => (
                <MythCard
                  key={index}
                  myth={item.myth}
                  fact={item.fact}
                  className="h-full"
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