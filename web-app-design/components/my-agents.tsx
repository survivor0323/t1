"use client"

import { Share2, Pencil, MoreVertical, Plus, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

const myAgents = [
  {
    name: "바이브코딩",
    initials: "바",
    color: "bg-blue-100 text-blue-700",
    description: "개발지식없이 간단한 웹/앱서비스를 만들 수 있게 해준다",
  },
  {
    name: "미식여행",
    initials: "미",
    color: "bg-orange-100 text-orange-700",
    description: "좋은데 같이 갈만한데 추천해주는 친구",
  },
  {
    name: "지수 마법사",
    initials: "지",
    color: "bg-sky-100 text-sky-700",
    description: "RSI, MACD, 볼린저 밴드로 주가 예측",
  },
  {
    name: "콘텐츠 기획자",
    initials: "콘",
    color: "bg-emerald-100 text-emerald-700",
    description: "유튜브, 블로그, SNS 콘텐츠 기획을 도와주는 AI",
  },
]

export function MyAgents() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-foreground">{"내 에이전트"}</h2>
          <button
            type="button"
            className="rounded-full p-0.5 text-muted-foreground hover:text-foreground"
            aria-label="정보"
          >
            <Info className="h-4 w-4" />
          </button>
        </div>
        <Button size="sm" className="gap-1.5 rounded-full">
          <Plus className="h-4 w-4" />
          {"새 에이전트"}
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        {myAgents.map((agent) => (
          <div
            key={agent.name}
            className="group flex items-center gap-4 rounded-xl border border-transparent bg-card px-5 py-4 transition-all hover:border-border hover:shadow-sm"
          >
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-bold ${agent.color}`}
            >
              {agent.initials}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-bold text-foreground">{agent.name}</h3>
              <p className="truncate text-sm text-muted-foreground">
                {agent.description}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
              <button
                type="button"
                className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
                aria-label="공유"
              >
                <Share2 className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
                aria-label="수정"
              >
                <Pencil className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
                aria-label="더보기"
              >
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
