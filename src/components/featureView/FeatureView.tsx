import BrandBoard from "../brandboard/BrandBoard"

const FeatureView = () => {
    return (
        <>
            <div className="flex flex-row flex-wrap w-full relative group overflow-hidden bg-red-300">
                <div className="w-full">
                    <img src="src/assets/Rectanglmg.png" className="w-full object-cover" />
                </div>
                <div className="absolute top-20 left-20 max-w-md flex-col items-start flex">
                    <h3 className="text-5xl font-extrabold uppercase max-w-120 text-left text-black">FIND CLOTHES THAT MATCHES YOUR STYLE</h3>
                    <p className="mt-5 text-left text-black">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <button className="px-6 py-2 rounded-full bg-black text-white self-start my-8">Shop Now</button>
                </div>
            </div>
            <BrandBoard />
        </>

    )
}

export default FeatureView