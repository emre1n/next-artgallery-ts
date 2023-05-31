export type TArtworkListItemModel = {
  id?: number;
  artwork_id: string;
  image: string;
  title: string;
  artist: string;
  description: string;
  isFeatured: boolean;
  onFrontpage?: boolean;
  edition: number;
  remaining_edition: number;
  price: number;
  currency: string;
  createdAt?: Date;
};
