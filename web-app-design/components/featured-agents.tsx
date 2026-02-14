"use client"

import {
  BookOpen,
  Lightbulb,
  Trophy,
  Briefcase,
  MoreVertical,
} from "lucide-react"

const featuredAgents = [
  {
    name: "스토리텔러",
    description:
      "주제, 대상 독자, 장르를 기반으로 창의적인 이야기를 만들어 드립니다.",
    icon: BookOpen,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    badge: "추천",
  },
  {
    name: "브레인스토밍 도우미",
    description:
      "손쉽게 영감을 얻으세요. 모임, 프로젝트, 비즈니스를 위한 아이디어를 제안합니다.",
    icon: Lightbulb,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    badge: null,
  },
  {
    name: "프로젝트 매니저",
    description:
      "팀 프로젝트를 체계적으로 관리하고 일정을 추적하는 AI 어시스턴트입니다.",
    icon: Trophy,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    badge: "신규",
  },
  {
    name: "커리어 컨설턴트",
    description:
      "커리어를 발전시키세요. 역량을 강화하고 목표를 달성하기 위한 상세한 계획을 세워 보세요.",
    icon: Briefcase,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    badge: null,
  },
]

export function FeaturedAgents() {
  return (
    <section>
      <h2 className="mb-1 text-lg font-bold text-foreground">
        {"추천 에이전트"}
      </h2>
      <p className="mb-4 text-sm text-muted-foreground">
        {"사전 제작된 AI 에이전트를 바로 사용해 보세요"}
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featuredAgents.map((agent) => {
          const Icon = agent.icon
          return (
            <div
              key={agent.name}
              className="group relative flex cursor-pointer flex-col rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${agent.iconBg}`}
                  >
                    <Icon className={`h-5 w-5 ${agent.iconColor}`} />
                  </div>
                  {agent.badge && (
                    <span className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                      {agent.badge}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  className="rounded-full p-1 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:bg-secondary"
                  aria-label="더보기"
                >
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>
              <h3 className="mb-1.5 text-base font-bold text-foreground">
                {agent.name}
              </h3>
              <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {agent.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
