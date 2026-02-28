"use client"
import { useState } from "react"
import { GroupDropdown } from "./parts/group-dropdown"
import { StudentsTable } from "./parts/students-table"

export function StudentList() {
  const [groupId, setGroupId] = useState<string>("")

  return (
    <div className="grid grid-flow-row gap-y-8 max-w-sm">
      <GroupDropdown setGroupId={setGroupId} />
      <StudentsTable groupId={groupId} />
    </div>
  )
}