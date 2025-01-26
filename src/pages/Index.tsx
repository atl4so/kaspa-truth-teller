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
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4">
        <Hero />
        
        <section className="py-1">
          <Tabs defaultValue="all" onValueChange={setSelectedCategory} className="flex flex-col items-center">
            <TabsList className="flex flex-wrap justify-center h-auto gap-2 bg-secondary">
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

            <div className="mt-4 w-full">
              {filteredMyths.length > 0 ? (
                filteredMyths.map((myth) => (
                  <MythArticle key={myth.id} myth={myth} />
                ))
              ) : (
                <p className="text-center text-muted-foreground">
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