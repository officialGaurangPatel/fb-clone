import Story from "./Story"

const stories = [
    {
        name: "Gaurang Patel",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/zof"
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Jeff Bezos",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p"
    },
    {
        name: "Mark Zukerburg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf"
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy"
    }
]

function Stroies() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story) => {
                return <Story name={story.name} key={story.src}
                    profile={story.profile}
                    src={story.src}
                />
            })}
        </div>
    )
}

export default Stroies
