import MainC from "./MainC"
function MainComponent() {
    return (
        <>
            <div className="middlecontainer w-7/12 flex flex-col">
                <MainC />
                <div className="featurecontainer">
                    <div className="featureinner">
                        <div className="tittlebox">
                            <h1 className=" font-semibold">Best Features</h1>
                        </div>
                        <div className="featuregrid">
                            <div className="feature1 featurebox">
                                <div className="featureboxleft">
                                    <span className=" font-sans">Accessibility</span>
                                </div>
                                <div className="featureboxright">
                                    <img src="./accessibility.png" alt="" />
                                </div>
                            </div>
                            <div className="feature2 featurebox">
                                <div className="featureboxleft">
                                    <span className=" font-sans">Flexibility</span>
                                </div>
                                <div className="featureboxright">
                                    <img src="./flexibility.png" alt="" />
                                </div>
                            </div>
                            <div className="feature3 featurebox">
                                <div className="featureboxleft">
                                    <span className=" font-sans">Instant Info Retrieval</span>
                                </div>
                                <div className="featureboxright">
                                    <img src="./instant.png" alt="" />
                                </div>
                            </div>
                            <div className="feature4 featurebox">
                                <div className="featureboxleft">
                                    <span className=" font-sans">Natural Lang. Processing</span>
                                </div>
                                <div className="featureboxright">
                                    <img src="nlp.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainComponent
