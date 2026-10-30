function MiniCard({img, titulo}) {
    return(
        <>
            
                <div className="flex flex-col bg-green-800 rounded-sm overflow-hidden transition duration-300 ease-in-out hover:scale-105
            cursor-pointer max-h-60 aspect-375/300
            ">
                    <img 
                    src={img} 
                    alt={titulo}
                    className="aspect-375/250"
                    />

                    <p className="p-1">
                        {titulo}
                    </p>
                </div>
            
            
        </>
    )
}export default MiniCard