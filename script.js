/* ==========================================================================
   Bilingual Translation Dictionary
   ========================================================================== */
const translations = {
    vi: {
        // Navigation
        nav_home: "Trang chủ",
        nav_about: "Giới thiệu",
        nav_skills: "Kỹ năng",
        nav_experience: "Kinh nghiệm",
        nav_projects: "Dự án",
        nav_contact: "Liên hệ",
        
        // Hero Section
        hero_badge: "Sẵn sàng hợp tác & Đột phá",
        hero_short_desc: "Kỹ sư Điện & Tự động hóa nhiệt huyết, Chuyên gia giải pháp An toàn Khí tại Riken Viet. Tập trung vào phát triển giải pháp tối ưu hóa an toàn lao động và tự động hóa công nghiệp.",
        hero_btn_contact: "Liên hệ ngay",
        hero_btn_projects: "Xem dự án",
        
        // About Section
        about_subtitle: "VỀ TÔI",
        about_title: "Câu chuyện nghề nghiệp",
        about_bio_text: "Tôi là một chuyên gia kỹ thuật chuyên sâu về Hệ thống phát hiện khí độc, khí cháy nổ và Tự động hóa công nghiệp, hiện đang chịu trách nhiệm kỹ thuật và vận hành tại Riken Viet. Với nền tảng kiến thức vững chắc trải rộng từ lập trình PLC, thiết kế bản vẽ AutoCAD Electrical đến lập trình phần mềm điều khiển bằng Python và C, tôi tập trung vào việc đem lại các giải pháp an toàn tối ưu nhất cho các lĩnh vực công nghiệp. Tôi luôn đam mê ứng dụng công nghệ hiện đại và trí tuệ nhân tạo (AI) để nâng cao tiêu chuẩn an toàn lao động và hiệu quả vận hành tại Việt Nam.",
        about_label_exp: "Năm kinh nghiệm",
        about_label_projects: "Dự án hoàn thành",
        about_label_safety: "Chuẩn an toàn khí",
        about_details_title: "Thông tin chi tiết",
        
        detail_name: "Họ và tên",
        detail_role: "Chức danh hiện tại",
        detail_role_val: "Kỹ sư Tự động hóa | Chuyên gia An toàn Khí",
        detail_company: "Đơn vị công tác",
        detail_phone: "Số điện thoại",
        detail_email: "Email liên hệ",
        detail_edu: "Học vấn tốt nghiệp",

        // Skills Section
        skills_subtitle: "KỸ NĂNG",
        skills_title: "Năng lực Chuyên môn & Kỹ thuật",
        skills_cat_automation: "Điện & Tự động hóa",
        skills_cat_software: "Lập trình & Công nghệ",
        skills_cat_operation: "Vận hành & Kỹ thuật Hiện trường",
        skill_ai: "Ứng dụng & Sử dụng trí tuệ nhân tạo (AI Tools)",
        skill_repair: "Equipment Repair (Sửa chữa thiết bị)",
        skill_maintenance: "Technical Maintenance (Bảo trì kỹ thuật)",
        skill_mfg: "Manufacturing Techniques (Kỹ thuật sản xuất)",
        skill_pm: "Project Management (Quản lý dự án)",

        // Timeline Section
        timeline_subtitle: "QUÁ TRÌNH",
        timeline_title: "Kinh nghiệm & Học vấn",
        timeline_tag_exp: "KINH NGHIỆM LÀM VIỆC",
        timeline_tag_edu: "BẰNG CẤP CHỨNG CHỈ",
        timeline_date_riken: "Hiện tại (Từ năm 2023)",
        timeline_desc_riken: "Phụ trách chính các hoạt động kỹ thuật, thiết kế và lắp đặt hệ thống cảnh báo và dò tìm khí gas công nghiệp. Lập trình vi điều khiển và lập trình PLC điều khiển các quy trình tự động hóa. Vận hành, bảo dưỡng định kỳ và trực tiếp sửa chữa các thiết bị đo kiểm khí an toàn cao cho các nhà xưởng, khu chế xuất lớn tại Việt Nam.",
        timeline_date_huit: "Tốt nghiệp",
        timeline_title_huit: "Kỹ sư Điện & Tự động hóa",
        timeline_desc_huit: "Đào tạo chuyên sâu về Lý thuyết điều khiển tự động, Lập trình PLC điều khiển công nghiệp, Thiết kế mạch điện AutoCAD Electrical, Các kỹ thuật sản xuất hiện đại và Thực hành sửa chữa bảo trì hệ thống cơ điện. Đóng vai trò là trưởng nhóm nghiên cứu trong nhiều dự án mô phỏng tự động hóa cấp khoa.",

        // Projects Section
        projects_subtitle: "DỰ ÁN",
        projects_title: "Sản phẩm kỹ thuật tiêu biểu",
        project_tag_riken: "Riken Viet",
        project_tag_rnd: "Nghiên cứu & Phát triển",
        project_tag_maintenance: "Bảo trì & Vận hành",
        proj1_title: "Hệ thống dò khí Gas tập trung cao cấp",
        proj1_desc: "Thiết kế bản vẽ tủ điều khiển AutoCAD Electrical, lập trình kết nối PLC và hệ thống cảm biến dò khí Gas/Oxy công nghiệp Riken Keiki. Đảm bảo cảnh báo an toàn tức thời cho nhà máy chế biến.",
        proj2_title: "Lập trình Điều khiển Giám sát SCADA",
        proj2_desc: "Viết phần mềm giám sát trạng thái khí độc hại thời gian thực bằng Python tích hợp giải pháp AI chuẩn đoán sớm lỗi của cảm biến đo lường, giao tiếp qua giao thức Modbus RTU/TCP.",
        proj3_title: "Quy trình Bảo trì Cảm biến Khí chuẩn Riken",
        proj3_desc: "Chuẩn hóa quy trình hiệu chuẩn máy dò khí cầm tay và cố định của hãng Riken Keiki Nhật Bản. Nâng cao tỷ lệ sẵn sàng thiết bị lên 99.8% và giảm thời gian chết bảo dưỡng.",

        // Contact Section
        contact_subtitle: "LIÊN HỆ",
        contact_title: "Khởi động cơ hội mới",
        contact_call: "Điện thoại di động",
        contact_addr: "Nơi làm việc hiện tại",
        form_title: "Gửi tin nhắn trực tuyến",
        form_name: "Họ và tên của bạn",
        form_msg: "Nội dung tin nhắn",
        form_submit: "Gửi thông tin liên lạc"
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_contact: "Contact",
        
        // Hero Section
        hero_badge: "Ready for collaboration & breakthrough",
        hero_short_desc: "Passionate Electrical & Automation Engineer, Gas Safety Solutions Expert at Riken Viet. Focused on delivering optimized safety solutions and industrial automation.",
        hero_btn_contact: "Contact Me",
        hero_btn_projects: "View Projects",
        
        // About Section
        about_subtitle: "ABOUT ME",
        about_title: "Professional Story",
        about_bio_text: "I am a technical professional specializing in Gas Detection and Industrial Automation, currently leading operations at Riken Viet. With a robust technical background ranging from PLC programming and AutoCAD Electrical design to software development in Python and C, I focus on delivering optimized safety solutions for industrial sectors. I am passionate about leveraging modern technology and AI to enhance workplace safety standards and operational efficiency in Vietnam.",
        about_label_exp: "Years Experience",
        about_label_projects: "Projects Completed",
        about_label_safety: "Gas Safety Standards",
        about_details_title: "Personal Information",
        
        detail_name: "Full name",
        detail_role: "Current Position",
        detail_role_val: "Automation Engineer | Gas Safety Expert",
        detail_company: "Current Company",
        detail_phone: "Phone Number",
        detail_email: "Email Address",
        detail_edu: "Academic Degree",

        // Skills Section
        skills_subtitle: "SKILLS",
        skills_title: "Technical Expertise & Capabilities",
        skills_cat_automation: "Electrical & Automation",
        skills_cat_software: "Software & Technology",
        skills_cat_operation: "Operations & Field Engineering",
        skill_ai: "AI Integration & Utilization (AI Tools)",
        skill_repair: "Equipment Repair",
        skill_maintenance: "Technical Maintenance",
        skill_mfg: "Manufacturing Techniques",
        skill_pm: "Project Management",

        // Timeline Section
        timeline_subtitle: "JOURNEY",
        timeline_title: "Experience & Education",
        timeline_tag_exp: "WORK EXPERIENCE",
        timeline_tag_edu: "EDUCATION & CREDENTIALS",
        timeline_date_riken: "Present (Since 2023)",
        timeline_desc_riken: "In charge of technical operations, designing and installing industrial gas detection and warning systems. Programming microcontrollers and PLC systems for automation. Commissioning, routine maintenance, and hardware repair of precision gas safety monitors for industrial factories across Vietnam.",
        timeline_date_huit: "Graduated",
        timeline_title_huit: "B.S. in Electrical & Automation Engineering",
        timeline_desc_huit: "Rigorous coursework in Automatic Control Theory, Industrial PLC programming, AutoCAD Electrical circuit design, modern Manufacturing Techniques, and electromechanical maintenance and troubleshooting. Served as a research lead for multiple science projects.",

        // Projects Section
        projects_subtitle: "PROJECTS",
        projects_title: "Featured Engineering Work",
        project_tag_riken: "Riken Viet",
        project_tag_rnd: "Research & Development",
        project_tag_maintenance: "Maintenance & Operations",
        proj1_title: "Advanced Centralized Gas Detection System",
        proj1_desc: "Designed control panel layout in AutoCAD Electrical, programmed PLC integration and configured industrial Riken Keiki Gas/Oxygen sensors. Ensures automated instant hazard alarms for processing plants.",
        proj2_title: "SCADA Control & Monitoring Platform",
        proj2_desc: "Developed a real-time hazardous gas monitor with Python, incorporating AI modules to predict early sensor drift/errors and communicates via Modbus RTU/TCP protocol.",
        proj3_title: "Gas Sensor Calibration Standard Operating Procedure",
        proj3_desc: "Standardized the inspection and calibration procedure for Riken Keiki fixed and portable gas detectors. Boosted hardware uptime to 99.8% and reduced emergency downtime.",

        // Contact Section
        contact_subtitle: "CONTACT ME",
        contact_title: "Let's Start a New Opportunity",
        contact_call: "Mobile Phone",
        contact_addr: "Current Location",
        form_title: "Send a Message Online",
        form_name: "Your Full Name",
        form_msg: "Message Content",
        form_submit: "Send Contact Info"
    }
};

