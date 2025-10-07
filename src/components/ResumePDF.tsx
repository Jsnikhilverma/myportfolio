import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 30,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 20,
    textAlign: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2563eb",
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: "#374151",
    marginBottom: 10,
  },
  contact: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 10,
    borderBottom: "2 solid #2563eb",
    paddingBottom: 5,
  },
  text: {
    fontSize: 11,
    color: "#374151",
    lineHeight: 1.5,
    marginBottom: 5,
  },
  bullet: {
    fontSize: 11,
    color: "#374151",
    marginBottom: 3,
    marginLeft: 10,
  },
  skills: {
    fontSize: 11,
    color: "#374151",
    marginBottom: 3,
  },
  company: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1f2937",
  },
  period: {
    fontSize: 10,
    color: "#6b7280",
    fontStyle: "italic",
  },
});

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Nikhil Verma</Text>
        <Text style={styles.title}>Full Stack Developer & Software Tester</Text>
        <Text style={styles.contact}>
          📞 +91 6392848646 | ✉ jsnikhil00@gmail.com
        </Text>
        <Text style={styles.contact}>🌐 Portfolio | 🔗 LinkedIn</Text>
      </View>

      {/* Professional Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.text}>
          Full Stack Developer with 1+ year of experience in MERN Stack
          (MongoDB, Express.js, React.js, Node.js), Next.js, and REST APIs.
          Skilled in cloud deployment (AWS), and automation testing with
          Selenium & JMeter. Experienced in building SaaS applications, scalable
          web platforms, role-based access control (RBAC), and API integrations.
          Passionate about delivering efficient, secure, and high-performance
          solutions.
        </Text>
      </View>

      {/* Work Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Experience</Text>
        <Text style={styles.company}>
          Full Stack Developer | VGI Sooprs Technology Pvt Ltd.
        </Text>
        <Text style={styles.period}>Aug 2024 – Present | Gurgaon, India</Text>
        <Text style={styles.bullet}>
          • Developed and deployed a CRM system using React.js & Node.js,
          reducing manual workflows by 40%
        </Text>
        <Text style={styles.bullet}>
          • Implemented Role-Based Access Control (RBAC) to securely manage 500+
          users across multiple departments
        </Text>
        <Text style={styles.bullet}>
          • Built an Admin Dashboard with real-time analytics, improving
          reporting speed by 60%
        </Text>
        <Text style={styles.bullet}>
          • Automated API, UI, and load testing with Selenium & JMeter, reducing
          production bugs by 30%
        </Text>
        <Text style={styles.bullet}>
          • Collaborated in an Agile Scrum environment with sprints, Jira
          tracking, and cross-functional reviews
        </Text>
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>

        <Text style={styles.company}>Shopinger | Full Stack Development</Text>
        <Text style={styles.text}>
          Designed a multi-vendor e-commerce platform (like Amazon) with cart,
          checkout, secure payments, and live order tracking. Implemented
          frontend in React.js, backend in Node.js APIs, and MongoDB for dynamic
          inventory. Scaled system to handle 1,000+ concurrent users with
          optimized MongoDB queries.
        </Text>

        <Text style={styles.company}>Namohsundari | MERN Stack</Text>
        <Text style={styles.text}>
          Developed a Perfume Business e-commerce platform with product catalog,
          cart, checkout, secure payments, Live delivery Updated. Implemented
          frontend in React.js, backend in Node.js APIs, and MongoDB for dynamic
          inventory.
        </Text>

        <Text style={styles.company}>AxeVisa | Full Stack Development</Text>
        <Text style={styles.text}>
          Built a visa application management platform with step-based process
          flow. Implemented frontend in Next.js, backend APIs in Node.js, and
          MongoDB for document and user management.
        </Text>
      </View>

      {/* Testing Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Testing Projects</Text>
        <Text style={styles.bullet}>
          • Sooprs.com – Conducted API, UI & automation testing
        </Text>
        <Text style={styles.bullet}>
          • Lorrigo.in – Performed load testing with JMeter
        </Text>
        <Text style={styles.bullet}>
          • Caross.in – Conducted API, UI & automation testing, Load Testing
        </Text>
        <Text style={styles.bullet}>
          • Postbox (Social Media App) – Tested scalability & security
        </Text>
        <Text style={styles.bullet}>
          • EzioTravel (Travel App) – Performed manual and UI testing
        </Text>
      </View>

      {/* Technical Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <Text style={styles.skills}>
          Frontend: React.js, Next.js, Redux, HTML, CSS, Tailwind CSS, Bootstrap
        </Text>
        <Text style={styles.skills}>Backend: Node.js, Express.js, PHP</Text>
        <Text style={styles.skills}>Database: MongoDB, MySQL</Text>
        <Text style={styles.skills}>
          Testing: Selenium (Java), Manual Testing, API Testing, JMeter (Load
          Testing)
        </Text>
        <Text style={styles.skills}>
          Tools & Platforms: Git, Github, Postman, Selenium, AWS
        </Text>
        <Text style={styles.skills}>
          Programming Languages: JavaScript, C++, Python
        </Text>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.company}>
          Bundelkhand Institute Of Engineering And Technology Jhansi
        </Text>
        <Text style={styles.text}>
          B.Tech, Information Technology | 2020 – 2023 | CGPA: 7.79/10
        </Text>
      </View>

      {/* Extracurricular Activities */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Extracurricular Activities</Text>
        <Text style={styles.bullet}>
          • Event Coordinator – Student Council of IT, BIET Jhansi (2022 – 2023)
        </Text>
        <Text style={styles.bullet}>
          • Winner – Child Scientist Award, National Children's Science
          Congress, UP (2015)
        </Text>
      </View>

      {/* Personal Attributes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Attributes</Text>
        <Text style={styles.bullet}>• Problem-solving mindset</Text>
        <Text style={styles.bullet}>
          • Strong debugging and analytical skills
        </Text>
        <Text style={styles.bullet}>
          • Team player with excellent communication
        </Text>
        <Text style={styles.bullet}>• Adaptable to new technologies</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
