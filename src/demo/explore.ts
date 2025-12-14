import { Category, ExploreItem, FeaturedItem } from '@/modules/explore/types';

export const demoExploreCategories: Category[] = [
  { id: 'tools', name: 'Tools' },
  { id: 'cameras', name: 'Cameras' },
  { id: 'fashion', name: 'Fashion' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'home-garden', name: 'Home & Garden' },
  { id: 'sports', name: 'Sports' },
];

export const demoFeaturedItems: FeaturedItem[] = [
  {
    id: 'featured-1',
    title: 'Canon EOS R5',
    price: 2500,
    priceUnit: 'day',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQYEFVnxX84Uu_TTsF_aKCxdd2sbZ1le6zfMlJ5qvgNipIAtVxU7UHBHv4vdyVqVrlBliIbGOu7pIW_wHxdTJkBjoUkViflTuOfEm6C5vL1KHtn8gIQbFlokUHNZhLDVe6t9_tXUc23OxzNIiPWjuCExEqNXbUgXkWGoIJYLknyh661r4vijOVbIYqYnCKpv7KGwSWsS2hPoOgeQsGS2ZAXATWeSD22NyT57KgoI1kIyBWcU_XM38lNQ7MONxsOr3oxarCUVScBHYa',
    imageAlt: 'A Canon R5 camera on a tripod in a natural setting.',
  },
  {
    id: 'featured-2',
    title: 'Louis Vuitton Speedy 25',
    price: 3000,
    priceUnit: 'day',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCV2JcRcd9O5QEbFrB-YFVBBjOpCjbYYq0BVxpimEqfoBdT7BTgFyIONUJAAqy4lTip5jJ7h3IDsavIpdEThS7DgDTcZSmrLvIdNA0DgmJfeo4g-fbOZEMWO_0UzGI1zmZrpTqTA-EisvvSi17GvhrCYpkw1fjvTxn18ecgau-e9JWv7cxXJBRwv3Jwl59JKo_0rVvbOB8Vulo-iIu5jrBxm8LODwlGKB1nkJTqMmX0EZtPHLjegSE5hfRpSROGdGIJvXoIrU8fzhXg',
    imageAlt: 'A Louis Vuitton handbag displayed on a clean white surface.',
  },
  {
    id: 'featured-3',
    title: 'DeWalt Power Drill Kit',
    price: 800,
    priceUnit: 'day',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO-Q2EtaNJrkYHEAdo3zopVo20aKqFML9k7B7ra47QLuRowF6aaVn0tATjChYQmyy9JMQfcwREYo3PNKAwfLzhGFioMoZ1bdMAJixHUDLOjF2lintXbuUjO81essTOY62nc9oeYdHf-e7xCwtLYaCjJ4wqnp1NfGnZvup5Vq4KKd7GfpzjgU6rcXL8ZqdDKJ--29f5EF4qEDVtBWsFTmSPi7OtTczDwNyhNiex9AIt2uDHMh185oCqAEL832ht3o2xmuaUMALhmE58',
    imageAlt: 'A yellow and black DeWalt power drill kit neatly arranged.',
  },
];

