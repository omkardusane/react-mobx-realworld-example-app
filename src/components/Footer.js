import React from 'react';
import '../styles/footer.css';

export default class Footer extends React.Component {
    render() {
        var list1 = [
            { name:'About Us' , link:'#'},
            { name:'The Team' , link:'#'},
            { name:'The Food' , link:'#'}
        ];
        return (
            <div className="footer">
                <div className="footer-links-container">
                    <FooterList title="Omkar" list={list1} />
                    <FooterList title="Support" list={list1} />
                    
                    <div className="footer-logo"> Logo container </div>
                </div>
            </div>
        );
    }
}

const FooterList = (props)=>{
    /*  list me we expect 
     [ {name, link} ..]
    */
    let {title, list} = props;
    return(
        <div className="footer-links-list"> 
            <h3 className="footer-links-list-title"> {title} </h3>
            <hr style={{width:"30%", color:'yellow'}}/>
            <ul>
            { 
                list.map( 
                    (el,elIndex)=> <li><a key={elIndex} href={el.link}> {el.name} </a></li>
                )
            }
            </ul>
        </div>
    )
}