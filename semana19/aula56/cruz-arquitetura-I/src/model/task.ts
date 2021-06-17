export type taskData = {
   title: string,
   description: string,
   deadline: string,
   authorId: string
}

export type task = taskData & { id: string}

export type getTaskByIdInputDTO = {
   id: string
}

export type getTaskByIdOutputDTO = {
   id: string,
   title: string,
   description: string,
   deadline: string,
   status: string,
   authorId: string,
   authorNickname: string
}

export type taskWithUserInfo = {
   id: string,
   title: string,
   description: string,
   deadline: string,
   status: string,
   author_id: string,
   nickname: string
}