export const demoExploreItems: ExploreItem[] = [
  {
    id: 'item-1',
    title: 'Trek Mountain Bike',
    price: 1200,
    priceUnit: 'day',
    distance: '2 km away',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqbnmFU0LDdklQpgWUgBiE2uC3pRDT4k2hyLEEm0L_8OIB7s0l8i3axdqSyQMvZgHJ235a1ZVt-Lqrd_BvhEksk5CES3nolIg8TUd_-pvPNBPMsk1pkB9xkYnG_d-QGaQuLGZwh2aBCYjZ3kRcnKkTUYUT68vOTEoqptPk-YLa6cO1JY9YAXPiOTuN8WdpWcgiNxO61umWkSKwJ4KhCoIVG0ESuQd0djS4U0BDl1BIoeCbJiZBhjZ0DQKOqo--nnTqtlJHj8MLgyBT',
    imageAlt: 'A modern mountain bike leaning against a grey wall.',
    category: 'Sports',
    owner: {
      id: 'owner-1',
      name: 'John D.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVWFTrO3JGzX6yz02vjpD22B0piBdoB39mBJ2YOB-ZP9OIIOtsVE_Hf1azTpBBMVVEwWxvwZDMKMfZB0pQ4GdUMvzawCjU4Yhx22t3QJx6Fml_HKKVRgu5I-h5y_5s2-PUJxd32KjWL3LjAFpgG1sIDEdXHbEqwYwHbz8XGG2jKqD2Xfm8fz_bYlRtGU2HtJ9gTNf8c4QkhMVrebliylyN2mGWDzWdn0VbaenbokCs7Ta98hGTZltFHrf_UXeMi5EAmxdsL5Pn1tnI',
    },
  },
  {
    id: 'item-2',
    title: 'DJI Mavic Pro Drone',
    price: 3500,
    priceUnit: 'day',
    distance: '5 km away',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEvU2CVOCI46Qk7KuZVHXGYtDiEOf3RXuGXOwo5IpRWl6fFvkIpONv1pnGIQgj6S7GLQp3JvHtndM7JLztN5zSVIY8taHxZhqRWl9sayUBgX7nTVwlUPkRKO8So5Yrq8IJEfaLTmTNzqa617baDFH05C1uta6zN27p1wogx8tUj1MvOTGnHUI4M9IKRWmnwtyjRwb5RTvB8WxvPl9i9-UOs0M93Kfn5onObdAMgCpc1gJooiYcqPZUim3et2VIDVHU-oPzz0D8Y-AJ',
    imageAlt: 'A DJI Mavic Pro drone flying over a green landscape.',
    category: 'Electronics',
    owner: {
      id: 'owner-2',
      name: 'Sarah K.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD80sElJ_l8R2LFr_HSBiDtlJMcW3t167l5KWUWeCuhDz9eGPe6VFfiqW6m6s7AagWaE2vBO-m9uQ6Dasm6y0kjuyiSWs0wZaX1MCUiYMljgQRgfYlHTAA_wrp4dgUsB7XZESPAr_iRl7AUOAWE0BTG7faucMA76gjwEO5FTFZU6AaTb8u9HDOXKfzGbMilgWjHHHFl7z2YjZRSAC6gm-0c06kiNqxCY9Z-qxhxZ5mI7IdwOg8MKOWSS5_lDGALfrit60PDugepShb6',
    },
  },
  {
    id: 'item-3',
    title: 'JBL PartyBox Speaker',
    price: 1500,
    priceUnit: 'day',
    distance: '1.5 km away',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWFOLpaQOKTp-1bEG3gnmkc-g59-S0LesmDU1ycpiJvHq9ep5TdWgJDWZQI9AOtlBhsGx23aYKaOO6vbH0wrXyR2e1rZwJLv5rzhkn_U2EQjbKLY5xF8qIfkDK4LyYybHtCaPNC3_VscUHbmttK_lVn_bBRFNwSoAhzJGLAmTbfkOq6fkfBrHSvPEgROPK1Uo64Bnn9aaaZLi0s7pL5PtWm4iRwH-GGbGO187GR1xZ_9sCWF1-zDG5v2SLuQCM75i9_iHnJu5p8ACs',
    imageAlt: 'A party speaker with colorful lights in a dark room.',
    category: 'Electronics',
    owner: {
      id: 'owner-3',
      name: 'Mike R.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlXz8jQ83vyoNm5eNVFa8cHwxoX_ebR1P7CKF0L3k_wpMpaAkDXYSJ8jk_VjPDZUiB6jYFH3qvo26AJAHHmghWbyPyMC9mkIabQBCF2n6IcZLDVZSrIVhI91wIH-eNrGp1neb9X4zFfaAmDjOlvwE_jwcfRsoOtN791XcxAsFxa1Ufw_U3GVkYG_TXVjnIkJeh-4l7Nc2OuGCQVEK3_1o8sSTQI44ki8yqq1gLKtkoftl5amB0GIyXldtfi68hyNLH2e48ajimeW62',
    },
  },
  {
    id: 'item-4',
    title: 'KitchenAid Stand Mixer',
    price: 700,
    priceUnit: 'day',
    distance: '8 km away',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxDk4Tk376gVszezen5A7CcMr6pYqk8q8CyBMy5BmPmwby5o6g_3jo3gVVHFCTfGIBQDpQwFADk5oZ2vN_8etGZoPZE8vBt9_nqY74tk2EVLAYu3NaD96IR-A9LVwzqHDuInfpWQdxrnmTdCIpCi8axPSrPqzcsU7IfB87zVgIzgeYwc7zKNutufCKIiV_Q9x_zlZ9dZc7wUAo-lb_KZpEfJy_0JXWc8D89iKXZTgvm1cS0n0amfNRhNV-YaD6zAnjY0oKw78hATiF',
    imageAlt: 'A blue KitchenAid stand mixer on a kitchen counter.',
    category: 'Home & Garden',
    owner: {
      id: 'owner-4',
      name: 'Emily C.',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRfP0mL4QSvY6REnmSck4Ko9Nmt9JOFhlS4Jo6Du5eg8e0_-YKwN-Mf_aX0ZcTVPutDeYrF37VKLs_jp9IUFiK1Z2-fjGNI2WoA-c3FeT3rLsQB0-u_nFieAW4AibtLPjPN5_wvC-z4Th_cD04Wwcrewj9rDYV4BGknNi4FdReY_z5agTpc16jen2hF0GKm0cQiKdy-wr3Y6f9v7zse0gjQSNaWYCc1oILVgknFtpZr0qmMzV7vRyDuUqmZcI2R4JPg9g1B-dCE7ag',
    },
  },
];
