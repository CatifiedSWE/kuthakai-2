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
