import products from '@/mock/products.json'
import pages from '@/mock/pages.json'
import pricePlans from '@/mock/price_plans.json'
import { ControlledTable } from "@/components/ControlledTable";

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-2 gap-4">
      <ControlledTable
        data={products}
        headers={{
          'name': 'name',
          'active': "status",
          'createdAt': 'created'
        }}
      />
      <ControlledTable
        data={pages}
        headers={{
          'title': 'title',
          'active': "status",
          'updatedAt': 'updated',
          'publishedAt': "published",
        }}
      />
      <ControlledTable
        data={pricePlans}
        headers={{
          'description': 'description',
          'active': "status",
          'createdAt': 'created',
          'removedAt': "removed",
        }}
      />
    </main>
  );
}
