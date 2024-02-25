function Home() {
    return (
        <>
            <div className="leftcontainer">
                <div className="techstackcontainer">
                    <div className="tittlebox">
                        <h1>Tech Stack</h1>
                    </div>
                    <div className="contentbox">
                        <div className="langchainbox contentinner">
                            <div className="imagebox">
                                <img src="./langchain.png" alt="" />
                            </div>
                            <div className="textbox">
                                <h1>Langchain</h1>
                            </div>
                        </div>
                        <div className="huggingfacebox contentinner">
                            <div className="imagebox">
                                <img src="./huggingface.png" alt="" />
                            </div>
                            <div className="textbox">
                                <h1>Hugging Face</h1>
                            </div>
                        </div>
                        <div className="flaskbox contentinner">
                            <div className="imagebox">
                                <img src="./flask.png" alt="" />
                            </div>
                            <div className="textbox">
                                <h1>Flask</h1>
                            </div>
                        </div>
                        <div className="gradiobox contentinner">
                            <div className="imagebox">
                                <img src="./gradio.png" alt="" />
                            </div>
                            <div className="textbox">
                                <h1>Gradio</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flashbox">
                        <div className="flashcontent contentinner">
                            <div className="imagebox">
                                <img src="./flash.png" alt="" />
                            </div>
                            <div className="textbox">
                                <h4>Chat with SOVA</h4>
                            </div>
                            <button className="btn">SOVA</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="middlecontainer">
                <div className="maincontainer">
                    <div className="maininner">
                        <div className="mainleft">
                            <div class="tittle1">
                                <h1>Team Neptune's</h1>
                            </div>
                            <div class="tittle2">
                                <h1>Dynamic AI</h1>
                            </div>
                            <div class="description">
                                Developed with a focus on environmental and social impact, Sova aims to engage users in meaningful conversations about sustainability, climate action, and responsible living. </div>
                        </div>
                        <div className="mainright">
                            <img src="./bigimage.png" alt="" />
                        </div>
                    </div>
                </div>
                <div class="featurecontainer">
                    <div className="featureinner">
                        <div class="tittlebox">
                            <h1>Best Features</h1>
                        </div>
                        <div className="featuregrid">
                            <div className="feature1 featurebox">
                                <div className="featureboxleft">
                                    <span>Accessibility</span>
                                </div>
                                <div className="featureboxright">
                                    <img src="./accessibility.png" alt="" />
                                </div>
                            </div>
                            <div className="feature2 featurebox">
                                <div className="featureboxleft">
                                    <span>Flexibility</span>
                                </div>
                                <div className="featureboxright">
                                    <img src="./flexibility.png" alt="" />
                                </div>
                            </div>
                            <div className="feature3 featurebox">
                                <div className="featureboxleft">
                                    <span>Instant Info Retrieval</span>
                                </div>
                                <div className="featureboxright">
                                    <img src="./instant.png" alt="" />
                                </div>
                            </div>
                            <div className="feature4 featurebox">
                                <div className="featureboxleft">
                                    <span>Natural Lang. Processing</span>
                                </div>
                                <div className="featureboxright">
                                    <img src="nlp.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightcontainer">
                <div className="chatcontainer">
                    {/* <iframe className="iframe" src="https://sneakybuzz-sneakysova.hf.space/" frameborder="0"></iframe> */}
                    <iframe class="chat-bot-container-iframe" height="100%" width="100%" frameborder="0" src="https://sneakybuzz-sneakysova.hf.space/"></iframe>
                    {/* <gradio-app src="https://spandana08-mygenaichatbot.hf.space"></gradio-app> */}
                </div>
            </div>
        </>
    )
}
export default Home;