import { Header } from "@/components/header"
import { SearchBar } from "@/components/search-bar"
import { CategoryIcons } from "@/components/category-icons"
import { FeaturedAgents } from "@/components/featured-agents"
import { MyAgents } from "@/components/my-agents"
import { TrendingAgents } from "@/components/trending-agents"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        {/* Hero / Title */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {"AI Agent Hub"}
          </h1>
          <p className="mx-auto max-w-lg text-muted-foreground">
            {"커뮤니티에서 만들고 공유한 강력한 AI 에이전트를 만나보세요."}
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <SearchBar />
        </div>

        {/* Category Icons */}
        <div className="mb-10">
          <CategoryIcons />
        </div>

        {/* Featured Agents */}
        <div className="mb-10">
          <FeaturedAgents />
        </div>

        {/* My Agents */}
        <div className="mb-10">
          <MyAgents />
        </div>

        {/* Trending Agents */}
        <div className="mb-10">
          <TrendingAgents />
        </div>
      </main>
    </div>
  )
}
