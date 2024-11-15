"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Separator } from "@/components/ui/separator";
import GoogleLogo from "./GoogleLogo";
import Link from "next/link";
import { loginSchema, LoginValues } from "@/lib/validation";
import { Sparkle } from "lucide-react";

export default function LoginForm() {
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginValues) {
    alert(JSON.stringify(data));
  }

  return (
    <div>
      <div className="rounded-3xl border border-transparent p-5 shadow-sm shadow-stone-800 md:mx-auto md:w-[26rem] md:bg-primary/60 md:px-5 md:py-10">
        <div className="mb-4 space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Sign in to{" "}
            <span className="after: relative after:absolute after:inset-0 after:top-5 after:-z-10 after:h-2 after:w-full after:bg-purple-800">
              Pixura
            </span>
          </h1>
          <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            Log-in and start creating your own art{" "}
            <Sparkle className="size-4 text-yellow-500" />
          </p>
        </div>

        <Button type="button" className="w-full space-x-2">
          <GoogleLogo style={{ width: "20px", height: "20px" }} />
          <span className="text-base font-medium">Google</span>
        </Button>
        <div className="my-4 flex items-center justify-center gap-4">
          <Separator className="w-32 bg-gradient-to-l from-zinc-700 via-primary to-zinc-950" />
          <span className="text-sm">Or</span>
          <Separator className="w-32 bg-gradient-to-r from-zinc-700 via-primary to-zinc-950" />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-5xl space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ml-2">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@example.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="ml-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="ml-2">Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="ml-2" />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
        </Form>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-x-12 gap-y-2 px-px text-sm text-muted-foreground">
          <p className="text-left">
            Don&apos;t have an account?{" "}
            <Link
              href="/"
              className="underline underline-offset-2 hover:text-muted-foreground/80"
            >
              Sign up
            </Link>
          </p>
          <Link
            className="underline underline-offset-2 hover:text-muted-foreground/80"
            href={"/reset-password"}
          >
            Forgot password
          </Link>
        </div>
      </div>
    </div>
  );
}
