export interface Location {
  id: string;
  name: string;
  state?: string;
  country: string;
}

export const demoLocations: Location[] = [
  { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', country: 'India' },
  { id: 'delhi', name: 'Delhi', country: 'India' },
  { id: 'bangalore', name: 'Bangalore', state: 'Karnataka', country: 'India' },
  { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana', country: 'India' },
  { id: 'chennai', name: 'Chennai', state: 'Tamil Nadu', country: 'India' },
  { id: 'kolkata', name: 'Kolkata', state: 'West Bengal', country: 'India' },
  { id: 'pune', name: 'Pune', state: 'Maharashtra', country: 'India' },
];

export const defaultLocation: Location = demoLocations[0];
