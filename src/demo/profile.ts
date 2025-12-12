import { UserProfile, RentalItem } from '@/modules/profile/types';

export const demoUser: UserProfile = {
  id: '1',
  name: 'Aria Smith',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpNl3hVXeHUE03ruhI3FNvEj90eZIh8N0clDt96XNTvY4X5g2wJX3X1Oj36YNb3CJOXUfpppCEuRuuXLDPocqn0llRlENwPKa7F4hilcnLnaNkh5p36tLZ7-ccG6C5eAtvhq47utivxtBOoTjCh2HTFfcibWakUBq_d6yVURbHgy76dqJ-9JZN8KkyhqQXdKXaQoPltRUWKuaEdaMaiqRBO7gPgeJbwrF9M8afjifeKuzMBRDGl6VDsmcKkLeFihUVQNCxupVZpKNs',
  memberSince: '2023',
  isVerified: true,
};

export const demoProfileItems: RentalItem[] = [
  {
    id: '1',
    status: 'Listed',
    name: 'Professional DSLR Camera',
    price: '₹2,000 / day',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfXHCjixNky8j3h1NVQ-swXtvIXnrSkWdzaWbZj_H2ZtoD3dnHsourr_ZUkHrsuZ2QAnmEYTqEKbFZu_jh1SIaSwP7r5BgjXMU4T88UQRRxgCE4rL_fKafwXrsuH5rdB_Jr5Ep0cMUuqNgIeEDXuCeqxG2FxJIUkupBVP9yz6YcHY_gC3DPUFhnArCmeojRHVO2G9ifLh3WJc_dsVOIn2GRvzojxxNyBHY0XY861yK3xqqTKCvAEWO-uU46x2u61ogFDn7wsB9GzW-',
    imageAlt: 'A professional DSLR camera on a clean background',
    category: 'Electronics',
  },
  {
    id: '2',
    status: 'Rented Out',
    name: 'High-Performance Drone',
    price: '₹3,200 / day',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCT0ccpkLTj77hOV023GJy3zqXqcfc4ek7zUkHwWJjLATCSHJBER5zNmgIw27y7CC9w0DGA3HkTIKxhlLDiV4RY6sj-xTf8NzSQNT8MUd_s5rrHCzsIwpTJ676o_L6-wFJlbn3JBbtetRxVkteF9hIC4Vv4YvTuUvW3VC6v46iMOk7B-vaBQ9zw7RAeaWb4VM0BVed-OlOm9U93xvumUrAKiupNGzIn4vj9Pb6tD-jQVZekN1_dXgYDbnuxhalAT_dg0izdBOwfrZvH',
    imageAlt: 'A white high-performance drone hovering',
    category: 'Electronics',
  },
  {
    id: '3',
    status: 'Listed',
    name: 'Vintage Film Camera',
    price: '₹1,400 / day',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBev36dtwbqcqUbmRR9qf1gi8fz7RUH5YLmFBHQyjv30UzH6EWJwGNN_7rtdGEYlpgIj_gOI3hOwk8VXWZjiSRCUhQDzaO1klbQlbTMY3lEwm_qmTiXAhAEJEvyKCg5rWCy_42Gt8CbU3HTyXhzkHUZ6xqCGPh09_FAF0pg4hQ5L0QenszkBv89udM1VdJVoOwvkuBU8W2D6Gl_1yHu68uR-zEKV5tidu4nEsO6JmaZK8fLGqIL90rmPxmyZVO6ahirtsfBFcBhA8gm',
    imageAlt: 'A vintage film camera resting on a wooden table',
    category: 'Electronics',
  },
  {
    id: '4',
    status: 'Listed',
    name: 'Portable Projector',
    price: '₹1,600 / day',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnqMK1Cx4nkjs2PpJyS-bQe50xwZU9aQnnvkzkqC3KhzLQZ1UYvJcEnLspVtvNunh13AOdKoLaHdCPPr6CmQA01GeY3xevw5NzkwjnQLl5qFkvXrSWN4m6A4Ma-P1Wzf73jqX0b7jrKR0EEBqI51jGpx52mafch_1UjgyO8ug1pajQdbZYd7QWfTmhcvEv9NSvHDacAh6zhJUKmj5vjpeQ_-oFR_kcc7f884m2mLq6PLkZHuYRXQh3x-y_Qn8cjcvikDzQpRY0f-TR',
    imageAlt: 'A sleek, modern portable projector',
    category: 'Electronics',
  },
  {
    id: '5',
    status: 'Rented Out',
    name: 'Mountain Bike',
    price: '₹800 / day',
    imageUrl: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800&auto=format&fit=crop',
    imageAlt: 'A rugged mountain bike',
    category: 'Sports',
  },
  {
    id: '6',
    status: 'Listed',
    name: 'Gaming Console',
    price: '₹1,200 / day',
    imageUrl: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&auto=format&fit=crop',
    imageAlt: 'A modern gaming console',
    category: 'Electronics',
  },
];
