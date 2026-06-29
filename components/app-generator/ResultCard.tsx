import { Card, CardContent } from "@/components/ui/card";
import PageCard from "./PageCard";

export default function ResultCard({ appSpec }: any) {
  return (
    <Card className="mt-10">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold">
          {appSpec.title}
        </h2>

        <p className="mt-4 text-muted-foreground">
          {appSpec.description}
        </p>

        <h3 className="mt-8 mb-4 text-xl font-semibold">
          Pages
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          {appSpec.pages.map((page: any) => (
            <PageCard
              key={page.route}
              page={page}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}