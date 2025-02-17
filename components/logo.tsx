import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/momentry-128-ULexQA6mcwSwMRsCh4M5YtMFk3k0n4.png"
        alt="Momentry logo"
        width={32}
        height={32}
        className="rounded-xl"
      />
      <span className="text-xl font-bold">Momentry</span>
    </div>
  )
}

