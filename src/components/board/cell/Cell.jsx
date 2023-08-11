import styles from './Cell.module.css'

export default function Cell(props){
    return(
        <div className={props.black ? styles.cellBlack : styles.cellWhite} ></div> 
    )
}