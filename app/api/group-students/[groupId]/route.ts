import { GroupStudent } from "@/models/group-student-model"
import { NextRequest, NextResponse } from "next/server"

export async function GET(_request: NextRequest, { params }: { params: Promise<{ groupId: string }> }) {
  const { groupId } = await params
  const students = await GroupStudent.find({ groupId })
  return NextResponse.json(students)
}

export async function DELETE({ params }: { params: Promise<{ groupId: string }> }) {
  const { groupId: studentId } = await params
  await GroupStudent.findByIdAndDelete(studentId)
  return NextResponse.json({ message: "Student deleted" })
}