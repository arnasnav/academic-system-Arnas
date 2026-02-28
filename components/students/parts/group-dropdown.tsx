import { IGroup } from "@/types/group-t"
import { getApi } from "@/utils/server-api"
import { useEffect, useState } from "react"

type IProps = { setGroupId: (s: string) => void }

export function GroupDropdown(props: IProps) {
  const { setGroupId } = props
  const [groups, setGroups] = useState<IGroup[]>([])
  
  useEffect(() => {
    getApi<IGroup[]>(`/api/groups`)
      .then((r) => setGroups(r ?? []))
      .catch((e) => console.error(e))
  }, [])

  return (
    <div className="grid grid-flow-col gap-x-2 justify-start">
      <label htmlFor="group" className="text-sm font-medium text-gray-900">
        Select Group
      </label>
      <select
        onChange={(e) => setGroupId(e.target.value || "")}
        id="group"
        className="w-28 bg-gray-50 col-span-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1"
      >
        <option value="">---</option>
        {groups.map((group) => (
          <option key={group._id} value={group._id}>
            {group.name}
          </option>
        ))}
      </select>
    </div>
  )
}