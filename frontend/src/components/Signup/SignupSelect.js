import React from 'react';


import styles from "./SignupSelect.module.css"

const SignupSelect = () => {
  
    
    return (
        <div className={styles.SignupSelect}>
        
        <div className={styles.header_box}>
            <div className={styles.header}>MPTI</div>
        </div>

        <div className={styles.select_form}>
            <div className={styles.select_title}>회원가입</div>
            <div className={styles.select_box}>
                    <div className={styles.select_list}>
                        <div className={styles.select_item1}><span className={styles.select_square1} >&#9654;</span>고객</div>
                        <div className={styles.select_item2}><span className={styles.select_square2}>&#9654;</span>트레이너</div>
                    </div>
            </div>
        </div>

        <div className={styles.select_btn_box}>
           <button className={styles.select_btn} >뒤로가기</button>
        </div>


        </div>
    );
};

export default SignupSelect;