function TechStack() {
    return (
        <>
            <div className="leftContainer w-2/12 flex justify-center items-center">
                <div className="techstackContainer flex flex-col items-center rounded-md bg-slate-900 px-4 py-3 w-11/12">
                    <div className="tittleBox flex items-center justify-center">
                        <h1 className=" text-2xl font-bold text-gray-300 mt-2">Tech Stack</h1>
                    </div>
                    <div className="contentBox flex flex-col items-center w-full my-3 py-1 rounded-lg">
                        <div className="langchainBox techBox my-2 contentinner flex items-center rounded-xl py-2 px-2 cursor-pointer w-full mx-2">
                            <div className="imageBox flex justify-end items-center rounded-sm">
                                <img className="h-9" src="./langchain.png" alt="" />
                            </div>
                            <div className="textBox text-sm ml-2 text-gray-400">
                                <h1 id="techId" className="text-md">Langchain</h1>
                            </div>
                        </div>
                        <div className="huggingfaceBox techBox  my-2 contentinner flex items-center rounded-xl py-3 px-2 cursor-pointer w-full mx-2">
                            <div className="imageBox flex justify-end items-center rounded-sm">
                                <img className="h-7" src="./huggingface.png" alt="" />
                            </div>
                            <div className="textBox text-sm ml-2 text-gray-400">
                                <h1 id="techId" className="text-md">Hugging Face</h1>
                            </div>
                        </div>
                        <div className="flaskBox techBox  my-2 contentinner flex items-center rounded-xl py-3 px-2 cursor-pointer w-full mx-2 text-gray-400">
                            <div className="imageBox flex justify-end items-center rounded-sm">
                                <img className="h-5" src="./flask.png" alt="" />
                            </div>
                            <div className="textBox">
                                <h1 id="techId" className="text-md">Flask</h1>
                            </div>
                        </div>
                        <div className="gradioBox techBox  my-2 contentinner flex items-center rounded-xl py-3 px-2 cursor-pointer w-full mx-2">
                            <div className="imageBox flex justify-end items-center rounded-sm">
                                <img className="h-6" src="./gradio.png" alt="" />
                            </div>
                            <div className="textBox text-sm ml-2 text-gray-400">
                                <h1 id="techId" className="text-md">Gradio</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flashBox flex flex-col justify-center items-center">
                        <div className="flashContent contentinner flex flex-col items-center bg-black p-5 py-5 rounded-xl">
                            <div className="imageBox">
                                <img className="h-44" src="./flash.png" alt="" />
                            </div>
                            <div className="textBox text-sm ml-2 text-gray-400">
                                <h4 className="text-lg my-3 font-semibold">Chat with SOVA</h4>
                            </div>
                            <button id="techId" className="btn bg-orange-500 px-7 py-1 rounded-md text-white font-semibold">Sova</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechStack
