import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Phone, Mail, Clock } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "hello@storeforge.com",
          from: data.email,
          subject: `New Contact Form Submission from ${data.name}`,
          text: `
Name: ${data.name}
Email: ${data.email}
Company: ${data.company || "Not provided"}
Message: ${data.message}
          `.trim(),
          html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Company:</strong> ${data.company || "Not provided"}</p>
<p><strong>Message:</strong></p>
<p>${data.message.replace(/\n/g, "<br>")}</p>
`.trim(),
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");
      return response.json();
    },
    onSuccess: () => {
      form.reset();
      // ✅ Show success alert message
      toast({
        title: "Message Sent Successfully 🎉",
        description: "We have received your message and will get back to you shortly.",
      });
    },
     onError: (error) => {
    toast({
      title: "Error",
      description: error.message ?? "Something went wrong. Please try again.",
      variant: "destructive",
    });
  },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Info */}
          <div>
            <h2 className="text-4xl font-bold text-brand-gray mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to transform your business? Our team of e-commerce experts is here to help you succeed.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-red-light rounded-full flex items-center justify-center mr-4">
                  <Phone className="text-brand-red" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-brand-gray">Call us</div>
                  <div className="text-gray-600">+60 16-211 9099</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-red-light rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-brand-red" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-brand-gray">Email us</div>
                  <div className="text-gray-600">sales@bajgo.com</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-red-light rounded-full flex items-center justify-center mr-4">
                  <Clock className="text-brand-red" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-brand-gray">Support hours</div>
                  <div className="text-gray-600">24/7 - Always here for you</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <Card className="bg-brand-cream">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-brand-gray mb-6">Send us a message</h3>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" {...form.register("name")} />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" {...form.register("email")} />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" {...form.register("company")} />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={4} {...form.register("message")} />
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-red hover:bg-brand-red-dark text-white"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