/* ==========================================================================
   State Management & Initialization
   ========================================================================== */
let currentLang = localStorage.getItem("preferred_lang") || "vi";

// Dynamic typing strings per language
const typeStrings = {
    vi: [
        "Kỹ thuật viên tại RIKEN VIET",
        "Kỹ sư Điện & Tự động hóa",
        "Chuyên gia Giải pháp An toàn Khí"
    ],
    en: [
        "Technician at RIKEN VIET",
        "Electrical & Automation Engineer",
        "Gas Safety Solutions Expert"
    ]
};

// DOM Elements
const typedTextSpan = document.getElementById("typed-text");
const header = document.querySelector(".main-header");
const mobileToggle = document.querySelector(".mobile-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile-link");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

// Typing parameters
let stringIndex = 0;
let charIndex = 0;
let isTyping = true;
let typingTimeout;

/* ==========================================================================
   Language Transition Engine
   ========================================================================== */
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("preferred_lang", lang);
    
    // Toggle active state in UI switch buttons
    document.getElementById("lang-vi").classList.toggle("active", lang === "vi");
    document.getElementById("lang-en").classList.toggle("active", lang === "en");
    
    // Update HTML lang attribute
    document.documentElement.setAttribute("lang", lang);
    
    // Translate all elements with data-i18n tags
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update Input placeholders & Labels dynamically
    const nameInput = document.getElementById("form-name");
    const nameLabel = nameInput ? nameInput.nextElementSibling : null;
    if (nameLabel) nameLabel.textContent = translations[lang]["form_name"];

    const msgInput = document.getElementById("form-msg");
    const msgLabel = msgInput ? msgInput.nextElementSibling : null;
    if (msgLabel) msgLabel.textContent = translations[lang]["form_msg"];

    // Reset and restart typewriter animation with new language list
    clearTimeout(typingTimeout);
    stringIndex = 0;
    charIndex = 0;
    isTyping = true;
    if (typedTextSpan) {
        typedTextSpan.textContent = "";
        typeEffect();
    }
}

