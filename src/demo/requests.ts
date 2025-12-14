// Demo data for rental requests and approvals

export type RequestStatus = 'pending' | 'accepted' | 'declined';

export interface RentalRequest {
  id: string;
  requesterName: string;
  requesterAvatar: string;
  itemName: string;
  startDate: string;
  endDate: string;
  status: RequestStatus;
}

export const demoRentalRequests: RentalRequest[] = [
  {
    id: 'request-1',
    requesterName: 'Eleanor Vance',
    requesterAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtMITuLr39C0mTizdpZGPYjdE9Z_dyMfYAe-ovTKKVP-IUbzCM4RGuMwyEgSdzjxECFDc5bgQP6k6liGo2eIFUgI8Xr6mgaDfywtybuwUCSUjGv-UNgBjAiz9Wk7t-agZtZTTDB9hrScL4tHsIEH06mYnB2shDNCPUlCILZaP9K8qiO_DPM4nzYkCb_lnAjJLhLjDZ-4SNl4iPGwAh0_pokEUm31P7NwGBNSHvpRvenNKKqV5mE-kdtKlgapVTe6hT71HIr96uapEh',
    itemName: 'Vintage Leather Jacket',
    startDate: 'Oct 26',
    endDate: 'Oct 29',
    status: 'pending',
  },
  {
    id: 'request-2',
    requesterName: 'Marcus Holloway',
    requesterAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOp57TpYUuFWp3OV6DdLM2pSG5oVxYkfCrfOfjmCHQTU9G6IvF8AuKwiRgTeD0ZaAdx4i3wbjlkHG8SUDV-KZPtNmFWijsOr4-P1dYNr66JtUN3plviFMGy9l51YymED8NVVZ_7Vvez0pJUC3AeVQvSD34XZy1pD1kvjo4Br0HhNP48yua1Och33TiMiuVdnUV4TxPhOVbUrbrvZuJpWo_u0Wzy9pSGX9heYruERYKBE_XFoCF-ZL826tXnSm8vMqxANU0KKnKLeTC',
    itemName: 'Portable Bluetooth Speaker',
    startDate: 'Oct 28',
    endDate: 'Nov 01',
    status: 'pending',
  },
  {
    id: 'request-3',
    requesterName: 'Jenna Ortega',
    requesterAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRYMh81J_arYiJWBhogozN2ChhKKb3PHoQx7L8G8LqI9shGAcNBK9KUQaXK2aFfsvh9ceW33xkkhNaOiPUg7sQ5oeAo_wulW4uJbeHcseYnLHhAiK0eFewFGcNAUduyNet5-K78Z9i9oLsbHNYhScOtvWGX2sS5ObT7LD4YtRn7f-RS6PwFxqinReZBiQssVcilLv_BAc66UF05x6EOnyGE8FuETbDCK5CLKvznDBTBVzP7OWLUyv2C2oPA3qLpOxjEIYAINvypyCO',
    itemName: 'Professional DSLR Camera Kit',
    startDate: 'Nov 05',
    endDate: 'Nov 10',
    status: 'accepted',
  },
];

// Demo data for return and feedback
export interface ReturnItem {
  id: string;
  itemName: string;
  itemImage: string;
  rentalPeriod: string;
}

export const demoReturnItem: ReturnItem = {
  id: 'return-1',
  itemName: 'Vintage Leather Briefcase',
  itemImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwoagvReUU_CI6qTHdrmcIarjQdZnXC-4U0q2mcZ6y5B3zuA5KFlXZER19UImryBtgPpY5L6sZu0pCD_qkVM16RBHO81--jWc-G-IUlq_D-qj2hSeuil_MHU16WZ7YB_MQv7GZyS3yK-20yASLp8RZwwIMT0Te20_jaRBZ72eVFD9M4XBxnmt2vuZU-fdpz5m5Zvp-kUpPDMY_HvaVSeYgzzTlTY0G7YRLfByx3Q-mZ8mdp4VY_JA_onpq2oaRospX7PB10ghDn_qp',
  rentalPeriod: 'May 15 - May 22',
};
