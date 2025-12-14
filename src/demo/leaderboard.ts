export interface LeaderboardUser {
  id: string;
  rank: number;
  name: string;
  location: string;
  itemsRentedOut: number;
  avatar: string;
  isCurrentUser?: boolean;
}

export const demoLeaderboardUsers: LeaderboardUser[] = [
  {
    id: '1',
    rank: 1,
    name: 'Maya',
    location: 'San Francisco, CA',
    itemsRentedOut: 52,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDP_LRXlsjqhmGYSybTXZMr9YSRPAoDwB4lt3QFnsD10ZtFTfTqL13W7rqHVrhcV_t1k1Mk2i_vqk1xuJZh7wfuCifTqnQ36iyJ7rAb2qXZ_W45pAwBTI3M6y8_d5pewKUzEfynw9R7ZooRHsWdjJTmms7A80N_7dI1GcLhJBINWc0aN6hXVAfu1dJnwDv7Y32Hq0qnExwH6VKMh-sviUR4ZLwZ8Ym1-wBNSpGQ4tdl1dM4-Ui83qlToLPQCnvMoBybJMBL4Dr9LH28',
  },
  {
    id: '2',
    rank: 2,
    name: 'James',
    location: 'New York, NY',
    itemsRentedOut: 48,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClwjwT8wcEG44qDqti1Ff2n4DKr39kk2S7b9fHeFUrc8BC9V-f9vMySgfUGxDbVBOVhov8RNNs-6r9gRxzPvnwiWFnRS-ONfUo2g6iS8RN1D5DXRsC48vHmCNS-2kwpjP94vMQVY8MJiaKLLAb7PyyRryPU8uFa9kOgVP6__UpE_rN3kIo3b7btdzEOATFr4ZGa6k795ye62l5Y8xS3g-6dxorf_1OKH9sDWzoQiG7y4YVQitqlqlaNAqyHmOicUxJ7-YJqk7EooVo',
  },
  {
    id: '3',
    rank: 3,
    name: 'Chloe',
    location: 'Chicago, IL',
    itemsRentedOut: 45,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc7K-dJTqzB_ek2y_evlGmCndUWZMtFRu_rX824n9d2-MR0ozu7ch6pqE5MwA1CbEvKMnP2vPe-77ataJnwQRTLvkeSx6Qg7RaIjYVe1JpdB3S-WDXLHTf8BRHn12jTY22yRc0MwvBWz3PEGpNjAZWo-dd_Rrjopnb3DbBvgsRW4ddMhxgFyKzagWkvLwSgDKlSB9zEnTuhwM6KfLDYGJvPYMjqfYF6QXkw-DZq1HgFnzeNxns1kUaUJ2fExuFafS6ch-P0JF-CZBt',
  },
  {
    id: '4',
    rank: 4,
    name: 'Ben',
    location: 'Austin, TX',
    itemsRentedOut: 41,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeyaUFjC_1heQSxiLPMMmg89SpPQBTp8L4gcqZwg4cAp8Ifv29NwVCCv4FeHskUFbrSUeQW_49viCAzE9WjS17mZvTDKzH4Ks1x3j3luV6eUVZBPhrEpzM-1K_o0IFSGmf3oOAOmzW5NV4OYBx759frVhjEpcD5-s2JyOGhL72kWXyreMamsKfWLrVQ_AGL24YoD3F_A3dMq4c2uSfpZAiQFk0QijYfg0EvU13SoPzyIgQR9Zs731fzC6rhoZb58FQhT9_iNT9UOi2',
  },
  {
    id: '48',
    rank: 48,
    name: 'You',
    location: 'San Francisco, CA',
    itemsRentedOut: 12,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRA-4Jsfx6OssnGGeaJReFQCupoAr2Jz0kCQom1_W6sUX3c6Bgsj2lBx4fHga5FQTcB65sxhfuzi_4eBElCtzcr4CPvGqFAvwX4Yg8KrGSLiViGk6xmzcyxjgTZnWCGzacbOODBj-8A9Jwpy-XUR8-Vu5SP1m-Byqzsu32EmsUmCU94cNRi8GiGi_NNFCEOFiq0Ki102P_TgMYf8e2VRw5kJA05bPGYFNoYHj95YJ_DTS7MmarDhdtmc-14auat4pJuWA4W_aptDh9',
    isCurrentUser: true,
  },
  {
    id: '49',
    rank: 49,
    name: 'Noah',
    location: 'Miami, FL',
    itemsRentedOut: 11,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmi43QjZJa5oCwB-5k9dlNPc16LTkRvxh908mseqhih6-vRCc0zIWmOrpRInsbHriAFX7jQ8FkI5aZtpwolwfItjS_hUf0AFsGeDD2nqOPTXDqu4jB3vst4FSbudskV-1vEMD5G2O7r2MiZHf7jJmG4DJ0R1oZoqPvF0l3S7RxSe8a33DAVPgRbqMd826K1AtB_TZ-W81SBhGardpfZBVJZcaiqMT54OA3-ueHVeK2C5UE88sb9X57BwenZIYynrQb5y2GBVbzQ-FH',
  },
];
