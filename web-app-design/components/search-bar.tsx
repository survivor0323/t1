"use client"

import { Search, Mic, ArrowRight } from "lucide-react"
import { useState } from "react"

export function SearchBar() {
  const [query, setQuery] = useState("")

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="group relative flex items-center rounded-2xl border border-border bg-card px-4 py-3 shadow-sm transition-shadow hover:shadow-md focus-within:shadow-md focus-within:ring-1 focus-within:ring-ring">
        <Search className="mr-3 h-5 w-5 shrink-0 text-muted-foreground" />
        <input
          type="text"
          placeholder="에이전트를 검색하세요..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="음성 검색"
          >
            <Mic className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="검색"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
