export const projectsData = [
    {
        id: 1,
        name: 'Coreui-free-react-admin-template',
        description: "I developed a secure, high-performance, and stateless REST API using Spring Boot 3, Java 17+, and Hibernate/JPA. Designed a comprehensive authentication and authorization infrastructure utilizing Spring Security 6 and JWT (JSON Web Token) with standard Bearer Token validation. Implemented secure password hashing mechanisms using BCrypt. Architected a layered system with specialized DTO (Data Transfer Object) patterns to separate database entities from corporate requests, and successfully resolved complex architectural challenges like bean circular dependencies using lazy initialization strategies. Effectively integrated with a React-based CoreUI admin template, establishing customized CORS configurations to ensure secure cross-origin communication.",
        tools: ['REST API', 'Hibernate/JPA', 'H2', 'Spring Boot', 'JWT', 'POSTMAN', 'BCrypt'],
        role: 'Backend Developer',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'ARGELA-CDR',
        description: 'I engineered a Call Detail Record (CDR) billing and management platform for telecommunications' +
            ' voice traffic, built on Quarkus and Java 21. Architected a RESTful backend to ingest, persist, and query CDR events via JSON APIs backed by MySQL and Hibernate ORM Panache. Implemented a multi-tier rating engine with time-of-day tariffs, per-minute proration across tariff boundaries, and differentiated international inbound rates. Delivered subscriber billing workflows for per-call, monthly, and lifetime invoice aggregation with detailed usage breakdowns. Mirrored billing logic at the database layer using MySQL stored procedures and triggers for automatic charge calculation on ingest. Containerized the full stack with Docker Compose and validated persistence and rating behavior through Testcontainers-based integration tests.',
        tools: ['Quarkus', 'REST API', "Hibernate ORM Panache", "Jackson", "Docker / Docker Compose", "MySQL", "Maven", "Testcontainers"],
        role: 'Backend Developer',
        code: '',
        demo: '',
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },