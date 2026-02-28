import { IStudent } from "@/types/group-t"
import { deleteApi, getApi } from "@/utils/server-api"
import { useEffect, useState } from "react"

type IProps = { groupId: string }

export function StudentsTable(props: IProps) {
  const { groupId } = props
  const [students, setStudents] = useState<IStudent[]>([])

  const fetchStudents = () => {
    if (!groupId) {
      setStudents([])
      return
    }
    getApi<IStudent[]>(`/api/group-students/${groupId}`).then((r) =>
      setStudents(r ?? [])
    )
  }

  useEffect(() => {
    fetchStudents()
  }, [groupId])

  const handleDelete = async (studentId: string) => {
      await deleteApi(`/api/group-students`, studentId)
      fetchStudents()
  }

  return (
    <ul className="font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
      {students.map((student) => (
        <li
          key={student._id}
          className="px-4 py-2 border-b border-gray-200 rounded-t-lg flex justify-between items-center"
        >
            {student.firstName} {student.lastName}
          <button
            onClick={() => handleDelete(student._id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}