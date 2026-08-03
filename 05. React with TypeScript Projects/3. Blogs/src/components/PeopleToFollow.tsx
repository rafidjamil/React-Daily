import UserCard from './UserCard'

type Person = {
  name: string
  following: boolean
}

const peopleToFollow: Person[] = [
  {name: "Alena Gouse", following: true},
  {name: "John Doe", following: false},
  {name: "Jane Smith", following: false},
  {name: "Bob Johnson", following: false}
]

const PeopleToFollow = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">People to follow</h3>
      <div className="space-y-4"></div>
      {peopleToFollow.map((person, index) => (
        <UserCard key={index} person={person} />
      ))}
    </div>
  )
}

export default PeopleToFollow