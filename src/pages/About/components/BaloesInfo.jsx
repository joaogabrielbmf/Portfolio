function BaloesInfo({img, text, alt}) {
    return(
        <>
            <div className="font-mono flex gap-2 rounded-sm text-homeText border border-homeText w-fit py-2 px-2">
                <img src={img} alt={alt} className="max-h-6 w-auto"/>
                <p className="px-2">{text}</p>
            </div>
        </>
    )
}export default BaloesInfo