import ecommerce1 from "../../assets/ecommerce1.png";
import ecommerce2 from "../../assets/ecommerce2.png";
import ecommerce3 from "../../assets/ecommerce3.png";
import ecommerce4 from "../../assets/ecommerce4.png";
import rent1 from "../../assets/rent1.png";
import rent2 from "../../assets/rent2.png";
import rent3 from "../../assets/rent3.png";
import connect1 from "../../assets/connect1.png";
import connect2 from "../../assets/connect2.png";
import tictactoe1 from "../../assets/tictactoe1.png";
import tictactoe2 from "../../assets/tictactoe2.png";
import tictactoe3 from "../../assets/tictactoe3.png";
import tictactoe4 from "../../assets/tictactoe4.png";

export const projectsData = [
  {
    title: "Ecommerce Dashboard",
    description:
      "A user-friendly product search interface which allows users to search products, browse paginated results, and view product details such as pricing, discounts, ratings, Pagination support (Next / Previous) and badges",
    images: [ecommerce1, ecommerce2, ecommerce3, ecommerce4],
    techStack: [
      "React",
      "Typescript",
      "Bootstrap",
      "Material UI",
      "SearchSprintAPI",
    ],
    liveLink: "https://ecommerce-search-seven.vercel.app",
  },
  {
    title: "Rent Management System",
    description:
      "Mobile-friendly rent management application for personal use, designed specifically for my family to digitally manage our home renters. It simplifies the process of calculating and tracking monthly rent, removing the need for manual paper records and maintain rent history, ease to notify renters all in one place.",
    images: [rent1, rent2, rent3],
    techStack: [
      "Next Js",
      "React",
      "Javascript",
      "TailwindCSS",
      "Firebase-Firestore",
    ],
    liveLink:
      "https://my-rent-management-git-master-omkarsavalkars-projects.vercel.app",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "About React Tic Tac Toe game. 2 player game with unlimited play feature using reset option. carefully designed and implemented considering all corner cases. Has user guide for players not familier with this game",
    images: [tictactoe1, tictactoe2, tictactoe3, tictactoe4],
    techStack: ["React", "CSS", "JavaScript"],
    liveLink: "https://github.com/OmkarSavalkar/Tic-Tac-Toe",
  },
  {
    title: "Connect Well",
    description:
      "A dynamic web application which can be used at organization level to improve employees connectivity within organization. It provides one step platform to get connected with unkown experts for any help in specific technical domains. Covers everything needed to resolve issue.",
    images: [connect1, connect2],
    techStack: ["Next.js", "React", "TypeScript", "Material UI", "Node.Js"],
    liveLink: "https://connectwell-2022.web.app",
  },
];
