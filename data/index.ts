export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "My Tech Stacks",
      description: "Constantly improving",
      className: "lg:col-span-2 md:col-span-1 h-64 col-span-1 md:row-span-1 lg:min-h-[40vh]",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-1 md:col-span-1 col-span-1 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    // {
    //   id: 3,
    //   title: "I prioritize client collaborations",
    //   description: "",
    //   className: "lg:col-span-1 md:col-span-1 col-span-1 md:row-span-1",
    //   imgClassName: "w-full h-full",
    //   titleClassName: "justify-end",
    //   img: "/b1.svg",
    //   width: "w-full", 
    //   spareImg: "",
    // },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-1 md:col-span-1 col-span-1 md:h-40 ",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
      width: 100, 
      height: 100,
    },
  
    {
      id: 5,
      title: "Currently building a Freelancer Job Search React Native App",
      description: "(Coming Soon)",
      className: "md:col-span-2 col-span-2 col-span-1 md:h-[336px]",
      imgClassName: "absolute right-0 bottom-0 md:w-96",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.png",
      spareImg: "/grid.svg",
      width: "w-full", 
      height: 100,
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "md:-mt-32 lg:col-span-1 col-span-1 md:col-span-1 md:h-40",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 md:-mt-2 text-center",
      img: "",
      spareImg: "",
    },
  ];

  export const stacks = [
    {
      id: 1,
      itemOne: ['React.js'],
      itemTwo: ['Firebase'],
      iconOne: ["/re.svg"],
      iconTwo: ["/firebase.svg"] 
    },
    {
      id: 2,
      itemOne: ['Next.js'],
      itemTwo: ['Tailwind'],
      iconOne: ["/next.svg",],
      iconTwo: ["/tail.svg"] 
    },
    {
      id: 3,
      itemOne: ['Typescript'],
      itemTwo: ['Sass'],
      iconOne: ["/ts.svg"],
      iconTwo: ["/sass.svg"] 
    },
    {
      id: 4,
      itemOne: ['Javascript'],
      itemTwo: [ 'Redux'],
      iconOne: ["/javascript.svg"],
      iconTwo: ["/redux.svg"] 
    },
    {
      id: 5,
      itemOne: ['ReactNative'],
      itemTwo: ['...'],
      iconOne: ["/re.svg"],
      iconTwo: ["/empty.svg"] 
    },
  ]
  
  export const projects = [
    {
      id: 1,
      title: "CarHub",
      des: "I built a car catalogue platform where users can explore cars by specs, and in the future rent cars...",
      img: "/carhub.jpg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/headless-ui.svg"],
      link: "https://carhub-a.vercel.app",
    },
    {
      id: 2,
      title: "Briefit - Simplify your reading with summarizer ",
      des: "I built a software that helps to transform lengthy articles to clear consciece summaries...",
      img: "/briefit.jpg",
      iconLists: ["/re.svg", "/tail.svg", "/javascript.svg", "/vitejs.svg"],
      link: "https://briefit.vercel.app",
    },
    {
      id: 3,
      title: "Mecnomit - Engineering Servicing company",
      des: "Mecnomit Limited is an Engineering Company best in Asset Integrity management and Inspection Services...",
      img: "/mecnomit.jpg",
      iconLists: ["/html-5.svg", "/css-3.svg", "/javascript.svg"],
      link: "https://mecnomit.com",
    },
    {
      id: 4,
      title: "Aeroox-GPT4 - AI Integrated Open-AI Platform",
      des: "I built a web platform that integrates AI based software projects for Aeroox-GPT4 as they are released",
      img: "/aeroox-gpt4.jpg",
      iconLists: ["/re.svg", "/css-3.svg", "/javascript.svg"],
      link: "https://aeroox-4-ai-project.vercel.app",
    },
    {
      id: 5,
      title: "SuoBank - Digital Bank",
      des: "I built a Landing Page for a Digital Bank that offers Credit Cards and overall great banking experience...",
      img: "/suobank.jpg",
      iconLists: ["/re.svg", "/tail.svg", "/javascript.svg", "/vitejs.svg"],
      link: "https://suobank-a.vercel.app",
    },
    {
      id: 6,
      title: "CarlsHelpdesk - Ticket Helpdesk",
      des: "I built a customer helpdesk platform where users create tickets by priority, view existing tickets, delete",
      img: "/carlshelpdesk.jpg",
      iconLists: ["/next.svg", "/tail.svg", "/javascript.svg", "/firebase.svg"],
      link: "https://carls-helpdesk.vercel.app/",
    },
  ];
  
  export const testimonials = [
     {
      id: 1,
      img: "/Mecnomit-profile.png",
      quote:
      "Working with Wisdom on our website design was an exceptional experience. His creativity and technical expertise transformed our vision into a stunning, user-friendly platform. Wisdom's attention to detail and commitment to meeting deadlines ensured that our project was completed smoothly and efficiently. If you're looking to create a standout website that truly represents your brand, Wisdom is the partner you need.",
      name: "Genesis Mecnomit",
      title:"Ceo Mecnomit Limted",
    },
    {
      id: 2,
      img: "/Paynobs-profile.png",
      quote:
        "Teaming up with Wisdom for our project was one of the best decisions we made. His professionalism, creativity, technical skills, ability to listen to our needs and provide valuable insights are his strong suits.",
      name: "Paynobs",
      title: "Director of Paynobs Technologies",
    },
    {
      id: 3,
      img: "/untitled.png",
      quote:
        "Teaming up with Wisdom for our website overhaul was a great decision. His expertise and responsiveness made the project seamless, and the end result is a beautiful, functional site that truly represents our brand. Highly recommend Wisdom for any web project.",
      name: "Blackaa",
      title: "Ceo of BLACKAA Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Mecnomit",
      img: "/Mecnomit-logo.png",
      nameImg: "/Mecnomit-logo.png",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Lead Frontend Developer",
      desc: "Spearheaded the development of an innovative engineering solution, significantly improving user experience while aligning frontend development with business goals, ensuring seamless integration and functionality across the website.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
    {
      id: 2,
      title: "Freelance WebApp Developer",
      desc: "Managed multiple concurrent projects, delivering bespoke web solutions for clients in various sectors, while ensuring client management, ensuring high-quality deliverables that align with client expectations and business goals.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 3,
      title: "Junior Frontend Developer",
      desc: "Built solid foundation in web technologies, combining hands-on experience with continuous learning while closely working with UX designers, backend developers, and product managers to develop a service-based Webapp.",
      className: "md:col-span-2", 
      thumbnail: "/exp2.svg",
    },
    {
      id: 4,
      title: "Frontend Engineer Intern",
      desc: "Gained foundational experience in web development by contributing to real-world projects, focusing on layout, styling, and interactivity. Contributed to a project that improved the user interface and enhancing usability.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      href: "https://github.com/Aeroox-K"
    },
    {
      id: 2,
      img: "/x.svg",
      href: "https://x.com/wisdom_kayea"
    },
    {
      id: 3,
      img: "/link.svg",
      href: "https://www.linkedin.com/in/wisdom-kayea-4864b7168/?"
    },
  ];