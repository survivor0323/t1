"use client"

import {
  FileText,
  Image,
  Code,
  MessageCircle,
  Music,
  Globe,
  Calculator,
  BookOpen,
  Briefcase,
  Palette,
  GraduationCap,
  Heart,
  ShoppingCart,
} from "lucide-react"
import { useState } from "react"

const categories = [
  { name: "글쓰기", icon: FileText, color: "bg-blue-100 text-blue-600" },
  { name: "디자인", icon: Image, color: "bg-pink-100 text-pink-600" },
  { name: "개발", icon: Code, color: "bg-emerald-100 text-emerald-600" },
  { name: "대화", icon: MessageCircle, color: "bg-amber-100 text-amber-600" },
  { name: "음악", icon: Music, color: "bg-rose-100 text-rose-600" },
  { name: "번역", icon: Globe, color: "bg-cyan-100 text-cyan-600" },
  { name: "분석", icon: Calculator, color: "bg-indigo-100 text-indigo-600" },
  { name: "학습", icon: BookOpen, color: "bg-teal-100 text-teal-600" },
  { name: "비즈니스", icon: Briefcase, color: "bg-orange-100 text-orange-600" },
  { name: "창작", icon: Palette, color: "bg-fuchsia-100 text-fuchsia-600" },
  { name: "교육", icon: GraduationCap, color: "bg-sky-100 text-sky-600" },
  { name: "건강", icon: Heart, color: "bg-red-100 text-red-600" },
  { name: "쇼핑", icon: ShoppingCart, color: "bg-lime-100 text-lime-600" },
]

export function CategoryIcons() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => {
          const Icon = cat.icon
          const isSelected = selected === cat.name
          return (
            <button
              key={cat.name}
              type="button"
              onClick={() => setSelected(isSelected ? null : cat.name)}
              className={`flex shrink-0 flex-col items-center gap-2 rounded-xl px-3 py-3 transition-all ${
                isSelected
                  ? "bg-accent ring-1 ring-primary"
                  : "hover:bg-secondary"
              }`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-full ${cat.color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium text-foreground">{cat.name}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
