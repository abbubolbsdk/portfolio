import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const pressArticles = [
  {
    id: "p1",
    title: "Rally Point Recognized for Innovative Branding Strategies",
    category: "Award",
    image: "https://placehold.co/600x400.png",
    hint: "award ceremony",
    categoryColor: "bg-purple-500",
    description: "Learn how our unique approach to brand building is making waves in the industry."
  },
  {
    id: "p2",
    title: "CEO of Rally Point Speaks at Global Tech Summit",
    category: "Event",
    image: "https://placehold.co/600x400.png",
    hint: "conference speaker",
    categoryColor: "bg-blue-500",
    description: "Insights from our leadership on the future of tech branding and innovation."
  },
  {
    id: "p3",
    title: "Feature in 'Future Brands' Magazine",
    category: "Publication",
    image: "https://placehold.co/600x400.png",
    hint: "magazine cover",
    categoryColor: "bg-green-500",
    description: "An in-depth look at Rally Point's philosophy and success stories."
  },
];

const insightsArticles = [
  {
    id: "i1",
    title: "The Power of a Unified Brand Voice in Tech",
    category: "Branding",
    image: "https://placehold.co/600x400.png",
    hint: "abstract soundwave",
    categoryColor: "bg-yellow-500",
    description: "Discover why consistency is key to building a strong tech brand."
  },
  {
    id: "i2",
    title: "Navigating Market Disruption: A Brand Perspective",
    category: "Strategy",
    image: "https://placehold.co/600x400.png",
    hint: "compass map",
    categoryColor: "bg-red-500",
    description: "How strategic branding can help your company thrive in turbulent times."
  },
  {
    id: "i3",
    title: "AI in Branding: The Next Frontier",
    category: "Innovation",
    image: "https://placehold.co/600x400.png",
    hint: "futuristic AI",
    categoryColor: "bg-sky-500",
    description: "Exploring the role of artificial intelligence in shaping future brand experiences."
  },
];

const ArticleCard = ({ article }: { article: typeof pressArticles[0] | typeof insightsArticles[0] }) => (
  <Card className="overflow-hidden h-full flex flex-col">
    <CardHeader className="p-0 relative">
      <Image
        src={article.image}
        alt={article.title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
        data-ai-hint={article.hint}
      />
      <Badge className={`absolute top-4 left-4 text-xs ${article.categoryColor} text-white`}>{article.category}</Badge>
    </CardHeader>
    <CardContent className="p-6 flex-grow flex flex-col">
      <CardTitle className="text-xl font-headline mb-2 leading-tight">{article.title}</CardTitle>
      <CardDescription className="text-sm text-muted-foreground flex-grow">{article.description}</CardDescription>
    </CardContent>
  </Card>
);

export default function InteractiveTabsSection() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Stay Informed</h2>
          <p className="text-muted-foreground mt-2">Our latest thoughts on vision, leadership, culture, and brand.</p>
        </div>
        <Tabs defaultValue="press" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:w-1/3 md:mx-auto mb-8">
            <TabsTrigger value="press">Press</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>
          <TabsContent value="press">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pressArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="insights">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insightsArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
