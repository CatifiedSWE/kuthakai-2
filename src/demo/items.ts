import { ItemDetails, ItemOwner, ItemReview, ItemLocation, ItemImage } from '@/modules/listings/types';

export interface Item {
  id: string;
  title: string;
  distance: string;
  price: number;
  image: string;
  category: string;
  owner: string;
}

export const demoItems: Item[] = [
  {
    id: '1',
    title: 'Canon EOS R5 Camera',
    distance: '1.2 km away',
    price: 50,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSQ-_lUwwzZlALxlSNLosZuW5NPsuXfWDhKVb9uXMUA_MWqamo55bDgg9bpfN9dCNPTe1Jz8SHAG3EXAgcXTF4bgyNPhvCkgyTbmslF1tLFtYoYqXqbqS_gTi59mXf2M4-pjIkXCH8idYhkkkfRBsu51FJs426ABUw0-cOF0gW5Zjstba1po2PdscHj-uiQbeblDG9F3hLyUQHfYNLn1LVpSiXFFVfYcsi_iz3NzBnBMqEdOR_Qzsc0JoGBO9nJZFki4CiRU7bIvJb',
    category: 'Electronics',
    owner: 'Rajesh Kumar',
  },
  {
    id: '2',
    title: 'DJI Mavic Air 2 Drone',
    distance: '3.5 km away',
    price: 45,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBe1i-3sc-WiJQht9G7Zx08HJPX-JZI6yPqcQjO3cZzinbl8dPvhGA7ZsMfHyEKf2F4WaZ29PAAB5G8SNMyYiu_WCJIBBeyC2OU72WIaf-tTgrtMctfrjQxjfgOkBO62Y5a_-Bk2dfzqRTLk970EA6h2r1qHYesefZgOrDEJ9YacS1SyBbRR430WHkEN7XEMsPjvdwS-cIkDdhooBUciJTt4I-MqDACZX50gMeBcE8Qxk94MLp4ggG4cwbtlVUH5gr9PYLhfqKZHeDH',
    category: 'Electronics',
    owner: 'Amit Sharma',
  },
  {
    id: '3',
    title: 'Inflatable Paddleboard',
    distance: '0.8 km away',
    price: 25,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTvRYptsdvuEldNgbV8lUwjF3iXjACErCecZnQQeeZK1aHS6sdw4AyelHiCPADpcfaTkNj4ioRq91MGHIrodb9Tv4XC2rY-nPikP9odp5nLqsZqOl_tCQKkCuqUgC1dQG3l2jHJMDpY_RCWDhsff2AGssoZTjThGHiVMWorFXA0f03F0Cvo17ufAfiIbXnM4MX8SjevmPqtfytqCePGO2poVMAv3Ktrdq2ecEr22rLIIFI2Aj8owuI3f-zCxYjQt0-CUicHigEqfCT',
    category: 'Outdoor',
    owner: 'Priya Patel',
  },
  {
    id: '4',
    title: 'DeWalt Power Drill',
    distance: '2.1 km away',
    price: 15,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDptXKjR29Flxsl9lYEWTyTGBhaOPFzGpdbHLHmMXPzcbU4-SJLn4Wdle-Nuwae0GmD46sxfkGwEAPU8xeTUFJG_Y-NbG348nR_wGi-ZJ4gVUmxHujW8m42JtubUoPnePLXPSA3_jW-dHKQuGg6eta_tHjaQ-nkzHALFRSDJuxMn5v50mmx5nsSfc-nbNnPyrTLgH2P1PHa-OhwT5TX22F1D2qUcwBABSam2P94XT0lW4AkcaAVY_8KCsv1LxRjhxQWO0Nzks4ghSJ9',
    category: 'Tools',
    owner: 'Vikram Singh',
  },
  {
    id: '5',
    title: 'Sony PlayStation 5',
    distance: '1.5 km away',
    price: 30,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSQ-_lUwwzZlALxlSNLosZuW5NPsuXfWDhKVb9uXMUA_MWqamo55bDgg9bpfN9dCNPTe1Jz8SHAG3EXAgcXTF4bgyNPhvCkgyTbmslF1tLFtYoYqXqbqS_gTi59mXf2M4-pjIkXCH8idYhkkkfRBsu51FJs426ABUw0-cOF0gW5Zjstba1po2PdscHj-uiQbeblDG9F3hLyUQHfYNLn1LVpSiXFFVfYcsi_iz3NzBnBMqEdOR_Qzsc0JoGBO9nJZFki4CiRU7bIvJb',
    category: 'Electronics',
    owner: 'Arjun Reddy',
  },
  {
    id: '6',
    title: 'GoPro Hero 11',
    distance: '2.8 km away',
    price: 35,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSQ-_lUwwzZlALxlSNLosZuW5NPsuXfWDhKVb9uXMUA_MWqamo55bDgg9bpfN9dCNPTe1Jz8SHAG3EXAgcXTF4bgyNPhvCkgyTbmslF1tLFtYoYqXqbqS_gTi59mXf2M4-pjIkXCH8idYhkkkfRBsu51FJs426ABUw0-cOF0gW5Zjstba1po2PdscHj-uiQbeblDG9F3hLyUQHfYNLn1LVpSiXFFVfYcsi_iz3NzBnBMqEdOR_Qzsc0JoGBO9nJZFki4CiRU7bIvJb',
    category: 'Photography',
    owner: 'Neha Gupta',
  },
];

