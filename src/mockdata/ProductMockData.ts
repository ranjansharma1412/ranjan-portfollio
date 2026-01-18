
export const projectsCards = [
    [
        {
            id: "mobile-banking",
            title: "BOI Mobile is Bank of India’s official mobile banking application.",
            description: `BOI Mobile is Bank of India’s official mobile banking application.
                    BOI Mobile, the most comprehensive and secure Mobile Banking application, offers all banking services on your mobile.
                    A quick and easy registration is all you need to avail Bank of India Mobile Banking services.
                    The features of the new BOI Mobile are:
                    a) View and transact from all your accounts including Loans and Deposits
                    b) Check your bank balance, view & email detailed statement and view passbook on your mobile
                    c) Transfer funds to an any Bank account using IMPS/NEFT/RTGS/UPI
                    d) Transact super fast using Favourite feature. By tagging a transaction as favourite, you can quickly access and complete your transactions for fund transfer
                    e) Get personalised offers on your mobile
                    f) Service At Your Convenience: Avail banking services from the comfort of your home. You can locate an ATM, stop or check status of your cheque, order a cheque book, track your service requests and more.`,
            category: "Banking",
            image: "src/assets/images/boi_omine_nio_mobile.png",
            span: 5,
        },
        {
            id: "internet-banking",
            title: "BOI Online Omni Neo Internet Banking",
            description: `Bank of India (BOI) net banking services, known as the BOI Online Omni Neo Internet Banking, are accessible through the official BOI Online portal. The older "Starconnect" system has been discontinued, and users must use the new Omni Neo platform for both internet and mobile banking services.`,
            category: "Banking",
            image: "src/assets/images/boi_netbanking.png",
            span: 4,
        },
    ],
    [
        {
            id: "payrol",
            title: "Zenegy Time is time recording in a completely new way",
            description: `Zenegy Time is time recording in a completely new way
                    The requirements for the employees in your company to record time have never been greater!
                    The EU's working time directive requires that all companies have a duty to introduce a system for recording and measuring employees' working hours.
                    Often, this means that the company has to use different types of tools for this, as the diversity in the way to record time is great.
                    With Zenegy Time, you get the ultimate tool for time and job recording that covers the entire company's needs and can be adapted`,
            category: "Payroll",
            image: "src/assets/images/zenegy_time.png",
            span: 4,
        },
        {
            id: "training",
            title: "Ruxbury Training app makes your horse riding and training more engaging and smarter.",
            description: `Ruxbury Training app makes your horse riding and training more engaging and smarter.
                    Ruxbury Training app is intended for use with the Ruxbury Tracker – easy to use heart rate and motion monitor for equestrian use.
                    Using the Ruxbury Tracker with the app you will get an insight into your horse heart rate and motion.
                    Here are the key features:
                    - Keep records of your equestrian training sessions.
                    - For each training, Ruxbury Training app records and stores and shows your horse’s heart rate and motion level.
                    - Ruxbury calculates additional session metrics like heart and motion intensity and load figures so you can compare trainings and set goals for the next training.
                    - Obtain a map of your training route.
                    - Set a limit on the maximum heart rate to prevent overtraining.
                    - View sessions graphs: heart rate, motion and heart intensity.
                    - Export data in Excel compatible format for further analysis.

                    The heart rate intensity is the average heart effort or load (a.k.a. heart rate zone) on a scale of 0 to 5 (max.) The heart rate load is the aggregate heart rate intensity aggregated over the session time. Your horse’s fitness is improving if you can do the same training with lower heart rate intensity and lower heart rate load.
                    Look for more features in forthcoming app releases.`,
            category: "Training",
            image: "src/assets/images/ruxbury.png",
            span: 5,
        },
    ],
];

export const workExperiences = [
    {
        company_name: "IBM",
        startDate: "Mar 2024",
        endDate: "Present",
        location: "Mumbai",
        role: "Application developer",
        role_description: `• Engineered and maintained robust cross-platform mobile apps and web solutions using React Native and React.js, ensuring top-tier performance, reliability, and usability across devices and platforms.
            • Consistently delivered high-quality features and enhancements within project timelines, and involved into deployment process
            • Collaborated proactively with cross-functional teams to optimize app performance and elevate the overall user experience, aligning technical solutions with client needs.
            • Gained hands-on experience in the banking domain, where I deepened my knowledge of security best practices and played an active role in implementing network call encryption for mobile applications, working alongside security leads to strengthen data protection.`,
        color: 'bg-[#147b74]', // Teal
    },
    {
        company_name: "Codinova Technologies Pvt. Ltd",
        startDate: "Apr 2022",
        endDate: "Feb 2024",
        location: "New Delhi",
        role: "Senior Software Engineer L1",
        role_description: `• Led the React Native team for multiple applications, providing technical guidance and mentorship to junior developers.
            • Implemented CI/CD pipelines for mobile apps, automating the build, test, and deployment process, resulting in reduction in release cycle time.
            • Configured different schemes/flavors and environments for mobile applications, enabling efficient development and testing across multiple platforms.`,
        color: 'bg-[#f16643]', // Orange
    },
    {
        company_name: "Bigscal Technologies Pvt. Ltd.",
        startDate: "Nov 2020",
        endDate: "Mar 2022",
        location: "Surat",
        role: "Cross Platform Mobile Application Developer",
        role_description: `• Developed and maintained mobile applications (React Native) and web applications (React.js) as the sole developer, demonstrating strong problem-solving and self-management skills.
            • Expanded skillset to include Node.js, MongoDB, and GraphQL, evolving into a Full Stack developer and contributing to backend development efforts.
            • Improved application performance through code optimization & React Native version upgrade`,
        color: 'bg-[#f0bc4c]', // Yellow
    },
    {
        company_name: "Weapplinse Technology",
        startDate: "Sep 2019",
        endDate: "Oct 2020",
        location: "Surat",
        role: "React Native Developer",
        role_description: `• Rapidly acquired proficiency in React Native development through intensive training, completing the training program in 2 months.
            • Gained extensive experience in mobile app development, contributing to multiple projects and building a strong foundation in the field.
            • Contributed to the development of key features & bug fixes for various projects`,
        color: 'bg-[#11654f]', // Green

    }
]

export const skills = [
    { name: "React Native", icon: "devicon-react-original" },
    { name: "Native Modules (Android & iOS)", icon: "devicon-android-plain" },
    { name: "Firebase", icon: "devicon-firebase-plain" },
    { name: "Redux", icon: "devicon-redux-original" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "GraphQL", icon: "devicon-graphql-plain" },
    { name: "MongoDB", icon: "devicon-mongodb-plain" },
    { name: "CI/CD & Store Setup", icon: "devicon-githubactions-plain" },
    { name: "React JS", icon: "devicon-react-original" },
    { name: "Local DB (Realm / SQLite)", icon: "devicon-sqlite-plain" },
    { name: "Node.js (Express / NestJS)", icon: "devicon-nodejs-plain" },
    { name: "Unit Testing", icon: "devicon-jest-plain" },
];