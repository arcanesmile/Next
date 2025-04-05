export type Post = {
  id: string;
  title: string;
  content: string;
  category: 'graphics' | 'software' | 'uiux';
  image: string;
};

export const posts: Post[] = [
  {
    id: '1',
    title: 'Mastering UI/UX Design',
    content: 'Learn the core principles of user interface and user experience design...',
    category: 'uiux',
    image: '/uiux.jpg',
  },
  {
    id: '2',
    title: 'Graphic Design Trends in 2025',
    content: 'Explore the latest trends shaping the world of graphic design this year...',
    category: 'graphics',
    image: '/graphics.jpg',
  },
  {
    id: '3',
    title: 'Building Scalable Software',
    content: 'Understand the architecture behind scalable and maintainable applications...',
    category: 'software',
    image: '/software.jpg',
  },
];