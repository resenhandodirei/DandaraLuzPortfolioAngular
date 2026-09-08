export interface Project {
  id: string;
  title: string;
  category: 'Photography' | 'Digital Art' | 'Social Media' | 'Strategy';
  imageUrl: string;
  imageAlt: string;
}