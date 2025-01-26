import { useState } from "react";
import { Hero } from "@/components/Hero";
import { MythArticle } from "@/components/MythArticle";
import { myths, categories } from "@/data/myths";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredMyths = myths.filter((myth) => {
    const matchesCategory = 
      selectedCategory === "all" || myth.category === selectedCategory;

    return matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/20">
      <main className="container mx-auto px-4">
        <Hero />
        
        <section className="py-6">
          <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
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

            <div className="mt-6">
              {filteredMyths.length > 0 ? (
                filteredMyths.map((myth) => (
                  <MythArticle key={myth.id} myth={myth} />
                ))
              ) : (
                <p className="text-center text-gray-500">
                  No myths found for the selected category.
                </p>
              )}
            </div>
          </Tabs>
        </section>
      </main>
    </div>
  );
};

export default Index;