// Detailed item data for item details screen
export const demoItemDetails: ItemDetails = {
  id: '1',
  name: 'Canon EOS R5 Mirrorless Camera',
  description: 'Capture stunning professional-quality photos and 8K video with this top-of-the-line mirrorless camera. Perfect for weddings, events, and creative projects. Comes with a standard lens kit.',
  pricePerDay: 1500,
  category: 'Electronics',
  images: [
    {
      id: 'img-1',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCY8umBfxIkzfYzg8UGjbVN_5_HX9KTp7bkz5AhR_lqSjrBZtaS-uNpmeHvcXn8DXtsMyUAByLAeAdtOUFnAnG1sWCG2iYYUak_62Om_ze2nBhNTOGJ42Tg_UYEeewh6SqpmOm0xk4WwY_WYL-962-ImJvIeWIH6jfZt4ymHYba1las-gcfABwkvHLBDGCDQVNO77yWnfoWbaU4qLjOfEohdnb2Cd31jB0HMRoiATT-Q8YhTbDvaCKI318RCND_K0sokF55WONG_PNT',
      alt: 'Close-up of a Canon EOS R5 camera lens with soft lighting.'
    },
    {
      id: 'img-2',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSQ-_lUwwzZlALxlSNLosZuW5NPsuXfWDhKVb9uXMUA_MWqamo55bDgg9bpfN9dCNPTe1Jz8SHAG3EXAgcXTF4bgyNPhvCkgyTbmslF1tLFtYoYqXqbqS_gTi59mXf2M4-pjIkXCH8idYhkkkfRBsu51FJs426ABUw0-cOF0gW5Zjstba1po2PdscHj-uiQbeblDG9F3hLyUQHfYNLn1LVpSiXFFVfYcsi_iz3NzBnBMqEdOR_Qzsc0JoGBO9nJZFki4CiRU7bIvJb',
      alt: 'Canon EOS R5 from side angle'
    },
    {
      id: 'img-3',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSQ-_lUwwzZlALxlSNLosZuW5NPsuXfWDhKVb9uXMUA_MWqamo55bDgg9bpfN9dCNPTe1Jz8SHAG3EXAgcXTF4bgyNPhvCkgyTbmslF1tLFtYoYqXqbqS_gTi59mXf2M4-pjIkXCH8idYhkkkfRBsu51FJs426ABUw0-cOF0gW5Zjstba1po2PdscHj-uiQbeblDG9F3hLyUQHfYNLn1LVpSiXFFVfYcsi_iz3NzBnBMqEdOR_Qzsc0JoGBO9nJZFki4CiRU7bIvJb',
      alt: 'Canon EOS R5 with accessories'
    },
    {
      id: 'img-4',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSQ-_lUwwzZlALxlSNLosZuW5NPsuXfWDhKVb9uXMUA_MWqamo55bDgg9bpfN9dCNPTe1Jz8SHAG3EXAgcXTF4bgyNPhvCkgyTbmslF1tLFtYoYqXqbqS_gTi59mXf2M4-pjIkXCH8idYhkkkfRBsu51FJs426ABUw0-cOF0gW5Zjstba1po2PdscHj-uiQbeblDG9F3hLyUQHfYNLn1LVpSiXFFVfYcsi_iz3NzBnBMqEdOR_Qzsc0JoGBO9nJZFki4CiRU7bIvJb',
      alt: 'Canon EOS R5 back view'
    }
  ],
  owner: {
    id: 'user-1',
    name: 'Alex Doe',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3KeE6TKHN1quo_AVmKtDPl19XFO-qCmoiLY3wYnFN-T3LhQ4xMBmMSGDOCZBbavqmuAy4T1G4J3y6IJe5NzWnF1fDywFY_V0T5pG61JYyglx9hcQJ1DjPw6Sg4mgV5-bFBDt4I34ldZxHK_2T-qRbifpAnlRcjX1GJlzKQqA_4gh16kn4HHhxG79H67uez4RELFZ3vHdwtN-wpnKH419w7Qp6LrYCXAC4aAg2V19QRrgNQ1lF25r-0HWBIIbf2tHR0wv_Nkk-Cfvf',
    rating: 4.8,
    reviewCount: 15
  },
  location: {
    address: 'Koramangala, Bengaluru',
    city: 'Bengaluru',
    mapImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7EYv1AddQU0A6H7Dglbv4evY7U4BPl-u_Ra5nXNKskJXtHqyRSpwZS-pLDnNbKeTqROBCZQZu0y9RSSsi5z_l7z9dTdHBRlWVGHcxiKt9vJziFSqT_bke7WUD4-avqR5fNtnvvXxG9EnCbH5EwE6i2BSKjsmtj4OUN6LPt4E6AVp77PzhzQVhSdRyAYysopY8BcepYY0Kzi7EL3CWbrPYVRFLVKjKpeLPzr6Ni1zV0Z18_ZdpVtbSJLe9EYP1Twzftnt2egjiuZR9',
    mapAlt: 'A placeholder map image showing a pin in a generic city layout.'
  },
  reviews: [
    {
      id: 'review-1',
      userId: 'user-2',
      userName: 'Jane Smith',
      userAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzn3JpbCLkd5EODAFv6SRpJiIoKOPLT6m6EtCLRE4mBfKgjrr05F5iMRq70ci2Q2S51eD5HvX9vjSVoqQ-uUOIu4X8hsh9RwmjqKqgr_z_omBBJDoKLEbcF4X4VcybCpD6Pu_GxUHI-402KmRQpPhWBovwaTpsw1anLW3p1rU77jPTBhkqKCdO0OfTSjmpYnDHqHIrXRLZ2DijY7whgqWRjbN56f9nIlPksrEjeqPgNcoizoimBmrLVoHdvKZY4BBafCfPNmPkGDcp',
      rating: 5,
      comment: 'The camera was in perfect condition and Alex was super helpful during pickup. Highly recommend!',
      date: '2024-01-15'
    },
    {
      id: 'review-2',
      userId: 'user-3',
      userName: 'Rahul Verma',
      userAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3KeE6TKHN1quo_AVmKtDPl19XFO-qCmoiLY3wYnFN-T3LhQ4xMBmMSGDOCZBbavqmuAy4T1G4J3y6IJe5NzWnF1fDywFY_V0T5pG61JYyglx9hcQJ1DjPw6Sg4mgV5-bFBDt4I34ldZxHK_2T-qRbifpAnlRcjX1GJlzKQqA_4gh16kn4HHhxG79H67uez4RELFZ3vHdwtN-wpnKH419w7Qp6LrYCXAC4aAg2V19QRrgNQ1lF25r-0HWBIIbf2tHR0wv_Nkk-Cfvf',
      rating: 4,
      comment: 'Great camera for professional shoots. Minor scratches but nothing that affects performance.',
      date: '2024-01-10'
    },
    {
      id: 'review-3',
      userId: 'user-4',
      userName: 'Sneha Patel',
      userAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzn3JpbCLkd5EODAFv6SRpJiIoKOPLT6m6EtCLRE4mBfKgjrr05F5iMRq70ci2Q2S51eD5HvX9vjSVoqQ-uUOIu4X8hsh9RwmjqKqgr_z_omBBJDoKLEbcF4X4VcybCpD6Pu_GxUHI-402KmRQpPhWBovwaTpsw1anLW3p1rU77jPTBhkqKCdO0OfTSjmpYnDHqHIrXRLZ2DijY7whgqWRjbN56f9nIlPksrEjeqPgNcoizoimBmrLVoHdvKZY4BBafCfPNmPkGDcp',
      rating: 5,
      comment: 'Exceeded expectations! The video quality is amazing and Alex provided quick responses.',
      date: '2024-01-05'
    }
  ]
};
