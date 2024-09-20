import { link, MainAttachment } from '@/index.types';

export interface ProductCardProps {
  type: string;
  id: number;
  author: string;
  likes_count: number;
  liked: boolean;
  title: string;
  price: number;
  main_attachment: MainAttachment;
  links: link[];
}
