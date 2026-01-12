import SingleProduct from "../singleProduct/SingleProduct"

interface IProductView {
    productList: any[],
    sectionTitle: string
}

const ProductView = ({ productList, sectionTitle }: IProductView) => {
    return (
        <div className="flex flex-col items-center mt-16">
            <div>
                <h2 className="font-bold text-3xl">{sectionTitle}</h2>
            </div>
            <div className="flex flex-row content-center gap-8 mt-14">
                {productList?.map((item, index) => {
                    return <SingleProduct productData={item} key={`${index}-${item.name}`} />
                })}
            </div>
            <div className="flex flex-row content-center">
                <button className="outline-1 px-10 py-2 rounded-full mt-10 outline-gray-400 shadow-lg shadow-gray-300">View All</button>
            </div>
        </div>
    )
}

export default ProductView