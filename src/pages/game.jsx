import Board from "@/components/board/Board";
import styles from '@/styles/Home.module.css'

export default function game(){
    return(
        <div className={styles.centerGame}>
            <Board></Board>
        </div>
        
    )
}