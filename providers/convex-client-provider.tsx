"use client";

import { ReactNode } from "react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { Authenticated, AuthLoading, ConvexReactClient } from "convex/react";
import { Loading } from "@/components/auth/loading";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <html lang="en">
          <body className="antialiased">
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>

            {/* Convex Auth Flow */}
            <Authenticated>{children}</Authenticated>
            <AuthLoading>
              <Loading />
            </AuthLoading>
          </body>
        </html>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
