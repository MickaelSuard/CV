import React, { Component } from 'react';



class Project extends Component {
    state = {
        showInfo: false
    }

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render() {
        let { name, languagesIcons, source, info,group, picture } = this.props.item;
        return (
            <div className='project'>
                <div className='icons'>
                    {languagesIcons.map(icon => <i className={icon} key={icon}></i>)}
                </div>
                <h3>{name}</h3>

                <img src={picture} alt="" onClick={this.handleInfo} />
                <span className='infos' onClick={this.handleInfo}>
                    <i className='fas fa-plus-circle' />
                </span>
                {this.state.showInfo && (

                    <div className={`showInfos ${this.state.showInfo ? 'active' : ''}`}>
                        <div className='infosContent'>
                            <div className='head'>
                                <h2>{name}</h2>
                                <div className='sourceCode'>
                                    <a href={source} rel="nooperner noreferrer" className='button' target='_blank'>Source</a>
                                </div>
                            </div>
                            <img src={picture} alt="" />
                            <p className='text'>{info}<br/><br/>{group}</p>
                            <div className='button return' onClick={this.handleInfo}>Retour</div>

                        </div>
                    </div>
                )
                }
            </div>
        );
    }
}

export default Project;