/* ==========================================================================
   Typewriter Animation Effect
   ========================================================================== */
function typeEffect() {
    if (!typedTextSpan) return;
    
    const strings = typeStrings[currentLang];
    const currentString = strings[stringIndex];
    
    if (isTyping) {
        // Typing characters
        typedTextSpan.textContent = currentString.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentString.length) {
            isTyping = false;
            // Delay at full string
            typingTimeout = setTimeout(typeEffect, 2000);
        } else {
            typingTimeout = setTimeout(typeEffect, 75);
        }
    } else {
        // Deleting characters
        typedTextSpan.textContent = currentString.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isTyping = true;
            // Next string in sequence
            stringIndex = (stringIndex + 1) % strings.length;
            typingTimeout = setTimeout(typeEffect, 500);
        } else {
            typingTimeout = setTimeout(typeEffect, 40);
        }
    }
}

/* ==========================================================================
   Navigation & UI Event Listeners
   ========================================================================== */

// Mobile menu drawer toggle
if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener("click", () => {
        mobileNav.classList.toggle("open");
        const icon = mobileToggle.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");
        }
    });
}

// Close mobile menu on clicking any navigation drawer links
mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (mobileNav) mobileNav.classList.remove("open");
        const icon = mobileToggle ? mobileToggle.querySelector("i") : null;
        if (icon) {
            icon.classList.add("fa-bars");
            icon.classList.remove("fa-xmark");
        }
    });
});

// Scroll Events
window.addEventListener("scroll", () => {
    // 1. Add blurred styled overlay class to header on scroll
    if (header) {
        header.classList.toggle("scrolled", window.scrollY > 50);
    }
    
    // 2. Dynamic active section navigation highlight
    let currentActive = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            currentActive = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentActive}`) {
            link.classList.add("active");
        }
    });
});

// Scroll Reveal Observer for Premium animations
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
        }
    });
}, { threshold: 0.15 });

// Initialize Script
document.addEventListener("DOMContentLoaded", () => {
    // 1. Apply local preferred language state
    setLanguage(currentLang);
    
    // 2. Set scroll reveal animations target elements
    document.querySelectorAll(".scroll-reveal").forEach(el => {
        // Add visual transition helper class
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        
        // Custom dynamic stylesheet rules injection for revealed state
        const style = document.createElement("style");
        style.innerHTML = ".scroll-reveal.revealed { opacity: 1 !important; transform: translateY(0) !important; }";
        document.head.appendChild(style);
        
        revealObserver.observe(el);
    });
});
