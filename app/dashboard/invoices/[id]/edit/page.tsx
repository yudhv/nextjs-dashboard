import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/edit-form';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  console.log('params', params);
  const [customers, invoice] = await Promise.all([
    fetchCustomers(),
    fetchInvoiceById(params.id),
  ]);
  // const invoice = await fetchInvoiceById(params.id);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${params.id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
