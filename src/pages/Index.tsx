import { useState } from "react";
import { Hero } from "@/components/Hero";
import { MythArticle } from "@/components/MythArticle";
import { myths, categories } from "@/data/myths";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BackToTop } from "@/components/BackToTop";
import { Footer } from "@/components/Footer";
import { ScrollSpy } from "@/components/ScrollSpy";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number] | "all">("all");

  const filteredMyths = myths.filter((myth) => {
    if (selectedCategory === "all") return true;
    
    if (Array.isArray(myth.category)) {
      return myth.category.includes(selectedCategory as typeof categories[number]);
    }
    
    return myth.category === selectedCategory;
  });

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value as typeof categories[number] | "all");
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <ScrollSpy />
      <main className="container mx-auto px-4">
        <Hero />
        
        <section className="py-1">
          <Tabs defaultValue="all" onValueChange={handleCategoryChange} className="flex flex-col items-center">
            <TabsList className="flex flex-wrap justify-center h-auto gap-2 bg-transparent">
              <TabsTrigger 
                value="all"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
                aria-label="Show all categories"
                role="tab"
              >
                All Categories
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                  aria-label={`Show ${category} category`}
                  role="tab"
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
                <p className="text-center text-gray-500">
                  No myths found for the selected category.
                </p>
              )}
            </div>
          </Tabs>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;