export interface link {
  rel: string;
  uri: string;
  method: string;
}

export interface MainAttachment {
  big: string;
  small: string;
}

export interface Product {
  type: string;
  id: number;
  author: string;
  likes_count: number;
  liked: boolean;
  title: string;
  price: number;
  main_attachment: MainAttachment;
  links: link[];
  created_at: string;
}
