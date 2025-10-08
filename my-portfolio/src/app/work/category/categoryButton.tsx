export const CategoryButton = ({category}: {category: string}) => {
    return (
    <button onClick={(e) => console.log(e)} className="lg:px-4 lg:py-2 py-2 cursor-pointer text-lg font-bold px-4 hover:border-[var(--primary)] border-[var(--secondary)] border-1 transition-all duration-200 text-[var(--primary)] w-fit rounded-md">
    {category}
    </button>   
    )
}

