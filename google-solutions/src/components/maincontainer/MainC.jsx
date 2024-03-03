
function MainC() {
    return (
        <>
            <div className="mainContainer w-full p-5 flex my-3">
                <div className="mainInner flex flex-row pl-3">
                    <div className="mainLeft my-10 w-4/6">
                        <div className="tittleOne w-full py-2">
                            <h1 className="text-5xl">Neptune&apos;s</h1>
                        </div>
                        <div className="tittleTwo w-full py-2">
                            <h1 className="text-7xl">Dynamic AI</h1>
                        </div>
                        <div className="descriptionBelow text-lg my-3 w-11/12">
                            Developed with a focus on environmental and social impact, Sova aims to engage users in meaningful conversations about sustainability, climate action, and responsible living. </div>
                    </div>
                    <div className="mainRight w-2/6 flex items-center justify-start">
                        <img className="h-64" src="./chatbot2.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainC
