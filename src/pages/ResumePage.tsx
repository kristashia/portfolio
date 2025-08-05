import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  return (
    <div className="pt-40 pb-16">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Header with Download Button */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Resume
            </span>
          </h1>
          <Button
            asChild
            size="lg"
            className="btn-hero transition-transform transform hover:scale-105 hover:shadow-[0_0_15px_#f472b6]"
          >
            <a href="/Kristashia_Murray_Resume.pdf" download="Kristashia_Murray_Resume.pdf">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </Button>
        </section>

        {/* Resume Image */}
        <section className="flex justify-center">
          <img
            src="/kristashia_murray_resume_preview.png"
            alt="Resume Preview"
            className="shadow-lg rounded-lg max-w-full border border-muted hover:shadow-[0_0_25px_#f472b6] transition-shadow"
          />
        </section>

      </div>
    </div>
  );
}
