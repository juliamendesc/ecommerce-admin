
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignOutButton, UserButton } from "@clerk/nextjs"

export default function ClientWrapper({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} >
            <SignedIn>
                <div className="flex justify-end p-4 gap-2">
                    <UserButton />
                    <SignOutButton />
                </div>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn
                    signInFallbackRedirectUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}
                    signUpFallbackRedirectUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}
                />
            </SignedOut>
            {children}
        </ClerkProvider>


    )
}