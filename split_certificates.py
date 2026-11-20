import os
from pypdf import PdfReader, PdfWriter

src_pdf = r"C:\Users\Admin\.gemini\antigravity\brain\c9a7165e-fd31-4b06-9efb-e8a784c83628\.user_uploaded\media_1795169029306_db97295d.pdf"
out_dir = r"C:\Users\Admin\.gemini\antigravity\scratch\santhosh-portfolio\public\certificates"

os.makedirs(out_dir, exist_ok=True)
reader = PdfReader(src_pdf)
print(f"Total pages: {len(reader.pages)}")

for i, page in enumerate(reader.pages):
    writer = PdfWriter()
    writer.add_page(page)
    cert_id = f"cert-{i+1:02d}.pdf"
    out_path = os.path.join(out_dir, cert_id)
    with open(out_path, "wb") as f:
        writer.write(f)
    print(f"Written page {i+1} to {cert_id}")

print("All 13 certificates split successfully!")
