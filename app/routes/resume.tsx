import { useParams,Link } from "react-router"

const Resume = () => {
    const{id} = useParams();


  return (
    <div>
        <main className="!pt-0">
            <nav className="resume-nav">
                <Link to="/" className="back-button">
                <img src="/icons/back.svg" alt="logo" className="w-2.5 h-2.5"/>
                <span className="text-gray-800 text-sm font-semibold"> Back to Homepage</span>
                </Link>
            </nav>
            <div>
                <section>
                    
                </section>
            </div>
        </main>
    </div>
  )
}

export default Resume