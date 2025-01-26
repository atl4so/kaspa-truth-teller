import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Search } from "@/components/Search";
import { MythArticle } from "@/components/MythArticle";
import { myths, categories } from "@/data/myths";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredMyths = myths.filter((item) => {
    const matchesSearch = `${item.category} ${item.title} ${item.claim} ${item.facts.join(" ")}`.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" ? true : item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/20">
      <main className="container mx-auto px-4">
        <Hero />
        <Search onSearch={setSearchTerm} />
        
        <section className="py-12">
          <Tabs defaultValue="all" onValueChange={(value) => setSelectedCategory(value)}>
            <TabsList className="w-full flex-wrap justify-start h-auto gap-2 bg-transparent">
              <TabsTrigger 
                value="all"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                All Categories
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          <div className="max-w-4xl mx-auto mt-8">
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