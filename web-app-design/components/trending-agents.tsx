"use client"

import { Heart, TrendingUp } from "lucide-react"

const trendingAgents = [
  {
    name: "IdeaBrowser Pro",
    description: "비즈니스 아이디어를 분석하고 시장 인텔리전스를 제공하는 AI",
    author: "junaid lens",
    likes: "6.5k",
    rank: 1,
    avatarBg: "bg-indigo-600",
    avatarText: "IB",
  },
  {
    name: "NotebookLM Pro",
    description: "문서를 분석하고 핵심 인사이트를 추출하는 AI 연구 어시스턴트",
    author: "Sahil",
    likes: "5.3k",
    rank: 2,
    avatarBg: "bg-sky-600",
    avatarText: "NL",
  },
  {
    name: "TripMind",
    description: "맞춤형 여행 계획을 세우고 상세 비용을 예측하는 AI 트래블 도우미",
    author: "Himnish Immidi",
    likes: "4.0k",
    rank: 3,
    avatarBg: "bg-emerald-600",
    avatarText: "TM",
  },
  {
    name: "SmartSpend",
    description: "AI 기반 일일 지출 계산기. 지출을 기록하고 분석합니다.",
    author: "unknown",
    likes: "4.0k",
    rank: 4,
    avatarBg: "bg-teal-600",
    avatarText: "SS",
  },
  {
    name: "CycleCoach AI",
    description: "AI 기반 사이클링 코치. 속도를 분석하고 훈련 계획을 제안합니다.",
    author: "Sai Teja",
    likes: "4.0k",
    rank: 5,
    avatarBg: "bg-gray-600",
    avatarText: "CC",
  },
  {
    name: "YouTube Summary",
    description: "유튜브 영상의 핵심 내용을 요약하고 정리해주는 AI",
    author: "AI Research",
    likes: "3.7k",
    rank: 6,
    avatarBg: "bg-red-600",
    avatarText: "YS",
  },
]

export function TrendingAgents() {
  return (
    <section>
      <div className="mb-1 flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-bold text-foreground">{"트렌딩"}</h2>
      </div>
      <p className="mb-4 text-sm text-muted-foreground">
        {"사용량을 기준으로 가장 인기 있는 에이전트"}
      </p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {trendingAgents.map((agent) => (
          <div
            key={agent.name}
            className="group flex cursor-pointer items-start gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md"
          >
            <div className="relative shrink-0">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-card ${agent.avatarBg}`}
              >
                {agent.avatarText}
              </div>
              {agent.rank <= 3 && (
                <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {agent.rank}
                </span>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-bold text-foreground">{agent.name}</h3>
              <p className="mb-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                {agent.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {"by "}
                  {agent.author}
                </span>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Heart className="h-3.5 w-3.5" />
                  <span className="text-xs">{agent.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
