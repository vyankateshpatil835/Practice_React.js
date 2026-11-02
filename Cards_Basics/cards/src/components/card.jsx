import { Bookmark } from "lucide-react";

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <div className="brandlogo">
                    <div className="logo">
                        <img src={props.logo} alt={props.companyName} />
                    </div>
                    <div className="button">
                        <button>Save <Bookmark size={14} strokeWidth={1} /></button>
                    </div> 
                </div>
            </div>
            <div className="center">
                <h2>{props.companyName} <span>{props.datePosted}</span></h2>
                <h1>{props.post}</h1>
                <div className="tag">
                    <h5>{props.tags[0]}</h5>
                    <h5>{props.tags[1]}</h5>
                </div>
            </div>
            <div className="bottom">
                <div className="pay-loc">
                    <h4>{props.pay}</h4>
                    <span>{props.location}</span>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
   )
   }

export default Card;