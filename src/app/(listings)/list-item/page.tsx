import { ListItemScreen } from '@/modules/listings';

export const metadata = {
  title: 'List Your Item - Kuthakai',
  description: 'List your item for rent on Kuthakai',
};

export default function Page() {
  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
  };

  const handleClose = () => {
    console.log('Close form');
  };

  return <ListItemScreen onSubmit={handleSubmit} onClose={handleClose} />;
}
