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
    your_img_url: "https://lh3.googleusercontent.com/sitesv/AAzXCkd9XyycTdgE_UdLwINsUlmo7XyTgx_S6hEVruqPPvZuvYgqX7CNkL50v1LJuS8rXOj39-tLMbZx2gKF4nGT2lohc-i_q9ntNVX9q4swOgIvKO0KaKT6B_otql9Gy0i2qElZy0MGlFaznPDI_Z9xx3ZffnT-5qDK0_3BuB3lEDG9Rbozr_NUdibS6aKDwrCHgj_xDfa5Uqrkwg1DMM1QX38RhRc9QFBOEgvNrFM=w1280",
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
        img: "https://lh3.googleusercontent.com/sitesv/AAzXCkdH3n3m83b1PVtXtbLaBfJTlnzoQ1AwkTlgayWT_ASAOJNrRw2ajh_CnQWArXEUJ8b4t7TSNd7Y2KyglbzpbzoWV-xqwNlGed5UDWQ0qG-oY0NA_oUzcOKh-sCzuAs28qsUCsX92FLhvFxLrkzEOND0MU1DHTJGlzFABOx5Sv1EygSHS2udsTAO=w1280",
        description: "Genetic underpinnings of ACE inhibitor ADR profiles across populations; 3k+ records cleaned and analyzed in R.",
        link: "https://github.com/aseessingh/ADR-Genetics-ACE",
    },
    {
        img: "https://lh3.googleusercontent.com/sitesv/AAzXCkfpiNX6A6bWFksYO9vkM87vUpjxVcT5rwA5iCdkQEp5bRUS3e62mbgSiqsiMlt8Kweo4myzoQg57b7V5NPXG_bYjxicEg897LZMt21mHRDdG33eNJN4VHi-9T7DjVA4yn0V_d9daJZjjeoJ2tbt2mse78PpFVW-hdcQurwzgDmb4eddp7f6jNpwS5w=w1280",
        description: "Quantum SVM for space debris collision risk (Qiskit) on 960 samples × 12 features; delivered under 1-week deadline.",
        link: "https://github.com/CH1NMAY117/Space-Debris-Risk-Challenge-QML/tree/main",
    },
    {
        img: "https://lh3.googleusercontent.com/sitesv/AAzXCkfU3d76ZY0-KHSB3VlILxhdjyH5vwLVgzVSeE4IWWyAWX2DiRUBtatANMhXUOud8V-GmLuGTfXGem2nbkaJIRctzhHLaEY51O7VUBrcJjqj197-effGIlZszHlBrBCgdG_vqk8cQ-aUDnMlpx1MOfcT8OcKcdKMNIs5DO-9RoZsXpnb4ohnCKMjIv0=w1280",
        description: "Arogyavitals: low-cost maternal health monitoring prototype; sensor integration + Flutter app, 40% cost reduction.",
        link: "https://github.com/CH1NMAY117/mitralink/tree/master",
    },
    {
        img: "https://lh3.googleusercontent.com/sitesv/AAzXCkdqc1IA8orFO8uTJKSpDp0_CpN2_hgiryc2zKWLBA0BPBEdGHdUAvaSoHSpkFXNFteomOz1Cul6892gDB_QOFSVqdwcdHih4dAj6qYPN3fJV2Rbq3kXZEUFPP7phklC6zwi1k0JhkEeWJOUP2uYNOmXaVGk4CEX9zYRb3KFQHnPalfZgoVySIH6=w1280",
        description: "RP-UFLC method for caffeine estimation in soft drinks; >97% accuracy with validated QC workflow.",
        link: "https://drive.google.com/file/d/1xsKtJRfKnpuKvnyBhfyaPyNJopZIloTl/view",
    },
    {
        img: "https://lh3.googleusercontent.com/sitesv/AAzXCkfd2Nj6w2d3A8rYZ8q8uolIDozGWH7H94-iY_VQbZO1wYsmGoaOwDxFOrv4Ke3iaNrRMZsGnPAubCnzYMcVqKlFQzVDngqerqxZW99E1iUbrFMVR-7_R9RJPZeK9VTX-mxI0HjWLnTBx6eyKcqCt6eDl_0gjpXCki750i7dbQlY0kp4KePUofBX7bs=w1280",
        description: "NY-ESO-1 immunotherapy vector development at AIIMS; PCR, gel runs, transformations, early constructs.",
        link: "#",
    },
    {
        img: "https://lh3.googleusercontent.com/sitesv/AAzXCkdkuJn9FYGxIazyM4kZjxVY5YaGY00wbmQdDg1vHygVN65g7ZPljODkRVgnhyDz3gNDrU8lgLiyIHnBPhAL8xzbfY1nRUHGxN8xT7bTWnO5d_xrFJ5vJB6yae7n9u1EfQscQXWpd_fUjpqu7DhDqL8iSHaNQbmrv9ayywNbO5wKQ7TZeW38otjXBlc=w1280",
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