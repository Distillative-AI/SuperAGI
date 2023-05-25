import React, {useState} from 'react';
import styles from './Agents.module.css';
import Image from "next/image";

export default function Details({agent}) {
  const info_text = {
    marginLeft:'7px',
  }

  const info_text_secondary = {
    marginLeft:'3px',
    marginTop:'2px',
    color: '#888888',
    lineHeight: '13px',
    fontSize: '11px'
  }
  
  return (<>
    <div className={styles.history_box} style={{background:'#272335',padding:'20px',cursor:'default',height:'100%',overflowY:'scroll'}}>
      <div className={styles.detail_name}>{agent.name}</div>
      <div>{agent.description}</div>
      <div className={styles.separator}></div>
      <div style={{display:'flex',marginBottom:'5px',alignItems:'center',justifyContent:'flex-start',gap:'7.5%'}}>
        <div>
          <div className={styles.agent_info_box}>
            <div><Image width={12} height={12} src="/images/calls_made.png" alt="calls-icon"/></div>
            <div style={info_text_secondary}>Total Calls</div>
          </div>
          <div className={styles.feed_title} style={{fontSize:'20px',marginLeft:'0'}}>9.5k</div>
        </div>
        <div>
          <div className={styles.agent_info_box}>
            <div><Image width={12} height={12} src="/images/runs_made.png" alt="runs-icon"/></div>
            <div style={info_text_secondary}>Total Runs</div>
          </div>
          <div className={styles.feed_title} style={{fontSize:'20px',marginLeft:'0'}}>{agent.runs.length}</div>
        </div>
        <div>
          <div className={styles.agent_info_box}>
            <div><Image width={12} height={12} src="/images/tokens_consumed.png" alt="tokens-icon"/></div>
            <div style={info_text_secondary}>Tokens Consumed</div>
          </div>
          <div className={styles.feed_title} style={{fontSize:'20px',marginLeft:'0'}}>7.6k</div>
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.agent_info_box}>
        <div><Image width={15} height={15} src="/images/tools_dark.png" alt="tools-icon"/></div>
        <div style={info_text}>Tools assigned</div>
      </div>
      <div className={styles.agent_info_tools}>
        {agent.tools.map((tool, index) => (<div key={index} className="tool_container" style={{marginTop:'0',marginBottom:'5px'}}>
          <div className={styles.tool_text}>{tool}</div>
        </div>))}
      </div>
      <div className={styles.separator}></div>
      <div className={styles.agent_info_box}>
        <div><Image width={15} height={15} src="/images/flag.png" alt="goals-icon"/></div>
        <div style={info_text}>{agent.goal.length} Goals</div>
      </div>
      <div className={styles.agent_info_box}>
        <div><Image width={15} height={15} src="/images/fact_check.png" alt="queue-icon"/></div>
        <div style={info_text}>{agent.agent_type}</div>
      </div>
      <div className={styles.agent_info_box}>
        <div><Image width={15} height={15} src="/images/deployed_code.png" alt="model-icon"/></div>
        <div style={info_text}>{agent.model}</div>
      </div>
      {/*<div className={styles.agent_info_box}>*/}
      {/*  <div><Image width={15} height={15} src="/images/cancel_presentation.png" alt="exit-icon"/></div>*/}
      {/*  <div style={info_text}>{agent.exit}</div>*/}
      {/*</div>*/}
      <div className={styles.agent_info_box}>
        <div><Image width={15} height={15} src="/images/close_fullscreen.png" alt="constraint-icon"/></div>
        <div style={info_text}>{agent.constraints.length} Constraints</div>
      </div>
      <div className={styles.agent_info_box}>
        <div><Image width={15} height={15} src="/images/overview.png" alt="window-icon"/></div>
        <div style={info_text}>{agent.window} {agent.window_unit}</div>
      </div>
      <div className={styles.agent_info_box}>
        <div><Image width={15} height={15} src="/images/key.png" alt="permission-type-icon"/></div>
        <div style={info_text}>{agent.permission_type.replace(/\s*\([^)]*\)/g, '')}</div>
      </div>
    </div>
  </>)
}