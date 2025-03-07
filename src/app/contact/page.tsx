"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string().min(1, { message: "Message can't be empty" }),
  access_key: z.string(),
  subject: z.string(),
  botcheck: z.string(),
});

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      access_key: "1625a589-ba5f-40ea-8f44-b996946c7b56",
      subject: "Contact form submission on terper.dev",
      botcheck: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    mutation.mutate(values);
  };

  const mutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsLoading(false);
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      return response.json();
    },
    mutationKey: ["contact"],
    onSuccess: () => {
      form.reset();
      toast.success("Message sent successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <section className="max-w-5xl m-auto px-4 py-4 md:py-8 lg:py-16 flex flex-col gap-8">
      <h2 className="text-3xl">Contact</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <input
            type="hidden"
            value={form.watch("access_key")}
            {...form.register("access_key")}
          />
          <input
            type="hidden"
            value={form.watch("subject")}
            {...form.register("subject")}
          />
          <input
            type="checkbox"
            className="hidden"
            value={form.watch("botcheck")}
            {...form.register("botcheck")}
          />
          <Card>
            <CardHeader>
              <CardTitle>Contact me by filling out the form</CardTitle>
              <CardDescription>
                Or send me an email at{" "}
                <a
                  href="mailto:jann.totterman@gmail.com"
                  target="_blank"
                  className="hover:underline"
                >
                  jann.totterman@gmail.com
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                name={"name"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name={"email"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name={"message"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Sending
                  </>
                ) : (
                  "Send"
                )}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </section>
  );
};

export default Contact;
