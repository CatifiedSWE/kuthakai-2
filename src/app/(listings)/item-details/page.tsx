import { ItemDetailsScreen } from '@/modules/listings';
import { demoItemDetails } from '@/demo/items';

export const metadata = {
  title: 'Item Details - Kuthakai',
  description: 'View detailed information about rental items',
};

export default function ItemDetailsPage() {
  return <ItemDetailsScreen item={demoItemDetails} />;
}
