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
    your_img_url: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/main.png",
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
        img: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/gwas.png",
        description: "Genetic underpinnings of ACE inhibitor ADR profiles across populations; 3k+ records cleaned and analyzed in R.",
        link: "https://github.com/aseessingh/ADR-Genetics-ACE",
    },
    {
        img: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/qml.png",
        description: "Quantum SVM for space debris collision risk (Qiskit) on 960 samples × 12 features; delivered under 1-week deadline.",
        link: "https://github.com/CH1NMAY117/Space-Debris-Risk-Challenge-QML/tree/main",
    },
    {
        img: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/arogya.png",
        description: "Arogyavitals: low-cost maternal health monitoring prototype; sensor integration + Flutter app, 40% cost reduction.",
        link: "https://github.com/CH1NMAY117/mitralink/tree/master",
    },
    {
        img: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/bpharm.png",
        description: "RP-UFLC method for caffeine estimation in soft drinks; >97% accuracy with validated QC workflow.",
        link: "https://drive.google.com/file/d/1xsKtJRfKnpuKvnyBhfyaPyNJopZIloTl/view",
    },
    {
        img: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/aiims.png",
        description: "NY-ESO-1 immunotherapy vector development at AIIMS; PCR, gel runs, transformations, early constructs.",
        link: "https://drive.google.com/file/d/1ddkth5sdNYxvaSlcQlyoKl28qXTp03mw/view?usp=sharing",
    },
    {
        img: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/media.png",
        description: "Design & Media: social campaigns and freelance branding; print-ready assets.",
        link: "/designmedia",
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
    resume: "https://drive.google.com/file/d/14UJSIoVYDjHERZe3PbHs03gKmsjUZDFr/view?usp=sharing",
};

// Design & Media Page Content
const designmediadata = {
    heroTitle: "Design/Visual work done over the past years",
    sections: [
        {
            heading: "SOME VISUALS",
            subheading: "Research and Industrial Conclave, IIT Guwahati",
        }
    ],
    ricMedia: [
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/master/src/assets/images/ric/3.png" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/master/src/assets/images/ric/4.png" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/master/src/assets/images/ric/5.png" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/master/src/assets/images/ric/6.JPG" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/master/src/assets/images/ric/7.png" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/master/src/assets/images/ric/8.png" },
    ],
     
    jbmshstMedia: [
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/shst/1.png" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/shst/2.png" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/shst/3.png" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/shst/4.png" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/shst/5.png" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/shst/6.png" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/shst/7.png" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/shst/8.jpg" },
    ],

    paridrishyaPortfolioLink: "https://sites.google.com/dpsru.edu.in/paridrishya-events-catalogue/work",
    
    rotaractParidrishyaMedia: [
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/dpsru/1.JPEG" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/dpsru/2.JPEG" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/dpsru/3.JPEG" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/dpsru/4.PNG" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/dpsru/5.PNG" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/dpsru/6.jpg" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/dpsru/7.PNG" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/dpsru/8.PNG" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/dpsru/9.PNG" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/dpsru/10.jpg" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/dpsru/11.jpg" },
    ],
    
    singhPharmacyMedia: [
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/sp/1.PNG" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/sp/2.PNG" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/sp/3.PNG" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/sp/4.png" },
        { type: "image", src: "https://raw.githubusercontent.com/CH1NMAY117/CH1NMAY117.github.io/refs/heads/master/src/assets/images/sp/5.JPG" },
    ],
    pagesManaged: [
        { name: "Rotaract Club of DPSRU", logo: "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-1/306338466_417356967213712_1284703686552222484_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=1o0R5dOYxYoQ7kNvwHRcDb9&_nc_oc=Adnp40eDQZ3eqvtb23Gvw2btNs_ZiPjfEqybVYUj3zKEK14wF81IPtjq41ohSs86C8Y&_nc_zt=24&_nc_ht=scontent.fdel29-1.fna&_nc_gid=jN5qIMJkbsjGuocx8qkeRg&oh=00_AfnzYZ4AmK4Zu7yg0dCVPSpT1g8y-lflnAe7ow6n9iWwLQ&oe=69462E51", link: "https://www.instagram.com/rotaractdpsru/" },
        { name: "IPASF-DSC", logo: "https://media.licdn.com/dms/image/v2/D560BAQEN_cpPv6AY4g/company-logo_200_200/company-logo_200_200/0/1725646715693?e=2147483647&v=beta&t=GMGAW1BK4hmbM36ee3t_cYtQ7dABWvHUwQzqtLsqeBs", link: "https://www.instagram.com/ipasfdelhistatechapter/" },
        { name: "IPA-SF", logo: "https://media.licdn.com/dms/image/v2/C4D0BAQH_213lBQfZBw/company-logo_200_200/company-logo_200_200/0/1630575484699/ipasf_logo?e=2147483647&v=beta&t=PBbBg6kkJIoeD3R9-iCBy0uOmHdClJ4-HLFFyyVWzwA", link: "https://www.instagram.com/ipasforg/" },
        { name: "Paridrishya", logo: "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-1/326389588_578562877478357_7613769801692515970_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=4NtaBZUB9GoQ7kNvwHU09XX&_nc_oc=Adk7EAcozB-SgNe8JUvKmGS-x6aEEfokaFENQYBfdwx8PiESfqdcVGrdrBk3NCAepOM&_nc_zt=24&_nc_ht=scontent.fdel29-1.fna&_nc_gid=O1TzTIAVdd3qBsQ9QR5TkQ&oh=00_Afm1q1UMPBonpf6BkYPmEV3PWkYfa1UEA_aOijbcqUcOfw&oe=694630B6", link: "https://www.instagram.com/paridrishya_dpsru/" },
        { name: "RIC IITG", logo: "https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-1/340430059_951012026342142_8559849365772485941_n.jpg?stp=c26.0.434.434a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=afbLuXvXSYsQ7kNvwFViB6d&_nc_oc=AdnyOWZLPrCTXnPKWj0MRRdklsq2n1OE6PMMkgt8T2B_3xpFfX_TzAJ4F9HLKCGANkQ&_nc_zt=24&_nc_ht=scontent.fdel29-1.fna&_nc_gid=2W1nzDr5OgC4GAVIZlRU4g&oh=00_AfmLx_sj2MW4-nYOKCBzx_WYzyvsROMFKZlQZxRQ0BlS5g&oe=69462C04", link: "https://www.instagram.com/ric_iitg/" },
    ],
    tools: [
        { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/250px-Figma-logo.svg.png" },
        { name: "Adobe Photoshop", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Adobe_Photoshop_CC_2026_icon.svg/330px-Adobe_Photoshop_CC_2026_icon.svg.png" },
        { name: "Lightroom", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Lightroom_CC_2026_icon.svg/330px-Adobe_Lightroom_CC_2026_icon.svg.png" },
        { name: "Illustrator", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/330px-Adobe_Illustrator_CC_icon.svg.png" },
        { name: "Premiere Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Adobe_Premiere_Pro_CC_2026_icon.svg/330px-Adobe_Premiere_Pro_CC_2026_icon.svg.png" },
        { name: "Canva", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Canva_Logo.svg/500px-Canva_Logo.svg.png" },
        { name: "Affinity", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Affinity_%28App%29_Logo.svg/250px-Affinity_%28App%29_Logo.svg.png" },
    ],
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
    designmediadata,
};