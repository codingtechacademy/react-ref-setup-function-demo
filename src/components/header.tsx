'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-background border-b px-8">
      <div className="container flex items-center justify-between h-16">
        <div className="text-xl font-bold">Demo</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Button variant="ghost" asChild>
                <Link href="/">Example 1</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild>
                <Link href="/script-injection">Example 2</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}