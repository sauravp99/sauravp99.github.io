export interface ProjectContent {
  caseDescription: string;
  caseStudy: string;
  caseSolution: string;
  caseTechStack: string[];
}

export interface Project {
  id: string;
  title: string;
  logoImg: string;
  description: string;
  tags: string[];
  image: string;
  roles: string[];
  theme: "red" | "blue" | "green" | "grey";
  category: "client" | "academic" | "hobby";
  content: ProjectContent;

}


// Project data for the portfolio
export const projects: Project[] = [
  // Client Projects
  {
    id: "project-1",
    title: "Prosper AI",
    description: "AI-powered financial planning and wealth management platform",
    image: "/p_prosper.svg",
    tags: ["Next.js", "React", "Tailwind CSS"],
    content: {
      caseDescription: `
      "Prosper AI aims to utilize artificial intelligence (AI) to simplify the everyday work of real estate agents. The ambition is to automate the process of creating property listings, so that agents can focus on customer follow-up and strategic planning. The solution reduces the time it takes to generate complete and customized property listings from normally 4-6 hours to around 15 minutes. The project is part of a larger initiative to streamline the real estate industry by integrating AI technology directly into professional systems, and also offers back-office support for sales tasks and image captions."

      Key features:
      • AI-text generation
      • Back-office support
      • Portfolio analysis and optimization
      • Real-time market insights
      
      The platform is built with a React frontend and a .NET backend, with a focus on security, performance, and user experience.
    `,
      caseStudy: "",
      caseSolution: "",
      caseTechStack: [],
    },
    category: "client",
    logoImg: "/p_arkivverket.png",
    roles: ["UX/UI", "Fullstack"],
    theme: "red",
  },
  {
    id: "project-2",
    title: "UDI",
    description: "Universal Design Interface for accessible web applications",
    image: "/p_arkivverket.png",
    tags: ["React", "Accessibility", "TypeScript"],
    content: {
      caseDescription: `
      UDI (Universal Design Interface) is a comprehensive accessibility framework for web applications. 
      It provides a set of components, tools, and guidelines to ensure web applications are accessible to all users, 
      including those with disabilities.
      
      Key features:
      • WCAG 2.1 AA compliant components
      • Keyboard navigation support
      • Screen reader optimization
      • Color contrast tools
      • Accessibility testing utilities
      
      The framework is built with React and TypeScript, with extensive documentation and examples.
    `,
      caseStudy: "",
      caseSolution: "",
      caseTechStack: ["React", "TypeScript", "Accessibility APIs"],
    },
    category: "client",
    logoImg: "/p_udi.png",
    roles: ["Frontend", "Accessibility"],
    theme: "blue",
  },
  {
    id: "project-3",
    title: "Arkovestel",
    description:
      "Digital asset management platform for institutional investors",
    image: "/p_chubben.png",
    tags: ["Vue.js", "Node.js", "GraphQL"],
    content: {
      caseDescription: `
      Arkovestel is a secure digital asset management platform designed specifically for institutional investors.
      It provides tools for portfolio management, risk assessment, and regulatory compliance in the digital asset space.
      
      Key features:
      • Multi-signature wallet integration
      • Regulatory reporting tools
      • Risk management dashboard
      • API integration with major exchanges
      • Audit trail and compliance documentation
      
      Built with Vue.js and Node.js, with GraphQL for efficient data fetching and real-time updates.
    `,
      caseStudy: "",
      caseSolution: "",
      caseTechStack: ["Vue.js", "Node.js", "GraphQL", "PostgreSQL"],
    },
    category: "client",
    logoImg: "/orange_shape2.jpg",
    roles: ["Backend", "Fullstack"],
    theme: "blue",
  },
  {
    id: "project-4",
    title: "Cloudteam",
    description: "Collaborative cloud infrastructure management platform",
    image: "/light_blue_rings2.jpg",
    tags: ["React", "AWS", "Terraform"],
    content: {
      caseDescription: `
      Cloudteam is a collaborative platform for managing cloud infrastructure across multiple providers.
      It allows teams to design, deploy, and manage cloud resources with a visual interface and automated workflows.
      
      Key features:
      • Visual infrastructure designer
      • Multi-cloud support (AWS, Azure, GCP)
      • Infrastructure as Code integration
      • Cost optimization recommendations
      • Team collaboration tools
      
      The platform uses React for the frontend and integrates with Terraform for infrastructure provisioning.
    `,
      caseStudy: "",
      caseSolution: "",
      caseTechStack: ["React", "AWS", "Terraform", "Azure", "GCP"],
    },
    category: "client",
    logoImg: "/light_blue_rings2.jpg",
    roles: ["Frontend", "DevOps"],
    theme: "blue",
  },

  // Academic Projects
  {
    id: "project-5",
    title: "Save my city",
    description:
      "Urban planning simulation with climate change adaptation strategies",
    image: "/orange_shape3.jpg",
    tags: ["Unity", "C#", "Data Visualization"],
    content: {
      caseDescription: `
      Save My City is an interactive simulation that allows urban planners and policymakers to visualize the impact of 
      different climate change adaptation strategies on urban environments. Users can implement various interventions 
      and see their effects on temperature, flooding, air quality, and quality of life metrics.
      
      Key features:
      • Realistic climate modeling
      • Interactive 3D city visualization
      • Multiple intervention scenarios
      • Data-driven outcome predictions
      • Exportable reports for stakeholders
      
      Developed in Unity with C# and integrated with climate data models from academic research.
    `,
      caseStudy: "",
      caseSolution: "",
      caseTechStack: ["Unity", "C#", "3D Visualization", "Data Modeling"],
    },
    category: "academic",
    logoImg: "/orange_shape3.jpg",
    roles: ["Simulation", "Visualization"],
    theme: "blue",
  },
  {
    id: "project-6",
    title: "Black Horizon",
    description: "Research visualization tool for black hole physics",
    image: "/light_blue_rings3.jpg",
    tags: ["WebGL", "Three.js", "Python"],
    content: {
      caseDescription: `
      Black Horizon is a scientific visualization tool that renders complex black hole physics data in an interactive 3D environment.
      It allows researchers to visualize gravitational waves, event horizons, and other phenomena related to black hole research.
      
      Key features:
      • Real-time 3D visualization of black hole physics
      • Data import from simulation outputs
      • Interactive parameter adjustment
      • Time-evolution visualization
      • Publication-ready image and video export
      
      The frontend is built with WebGL and Three.js, with a Python backend for data processing.
    `,
      caseStudy: "",
      caseSolution: "",
      caseTechStack: ["WebGL", "Three.js", "Python"],
    },
    category: "academic",
    logoImg: "/light_blue_rings3.jpg",
    roles: ["Visualization", "Backend"],
    theme: "blue",
  },

  // Hobby Projects
  {
    id: "project-7",
    title: "AI Daily Digest",
    description: "Personalized AI news aggregator with sentiment analysis",
    image: "/neon_shape1.jpg",
    tags: ["React", "NLP", "Node.js"],
    content: {
      caseDescription: `
      AI Daily Digest is a personalized news aggregator that uses natural language processing to curate AI-related news 
      based on user interests. It includes sentiment analysis to provide context on how different sources are covering topics.
      
      Key features:
      • Personalized news feed based on interests
      • Sentiment analysis of articles
      • Topic clustering and trend identification
      • Reading time estimation
      • Offline reading mode
      
      Built as a hobby project to explore NLP techniques and stay updated on AI developments.
    `,
      caseStudy: "",
      caseSolution: "",
      caseTechStack: ["React", "Node.js", "NLP", "Express"],
    },
    category: "hobby",
    logoImg: "/neon_shape1.jpg",
    roles: ["Frontend", "NLP"],
    theme: "blue",
  },
  {
    id: "project-8",
    title: "Computer Themp",
    description: "Retro-computing emulator for vintage systems",
    image: "/orange_shape1.jpg",
    tags: ["WebAssembly", "Rust", "JavaScript"],
    content: {
      caseDescription: `
      Computer Themp is a web-based emulator for vintage computing systems from the 1980s and 1990s.
      It allows users to experience classic operating systems and software in the browser, with accurate emulation of hardware.
      
      Key features:
      • Emulation of multiple vintage systems
      • Virtual disk image support
      • Save state functionality
      • Peripheral emulation (printers, modems)
      • Community-contributed software library
      
      Built with Rust compiled to WebAssembly for performance, with a JavaScript frontend.
    `,
      caseStudy: "",
      caseSolution: "",
      caseTechStack: ["Rust", "WebAssembly", "JavaScript"],
    },
    category: "hobby",
    logoImg: "/orange_shape1.jpg",
    roles: ["Emulation", "Frontend"],
    theme: "blue",
  },
  {
    id: "project-9",
    title: "Quest",
    description: "Text-based adventure game with procedurally generated worlds",
    image: "/light_blue_rings2.jpg",
    tags: ["JavaScript", "Procedural Generation", "Canvas API"],
    content: {
      caseDescription: `
      Quest is a modern take on classic text-based adventure games, featuring procedurally generated worlds, 
      characters, and storylines. Each playthrough creates a unique adventure with dynamic narratives that adapt to player choices.
      
      Key features:
      • Procedurally generated worlds and stories
      • Natural language command processing
      • Dynamic character relationships
      • Persistent world that evolves over time
      • Minimalist visual representations using Canvas
      
      A passion project combining my love for storytelling, procedural generation, and classic gaming.
    `,
      caseStudy: "",
      caseSolution: "",
      caseTechStack: ["JavaScript", "Canvas API", "Procedural Generation"],
    },
    category: "hobby",
    logoImg: "/light_blue_rings2.jpg",
    roles: ["Game Dev", "Procedural Gen"],
    theme: "blue",
  },
];
