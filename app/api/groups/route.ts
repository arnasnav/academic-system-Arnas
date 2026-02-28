import { Group } from "@/models/group-model"
import { NextResponse } from "next/server"

export async function GET() {
  const groups = await Group.find()
  return NextResponse.json(groups)
}