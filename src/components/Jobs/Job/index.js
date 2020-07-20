import React from 'react';
import styles from './job.module.css';
import { Context } from '../../context';
import {Link} from 'react-router-dom';

const Job = () => {
    const renderJob = (state) => {
        if(state.selected){
            return(
                <div className={styles.details}>
                    <div>
                        <Link to="/" className={styles.Link}><i className="fas fa-arrow-left"></i> &nbsp; Back to Search</Link>
                        <h3 className={styles.heading}>HOW TO APPLY</h3>
                        <span dangerouslySetInnerHTML={{ __html: state.selected.how_to_apply }}></span>
                    </div>
                    <div>
                        <div className={styles.title}>
                            <div className={styles.description}>
                                <h3>{state.selected.title}</h3>
                                {state.selected.type ? <span>Full Time</span> : null}
                            </div>
                            <p className={styles.time}><i className="far fa-clock"></i>&nbsp; {`${state.date} days ago`}</p>
                            <div className={styles.info}>
                                {state.selected.company_logo ? <img src={state.selected.company_logo} alt="logo"/> : null}
                                <div>
                                    <p>{state.selected.company}</p>
                                    <p className={styles.location}><i className="fas fa-globe-americas"></i>&nbsp; {state.selected.location}</p>
                                </div>
                            </div>
                        </div>
                        <span dangerouslySetInnerHTML={{ __html: state.selected.description }}></span>
                    </div>
                </div>
            )
        }

        return(
            <div className={styles.noJob}>
                <Link to="/" className={styles.Link}><i className="fas fa-arrow-left"></i> &nbsp; Page is blank! Back to Search</Link>
            </div>
        )
    }

    return(
        <div className={styles.Job}>
            <h2 className={styles.title}>Github <span>Jobs</span></h2>
            <Context.Consumer>
                {({state}) => renderJob(state)}
            </Context.Consumer>
        </div>
    )
}

export default Job;