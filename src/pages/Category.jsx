 
const ExploreCategories = () => {

    const categories = [
        { src: "https://th.bing.com/th/id/OIP.e3Mo8cQZRzkEKhdvpZAaeAHaEK?pid=ImgDet&w=474&h=266&rs=1", title: "Horror Stories" },
        { src: "https://i.ytimg.com/vi/ozb_gKp-gUM/maxresdefault.jpg", title: "Children's Stories" },
        { src: "https://th.bing.com/th/id/OIP.0ukxyOyM8a5ED1qiUa2rZwHaFi?rs=1&pid=ImgDetMain", title: "Comedy" },
        { src: "https://th.bing.com/th/id/OIP.tE8qACZyjV4hQy4PD4YBygHaFb?rs=1&pid=ImgDetMain", title: "Documentary" },
        { src: "https://th.bing.com/th/id/OIP.JXm9QYiqDU_T-DRgiD-FbQHaFj?rs=1&pid=ImgDetMain", title: "Life" },
        { src: "https://th.bing.com/th/id/OIP.9mz2B2yGZkDqBOjfGKKu1AHaFE?rs=1&pid=ImgDetMain", title: "Islamic Stories" }
    ];

    return (
        <>
        <div className="mainDiv h-[100%] w-auto pb-4">
            <h1 className="inline-block text-3xl font-extrabold pl-14 mt-9">Explore Categories</h1>

            <div className="mainDivCategory w-auto flex flex-wrap pl-14 gap-10 pt-5">
                {categories.map((category, index) => (
                    <div key={index} className="catebox w-52 h-36 bg-black rounded-md">
                        <img src={category.src} alt={category.title} className="w-full h-full object-cover rounded-md" />
                        <h1 className=" mb-2 ml-2 text-black underline underline-offset-1 text-lg tracking-tighter font-bold">
                            {category.title}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
        </>);
};

export default ExploreCategories;
