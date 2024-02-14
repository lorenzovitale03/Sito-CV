const MainBar = () => {

    return (    
        <div className="whoAm">
        <div style={{ flex: '1' }}>
            <h1>
                Chi sono?
            </h1>
            <p>Mi chiamo Lorenzo Vitale e ho deciso di intraprendere la strada
                dello sviluppo web, nutrendo un forte interesse in questo settore.
                Diplomato il 30 giugno 2023 nel settore Elettrotecnico, ho deciso di mettermi
                in gioco e sperimentare nuove tecnologie sempre più innovative. Cerco lavoro e sono
                predisposto ad apprendere in maniera continuativa per crescere!
            </p>
        </div>
        <div style={{ marginLeft: '20px' }}>
            <img src="/avatar.png" alt="avatarFoto"/>
        </div>
    </div>
    )
}

export default MainBar