const logotext = "CA";
const meta = {
    title: "Chinmay Arora",
    description: "Biomedical Science & Engineering grad student blending wet-lab, computational biology and design.",
};

const introdata = {
    title: "I’m Chinmay Arora",
    animated: {
        first: "Biomedical Science & Engineering at IIT Guwahati",
        second: "I bridge wet-lab and computational biology",
        third: "I design, teach and build data-driven tools",
    },
    description: "Pharmacist turned Biomedical Engineer with strong experimental, computational biology and design experience. I love translating data and lab insights into real-world impact.",
    your_img_url: "https://lh3.googleusercontent.com/sitesv/AAzXCkfbfaAfr3V24hyaI0y-nU_VdZJa6vyDqZddKXwBzNwgYdUOaD1S3I5s1TnZ-JAVZpvpqukudZeC47tb95UYeJmqOxGFfwaZU6pt_BdsGcMsVHyp7xe_0zQVG3GqweZKo8xhZOGwzPKoMxo5yXmiSjmfUMb6fD7PcqBkADnG-BdRvtlmiEZDcUR76nmbtRVIbxEivRsLJtaUKl-kKM3-e5Mmq3X70lBFhvM7=w1280",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I’m an M.Tech candidate in Biomedical Science & Engineering at IIT Guwahati with a Pharmacy background. I work across Regenerative Medicine, Molecular Biology workflows and Computational Analysis. I enjoy building reproducible pipelines, mentoring and creating clean visuals that communicate science.",
};

const worktimeline = [
    {
        jobtitle: "Teaching Assistant",
        where: "IIT Guwahati",
        date: "Aug 2025 – May 2026",
    },
    {
        jobtitle: "Content & Media Head",
        where: "Research & Industrial Conclave, IIT Guwahati",
        date: "Aug 2025 – Oct 2025",
    },
    {
        jobtitle: "North Divisional Head",
        where: "Indian Pharmaceutical Association Students' Forum",
        date: "Jan 2024 – Apr 2025",
    },
    {
        jobtitle: "Vice President",
        where: "Paridrishya - The Photography Society of DPSRU/DIPSAR",
        date: "Nov 2022 – Oct 2023",
    },
    {
        jobtitle: "Vice Chairperson",
        where: "Indian Pharmaceutical Association Students' Forum - Delhi State Chapter",
        date: "May 2023 – Dec 2023",
    },
    {
        jobtitle: "Research Intern",
        where: "Dept of Preventive Oncology, Dr. B.R.A.I.R.C.H., AIIMS New Delhi",
        date: "May 2023 – Jul 2023",
    },
    {
        jobtitle: "Media and Publicity Chair",
        where: "Rotaract Club of DPSRU",
        date: "July 2021 – Jun 2022",
    },
];

const skills = [
    { name: "PCR & Gel Electrophoresis", value: 95 },
    { name: "Cell Culture & Flow Cytometry", value: 90 },
    { name: "RNA/DNA Extraction & Western Blot", value: 90 },
    { name: "RNA-Seq & Differential Expression", value: 88 },
    { name: "Network/Enrichment Analysis", value: 85 },
    { name: "AutoDock4 & Molecular Docking", value: 80 },
    { name: "Python / R (NumPy, Pandas, DESeq2)", value: 88 },
    { name: "Data Viz (Matplotlib, ggplot2)", value: 82 },
    { name: "SQL & Data Cleaning (MySQL, OpenRefine)", value: 80 },
    { name: "Design (Photoshop, Illustrator, Canva)", value: 82 },
    { name: "Figma & Premiere Pro", value: 85 },
    { name: "Photography", value: 86 },
];

const services = [
    {
        title: "Wet-lab & Molecular Biology",
        description: "PCR, gel electrophoresis, cell culture, transformations and assay optimization for translational projects.",
    },
    {
        title: "Computational Biology & RNA-Seq Analysis",
        description: "QC, alignment, differential expression, enrichment and reproducible pipelines across BioConductor (R) and Python.",
    },
    {
        title: "Data Visualization & Scientific Communication",
        description: "Clear figures, reports and design assets for research narratives, grants and outreach.",
    },
];

