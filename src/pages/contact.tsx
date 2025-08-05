import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formUrl =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd-MXuP6P3OPb8cbXpjGyxR6de0QFZIxGwx254CXbrjt-FTMw/formResponse";

    const googleFormData = new FormData();
    googleFormData.append("entry.638994687", formData.firstName); // first name
    googleFormData.append("entry.1653562103", formData.lastName); // last name
    googleFormData.append("entry.1526801182", formData.company);  // company
    googleFormData.append("entry.1339386969", formData.email);    // email
    googleFormData.append("entry.1586812766", formData.message);  // message

    try {
      await fetch(formUrl, {
        method: "POST",
        body: googleFormData,
        mode: "no-cors", // required for Google Forms
      });

      setIsSubmitted(true);
      setFormData({ firstName: "", lastName: "", company: "", email: "", message: "" });

      toast({
        title: "Message sent successfully!",
        description: "Your response has been recorded.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Could not submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-40 pb-16">
      <div className="container mx-auto px-6">
        <Card className="card-hover max-w-3xl mx-auto">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            {isSubmitted ? (
              <p className="text-green-600 text-center font-medium">
                Thank you! Your message has been sent.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
