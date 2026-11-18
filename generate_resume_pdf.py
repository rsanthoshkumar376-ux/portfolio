# Simple script to create a valid minimal PDF file for Santhosh's resume
import sys

def create_resume_pdf(filename):
    content_stream = b"""BT
/F1 18 Tf
50 780 Td
(SANTHOSH KUMAR R.) Tj
/F1 11 Tf
0 -22 Td
(Aspiring AI & Data Science Engineer | Software Developer) Tj
/F2 9 Tf
0 -16 Td
(Rajalakshmi Institute of Technology, Chennai | rsanthoshkumar376@gmail.com) Tj
0 -14 Td
(LinkedIn: linkedin.com/in/santhosh-kumar-r-1892553b4 | GitHub: github.com/santhoshkumarr376) Tj

/F1 12 Tf
0 -30 Td
(CAREER OBJECTIVE) Tj
/F2 9 Tf
0 -15 Td
(To become a skilled AI and Data Science Engineer by developing practical software applications,) Tj
0 -12 Td
(exploring artificial intelligence, participating in hackathons and solving real-world problems.) Tj

/F1 12 Tf
0 -28 Td
(EDUCATION) Tj
/F1 10 Tf
0 -16 Td
(Rajalakshmi Institute of Technology (RIT), Chennai) Tj
/F2 9 Tf
0 -14 Td
(B.Tech in Artificial Intelligence and Data Science) Tj
0 -12 Td
(Key Coursework: Data Structures, Machine Learning, DBMS, SQL, OOP, AI Fundamentals) Tj

/F1 12 Tf
0 -28 Td
(TECHNICAL SKILLS) Tj
/F2 9 Tf
0 -16 Td
(Programming: Python, Java, SQL) Tj
0 -13 Td
(Frontend: HTML, CSS, JavaScript, React) Tj
0 -13 Td
(Backend & Database: Node.js, MySQL) Tj
0 -13 Td
(AI Technologies: Google Gemini API, AI Integration, Image Recognition Concepts) Tj
0 -13 Td
(Tools: Visual Studio Code, Git, GitHub) Tj

/F1 12 Tf
0 -28 Td
(FEATURED PROJECTS) Tj
/F1 10 Tf
0 -16 Td
(1. MRS SOLAR - Solar Loan Management & Clean Energy Tracking Platform (Flagship)) Tj
/F2 9 Tf
0 -13 Td
(Engineered with 10 modules: Customer, Manager, Worker, Owner Portals, Solar Generation Tracking,) Tj
0 -12 Td
(CRM, Gemini AI Chatbot, and TNEB Bill Integration. 100% Grid-Tied System without batteries.) Tj
0 -12 Td
(Tech: React, TypeScript, Node.js, MySQL, Google Gemini API, Tailwind CSS) Tj

/F1 10 Tf
0 -18 Td
(2. Nourish Network - Real-Time Surplus Food Allocation Ecosystem) Tj
/F2 9 Tf
0 -13 Td
(Connecting restaurants, farmers, and NGOs to redistribute surplus food to hunger shelters.) Tj

/F1 10 Tf
0 -18 Td
(3. AICTE Application Validation System - Institutional Compliance Platform) Tj
/F2 9 Tf
0 -13 Td
(SIH prototype for automated scrutiny of institutional approval dossiers and anomaly detection.) Tj

/F1 12 Tf
0 -28 Td
(CERTIFICATIONS & HACKATHONS) Tj
/F2 9 Tf
0 -16 Td
(Infosys Springboard: 13 Verified Certifications in Python, Java, DBMS, AI, ML, Web, and Git.) Tj
0 -13 Td
(Hackathons: Smart India Hackathon (SIH) Participant; Designathon 2.0 Participant.) Tj
ET"""

    objects = []
    
    # 1: Catalog
    objects.append(b"<< /Type /Catalog /Pages 2 0 R >>")
    # 2: Pages
    objects.append(b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
    # 3: Page
    objects.append(b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>")
    # 4: Contents
    objects.append(b"<< /Length " + str(len(content_stream)).encode('ascii') + b" >>\nstream\n" + content_stream + b"\nendstream")
    # 5: Font Helvetica-Bold
    objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")
    # 6: Font Helvetica
    objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")

    with open(filename, 'wb') as f:
        f.write(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
        offsets = []
        for i, obj in enumerate(objects):
            offsets.append(f.tell())
            f.write(f"{i + 1} 0 obj\n".encode('ascii'))
            f.write(obj)
            f.write(b"\nendobj\n")
            
        xref_offset = f.tell()
        f.write(b"xref\n")
        f.write(f"0 {len(objects) + 1}\n".encode('ascii'))
        f.write(b"0000000000 65535 f \n")
        for offset in offsets:
            f.write(f"{offset:010d} 00000 n \n".encode('ascii'))
            
        f.write(b"trailer\n")
        f.write(f"<< /Size {len(objects) + 1} /Root 1 0 R >>\n".encode('ascii'))
        f.write(b"startxref\n")
        f.write(f"{xref_offset}\n".encode('ascii'))
        f.write(b"%%EOF\n")

if __name__ == "__main__":
    out_file = sys.argv[1] if len(sys.argv) > 1 else "resume.pdf"
    create_resume_pdf(out_file)
    print("Created resume PDF successfully at", out_file)
