// Community feed posts data

export interface PostAuthor {
  name: string;
  avatar: string;
  timestamp: string;
}

export interface Post {
  id: string;
  author: PostAuthor;
  content: string;
  images: string[];
  likes: number;
  comments: number;
  shares: number;
}

export interface FeaturedMember {
  name: string;
  description: string;
  image: string;
}

export interface Announcement {
  title: string;
  description: string;
}

export const communityPosts: Post[] = [
  {
    id: '1',
    author: {
      name: 'Alex Doe',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBf3CanO2xM4c1kSvLFG96zGPlUvu7kCtTGFMRK3zVEBnL-j4E_741q3z8X2JyUrGlUoLEkShIeRPVNn2cEa0qlA627QXlYlaLYUkkGKC_gij7PZgljP6AqhPQ5xwTGO_rFlvNHh4SvLCSZUnxT4mi-pAj4pC-AK8gRYIdsIHnoNf2btitL_ibeiDH3eoSoBhyRZT8Z1gsN5K4OryjduVuk-jGQ0iw83hlitn5BSrxFSmVPdxP-UM9mApMTrx3yPvz943kBdBAAuPPG',
      timestamp: '2 hours ago'
    },
    content: 'Just had the best time with the vintage camera I rented through Kuthakai. The whole process was seamless and the owner was so helpful. Here are a few shots I took!',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuA9h6nSnov4ZfsFP2J9NuYqEX2Td18pB7dvotixIgCYgiYbkSkUNBWQDRxQJ3PDlC6HjyLE9CZvIHsvwGwIoBrW05-FsxwUnZMvwp6L1Q1nYevyUSSFTZi_wrpEM6P9xsA0IUbj4FwpuGRfk4rl1dRkWid4VavkNrYhjJcMMHGeu-bvnGMxC3DwfenSoIVpRq4lm4lr-EKYuFycqkMthGtPgeP51lHo12TRFhy3plRhvaUXv0Ow4pwrd3I059ZYFEEcdqUlv5OChQQ7'],
    likes: 1200,
    comments: 345,
    shares: 128
  },
  {
    id: '2',
    author: {
      name: 'Maria Garcia',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGZ9P3-hgtGX5vNWusI2loTQ_-dNG5PQst38J3QNzZ_K0T1iGm5zLjSs-aaDD7lcuAdGHnJDMe1sZTTMF1QPfZq4GrQa1oQDYSrH4qX7A0KSRl_ZvwWG0T_Qu1i6EJh6VhcVvc-5HLoshqh-f3dL5HBqGUI57XFuS0TDg_WOeAwD7ABHdI6Y-7lePNFBezL5dza1hrdeyB_IuM0pcK5DpAs2ilIDX34kkDX3GhbEB9pj6boVNZQtekQl8Vfp37f8CwTYBOMmyttj8a',
      timestamp: 'Yesterday'
    },
    content: 'Rented a full camping set for a weekend getaway. Everything was in perfect condition! Highly recommend it.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBTmQ98Y94hO5wESi_tAKCmrpP-hYV8PwljlQIg5KREkXmzwWF4cDNcbmrXlLoZBVorHnFSSQ-Kd8VF_YwW5OwTYGkwvmWAMrZLNVHII0rmbnkNTXCBeKRb-AJT_Z6NdIePWTeIEQJNh1r60B-tEjCroPO7nm4cUE5eQeXAH2Ne3x8-2EoEjlqWwte5O3xXGh9HZQ0DOO4RWhdiwlb5fRxC-3zb_WPuPZWXjPpWHNW9lcCNMSw-PWiu2vBcpH_yLw1upp0ird-hxciN',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCmRNst1tiaYkU10ocHWaHWQyRJuGfFARgwhTMxKbzTQw7Vvy0F4xslayAPCqOu587irCzfUHir-c6L9q2MsGqTXthHJNHBZ0VyM0Vj6jE6Skdud6mR8fW2dX-INeBME264ZlDzcYjLd_P0jlmJYUhYo97LcO8ik9pZUjKM40arXPkMMpwCF7x-3qOoe4qrLeb1QNEuAajG9EGpzFicAK8O6O89dU2uIwCD7JKyLvirDmDnXDQx35rPPEEMlOEm9dqD5ulittr0d27N',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCETULprM9E1L9qQgc92SqBcHjt2AGgRW9QsVjb8NeBANgaDOLUjPMmdyS3tEIz5bpNWJsn6j65qXc7gcvZXqDhSvOahTfPh-5wOL_XKvPBX141cVXoeSx8s74D9P3mJx8neFsXRJZKU6DV7YsIiDm61bNiyODtTvYueT6Yk2_0cX3Ar4R3VWhBZnUCKmsBA1Xxxv9npbhsIoQTCNKK1iaq0wjdweQC68Am_EgBs9NoaI6BaQx0Mv4qN28SQ8gz57aO__Kx6jdKAhgx'
    ],
    likes: 892,
    comments: 156,
    shares: 94
  }
];

export const featuredMember: FeaturedMember = {
  name: 'Jane Smith',
  description: 'Top-rated photographer and vintage camera enthusiast. Check out my collection for your next project!',
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl7zqkhXKhevSGsr0TDcv01yltTlDUUoAK-znr872Wz40yjMEL7DLfJvPCWnbZBOuUEpGe8Yn1ZzjYuCk9isJkpmo76GQuiV0qZGXwwkWwYVH6Tu6Ze0bYpf8wstLujGvDPb-Y9ENdndbrIdFJ4GtR9BcJQrFbjfwVPubNUoLADCY14JLXMmnrAyBDSTqtU1kC0bKNGWzU-OnZLQs5dP8LS2rbOa_cO_F7O1cAGCkjms_jNdVho7umGvLVsV3WMxHVyABnr93gl4uR'
};

export const announcement: Announcement = {
  title: 'New Feature: Instant Booking!',
  description: "We're excited to announce that you can now book select items instantly without waiting for owner approval. Look for the lightning bolt icon!"
};
