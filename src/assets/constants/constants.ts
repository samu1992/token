import imgCard1 from "../images/ImgCard-1.svg";
import imgCard2 from "../images/ImgCard-2.svg";
import imgCard3 from "../images/ImgCard-3.svg";
import LogoCard1 from "../images/LogoCard-1.svg";
import LogoCard2 from "../images/LogoCard-2.svg";
import LogoCard3 from "../images/LogoCard-3.svg";
import iconRevenue1 from "../images/revenueModel-1.svg"
import iconRevenue2 from "../images/revenueModel-2.svg"
import iconRevenue3 from "../images/revenueModel-3.svg"
import iconRevenue4 from "../images/revenueModel-4.svg"
import iconRevenue5 from "../images/revenueModel-5.svg"


export const card = [
  {
    img: imgCard1,
    logo: LogoCard1,
    name: "Snif",
    span: "Tokens",
    state: "Beta",
    subtitle: "Protect yourself against known vulnerabilities",
    list: [
      { text: "Take better-informed decisions." },
      { text: "Run a security analysis against +22 indicators." },
      { text: "Save time when DYOR IN ONE CLICK." },
      { text: "Details on the token overview and liquidity pools." },
    ],
  },
  {
    img: imgCard2,
    logo: LogoCard2,
    name: "Snif",
    span: "Market",
    state: "upcoming",
    subtitle: "Feel the Solana market sentiment.",
    list: [
      { text: "Trending & top performing coins." },
      { text: "Community sentiments." },
      { text: "Visualization of top market capitalization changes." },
      { text: "Market movements and insights." },
    ],
  },
  {
    img: imgCard3,
    logo: LogoCard3,
    name: "Snif",
    span: "Wallets",
    state: "upcoming",
    subtitle: "Track, analyze and manage a Solana wallet with Snif Wallet",
    list: [
      { text: "Intuitive sort and filters." },
      { text: "Real-time insights & monitoring." },
      { text: "Wallet and token statistics." },
      { text: "Transaction history." },
    ],
  },
];

export const metrics = [
    {
        number: '+39K', text: 'users'
    },
    {
        number: '+171K', text: 'countries reached'
    },
    {
        number: '+74K', text: 'Unique Tokens'
    },
    {
        number: '+525K', text: 'Completed Scans'
    },
    {
        number: '+17.4K', text: 'wallets'
    },
    {
        number: '+55.5K', text: 'Risk Tokens'
    },
    {
        number: '+378K', text: 'issues found'
    }
]

export const revenue = [
  {icon: iconRevenue1, text: 'SWAP FEES'},
  {icon: iconRevenue2, text: 'NFT BADGES'},
  {icon: iconRevenue3, text: 'API’S SUBSCRIPTIONS'},
  {icon: iconRevenue4, text: 'PROJECT VERIFICATION'},
  {icon: iconRevenue5, text: 'DISPLAY ADVERTISING'},
]

export const utilities = [
  {number: '01.', text: 'Early access to exclusive features for $SNIF holders'},
  {number: '02.', text: 'Community incentives in $SNIF'},
  {number: '03.', text: 'Project verification and advertising is paid in $SNIF'},
  {number: '04.', text: 'Discounts on services (i.e., swap fees, API fees, ads rate, etc.)'},
  {number: '05.', text: 'Ecosystem utilities with future partners'},
]
