'use client'

import { del, send } from "../api/todo";

export default function Home() {

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl">Todo</h1>
        <div className="my-5">
          <form className="flex flex-col" action={send}>
            <input id="todo" name="todo" className="border-2 border-black max-w-xs" type="text" placeholder="Add todo" />
            <button className="border-2 border-black p-2 bg-indigo-400 hover:bg-indigo-600 mt-4 max-w-xs">Add</button>
          </form>
        </div>
        <div className="my-5">
            <form className="flex flex-col" action={del}>
            <input id="task" name="task" className="border-2 border-black max-w-xs" type="text" placeholder="Delete ID" />
            <button className="border-2 border-black p-2 bg-red-400 hover:bg-red-600 mt-4 max-w-xs">Delete</button>
          </form>
        </div>
      </div>
    </>
  )
}
