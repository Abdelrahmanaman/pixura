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
    <div className="mt-20 grid place-content-center space-y-6 text-white md:mt-60">
      <div className="mx-auto min-w-[24rem] rounded-3xl border border-transparent p-4 shadow-sm shadow-stone-800 md:bg-primary/60 md:p-10">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to sign in to your account
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@example.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
        </Form>
        <div className="mt-4 flex items-center justify-between px-px text-sm text-muted-foreground">
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
