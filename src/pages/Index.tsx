import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Search } from "@/components/Search";
import { MythArticle } from "@/components/MythArticle";
import { myths, categories } from "@/data/myths";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredMyths = myths.filter((item) => {
    const matchesSearch = `${item.category} ${item.title} ${item.claim} ${item.facts.join(" ")}`.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/20">
      <main className="container mx-auto px-4">
        <Hero />
        <Search onSearch={setSearchTerm} />
        
        <section className="py-12">
          <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                !selectedCategory ? 'bg-primary text-white' : 'bg-accent/50 text-primary'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  selectedCategory === category ? 'bg-primary text-white' : 'bg-accent/50 text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto">
            {filteredMyths.map((item) => (
              <MythArticle key={item.id} myth={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;