const dataportfolio = [
    {
        img: "https://lh3.googleusercontent.com/sitesv/AAzXCkey5-CFlP9GHKKo-VJdnQz0FxfI0L_dEcpBOl_kGDOPbiOkNmPCOfX2aV3oJSlyaGH5lmQMnUh5pxidC7WIOx9S6hhxC4igOez7R5qPwJvp3JD7-V0Fh_j5nzYoFUNM-A5JjWhcspSTy6m-RH8qgGe0HMeUljb-uv1MmJVOw2209Bu1DLPDX0FL=w1280",
        description: "Genetic underpinnings of ACE inhibitor ADR profiles across populations; 3k+ records cleaned and analyzed in R.",
        link: "https://github.com/aseessingh/ADR-Genetics-ACE",
    },
    {
        img: "https://lh3.googleusercontent.com/sitesv/AAzXCkd2F9RocvNKKskwYjHfsY4H-ZFkq_EjeadUhL2jJk8_P8spbNhqxK2c-4OYYqxjBHU3kG4FTbZBLas2xN9lmQqsgn0LRIhEIAIyoJKF5sNSEvXLjLb91gy0LeuPoRGO2UH2pBM248CeV7K-7pqTTkRfRfiNqPB8nT5jyYlylFcbcL2Z6hBBVD-jc08=w1280",
        description: "Quantum SVM for space debris collision risk (Qiskit) on 960 samples × 12 features; delivered under 1-week deadline.",
        link: "https://github.com/CH1NMAY117/Space-Debris-Risk-Challenge-QML/tree/main",
    },
    {
        img: "https://lh3.googleusercontent.com/sitesv/AAzXCkfZqooT2_ohuUQG47KnhFpjbtQPwK635XsexHTZL20LGYiNYxpzRl7SIPo0TUnm8ucbUxjwx4olD0f05B3i10PpJnBkXF2YPopbFhX-fBha2RoQ5lFsl1e9sjjGuesrvNwZa0uexSW1Zj8fcdJqaRMLmmeujaJHA7DdvwW0Ob0YJ2YO85m_v7q0GPM=w1280",
        description: "Arogyavitals: low-cost maternal health monitoring prototype; sensor integration + Flutter app, 40% cost reduction.",
        link: "https://github.com/CH1NMAY117/mitralink/tree/master",
    },
    {
        img: "https://lh3.googleusercontent.com/sitesv/AAzXCkeYTiIQCTBbjlV9WXQwuN3ME9SHG6YXMirevKKNzLuZw201Aa6MkB06kNbUv1HQF9SircTdSdNtNWOzpoFHqvqQBy5yHXtdJRI7I-JQe1Y6ShGx6tgudv5XJrZpG4EQM0I6gg-evzrip53rCqpIZT-vSKCz_xsP6f_ERjs1DNruCDJFuigqlSp2F_I=w1280",
        description: "RP-UFLC method for caffeine estimation in soft drinks; >97% accuracy with validated QC workflow.",
        link: "https://drive.google.com/file/d/1xsKtJRfKnpuKvnyBhfyaPyNJopZIloTl/view",
    },
    {
        img: "https://lh3.googleusercontent.com/sitesv/AAzXCkd2n4Z_Su4kbnA4PGpVTZLr5sNtnbzxwn6ymNttf2Sh6OOihBZ6zyJ8rIJ0SGigFL1GV6fkBJP7Ee59jP6IA7YSmIBQbaSmCx3xaCXzfZbLIpk5Lmk3rMGUn4BLx1KD430yailgFJvblN_E3vOrN5Wq3j9sVXHu8Qi2kdy89XCZIXlxPmiFK9yOUCvQmUmSkkYiLS2XTszesSaAzfAaNQ9QeDasNrXiEDonLFU=w1280",
        description: "NY-ESO-1 immunotherapy vector development at AIIMS; PCR, gel runs, transformations, early constructs.",
        link: "#",
    },
    {
        img: "https://lh3.googleusercontent.com/sitesv/AAzXCkcZwombDCvSgbH7PStTtkQj7tIGL8JzZJtpNwLAosGvNVMOLiOkXdazucemEwSmQGAntLZSub_iEmMaaO8wLob-R03HEg8fXF8G-1u7ZWEm6pgrqPhcmG9VdagYlrooAeXXhzHyU1frO-b-lukeVTiVxWkXwpzyRPmV9dogPZ-3Uz1mi47Tpxqj0Xo=w1280",
        description: "Design & Media: social campaigns and freelance branding; print-ready assets.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "carora200127@gmail.com",
    YOUR_FONE: "+91-9888640320",
    description: "Feel free to reach out for collaborations and meaningful discussions, I’m open to impactful research and product teams.",
    // create an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_xxg0amk",
    YOUR_TEMPLATE_ID: "template_bg3k54a",
    YOUR_USER_ID: "yPyFrgxGt4aeRJT4A",
};

const socialprofils = {
    github: "https://github.com/CH1NMAY117",
    linkedin: "https://linkedin.com/in/chinmay-arora-s117",
    twitter: "https://x.com/chinmayarora27",
    facebook: "https://www.facebook.com/chimmay.arora",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};