import Image from "next/image"
import { Logo } from "@/components/logo"
import { WaitlistForm } from "@/components/waitlist-form"
import { SocialProof } from "@/components/social-proof"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 w-full">
        <div className="flex flex-col justify-between p-6 md:p-12 lg:p-16 w-full">
          <Logo />
          <div className="my-auto max-w-xl space-y-8">
            <div className="space-y-4">
              <div className="w-fit rounded-full bg-muted/60 px-4 py-1.5 text-xs sm:text-sm">
                LAUNCHING NOV 24TH 2024
              </div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Ready to launch your product, course or app?
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground md:text-lg">
                Publish your own waitlist page in minutes to start capturing email addresses from potential customers
                and promoting your launch online.
              </p>
            </div>
            <WaitlistForm />
            <SocialProof />
          </div>
          <div className="text-xs sm:text-sm text-muted-foreground">© 2024 Waita. All rights reserved.</div>
        </div>
        <div className="relative hidden lg:block p-6 md:p-8 lg:p-12 w-full">
          <div className="relative h-full w-full overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1545558014-8692077e9b5c"
              alt="Mountain landscape at sunset"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

