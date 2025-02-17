"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const fadeInVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

const slideUpVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 w-full">
        <div className="flex flex-col justify-between p-6 md:p-12 lg:p-16 w-full">
          <motion.div
            className="flex justify-between items-center"
            variants={fadeInVariants}
            initial="initial"
            animate="animate"
          >
            <Logo />
            <ThemeToggle />
          </motion.div>

          <motion.div
            className="my-auto max-w-xl space-y-8"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div className="space-y-4" variants={containerVariants}>
              <motion.h1
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
                variants={slideUpVariants}
              >
                Track life's important moments right from your Mac's menu bar
              </motion.h1>
              <motion.p className="text-sm sm:text-base text-muted-foreground md:text-lg" variants={slideUpVariants}>
                Simple, elegant countdown tracking for birthdays, anniversaries, and special events - always visible at
                a glance.
              </motion.p>
            </motion.div>

            <motion.div variants={slideUpVariants}>
              <Button size="lg" className="w-full sm:w-auto">
                Download for Mac
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-xs sm:text-sm text-muted-foreground flex justify-between items-center"
            variants={fadeInVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.2 }}
          >
            <span>© 2024 Momentry. All rights reserved.</span>
            <a href="mailto:virtualhenry@gmail.com?subject=Momentry Support" className="hover:underline">
              Support
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative hidden lg:block p-6 md:p-8 lg:p-12 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-3xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web%20image-IFwOIC1cii4jaQyJhiaNgTUYeoyf0q.png"
              alt="Momentry app interface showing countdown timers"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

