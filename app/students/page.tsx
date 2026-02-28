import { StudentList } from "@/components/students/student-list"

export default function GroupStudentsPage() {
  return (
    <div className="grid grid-flow-row gap-4">
      <h1 className="font-bold text-xl">Group students</h1>
      <StudentList />
    </div>
  )
}