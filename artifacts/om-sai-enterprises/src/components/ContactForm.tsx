import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaWhatsapp } from "react-icons/fa";
import { SERVICES, WA_NUMBER } from "@/lib/constants";

const sanitize = (input: string): string =>
  input
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 2000);

const allowedServiceIds = SERVICES.map((s) => s.id) as [string, ...string[]];

const formSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, { message: "Name must be at least 2 characters." })
      .max(80, { message: "Name is too long." })
      .regex(/^[\p{L}\p{M}\s.''-]+$/u, {
        message: "Name contains invalid characters.",
      }),
    phone: z
      .string()
      .trim()
      .min(10, { message: "Please enter a valid phone number." })
      .max(20, { message: "Phone number is too long." })
      .regex(/^[+()\-\s\d]{10,20}$/, {
        message: "Please enter a valid phone number.",
      }),
    service: z.enum(allowedServiceIds, {
      message: "Please select a valid service.",
    }),
    message: z
      .string()
      .trim()
      .max(1000, { message: "Message is too long (max 1000 characters)." })
      .optional()
      .or(z.literal("")),
  })
  .strict();

const SAFE_WA_NUMBER = WA_NUMBER.replace(/\D/g, "");

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const safeName = sanitize(values.name);
    const safePhone = sanitize(values.phone);
    const safeMessage = values.message ? sanitize(values.message) : "";
    const serviceName = sanitize(
      SERVICES.find((s) => s.id === values.service)?.title || values.service,
    );

    const message = `Hello, I want to inquire about interior design services.
Name: ${safeName}
Phone: ${safePhone}
Service: ${serviceName}
Message: ${safeMessage || "N/A"}`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${SAFE_WA_NUMBER}?text=${encodedMessage}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="bg-card p-8 md:p-10 rounded-2xl shadow-xl border border-border/50">
      <div className="mb-8 text-center">
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">Book an Appointment</h3>
        <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-medium">Full Name <span className="text-destructive">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" className="bg-background/50 h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-medium">Phone Number <span className="text-destructive">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="+91 98765 43210" type="tel" className="bg-background/50 h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-medium">Select Service <span className="text-destructive">*</span></FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-background/50 h-12">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {SERVICES.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-medium">Message (Optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your project requirements..." 
                    className="resize-none bg-background/50 min-h-[120px]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full h-14 text-lg font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white gap-2">
            <FaWhatsapp className="w-6 h-6" />
            Send Inquiry on WhatsApp
          </Button>
        </form>
      </Form>
    </div>
  );
}
