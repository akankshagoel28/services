import React from 'react'
import data from './data'
import services from './services'
import arrow from './ic_round-navigate-next.svg'
export default function CustomerDashboard() {
    return (
        <div className="main1">
            <div className="leftBar">
            </div>
            <div class="Box">
                <div className="projectBox">
                    <h2 className="intro">Welcome Back, <span style={{color:"#3F4AAF"}}>Customer 1</span></h2>
                    <p className="title">Ongoing Projects</p>
                    {data.map(projects => {
                        return (
                            <div className='projectBar'>
                                <div className="projectName">
                                    <span style={{fontWeight:"700"}}>Project</span> {projects.name}
                                    <div className='Bar'></div>
                                </div>
                                <div class="date">
                                    <p style={{fontWeight:"700"}}>Due By:</p>
                                    <p style={{fontWeight:"400"}}>{projects.date}</p>
                                </div>
                                <p className='status'>{projects.status}</p>
                                <div className='verticalBar'></div>
                                <div className="MemberChat">
                                    <div className="memberName">
                                        Team members
                                        <div>
                                            {projects.members.map(member =>
                                                <img src={`./${member}.png`} alt=""></img>)}
                                        </div>
                                    </div>
                                    <button className="chat">
                                        Chat
                                    </button>
                                </div>
                            </div>)
                    })}
                </div>
                <div>
                    <p className="title">Services</p>
                    <div className="serviceBox">
                        {services.map(service => {
                            return (
                                <div className="serviceTab" id={service.class} ><p>{service.name}</p>
                                    <div className="align"> 
                                        <a href="http://localhost:3000/service_details">View Details</a>
                                        <button className="customerPrice">{service.price}</button>
                                    </div>
                                </div>
                            )
                        })}
                        <button className="more"><img src={arrow} alt=""></img></button>
                    </div>
                </div>
            </div>
            <div className="rightBar">
            </div>
        </div>)
}