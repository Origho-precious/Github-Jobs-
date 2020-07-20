import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './jobs.module.css';
import { Context } from '../context';

class Jobs extends Component{
    renderJobs = (Jobs, setSelected, setDate) => {
        if(Jobs.length === 0){
            return(
                <h1>No Job found</h1>
            )
        }

        return Jobs.map(job => {
            const currentTime = new Date();
            const jobTime = new Date(job.created_at);
            const diff = currentTime - jobTime;

            const date = Math.floor(diff / 1000 / 60 / 60 / 24)
            return (
                <Link 
                    to="/job"
                    key={job.id}
                    className={styles.Link}
                    onClick={() => {
                        setSelected(job)
                        setDate(date)
                    }}
                >
                    <div className={styles.job}>
                        <div>
                            <img src={job.company_logo ? job.company_logo : null} alt="logo"/>
                            <div className={styles.details}>
                                <p>{job.company}</p>
                                <h3>{job.title}</h3>
                                {job.type ? <span>Full time</span> : null}
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <p className={styles.location}><i className="fas fa-globe-americas"></i> {job.location}</p>
                            <p className={styles.date}><i className="far fa-clock"></i> {`${date} days ago`}</p>
                        </div>
                    </div>
                </Link>
            )
        })
    }

    render(){
        return(
            <Context.Consumer>
                {(context) => (
                    <div className={styles.Jobs}>
                        {context.state.result ? 
                            this.renderJobs(context.state.result, context.setSelected, context.setDate) : <h1>{context.state.error}</h1>
                        }
                    </div>
                )}
            </Context.Consumer>
        )
    }
}

export default Jobs;