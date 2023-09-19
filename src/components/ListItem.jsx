export default function ListItem({data, deleteFunc}) {
  return (
    <li className="flex bg-gray-100 p-4 rounded mt-2">
        <span className="text-slate-800">{data.content}</span>
        <button onClick={() => deleteFunc(data.id)} className="ml-auto bg-red-600 h-6 w-6 rounded text-gray-50">X</button>
    </li>
  )
}