import { Card } from "@/components/ui/card";

export default function App() {
  return (
    <div className="lg:p-10 md:p-6 p-2 h-screen max-w-400 mx-auto">
      <Card className="h-full p-4 grid grid-cols-1 grid-rows-12">
        <Card id="title" className="p-2">
          header
        </Card>
        <div className="grid grid-cols-9 md:grid-rows-9 gap-4 row-span-10">
          <Card
            id="section"
            className="md:row-span-9 row-span-3 col-span-9 md:col-span-6 p-2"
          >
            a
          </Card>
          <Card
            id="aside"
            className="md:row-span-9 row-span-6 col-span-9 md:col-span-3 p-2"
          >
            b
          </Card>
        </div>
        <Card id="footer" className="p-2">
          footer
        </Card>
      </Card>
    </div>
  );
}
