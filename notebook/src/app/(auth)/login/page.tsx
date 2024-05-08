"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signIn } from "next-auth/react";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Card className="">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">Login</CardTitle>
          <CardDescription>
            Log in with your social accounts!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Button
              type="submit"
              className="w-full bg-gray-800 text-white hover:bg-gray-700 transition duration-300 ease-in-out"
              onClick={() => {
                signIn("github");
              }}
            >
              Login with Github
            </Button>
            <Button
              variant="outline"
              className="w-full border border-gray-800 text-gray-800 hover:bg-gray-100 hover:border-gray-700 transition duration-300 ease-in-out"
              onClick={() => {
                signIn("google");
              }}
            >
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Dont have an account?{" "}
            <Link href="#" className="underline text-blue-500">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
