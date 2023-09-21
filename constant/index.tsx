import monkey from "/public/images/monkey.png";
import bulb from "/public/images/bulb_tree.png";
import smoke_2 from "/public/images/monkey.png";
import smoke_head from "/public/images/smoke_head.png";
import smoke from "/public/images/smoke_2.png";
import bitcoin from "/public/images/bitcoin.jpg";

export const cards = [
  {
    id: 1,
    title: "Monkey King",
    description: "A monkey king who is a disciple of Buddha.",
    image: bitcoin,
    link: "/monkey-king",
  },
  {
    id: 2,
    title: "Bulb Tree",
    description: "A tree that grows bulbs.",
    image: bulb,
    link: "/bulb-tree",
  },
  {
    id: 3,
    title: "Smoke",
    description: "A smoke that is a byproduct of fire.",
    image: smoke,
    link: "/smoke",
  },
  {
    id: 4,
    title: "Smoke Head",
    description: "A smoke that is a byproduct of fire.",
    image: smoke_head,
    link: "/smoke-head",
  },
  {
    id: 5,
    title: "Smoke 2",
    description: "A smoke that is a byproduct of fire.",
    image: smoke_2,
    link: "/smoke-2",
  },
];

export const footerLinks = [
  {
    title: "My Account",
    links: [
      {
        name: "Profile",
        href: "/",
      },
      {
        name: "Settings",
        href: "/",
      },
      {
        name: "Logout",
        href: "/",
      },
      {
        name: "Help",
        href: "/",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Help Center",
        href: "/",
      },
      {
        name: "My Activities",
        href: "/",
      },
      {
        name: "Collections",
        href: "/",
      },
      {
        name: "My Collaborations",
        href: "/",
      },
    ],
  },
  {
    title: "Useful Links",
    links: [
      {
        name: "All NFTs",
        href: "/",
      },
      {
        name: "How to Sell",
        href: "/",
      },
      {
        name: "Create",
        href: "/",
      },
      {
        name: "Explore",
        href: "/",
      },
      {
        name: "Marketplace",
        href: "/",
      },
      {
        name: "Privacy & Policy",
        href: "/",
      },
    ],
  },
];
