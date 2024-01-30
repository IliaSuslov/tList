import products from '@/mock/products.json'
import pages from '@/mock/pages.json'
import pricePlans from '@/mock/price_plans.json'
import { ControlledTable } from "@/components/ControlledTable";

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-2 gap-4">
      <ControlledTable data={products} />
      <ControlledTable data={pages} />
      <ControlledTable data={pricePlans} />
    </main>
  );
}
