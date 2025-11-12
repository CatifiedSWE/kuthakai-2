export interface Story {
  id: string;
  name: string;
  action: string;
  image: string;
  story: string;
}

export const demoStories: Story[] = [
  {
    id: '1',
    name: 'Sarah K.',
    action: 'Rented a pressure washer',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPGDPfMq0NHguBBGO_86ntCsZiudMUeAGWK9zrmU0r5oZ0Y582z0hQkw68hzic6PB0UeC08RKkzYzSjScAmyosM9lEjXg9ldeZvXTrUQZgOgrWC2kSSn4Sj9SBn2eIAapxHaq56q6WW_3iAVlmQW100V3frexEqM9OW5QTzHwe4iAtinsOgguNkkN6a4T71d2aIwQbtGRxz0avv2tyOiqIZZiCfZdW-m4wr9MLRCD6QsYcC-qFD5vsElrBd-DP1qisEqaCJcN6AEvl',
    story: 'So easy to find exactly what I needed for my weekend project. The owner was super friendly and helpful!',
  },
  {
    id: '2',
    name: 'Mike R.',
    action: 'Listed his drone',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmgbBG8XUj5oVcnA_C6pAPD-y4BjWTCP_2gzYs7-zv_1OKSP9jgqU5sfoUPxrkB1vU2CNOfaDKc93qBe6s2hc2_EpT7p71bE0PGz9sGH_syJidZuqvbMQk4JsQi8PCzZdWxbcyCTZp2B-H5YnvWNgOwu3SkAXGnprEau-hei8R6DRSKDh5qRD5uwR5MjSWBSL48mNYnBeGcWhoMCoVj18fgRFEOZXWT9ZVq77RyMNpfyrntEWJU-d4zZBa8UiqG6nVcsZO182vAI3K',
    story: 'My drone was just collecting dust. Now it\'s making me extra cash every month. The whole process is seamless.',
  },
  {
    id: '3',
    name: 'Priya S.',
    action: 'Rented a camera',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPGDPfMq0NHguBBGO_86ntCsZiudMUeAGWK9zrmU0r5oZ0Y582z0hQkw68hzic6PB0UeC08RKkzYzSjScAmyosM9lEjXg9ldeZvXTrUQZgOgrWC2kSSn4Sj9SBn2eIAapxHaq56q6WW_3iAVlmQW100V3frexEqM9OW5QTzHwe4iAtinsOgguNkkN6a4T71d2aIwQbtGRxz0avv2tyOiqIZZiCfZdW-m4wr9MLRCD6QsYcC-qFD5vsElrBd-DP1qisEqaCJcN6AEvl',
    story: 'Saved so much money by renting instead of buying. Perfect for my one-time photography project!',
  },
];
