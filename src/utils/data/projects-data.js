export const projectsData = [
  {
    name: "Website for Student Support and Consulting at HCMUTE",
    duration: "9/2024-12/2024",
    teamSize: 2,
    position: "Back-end Developer",
    source: {
      frontend: "https://github.com/ThaiVanHandSome/hcmute-consultant-client.git",
      backend: "https://github.com/quangnghia1110/Nam4HocKy1TLCN.git",
    },
    technologies: {
      frontend: ["ReactJS"],
      backend: ["Spring Boot", "Spring Security", "JPA", "WebSocket", "MySQL"],
      services: ["Cloudinary", "Google API"],
    },
    features: `A platform for students to ask questions, discuss, and receive consultation from the school on various topics such as academics, tuition, extracurricular activities, and research. Role-based access: Admins manage the entire system; advisors and consultants handle tasks within their departments; users can ask questions, schedule consultations, and leave feedback. Functionalities include user authentication, profile management, real-time messaging (WebSocket), question and answer management, consultation scheduling, question forwarding, and reporting/analytics for admins. The system includes features related to questions, answers, posts, consultation schedules, real-time messaging, question forwarding, and general questions.`
  },
  {
    name: "Building an E-commerce Website for Electro Company",
    duration: "3/2024-8/2023",
    teamSize: 2,
    position: "Backend Developer",
    source: {
      code: "https://github.com/quangnghia1110/electro_ecommerce.git",
    },
    technologies: {
      frontend: ["ReactJS"],
      backend: ["Spring Boot", "Spring Security", "JPA", "MySQL", "WebSocket"],
      services: ["PayPal", "Giao Hàng Nhanh"],
    },
    features: `The system includes a variety of functionalities to support both customer-facing and administrative operations. For customers, it offers user authentication (registration, login, password recovery), e-commerce features such as product browsing, cart management, order placement, and PayPal payment integration. Customers can also track deliveries through Giao Hàng Nhanh and manage their orders and personal information. Guests can explore products without an account, and employees can monitor inventory, process orders, track shipments, and provide customer support. For admins, the system allows full management of users, employees, products, categories, orders, and shipments. Additionally, it supports the creation of promotional programs, reporting on performance, and managing payment configurations. This comprehensive feature set ensures a smooth experience for all users, from customers to administrators and employees.`
  },
  {
    name: "Milk Tea E-commerce Website",
    duration: "9/2023-12/2023",
    teamSize: 4,
    position: "Team Leader, Front-end Developer, Back-end Developer",
    source: {
      code: "https://github.com/quangnghia1110/project_java_web.git",
    },
    technologies: {
      frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      backend: ["Spring Boot", "JPA", "Spring Security", "Microsoft SQL Server"],
    },
    features: `This milk tea e-commerce website supports user registration and login with Spring Security. Users can browse products, add them to a shopping cart, and complete orders using VNPay. The admin panel allows for managing categories, products, users, and viewing sales statistics.`
  }
];
