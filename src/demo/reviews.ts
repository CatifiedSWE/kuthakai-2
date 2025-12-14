// Demo data for reviews and ratings

export interface Review {
  id: string;
  reviewerName: string;
  reviewerAvatar: string;
  rating: number;
  comment: string;
  date: string;
  type: 'received' | 'given';
}

export interface RatingSummary {
  overallRating: number;
  totalReviews: number;
  ratingBreakdown: {
    stars: number;
    percentage: number;
    count: number;
  }[];
}

export const demoRatingSummary: RatingSummary = {
  overallRating: 4.8,
  totalReviews: 124,
  ratingBreakdown: [
    { stars: 5, percentage: 75, count: 93 },
    { stars: 4, percentage: 15, count: 19 },
    { stars: 3, percentage: 5, count: 6 },
    { stars: 2, percentage: 3, count: 4 },
    { stars: 1, percentage: 2, count: 2 },
  ],
};

export const demoReviewsReceived: Review[] = [
  {
    id: 'review-1',
    reviewerName: 'Alex Morgan',
    reviewerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc6VJ2Csfk-jzCH29cu7OeeI1dl-2elrDDOxtMXmYZVw8x1-t85e7Hm0O-jQTOojWiutVA9NaLW1lz60eh5ULQbvYfEY6xdCGt5or19I6CR7O1p1FpdwgNl58IwujBcRm0v0ZuovsqAPKWLmzMA3zGjB7I5MXUG02V2fCJQcg9JFvJhTbXgF3PkSp3TesQRZPkG7_7_IA01j3BPeUsWSDlAc1Rj47Xuw4xoMkrWa-TcdO4EQdJjkxGaTsLciTm9xgEI4MiVYm_4yRW',
    rating: 5,
    comment: 'The rental process was seamless and the item was in perfect condition. Highly recommend this user for their professionalism and clear communication. A five-star experience all around!',
    date: '2 days ago',
    type: 'received',
  },
  {
    id: 'review-2',
    reviewerName: 'Brenda Smith',
    reviewerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9GpzE2L5o6G-gTJCTHmm_YqSJSfJKt_daJtPL0xZudzQqsnRdqEHEkFaxNJs7cHm51LCwF9T2iH4RZH2r1b29Ael9B6xT1I0AHHV9XPF-XS7vmkgTbIB4XoFz4crl9eQU9Xqn5tE2AuHPRH3ZHHBBSSiG4UnXBhnrbcYEN_Vc3DJTpW6TuwctcWp-aeYddz5Mx2zkUx9bKbUS1KoLzvhy-vMt_6ylV1SqsVata7VY4jUnviS5VaEgU0W6VUz6sZKIyspZkSc8k62E',
    rating: 4,
    comment: 'Good experience overall. The item was as described, but pickup was a little delayed. Would still rent from them again.',
    date: '1 week ago',
    type: 'received',
  },
  {
    id: 'review-3',
    reviewerName: 'Charlie Daniels',
    reviewerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzuKKH76KYnjkUS45S01a1yhWqwJpPcg1mNx1rZ_eiEo69e9Zmr4wQE-rJBCzMooR2zr-R6ab3grq7nQLDkOw8dGuiGisb6PYpBsXt7pPGSxHo35D1llSJRoXAlIMFtAjAB2ZfFh4eoo2fT8WHBXJaortzHlvUKWQE03NFZHD7mg-49qd0gOZE8LfQwMXyT-zogoMNK9D0fzuU_Tc48nRifow0Qul3gWSD42qY2RR-i5GLVlgK7_4koqEj8tUgkcNXOTLz3mK6r0zg',
    rating: 5,
    comment: 'Absolutely fantastic! The item exceeded my expectations and the owner was incredibly helpful and friendly. I couldn\'t have asked for a better transaction.',
    date: '3 weeks ago',
    type: 'received',
  },
];

export const demoReviewsGiven: Review[] = [
  {
    id: 'review-4',
    reviewerName: 'Sarah Johnson',
    reviewerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRYMh81J_arYiJWBhogozN2ChhKKb3PHoQx7L8G8LqI9shGAcNBK9KUQaXK2aFfsvh9ceW33xkkhNaOiPUg7sQ5oeAo_wulW4uJbeHcseYnLHhAiK0eFewFGcNAUduyNet5-K78Z9i9oLsbHNYhScOtvWGX2sS5ObT7LD4YtRn7f-RS6PwFxqinReZBiQssVcilLv_BAc66UF05x6EOnyGE8FuETbDCK5CLKvznDBTBVzP7OWLUyv2C2oPA3qLpOxjEIYAINvypyCO',
    rating: 5,
    comment: 'Great rental experience! The camera was in pristine condition and worked perfectly for my project.',
    date: '5 days ago',
    type: 'given',
  },
];
