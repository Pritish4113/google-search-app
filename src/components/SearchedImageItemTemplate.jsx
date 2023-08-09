const SearchedImageItemTemplate = ({data}) => {
    console.log(data)
    return(
        <div className="flex flex-col py-3 cursor-pointer" onClick={() => window.open(data.image.contextLink)}>
            <div className="rounded-xl overflow-hidden bg-black/[0.03] h-[100px] md:h-[120px] lg:h-[140px] group-hover:shadow-c">
                <img className="h-full w-full object-contain" src={data.link} alt="img_search" />
            </div>
            <div className="text-[#70757a] text-sm pt-2">
                {data.displayLink}
            </div>
            <div className="truncate text-sm pt-1 text-[#3c4043] group-hover:underline">{data.title}</div>
        </div>
    );
};

export default SearchedImageItemTemplate;
