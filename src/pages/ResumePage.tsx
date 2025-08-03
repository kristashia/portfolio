import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/kristashia_resume_preview.png";
    link.download = "Kristashia_Murray_Resume.pdf";
    link.click();
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Resume</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A comprehensive overview of my professional experience and education.
          </p>
        </section>

        {/* Resume Image */}
        <section className="flex justify-center mb-12">
          <img 
            src="/kristashia_resume_preview.png" 
            alt="Resume Preview" 
            className="shadow-lg rounded-lg max-w-full border"
          />
        </section>

        {/* Download Resume at Bottom */}
        <div className="text-center">
          <Button 
            onClick={handleDownloadResume}
            size="lg" 
            className="btn-hero shadow-lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
