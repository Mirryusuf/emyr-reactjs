export default function Skills () {
    return(
        <div className="container py-5">
            <div className="header text-center">
                <h2 className="fw-bold">Biografi</h2>
                <p className="py-3 fs-5">Perkenalkan, saya Muhamad Amir Rudin Yusup, lulusan rekayasa perangkat lunak dari SMK Telkom Jakarta.</p>
            </div>
            <div className="row">
                <div className="col-lg-4 mb-3">
                    <div className="list-group">
                        <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
                            Technical Skills
                        </button>
                        <button type="button" className="list-group-item list-group-item-action">PHP</button>
                        <button type="button" className="list-group-item list-group-item-action">Laravel</button>
                        <button type="button" className="list-group-item list-group-item-action">CodeIgniter</button>
                        <button type="button" className="list-group-item list-group-item-action">My SQL</button>
                        <button type="button" className="list-group-item list-group-item-action">JavaScript</button>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                        <div className="list-group">
                        <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
                            Personal Skills
                        </button>
                        <button type="button" className="list-group-item list-group-item-action">Team Work</button>
                        <button type="button" className="list-group-item list-group-item-action">Curious</button>
                        <button type="button" className="list-group-item list-group-item-action">Communication</button>
                        <button type="button" className="list-group-item list-group-item-action">Respectful</button>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                        <div className="list-group">
                        <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
                            Projects
                        </button>
                        <button type="button" className="list-group-item list-group-item-action">Mirresi</button>
                        <button type="button" className="list-group-item list-group-item-action">Lapor-Kuy</button>
                        <button type="button" className="list-group-item list-group-item-action">Data-Covid</button>
                    </div>
                </div>
            </div>
        </div>
    )
}