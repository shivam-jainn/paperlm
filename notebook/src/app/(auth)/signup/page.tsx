"use client";

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"

export default function Page() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
            Sign Up with your social account !
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          
          
          <Button type="submit" className="w-full" 
          onClick={() => {
            signIn("github")
          }}
          >
            Login with Github
          </Button>
          <Button variant="outline" className="w-full"
          onClick={() => {
            signIn("google")          
          }}
          >
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="#" className="underline">
            Log In
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
