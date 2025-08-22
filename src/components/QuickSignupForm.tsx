import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Define the signup form schema
const vendorSignupSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  businessName: z.string().min(1, "Business name is required"),
  phone: z.string().min(1, "Phone number is required"),
});

type VendorSignupData = z.infer<typeof vendorSignupSchema>;

export default function QuickSignupForm() {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<VendorSignupData>({
    resolver: zodResolver(vendorSignupSchema),
    defaultValues: {
      email: "",
      businessName: "",
      phone: "",
    },
  });

  const signupMutation = useMutation({
    mutationFn: async (data: VendorSignupData) => {
      // Send signup data and trigger email
      const response = await fetch("/api/send-signup-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: data.email,
          businessName: data.businessName,
          phone: data.phone,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to process signup");
      }

      return response.json();
    },
    onSuccess: () => {
      setIsDialogOpen(true);
      form.reset();
    },
   onError: (error) => {
    toast({
      title: "Error",
      description: error.message ?? "Something went wrong. Please try again.",
      variant: "destructive",
    });
  },
  });

  const onSubmit = (data: VendorSignupData) => {
    signupMutation.mutate(data);
  };

  return (
    <section className="bg-brand-cream py-12" data-testid="signup-form">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="w-full shadow-xl">
          <CardContent className="pt-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-brand-gray mb-4" data-testid="signup-title">
                Start Your Free Trial Today
              </h2>
              <p className="text-lg text-gray-600" data-testid="signup-subtitle">
                Join thousands of successful vendors already using StoreForge
              </p>
            </div>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid md:grid-cols-4 gap-4 items-end">
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-brand-gray mb-2">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...form.register("email")}
                  className="focus:ring-2 focus:ring-brand-red"
                  data-testid="input-email"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1" data-testid="error-email">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="businessName" className="text-sm font-medium text-brand-gray mb-2">
                  Business Name
                </Label>
                <Input
                  id="businessName"
                  type="text"
                  placeholder="Your Store Name"
                  {...form.register("businessName")}
                  className="focus:ring-2 focus:ring-brand-red"
                  data-testid="input-business-name"
                />
                {form.formState.errors.businessName && (
                  <p className="text-red-500 text-sm mt-1" data-testid="error-business-name">
                    {form.formState.errors.businessName.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-brand-gray mb-2">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  {...form.register("phone")}
                  className="focus:ring-2 focus:ring-brand-red"
                  data-testid="input-phone"
                />
                {form.formState.errors.phone && (
                  <p className="text-red-500 text-sm mt-1" data-testid="error-phone">
                    {form.formState.errors.phone.message}
                  </p>
                )}
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="bg-brand-red hover:bg-brand-red-dark text-white shadow-lg"
                disabled={signupMutation.isPending}
                data-testid="button-get-started"
              >
                {signupMutation.isPending ? "Creating..." : "Get Started Free"}
              </Button>
            </form>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              By signing up, you agree to our{" "}
              <a href="#" className="text-brand-red hover:underline">Terms of Service</a>{" "}
              and{" "}
              <a href="#" className="text-brand-red hover:underline">Privacy Policy</a>
            </p>
          </CardContent>
        </Card>

        {/* Success Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-brand-gray text-center">
                Thank You for Signing Up!
              </DialogTitle>
              <DialogDescription className="text-lg text-gray-600 text-center mt-4">
                Your account will be activated within 2 hours and you will receive 
                the activation email to continue.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center mt-6">
              <Button 
                onClick={() => setIsDialogOpen(false)}
                className="bg-brand-red hover:bg-brand-red-dark text-white"
              >
                Continue
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}