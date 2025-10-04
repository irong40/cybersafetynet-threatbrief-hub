import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255),
});

interface NewsletterFormProps {
  variant?: "default" | "inline";
}

const NewsletterForm = ({ variant = "default" }: NewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = emailSchema.parse({ email });
      
      // Simulate API call - in production, this would connect to your newsletter service
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Success! You're subscribed to the Threat Brief.", {
        description: "Check your inbox for the latest intelligence.",
      });
      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          required
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-accent hover:bg-accent/90 whitespace-nowrap"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe Now"}
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full"
        required
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/90"
      >
        {isSubmitting ? "Subscribing..." : "Subscribe Now"}
      </Button>
    </form>
  );
};

export default NewsletterForm;
