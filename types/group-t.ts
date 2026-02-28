export interface IGroup {
  _id: string
  name: string
}

export interface IStudent {
  _id: string
  firstName: string
  lastName: string
  groupId: string
}