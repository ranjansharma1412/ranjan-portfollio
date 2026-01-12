
interface ISingleProduct {
    productData: any
}
const SingleProduct = ({ productData }: ISingleProduct) => {
    return (
        <div className='flex flex-col gap-2'>
            <img src={productData?.imgPath} className='mb-8' />
            <p className="text-left">{productData?.name}</p>
            <div className='flex flex-row items-start content-center'>
            </div>
            <p className="text-left">{productData?.price}</p>
        </div>
    )
}

export default SingleProduct